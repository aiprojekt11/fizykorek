const fs = require('fs');

let content = fs.readFileSync('./js/data-courses.js', 'utf8');

// Function to convert figure to descriptive placeholder
function figureToPlaceholder(html) {
    return html.replace(/<figure class="theory-figure">\s*<img class="theory-diagram" src="([^"]+)" alt="([^"]+)"[^>]*>\s*<figcaption>([\s\S]*?)<\/figcaption>\s*<\/figure>/g, (match, src, alt, caption) => {
        return `<div class="theory-placeholder">\n  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>\n  <p class="theory-placeholder-desc">${alt}</p>\n  <div class="theory-placeholder-caption">${caption.trim()}</div>\n</div>`;
    });
}

// Function to remove emojis from subtitles and callouts
function cleanEmojis(html) {
    return html
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
}

// Check how many figures are found before
const initialFigures = (content.match(/<figure class="theory-figure"/g) || []).length;
console.log('Initial figures found:', initialFigures);

content = figureToPlaceholder(content);
content = cleanEmojis(content);

const remainingFigures = (content.match(/<figure class="theory-figure"/g) || []).length;
const newPlaceholders = (content.match(/class="theory-placeholder"/g) || []).length;
console.log('Remaining figures:', remainingFigures);
console.log('New placeholders created:', newPlaceholders);

fs.writeFileSync('./js/data-courses.js', content, 'utf8');
console.log('Updated js/data-courses.js successfully!');
