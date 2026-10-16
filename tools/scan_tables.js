const fs = require('fs');
const content = fs.readFileSync('js/data-courses.js', 'utf8');
const sandbox = { window: {} };
new Function('window', content)(sandbox.window);
const courses = sandbox.window.FIZYKOREK_COURSES;

for (const cId in courses) {
  const c = courses[cId];
  for (const s of c.sections || []) {
    for (const sub of s.subchapters || []) {
      for (const t of sub.tasks || []) {
        if (t.problem && t.problem.includes('class="pf-table"')) {
          console.log('\n=== TASK with pf-table:', t.id, '===');
          const m = t.problem.match(/<(div|table) class="pf-table"[\s\S]*?<\/\1>/gi);
          if (m) m.forEach(x => console.log(x));
        }
      }
    }
  }
}
