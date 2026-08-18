@echo off
cd /d "C:\Users\brian\Downloads\weleadprojects"
for /f "tokens=1,* delims==" %%a in ('findstr /b "RESEND_API_KEY=" .env.local') do set "%%a=%%b"
node scripts\send-klarsynet-reminder.js
