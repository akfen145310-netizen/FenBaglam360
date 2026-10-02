const fs = require('fs');
const path = require('path');

const outDir = 'c:\\Users\\ADMN\\Desktop\\antigravity\\takip360\\scripts\\extracted_g8_text';

for (let u = 1; u <= 7; u++) {
  const filePath = path.join(outDir, `unit_${u}.txt`);
  const content = fs.readFileSync(filePath, 'utf-8');
  console.log(`\n=================== UNIT ${u} ===================`);
  
  // Find lines or sections with Kavram Yanılgıları, Çeldirici, Dikkat, Hata
  const lines = content.split('\n');
  let currentSection = '';
  lines.forEach((line, idx) => {
    const l = line.trim();
    if (l.includes('Kavram Yanılgı') || l.includes('Çeldirici') || l.includes('Başucu') || l.includes('DİKKAT') || l.includes('KONU ÖZETİ') || l.includes('ÜNİTE')) {
      console.log(`[Line ${idx}] ${l}`);
    }
  });
}
