#! /bin/sh

npm run build development

echo "\033[1;32m[SUCCESS]\033[0m Starting server"
node build/server.js