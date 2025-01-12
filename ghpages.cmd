call npm run ghpages
robocopy dist ..\freeblades-freeband-builder-ghpages /MIR /XD .git
if %errorlevel% gtr 0 (
    if %errorlevel% leq 7 (
        cd ..\freeblades-freeband-builder-ghpages
        git add .
        git commit -m "Updating to current version."
        git push origin gh-pages
        cd ..\freeblades-freeband-builder
    )
)