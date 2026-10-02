const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const portableDir = path.join(rootDir, 'tasinabilir-offline-surum');
const publicDir = path.join(rootDir, 'public');

// 1. Remove any nested zip or extra offline html inside tasinabilir-offline-surum
const nestedZip = path.join(portableDir, 'FenBaglam360_Tasinabilir_Surum.zip');
const nestedHtml = path.join(portableDir, 'FenBaglam360_Offline.html');
if (fs.existsSync(nestedZip)) fs.unlinkSync(nestedZip);
if (fs.existsSync(nestedHtml)) fs.unlinkSync(nestedHtml);

// 2. Build fresh singlefile bundle
console.log('[1/4] Compiling single-file bundle...');
execSync('node scripts/build_singlefile.cjs', { cwd: rootDir, stdio: 'inherit' });

// 3. Copy index.html to public/FenBaglam360_Offline.html
console.log('[2/4] Copying standalone HTML to public directory...');
const singleHtmlPath = path.join(portableDir, 'index.html');
const publicHtmlPath = path.join(publicDir, 'FenBaglam360_Offline.html');
fs.copyFileSync(singleHtmlPath, publicHtmlPath);
console.log('Copied to:', publicHtmlPath, `(${(fs.statSync(publicHtmlPath).size / 1024 / 1024).toFixed(2)} MB)`);

// 4. Remove previous public zip if exists
const publicZipPath = path.join(publicDir, 'FenBaglam360_Tasinabilir_Surum.zip');
if (fs.existsSync(publicZipPath)) {
  fs.unlinkSync(publicZipPath);
}

// 5. Compress portableDir to publicZipPath using PowerShell Compress-Archive
console.log('[3/4] Creating ZIP archive for USB download...');
const psCommand = `powershell -NoProfile -Command "Compress-Archive -Path '${portableDir}\\*' -DestinationPath '${publicZipPath}' -Force"`;
execSync(psCommand, { cwd: rootDir, stdio: 'inherit' });

console.log('[4/4] Package complete!');
console.log('ZIP file:', publicZipPath, `(${(fs.statSync(publicZipPath).size / 1024 / 1024).toFixed(2)} MB)`);
