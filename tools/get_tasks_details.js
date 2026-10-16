const fs = require('fs');
const content = fs.readFileSync('c:/Users/barto/Desktop/aplikacja/js/data-courses.js', 'utf8');

const lines = content.split('\n');
const results = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('"title":') && (lines[i].includes('Matura') || lines[i].includes('Informator'))) {
    // look around for id and source
    let id = '';
    let source = '';
    for (let j = Math.max(0, i - 5); j < Math.min(lines.length, i + 8); j++) {
      if (lines[j].includes('"id":')) id = lines[j].trim();
      if (lines[j].includes('"source":')) source = lines[j].trim();
    }
    results.push({ line: i + 1, title: lines[i].trim(), id, source });
  }
}
console.log(JSON.stringify(results, null, 2));
