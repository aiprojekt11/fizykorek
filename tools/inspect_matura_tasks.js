const fs = require('fs');

const content = fs.readFileSync('js/data-courses.js', 'utf8');
const lines = content.split('\n');

console.log('Searching in data-courses.js...');
lines.forEach((line, idx) => {
  if (line.includes('"id": "matura-cke') || line.includes('"id": "sub-') || line.includes('"id": "m-praca')) {
    console.log(`${idx + 1}: ${line.trim()}`);
  }
});
