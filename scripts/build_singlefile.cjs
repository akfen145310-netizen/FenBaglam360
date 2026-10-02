const { build } = require('vite');
const react = require('@vitejs/plugin-react');
const tailwindcss = require('@tailwindcss/vite');
const { viteSingleFile } = require('vite-plugin-singlefile');
const fs = require('fs');
const path = require('path');

async function buildPortable() {
  console.log('Building portable singlefile bundle...');
  try {
    await build({
      configFile: false,
      plugins: [
        react(),
        tailwindcss.default ? tailwindcss.default() : tailwindcss(),
        viteSingleFile()
      ],
      base: './',
      build: {
        outDir: 'tasinabilir-offline-surum',
        emptyOutDir: false,
        target: 'esnext',
        assetsInlineLimit: 100000000,
        chunkSizeWarningLimit: 100000000,
        cssCodeSplit: false
      }
    });
    console.log('Portable index.html built successfully!');
  } catch (e) {
    console.error('Build portable error:', e.message);
  }
}

buildPortable();
