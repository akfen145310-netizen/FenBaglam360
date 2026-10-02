const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const dir = 'c:\\Users\\ADMN\\Desktop\\antigravity\\takip360\\8. sınıf konular';
const outDir = 'c:\\Users\\ADMN\\Desktop\\antigravity\\takip360\\scripts\\extracted_g8_text';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const unitFiles = [
  { unit: 1, file: '1.ÜNİTE MEVSİMLER VE İKLİM.pdf' },
  { unit: 2, file: '2.ÜNİTEDNA ve Genetik Kod.pdf' },
  { unit: 3, file: '3.ÜNİTE BASINÇ.pdf' },
  { unit: 4, file: '4.ÜNİTE MADDE VE ENDÜSTRİ.pdf' },
  { unit: 5, file: '5.ÜNİTE BASİT MAKİNELER.pdf' },
  { unit: 6, file: '6.ÜNİTE Enerji Dönüşümleri ve Çevre Bilimi.pdf' },
  { unit: 7, file: '7.ÜNİTE Elektrik Yükleri ve Elektrik Enerjisi.pdf' }
];

async function extractAll() {
  for (const item of unitFiles) {
    const filePath = path.join(dir, item.file);
    console.log(`Extracting Unit ${item.unit}: ${item.file}...`);
    try {
      const buf = fs.readFileSync(filePath);
      const parser = new PDFParse({ data: buf });
      await parser.load();
      const res = await parser.getText();
      const outFile = path.join(outDir, `unit_${item.unit}.txt`);
      fs.writeFileSync(outFile, res.text, 'utf-8');
      console.log(`Saved Unit ${item.unit} (${res.text.length} chars, ${res.total} pages) -> ${outFile}`);
      await parser.destroy();
    } catch (e) {
      console.error(`Failed ${item.file}:`, e.message);
    }
  }
  console.log('ALL UNITS EXTRACTED SUCCESSFULLY!');
}

extractAll();
