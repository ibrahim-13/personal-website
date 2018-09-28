@echo off
cls
IF EXIST yourfilename (
echo Removing previous distributions...
rmdir /S /Q dist
)

echo Building distribution for production...
echo Base name set as /
start /WAIT ng build --base-href=/ --prod --build-optimizer
