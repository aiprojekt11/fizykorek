const fs = require('fs');

const coursesContent = fs.readFileSync('js/data-courses.js', 'utf8');
// Evaluate window.FIZYKOREK_COURSES
const sandbox = { window: {} };
const fn = new Function('window', coursesContent);
fn(sandbox.window);

const courses = sandbox.window.FIZYKOREK_COURSES;
const classes = new Set();
const tags = new Set();

function inspect(obj) {
  if (!obj) return;
  if (typeof obj === 'string') {
    const classMatches = obj.match(/class=["']([^"']*)["']/g) || [];
    classMatches.forEach(c => classes.add(c));
    const tagMatches = obj.match(/<([a-z0-9]+)/gi) || [];
    tagMatches.forEach(t => tags.add(t.toLowerCase()));
  } else if (Array.isArray(obj)) {
    obj.forEach(inspect);
  } else if (typeof obj === 'object') {
    Object.values(obj).forEach(inspect);
  }
}

inspect(courses);

console.log('HTML Tags in data:');
console.log([...tags].sort());

console.log('\nClasses in data:');
console.log([...classes].sort());
