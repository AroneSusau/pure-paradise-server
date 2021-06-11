#! /bin/bash

npm run build development

echo 'Starting server..\n'
node build/server.js
