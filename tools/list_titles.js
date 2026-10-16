const fs = require('fs');
const content = fs.readFileSync('c:/Users/barto/Desktop/aplikacja/js/data-courses.js', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('"title":') && (l.includes('Matura') || l.includes('maj') || l.includes('zad.') || l.includes('czerwiec') || l.includes('grudzie') || l.includes('pokazowy') || l.includes('próbna'))) {
    console.log(`${i+1}: ${l.trim()}`);
  }
});
