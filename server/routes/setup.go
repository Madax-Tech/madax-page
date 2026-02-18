package routes

import (
	"net/http"
	"path/filepath"
	"strings"
)

func serveFile(staticPath, fileName string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, filepath.Join(staticPath, fileName))
	}
}

func SetupRoutes() {
	staticPath := "./dist"

	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir(filepath.Join(staticPath, "assets")))))
	http.Handle("/images/", http.StripPrefix("/images/", http.FileServer(http.Dir(filepath.Join(staticPath, "images")))))

	http.HandleFunc("/favicon.png", serveFile(staticPath, "favicon.png"))
	http.HandleFunc("/ads.txt", serveFile(staticPath, "ads.txt"))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if strings.HasPrefix(r.URL.Path, "/api") {
			w.WriteHeader(http.StatusNotFound)
			w.Header().Set("Content-Type", "application/json")
			w.Write([]byte(`{"error":"Route not found"}`))
			return
		}
		http.ServeFile(w, r, filepath.Join(staticPath, "index.html"))
	})
}
