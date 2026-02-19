package routes

import (
	"encoding/json"
	"fmt"
	"net"
	"net/http"
	"net/mail"
	"net/smtp"
	"os"
	"strings"
	"sync"
	"time"
)

type leadRequest struct {
	Nome        string `json:"nome"`
	Email       string `json:"email"`
	Description string `json:"description"`
	Website     string `json:"website"`
}

var leadLimiter = newIPRateLimiter(3, 10*time.Minute)

func LeadHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		w.Header().Set("Allow", http.MethodPost)
		writeJSON(w, http.StatusMethodNotAllowed, map[string]string{"error": "Method not allowed"})
		return
	}

	ip := clientIP(r)
	if !leadLimiter.Allow(ip) {
		writeJSON(w, http.StatusTooManyRequests, map[string]string{"error": "Muitas tentativas. Tente novamente mais tarde."})
		return
	}

	var req leadRequest
	dec := json.NewDecoder(http.MaxBytesReader(w, r.Body, 1<<20))
	dec.DisallowUnknownFields()
	if err := dec.Decode(&req); err != nil {
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "Invalid JSON payload"})
		return
	}

	req.Nome = strings.TrimSpace(req.Nome)
	req.Email = strings.TrimSpace(req.Email)
	req.Description = strings.TrimSpace(req.Description)
	req.Website = strings.TrimSpace(req.Website)

	if req.Website != "" {
		writeJSON(w, http.StatusOK, map[string]string{"message": "Mensagem recebida"})
		return
	}

	if req.Nome == "" || req.Email == "" || req.Description == "" {
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "nome, email e description são obrigatórios"})
		return
	}
	if _, err := mail.ParseAddress(req.Email); err != nil {
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "Email inválido"})
		return
	}

	if err := sendLeadEmail(req); err != nil {
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "Falha ao enviar email"})
		return
	}

	writeJSON(w, http.StatusOK, map[string]string{"message": "Lead enviado com sucesso"})
}

func sendLeadEmail(req leadRequest) error {

	host := os.Getenv("SMTP_HOST")
	port := os.Getenv("SMTP_PORT")
	user := os.Getenv("SMTP_USER")
	pass := os.Getenv("SMTP_PASS")
	to := os.Getenv("LEAD_TO")

	if user == "" || pass == "" || to == "" {
		return fmt.Errorf("SMTP_USER, SMTP_PASS e LEAD_TO/SMTP_USER são obrigatórios")
	}

	var recipients []string
	for t := range strings.SplitSeq(to, ",") {
		addr := strings.TrimSpace(t)
		if addr == "" {
			continue
		}
		if _, err := mail.ParseAddress(addr); err != nil {
			return fmt.Errorf("destinatário inválido: %s", addr)
		}
		recipients = append(recipients, addr)
	}
	if len(recipients) == 0 {
		return fmt.Errorf("nenhum destinatário válido em LEAD_TO")
	}

	subject := fmt.Sprintf("[Lead] Novo contato de %s", req.Nome)
	body := strings.Join([]string{
		fmt.Sprintf("Nome: %s", req.Nome),
		fmt.Sprintf("Email: %s", req.Email),
		"",
		"Mensagem:",
		req.Description,
	}, "\r\n")

	msg := strings.Join([]string{
		fmt.Sprintf("From: %s", user),
		fmt.Sprintf("To: %s", strings.Join(recipients, ", ")),
		fmt.Sprintf("Reply-To: %s", req.Email),
		fmt.Sprintf("Subject: %s", subject),
		"MIME-Version: 1.0",
		"Content-Type: text/plain; charset=UTF-8",
		"",
		body,
		"",
	}, "\r\n")

	auth := smtp.PlainAuth("", user, pass, host)
	return smtp.SendMail(host+":"+port, auth, user, recipients, []byte(msg))
}

func writeJSON(w http.ResponseWriter, status int, payload any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(payload)
}

func clientIP(r *http.Request) string {
	if xff := strings.TrimSpace(r.Header.Get("X-Forwarded-For")); xff != "" {
		parts := strings.Split(xff, ",")
		return strings.TrimSpace(parts[0])
	}
	if xrip := strings.TrimSpace(r.Header.Get("X-Real-IP")); xrip != "" {
		return xrip
	}
	host, _, err := net.SplitHostPort(r.RemoteAddr)
	if err != nil {
		return r.RemoteAddr
	}
	return host
}

type ipRateLimiter struct {
	mu     sync.Mutex
	max    int
	window time.Duration
	hits   map[string][]time.Time
}

func newIPRateLimiter(max int, window time.Duration) *ipRateLimiter {
	return &ipRateLimiter{
		max:    max,
		window: window,
		hits:   make(map[string][]time.Time),
	}
}

func (l *ipRateLimiter) Allow(ip string) bool {
	now := time.Now()
	cutoff := now.Add(-l.window)

	l.mu.Lock()
	defer l.mu.Unlock()

	old := l.hits[ip]
	kept := old[:0]
	for _, t := range old {
		if t.After(cutoff) {
			kept = append(kept, t)
		}
	}

	if len(kept) >= l.max {
		l.hits[ip] = kept
		return false
	}

	l.hits[ip] = append(kept, now)
	return true
}
