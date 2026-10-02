@echo off
chcp 65001 >nul
title FenBaglam 360 - Yerel Web Sunucusu
color 0a

echo ======================================================================
echo    FENBAGLAM 360 - YEREL AG VE ETKILESIMLI TAHTA SUNUCUSU
echo ======================================================================
echo.
echo Bu betik bilgisayarinizda mini bir web sunucusu calistirir.
echo Ayni agdaki diger bilgisayar, tablet veya telefonlardan erisebilirsiniz.
echo.

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$listener = New-Object System.Net.HttpListener; ^
   $listener.Prefixes.Add('http://localhost:8080/'); ^
   try { $listener.Start() } catch { Write-Host 'Port 8080 dolu veya yonetici izni gerekiyor.' -ForegroundColor Red; exit }; ^
   Write-Host 'Sunucu Hazir! Adres: http://localhost:8080/' -ForegroundColor Green; ^
   Start-Process 'http://localhost:8080/'; ^
   while ($listener.IsListening) { ^
     $context = $listener.GetContext(); ^
     $response = $context.Response; ^
     $path = Join-Path '%~dp0' 'index.html'; ^
     $bytes = [System.IO.File]::ReadAllBytes($path); ^
     $response.ContentType = 'text/html; charset=utf-8'; ^
     $response.ContentLength64 = $bytes.Length; ^
     $response.OutputStream.Write($bytes, 0, $bytes.Length); ^
     $response.Close(); ^
   }"

pause
