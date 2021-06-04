#! /bin/bash

# Remove previous build.
npm -s run clean

# Set stage variable for socket address.
STAGE=$1

if [ -z "$STAGE" ]; then
  STAGE="development"
fi

echo '\033[1;33m[RUNNING]\033[0m Building project'

mkdir ./build

# Build webpack project
# TODO: Revert back to original src when finishing testing
webpack --config ./webpack.config.js src/server/server.ts --mode=$STAGE --silent

echo '\n\033[1;32m[SUCCESS]\033[0m Build Complete'
