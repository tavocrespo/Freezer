# === Construcción del Frontend ===
FROM node:20 as frontend

# Establece el directorio de trabajo para el frontend
WORKDIR /app/frontend

# Copia los archivos del proyecto React
COPY frontend/proyecto/ .

# Instala dependencias y construye la app
RUN npm install
RUN npm run build


# === Construcción del Backend ===
FROM php:8.2-fpm as backend

# Instala dependencias de PHP y extensiones necesarias para Laravel
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    curl \
    && docker-php-ext-install pdo pdo_mysql zip

# Instala Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Establece el directorio de trabajo para el backend
WORKDIR /var/www/html

# Copia los archivos del proyecto Laravel
COPY backend/proyecto/ .

# Instala las dependencias del backend
RUN composer install

# Da permisos a las carpetas de Laravel
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage

# === Configuración del Servidor ===
FROM nginx:1.25

# Copia los archivos de React al servidor Nginx
COPY --from=frontend /app/build /usr/share/nginx/html

# Copia los archivos de configuración de Laravel al servidor Nginx
COPY backend/nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80 para Nginx
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
