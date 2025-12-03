@echo off
echo ====================================
echo Initializing Medusa.js Backend
echo ====================================
echo.

cd backend
echo Running database migrations and seeding...
pnpm ib

echo.
echo ====================================
echo Initialization Complete!
echo ====================================
echo.
echo You can now run "start.bat" to start both servers
echo.
pause
