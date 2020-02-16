npm -s run clean
echo 'Building project..\n'
echo 'Parsing TypeScript..\n'
tsc
cd src || exit
echo 'Copying Addition Files..\n'
rsync -R $(find . \( -name '*.css' -or -name '*.html' -or -name '*.ico' \)) ../build/
