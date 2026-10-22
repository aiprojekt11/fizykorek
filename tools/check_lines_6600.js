const fs = require('fs');
const content = fs.readFileSync('js/data-courses.js', 'utf8');
const lines = content.split(/\r?\n/);

console.log('Lines 6590 to 6615:');
for (let i = 6589; i < 6615; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}
