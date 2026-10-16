const fs = require('fs');

global.window = {};
require('../js/data-courses.js');
const courses = window.FIZYKOREK_COURSES;

const subMatura = courses['matura-fizyka'].sections
    .find(s => s.id === 'm-praca').subchapters
    .find(s => s.id === 'sub-praca-matura');

console.log('Tasks in sub-praca-matura:');
subMatura.tasks.forEach((t, i) => {
    console.log(`${i + 1}. ${t.id}`);
});
