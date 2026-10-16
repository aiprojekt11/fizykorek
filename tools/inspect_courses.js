const fs = require('fs');

const code = fs.readFileSync('js/data-courses.js', 'utf8');

// evaluate in a sandbox or VM to inspect the object
const vm = require('vm');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const courses = sandbox.window.FIZYKOREK_COURSES;
console.log('Courses:', Object.keys(courses));

for (const cKey of Object.keys(courses)) {
  const course = courses[cKey];
  console.log(`\nCourse: ${cKey} (${course.title})`);
  if (course.sections) {
    for (const sec of course.sections) {
      console.log(`  Section: ${sec.id} | ${sec.title} | badge: ${sec.badge}`);
      if (sec.subchapters) {
        for (const sub of sec.subchapters) {
          console.log(`    Subchapter: ${sub.id} | ${sub.title} | tasks count: ${sub.tasks ? sub.tasks.length : 0}`);
        }
      }
    }
  }
}
