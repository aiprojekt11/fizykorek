const fs = require('fs');

let content = fs.readFileSync('js/data-courses.js', 'utf8');
const vm = require('vm');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(content, context);

let courses = context.window.FIZYKOREK_COURSES;
let sections = courses['matura-fizyka'].sections;

let count = 0;

sections.forEach(sec => {
    if (sec.subchapters) {
        sec.subchapters.forEach(sub => {
            if (sub.tasks) {
                sub.tasks.forEach(t => {
                    let p = t.problem;
                    
                    // Improved regex to handle any number of li items
                    p = p.replace(/<ol>([\s\S]*?)<\/ol>/g, (match, innerHtml) => {
                        if ((t.problem.includes('prawdziwość') || t.problem.includes('prawda) lub F (fałsz)') || t.problem.includes('Zaznacz P')) && !match.includes('P / F') && !match.includes('cke-table')) {
                            
                            let lis = [];
                            let liRegex = /<li>([\s\S]*?)<\/li>/g;
                            let liMatch;
                            while ((liMatch = liRegex.exec(innerHtml)) !== null) {
                                lis.push(liMatch[1].trim());
                            }
                            
                            if (lis.length > 0) {
                                count++;
                                let tableRows = lis.map((text, idx) => `  <tr>
    <td class="cke-num-col">${idx + 1}.</td>
    <td>${text}</td>
    <td class="cke-pf-col">P</td>
    <td class="cke-pf-col">F</td>
  </tr>`).join('\n');
                                
                                return `<table class="cke-table">\n${tableRows}\n</table>`;
                            }
                        }
                        return match;
                    });
                    
                    t.problem = p;
                });
            }
        });
    }
});

fs.writeFileSync('js/data-courses.js', 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n');
console.log('Tables replaced (pass 2):', count);
