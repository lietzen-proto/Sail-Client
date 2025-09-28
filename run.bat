@echo off
call .venv\Scripts\activate.bat
start /min "SailGui" .\stage2.bat
flask --app server/main run