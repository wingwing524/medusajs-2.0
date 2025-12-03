@echo off
echo ====================================
echo Stopping Medusa.js Servers
echo ====================================
echo.

echo Killing Node.js processes...
taskkill /F /IM node.exe /T 2>nul

echo.
echo All servers stopped.
pause
