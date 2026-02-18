package main

import (
	"log"
	"net/http"
	"os"
	"server/routes"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	routes.SetupRoutes()

	log.Printf("Iniciando servidor HTTP na porta %s", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
