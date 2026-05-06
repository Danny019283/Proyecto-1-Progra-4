#!/bin/sh

echo "⏳ Esperando a que MySQL esté listo en db:3306..."
while ! nc -z db 3306; do
  sleep 1
done
echo "✅ MySQL está listo"

echo "🔄 Aplicando migraciones..."
python manage.py migrate --noinput

echo "🚀 Iniciando servidor Django..."
exec "$@"