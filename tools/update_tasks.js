const fs = require('fs');

let content = fs.readFileSync('js/data-courses.js', 'utf8');
const vm = require('vm');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(content, context);

let courses = context.window.FIZYKOREK_COURSES;
let sections = courses['matura-fizyka'].sections;

sections.forEach(sec => {
    if (sec.subchapters) {
        sec.subchapters.forEach(sub => {
            if (sub.id.startsWith('sub-matura-cke')) {
                sub.tasks.forEach(t => {
                    // Update image placeholder
                    t.problem = t.problem.replace(
                        /\[TUTAJ WKLEJ GRAFIKĘ:\s*(img\/[a-zA-Z0-9_\-\.]+)\]/g,
                        '<img src="$1" alt="Rysunek do zadania" class="theory-img" style="max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">'
                    );
                    
                    // Update title
                    // Extract parts from ID like: matura-cke-2025-czerwiec-zad-1
                    let id = t.id;
                    let title = t.title;
                    
                    if (id.includes('informator')) {
                        // matura-cke-informator-2023-zad-2
                        let match = id.match(/informator-(\d+)-zad-(\d+)/);
                        if (match) {
                            title = `Informator CKE ${match[1]} zad.${match[2]}`;
                        }
                    } else if (id.includes('pokazowy')) {
                        let match = id.match(/(\d+)-pokazowy-zad-(\d+)/);
                        if (match) {
                            title = `Matura arkusz pokazowy ${match[1]} zad.${match[2]}`;
                        }
                    } else if (id.includes('przykladowy')) {
                        let match = id.match(/(\d+)-przykladowy-zad-(\d+)/);
                        if (match) {
                            title = `Matura przykładowa ${match[1]} zad.${match[2]}`;
                        }
                    } else {
                        // Regular matura: matura-cke-2025-czerwiec-zad-1 or matura-cke-2025-zad-1
                        let match = id.match(/cke-(\d+)(?:-([a-z]+))?-zad-(\d+)/);
                        if (match) {
                            let year = match[1];
                            let month = match[2] || 'maj'; // default to maj if no month
                            if (month === 'grudzien') month = 'próbna grudzień';
                            if (month === 'kwiecien') month = 'próbna kwiecień';
                            let zad = match[3];
                            title = `Matura ${month} ${year} zad.${zad}`;
                        }
                    }
                    t.title = title;
                });
            }
        });
    }
});

fs.writeFileSync('js/data-courses.js', 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n');
console.log('Tasks updated');
