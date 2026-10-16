const fs = require('fs');

global.window = {};
require('../js/data-courses.js');
const courses = window.FIZYKOREK_COURSES;

function cleanTheory(html) {
    if (!html) return html;
    
    // 1. Replace figures with clean placeholder box containing alt and caption description
    let updated = html.replace(/<figure class="theory-figure">\s*<img class="theory-diagram" src="[^"]*" alt="([^"]*)"[^>]*>\s*<figcaption>([\s\S]*?)<\/figcaption>\s*<\/figure>/g, (m, alt, cap) => {
        return `<div class="theory-placeholder">\n  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>\n  <p class="theory-placeholder-desc">${alt.trim()}</p>\n  <div class="theory-placeholder-caption">${cap.trim()}</div>\n</div>`;
    });

    // 2. Remove emojis from subtitles and callouts
    updated = updated
        .replace(/<div class="theory-subtitle">📌\s*/g, '<div class="theory-subtitle">')
        .replace(/<div class="theory-subtitle">⚖️\s*/g, '<div class="theory-subtitle">')
        .replace(/<div class="theory-subtitle">📊\s*/g, '<div class="theory-subtitle">')
        .replace(/<div class="theory-subtitle">⚡\s*/g, '<div class="theory-subtitle">')
        .replace(/<div class="theory-subtitle">🔄\s*/g, '<div class="theory-subtitle">')
        .replace(/<div class="theory-subtitle">🔥\s*/g, '<div class="theory-subtitle">')
        .replace(/<div class="theory-subtitle">🎡\s*/g, '<div class="theory-subtitle">')
        .replace(/<div class="theory-subtitle">💥\s*/g, '<div class="theory-subtitle">')
        .replace(/<div class="theory-subtitle">🤝\s*/g, '<div class="theory-subtitle">')
        .replace(/<div class="theory-subtitle">🎯\s*/g, '<div class="theory-subtitle">')
        .replace(/<div class="theory-subtitle">🚀\s*/g, '<div class="theory-subtitle">')
        .replace(/<div class="theory-subtitle">⚪\s*/g, '<div class="theory-subtitle">')
        .replace(/<div class="theory-subtitle">🌀\s*/g, '<div class="theory-subtitle">')
        .replace(/<div class="theory-subtitle">🧱\s*/g, '<div class="theory-subtitle">')
        .replace(/<strong>🎯 Klasyczny przypadek z zadań CKE:<\/strong>/g, '<strong>Klasyczny przypadek z zadań CKE:</strong>');

    return updated;
}

// Traverse courses and subchapters
let countUpdated = 0;
for (const courseId in courses) {
    const course = courses[courseId];
    if (!course.sections) continue;
    for (const sec of course.sections) {
        if (sec.subchapters) {
            for (const sub of sec.subchapters) {
                if (sub.theory) {
                    const before = sub.theory;
                    sub.theory = cleanTheory(sub.theory);
                    if (before !== sub.theory) {
                        countUpdated++;
                        console.log('Updated theory in subchapter:', sub.id);
                    }
                }
            }
        }
    }
}

console.log('Total subchapters updated:', countUpdated);

const newFileContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync('./js/data-courses.js', newFileContent, 'utf8');
console.log('Wrote updated courses to js/data-courses.js!');
