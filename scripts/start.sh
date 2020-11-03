#! /bin/bash

# Starts node server
./clean.sh
./build.sh

echo 'Starting server..\n'
node build/server.js
