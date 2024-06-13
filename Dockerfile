# Utilizamos la imagen de Node.js como base
FROM node:20

# Instalamos Angular CLI globalmente
RUN npm install -g @angular/cli@18

# Establecemos un directorio de trabajo para la aplicación
WORKDIR /app
