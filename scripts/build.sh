npm -s run clean
echo 'Building project..\n'
tsc
cd src || exit
rsync -R `find . \( -name '*.css' -or -name '*.html' -or -name '*.ico' \)` ../build/
