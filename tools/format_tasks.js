const fs = require('fs');

let content = fs.readFileSync('tools/kinematyka_cke.json', 'utf8');
let tasks = JSON.parse(content);

tasks.forEach(t => {
    let p = t.problem;
    
    p = p.replace(/<ol>\s*<li>(.*?)<\/li>\s*<li>(.*?)<\/li>\s*<li>(.*?)<\/li>\s*<\/ol>/gs, (match, i1, i2, i3) => {
        if (!match.includes('P / F') && (t.problem.includes('prawdziwość') || t.problem.includes('prawda) lub F (fałsz)'))) {
            return `<table class="cke-table">
  <tr>
    <td class="cke-num-col">1.</td>
    <td>${i1}</td>
    <td class="cke-pf-col">P</td>
    <td class="cke-pf-col">F</td>
  </tr>
  <tr>
    <td class="cke-num-col">2.</td>
    <td>${i2}</td>
    <td class="cke-pf-col">P</td>
    <td class="cke-pf-col">F</td>
  </tr>
  <tr>
    <td class="cke-num-col">3.</td>
    <td>${i3}</td>
    <td class="cke-pf-col">P</td>
    <td class="cke-pf-col">F</td>
  </tr>
</table>`;
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
        p = p.replace(regex, `<u>${word}</u>`);
    });
    
    p = p.replace(/<\/h4>\s*<p>/g, '</h4>\n<p>');
    p = p.replace(/<\/p>\s*<p>/g, '</p>\n<br>\n<p>');
    
    t.problem = p;
});

fs.writeFileSync('tools/kinematyka_cke_updated.json', JSON.stringify(tasks, null, 2));
console.log('Saved updated tasks to tools/kinematyka_cke_updated.json');
