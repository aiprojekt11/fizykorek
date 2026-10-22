const fs = require('fs');
const content = fs.readFileSync('js/data-courses.js', 'utf8');
const p = content.indexOf('"id": "sub-zderzenia-sprezyste"');
console.log(content.substring(p, p + 1500));
