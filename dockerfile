# client build stage
FROM node:24-alpine AS client-builder

WORKDIR /client

COPY client/package.json ./
RUN yarn

COPY client .
RUN yarn build

# server build stage
FROM golang:1.25.6-alpine AS server-builder

ARG TARGETOS
ARG TARGETARCH

WORKDIR /server

COPY server/go.mod server/go.sum ./
RUN go mod download

COPY server .

RUN CGO_ENABLED=0 GOOS=${TARGETOS:-linux} GOARCH=${TARGETARCH:-amd64} go build -o main .

# Runtime stage
FROM alpine:latest

WORKDIR /app

COPY --from=server-builder --chmod=755 /server/main /app/main
COPY --from=client-builder --chmod=755 /client/dist /app/static

CMD ["/app/main"]