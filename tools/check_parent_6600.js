const fs = require('fs');
const content = fs.readFileSync('js/data-courses.js', 'utf8');
const lines = content.split(/\r?\n/);

console.log('Lines 5940 to 5955:');
for (let i = 5939; i < 5955; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}
