const fs = require('fs');
const content = fs.readFileSync('js/data-courses.js', 'utf8');
const lines = content.split(/\r?\n/);

console.log('--- Subchapters in Praca, moc, energia ---');
for (let i = 4250; i <= 5550; i++) {
  if (lines[i] && (lines[i].includes('"id": "sub-') || lines[i].includes('"title":'))) {
    console.log((i+1) + ': ' + lines[i].trim());
  }
}
