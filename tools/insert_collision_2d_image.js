const fs = require('fs');
const path = require('path');

const dataCoursesPath = path.join(__dirname, '../js/data-courses.js');
let content = fs.readFileSync(dataCoursesPath, 'utf8');

global.window = {};
eval(content);

const course = global.window.FIZYKOREK_COURSES['matura-fizyka'];
const pracaSection = course.sections.find(s => s.id === 'm-praca');
const sub4 = pracaSection.subchapters.find(s => s.id === 'sub-zderzenia-sprezyste');

// Zamiana <div class="theory-placeholder">...</div> na <figure class="theory-figure"><img class="theory-diagram" ...></figure>
const placeholderRegex = /<div class=\\"theory-placeholder\\">[\s\S]*?<\/div>(\s*<\/div>)?$/;

const figureHtml = '<figure class="theory-figure">\n' +
  '  <img class="theory-diagram" src="img/theory/energy/collision-2d-custom.png" alt="Zderzenie sprężyste 2D pod kątem: przed zderzeniem kula 1 porusza się wzdłuż osi x, kula 2 spoczywa; po zderzeniu kule rozpraszają się pod kątami alfa i beta, a ich pędy w pionie się równoważą." loading="eager" decoding="async">\n' +
  '</figure>\n</div>';

sub4.theory = sub4.theory.replace(/<div class="theory-placeholder">[\s\S]*?<\/div>\s*<\/div>$/, figureHtml);

const newFileContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(global.window.FIZYKOREK_COURSES, null, 2) + ';\n';
fs.writeFileSync(dataCoursesPath, newFileContent, 'utf8');
console.log('Successfully replaced 2D placeholder with custom image figure!');
