@echo off
chcp 65001 >nul
title FenBaglam 360 - Cevrimdisi Platform Baslatici
color 0b

echo ======================================================================
echo    FENBAGLAM 360 - TYMM FEN BILIMLERI BAGLAM TEMELLI SORU BANKASI
echo    Cevrimdisi (Offline) Tasinabilir Surum
echo ======================================================================
echo.
echo [1] Tarayicida dogrudan aciliyor...
echo [2] Internet baglantisi gerektirmez.
echo [3] USB bellek veya akilli tahtada sorunsuz calisir.
echo.

:: Varsayilan tarayici ile index.html dosyasini ac
start "" "%~dp0index.html"

echo Platform basariyla acildi. Bu pencereyi kapatabilirsiniz.
timeout /t 3 >nul
exit
