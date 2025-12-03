@echo off
echo ====================================
echo Auto Git Commit and Push
echo ====================================
echo.

echo Adding all changes...
git add .

echo.
echo Committing changes...
git commit -m "auto commit"

echo.
echo Pushing to remote repository...
git push

echo.
echo ====================================
echo Git operations complete!
echo ====================================
echo.
pause
