#!/bin/sh

set -e

echo "🚀 Starting Laravel container..."

cd /var/www/html

# ===============================
# Wait for MySQL
# ===============================
# Check for reset flag (set RESET_APP=true to trigger full reset)
if [ "$RESET_APP" = "true" ]; then
    echo "⚠️  RESET_APP flag detected. Performing full reset..."

    # Remove database
    rm -f /var/www/html/database/database.sqlite

    # Remove seeded flag
    rm -f /var/www/html/storage/.seeded

    # Clear storage (but preserve directory structure)
    rm -rf /var/www/html/storage/framework/sessions/*
    rm -rf /var/www/html/storage/framework/views/*
    rm -rf /var/www/html/storage/framework/cache/*
    rm -rf /var/www/html/storage/logs/*
    rm -rf /var/www/html/storage/app/public/*

    echo "✅ Reset complete. Fresh database and storage will be created."
fi

# Ensure storage directories exist with proper permissions
mkdir -p /var/www/html/storage/framework/{sessions,views,cache}
mkdir -p /var/www/html/storage/logs
mkdir -p /var/www/html/storage/app/public
chown -R www-data:www-data /var/www/html/storage
chmod -R 775 /var/www/html/storage
# if [ -n "$DB_HOST" ]; then
#   echo "⏳ Waiting for MySQL at $DB_HOST:$DB_PORT..."

#   until nc -z -v -w30 "$DB_HOST" "${DB_PORT:-3306}"
#   do
#     echo "Waiting for database connection..."
#     sleep 3
#   done

#   echo "✅ Database is ready!"
# fi

# Generate app key if missing
# php artisan key:generate --force || true

# Run migrations (safe for production)
# echo "🚨 RUNNING MIGRATION NOW..."
# APP_ENV=local php artisan migrate:fresh
# APP_ENV=production php artisan db:seed --force

# Storage link
php artisan storage:link || true

# Ensure database directory and file exist
if [ ! -f /var/www/html/database/database.sqlite ]; then
    echo "Creating SQLite database..."
    touch /var/www/html/database/database.sqlite
fi

# Fix permissions for database directory to allow WAL creation
chown -R www-data:www-data /var/www/html/database
chmod -R 775 /var/www/html/database

# Enable WAL mode for better concurrency
sqlite3 /var/www/html/database/database.sqlite "PRAGMA journal_mode=WAL;"
sqlite3 /var/www/html/database/database.sqlite "PRAGMA synchronous=NORMAL;"
sqlite3 /var/www/html/database/database.sqlite "PRAGMA busy_timeout=30000;"

# ===============================
# Laravel Setup
# ===============================

echo "⚙️ Running Laravel setup..."

php artisan config:clear || true
php artisan cache:clear || true
php artisan route:clear || true
php artisan view:clear || true

# Run migrations
php artisan migrate --force

# Seed essential data on first run only (permissions, roles, superadmin)
if [ ! -f /var/www/html/storage/.seeded ]; then
    echo "First run detected. Seeding essential data..."
    php artisan db:seed --class=PermissionsFromRoutesSeeder --force
    php artisan db:seed --class=RoleSeeder --force

    # Create superadmin user via tinker
    php artisan tinker --execute="
        \$user = \\App\\Models\\User::firstOrCreate(
            ['email' => 'superadmin@karaventure.com'],
            ['name' => 'Super Admin', 'password' => bcrypt('password'), 'email_verified_at' => now()]
        );
        \$user->assignRole('superadmin');
        echo 'Superadmin user created/verified.';
    "

    touch /var/www/html/storage/.seeded
    echo "Essential data seeded successfully!"
fi

# Optimize
php artisan optimize

echo "Application is ready!"

# ===============================
# Start services
# ===============================

echo "🔥 Starting Supervisor..."

exec /usr/bin/supervisord -c /etc/supervisord.conf