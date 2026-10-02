const fs = require('fs');
const path = require('path');

const outDir = 'c:\\Users\\ADMN\\Desktop\\antigravity\\takip360\\scripts\\extracted_g8_text';

for (let u = 1; u <= 7; u++) {
  const filePath = path.join(outDir, `unit_${u}.txt`);
  const content = fs.readFileSync(filePath, 'utf-8');
  console.log(`\n=================== UNIT ${u} MISCONCEPTIONS ===================`);
  
  // Find lines around "Kavram Yanılgısı"
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('Kavram Yanılgısı') && !line.includes('2.Kavram Yanılgıları')) {
      console.log(`--- [Line ${idx}] ---`);
      for (let j = Math.max(0, idx - 2); j < Math.min(lines.length, idx + 15); j++) {
        console.log(`  ${lines[j].trim()}`);
      }
    }
  });
}
