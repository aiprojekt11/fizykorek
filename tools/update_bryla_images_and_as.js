const fs = require('fs');
const path = require('path');

const dataCoursesPath = path.join(__dirname, '..', 'js', 'data-courses.js');
const fileContent = fs.readFileSync(dataCoursesPath, 'utf8');

// Load COURSES
const sandbox = { window: {} };
const vm = require('vm');
vm.runInNewContext(fileContent, sandbox);
const courses = sandbox.window.FIZYKOREK_COURSES;

const bryla = courses['matura-fizyka'].sections.find(s => s.id === 'm-bryla');
if (!bryla) {
  console.error('m-bryla not found!');
  process.exit(1);
}

const sub0 = bryla.subchapters.find(s => s.id === 'sub-bryla-ruch');
if (!sub0) {
  console.error('sub-bryla-ruch not found!');
  process.exit(1);
}

// 1. Update formulaCheat
sub0.formulaCheat = "\\omega = 2\\pi f = \\frac{2\\pi}{T}, \\quad v = \\omega r, \\quad a_s = \\varepsilon r, \\quad a_d = \\omega^2 r, \\quad v_{\\text{cm}} = \\omega R";

// 2. Update theory text: replace a_t with a_s
let theory = sub0.theory;

// Replace bullet: Przyspieszenie styczne ($a_t$): ... $$a_t = \varepsilon \cdot r$$
theory = theory.replace(
  /<li><strong>Przyspieszenie styczne \(\$a_t\$\):<\/strong>([\s\S]*?)\$\$a_t = \\varepsilon \\cdot r\$\$([\s\S]*?)<\/li>/,
  '<li><strong>Przyspieszenie styczne ($a_s$):</strong>$1$$a_s = \\varepsilon \\cdot r$$$2</li>'
);

// Replace formula: $$a = \sqrt{a_t^2 + a_d^2}$$ -> $$a = \sqrt{a_s^2 + a_d^2}$$
theory = theory.replace(/\$\$a = \\sqrt\{a_t\^2 \+ a_d\^2\}\$\$/, '$$a = \\sqrt{a_s^2 + a_d^2}$$');

// 3. Replace Placeholder 1 (rotation kinematics) with figure
const fig1 = `<figure class="theory-figure">
  <img class="theory-diagram" src="img/theory/rigid/rigid-rotation-kinematics.png" alt="Ruch obrotowy tarczy wokół osi O: punkt P na brzegu tarczy z prędkością liniową v, przyspieszeniem stycznym as i dośrodkowym ad." loading="eager" decoding="async">
</figure>`;

// Look for placeholder 1:
const ph1Regex = /<div class="theory-placeholder">[\s\S]*?Ruch obrotowy tarczy wokół osi O:[\s\S]*?<\/div>\s*<\/div>/;
if (ph1Regex.test(theory)) {
  theory = theory.replace(ph1Regex, fig1);
  console.log('Replaced placeholder 1 with figure 1');
} else {
  console.error('Placeholder 1 regex did not match!');
}

// 4. Replace Placeholder 2 (rolling wheel) with figure
const fig2 = `<figure class="theory-figure">
  <img class="theory-diagram" src="img/theory/rigid/rigid-rolling-wheel.png" alt="Rozkład wektorów prędkości w toczącym się kole bez poślizgu: punkt styku C spoczywa (v_C = 0), środek koła O porusza się z prędkością v, punkt A na szczycie koła z prędkością 2v, punkt B z prędkością pierwiastek z 2 razy v." loading="eager" decoding="async">
</figure>`;

// Look for placeholder 2:
const ph2Regex = /<div class="theory-placeholder">[\s\S]*?Rozkład prędkości w toczącym się kole[\s\S]*?<\/div>\s*<\/div>/;
if (ph2Regex.test(theory)) {
  theory = theory.replace(ph2Regex, fig2);
  console.log('Replaced placeholder 2 with figure 2');
} else {
  console.error('Placeholder 2 regex did not match!');
}

sub0.theory = theory;

// Write updated data-courses.js
const newContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync(dataCoursesPath, newContent, 'utf8');
console.log('Successfully updated data-courses.js!');

