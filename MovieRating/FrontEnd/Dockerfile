FROM nginx:1.19-alpine

VOLUME ["/etc/nginx", "/usr/share/nginx/html", "/var/log/nginx"]

COPY nginx/config  /etc/nginx/
COPY build  /usr/share/nginx/html/

EXPOSE 80 443
