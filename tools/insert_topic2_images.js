const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataCoursesPath = path.join(__dirname, '..', 'js', 'data-courses.js');
const rawContent = fs.readFileSync(dataCoursesPath, 'utf8');

const sandbox = { window: {} };
vm.runInNewContext(rawContent, sandbox);
const courses = sandbox.window.FIZYKOREK_COURSES;

const bryla = courses['matura-fizyka'].sections.find(s => s.id === 'm-bryla');
if (!bryla) {
  console.error('m-bryla not found');
  process.exit(1);
}

const sub1 = bryla.subchapters.find(s => s.id === 'sub-bryla-moment-sily');
if (!sub1) {
  console.error('sub-bryla-moment-sily not found');
  process.exit(1);
}

const fig1 = `<figure class="theory-figure">
  <img class="theory-diagram" src="img/theory/rigid/rigid-torque-arm.png" alt="Ramię siły i moment siły: z lewej strony siła F pod kątem alfa z ramieniem d = r sin alfa; z prawej strony siła wzdłuż osi ramienia z d = 0 i momentem M = 0." loading="eager" decoding="async">
</figure>`;

const fig2 = `<figure class="theory-figure">
  <img class="theory-diagram" src="img/theory/rigid/rigid-beam-equilibrium.png" alt="Warunki równowagi belki na dwóch podporach: równowaga sił R_A + R_B = Q oraz równowaga momentów względem podpory A: Q * (L/2) = R_B * L." loading="eager" decoding="async">
</figure>`;

const ph1Regex = /<div class="theory-placeholder">[\s\S]*?Ramię siły i moment siły[\s\S]*?<\/div>\s*<\/div>/;
const ph2Regex = /<div class="theory-placeholder">[\s\S]*?Warunki równowagi belki[\s\S]*?<\/div>\s*<\/div>/;

if (!ph1Regex.test(sub1.theory)) {
  console.error('Placeholder 1 regex did not match in sub-bryla-moment-sily');
  process.exit(1);
}
if (!ph2Regex.test(sub1.theory)) {
  console.error('Placeholder 2 regex did not match in sub-bryla-moment-sily');
  process.exit(1);
}

sub1.theory = sub1.theory.replace(ph1Regex, fig1).replace(ph2Regex, fig2);

fs.writeFileSync(dataCoursesPath, 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n', 'utf8');
console.log('Successfully inserted images into sub-bryla-moment-sily!');

