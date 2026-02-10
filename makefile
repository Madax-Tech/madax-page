build:
	docker-compose down
	docker-compose build --no-cache
	docker-compose up -d --force-recreate

down:
	docker-compose down