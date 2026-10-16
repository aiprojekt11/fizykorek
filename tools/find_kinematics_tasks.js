const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const filesToInspect = [
    // Próbne CKE
    { label: '2026 styczeń próbna', path: 'data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona.pdf' },
    { label: '2024 grudzień próbna', path: 'data/arkusze_cke/2024/fizyka-2024-grudzien-probna-rozszerzona.pdf' },
    { label: '2022 grudzień próbna', path: 'data/arkusze_cke/2022/fizyka-2022-grudzien-probna-rozszerzona.pdf' },
    { label: '2021 marzec próbna', path: 'data/arkusze_cke/2021/fizyka-2021-marzec-probna-rozszerzona.pdf' },
    { label: '2020 kwiecień próbna', path: 'data/arkusze_cke/2020/fizyka-2020-kwiecien-probna-rozszerzona.pdf' },
    { label: '2014 grudzień próbna', path: 'data/arkusze_cke/2015/fizyka-2014-grudzien-probna-rozszerzona.pdf' },
    // Pokazowe / Przykładowe CKE
    { label: '2023 pokazowy CKE', path: 'data/arkusze_cke/2023/fizyka-2023-przykladowy-arkusz-cke-rozszerzona.pdf' },
    { label: '2015 przykładowy CKE', path: 'data/arkusze_cke/2015/fizyka-2015-przykladowy-arkusz-cke-rozszerzona.pdf' },
    // Czerwcowe CKE (termin dodatkowy)
    { label: '2025 czerwiec', path: 'data/arkusze_cke/2025/fizyka-2025-czerwiec-matura-rozszerzona.pdf' },
    { label: '2024 czerwiec', path: 'data/arkusze_cke/2024/fizyka-2024-czerwiec-matura-rozszerzona.pdf' },
    { label: '2023 czerwiec', path: 'data/arkusze_cke/2023/fizyka-2023-czerwiec-matura-rozszerzona.pdf' },
    { label: '2022 czerwiec', path: 'data/arkusze_cke/2022/fizyka-2022-czerwiec-matura-rozszerzona.pdf' },
    { label: '2021 czerwiec', path: 'data/arkusze_cke/2021/fizyka-2021-czerwiec-matura-rozszerzona.pdf' },
    { label: '2020 lipiec', path: 'data/arkusze_cke/2020/fizyka-2020-lipiec-matura-rozszerzona.pdf' },
    { label: '2019 czerwiec', path: 'data/arkusze_cke/2019/fizyka-2019-czerwiec-matura-rozszerzona.pdf' },
    { label: '2018 czerwiec', path: 'data/arkusze_cke/2018/fizyka-2018-czerwiec-matura-rozszerzona.pdf' },
    { label: '2017 czerwiec', path: 'data/arkusze_cke/2017/fizyka-2017-czerwiec-matura-rozszerzona.pdf' },
    { label: '2016 czerwiec', path: 'data/arkusze_cke/2016/fizyka-2016-czerwiec-matura-rozszerzona.pdf' },
    { label: '2015 czerwiec', path: 'data/arkusze_cke/2015/fizyka-2015-czerwiec-matura-rozszerzona.pdf' },
    // Informatory
    { label: 'Informator 2023', path: 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf' },
    { label: 'Informator 2015', path: 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2015.pdf' }
];

async function run() {
    const summary = {};

    for (const item of filesToInspect) {
        if (!fs.existsSync(item.path)) {
            console.log('File not found:', item.path);
            continue;
        }
        try {
            const buf = fs.readFileSync(item.path);
            const parser = new PDFParse({ data: buf });
            const res = await parser.getText();
            const text = res.text || '';
            
            // Look for Zadanie 1 and Zadanie 2
            const z1 = text.indexOf('Zadanie 1');
            const z2 = text.indexOf('Zadanie 2');
            const z3 = text.indexOf('Zadanie 3');

            let snippet = '';
            if (z1 !== -1) {
                let end = z1 + 3500;
                if (z3 !== -1 && z3 > z1) end = z3;
                else if (z2 !== -1 && z2 > z1) end = z2 + 1500;
                snippet = text.slice(z1, end).trim();
            } else {
                snippet = text.slice(0, 2000).trim();
            }

            summary[item.label] = {
                path: item.path,
                snippet: snippet
            };
            console.log(`[OK] ${item.label}: extracted ${snippet.length} chars`);
        } catch (err) {
            console.error(`[ERROR] ${item.label}:`, err.message);
        }
    }

    fs.writeFileSync('tools/new_cke_task_snippets.json', JSON.stringify(summary, null, 2), 'utf8');
    console.log('\nAll snippets saved to tools/new_cke_task_snippets.json');
}

run().catch(console.error);
