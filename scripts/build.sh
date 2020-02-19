#! /bin/bash

# Remove previous build.
npm -s run clean

echo 'Building project..\n'
echo 'Parsing TypeScript..\n'

# Parse typescript.
tsc

cd src || exit

echo 'Copying Addition Files..\n'

# Copy css, html and other relevant files that dont require tsc parsing.
rsync -R $(find . \( -name '*.css' -or -name '*.html' -or -name '*.ico' \)) ../build/

echo 'Build Complete\n'
