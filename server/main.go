package main

import (
	"log"
	"server/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Use(cors.Default())
	routes.SetupRoutes(r)

	log.Printf("Iniciando servidor HTTP na porta %s", "8080")
	r.Run(":" + "8080")
}
