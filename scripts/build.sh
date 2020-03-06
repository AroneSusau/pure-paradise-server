#! /bin/bash

# Remove previous build.
npm -s run clean

echo 'Building project..\n'

mkdir ./build

# Build webpack project
webpack ./webpack.config.js

echo 'Build Complete\n'
