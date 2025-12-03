@echo off
echo ====================================
echo Starting Medusa.js 2.0 Application
echo ====================================
echo.

REM Check if storefront .env.local exists, if not copy from template
if not exist "storefront\.env.local" (
    echo Creating storefront .env.local from template...
    copy "storefront\.env.local.template" "storefront\.env.local"
    echo.
)

REM Start backend in new window
echo Starting Backend Server (Port 9000)...
start "Medusa Backend" cmd /k "cd backend && pnpm dev"

REM Wait a moment before starting storefront
timeout /t 3 /nobreak >nul

REM Start storefront in new window
echo Starting Storefront (Port 8000)...
start "Medusa Storefront" cmd /k "cd storefront && pnpm dev"

echo.
echo ====================================
echo Both servers are starting...
echo Backend:     http://localhost:9000
echo Admin:       http://localhost:9000/app
echo Storefront:  http://localhost:8000
echo ====================================
echo.
echo Press any key to close this window (servers will keep running)
pause >nul
