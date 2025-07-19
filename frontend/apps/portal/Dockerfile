# Stage 1: Build the Vite app
FROM node:20-alpine as builder

WORKDIR /app

COPY package*.json ./
COPY vite.config.* ./
COPY tsconfig.* ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:1.25-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 