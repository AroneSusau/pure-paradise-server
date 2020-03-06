#! /bin/bash

# Remove previous build.
npm -s run clean

echo 'Building project..\n'

mkdir ./build

# Build webpack project
webpack --config ./webpack.config.js src/server/server.ts

echo 'Build Complete\n'
