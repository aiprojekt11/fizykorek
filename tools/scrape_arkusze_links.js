const https = require('https');
const fs = require('fs');

function fetchUrl(url) {
    return new Promise((resolve) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            }
        };
        https.get(url, options, res => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                let loc = res.headers.location;
                if (!loc.startsWith('http')) loc = 'https://arkusze.pl' + loc;
                return resolve(fetchUrl(loc));
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', err => {
            console.error('Error fetching', url, err.message);
            resolve('');
        });
    });
}

async function getPdfsFromPage(url) {
    const html = await fetchUrl(url);
    const linkRegex = /href=["']([^"']+\.pdf)["']/gi;
    let match;
    const pdfs = [];
    while ((match = linkRegex.exec(html)) !== null) {
        let u = match[1];
        if (u.startsWith('//')) u = 'https:' + u;
        if (!u.startsWith('http')) u = 'https://arkusze.pl' + (u.startsWith('/') ? '' : '/') + u;
        pdfs.push(u);
    }
    return [...new Set(pdfs)];
}

async function run() {
    const pages = [
        // Informator
        { category: 'informator', url: 'https://arkusze.pl/informator-maturalny-fizyka/' },
        // Arkusze pokazowe / przykładowe CKE
        { category: 'pokazowe', url: 'https://arkusze.pl/matura-fizyka-2023-przykladowy-arkusz-cke-poziom-rozszerzony/' },
        { category: 'pokazowe', url: 'https://arkusze.pl/matura-fizyka-2015-przykladowy-arkusz-cke-poziom-rozszerzony/' },
        // Próbne CKE (grudniowe, styczniowe, marcowe, kwietniowe)
        { category: 'probne_cke', url: 'https://arkusze.pl/matura-probna-fizyka-2026-styczen-poziom-rozszerzony/' },
        { category: 'probne_cke', url: 'https://arkusze.pl/matura-probna-fizyka-2024-grudzien-poziom-rozszerzony/' },
        { category: 'probne_cke', url: 'https://arkusze.pl/matura-probna-fizyka-2022-grudzien-poziom-rozszerzony/' },
        { category: 'probne_cke', url: 'https://arkusze.pl/matura-probna-fizyka-2021-marzec-poziom-rozszerzony/' },
        { category: 'probne_cke', url: 'https://arkusze.pl/matura-probna-fizyka-2020-kwiecien-poziom-rozszerzony/' },
        { category: 'probne_cke', url: 'https://arkusze.pl/matura-probna-fizyka-2014-grudzien-poziom-rozszerzony/' },
        // Czerwcowe (termin dodatkowy CKE)
        { category: 'czerwiec', url: 'https://arkusze.pl/matura-fizyka-2025-czerwiec-poziom-rozszerzony/' },
        { category: 'czerwiec', url: 'https://arkusze.pl/matura-fizyka-2024-czerwiec-poziom-rozszerzony/' },
        { category: 'czerwiec', url: 'https://arkusze.pl/matura-fizyka-2023-czerwiec-poziom-rozszerzony/' },
        { category: 'czerwiec', url: 'https://arkusze.pl/matura-fizyka-2022-czerwiec-poziom-rozszerzony/' },
        { category: 'czerwiec', url: 'https://arkusze.pl/matura-fizyka-2021-czerwiec-poziom-rozszerzony/' },
        { category: 'czerwiec', url: 'https://arkusze.pl/matura-fizyka-2020-czerwiec-poziom-rozszerzony/' },
        { category: 'czerwiec', url: 'https://arkusze.pl/matura-fizyka-2020-lipiec-poziom-rozszerzony/' },
        { category: 'czerwiec', url: 'https://arkusze.pl/matura-fizyka-2019-czerwiec-poziom-rozszerzony/' },
        { category: 'czerwiec', url: 'https://arkusze.pl/matura-fizyka-2018-czerwiec-poziom-rozszerzony/' },
        { category: 'czerwiec', url: 'https://arkusze.pl/matura-fizyka-2017-czerwiec-poziom-rozszerzony/' },
        { category: 'czerwiec', url: 'https://arkusze.pl/matura-fizyka-2016-czerwiec-poziom-rozszerzony/' },
        { category: 'czerwiec', url: 'https://arkusze.pl/matura-fizyka-2015-czerwiec-poziom-rozszerzony/' }
    ];

    const results = [];
    for (const page of pages) {
        console.log(`Checking ${page.url}...`);
        const pdfs = await getPdfsFromPage(page.url);
        console.log(`  Found ${pdfs.length} PDFs:`, pdfs);
        results.push({ ...page, pdfs });
    }

    fs.writeFileSync('tools/discovered_cke_pdfs.json', JSON.stringify(results, null, 2));
    console.log('\nSaved all discovered PDFs to tools/discovered_cke_pdfs.json');
}

run().catch(console.error);
