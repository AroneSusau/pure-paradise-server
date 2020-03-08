#! /bin/bash

# Remove previous build.
npm -s run clean

# Set stage variable for socket address.
STAGE=$1

if [ -z "$STAGE" ]; then
  STAGE="development"
fi

echo 'Building project..\n'

mkdir ./build

# Build webpack project
webpack --config ./webpack.config.js src/server/server.ts --mode=$STAGE

echo 'Build Complete\n'
