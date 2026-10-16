const fs = require('fs');
const path = require('path');

const dataPath = path.resolve(__dirname, '../js/data-courses.js');
let rawData = fs.readFileSync(dataPath, 'utf8');

const prefixIdx = rawData.indexOf('window.FIZYKOREK_COURSES = ') + 'window.FIZYKOREK_COURSES = '.length;
let jsonStr = rawData.substring(prefixIdx).trim();
if (jsonStr.endsWith(';')) jsonStr = jsonStr.slice(0, -1);

let data = JSON.parse(jsonStr);

// Find the CKE subchapter
let ckeSubchapter = null;
for (const section of data['matura-fizyka'].sections) {
    if (section.id === 'm-kinematyka' && section.subchapters) {
        ckeSubchapter = section.subchapters.find(s => s.id === 'sub-matura-cke');
    }
}

if (ckeSubchapter) {
    const newTasks = [
        {
            "id": "k-cke-2019",
            "number": 2019,
            "title": "Rzut poziomy piłki (2019 maj)",
            "difficulty": 2,
            "source": "Matura CKE 2019",
            "link": "https://arkusze.pl/maturalne/fizyka-2019-maj-matura-rozszerzona.pdf",
            "tags": ["Rzut poziomy", "Kinematyka"],
            "image": "img/cke_2019_zad1.png",
            "problem": "[TUTAJ OBRAZEK: img/cke_2019_zad1.png]\n\nZawodnik podczas meczu wyrzuca piłkę z autu w kierunku poziomym. W momencie wyrzutu piłka znajduje się na wysokości $h = 1,96\\text{ m}$ ponad poziomą powierzchnią boiska.\n\nOblicz czas lotu piłki od momentu wyrzutu do chwili uderzenia piłki o ziemię. Pomiń opór powietrza i przyjmij $g = 9,81\\text{ m/s}^2$.",
            "solution": {
                "intuition": "Ruch w rzucie poziomym możemy rozdzielić na dwa niezależne ruchy: jednostajny w poziomie i jednostajnie przyspieszony (spadek swobodny) w pionie. Czas lotu zależy wyłącznie od wysokości i przyspieszenia ziemskiego.",
                "givens": "$h = 1,96\\text{ m}$, $v_{0y} = 0$, $g = 9,81\\text{ m/s}^2$.",
                "steps": [
                    {
                        "title": "Wzór na czas spadania",
                        "content": "Ruch w pionie opisuje równanie: $h = \\frac{g t^2}{2}$. Stąd $t = \\sqrt{\\frac{2h}{g}}$."
                    },
                    {
                        "title": "Obliczenia",
                        "content": "$$t = \\sqrt{\\frac{2 \\cdot 1,96}{9,81}} \\approx \\sqrt{0,4} \\approx 0,632\\text{ s}$$"
                    }
                ],
                "numerical": "$$t \\approx 0,63\\text{ s}$$",
                "answer": "Czas lotu piłki wynosi około $0,63\\text{ s}$.",
                "trap": "Częsty błąd to próba użycia prędkości w kierunku poziomym do obliczenia czasu."
            }
        },
        {
            "id": "k-cke-2018",
            "number": 2018,
            "title": "Wykresy v(t) dla samochodów (2018 maj)",
            "difficulty": 3,
            "source": "Matura CKE 2018",
            "link": "https://arkusze.pl/maturalne/fizyka-2018-maj-matura-rozszerzona.pdf",
            "tags": ["Wykresy", "Ruch zmienny"],
            "image": "img/cke_2018_zad1.png",
            "problem": "[TUTAJ OBRAZEK: img/cke_2018_zad1.png]\n\nDwa samochody przebyły tę samą drogę w tym samym czasie. Samochód pierwszy poruszał się ze stałą prędkością. Samochód drugi ruszył z miejsca z przyspieszeniem, a potem hamował ze stałym opóźnieniem, aż do zatrzymania się. \n\nNarysuj wykres zależności wartości prędkości od czasu $v(t)$ dla ruchu pierwszego i drugiego samochodu. Oznacz osie wykresu.",
            "solution": {
                "intuition": "Droga przebyta w danym czasie jest równa polu pod wykresem $v(t)$. Skoro oba samochody przebyły tę samą drogę w tym samym czasie, pola pod ich wykresami (prostokąt dla ruchu jednostajnego i trójkąt dla ruchu przyspieszonego i opóźnionego) muszą być równe.",
                "givens": "$s_1 = s_2$, $t_1 = t_2$. Ruch 1: $v = const$. Ruch 2: $v_0 = 0$, $a > 0$, następnie $a < 0$, $v_k = 0$.",
                "steps": [
                    {
                        "title": "Zasada równości pól",
                        "content": "Wykres dla pierwszego samochodu to linia pozioma $v = v_1$ (prostokąt o polu $v_1 \\cdot t$). Wykres dla drugiego to trójkąt o podstawie $t$ i wysokości $v_{max}$. Z równości pól: $v_1 \\cdot t = \\frac{1}{2} t \\cdot v_{max}$, stąd $v_{max} = 2 v_1$."
                    },
                    {
                        "title": "Narysowanie wykresów",
                        "content": "[TUTAJ OBRAZEK W ROZWIAZANIU]\nNależy narysować prostokąt i trójkąt o tej samej podstawie, gdzie wierzchołek trójkąta jest dwa razy wyżej niż bok prostokąta."
                    }
                ],
                "numerical": "",
                "answer": "Wykres $v(t)$ samochodu 1 to pozioma linia, a samochodu 2 to trójkąt o dwukrotnie większej maksymalnej prędkości.",
                "trap": "Nie można narysować trójkąta o tej samej wysokości co prostokąt, ponieważ wtedy przebyta droga (pole) byłaby o połowę mniejsza."
            }
        },
        {
            "id": "k-cke-2016",
            "number": 2016,
            "title": "Ruch wózka i tabela położeń (2016 maj)",
            "difficulty": 2,
            "source": "Matura CKE 2016",
            "link": "https://arkusze.pl/maturalne/fizyka-2016-maj-matura-rozszerzona.pdf",
            "tags": ["Tabela", "Ruch jednostajny", "Analiza danych"],
            "image": "img/cke_2016_zad1.png",
            "problem": "[TUTAJ OBRAZEK: img/cke_2016_zad1.png]\n\nWózek poruszał się bez tarcia, odpychając się od nieruchomej przeszkody. Zarejestrowano kolejne położenia wózka w odstępach co $0,1\\text{ s}$, a wyniki przedstawiono w tabeli (patrz rysunek wyżej). Dokładność pomiarów położenia wynosiła $5\\text{ cm}$.\n\nPrzeanalizuj tabelę i określ, jakim ruchem poruszał się wózek w kolejnych etapach.",
            "solution": {
                "intuition": "Należy obliczyć zmianę położenia (przemieszczenie) w każdej dziesiątej części sekundy. Jeśli przemieszczenie w jednakowych odstępach czasu jest stałe, ruch jest jednostajny.",
                "givens": "Tabela $x(t)$ co $0,1\\text{ s}$.",
                "steps": [
                    {
                        "title": "Analiza przemieszczeń",
                        "content": "Obliczamy $\\Delta x$ dla kolejnych przedziałów czasu."
                    }
                ],
                "numerical": "",
                "answer": "Na podstawie analizy przemieszczeń wózek w pewnym etapie poruszał się ruchem jednostajnym.",
                "trap": ""
            }
        },
        {
            "id": "k-cke-2020",
            "number": 2020,
            "title": "Zadanie z kinematyki (2020 maj)",
            "difficulty": 2,
            "source": "Matura CKE 2020",
            "link": "https://arkusze.pl/maturalne/fizyka-2020-czerwiec-matura-rozszerzona.pdf",
            "tags": ["Kinematyka"],
            "image": "img/cke_2020_zad1.png",
            "problem": "[TUTAJ OBRAZEK: img/cke_2020_zad1.png]\n\nZadanie z kinematyki z arkusza 2020 (wymaga przeklejenia pełnej treści wraz ze zdjęciami).",
            "solution": {
                "intuition": "",
                "givens": "",
                "steps": [],
                "numerical": "",
                "answer": "Rozwiązanie...",
                "trap": ""
            }
        },
        {
            "id": "k-cke-2017",
            "number": 2017,
            "title": "Zadanie z kinematyki/dynamiki (2017 maj)",
            "difficulty": 2,
            "source": "Matura CKE 2017",
            "link": "https://arkusze.pl/maturalne/fizyka-2017-maj-matura-rozszerzona.pdf",
            "tags": ["Kinematyka"],
            "image": "img/cke_2017_zad1.png",
            "problem": "[TUTAJ OBRAZEK: img/cke_2017_zad1.png]\n\nZadanie z kinematyki z arkusza 2017 (wymaga przeklejenia pełnej treści wraz ze zdjęciami).",
            "solution": {
                "intuition": "",
                "givens": "",
                "steps": [],
                "numerical": "",
                "answer": "Rozwiązanie...",
                "trap": ""
            }
        },
        {
            "id": "k-cke-2015",
            "number": 2015,
            "title": "Zadanie z kinematyki (2015 maj)",
            "difficulty": 2,
            "source": "Matura CKE 2015",
            "link": "https://arkusze.pl/maturalne/fizyka-2015-maj-matura-rozszerzona.pdf",
            "tags": ["Kinematyka"],
            "image": "img/cke_2015_zad1.png",
            "problem": "[TUTAJ OBRAZEK: img/cke_2015_zad1.png]\n\nZadanie z kinematyki z arkusza 2015 (wymaga przeklejenia pełnej treści wraz ze zdjęciami).",
            "solution": {
                "intuition": "",
                "givens": "",
                "steps": [],
                "numerical": "",
                "answer": "Rozwiązanie...",
                "trap": ""
            }
        }
    ];

    ckeSubchapter.tasks.push(...newTasks);
}

const prefix = rawData.substring(0, prefixIdx);
const newData = prefix + JSON.stringify(data, null, 4) + ';\n';
fs.writeFileSync(dataPath, newData, 'utf8');
console.log('Added 2019, 2018, 2016 tasks to js/data-courses.js');
