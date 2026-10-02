const fs = require('fs');
const path = require('path');

const outDir = 'c:\\Users\\ADMN\\Desktop\\antigravity\\takip360\\scripts\\extracted_g8_text';
const results = {};

for (let u = 1; u <= 7; u++) {
  const filePath = path.join(outDir, `unit_${u}.txt`);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Find Kavram Yanılgıları block
  const lines = content.split('\n').map(l => l.trim());
  let kyStart = -1;
  let celdiriciStart = -1;
  let basucuStart = -1;
  
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (l === '2.Kavram Yanılgıları' || l === 'KAVRAM YANILGILARI' || (l.includes('Kavram Yanılgıları') && !l.includes('MEBİ') && i > 50)) {
      if (kyStart === -1) kyStart = i;
    }
    if (l.includes('Çeldirici') && i > 50) {
      if (celdiriciStart === -1) celdiriciStart = i;
    }
    if (l.includes('Başucu Notlar') && i > 50) {
      if (basucuStart === -1) basucuStart = i;
    }
  }
  
  results[u] = {
    kyStart,
    celdiriciStart,
    basucuStart,
    kyText: kyStart !== -1 ? lines.slice(kyStart, celdiriciStart !== -1 ? celdiriciStart : kyStart + 120).join('\n') : '',
    celdiriciText: celdiriciStart !== -1 ? lines.slice(celdiriciStart, basucuStart !== -1 ? basucuStart : celdiriciStart + 120).join('\n') : '',
    basucuText: basucuStart !== -1 ? lines.slice(basucuStart, basucuStart + 150).join('\n') : ''
  };
}

fs.writeFileSync('c:\\Users\\ADMN\\Desktop\\antigravity\\takip360\\scripts\\g8_intelligence.json', JSON.stringify(results, null, 2), 'utf-8');
console.log('Saved g8_intelligence.json');
