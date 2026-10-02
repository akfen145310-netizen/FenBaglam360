const fs = require('fs');
const path = require('path');

const outDir = 'c:\\Users\\ADMN\\Desktop\\antigravity\\takip360\\scripts\\extracted_g8_text';

for (let u = 1; u <= 7; u++) {
  const filePath = path.join(outDir, `unit_${u}.txt`);
  const content = fs.readFileSync(filePath, 'utf-8');
  console.log(`\n\n################################################################`);
  console.log(`###################### UNIT ${u} DETAILS ######################`);
  console.log(`################################################################\n`);
  
  // Find where Kavram Yanılgıları starts
  const lines = content.split('\n');
  let capturing = false;
  let capturedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (l.includes('Kavram Yanılgı') || l.includes('Çeldirici') || l.includes('Başucu Notlar')) {
      capturing = true;
    }
    if (capturing) {
      capturedLines.push(l);
      // capture up to 100 lines after starting
      if (capturedLines.length > 90) break;
    }
  }
  
  console.log(capturedLines.join('\n'));
}
