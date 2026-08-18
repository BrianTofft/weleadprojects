@echo off
cd /d "C:\Users\brian\Downloads\weleadprojects"
for /f "tokens=1,* delims==" %%a in ('findstr /b "NEXT_PUBLIC_SUPABASE_URL=" .env.local') do set "%%a=%%b"
for /f "tokens=1,* delims==" %%a in ('findstr /b "NEXT_PUBLIC_SUPABASE_ANON_KEY=" .env.local') do set "%%a=%%b"
node scripts\supabase-keepalive.js
