const fs = require('fs');
const t = fs.readFileSync('../js/data-courses.js', 'utf8');
const data = JSON.parse(t.substring(t.indexOf('{')).replace(/;\s*$/, ''));
const tasks = data['matura-fizyka'].sections.flatMap(s => s.subchapters ? s.subchapters.flatMap(sub => sub.tasks || []) : []);
console.log(tasks.map(task => `${task.title} -> ${task.image}`).join('\n'));
