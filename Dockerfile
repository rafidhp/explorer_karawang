# Stage 1: Build Frontend Assets (needs PHP for wayfinder plugin)
FROM php:8.4-cli-alpine AS frontend-builder

# Install Node.js, npm, and PHP extension dependencies
RUN apk add --no-cache nodejs npm \
    sqlite-dev libzip-dev oniguruma-dev icu-dev libxml2-dev \
    && docker-php-ext-install zip mbstring intl pdo pdo_sqlite

WORKDIR /app

# Copy composer files and install PHP dependencies first (for artisan commands)
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-autoloader --prefer-dist

# Copy package files and install npm dependencies
COPY package*.json ./
RUN npm ci

# Copy all Laravel files needed for the build
COPY . .

# Finish composer setup
RUN composer dump-autoload --optimize
RUN mkdir -p \
    storage/framework/cache/data \
    storage/framework/sessions \
    storage/framework/views \
    storage/logs \
    bootstrap/cache
RUN php artisan list
RUN php artisan wayfinder:generate --with-form

# Build assets
RUN npm run build

# Stage 2: PHP Application
FROM php:8.4-fpm-alpine AS production

# Install system dependencies
RUN apk add --no-cache \
    nginx \
    sqlite \
    supervisor \
    curl \
    bash \
    libpng \
    libjpeg-turbo \
    freetype \
    libzip

RUN apk add --no-cache --virtual .build-deps \
    sqlite-dev \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    libzip-dev \
    oniguruma-dev
    
# RUN apk add --no-cache \
#     nginx \
#     sqlite \
#     supervisor \
#     curl \
#     bash \
#     && apk add --no-cache --virtual .build-deps \
#         sqlite-dev \
#         libpng-dev \
#         libjpeg-turbo-dev \
#         freetype-dev \
#         libzip-dev \
#         oniguruma-dev \
#     && docker-php-ext-configure gd --with-freetype --with-jpeg \
#     && docker-php-ext-install \
#         pdo_sqlite \
#         gd \
#         mbstring \
#         zip \
#         bcmath \
#         opcache \
#     && apk del .build-deps

# RUN apk add --no-cache \
#     nginx \
#     sqlite \
#     sqlite-dev \
#     supervisor \
#     libpng-dev \
#     libjpeg-turbo-dev \
#     freetype-dev \
#     libzip-dev \
#     oniguruma-dev \
#     curl \
#     bash

# Install PHP extensions
# RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
#     && docker-php-ext-install \
#     pdo_sqlite \
#     gd \
#     mbstring \
#     zip \
#     bcmath \
#     opcache

# Install Composer
# COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copy application files
COPY --chown=www-data:www-data . .

# Copy built assets from frontend stage
COPY --from=frontend-builder --chown=www-data:www-data /app/public/build ./public/build

# Remove dev files
RUN rm -rf node_modules tests .git .github .docs

# Install production dependencies only
COPY --from=frontend-builder /app/vendor ./vendor

# Copy Docker configuration files
COPY .docker/nginx.conf /etc/nginx/http.d/default.conf
COPY .docker/supervisor.conf /etc/supervisor.d/app.ini
COPY .docker/php.ini /usr/local/etc/php/conf.d/custom.ini
COPY .docker/www.conf /usr/local/etc/php-fpm.d/www.conf
COPY .docker/entrypoint.sh /entrypoint.sh

# Set permissions
RUN chmod +x /entrypoint.sh \
    && chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Ensure database directory exists and is writable
RUN mkdir -p /var/www/html/database \
    && chown -R www-data:www-data /var/www/html/database \
    && chmod -R 775 /var/www/html/database

EXPOSE 80

ENTRYPOINT ["/entrypoint.sh"]