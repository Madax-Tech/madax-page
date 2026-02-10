package routes

import (
	"os"
	"path/filepath"
	"strings"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) *gin.Engine {

	staticPath := "./static"
	if envPath := os.Getenv("STATIC_PATH"); envPath != "" {
		staticPath = envPath
	}

	r.Static("/assets", filepath.Join(staticPath, "assets"))

	r.StaticFile("/favicon.png", filepath.Join(staticPath, "favicon.png"))
	r.StaticFile("/ads.txt", filepath.Join(staticPath, "ads.txt"))

	r.NoRoute(func(ctx *gin.Context) {
		if strings.HasPrefix(ctx.Request.URL.Path, "/api") {
			ctx.JSON(404, gin.H{"error": "Route not found"})
			return
		}

		ctx.File(filepath.Join(staticPath, "index.html"))
	})

	r.GET("/", func(ctx *gin.Context) {
		ctx.File(filepath.Join(staticPath, "index.html"))
	})

	return r
}
