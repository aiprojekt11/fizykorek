const fs = require('fs');
const content = fs.readFileSync('js/data-courses.js', 'utf8');
const lines = content.split(/\r?\n/);

console.log('Searching for p-zad-26:');
lines.forEach((l, i) => {
  if (l.includes('"id": "p-zad-26"')) {
    console.log(`Line ${i+1}: ${l}`);
  }
});
