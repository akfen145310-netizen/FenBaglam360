const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const dir = 'c:\\Users\\ADMN\\Desktop\\antigravity\\takip360\\8. sınıf konular';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf'));

async function inspectPDF(fileName) {
  const filePath = path.join(dir, fileName);
  console.log(`\n=================== FILE: ${fileName} ===================`);
  const dataBuffer = fs.readFileSync(filePath);
  
  const parser = new PDFParse({ data: dataBuffer });
  await parser.load();
  const info = await parser.getInfo();
  console.log(`Total Pages: ${info.pages || 'N/A'}`);
  
  // Extract text from first 5 pages and search for key sections
  let combinedText = '';
  const numPages = Math.min(10, info.pages || 10);
  for (let i = 1; i <= numPages; i++) {
    const pageText = await parser.getPageText(i);
    combinedText += `\n--- Page ${i} ---\n` + pageText;
  }
  console.log(`Preview Text:\n${combinedText.slice(0, 1200)}`);
  await parser.destroy();
}

async function run() {
  for (const f of files) {
    if (f.includes('(1)')) continue;
    try {
      await inspectPDF(f);
    } catch (e) {
      console.error(`Error reading ${f}:`, e.message);
    }
  }
}

run();

