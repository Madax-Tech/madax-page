package main

import (
	"log"
	"os"
	"server/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	r := gin.Default()
	r.Use(cors.Default())
	routes.SetupRoutes(r)

	log.Printf("Iniciando servidor HTTP na porta %s", port)
	r.Run(":" + port)

}
