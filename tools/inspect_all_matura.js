const fs = require('fs');
const content = fs.readFileSync('c:/Users/barto/Desktop/aplikacja/js/data-courses.js', 'utf8');

// List of all items with id and title
const regex = /\{\s*"id":\s*"([^"]+)",\s*"title":\s*"([^"]+)"/g;
let m;
const tasks = [];
while ((m = regex.exec(content)) !== null) {
  if (m[2].toLowerCase().includes('matura') || m[2].toLowerCase().includes('informator')) {
    tasks.push({ id: m[1], title: m[2] });
  }
}
console.log(JSON.stringify(tasks, null, 2));
