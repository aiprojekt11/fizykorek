const fs = require('fs');

let content = fs.readFileSync('tools/kinematyka_cke.json', 'utf8');
let tasks = JSON.parse(content);

let countTables = 0;
let countUnderlines = 0;

tasks.forEach(t => {
    let p = t.problem;
    
    p = p.replace(/<ol>\s*<li>(.*?)<\/li>\s*<li>(.*?)<\/li>\s*<li>(.*?)<\/li>\s*<\/ol>/gs, (match, i1, i2, i3) => {
        if (!match.includes('P / F') && (t.problem.includes('prawdziwość') || t.problem.includes('prawda) lub F (fałsz)'))) {
            countTables++;
            return `<table class="cke-table">...</table>`;
        }
        return match;
    });

    const underlines = [
        "bez działania sił oporu",
        "poziomy",
        "pionowy, zwrot w górę",
        "w metrach",
        "nie zależy",
        "wprost proporcjonalna",
        "odwrotnie proporcjonalna"
    ];
    
    underlines.forEach(word => {
        let regex = new RegExp(`(?<!<u>)(?<!<[a-zA-Z0-9]+>\\s*)${word}(?!<\\/u>)`, 'g');
        let matches = p.match(regex);
        if (matches) countUnderlines += matches.length;
        p = p.replace(regex, `<u>${word}</u>`);
    });
});

console.log('Tables replaced:', countTables);
console.log('Underlines added:', countUnderlines);
