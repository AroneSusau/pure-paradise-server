#! /bin/bash

# Remove previous build.
npm -s run clean

echo 'Building project..\n'
echo 'Parsing TypeScript..\n'

# Parse typescript.
tsc

cd src || exit

echo 'Copying Additional Files..\n'

# Copy css, html and other relevant files that dont require tsc parsing.
rsync -R $(find . \( -name '*.css' -or -name '*.html' -or -name '*.ico' -or -name '*.png' \)) ../build/

cd ..

browserify ./src/public/js/index.js | minify >./src/public/dist/bundle.js

cp -r ./src/public/dist ./build/public

echo 'Build Complete\n'
