# FROM nginx:1.27-alpine
FROM nginx:latest

# Copy custom nginx config and auth file (create auth/.htpasswd before build)
RUN mkdir -p /etc/nginx/auth
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY auth/.htpasswd /etc/nginx/auth/.htpasswd

# Copy static site assets
COPY index.html app.js data.js /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY pages /usr/share/nginx/html/pages
COPY images /usr/share/nginx/html/images

EXPOSE 80
