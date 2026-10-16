/**
 * FizyKorek 2.0 – Baza Kursów i Zadań Fizycznych
 */

window.FIZYKOREK_COURSES = {
    "matura-fizyka": {
        "id": "matura-fizyka",
        "title": "Matura z Fizyki (CKE Poziom Rozszerzony)",
        "subtitle": "Oficjalny program przygotowań maturalnych: Fundamenty, etapy wprowadzające i arkusze CKE",
        "badge": "CKE Formuła 2023 • Poziom Rozszerzony",
        "icon": "⚛️",
        "accentColor": "#6366f1",
        "sections": [
            {
                "id": "m-kinematyka",
                "title": "Dział 1: Kinematyka",
                "icon": "🚀",
                "badge": "5 Etapów Wprowadzających + Matura CKE",
                "desc": "Kompletny dział: od prędkości i przyspieszenia, przez ruch względny i rzuty, po zadania maturalne CKE.",
                "subchapters": [
                    {
                        "id": "sub-ruch-jednostajny",
                        "title": "1. Ruch jednostajny prostoliniowy",
                        "icon": "📏",
                        "desc": "Prędkość średnia, droga, wykresy v(t) i s(t), spotkania ciał na prostej.",
                        "tasks": [
                            {
                                "id": "k-zad-1",
                                "number": 1,
                                "title": "Zadanie 1. Kierowca Kraków – Chrzanów",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Ruch jednostajny prostoliniowy",
                                "link": "https://skul.pl/fizyka/zadanie,4-1,zid,81231",
                                "tags": [
                                    "Prędkość średnia",
                                    "Dwa etapy czasu"
                                ],
                                "problem": "W czasie pierwszych $30\\text{ minut}$ kierowca jedzie autostradą z Krakowa do Chrzanowa z szybkością średnią $95\\text{ km/h}$. Następnie zjeżdża z autostrady i przez kolejne $45\\text{ minut}$ porusza się z szybkością średnią $45\\text{ km/h}$.\n\nOblicz szybkość średnią kierowcy na całej trasie.",
                                "solution": {
                                    "intuition": "Szybkość średnia to ZAWSZE całkowita przebyta droga podzielona przez całkowity czas podróży ($v_{sr} = \\frac{s_{calk}}{t_{calk}}$). Nie możemy po prostu dodać $95$ i $45$ i podzielić przez dwa, bo kierowca jechał dłużej z mniejszą prędkością!",
                                    "givens": "$t_1 = 30\\text{ min} = 0{,}5\\text{ h}$, $v_1 = 95\\text{ km/h}$, $t_2 = 45\\text{ min} = 0{,}75\\text{ h}$, $v_2 = 45\\text{ km/h}$.",
                                    "steps": [
                                        {
                                            "title": "Obliczenie dróg przebytych na poszczególnych etapach",
                                            "content": "$$s_1 = v_1 \\cdot t_1 = 95\\text{ km/h} \\cdot 0{,}5\\text{ h} = 47{,}5\\text{ km}$$\n$$s_2 = v_2 \\cdot t_2 = 45\\text{ km/h} \\cdot 0{,}75\\text{ h} = 33{,}75\\text{ km}$$"
                                        },
                                        {
                                            "title": "Całkowita droga i całkowity czas",
                                            "content": "$$s_{calk} = s_1 + s_2 = 47{,}5\\text{ km} + 33{,}75\\text{ km} = 81{,}25\\text{ km}$$\n$$t_{calk} = t_1 + t_2 = 0{,}5\\text{ h} + 0{,}75\\text{ h} = 1{,}25\\text{ h} = 75\\text{ min}$$"
                                        },
                                        {
                                            "title": "Wyznaczenie szybkości średniej",
                                            "content": "$$v_{sr} = \\frac{s_{calk}}{t_{calk}} = \\frac{81{,}25\\text{ km}}{1{,}25\\text{ h}} = 65\\text{ km/h}$$"
                                        }
                                    ],
                                    "numerical": "$$v_{sr} = \\frac{47{,}5 + 33{,}75}{0{,}5 + 0{,}75} = \\frac{81{,}25}{1{,}25} = 65\\text{ km/h}$$",
                                    "answer": "Szybkość średnia kierowcy na całej trasie wynosi $65\\text{ km/h}$.",
                                    "trap": "Nie wolno liczyć średniej arytmetycznej $\\frac{95+45}{2} = 70\\text{ km/h}$, ponieważ czasy trwania obu etapów są różne ($30\\text{ min} \\neq 45\\text{ min}$)."
                                }
                            },
                            {
                                "id": "k-zad-2",
                                "number": 2,
                                "title": "Zadanie 2. Bieg lekkoatlety po bieżni",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Ruch jednostajny prostoliniowy",
                                "link": "https://skul.pl/fizyka/zadanie,4-3,zid,81233",
                                "tags": [
                                    "Prędkość średnia",
                                    "Jednostki SI"
                                ],
                                "problem": "Pierwsze cztery okrążenia, o długości $400\\text{ m}$ każde, lekkoatleta przebiega w czasie $4\\text{ min i } 20\\text{ s}$, kolejne trzy i pół okrążenia – w czasie $6\\text{ min}$, a ostatnie $200\\text{ m}$ – z szybkością $8\\text{ m/s}$.\n\nOblicz szybkość średnią lekkoatlety podczas całego biegu.",
                                "solution": {
                                    "intuition": "Rozbij bieg na trzy etapy, przelicz wszystkie czasy na sekundy, a odległości na metry. Następnie zsumuj drogi i czasy.",
                                    "givens": "$s_1 = 4 \\cdot 400\\text{ m} = 1600\\text{ m}$, $t_1 = 4\\text{ min } 20\\text{ s} = 260\\text{ s}$.\n$s_2 = 3{,}5 \\cdot 400\\text{ m} = 1400\\text{ m}$, $t_2 = 6\\text{ min} = 360\\text{ s}$.\n$s_3 = 200\\text{ m}$, $v_3 = 8\\text{ m/s}$.",
                                    "steps": [
                                        {
                                            "title": "Czas trwania trzeciego etapu",
                                            "content": "$$t_3 = \\frac{s_3}{v_3} = \\frac{200\\text{ m}}{8\\text{ m/s}} = 25\\text{ s}$$"
                                        },
                                        {
                                            "title": "Całkowita droga i czas",
                                            "content": "$$s_{calk} = 1600\\text{ m} + 1400\\text{ m} + 200\\text{ m} = 3200\\text{ m}$$\n$$t_{calk} = 260\\text{ s} + 360\\text{ s} + 25\\text{ s} = 645\\text{ s}$$"
                                        },
                                        {
                                            "title": "Szybkość średnia",
                                            "content": "$$v_{sr} = \\frac{s_{calk}}{t_{calk}} = \\frac{3200\\text{ m}}{645\\text{ s}} \\approx 4{,}96\\text{ m/s} \\approx 17{,}86\\text{ km/h}$$"
                                        }
                                    ],
                                    "numerical": "$$v_{sr} = \\frac{3200\\text{ m}}{645\\text{ s}} \\approx 4{,}96\\text{ m/s}$$",
                                    "answer": "Szybkość średnia lekkoatlety wynosi około $4{,}96\\text{ m/s}$ ($17{,}9\\text{ km/h}$).",
                                    "trap": "Pamiętaj o przeliczeniu minut na sekundy ($1\\text{ min} = 60\\text{ s}$)."
                                }
                            },
                            {
                                "id": "k-zad-3",
                                "number": 3,
                                "title": "Zadanie 3. Trasa Kraków – Krościenko i powrót",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Ruch jednostajny prostoliniowy",
                                "link": "https://skul.pl/fizyka/zadanie,4-6,a,pid,78588",
                                "tags": [
                                    "Średnia harmoniczna",
                                    "Średnia arytmetyczna"
                                ],
                                "problem": "Pierwszą połowę drogi z Krakowa do Krościenka bus przebywa z szybkością średnią $30\\text{ km/h}$, a drugą połowę z szybkością średnią $60\\text{ km/h}$. W drodze powrotnej przez pierwszą połowę czasu porusza się z szybkością średnią $80\\text{ km/h}$, a przez drugą połowę czasu z szybkością średnią $60\\text{ km/h}$.\n\nOblicz szybkości średnie busa na trasach:\na) z Krakowa do Krościenka,\nb) z Krościenka do Krakowa,\nc) z Krakowa do Krościenka i z powrotem.",
                                "solution": {
                                    "intuition": "Rozwiązując zadania z szybkością średnią, NIGDY nie używaj skrótów myślowych i gotowych wzorów na średnią harmoniczną czy arytmetyczną bez ich wyprowadzenia. Zawsze wychodź z fundamentalnej definicji: szybkość średnia to całkowita droga podzielona przez całkowity czas ruchu ($v = \\frac{s_{calk}}{t_{calk}}$).",
                                    "givens": "Tam: $s_1 = \\frac{s}{2}$, $v_1 = 30\\text{ km/h}$, $s_2 = \\frac{s}{2}$, $v_2 = 60\\text{ km/h}$.\nZ powrotem: $t_3 = \\frac{t_{pow}}{2}$, $v_3 = 80\\text{ km/h}$, $t_4 = \\frac{t_{pow}}{2}$, $v_4 = 60\\text{ km/h}$.",
                                    "steps": [
                                        {
                                            "title": "a) Szybkość średnia z Krakowa do Krościenka",
                                            "content": "Zawsze startujemy z definicji: $v_{tam} = \\frac{s_{tam}}{t_{tam}}$. Czas całkowity $t_{tam}$ to suma czasów na obu połowach drogi: $t_1 + t_2$. Z definicji prędkości $t = \\frac{s}{v}$, więc: $t_1 = \\frac{s/2}{v_1}$ oraz $t_2 = \\frac{s/2}{v_2}$.\nPodstawiamy do definicji:\n$$v_{tam} = \\frac{s}{\\frac{s/2}{v_1} + \\frac{s/2}{v_2}} = \\frac{s}{\\frac{s}{2v_1} + \\frac{s}{2v_2}}$$\nWyciągając $s$ przed nawias w mianowniku, zauważamy, że droga się skraca:\n$$v_{tam} = \\frac{1}{\\frac{1}{2v_1} + \\frac{1}{2v_2}} = \\frac{1}{\\frac{v_2}{2v_1 v_2} + \\frac{v_1}{2v_1 v_2}} = \\frac{2v_1 v_2}{v_1 + v_2}$$\n$$v_{tam} = \\frac{2 \\cdot 30 \\cdot 60}{30 + 60} = \\frac{3600}{90} = 40\\text{ km/h}$$"
                                        },
                                        {
                                            "title": "b) Szybkość średnia z Krościenka do Krakowa",
                                            "content": "Wychodzimy z definicji: $v_{pow} = \\frac{s_{pow}}{t_{pow}}$. Droga powrotna to suma odcinków pokonanych w pierwszej i drugiej połowie czasu: $s_{pow} = s_3 + s_4$. Wiemy, że $s = v \\cdot t$, więc:\n$$s_3 = v_3 \\cdot \\frac{t_{pow}}{2} \\quad \\text{oraz} \\quad s_4 = v_4 \\cdot \\frac{t_{pow}}{2}$$\nPodstawiamy to do wzoru na całkowitą drogę:\n$$s_{pow} = v_3 \\cdot \\frac{t_{pow}}{2} + v_4 \\cdot \\frac{t_{pow}}{2} = \\frac{v_3 + v_4}{2} \\cdot t_{pow}$$\nWracamy do definicji szybkości średniej:\n$$v_{pow} = \\frac{s_{pow}}{t_{pow}} = \\frac{\\frac{v_3 + v_4}{2} \\cdot t_{pow}}{t_{pow}} = \\frac{v_3 + v_4}{2}$$\n$$v_{pow} = \\frac{80 + 60}{2} = 70\\text{ km/h}$$"
                                        },
                                        {
                                            "title": "c) Szybkość średnia na całej trasie w obie strony",
                                            "content": "Definicja: $v_{calk} = \\frac{s_{calk}}{t_{calk}}$.\nCałkowita droga to trasa z Krakowa do Krościenka i z powrotem, czyli $2s$.\nCałkowity czas to suma czasu w jedną stronę ($t_{tam}$) i z powrotem ($t_{pow}$).\nZ definicji $t = \\frac{s}{v}$, obliczamy czasy, wstawiając policzone wcześniej szybkości średnie:\n$t_{tam} = \\frac{s}{v_{tam}} = \\frac{s}{40}$ oraz $t_{pow} = \\frac{s}{v_{pow}} = \\frac{s}{70}$.\nPodstawiamy do głównego wzoru:\n$$v_{calk} = \\frac{2s}{\\frac{s}{40} + \\frac{s}{70}}$$\nDroga $s$ znowu się skraca:\n$$v_{calk} = \\frac{2}{\\frac{1}{40} + \\frac{1}{70}} = \\frac{2}{\\frac{7}{280} + \\frac{4}{280}} = \\frac{2}{\\frac{11}{280}} = \\frac{5600}{110} \\approx 50{,}91\\text{ km/h}$$"
                                        }
                                    ],
                                    "numerical": "$$v_{tam} = 40\\text{ km/h}, \\quad v_{pow} = 70\\text{ km/h}, \\quad v_{calk} = \\frac{5600}{110} \\approx 50{,}9\\text{ km/h}$$",
                                    "answer": "a) $40\\text{ km/h}$, b) $70\\text{ km/h}$, c) $\\approx 50{,}9\\text{ km/h}$.",
                                    "trap": "Nie wolno liczyć w podpunkcie c) średniej arytmetycznej z $40$ i $70$! Mimo, że to proste wyliczenie, fizycznie to błędne działanie, bo czasy na tych odcinkach nie są sobie równe. Wróć do definicji $v = s / t$ aby uniknąć pomyłki."
                                }
                            },
                            {
                                "id": "k-zad-4",
                                "number": 4,
                                "title": "Zadanie 4. Motocyklista na 2/3 i 1/3 drogi",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Ruch jednostajny prostoliniowy",
                                "link": "https://skul.pl/fizyka/zadanie,4-7,a,pid,78591",
                                "tags": [
                                    "Prędkość średnia",
                                    "Stosunek czasów"
                                ],
                                "problem": "Motocyklista $\\frac{2}{3}$ drogi przejechał z szybkością $10\\text{ m/s}$, a pozostałą $\\frac{1}{3}$ drogi z szybkością $20\\text{ m/s}$.\n\na) Oblicz szybkość średnią motocyklisty na całej drodze.\nb) Rozstrzygnij, czy na podstawie tych danych można obliczyć czas przejazdu motocyklisty dla każdej części drogi. Czy można obliczyć stosunek tych czasów?",
                                "solution": {
                                    "intuition": "Nawet jeśli nie znamy całkowitej długości drogi $s$, możemy policzyć prędkość średnią oraz stosunek czasów, ponieważ litera $s$ skraca się w ułamku!",
                                    "givens": "$s_1 = \\frac{2}{3} s$, $v_1 = 10\\text{ m/s}$, $s_2 = \\frac{1}{3} s$, $v_2 = 20\\text{ m/s}$.",
                                    "steps": [
                                        {
                                            "title": "a) Szybkość średnia na całej drodze",
                                            "content": "$$t_1 = \\frac{s_1}{v_1} = \\frac{2s/3}{10} = \\frac{2s}{30} = \\frac{s}{15}$$\n$$t_2 = \\frac{s_2}{v_2} = \\frac{s/3}{20} = \\frac{s}{60}$$\n$$t_{calk} = \\frac{s}{15} + \\frac{s}{60} = \\frac{4s + s}{60} = \\frac{5s}{60} = \\frac{s}{12}$$\n$$v_{sr} = \\frac{s}{t_{calk}} = \\frac{s}{s/12} = 12\\text{ m/s}$$"
                                        },
                                        {
                                            "title": "b) Rozstrzygnięcie o czasach i ich stosunku",
                                            "content": "Nie można obliczyć bezwzględnych czasów przejazdu $t_1$ i $t_2$, ponieważ nie znamy długości drogi $s$.\nMożna jednak bez problemu obliczyć stosunek tych czasów:\n$$\\frac{t_1}{t_2} = \\frac{\\frac{s}{15}}{\\frac{s}{60}} = \\frac{60}{15} = 4$$"
                                        }
                                    ],
                                    "numerical": "$$v_{sr} = 12\\text{ m/s}, \\quad \\frac{t_1}{t_2} = 4$$",
                                    "answer": "a) $v_{sr} = 12\\text{ m/s}$.\nb) Czasów bezwzględnych nie można obliczyć bez znajomości $s$. Stosunek czasów wynosi $\\frac{t_1}{t_2} = 4$.",
                                    "trap": "Częste przeoczenie: próba wymyślania fikcyjnej drogi $s$. Zawsze zostaw $s$ jako zmienną i pokaż, że się skraca."
                                }
                            },
                            {
                                "id": "k-zad-5",
                                "number": 5,
                                "title": "Zadanie 5. Wykres współrzędnej prędkości biegacza",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Ruch jednostajny prostoliniowy",
                                "link": "https://skul.pl/fizyka/zadanie,4-9,a,pid,78593",
                                "tags": [
                                    "Wykres v(t)",
                                    "Pole pod wykresem",
                                    "Droga a przemieszczenie"
                                ],
                                "problem": "Wykres przedstawia zależność współrzędnej prędkości $v_x$ od czasu pewnego biegacza, który biegnie po prostoliniowym odcinku toru przez $2\\text{ minuty}$ ($120\\text{ s}$):\n- $0 - 20\\text{ s}$: $v_x = 5\\text{ m/s}$\n- $20 - 30\\text{ s}$: $v_x = 8\\text{ m/s}$\n- $30 - 40\\text{ s}$: $v_x = 5\\text{ m/s}$\n- $40 - 60\\text{ s}$: $v_x = 6\\text{ m/s}$\n- $60 - 80\\text{ s}$: $v_x = 8\\text{ m/s}$\n- $80 - 100\\text{ s}$: $v_x = 4\\text{ m/s}$\n- $100 - 110\\text{ s}$: $v_x = 0\\text{ m/s}$\n- $110 - 120\\text{ s}$: $v_x = -4\\text{ m/s}$\n\n<div class=\"chart-container-svg\">\n<svg viewBox=\"0 0 520 220\" class=\"physics-chart-svg\">\n  <defs>\n    <pattern id=\"grid5\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.08)\" stroke-width=\"1\"/>\n    </pattern>\n  </defs>\n  <rect width=\"520\" height=\"220\" fill=\"rgba(0,0,0,0.2)\"/>\n  <rect width=\"520\" height=\"220\" fill=\"url(#grid5)\"/>\n  <!-- Osie -->\n  <line x1=\"40\" y1=\"150\" x2=\"500\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  <line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"210\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  <text x=\"505\" y=\"154\" fill=\"#94a3b8\" font-size=\"12\">t (s)</text>\n  <text x=\"15\" y=\"25\" fill=\"#94a3b8\" font-size=\"12\">vx (m/s)</text>\n  <!-- Skale -->\n  <text x=\"30\" y=\"154\" fill=\"#94a3b8\" font-size=\"10\">0</text>\n  <text x=\"25\" y=\"125\" fill=\"#94a3b8\" font-size=\"10\">2</text>\n  <text x=\"25\" y=\"100\" fill=\"#94a3b8\" font-size=\"10\">4</text>\n  <text x=\"25\" y=\"75\" fill=\"#94a3b8\" font-size=\"10\">6</text>\n  <text x=\"25\" y=\"50\" fill=\"#94a3b8\" font-size=\"10\">8</text>\n  <text x=\"20\" y=\"200\" fill=\"#94a3b8\" font-size=\"10\">-4</text>\n  <!-- Czasy -->\n  <text x=\"110\" y=\"166\" fill=\"#94a3b8\" font-size=\"10\">20</text>\n  <text x=\"180\" y=\"166\" fill=\"#94a3b8\" font-size=\"10\">40</text>\n  <text x=\"250\" y=\"166\" fill=\"#94a3b8\" font-size=\"10\">60</text>\n  <text x=\"320\" y=\"166\" fill=\"#94a3b8\" font-size=\"10\">80</text>\n  <text x=\"390\" y=\"166\" fill=\"#94a3b8\" font-size=\"10\">100</text>\n  <text x=\"460\" y=\"166\" fill=\"#94a3b8\" font-size=\"10\">120</text>\n  <!-- Wykres schodkowy czerwony -->\n  <path d=\"M 40 87 L 110 87 L 110 50 L 145 50 L 145 87 L 180 87 L 180 75 L 250 75 L 250 50 L 320 50 L 320 100 L 390 100 L 390 150 L 425 150 L 425 200 L 460 200\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n</svg>\n</div>\n\nNa podstawie wykresu:\na) oblicz drogę, jaką przebył biegacz,\nb) opisz, jak wygląda wykres drogi w zależności od czasu,\nc) oblicz szybkość średnią biegacza,\nd) oblicz wartość prędkości średniej biegacza.",
                                "solution": {
                                    "intuition": "Pamiętaj o kluczowej różnicy:\n- DROGA $s$ to suma wartości bezwzględnych pól pod wykresem (zawsze rośnie, nawet gdy biegacz cofa się).\n- PRZEMIESZCZENIE $\\Delta x$ uwzględnia znak minus (cofanie się odejmuje przemieszczenie!).\n- Szybkość średnia = droga / czas, a prędkość średnia = przemieszczenie / czas.",
                                    "givens": "Poszczególne odcinki czasu i prędkości odczytane z wykresu.",
                                    "steps": [
                                        {
                                            "title": "a) Obliczenie drogi (pola prostokątów)",
                                            "content": "$$s_1 = 5\\text{ m/s} \\cdot 20\\text{ s} = 100\\text{ m}$$\n$$s_2 = 8\\text{ m/s} \\cdot 10\\text{ s} = 80\\text{ m}$$\n$$s_3 = 5\\text{ m/s} \\cdot 10\\text{ s} = 50\\text{ m}$$\n$$s_4 = 6\\text{ m/s} \\cdot 20\\text{ s} = 120\\text{ m}$$\n$$s_5 = 8\\text{ m/s} \\cdot 20\\text{ s} = 160\\text{ m}$$\n$$s_6 = 4\\text{ m/s} \\cdot 20\\text{ s} = 80\\text{ m}$$\n$$s_7 = 0\\text{ m/s} \\cdot 10\\text{ s} = 0\\text{ m}$$\n$$s_8 = |-4\\text{ m/s}| \\cdot 10\\text{ s} = 40\\text{ m}$$\n$$s_{calk} = 100 + 80 + 50 + 120 + 160 + 80 + 0 + 40 = 730\\text{ m}$$"
                                        },
                                        {
                                            "title": "b) Wykres drogi od czasu $s(t)$",
                                            "content": "Wykres $s(t)$ to linia łamana, składająca się z odcinków prostych o różnych nachyleniach (współczynnik kierunkowy równy aktualnej wartości szybkości). Funkcja $s(t)$ jest niemalejąca."
                                        },
                                        {
                                            "title": "c) Szybkość średnia",
                                            "content": "$$v_{sr} = \\frac{s_{calk}}{t_{calk}} = \\frac{730\\text{ m}}{120\\text{ s}} \\approx 6{,}08\\text{ m/s}$$"
                                        },
                                        {
                                            "title": "d) Wartość prędkości średniej (wektorowej)",
                                            "content": "Przemieszczenie uwzględnia cofnięcie się:\n$$\\Delta x = 100 + 80 + 50 + 120 + 160 + 80 + 0 - 40 = 650\\text{ m}$$\n$$|v_{sr,wekt}| = \\frac{|\\Delta x|}{t_{calk}} = \\frac{650\\text{ m}}{120\\text{ s}} \\approx 5{,}42\\text{ m/s}$$"
                                        }
                                    ],
                                    "numerical": "$$s = 730\\text{ m}, \\quad v_{sr} = 6{,}08\\text{ m/s}, \\quad |v_{sr,wekt}| = 5{,}42\\text{ m/s}$$",
                                    "answer": "a) Droga wynosi $730\\text{ m}$.\nb) Wykres $s(t)$ to łamana rosnąca od $0$ do $730\\text{ m}$.\nc) Szybkość średnia wynosi $6{,}08\\text{ m/s}$.\nd) Wartość prędkości średniej wynosi $5{,}42\\text{ m/s}$.",
                                    "trap": "Częsty błąd: odejmowanie drogi przy $v_x < 0$ w podpunkcie a. Droga nigdy nie maleje!"
                                }
                            },
                            {
                                "id": "k-zad-6",
                                "number": 6,
                                "title": "Zadanie 6. Spacer pani Matyldy po alejce",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Ruch jednostajny prostoliniowy",
                                "link": "https://skul.pl/fizyka/zadanie,4-10,a,pid,78597",
                                "tags": [
                                    "Wykres v(t)",
                                    "Interpretacja fizyczna"
                                ],
                                "problem": "Pani Matylda wyruszyła na półgodzinny spacer ($30\\text{ min}$) po prostej alejce parkowej. Zależność współrzędnej $v_x$ jej prędkości od czasu przedstawiono na wykresie:\n- $0 - 3\\text{ min}$: $v_x = 1\\text{ m/s}$\n- $3 - 12\\text{ min}$: $v_x = 0{,}5\\text{ m/s}$\n- $12 - 19\\text{ min}$: $v_x = 0\\text{ m/s}$ (spoczynek przy rzeźbie)\n- $19 - 29\\text{ min}$: $v_x = -1\\text{ m/s}$ (powrót)\n- $29 - 30\\text{ min}$: $v_x = 0\\text{ m/s}$\n\na) Odpowiedz na poniższe pytania:\n- jak długo pani Matylda podziwiała rzeźbę na końcu alejki?\n- jak długa była alejka?\n- po jakim czasie od chwili rozpoczęcia spaceru pani Matylda zaczęła wracać?\nb) Oblicz szybkość średnią spacerowiczki podczas całego spaceru oraz wartość jej prędkości średniej.",
                                "solution": {
                                    "intuition": "Ujemna wartość prędkości oznacza ruch w przeciwną stronę (powrót). Prędkość równa zero to postój.",
                                    "givens": "Czasy i prędkości odczytane z wykresu.",
                                    "steps": [
                                        {
                                            "title": "Odpowiedzi na pytania (część a)",
                                            "content": "1. Rzeźba była podziwiana od $12$ do $19\\text{ min}$, czyli przez $19 - 12 = 7\\text{ minut}$.\n2. Długość alejki to droga przebyta w tamtą stronę ($0$ do $12\\text{ min}$):\n$$s_1 = 1\\text{ m/s} \\cdot 3\\text{ min} \\cdot 60\\text{ s} = 180\\text{ m}$$\n$$s_2 = 0{,}5\\text{ m/s} \\cdot 9\\text{ min} \\cdot 60\\text{ s} = 270\\text{ m}$$\n$$d = s_1 + s_2 = 180\\text{ m} + 270\\text{ m} = 450\\text{ m}$$\n3. Pani Matylda zaczęła wracać w $19.\\text{ minucie}$ spaceru (gdy $v_x$ stało się ujemne)."
                                        },
                                        {
                                            "title": "Część b: Szybkość średnia i prędkość średnia",
                                            "content": "Droga powrotna:\n$$s_{pow} = |-1\\text{ m/s}| \\cdot 10\\text{ min} \\cdot 60\\text{ s} = 600\\text{ m}$$\nCałkowita droga: $s_{calk} = 450\\text{ m} + 600\\text{ m} = 1050\\text{ m}$.\nCałkowity czas: $t_{calk} = 30\\text{ min} = 1800\\text{ s}$.\n$$v_{sr} = \\frac{1050\\text{ m}}{1800\\text{ s}} \\approx 0{,}583\\text{ m/s}$$\nPrzemieszczenie końcowe:\n$$\\Delta x = 450\\text{ m} - 600\\text{ m} = -150\\text{ m}$$\n$$|v_{sr,wekt}| = \\frac{|-150\\text{ m}|}{1800\\text{ s}} = \\frac{150}{1800} \\approx 0{,}083\\text{ m/s}$$"
                                        }
                                    ],
                                    "numerical": "$$t_{rzezba} = 7\\text{ min}, \\quad d = 450\\text{ m}, \\quad t_{start,pow} = 19\\text{ min}, \\quad v_{sr} \\approx 0{,}58\\text{ m/s}, \\quad |v_{sr,w}| \\approx 0{,}083\\text{ m/s}$$",
                                    "answer": "a) Rzeźbę podziwiała przez $7\\text{ min}$; alejka miała $450\\text{ m}$; wracać zaczęła po $19\\text{ min}$.\nb) Szybkość średnia: $0{,}58\\text{ m/s}$; wartość prędkości średniej: $0{,}083\\text{ m/s}$.",
                                    "trap": "Pamiętaj o przeliczeniu minut na sekundy przed mnożeniem przez prędkość w m/s!"
                                }
                            },
                            {
                                "id": "k-zad-7",
                                "number": 7,
                                "title": "Zadanie 7. Równania ruchu dwóch ciał",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Ruch jednostajny prostoliniowy",
                                "link": "https://skul.pl/fizyka/zadanie,4-13,a,pid,78603",
                                "tags": [
                                    "Równanie ruchu x(t)",
                                    "Punkt przecięcia"
                                ],
                                "problem": "Ruch jednego ciała opisano równaniem $x_1(t) = 5 + 2{,}5t$, a drugiego ciała równaniem $x_2(t) = 35 - 5t$ (współczynniki liczbowe są podane w jednostkach SI: metry i sekundy).\n\nDla pierwszych pięciu sekund obu ruchów:\na) narysuj w jednym układzie współrzędnych wykresy zależności położenia od czasu $x(t)$,\nb) narysuj wykresy współrzędnej prędkości od czasu $v_x(t)$,\nc) zinterpretuj fizycznie punkt przecięcia się wykresów $x(t)$.",
                                "solution": {
                                    "intuition": "Równanie $x(t) = x_0 + v t$ to linia prosta. Punkt przecięcia dwóch takich prostych to moment i miejsce spotkania obu ciał.",
                                    "givens": "$x_{01} = 5\\text{ m}$, $v_1 = 2{,}5\\text{ m/s}$. $x_{02} = 35\\text{ m}$, $v_2 = -5\\text{ m/s}$.",
                                    "steps": [
                                        {
                                            "title": "a) Wykresy $x(t)$",
                                            "content": "Ciało 1 startuje z $x = 5\\text{ m}$, a po $5\\text{ s}$: $x_1(5) = 5 + 2{,}5 \\cdot 5 = 17{,}5\\text{ m}$.\nCiało 2 startuje z $x = 35\\text{ m}$, a po $5\\text{ s}$: $x_2(5) = 35 - 5 \\cdot 5 = 10\\text{ m}$."
                                        },
                                        {
                                            "title": "b) Wykresy $v_x(t)$",
                                            "content": "Prędkości są stałe w czasie:\n- dla ciała 1: pozioma prosta na wysokości $v_1 = 2{,}5\\text{ m/s}$,\n- dla ciała 2: pozioma prosta na wysokości $v_2 = -5\\text{ m/s}$."
                                        },
                                        {
                                            "title": "c) Wyznaczenie punktu przecięcia (spotkania)",
                                            "content": "$$x_1(t) = x_2(t) \\implies 5 + 2{,}5t = 35 - 5t$$\n$$7{,}5t = 30 \\implies t_s = 4\\text{ s}$$\n$$x_s = 5 + 2{,}5 \\cdot 4 = 15\\text{ m}$$\nPunkt przecięcia oznacza spotkanie ciał: po $4\\text{ sekundach}$ w punkcie o współrzędnej $15\\text{ metrów}$."
                                        }
                                    ],
                                    "numerical": "$$t_s = 4\\text{ s}, \\quad x_s = 15\\text{ m}$$",
                                    "answer": "c) Punkt przecięcia oznacza czas ($4\\text{ s}$) i miejsce ($15\\text{ m}$) spotkania obu ciał.",
                                    "trap": "Znak minus przy prędkości drugiego ciała oznacza, że porusza się ono w stronę malejących współrzędnych osi $x$."
                                }
                            },
                            {
                                "id": "k-zad-8",
                                "number": 8,
                                "title": "Zadanie 8. Bieg Ali wzdłuż prostej i zawrócenie",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Ruch jednostajny prostoliniowy",
                                "link": "https://skul.pl/fizyka/zadanie,4-15,zid,81245",
                                "tags": [
                                    "Równania etapowe",
                                    "Zwrot wektora"
                                ],
                                "problem": "Przez pierwsze $4\\text{ minuty}$ ruchu Ala biegła wzdłuż prostej równoległej do osi $x$ zgodnie ze zwrotem tej osi i ze stałą szybkością $5\\text{ m/s}$. Przez kolejne $5\\text{ minut}$ biegła wzdłuż tej samej prostej ze stałą szybkością $6\\text{ m/s}$. Następnie zawróciła i przez kolejne $8\\text{ minut}$ biegła wzdłuż tej samej prostej z szybkością $3\\text{ m/s}$ w kierunku punktu, z którego wystartowała.\n\nNapisz równania $x(t)$ dla każdego etapu ruchu i narysuj wykres zależności położenia od czasu, jeżeli $x_0 = 0$.",
                                "solution": {
                                    "intuition": "Równanie każdego kolejnego etapu musi jako położenie początkowe przyjąć punkt, w którym zakończył się etap poprzedni!",
                                    "givens": "$t_1 = 4\\text{ min} = 240\\text{ s}$, $v_1 = 5\\text{ m/s}$.\n$t_2 = 5\\text{ min} = 300\\text{ s}$, $v_2 = 6\\text{ m/s}$.\n$t_3 = 8\\text{ min} = 480\\text{ s}$, $v_3 = -3\\text{ m/s}$.",
                                    "steps": [
                                        {
                                            "title": "Etap 1 ($0 \\le t \\le 240\\text{ s}$)",
                                            "content": "$$x_I(t) = 5t$$\nPołożenie na końcu etapu 1: $x(240) = 5 \\cdot 240 = 1200\\text{ m}$."
                                        },
                                        {
                                            "title": "Etap 2 ($240\\text{ s} < t \\le 540\\text{ s}$)",
                                            "content": "$$x_{II}(t) = 1200 + 6(t - 240) = 6t - 240$$\nPołożenie na końcu etapu 2: $x(540) = 1200 + 6 \\cdot 300 = 3000\\text{ m}$."
                                        },
                                        {
                                            "title": "Etap 3 ($540\\text{ s} < t \\le 1020\\text{ s}$)",
                                            "content": "Zawrócenie oznacza ujemną prędkość:\n$$x_{III}(t) = 3000 - 3(t - 540) = 4620 - 3t$$\nPołożenie końcowe: $x(1020) = 3000 - 3 \\cdot 480 = 3000 - 1440 = 1560\\text{ m}$."
                                        }
                                    ],
                                    "numerical": "$$x_I(240) = 1200\\text{ m}, \\quad x_{II}(540) = 3000\\text{ m}, \\quad x_{III}(1020) = 1560\\text{ m}$$",
                                    "answer": "Etap 1: $x(t) = 5t$. Etap 2: $x(t) = 6t - 240$. Etap 3: $x(t) = 4620 - 3t$ (czasy w sekundach).",
                                    "trap": "Pamiętaj o przesunięciu czasu $(t - t_0)$ w kolejnych etapach, jeśli $t$ liczymy od chwili startu całego ruchu!"
                                }
                            },
                            {
                                "id": "k-zad-9",
                                "number": 9,
                                "title": "Zadanie 9. Pogoń orki za młodą foką",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Ruch jednostajny prostoliniowy",
                                "link": "https://skul.pl/fizyka/zadanie,4-16,a,pid,78608",
                                "tags": [
                                    "Pościg",
                                    "Ruch względny"
                                ],
                                "problem": "Młoda foka zauważyła orkę w odległości $50\\text{ m}$ za sobą, więc zaczęła uciekać z szybkością $43{,}2\\text{ km/h}$. Orka płynie w jej kierunku z szybkością $50{,}4\\text{ km/h}$.\n\na) Napisz równania ruchu foki i orki (przyjmij, że dla orki $x_0 = 0$).\nb) Oblicz czas, po którym orka dogoni fokę.\nc) Oblicz współrzędną miejsca spotkania zwierząt.",
                                "solution": {
                                    "intuition": "Przelicz km/h na m/s (dzieląc przez $3{,}6$). Prędkość zbliżania się orki do foki to różnica ich prędkości: $v_{zb} = v_{orka} - v_{foka}$.",
                                    "givens": "$v_f = 43{,}2\\text{ km/h} = \\frac{43{,}2}{3{,}6} = 12\\text{ m/s}$.\n$v_o = 50{,}4\\text{ km/h} = \\frac{50{,}4}{3{,}6} = 14\\text{ m/s}$.\n$x_{0o} = 0$, $x_{0f} = 50\\text{ m}$.",
                                    "steps": [
                                        {
                                            "title": "a) Równania ruchu zwierząt",
                                            "content": "$$x_o(t) = 14t$$\n$$x_f(t) = 50 + 12t$$"
                                        },
                                        {
                                            "title": "b) Czas dogonienia",
                                            "content": "Orka dogania fokę, gdy $x_o(t) = x_f(t)$:\n$$14t = 50 + 12t \\implies 2t = 50 \\implies t = 25\\text{ s}$$"
                                        },
                                        {
                                            "title": "c) Miejsce spotkania",
                                            "content": "$$x_s = 14 \\cdot 25 = 350\\text{ m}$$"
                                        }
                                    ],
                                    "numerical": "$$t = 25\\text{ s}, \\quad x_s = 350\\text{ m}$$",
                                    "answer": "a) $x_o(t) = 14t$, $x_f(t) = 50 + 12t$.\nb) Orka dogoni fokę po $25\\text{ s}$.\nc) Miejsce spotkania ma współrzędną $350\\text{ m}$ od miejsca startu orki.",
                                    "trap": "Nie zapomnij o przeliczeniu jednostek km/h na m/s przed rozwiązaniem równania!"
                                }
                            }
                        ],
                        "number": 1,
                        "shortTitle": "Ruch jednostajny",
                        "formulaCheat": "v = \\frac{s}{t}, \\quad s = v \\cdot t, \\quad v_{\\text{śr}} = \\frac{s_{\\text{całk}}}{t_{\\text{całk}}}"
                    },
                    {
                        "id": "sub-ruch-zmienny",
                        "title": "2. Ruch jednostajnie zmienny",
                        "icon": "⚡",
                        "desc": "Przyspieszenie, równania drogi i prędkości, droga w n-tej sekundzie, wykresy a(t) i v(t).",
                        "tasks": [
                            {
                                "id": "k-zad-11",
                                "number": 11,
                                "title": "Zadanie 11. Zjazd sanek z górki",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                                "link": "https://skul.pl/fizyka/zadanie,5-1,zid,81250",
                                "tags": [
                                    "Przyspieszenie",
                                    "Prędkość końcowa"
                                ],
                                "problem": "Sanki zjechały z górki ruchem jednostajnie przyspieszonym ($v_0 = 0$) i przebyły w czasie $5\\text{ s}$ drogę $25\\text{ m}$.\n\nOblicz wartość prędkości sanek po $5\\text{ sekundach}$. Wynik podaj w km/h.",
                                "solution": {
                                    "intuition": "Dla $v_0 = 0$ droga to $s = \\frac{at^2}{2}$, a prędkość to $v = at$. Stąd $s = \\frac{v t}{2} \\implies v = \\frac{2s}{t}$. Prędkość końcowa jest dokładnie dwa razy większa niż prędkość średnia!",
                                    "givens": "$v_0 = 0$, $t = 5\\text{ s}$, $s = 25\\text{ m}$.",
                                    "steps": [
                                        {
                                            "title": "Wyprowadzenie prędkości końcowej",
                                            "content": "$$s = \\frac{a t^2}{2}, \\quad v = at \\implies s = \\frac{v t}{2}$$\n$$v = \\frac{2s}{t} = \\frac{2 \\cdot 25\\text{ m}}{5\\text{ s}} = 10\\text{ m/s}$$"
                                        },
                                        {
                                            "title": "Przeliczenie na km/h",
                                            "content": "$$v = 10 \\cdot 3{,}6\\text{ km/h} = 36\\text{ km/h}$$"
                                        }
                                    ],
                                    "numerical": "$$v = \\frac{2 \\cdot 25}{5} \\cdot 3{,}6 = 36\\text{ km/h}$$",
                                    "answer": "Wartość prędkości sanek po $5\\text{ s}$ wynosi $36\\text{ km/h}$.",
                                    "trap": "Zwróć uwagę na wymóg podania wyniku w km/h, a nie w m/s!"
                                }
                            },
                            {
                                "id": "k-zad-12",
                                "number": 12,
                                "title": "Zadanie 12. Przyspieszanie samochodu ciężarowego",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                                "link": "https://skul.pl/fizyka/zadanie,5-4,zid,81253",
                                "tags": [
                                    "Ruch przyspieszony",
                                    "Droga"
                                ],
                                "problem": "Samochód ciężarowy porusza się ruchem jednostajnie przyspieszonym z przyspieszeniem o wartości $0{,}8\\text{ m/s}^2$. Prędkość początkowa samochodu wynosi zero ($v_0 = 0$).\n\nOblicz, po jakim czasie samochód osiągnie szybkość $64{,}8\\text{ km/h}$, a następnie oblicz drogę, którą przebędzie do czasu osiągnięcia tej szybkości.",
                                "solution": {
                                    "intuition": "Najpierw zamień prędkość z km/h na m/s: $64{,}8 / 3{,}6 = 18\\text{ m/s}$. Następnie użyj $v = at$ oraz $s = \\frac{at^2}{2}$.",
                                    "givens": "$a = 0{,}8\\text{ m/s}^2$, $v = 64{,}8\\text{ km/h} = 18\\text{ m/s}$, $v_0 = 0$.",
                                    "steps": [
                                        {
                                            "title": "Obliczenie czasu $t$",
                                            "content": "$$v = a t \\implies t = \\frac{v}{a} = \\frac{18\\text{ m/s}}{0{,}8\\text{ m/s}^2} = 22{,}5\\text{ s}$$"
                                        },
                                        {
                                            "title": "Obliczenie drogi $s$",
                                            "content": "$$s = \\frac{a t^2}{2} = \\frac{0{,}8 \\cdot (22{,}5)^2}{2} = 0{,}4 \\cdot 506{,}25 = 202{,}5\\text{ m}$$"
                                        }
                                    ],
                                    "numerical": "$$t = 22{,}5\\text{ s}, \\quad s = 202{,}5\\text{ m}$$",
                                    "answer": "Czas wynosi $22{,}5\\text{ s}$, a droga $202{,}5\\text{ m}$.",
                                    "trap": "Błąd rachunkowy przy potęgowaniu $22{,}5^2$. Można też użyć wzoru $s = \\frac{v^2}{2a} = \\frac{18^2}{2 \\cdot 0{,}8} = \\frac{324}{1{,}6} = 202{,}5\\text{ m}$."
                                }
                            },
                            {
                                "id": "k-zad-13",
                                "number": 13,
                                "title": "Zadanie 13. Ostatnie dwie sekundy przyspieszania",
                                "difficulty": 3,
                                "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                                "link": "https://skul.pl/fizyka/zadanie,5-5,a,pid,78617",
                                "tags": [
                                    "Droga w przedziale czasu",
                                    "Wyprowadzenie"
                                ],
                                "problem": "Ruszający ze spoczynku ($v_0 = 0$) samochód przez $10\\text{ s}$ jechał ruchem jednostajnie przyspieszonym. W ostatnich dwóch sekundach przebył $45\\text{ m}$.\n\nOblicz:\na) wartość przyspieszenia samochodu,\nb) jego szybkość po $10\\text{ sekundach}$,\nc) drogę przebytą przez niego w całym tym czasie,\nd) drogi przebyte przez niego oddzielnie w dziewiątej i dziesiątej sekundzie.",
                                "solution": {
                                    "intuition": "Droga przebyta w ostatnich 2 sekundach (od $t = 8\\text{ s}$ do $t = 10\\text{ s}$) to różnica dróg: $\\Delta s = s(10) - s(8)$.",
                                    "givens": "$v_0 = 0$, $t_{calk} = 10\\text{ s}$, $\\Delta s_{8-10} = 45\\text{ m}$.",
                                    "steps": [
                                        {
                                            "title": "a) Wyznaczenie przyspieszenia $a$",
                                            "content": "$$\\Delta s = s(10) - s(8) = \\frac{a \\cdot 10^2}{2} - \\frac{a \\cdot 8^2}{2} = \\frac{a}{2} (100 - 64) = 18 a$$\n$$18 a = 45 \\implies a = \\frac{45}{18} = 2{,}5\\text{ m/s}^2$$"
                                        },
                                        {
                                            "title": "b) Szybkość po $10\\text{ sekundach}$",
                                            "content": "$$v(10) = a \\cdot 10 = 2{,}5 \\cdot 10 = 25\\text{ m/s} = 90\\text{ km/h}$$"
                                        },
                                        {
                                            "title": "c) Całkowita droga po $10\\text{ sekundach}$",
                                            "content": "$$s(10) = \\frac{a \\cdot 10^2}{2} = \\frac{2{,}5 \\cdot 100}{2} = 125\\text{ m}$$"
                                        },
                                        {
                                            "title": "d) Droga w 9. i 10. sekundzie",
                                            "content": "Droga w 9. sekundzie: $\\Delta s_9 = s(9) - s(8) = \\frac{a}{2}(81 - 64) = 1{,}25 \\cdot 17 = 21{,}25\\text{ m}$.\nDroga w 10. sekundzie: $\\Delta s_{10} = s(10) - s(9) = \\frac{a}{2}(100 - 81) = 1{,}25 \\cdot 19 = 23{,}75\\text{ m}$.\n(Zauważ: $21{,}25 + 23{,}75 = 45\\text{ m}$, zgadza się!)"
                                        }
                                    ],
                                    "numerical": "$$a = 2{,}5\\text{ m/s}^2, \\quad v = 25\\text{ m/s}, \\quad s = 125\\text{ m}, \\quad \\Delta s_9 = 21{,}25\\text{ m}, \\quad \\Delta s_{10} = 23{,}75\\text{ m}$$",
                                    "answer": "a) $a = 2{,}5\\text{ m/s}^2$, b) $v = 25\\text{ m/s}$, c) $s = 125\\text{ m}$, d) $\\Delta s_9 = 21{,}25\\text{ m}$, $\\Delta s_{10} = 23{,}75\\text{ m}$.",
                                    "trap": "Droga w n-tej sekundzie to $s(n) - s(n-1)$, a nie $s(n)$!"
                                }
                            },
                            {
                                "id": "k-zad-14",
                                "number": 14,
                                "title": "Zadanie 14. Droga w czwartej sekundzie",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                                "link": "https://skul.pl/fizyka/zadanie,5-6,zid,81255",
                                "tags": [
                                    "Droga w n-tej sekundzie",
                                    "Prawo Galileusza"
                                ],
                                "problem": "W czwartej sekundzie ruchu motocyklista jadący ruchem jednostajnie przyspieszonym przebył drogę $8\\text{ m}$.\n\nOblicz wartość jego przyspieszenia, jeżeli $v_0 = 0$.",
                                "solution": {
                                    "intuition": "Z prawa nieparzystych liczb Galileusza: drogi przebywane w kolejnych sekundach mają się do siebie jak $1 : 3 : 5 : 7 : 9...$ W czwartej sekundzie współczynnik wynosi $2 \\cdot 4 - 1 = 7$.",
                                    "givens": "$v_0 = 0$, $n = 4$, $\\Delta s_4 = 8\\text{ m}$.",
                                    "steps": [
                                        {
                                            "title": "Wyprowadzenie wzoru na drogę w n-tej sekundzie",
                                            "content": "$$\\Delta s_n = s(n) - s(n-1) = \\frac{a n^2}{2} - \\frac{a (n-1)^2}{2} = \\frac{a}{2} (n^2 - n^2 + 2n - 1) = \\frac{a}{2}(2n - 1)$$"
                                        },
                                        {
                                            "title": "Obliczenie przyspieszenia $a$ dla $n = 4$",
                                            "content": "$$\\Delta s_4 = \\frac{a}{2}(2 \\cdot 4 - 1) = \\frac{7}{2} a = 3{,}5 a$$\n$$3{,}5 a = 8\\text{ m} \\implies a = \\frac{8}{3{,}5} = \\frac{16}{7} \\approx 2{,}29\\text{ m/s}^2$$"
                                        }
                                    ],
                                    "numerical": "$$a = \\frac{16}{7}\\text{ m/s}^2 \\approx 2{,}29\\text{ m/s}^2$$",
                                    "answer": "Przyspieszenie wynosi $\\frac{16}{7}\\text{ m/s}^2 \\approx 2{,}29\\text{ m/s}^2$.",
                                    "trap": "Częsty błąd: podstawienie $t = 4\\text{ s}$ do wzoru $s = \\frac{at^2}{2}$ i przyrównanie do $8\\text{ m}$. To dałoby drogę za całe 4 sekundy, a nie W CZWARTEJ sekundzie!"
                                }
                            },
                            {
                                "id": "k-zad-15",
                                "number": 15,
                                "title": "Zadanie 15. Przyspieszenie z niezerową prędkością początkową",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                                "link": "https://skul.pl/fizyka/zadanie,5-8,zid,81257",
                                "tags": [
                                    "Prędkość początkowa",
                                    "Układ równań"
                                ],
                                "problem": "Ciało poruszające się ruchem jednostajnie przyspieszonym w czasie $10\\text{ sekund}$ przebyło drogę $175\\text{ m}$ i osiągnęło szybkość $90\\text{ km/h}$.\n\nOblicz wartość przyspieszenia ciała i jego szybkość początkową.",
                                "solution": {
                                    "intuition": "Znamy czas, drogę i prędkość końcową ($90\\text{ km/h} = 25\\text{ m/s}$). Średnia prędkość wynosi $v_{sr} = \\frac{s}{t} = 17{,}5\\text{ m/s}$. Ponieważ $v_{sr} = \\frac{v_0 + v}{2}$, natychmiast możemy wyznaczyć $v_0$!",
                                    "givens": "$t = 10\\text{ s}$, $s = 175\\text{ m}$, $v_k = 90\\text{ km/h} = 25\\text{ m/s}$.",
                                    "steps": [
                                        {
                                            "title": "Wyznaczenie prędkości początkowej $v_0$",
                                            "content": "$$v_{sr} = \\frac{v_0 + v_k}{2} = \\frac{s}{t}$$\n$$\\frac{v_0 + 25}{2} = \\frac{175}{10} = 17{,}5$$\n$$v_0 + 25 = 35 \\implies v_0 = 10\\text{ m/s} = 36\\text{ km/h}$$"
                                        },
                                        {
                                            "title": "Wyznaczenie przyspieszenia $a$",
                                            "content": "$$a = \\frac{v_k - v_0}{t} = \\frac{25 - 10}{10} = \\frac{15}{10} = 1{,}5\\text{ m/s}^2$$"
                                        }
                                    ],
                                    "numerical": "$$v_0 = 10\\text{ m/s}, \\quad a = 1{,}5\\text{ m/s}^2$$",
                                    "answer": "Prędkość początkowa wynosi $10\\text{ m/s}$ ($36\\text{ km/h}$), a przyspieszenie $1{,}5\\text{ m/s}^2$.",
                                    "trap": "Nie zakładaj, że $v_0 = 0$, bo treść zadania tego nie mówi!"
                                }
                            },
                            {
                                "id": "k-zad-16",
                                "number": 16,
                                "title": "Zadanie 16. Hamowanie przed przeszkodą",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                                "link": "https://skul.pl/fizyka/zadanie,5-16,a,pid,78621",
                                "tags": [
                                    "Ruch opóźniony",
                                    "Droga hamowania"
                                ],
                                "problem": "Kierowca samochodu jadącego z szybkością $99\\text{ km/h}$ zauważył przeszkodę i rozpoczął nagłe hamowanie z opóźnieniem o wartości $5\\text{ m/s}^2$.\n\nOblicz:\na) w jakiej odległości znajdowała się przeszkoda, jeśli samochód uderzył w nią z szybkością $72\\text{ km/h}$,\nb) drogę hamowania i czas, po którym samochód zatrzymałby się, gdyby nie było przeszkody.",
                                "solution": {
                                    "intuition": "Użyj wygodnego wzoru bez czasu: $v^2 = v_0^2 - 2as \\implies s = \\frac{v_0^2 - v^2}{2a}$. Pamiętaj o zamianie km/h na m/s!",
                                    "givens": "$v_0 = 99\\text{ km/h} = 27{,}5\\text{ m/s}$, $a = 5\\text{ m/s}^2$, $v_1 = 72\\text{ km/h} = 20\\text{ m/s}$.",
                                    "steps": [
                                        {
                                            "title": "a) Odległość przeszkody $s_1$",
                                            "content": "$$s_1 = \\frac{v_0^2 - v_1^2}{2a} = \\frac{(27{,}5)^2 - 20^2}{2 \\cdot 5} = \\frac{756{,}25 - 400}{10} = \\frac{356{,}25}{10} = 35{,}625\\text{ m}$$"
                                        },
                                        {
                                            "title": "b) Całkowita droga hamowania i czas zatrzymania",
                                            "content": "Do pełnego zatrzymania ($v = 0$):\n$$t_{zatrz} = \\frac{v_0}{a} = \\frac{27{,}5}{5} = 5{,}5\\text{ s}$$\n$$s_{calk} = \\frac{v_0^2}{2a} = \\frac{756{,}25}{10} = 75{,}625\\text{ m}$$"
                                        }
                                    ],
                                    "numerical": "$$s_1 \\approx 35{,}6\\text{ m}, \\quad t_{zatrz} = 5{,}5\\text{ s}, \\quad s_{calk} \\approx 75{,}6\\text{ m}$$",
                                    "answer": "a) Przeszkoda znajdowała się w odległości ok. $35{,}6\\text{ m}$.\nb) Droga hamowania wynosi ok. $75{,}6\\text{ m}$, a czas $5{,}5\\text{ s}$.",
                                    "trap": "Zwróć uwagę, że $99\\text{ km/h} / 3{,}6 = 27{,}5\\text{ m/s}$."
                                }
                            },
                            {
                                "id": "k-zad-17",
                                "number": 17,
                                "title": "Zadanie 17. Analiza wykresu v(t) pojazdu",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                                "link": "https://skul.pl/fizyka/zadanie,5-18,zid,81267",
                                "tags": [
                                    "Wykres v(t)",
                                    "Pole trapezu",
                                    "Prędkość średnia"
                                ],
                                "problem": "Na wykresie przedstawiono zależność szybkości od czasu dla pewnego pojazdu:\n- $0$ do $1/3\\text{ min}$ ($20\\text{ s}$): przyspieszanie od $0$ do $54\\text{ km/h}$ ($15\\text{ m/s}$)\n- $1/3$ do $1\\text{ min}$ ($40\\text{ s}$): ruch jednostajny z $54\\text{ km/h}$\n- $1$ do $1\\frac{1}{6}\\text{ min}$ ($10\\text{ s}$): przyspieszanie od $54$ do $72\\text{ km/h}$ ($20\\text{ m/s}$)\n- $1\\frac{1}{6}$ do $3\\frac{1}{6}\\text{ min}$ ($120\\text{ s}$): ruch jednostajny z $72\\text{ km/h}$\n- $3\\frac{1}{6}$ do $5\\frac{1}{6}\\text{ min}$ ($120\\text{ s}$): hamowanie od $72\\text{ km/h}$ do $0$\n\nOblicz drogę przebytą przez pojazd podczas całego ruchu oraz szybkość średnią pojazdu.",
                                "solution": {
                                    "intuition": "Drogę obliczamy jako sumę pól figur geometrycznych pod wykresem $v(t)$ (trójkąty, prostokąty, trapezy). Wszystkie prędkości przeliczamy na m/s, a czasy na sekundy.",
                                    "givens": "$v_1 = 54\\text{ km/h} = 15\\text{ m/s}$, $v_2 = 72\\text{ km/h} = 20\\text{ m/s}$, całkowity czas $t = 5\\frac{1}{6}\\text{ min} = 310\\text{ s}$.",
                                    "steps": [
                                        {
                                            "title": "Obliczenie pól poszczególnych etapów",
                                            "content": "1. Trójkąt $0 - 20\\text{ s}$: $s_1 = \\frac{1}{2} \\cdot 20 \\cdot 15 = 150\\text{ m}$\n2. Prostokąt $20 - 60\\text{ s}$: $s_2 = 40 \\cdot 15 = 600\\text{ m}$\n3. Trapez $60 - 70\\text{ s}$: $s_3 = \\frac{15 + 20}{2} \\cdot 10 = 175\\text{ m}$\n4. Prostokąt $70 - 190\\text{ s}$: $s_4 = 120 \\cdot 20 = 2400\\text{ m}$\n5. Trójkąt $190 - 310\\text{ s}$: $s_5 = \\frac{1}{2} \\cdot 120 \\cdot 20 = 1200\\text{ m}$"
                                        },
                                        {
                                            "title": "Całkowita droga i szybkość średnia",
                                            "content": "$$s_{calk} = 150 + 600 + 175 + 2400 + 1200 = 4525\\text{ m}$$\n$$v_{sr} = \\frac{s_{calk}}{t_{calk}} = \\frac{4525\\text{ m}}{310\\text{ s}} \\approx 14{,}6\\text{ m/s} \\approx 52{,}55\\text{ km/h}$$"
                                        }
                                    ],
                                    "numerical": "$$s_{calk} = 4525\\text{ m}, \\quad v_{sr} \\approx 14{,}6\\text{ m/s} = 52{,}55\\text{ km/h}$$",
                                    "answer": "Droga wynosi $4525\\text{ m}$ ($4{,}525\\text{ km}$), a szybkość średnia ok. $52{,}6\\text{ km/h}$.",
                                    "trap": "Uważaj na jednostki czasu w minutach na osi poziomej: $5\\frac{1}{6}\\text{ min} = 5 \\cdot 60 + 10 = 310\\text{ s}$."
                                }
                            },
                            {
                                "id": "k-zad-18",
                                "number": 18,
                                "title": "Zadanie 18. Dwa ciała na wykresie vx(t)",
                                "difficulty": 3,
                                "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                                "link": "https://skul.pl/fizyka/zadanie,5-19,a,pid,78623",
                                "tags": [
                                    "Dwa ciała",
                                    "Wykres v(t)",
                                    "Przyspieszenie"
                                ],
                                "problem": "Dwa ciała poruszają się równolegle do osi $x$. Wykresy przedstawiają zależność współrzędnej prędkości od czasu dla każdego z tych ciał ($0 - 36\\text{ s}$):\n- **Ciało I**: $0-6\\text{ s}$ hamuje od $6$ do $-6\\text{ m/s}$; $6-18\\text{ s}$ przyspiesza od $-6$ do $+12\\text{ m/s}$; $18-36\\text{ s}$ przyspiesza od $12$ do $18\\text{ m/s}$.\n- **Ciało II**: $0-6\\text{ s}$ przyspiesza od $0$ do $12\\text{ m/s}$; $6-12\\text{ s}$ ruch jednostajny $12\\text{ m/s}$; $12-18\\text{ s}$ hamuje do $0$; $18-24\\text{ s}$ przyspiesza do $18\\text{ m/s}$; $24-36\\text{ s}$ hamuje od $18$ do $-6\\text{ m/s}$.\n\nNa podstawie wykresu oblicz dla każdego ciała:\na) szybkość średnią,\nb) wartość prędkości średniej,\nc) narysuj wykresy zależności współrzędnej przyspieszenia od czasu.",
                                "solution": {
                                    "intuition": "Szybkość średnia to droga (suma wartości bezwzględnych pól) podzielona przez $36\\text{ s}$. Prędkość średnia to przemieszczenie (pola nad osią minus pola pod osią) podzielone przez $36\\text{ s}$.",
                                    "givens": "Wykres $v_x(t)$ dla ciał I i II w przedziale $t \\in [0, 36\\text{ s}]$.",
                                    "steps": [
                                        {
                                            "title": "Analiza ciała I",
                                            "content": "Przyspieszenia: $a_1 = \\frac{-6 - 6}{6} = -2\\text{ m/s}^2$. Pole trójkąta pod osią ($3$ do $6\\text{ s}$) wynosi $9\\text{ m}$, pole trójkąta pod osią ($6$ do $12\\text{ s}$) wynosi $36\\text{ m}$.\nCałkowita droga: $s_I = 9 + 9 + 36 + 36 + 270 = 360\\text{ m}$.\nPrzemieszczenie: $\\Delta x_I = -45 + 315 = 270\\text{ m}$.\n$$v_{sr,I} = \\frac{360}{36} = 10\\text{ m/s}, \\quad v_{sr,wekt,I} = \\frac{270}{36} = 7{,}5\\text{ m/s}$$"
                                        },
                                        {
                                            "title": "Analiza ciała II",
                                            "content": "Droga: $s_{II} = 36 + 72 + 36 + 54 + 81 + 9 = 288\\text{ m}$.\nPrzemieszczenie: $\\Delta x_{II} = 279 - 9 = 270\\text{ m}$.\n$$v_{sr,II} = \\frac{288}{36} = 8\\text{ m/s}, \\quad v_{sr,wekt,II} = \\frac{270}{36} = 7{,}5\\text{ m/s}$$"
                                        }
                                    ],
                                    "numerical": "$$v_{sr,I} = 10\\text{ m/s}, \\quad v_{wekt,I} = 7{,}5\\text{ m/s}, \\quad v_{sr,II} = 8\\text{ m/s}, \\quad v_{wekt,II} = 7{,}5\\text{ m/s}$$",
                                    "answer": "Dla ciała I: szybkość średnia $10\\text{ m/s}$, prędkość średnia $7{,}5\\text{ m/s}$.\nDla ciała II: szybkość średnia $8\\text{ m/s}$, prędkość średnia $7{,}5\\text{ m/s}$.",
                                    "trap": "Zwróć uwagę na punkty, w których wykres przecina oś czasu – tam zmienia się znak prędkości!"
                                }
                            },
                            {
                                "id": "k-zad-19",
                                "number": 19,
                                "title": "Zadanie 19. Wykres ax(t) i rekonstrukcja ruchu",
                                "difficulty": 3,
                                "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                                "link": "https://skul.pl/fizyka/zadanie,5-20,a,pid,78626",
                                "tags": [
                                    "Wykres a(t)",
                                    "Rekonstrukcja v(t)"
                                ],
                                "problem": "Wykres przedstawia zależność współrzędnej przyspieszenia od czasu dla pewnego ciała:\n- $0 - 3\\text{ s}$: $a_x = 0$\n- $3 - 9\\text{ s}$: $a_x = 1\\text{ m/s}^2$\n- $9 - 12\\text{ s}$: $a_x = 2\\text{ m/s}^2$\n- $12 - 15\\text{ s}$: $a_x = 1\\text{ m/s}^2$\n- $15 - 21\\text{ s}$: $a_x = 0$\n- $21 - 24\\text{ s}$: $a_x = 1\\text{ m/s}^2$\n\nNa podstawie wykresu:\na) narysuj wykres $v_x(t)$, przy założeniu, że $v_0 = 0$,\nb) oblicz drogę przebytą przez ciało od końca dwunastej sekundy do końca piętnastej sekundy,\nc) oblicz drogę przebytą w szóstej sekundzie ruchu,\nd) oblicz szybkość średnią ciała w przedziale czasu $3-24\\text{ s}$.",
                                "solution": {
                                    "intuition": "Pole pod wykresem $a_x(t)$ to zmiana prędkości $\\Delta v$. Całkując (sumując pola), otrzymujemy prędkość w każdej chwili.",
                                    "givens": "$v_0 = 0$. Wartości $a_x$ w kolejnych przedziałach czasu.",
                                    "steps": [
                                        {
                                            "title": "a) Wyznaczenie prędkości w węzłach czasu",
                                            "content": "$$v(3) = 0$$\n$$v(9) = 0 + 1 \\cdot 6 = 6\\text{ m/s}$$\n$$v(12) = 6 + 2 \\cdot 3 = 12\\text{ m/s}$$\n$$v(15) = 12 + 1 \\cdot 3 = 15\\text{ m/s}$$\n$$v(21) = 15\\text{ m/s}$$\n$$v(24) = 15 + 1 \\cdot 3 = 18\\text{ m/s}$$"
                                        },
                                        {
                                            "title": "b) Droga w przedziale $12 - 15\\text{ s}$",
                                            "content": "Pole trapezu pod wykresem $v(t)$:\n$$s_{12-15} = \\frac{v(12) + v(15)}{2} \\cdot 3 = \\frac{12 + 15}{2} \\cdot 3 = 13{,}5 \\cdot 3 = 40{,}5\\text{ m}$$"
                                        },
                                        {
                                            "title": "c) Droga w szóstej sekundzie ruchu ($t \\in [5, 6\\text{ s}]$)",
                                            "content": "W przedziale $3-9\\text{ s}$ ruch jest jednostajnie przyspieszony z $a = 1\\text{ m/s}^2$, $v(3) = 0$.\nCzas trwania od początku przyspieszania do $t=5\\text{ s}$ wynosi $\\tau_1 = 2\\text{ s}$, a do $t=6\\text{ s}$ wynosi $\\tau_2 = 3\\text{ s}$.\n$$\\Delta s_6 = s(\\tau_2) - s(\\tau_1) = \\frac{1 \\cdot 3^2}{2} - \\frac{1 \\cdot 2^2}{2} = \\frac{9 - 4}{2} = 2{,}5\\text{ m}$$"
                                        },
                                        {
                                            "title": "d) Szybkość średnia w przedziale $3 - 24\\text{ s}$",
                                            "content": "Suma pól pod wykresem $v(t)$ od $3$ do $24\\text{ s}$:\n$s_{3-9} = \\frac{1}{2} \\cdot 6 \\cdot 6 = 18\\text{ m}$\n$s_{9-12} = \\frac{6 + 12}{2} \\cdot 3 = 27\\text{ m}$\n$s_{12-15} = 40{,}5\\text{ m}$\n$s_{15-21} = 15 \\cdot 6 = 90\\text{ m}$\n$s_{21-24} = \\frac{15 + 18}{2} \\cdot 3 = 49{,}5\\text{ m}$\n$s_{calk} = 18 + 27 + 40{,}5 + 90 + 49{,}5 = 225\\text{ m}$.\nCzas trwania: $\\Delta t = 24 - 3 = 21\\text{ s}$.\n$$v_{sr} = \\frac{225\\text{ m}}{21\\text{ s}} \\approx 10{,}71\\text{ m/s}$$"
                                        }
                                    ],
                                    "numerical": "$$s_{12-15} = 40{,}5\\text{ m}, \\quad \\Delta s_6 = 2{,}5\\text{ m}, \\quad v_{sr} \\approx 10{,}71\\text{ m/s}$$",
                                    "answer": "b) $40{,}5\\text{ m}$, c) $2{,}5\\text{ m}$, d) $10{,}71\\text{ m/s}$.",
                                    "trap": "Szósta sekunda ruchu trwa od $t = 5\\text{ s}$ do $t = 6\\text{ s}$. Ponieważ przyspieszanie zaczęło się w $t = 3\\text{ s}$, prędkość w $t=5$ wynosi $2\\text{ m/s}$, a w $t=6$ wynosi $3\\text{ m/s}$."
                                }
                            },
                            {
                                "id": "k-zad-20",
                                "number": 20,
                                "title": "Zadanie 20. Funkcja drogi s(t) = 2(t + t^2)",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                                "link": "https://skul.pl/fizyka/zadanie,6-4,a,pid,78640",
                                "tags": [
                                    "Funkcja drogi",
                                    "Odczyt parametrów"
                                ],
                                "problem": "Ciało porusza się ruchem prostoliniowym. Jego droga jest następującą funkcją czasu:\n$$s(t) = 2(t + t^2) = 2t + 2t^2$$\nW tym wzorze współczynniki liczbowe są wyrażone w układzie SI.\n\na) Odczytaj z podanego wzoru wartości prędkości początkowej i przyspieszenia ciała.\nb) Oblicz drogę przebytą między początkiem trzeciej a końcem piątej sekundy ruchu oraz szybkość średnią ciała w tym czasie.",
                                "solution": {
                                    "intuition": "Porównaj ogólny wzór na drogę w ruchu jednostajnie przyspieszonym $s(t) = v_0 t + \\frac{at^2}{2}$ ze wzorem podanym w zadaniu $s(t) = 2t + 2t^2$.",
                                    "givens": "$s(t) = 2t + 2t^2$.",
                                    "steps": [
                                        {
                                            "title": "a) Odczyt parametrów ruchu",
                                            "content": "Porównujemy współczynniki przy odpowiednich potęgach czasu:\n- przy $t$: $v_0 = 2\\text{ m/s}$\n- przy $t^2$: $\\frac{a}{2} = 2 \\implies a = 4\\text{ m/s}^2$"
                                        },
                                        {
                                            "title": "b) Droga między początkiem 3. a końcem 5. sekundy",
                                            "content": "Początek 3. sekundy to chwila $t_1 = 2\\text{ s}$.\nKoniec 5. sekundy to chwila $t_2 = 5\\text{ s}$.\n$$s(2) = 2(2) + 2(2^2) = 4 + 8 = 12\\text{ m}$$\n$$s(5) = 2(5) + 2(5^2) = 10 + 50 = 60\\text{ m}$$\n$$\\Delta s = s(5) - s(2) = 60 - 12 = 48\\text{ m}$$\nCzas trwania: $\\Delta t = 5 - 2 = 3\\text{ s}$.\nSzybkość średnia:\n$$v_{sr} = \\frac{\\Delta s}{\\Delta t} = \\frac{48\\text{ m}}{3\\text{ s}} = 16\\text{ m/s}$$"
                                        }
                                    ],
                                    "numerical": "$$v_0 = 2\\text{ m/s}, \\quad a = 4\\text{ m/s}^2, \\quad \\Delta s = 48\\text{ m}, \\quad v_{sr} = 16\\text{ m/s}$$",
                                    "answer": "a) $v_0 = 2\\text{ m/s}$, $a = 4\\text{ m/s}^2$.\nb) Droga wynosi $48\\text{ m}$, a szybkość średnia $16\\text{ m/s}$.",
                                    "trap": "Początek 3. sekundy to $t = 2\\text{ s}$, a nie $t = 3\\text{ s}$!"
                                }
                            },
                            {
                                "id": "k-zad-21",
                                "number": 21,
                                "title": "Zadanie 21. Równanie położenia x(t) = 2 + 6t + 1,5t^2",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                                "link": "https://skul.pl/fizyka/zadanie,6-5,a,pid,78642",
                                "tags": [
                                    "Równanie x(t)",
                                    "Jednostki współczynników"
                                ],
                                "problem": "Ciało porusza się wzdłuż osi $x$. W jego równaniu ruchu:\n$$x(t) = 2 + 6t + 1{,}5t^2$$\ndroga jest wyrażona w metrach, a czas w sekundach.\n\na) Dopisz odpowiednie jednostki przy wszystkich współczynnikach liczbowych.\nb) Opisz słowami ten ruch.\nc) Oblicz szybkość średnią ciała podczas czterech pierwszych sekund ruchu.\nd) Na podstawie informacji, że w ruchu jednostajnie zmiennym $v_{sr}$ jest średnią arytmetyczną z szybkości początkowej i końcowej, wyznacz szybkość średnią w tym przedziale czasu i porównaj z wynikiem otrzymanym w punkcie c.",
                                "solution": {
                                    "intuition": "Każdy składnik sumy musi mieć jednostkę metra [m]. Porównaj z $x(t) = x_0 + v_0 t + \\frac{at^2}{2}$.",
                                    "givens": "$x(t) = 2 + 6t + 1{,}5t^2$.",
                                    "steps": [
                                        {
                                            "title": "a) Jednostki współczynników",
                                            "content": "- $x_0 = 2\\text{ m}$\n- $v_0 = 6\\text{ m/s}$\n- $\\frac{a}{2} = 1{,}5\\text{ m/s}^2 \\implies a = 3\\text{ m/s}^2$"
                                        },
                                        {
                                            "title": "b) Opis słowny ruchu",
                                            "content": "Jest to ruch prostoliniowy, jednostajnie przyspieszony, odbywający się w dodatnim kierunku osi $x$, z położenia początkowego $x_0 = 2\\text{ m}$, z prędkością początkową $v_0 = 6\\text{ m/s}$ i stałym przyspieszeniem $a = 3\\text{ m/s}^2$."
                                        },
                                        {
                                            "title": "c) Szybkość średnia z definicji",
                                            "content": "$$x(0) = 2\\text{ m}, \\quad x(4) = 2 + 6(4) + 1{,}5(16) = 2 + 24 + 24 = 50\\text{ m}$$\nPrzebyta droga: $s = x(4) - x(0) = 50 - 2 = 48\\text{ m}$.\n$$v_{sr} = \\frac{48\\text{ m}}{4\\text{ s}} = 12\\text{ m/s}$$"
                                        },
                                        {
                                            "title": "d) Szybkość średnia jako średnia arytmetyczna",
                                            "content": "Prędkość początkowa: $v(0) = 6\\text{ m/s}$.\nPrędkość końcowa: $v(4) = v_0 + at = 6 + 3 \\cdot 4 = 18\\text{ m/s}$.\n$$v_{sr} = \\frac{v_0 + v(4)}{2} = \\frac{6 + 18}{2} = \\frac{24}{2} = 12\\text{ m/s}$$\nWyniki w punktach c i d są identyczne!"
                                        }
                                    ],
                                    "numerical": "$$v_{sr} = 12\\text{ m/s}$$",
                                    "answer": "a) $2\\text{ m}, 6\\text{ m/s}, 1{,}5\\text{ m/s}^2$.\nb) Ruch prostoliniowy jednostajnie przyspieszony.\nc) $v_{sr} = 12\\text{ m/s}$.\nd) $v_{sr} = 12\\text{ m/s}$ (wyniki są zgodne).",
                                    "trap": "Współczynnik przy $t^2$ to $\\frac{a}{2}$, więc samo przyspieszenie to $2 \\cdot 1{,}5 = 3\\text{ m/s}^2$."
                                }
                            },
                            {
                                "id": "k-zad-22a",
                                "number": 22,
                                "title": "Zadanie 22. Rowerzysta i motocyklista naprzeciw siebie",
                                "difficulty": 3,
                                "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                                "link": "https://skul.pl/fizyka/zadanie,6-10,a,pid,78658",
                                "tags": [
                                    "Spotkanie ciał",
                                    "Równanie kwadratowe"
                                ],
                                "problem": "Rowerzysta i motocyklista jadą prostoliniowym odcinkiem szosy równoległej do osi $x$ z prędkościami o przeciwnych zwrotach.\nW chwili $t_0 = 0$ rowerzysta poruszający się ruchem jednostajnym z szybkością $3\\text{ m/s}$ mija punkt $A$ ($x_A = 0$), a motocyklista w tej samej chwili mija punkt $B$ ($x_B = 300\\text{ m}$) z szybkością początkową $2\\text{ m/s}$ i jedzie w stronę rowerzysty ruchem jednostajnie przyspieszonym z przyspieszeniem o wartości $1\\text{ m/s}^2$.\n\na) Napisz równania: $x_R(t), x_M(t), v_R(t), v_M(t)$.\nb) Oblicz czas, po którym motocyklista minie rowerzystę, i współrzędną miejsca, w którym to nastąpi.\nc) Oblicz współrzędną prędkości motocyklisty względem rowerzysty w chwili mijania.",
                                "solution": {
                                    "intuition": "Rowerzysta jedzie w prawo ($+3\\text{ m/s}$). Motocyklista jedzie w lewo z punktu $300\\text{ m}$ i przyspiesza w lewo, więc jego prędkość początkowa i przyspieszenie mają znaki ujemne.",
                                    "givens": "$x_{0R} = 0$, $v_R = 3\\text{ m/s}$. $x_{0M} = 300\\text{ m}$, $v_{0M} = -2\\text{ m/s}$, $a_M = -1\\text{ m/s}^2$.",
                                    "steps": [
                                        {
                                            "title": "a) Równania ruchu i prędkości",
                                            "content": "$$x_R(t) = 3t, \\quad v_R(t) = 3$$\n$$x_M(t) = 300 - 2t - \\frac{1}{2} t^2, \\quad v_M(t) = -2 - t$$"
                                        },
                                        {
                                            "title": "b) Chwila i miejsce mijania",
                                            "content": "$$x_R(t) = x_M(t) \\implies 3t = 300 - 2t - 0{,}5t^2$$\n$$0{,}5t^2 + 5t - 300 = 0 \\implies t^2 + 10t - 600 = 0$$\n$$\\Delta = 100 - 4(1)(-600) = 2500, \\quad \\sqrt{\\Delta} = 50$$\n$$t = \\frac{-10 + 50}{2} = 20\\text{ s} \\quad (t > 0)$$\nMiejsce mijania:\n$$x_s = x_R(20) = 3 \\cdot 20 = 60\\text{ m}$$"
                                        },
                                        {
                                            "title": "c) Prędkość względna w chwili mijania",
                                            "content": "W chwili $t = 20\\text{ s}$:\n$$v_M(20) = -2 - 20 = -22\\text{ m/s}$$\nPrędkość motocyklisty względem rowerzysty:\n$$v_{M/R} = v_M - v_R = -22 - 3 = -25\\text{ m/s}$$\nWartość prędkości względnej wynosi $25\\text{ m/s}$."
                                        }
                                    ],
                                    "numerical": "$$t = 20\\text{ s}, \\quad x = 60\\text{ m}, \\quad v_{M/R} = -25\\text{ m/s}$$",
                                    "answer": "a) $x_R = 3t, x_M = 300 - 2t - 0{,}5t^2$.\nb) Miną się po $20\\text{ s}$ w punkcie $x = 60\\text{ m}$.\nc) Współrzędna prędkości względnej wynosi $-25\\text{ m/s}$ (wartość $25\\text{ m/s}$).",
                                    "trap": "Pamiętaj o ujemnych znakach przy prędkości i przyspieszeniu motocyklisty!"
                                }
                            }
                        ],
                        "number": 2,
                        "shortTitle": "Ruch zmienny",
                        "formulaCheat": "a = \\frac{\\Delta v}{\\Delta t}, \\quad v(t) = v_0 + at, \\quad s(t) = v_0 t + \\frac{at^2}{2}, \\quad v^2 - v_0^2 = 2as"
                    },
                    {
                        "id": "sub-wzglednosc-ruchu",
                        "title": "3. Względność ruchu",
                        "icon": "🔄",
                        "desc": "Składanie prędkości, ruch z wiatrem i pod wiatr, wyprzedzanie na autostradzie, ruch pionowy.",
                        "tasks": [
                            {
                                "id": "k-zad-22b",
                                "number": 22,
                                "title": "Zadanie 22. Wycieczka rowerowa Kasi pod wiatr i z wiatrem",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Względność ruchu",
                                "link": "https://skul.pl/fizyka/zadanie,6-10,a,pid,78658",
                                "tags": [
                                    "Wiatr",
                                    "Ruch względny"
                                ],
                                "problem": "Kasia podczas wycieczki rowerowej przebywa trasę $10\\text{ km}$ w czasie $45\\text{ minut}$, jeśli jedzie pod wiatr, natomiast jeśli jedzie zgodnie z wiatrem, ten sam odcinek przebywa w czasie $25\\text{ minut}$.\n\nOblicz:\na) szybkość Kasi w obu przypadkach,\nb) szybkość Kasi przy bezwietrznej pogodzie,\nc) szybkość wiatru.\n(Dla uproszczenia zakładamy, że rowerzystka jedzie w obu przypadkach z taką samą szybkością względem powietrza).",
                                "solution": {
                                    "intuition": "Jadąc z wiatrem, prędkości się dodają ($v_K + v_w$), a pod wiatr odejmują ($v_K - v_w$).",
                                    "givens": "$s = 10\\text{ km}$, $t_1 = 45\\text{ min} = \\frac{3}{4}\\text{ h}$, $t_2 = 25\\text{ min} = \\frac{5}{12}\\text{ h}$.",
                                    "steps": [
                                        {
                                            "title": "a) Szybkości w obu przypadkach",
                                            "content": "$$v_1 = \\frac{s}{t_1} = \\frac{10\\text{ km}}{3/4\\text{ h}} = \\frac{40}{3} \\approx 13{,}33\\text{ km/h} \\quad (\\text{pod wiatr})$$\n$$v_2 = \\frac{s}{t_2} = \\frac{10\\text{ km}}{5/12\\text{ h}} = 24\\text{ km/h} \\quad (\\text{z wiatrem})$$"
                                        },
                                        {
                                            "title": "b) i c) Szybkość Kasi $v_K$ i szybkość wiatru $v_w$",
                                            "content": "$$v_K - v_w = \\frac{40}{3}$$\n$$v_K + v_w = 24$$\nDodając stronami:\n$$2 v_K = 24 + \\frac{40}{3} = \\frac{112}{3} \\implies v_K = \\frac{56}{3} \\approx 18{,}67\\text{ km/h}$$\nOdejmując stronami:\n$$2 v_w = 24 - \\frac{40}{3} = \\frac{32}{3} \\implies v_w = \\frac{16}{3} \\approx 5{,}33\\text{ km/h}$$"
                                        }
                                    ],
                                    "numerical": "$$v_1 = 13{,}3\\text{ km/h}, \\quad v_2 = 24\\text{ km/h}, \\quad v_K \\approx 18{,}67\\text{ km/h}, \\quad v_w \\approx 5{,}33\\text{ km/h}$$",
                                    "answer": "a) Pod wiatr $13{,}3\\text{ km/h}$, z wiatrem $24\\text{ km/h}$.\nb) Szybkość Kasi bez wiatru: $18{,}67\\text{ km/h}$.\nc) Szybkość wiatru: $5{,}33\\text{ km/h}$.",
                                    "trap": "Uważaj na ułamki godzin: $25\\text{ min} = 25/60 = 5/12\\text{ h}$."
                                }
                            },
                            {
                                "id": "k-zad-23",
                                "number": 23,
                                "title": "Zadanie 23. Wyprzedzanie TIR-a przez motocyklistę",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Względność ruchu",
                                "link": "https://skul.pl/fizyka/zadanie,7-9,zid,81291",
                                "tags": [
                                    "Wyprzedzanie",
                                    "Długość pojazdu"
                                ],
                                "problem": "Po dwóch pasach autostrady poruszają się równolegle do siebie: TIR o długości $L = 10\\text{ m}$ jadący z szybkością $90\\text{ km/h}$ i motocyklista jadący z szybkością $108\\text{ km/h}$.\n\nOblicz czas wyprzedzania TIR-a przez motocyklistę oraz drogi przebyte przez oba pojazdy w tym czasie. Przyjmij, że rozmiary motocyklisty można pominąć.",
                                "solution": {
                                    "intuition": "W układzie odniesienia TIR-a motocyklista porusza się z prędkością względną $\\Delta v = v_m - v_{TIR}$ i musi pokonać drogę równą długości TIR-a ($L = 10\\text{ m}$).",
                                    "givens": "$L = 10\\text{ m}$, $v_{TIR} = 90\\text{ km/h} = 25\\text{ m/s}$, $v_m = 108\\text{ km/h} = 30\\text{ m/s}$.",
                                    "steps": [
                                        {
                                            "title": "Czas wyprzedzania",
                                            "content": "$$\\Delta v = v_m - v_{TIR} = 30\\text{ m/s} - 25\\text{ m/s} = 5\\text{ m/s}$$\n$$t = \\frac{L}{\\Delta v} = \\frac{10\\text{ m}}{5\\text{ m/s}} = 2\\text{ s}$$"
                                        },
                                        {
                                            "title": "Drogi przebyte względem jezdni w czasie $t = 2\\text{ s}$",
                                            "content": "$$s_{TIR} = v_{TIR} \\cdot t = 25\\text{ m/s} \\cdot 2\\text{ s} = 50\\text{ m}$$\n$$s_m = v_m \\cdot t = 30\\text{ m/s} \\cdot 2\\text{ s} = 60\\text{ m}$$\n(Różnica dróg wynosi $60 - 50 = 10\\text{ m} = L$ – zgadza się!)"
                                        }
                                    ],
                                    "numerical": "$$t = 2\\text{ s}, \\quad s_{TIR} = 50\\text{ m}, \\quad s_m = 60\\text{ m}$$",
                                    "answer": "Czas wyprzedzania wynosi $2\\text{ sekundy}$. Droga TIR-a wynosi $50\\text{ m}$, a motocyklisty $60\\text{ m}$.",
                                    "trap": "Zawsze przelicz km/h na m/s przed dzieleniem przez metry!"
                                }
                            },
                            {
                                "id": "k-zad-24",
                                "number": 24,
                                "title": "Zadanie 24. Mijanie się motocykla i samochodu",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Względność ruchu",
                                "link": "https://skul.pl/fizyka/zadanie,7-11,a,pid,78683",
                                "tags": [
                                    "Prędkość względna",
                                    "Pojazdy z naprzeciwka"
                                ],
                                "problem": "Po przeciwległych pasach ruchu jadą motocykl i samochód. W zapisanych poniżej równaniach ruchu tych pojazdów wszystkie współczynniki liczbowe wyrażone są w odpowiednich jednostkach SI:\n$$x_S(t) = 5t - 0{,}1t^2$$\n$$x_M(t) = 100 - 0{,}1t^2$$\n\na) Opisz słowami ruch każdego z tych pojazdów.\nb) Oblicz, po jakim czasie pojazdy się miną.\nc) Zapisz funkcje $v_S(t)$ i $v_M(t)$.\nd) Oblicz wartość prędkości względnej pojazdów w chwili mijania.",
                                "solution": {
                                    "intuition": "Pojazdy miną się, gdy ich współrzędne będą równe ($x_S = x_M$). Zauważ, że człon $-0{,}1t^2$ występuje w obu równaniach, więc upraszcza się przy porównaniu!",
                                    "givens": "$x_S(t) = 5t - 0{,}1t^2$, $x_M(t) = 100 - 0{,}1t^2$.",
                                    "steps": [
                                        {
                                            "title": "a) Opis ruchów",
                                            "content": "- Samochód: startuje z $x_0 = 0$, prędkość początkowa $v_0 = 5\\text{ m/s}$, ruch opóźniony z $a = -0{,}2\\text{ m/s}^2$.\n- Motocykl: startuje z $x_0 = 100\\text{ m}$, prędkość początkowa $0$, przyspiesza w stronę ujemnych $x$ z $a = -0{,}2\\text{ m/s}^2$."
                                        },
                                        {
                                            "title": "b) Czas mijania",
                                            "content": "$$x_S(t) = x_M(t) \\implies 5t - 0{,}1t^2 = 100 - 0{,}1t^2$$\n$$5t = 100 \\implies t = 20\\text{ s}$$"
                                        },
                                        {
                                            "title": "c) Funkcje prędkości",
                                            "content": "$$v_S(t) = 5 - 0{,}2t$$\n$$v_M(t) = -0{,}2t$$"
                                        },
                                        {
                                            "title": "d) Prędkość względna w chwili $t = 20\\text{ s}$",
                                            "content": "$$v_S(20) = 5 - 0{,}2(20) = 5 - 4 = 1\\text{ m/s}$$\n$$v_M(20) = -0{,}2(20) = -4\\text{ m/s}$$\n$$v_{wzgl} = |v_S - v_M| = |1 - (-4)| = 5\\text{ m/s}$$"
                                        }
                                    ],
                                    "numerical": "$$t = 20\\text{ s}, \\quad v_S(20) = 1\\text{ m/s}, \\quad v_M(20) = -4\\text{ m/s}, \\quad v_{wzgl} = 5\\text{ m/s}$$",
                                    "answer": "b) Pojazdy miną się po $20\\text{ s}$.\nc) $v_S(t) = 5 - 0{,}2t$, $v_M(t) = -0{,}2t$.\nd) Wartość prędkości względnej wynosi $5\\text{ m/s}$.",
                                    "trap": "Pojazdy poruszają się w przeciwne strony, więc ich prędkości względne sumują się co do wartości bezwzględnej!"
                                }
                            },
                            {
                                "id": "k-zad-25",
                                "number": 25,
                                "title": "Zadanie 25. Dwa ciała wyrzucone w pionie",
                                "difficulty": 3,
                                "source": "Zbiór zadań • Względność ruchu",
                                "link": "https://skul.pl/fizyka/zadanie,7-12,a,pid,78687",
                                "tags": [
                                    "Rzut pionowy",
                                    "Spadek swobodny",
                                    "Niezależność od g"
                                ],
                                "problem": "Pierwsze ciało wyrzucono z powierzchni Ziemi pionowo w górę z prędkością o wartości $v_0 = 20\\text{ m/s}$. Równocześnie z maksymalnej wysokości $H$, na którą to ciało się wzniesie, zaczęło spadać swobodnie drugie ciało. Rozmiary obu ciał pomijamy. Przyjmij $g = 10\\text{ m/s}^2$.\n\na) Dla obu ciał napisz równania: $y_1(t), y_2(t), v_{1y}(t), v_{2y}(t)$ (oś $y$ zwrócona w górę, $y=0$ na Ziemi).\nb) Oblicz czas, po którym miną się te ciała.\nc) Oblicz wysokość, na której to nastąpi.\nd) Oblicz wartość prędkości względnej ciała 1 względem ciała 2 oraz podaj jej kierunek i zwrot w chwili mijania.\ne) Zbadaj, czy obliczona prędkość względna zależy od czasu.",
                                "solution": {
                                    "intuition": "Obydwa ciała poruszają się w tym samym polu grawitacyjnym z dokładnie takim samym przyspieszeniem $g$. Oznacza to, że ich przyspieszenie względne wynosi ZERO! Względem siebie ciała poruszają się ruchem jednostajnym ze stałą prędkością $v_0$!",
                                    "givens": "$v_0 = 20\\text{ m/s}$, $g = 10\\text{ m/s}^2$.",
                                    "steps": [
                                        {
                                            "title": "a) Maksymalna wysokość i równania ruchu",
                                            "content": "$$H = \\frac{v_0^2}{2g} = \\frac{400}{20} = 20\\text{ m}$$\n$$y_1(t) = 20t - 5t^2, \\quad v_{1y}(t) = 20 - 10t$$\n$$y_2(t) = 20 - 5t^2, \\quad v_{2y}(t) = -10t$$"
                                        },
                                        {
                                            "title": "b) Czas mijania",
                                            "content": "$$y_1(t) = y_2(t) \\implies 20t - 5t^2 = 20 - 5t^2$$\n$$20t = 20 \\implies t = 1\\text{ s}$$"
                                        },
                                        {
                                            "title": "c) Wysokość mijania",
                                            "content": "$$h = y_1(1) = 20(1) - 5(1)^2 = 15\\text{ m}$$"
                                        },
                                        {
                                            "title": "d) i e) Prędkość względna",
                                            "content": "$$v_{wzgl} = v_{1y}(t) - v_{2y}(t) = (20 - 10t) - (-10t) = 20\\text{ m/s}$$\nPrędkość względna jest STAŁA w czasie i wynosi dokładnie $20\\text{ m/s}$ skierowana pionowo w górę!"
                                        }
                                    ],
                                    "numerical": "$$H = 20\\text{ m}, \\quad t = 1\\text{ s}, \\quad h = 15\\text{ m}, \\quad v_{wzgl} = 20\\text{ m/s}$$",
                                    "answer": "b) Ciała miną się po $1\\text{ s}$.\nc) Na wysokości $15\\text{ m}$.\nd) Wartość prędkości względnej to $20\\text{ m/s}$, zwrot w górę.\ne) Prędkość względna NIE ZALEŻY od czasu.",
                                    "trap": "Częsty błąd: próba liczenia przyspieszenia względnego. Ponieważ na oba ciała działa to samo $g$, $a_{wzgl} = g - g = 0$."
                                }
                            }
                        ],
                        "number": 3,
                        "shortTitle": "Względność ruchu",
                        "formulaCheat": "\\vec{v}_{\\text{wzgl}} = \\vec{v}_1 - \\vec{v}_2, \\quad v_{\\text{wzgl}} = v_1 + v_2 \\text{ (naprzeciw)}, \\quad v_{\\text{wzgl}} = |v_1 - v_2|"
                    },
                    {
                        "id": "sub-rzut-poziomy",
                        "title": "4. Rzut poziomy",
                        "icon": "🎯",
                        "desc": "Równania parametryczne, czas lotu, zasięg, prędkość końcowa i kąt uderzenia.",
                        "tasks": [
                            {
                                "id": "k-zad-27",
                                "number": 27,
                                "title": "Zadanie 27. Pocisk z wieży o równaniach x(t)=40t i y(t)=5t^2",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Rzut poziomy",
                                "link": "https://skul.pl/fizyka/zadanie,3-2-1,a,pid,693668",
                                "tags": [
                                    "Równania parametryczne",
                                    "Składowe prędkości"
                                ],
                                "problem": "Z wieży wystrzelono poziomo pocisk, którego współrzędne $x$ i $y$ są opisane równaniami:\n$$x(t) = 40t \\quad \\text{oraz} \\quad y(t) = 5t^2$$\nPrzyjmij $g = 10\\text{ m/s}^2$.\n\na) Oblicz, po jakim czasie od wystrzelenia pocisku jego prędkość pozioma $v_x$ będzie równa prędkości w kierunku pionowym $v_y$.\nb) Oblicz współrzędną $x$ i współrzędną $y$ pocisku po tym czasie.",
                                "solution": {
                                    "intuition": "W poziomie ruch jest jednostajny ze stałą prędkością $v_x = 40\\text{ m/s}$. W pionie ruch jest jednostajnie przyspieszony z przyspieszeniem $g = 10\\text{ m/s}^2$ ($v_y = gt = 10t$).",
                                    "givens": "$x(t) = 40t \\implies v_x = 40\\text{ m/s}$, $y(t) = 5t^2 \\implies v_y = 10t$.",
                                    "steps": [
                                        {
                                            "title": "a) Warunek $v_x = v_y$",
                                            "content": "$$40 = 10t \\implies t = 4\\text{ s}$$"
                                        },
                                        {
                                            "title": "b) Współrzędne po $4\\text{ s}$",
                                            "content": "$$x(4) = 40 \\cdot 4 = 160\\text{ m}$$\n$$y(4) = 5 \\cdot 4^2 = 5 \\cdot 16 = 80\\text{ m}$$"
                                        }
                                    ],
                                    "numerical": "$$t = 4\\text{ s}, \\quad x = 160\\text{ m}, \\quad y = 80\\text{ m}$$",
                                    "answer": "a) Po $4\\text{ sekundach}$.\nb) $x = 160\\text{ m}$, $y = 80\\text{ m}$.",
                                    "trap": "Uważaj: prędkość pionowa to $v_y = 10t$, a nie $5t$ (pochodna z $5t^2$ to $10t$)."
                                }
                            },
                            {
                                "id": "k-zad-28",
                                "number": 28,
                                "title": "Zadanie 28. Piłka rzucona pod kątem 45 stopni do podłogi",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Rzut poziomy",
                                "link": "https://skul.pl/fizyka/zadanie,3-2-2,zid,610119",
                                "tags": [
                                    "Kąt uderzenia",
                                    "Zasada zachowania energii"
                                ],
                                "problem": "Dziecko wyrzuciło piłkę znad głowy, z wysokości $H = 1{,}25\\text{ m}$, w kierunku poziomym. Piłka uderzyła o podłogę pod kątem $\\alpha = 45^\\circ$ do poziomu. Przyjmij $g = 10\\text{ m/s}^2$.\n\nOblicz prędkość początkową piłki $v_0$ oraz jej prędkość $v_k$ w chwili uderzenia o podłogę.",
                                "solution": {
                                    "intuition": "Skoro kąt uderzenia to $45^\\circ$, to składowa pionowa $v_y$ w chwili uderzenia musi być DOKŁADNIE RÓWNA składowej poziomej $v_x$ (bo $\\tan 45^\\circ = 1$!).",
                                    "givens": "$H = 1{,}25\\text{ m}$, $\\alpha = 45^\\circ$, $g = 10\\text{ m/s}^2$.",
                                    "steps": [
                                        {
                                            "title": "Prędkość pionowa przy uderzeniu $v_y$",
                                            "content": "Ze spadku swobodnego z wysokości $H$:\n$$v_y = \\sqrt{2gH} = \\sqrt{2 \\cdot 10 \\cdot 1{,}25} = \\sqrt{25} = 5\\text{ m/s}$$"
                                        },
                                        {
                                            "title": "Wyznaczenie $v_0$ z kąta uderzenia",
                                            "content": "$$\\tan 45^\\circ = \\frac{v_y}{v_0} = 1 \\implies v_0 = v_y = 5\\text{ m/s}$$"
                                        },
                                        {
                                            "title": "Prędkość wypadkowa $v_k$",
                                            "content": "$$v_k = \\sqrt{v_0^2 + v_y^2} = \\sqrt{5^2 + 5^2} = 5\\sqrt{2} \\approx 7{,}07\\text{ m/s}$$"
                                        }
                                    ],
                                    "numerical": "$$v_0 = 5\\text{ m/s}, \\quad v_k = 5\\sqrt{2} \\approx 7{,}07\\text{ m/s}$$",
                                    "answer": "Prędkość początkowa wynosi $5\\text{ m/s}$, a prędkość w chwili uderzenia $5\\sqrt{2}\\text{ m/s} \\approx 7{,}07\\text{ m/s}$.",
                                    "trap": "Kąt do poziomu oznacza $\\tan\\alpha = v_y / v_x$."
                                }
                            },
                            {
                                "id": "k-zad-29",
                                "number": 29,
                                "title": "Zadanie 29. Kamień o prędkości 1,5 raza większej",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Rzut poziomy",
                                "link": "https://skul.pl/fizyka/zadanie,3-2-3,zid,610120",
                                "tags": [
                                    "Wektor prędkości",
                                    "Twierdzenie Pitagorasa"
                                ],
                                "problem": "Kamień rzucony poziomo z wysokiego brzegu po czasie $t = 0{,}5\\text{ s}$ osiągnął prędkość $n = 1{,}5$ raza większą od prędkości początkowej ($v(t) = 1{,}5 v_0$). Przyjmij $g = 10\\text{ m/s}^2$.\n\nZ jaką prędkością początkową $v_0$ rzucono kamień?",
                                "solution": {
                                    "intuition": "Wypadkowa prędkość to $v = \\sqrt{v_0^2 + v_y^2}$, gdzie $v_y = gt$. Podstawiamy $v = 1{,}5 v_0$ i rozwiązujemy równanie.",
                                    "givens": "$t = 0{,}5\\text{ s}$, $g = 10\\text{ m/s}^2$, $v = 1{,}5 v_0$.",
                                    "steps": [
                                        {
                                            "title": "Obliczenie składowej pionowej $v_y$",
                                            "content": "$$v_y = g t = 10 \\cdot 0{,}5 = 5\\text{ m/s}$$"
                                        },
                                        {
                                            "title": "Równanie pitagorejskie dla wektora prędkości",
                                            "content": "$$v^2 = v_0^2 + v_y^2$$\n$$(1{,}5 v_0)^2 = v_0^2 + 5^2$$\n$$2{,}25 v_0^2 = v_0^2 + 25$$\n$$1{,}25 v_0^2 = 25$$\n$$v_0^2 = \\frac{25}{1{,}25} = 20 \\implies v_0 = \\sqrt{20} = 2\\sqrt{5} \\approx 4{,}47\\text{ m/s}$$"
                                        }
                                    ],
                                    "numerical": "$$v_0 = \\sqrt{20} \\approx 4{,}47\\text{ m/s}$$",
                                    "answer": "Kamień rzucono z prędkością początkową $2\\sqrt{5}\\text{ m/s} \\approx 4{,}47\\text{ m/s}$.",
                                    "trap": "Pamiętaj o podniesieniu całego wyrażenia $(1{,}5 v_0)$ do kwadratu, co daje $2{,}25 v_0^2$."
                                }
                            },
                            {
                                "id": "k-zad-30",
                                "number": 30,
                                "title": "Zadanie 30. Kulka rzucona w stronę ściany",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Rzut poziomy",
                                "link": "https://skul.pl/fizyka/zadanie,3-2-4,a,pid,693670",
                                "tags": [
                                    "Uderzenie w ścianę",
                                    "Tor paraboli"
                                ],
                                "problem": "Chłopiec wyrzucił kulkę znad głowy z wysokości $H = 1{,}8\\text{ m}$ nad ziemią. Przy prędkości początkowej $v_0 = 6\\text{ m/s}$ skierowanej poziomo kulka uderzyła w ścianę znajdującą się w odległości $l = 3\\text{ m}$ od chłopca. Przyjmij $g = 10\\text{ m/s}^2$.\n\na) Oblicz czas lotu kulki do chwili uderzenia w ścianę oraz wartość jej prędkości $v$ w chwili uderzenia.\nb) Na jakiej wysokości od powierzchni ziemi kulka uderzyła w ścianę?\nc) Z jaką prędkością chłopiec powinien wyrzucić kulkę poziomo, aby nie uderzyła ona bezpośrednio w ścianę (upadła na ziemię przed ścianą)?",
                                "solution": {
                                    "intuition": "Czas dotarcia do ściany zależy wyłącznie od składowej poziomej ($t = l / v_0$). Wysokość uderzenia to wysokość początkowa minus spadek swobodny w tym czasie.",
                                    "givens": "$H = 1{,}8\\text{ m}$, $v_0 = 6\\text{ m/s}$, $l = 3\\text{ m}$, $g = 10\\text{ m/s}^2$.",
                                    "steps": [
                                        {
                                            "title": "a) Czas lotu i prędkość uderzenia",
                                            "content": "$$t = \\frac{l}{v_0} = \\frac{3\\text{ m}}{6\\text{ m/s}} = 0{,}5\\text{ s}$$\n$$v_y = gt = 10 \\cdot 0{,}5 = 5\\text{ m/s}$$\n$$v = \\sqrt{v_0^2 + v_y^2} = \\sqrt{6^2 + 5^2} = \\sqrt{36 + 25} = \\sqrt{61} \\approx 7{,}81\\text{ m/s}$$"
                                        },
                                        {
                                            "title": "b) Wysokość uderzenia nad ziemią",
                                            "content": "Spadek w pionie:\n$$h_{opad} = \\frac{g t^2}{2} = \\frac{10 \\cdot 0{,}5^2}{2} = 1{,}25\\text{ m}$$\nWysokość nad ziemią:\n$$h = H - h_{opad} = 1{,}8 - 1{,}25 = 0{,}55\\text{ m}$$"
                                        },
                                        {
                                            "title": "c) Warunek upadku przed ścianą",
                                            "content": "Całkowity czas spadku na ziemię z wysokości $H$:\n$$t_{calk} = \\sqrt{\\frac{2H}{g}} = \\sqrt{\\frac{2 \\cdot 1{,}8}{10}} = \\sqrt{0{,}36} = 0{,}6\\text{ s}$$\nAby zasięg $Z = v_0 t_{calk} < l$ ($Z < 3\\text{ m}$):\n$$v_0 < \\frac{l}{t_{calk}} = \\frac{3}{0{,}6} = 5\\text{ m/s}$$"
                                        }
                                    ],
                                    "numerical": "$$t = 0{,}5\\text{ s}, \\quad v = \\sqrt{61} \\approx 7{,}81\\text{ m/s}, \\quad h = 0{,}55\\text{ m}, \\quad v_0 < 5\\text{ m/s}$$",
                                    "answer": "a) $t = 0{,}5\\text{ s}$, $v \\approx 7{,}81\\text{ m/s}$.\nb) $h = 0{,}55\\text{ m}$ ($55\\text{ cm}$).\nc) Prędkość początkowa musi być mniejsza niż $5\\text{ m/s}$.",
                                    "trap": "Pamiętaj: wysokość uderzenia to $H - \\frac{gt^2}{2}$, a nie sama wartość $\\frac{gt^2}{2}$."
                                }
                            },
                            {
                                "id": "k-zad-31",
                                "number": 31,
                                "title": "Zadanie 31. Strzelanie do tarczy z pistoletu pneumatycznego",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Rzut poziomy",
                                "link": "https://skul.pl/fizyka/zadanie,3-2-5,zid,610122",
                                "tags": [
                                    "Balistyka",
                                    "Opadanie pocisku"
                                ],
                                "problem": "Podczas strzelania do tarczy umieszczonej w odległości $l = 10\\text{ m}$ od lufy pistoletu pneumatycznego pocisk trafił w odległości $d = 1\\text{ cm}$ poniżej środka tarczy. Przyjmij $g = 9{,}81\\text{ m/s}^2$ (lub $10\\text{ m/s}^2$).\n\nOblicz prędkość pocisku $v_0$ w chwili opuszczania lufy. Załóż, że lufa pistoletu w tym momencie była ustawiona poziomo, a strzelec celował w środek tarczy.",
                                "solution": {
                                    "intuition": "Pocisk opadł o $d = 1\\text{ cm} = 0{,}01\\text{ m}$ pod wpływem grawitacji. Z tego opadu wyznaczymy czas lotu $t$, a stąd prędkość początkową $v_0 = l / t$.",
                                    "givens": "$l = 10\\text{ m}$, $d = 1\\text{ cm} = 0{,}01\\text{ m}$, $g = 9{,}81\\text{ m/s}^2$.",
                                    "steps": [
                                        {
                                            "title": "Czas lotu pocisku",
                                            "content": "$$d = \\frac{g t^2}{2} \\implies t = \\sqrt{\\frac{2d}{g}} = \\sqrt{\\frac{2 \\cdot 0{,}01}{9{,}81}} = \\sqrt{\\frac{0{,}02}{9{,}81}} \\approx 0{,}04515\\text{ s}$$"
                                        },
                                        {
                                            "title": "Prędkość wylotowa pocisku $v_0$",
                                            "content": "$$v_0 = \\frac{l}{t} = \\frac{10\\text{ m}}{0{,}04515\\text{ s}} \\approx 221{,}5\\text{ m/s}$$"
                                        }
                                    ],
                                    "numerical": "$$t \\approx 0{,}045\\text{ s}, \\quad v_0 \\approx 221{,}5\\text{ m/s} \\quad (\\text{dla } g=10: v_0 \\approx 223{,}6\\text{ m/s})$$",
                                    "answer": "Prędkość pocisku wynosi ok. $221{,}5\\text{ m/s}$ ($223{,}6\\text{ m/s}$ dla $g=10$).",
                                    "trap": "Pamiętaj o zamianie centymetrów na metry: $1\\text{ cm} = 0{,}01\\text{ m}$."
                                }
                            },
                            {
                                "id": "k-zad-32",
                                "number": 32,
                                "title": "Zadanie 32. Karabinek sportowy i deska sosnowa",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Rzut poziomy",
                                "link": "https://skul.pl/fizyka/zadanie,3-2-6,a,pid,693673",
                                "tags": [
                                    "Czas lotu",
                                    "Opadanie pocisku"
                                ],
                                "problem": "Z karabinka sportowego strzelano w kierunku deski sosnowej. Sprawdzano, czy pocisk przebije deskę ustawioną w odległości $l = 60\\text{ m}$ od lufy. Pocisk został wystrzelony z prędkością $v_0 = 350\\text{ m/s}$ w kierunku poziomym. Przyjmij $g = 9{,}81\\text{ m/s}^2$.\n\na) Ile czasu trwał lot pocisku?\nb) O ile milimetrów opadł pocisk w trakcie lotu?",
                                "solution": {
                                    "intuition": "Czas lotu w poziomie: $t = l / v_0$. Opadanie w pionie: $h = \\frac{gt^2}{2}$. Wynik zamieniamy na milimetry ($1\\text{ m} = 1000\\text{ mm}$).",
                                    "givens": "$l = 60\\text{ m}$, $v_0 = 350\\text{ m/s}$, $g = 9{,}81\\text{ m/s}^2$.",
                                    "steps": [
                                        {
                                            "title": "a) Czas lotu pocisku",
                                            "content": "$$t = \\frac{l}{v_0} = \\frac{60\\text{ m}}{350\\text{ m/s}} = \\frac{6}{35} \\approx 0{,}1714\\text{ s}$$"
                                        },
                                        {
                                            "title": "b) Opadnięcie pocisku w milimetrach",
                                            "content": "$$h = \\frac{g t^2}{2} = \\frac{9{,}81 \\cdot (0{,}1714)^2}{2} \\approx \\frac{9{,}81 \\cdot 0{,}02939}{2} \\approx 0{,}1441\\text{ m} = 144{,}1\\text{ mm}$$"
                                        }
                                    ],
                                    "numerical": "$$t \\approx 0{,}171\\text{ s}, \\quad h \\approx 144\\text{ mm}$$",
                                    "answer": "a) Lot trwał ok. $0{,}171\\text{ s}$.\nb) Pocisk opadł o ok. $144\\text{ mm}$ ($14{,}4\\text{ cm}$).",
                                    "trap": "Zwróć uwagę na wymóg podania wyniku w milimetrach [mm]."
                                }
                            },
                            {
                                "id": "k-zad-33",
                                "number": 33,
                                "title": "Zadanie 33. Zasięg rzutu na Ziemi, Księżycu i Marsie",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Rzut poziomy",
                                "link": "https://skul.pl/fizyka/zadanie,3-2-7,zid,610124",
                                "tags": [
                                    "Grawitacja na innych ciałach",
                                    "Zasięg rzutu"
                                ],
                                "problem": "Kamień rzucony poziomo na Ziemi z pewnej wysokości z prędkością $v_0$ uzyskał zasięg $Z = 4\\text{ m}$.\nPrzyspieszenia grawitacyjne na Ziemi, Księżycu i Marsie wynoszą odpowiednio:\n$g_Z = 9{,}81\\text{ m/s}^2$, $g_K = 1{,}62\\text{ m/s}^2$, $g_M = 3{,}69\\text{ m/s}^2$.\n\nOblicz, ile razy większy niż na Ziemi byłby zasięg takiego rzutu na Księżycu, a ile razy na Marsie (przy tej samej wysokości $H$ i prędkości $v_0$).",
                                "solution": {
                                    "intuition": "Czas spadku to $t = \\sqrt{\\frac{2H}{g}}$, zatem zasięg to $Z = v_0 \\sqrt{\\frac{2H}{g}}$. Zasięg jest odwrotnie proporcjonalny do pierwiastka z przyspieszenia grawitacyjnego: $Z \\sim \\frac{1}{\\sqrt{g}}$.",
                                    "givens": "$Z_Z = 4\\text{ m}$, $g_Z = 9{,}81\\text{ m/s}^2$, $g_K = 1{,}62\\text{ m/s}^2$, $g_M = 3{,}69\\text{ m/s}^2$.",
                                    "steps": [
                                        {
                                            "title": "Wyprowadzenie stosunku zasięgów",
                                            "content": "$$\\frac{Z_K}{Z_Z} = \\frac{v_0 \\sqrt{2H/g_K}}{v_0 \\sqrt{2H/g_Z}} = \\sqrt{\\frac{g_Z}{g_K}}$$\n$$\\frac{Z_M}{Z_Z} = \\sqrt{\\frac{g_Z}{g_M}}$$"
                                        },
                                        {
                                            "title": "Obliczenia liczbowe",
                                            "content": "Na Księżycu:\n$$\\frac{Z_K}{Z_Z} = \\sqrt{\\frac{9{,}81}{1{,}62}} = \\sqrt{6{,}0556} \\approx 2{,}46$$\nNa Marsie:\n$$\\frac{Z_M}{Z_Z} = \\sqrt{\\frac{9{,}81}{3{,}69}} = \\sqrt{2{,}6585} \\approx 1{,}63$$"
                                        }
                                    ],
                                    "numerical": "$$\\frac{Z_K}{Z_Z} \\approx 2{,}46, \\quad \\frac{Z_M}{Z_Z} \\approx 1{,}63$$",
                                    "answer": "Na Księżycu zasięg byłby ok. $2{,}46$ razy większy (ok. $9{,}84\\text{ m}$), a na Marsie ok. $1{,}63$ razy większy (ok. $6{,}52\\text{ m}$).",
                                    "trap": "Nie dziel przyspieszeń bez pierwiastka! Zasięg zależy od $\\sqrt{g}$, a nie od samego $g$."
                                }
                            },
                            {
                                "id": "k-zad-34",
                                "number": 34,
                                "title": "Zadanie 34. Kamień wystrzelony z wieży H = 45 m",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Rzut poziomy",
                                "link": "https://skul.pl/fizyka/zadanie,3-2-8,zid,610125",
                                "tags": [
                                    "Wektor prędkości",
                                    "Kąt uderzenia"
                                ],
                                "problem": "Z wieży o wysokości $H = 45\\text{ m}$ wystrzelono z procy kamień z prędkością $v_0 = 40\\text{ m/s}$ w kierunku poziomym. Przyjmij $g = 10\\text{ m/s}^2$.\n\nOblicz jego prędkość w chwili uderzenia o ziemię. Ustal kierunek, jaki wektor prędkości tworzy z poziomem tuż przed uderzeniem kamienia w ziemię.",
                                "solution": {
                                    "intuition": "Energię lub kinematykę można wykorzystać do policzenia $v_y = \\sqrt{2gH}$. Całkowita prędkość to $v = \\sqrt{v_0^2 + v_y^2}$, a kąt z poziomem wyznaczamy z $\\tan\\alpha = v_y / v_0$.",
                                    "givens": "$H = 45\\text{ m}$, $v_0 = 40\\text{ m/s}$, $g = 10\\text{ m/s}^2$.",
                                    "steps": [
                                        {
                                            "title": "Składowa pionowa $v_y$",
                                            "content": "$$v_y = \\sqrt{2gH} = \\sqrt{2 \\cdot 10 \\cdot 45} = \\sqrt{900} = 30\\text{ m/s}$$"
                                        },
                                        {
                                            "title": "Prędkość wypadkowa $v$",
                                            "content": "$$v = \\sqrt{v_0^2 + v_y^2} = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50\\text{ m/s}$$"
                                        },
                                        {
                                            "title": "Kierunek (kąt z poziomem)",
                                            "content": "$$\\tan\\alpha = \\frac{v_y}{v_0} = \\frac{30}{40} = 0{,}75 \\implies \\alpha \\approx 36{,}87^\\circ \\approx 37^\\circ$$"
                                        }
                                    ],
                                    "numerical": "$$v = 50\\text{ m/s}, \\quad \\tan\\alpha = 0{,}75 \\implies \\alpha \\approx 37^\\circ$$",
                                    "answer": "Prędkość w chwili uderzenia wynosi $50\\text{ m/s}$, a wektor prędkości tworzy z poziomem kąt około $37^\\circ$.",
                                    "trap": "Jest to klasyczny trójkąt egipski 3-4-5 ($30-40-50$)."
                                }
                            }
                        ],
                        "number": 4,
                        "shortTitle": "Rzut poziomy",
                        "formulaCheat": "x(t) = v_0 t, \\quad y(t) = \\frac{gt^2}{2}, \\quad v_x = v_0, \\quad v_y = gt, \\quad v = \\sqrt{v_0^2 + (gt)^2}"
                    },
                    {
                        "id": "sub-ruch-po-okregu",
                        "title": "5. Ruch po okręgu",
                        "icon": "🔄",
                        "desc": "Częstotliwość, okres, prędkość kątowa i liniowa, przyspieszenie dośrodkowe, przekładnie.",
                        "tasks": [
                            {
                                "id": "k-zad-35",
                                "number": 35,
                                "title": "Zadanie 35. Ostrze kosiarki do trawy",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Ruch po okręgu",
                                "link": "https://skul.pl/fizyka/zadanie,3-4-1,zid,610154",
                                "tags": [
                                    "Częstotliwość",
                                    "Okres"
                                ],
                                "problem": "Ostrze kosiarki do trawy wykonuje $n = 2880\\text{ obrotów na minutę}$.\n\nOblicz częstotliwość obrotów kosiarki oraz czas jednego obrotu (okres).",
                                "solution": {
                                    "intuition": "Częstotliwość $f$ to liczba obrotów na sekundę [Hz]. Okres $T$ to czas jednego obrotu: $T = 1/f$.",
                                    "givens": "$n = 2880$, $t = 1\\text{ min} = 60\\text{ s}$.",
                                    "steps": [
                                        {
                                            "title": "Częstotliwość $f$",
                                            "content": "$$f = \\frac{n}{t} = \\frac{2880}{60\\text{ s}} = 48\\text{ Hz}$$"
                                        },
                                        {
                                            "title": "Okres $T$",
                                            "content": "$$T = \\frac{1}{f} = \\frac{1}{48}\\text{ s} \\approx 0{,}0208\\text{ s} \\approx 20{,}8\\text{ ms}$$"
                                        }
                                    ],
                                    "numerical": "$$f = 48\\text{ Hz}, \\quad T = \\frac{1}{48}\\text{ s} \\approx 0{,}021\\text{ s}$$",
                                    "answer": "Częstotliwość wynosi $48\\text{ Hz}$, a okres ok. $0{,}021\\text{ s}$.",
                                    "trap": "Pamiętaj o zamianie minuty na $60\\text{ sekund}$."
                                }
                            },
                            {
                                "id": "k-zad-36",
                                "number": 36,
                                "title": "Zadanie 36. Trening na gokarcie",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Ruch po okręgu",
                                "link": "https://skul.pl/fizyka/zadanie,3-4-2,zid,610155",
                                "tags": [
                                    "Okres",
                                    "Czas okrążenia"
                                ],
                                "problem": "Podczas treningu na gokarcie zawodnik w czasie $t = 5\\text{ min}$ wykonał $n = 15\\text{ okrążeń}$.\n\nOblicz czas jednego okrążenia.",
                                "solution": {
                                    "intuition": "Czas jednego okrążenia to okres $T = t / n$.",
                                    "givens": "$t = 5\\text{ min} = 300\\text{ s}$, $n = 15$.",
                                    "steps": [
                                        {
                                            "title": "Obliczenie okresu $T$",
                                            "content": "$$T = \\frac{t}{n} = \\frac{300\\text{ s}}{15} = 20\\text{ s}$$"
                                        }
                                    ],
                                    "numerical": "$$T = \\frac{300}{15} = 20\\text{ s}$$",
                                    "answer": "Czas jednego okrążenia wynosi $20\\text{ sekund}$.",
                                    "trap": "Bardzo proste zadanie – pamiętaj tylko o zamianie $5\\text{ min}$ na $300\\text{ s}$."
                                }
                            },
                            {
                                "id": "k-zad-37",
                                "number": 37,
                                "title": "Zadanie 37. Promień wodzący ciężarka",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Ruch po okręgu",
                                "link": "https://skul.pl/fizyka/zadanie,3-4-3,zid,610156",
                                "tags": [
                                    "Prędkość kątowa",
                                    "Radiany"
                                ],
                                "problem": "Promień wodzący ciężarka poruszającego się po okręgu zakreśla kąt $\\Delta\\varphi = 150^\\circ$ w czasie $\\Delta t = 0{,}5\\text{ s}$.\n\nOblicz średnią prędkość kątową ciężarka w rad/s.",
                                "solution": {
                                    "intuition": "Przelicz kąt w stopniach na radiany: $\\alpha\\text{ rad} = \\alpha^\\circ \\cdot \\frac{\\pi}{180^\\circ}$. Następnie $\\omega = \\Delta\\varphi / \\Delta t$.",
                                    "givens": "$\\Delta\\varphi = 150^\\circ = 150 \\cdot \\frac{\\pi}{180} = \\frac{5\\pi}{6}\\text{ rad}$, $\\Delta t = 0{,}5\\text{ s}$.",
                                    "steps": [
                                        {
                                            "title": "Prędkość kątowa $\\omega$",
                                            "content": "$$\\omega = \\frac{\\Delta\\varphi}{\\Delta t} = \\frac{\\frac{5\\pi}{6}\\text{ rad}}{0{,}5\\text{ s}} = \\frac{5\\pi}{3}\\text{ rad/s} \\approx 5{,}24\\text{ rad/s}$$"
                                        }
                                    ],
                                    "numerical": "$$\\omega = \\frac{5\\pi}{3}\\text{ rad/s} \\approx 5{,}24\\text{ rad/s}$$",
                                    "answer": "Średnia prędkość kątowa wynosi $\\frac{5\\pi}{3}\\text{ rad/s} \\approx 5{,}24\\text{ rad/s}$.",
                                    "trap": "Prędkość kątowa w układzie SI musi być w radianach na sekundę [rad/s], a nie w stopniach!"
                                }
                            },
                            {
                                "id": "k-zad-38",
                                "number": 38,
                                "title": "Zadanie 38. Kąt zakreślony przy stałej prędkości kątowej",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Ruch po okręgu",
                                "link": "https://skul.pl/fizyka/zadanie,3-4-4,zid,610157",
                                "tags": [
                                    "Kąt",
                                    "Ruch obrotowy"
                                ],
                                "problem": "Ciało porusza się ze stałą prędkością kątową $\\omega = 0{,}5\\pi\\text{ rad/s}$.\n\nJaki kąt zakreśli jego promień wodzący w czasie $\\Delta t = 20\\text{ s}$? Ile to pełnych obrotów?",
                                "solution": {
                                    "intuition": "$\\Delta\\varphi = \\omega \\cdot \\Delta t$. Jeden pełny obrót to $2\\pi\\text{ rad}$.",
                                    "givens": "$\\omega = 0{,}5\\pi\\text{ rad/s}$, $\\Delta t = 20\\text{ s}$.",
                                    "steps": [
                                        {
                                            "title": "Obliczenie kąta",
                                            "content": "$$\\Delta\\varphi = \\omega \\cdot \\Delta t = 0{,}5\\pi \\cdot 20 = 10\\pi\\text{ rad} = 10 \\cdot 180^\\circ = 1800^\\circ$$"
                                        },
                                        {
                                            "title": "Liczba pełnych obrotów",
                                            "content": "$$n = \\frac{\\Delta\\varphi}{2\\pi} = \\frac{10\\pi}{2\\pi} = 5\\text{ obrotów}$$"
                                        }
                                    ],
                                    "numerical": "$$\\Delta\\varphi = 10\\pi\\text{ rad} = 1800^\\circ, \\quad n = 5$$",
                                    "answer": "Promień wodzący zakreśli kąt $10\\pi\\text{ rad}$ ($1800^\\circ$), co odpowiada $5$ pełnym obrotom.",
                                    "trap": "Pamiętaj: $2\\pi\\text{ rad} = 360^\\circ$."
                                }
                            },
                            {
                                "id": "k-zad-39",
                                "number": 39,
                                "title": "Zadanie 39. Samochód na rondzie",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Ruch po okręgu",
                                "link": "https://skul.pl/fizyka/zadanie,3-4-5,zid,610158",
                                "tags": [
                                    "Rondo",
                                    "Prędkość kątowa"
                                ],
                                "problem": "Samochód wykonał pełne okrążenie ronda w czasie $\\Delta t = 20\\text{ s}$.\n\nOblicz prędkość kątową pojazdu.",
                                "solution": {
                                    "intuition": "Pełne okrążenie to kąt $\\Delta\\varphi = 2\\pi\\text{ rad}$. Zatem $\\omega = 2\\pi / T$.",
                                    "givens": "$T = 20\\text{ s}$, $\\Delta\\varphi = 2\\pi\\text{ rad}$.",
                                    "steps": [
                                        {
                                            "title": "Prędkość kątowa $\\omega$",
                                            "content": "$$\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{20} = \\frac{\\pi}{10}\\text{ rad/s} = 0{,}1\\pi\\text{ rad/s} \\approx 0{,}314\\text{ rad/s}$$"
                                        }
                                    ],
                                    "numerical": "$$\\omega = 0{,}1\\pi\\text{ rad/s} \\approx 0{,}314\\text{ rad/s}$$",
                                    "answer": "Prędkość kątowa pojazdu wynosi $\\frac{\\pi}{10}\\text{ rad/s} \\approx 0{,}314\\text{ rad/s}$.",
                                    "trap": "Nie myl prędkości kątowej [rad/s] z prędkością liniową [m/s]."
                                }
                            },
                            {
                                "id": "k-zad-40",
                                "number": 40,
                                "title": "Zadanie 40. Krzesełko karuzeli",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Ruch po okręgu",
                                "link": "https://skul.pl/fizyka/zadanie,3-4-6,zid,610159",
                                "tags": [
                                    "Karuzela",
                                    "Okres"
                                ],
                                "problem": "Krzesełko karuzeli porusza się po okręgu ze stałą prędkością kątową $\\omega = 0{,}08\\pi\\text{ rad/s}$.\n\nW jakim czasie krzesełko karuzeli zatoczy jeden pełny okrąg?",
                                "solution": {
                                    "intuition": "Czas jednego pełnego okręgu to okres $T = 2\\pi / \\omega$.",
                                    "givens": "$\\omega = 0{,}08\\pi\\text{ rad/s}$.",
                                    "steps": [
                                        {
                                            "title": "Obliczenie okresu $T$",
                                            "content": "$$T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{0{,}08\\pi} = \\frac{2}{0{,}08} = 25\\text{ s}$$"
                                        }
                                    ],
                                    "numerical": "$$T = \\frac{2}{0{,}08} = 25\\text{ s}$$",
                                    "answer": "Krzesełko zatoczy pełny okrąg w czasie $25\\text{ sekund}$.",
                                    "trap": "Liczba $\\pi$ skraca się w liczniku i mianowniku!"
                                }
                            },
                            {
                                "id": "k-zad-41",
                                "number": 41,
                                "title": "Zadanie 41. Płonąca kula na sznurze",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Ruch po okręgu",
                                "link": "https://skul.pl/fizyka/zadanie,3-4-7,zid,610160",
                                "tags": [
                                    "Częstotliwość",
                                    "Złudzenie optyczne"
                                ],
                                "problem": "Gdy płonąca kula zatacza okręgi ze stałą prędkością kątową $\\omega = 200\\text{ rad/s}$, nasze oko widzi ognisty okrąg.\n\nOblicz częstotliwość w ruchu po okręgu dla płonącej kuli.",
                                "solution": {
                                    "intuition": "Zależność między prędkością kątową a częstotliwością: $\\omega = 2\\pi f \\implies f = \\frac{\\omega}{2\\pi}$.",
                                    "givens": "$\\omega = 200\\text{ rad/s}$.",
                                    "steps": [
                                        {
                                            "title": "Częstotliwość $f$",
                                            "content": "$$f = \\frac{\\omega}{2\\pi} = \\frac{200}{2\\pi} = \\frac{100}{\\pi} \\approx 31{,}83\\text{ Hz}$$"
                                        }
                                    ],
                                    "numerical": "$$f = \\frac{100}{\\pi}\\text{ Hz} \\approx 31{,}83\\text{ Hz}$$",
                                    "answer": "Częstotliwość wynosi ok. $31{,}8\\text{ Hz}$ (ponad $31$ obrotów na sekundę, dlatego bezwładność oka tworzy ciągły okrąg).",
                                    "trap": "Pamiętaj o dzieleniu przez $2\\pi$, a nie tylko przez $\\pi$."
                                }
                            },
                            {
                                "id": "k-zad-42",
                                "number": 42,
                                "title": "Zadanie 42. Częstotliwość obrotów kół samochodu",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Ruch po okręgu",
                                "link": "https://skul.pl/fizyka/zadanie,3-4-8,zid,610161",
                                "tags": [
                                    "Toczenie koła",
                                    "Obwód"
                                ],
                                "problem": "Oblicz częstotliwość obrotów kół samochodu jadącego z prędkością $72\\text{ km/h}$, którego koła mają średnicę $d = 720\\text{ mm}$.",
                                "solution": {
                                    "intuition": "Prędkość liniowa brzegu koła względem osi jest równa prędkości samochodu: $v = 72\\text{ km/h} = 20\\text{ m/s}$. Związek między prędkością a częstotliwością: $v = \\omega r = 2\\pi f r = \\pi d f$.",
                                    "givens": "$v = 72\\text{ km/h} = 20\\text{ m/s}$, $d = 720\\text{ mm} = 0{,}72\\text{ m}$, promień $r = 0{,}36\\text{ m}$.",
                                    "steps": [
                                        {
                                            "title": "Wyprowadzenie częstotliwości",
                                            "content": "$$v = \\pi d f \\implies f = \\frac{v}{\\pi d} = \\frac{20\\text{ m/s}}{\\pi \\cdot 0{,}72\\text{ m}} = \\frac{20}{0{,}72\\pi} \\approx 8{,}84\\text{ Hz}$$"
                                        }
                                    ],
                                    "numerical": "$$f = \\frac{20}{0{,}72\\pi} \\approx 8{,}84\\text{ Hz}$$",
                                    "answer": "Częstotliwość obrotów kół wynosi ok. $8{,}84\\text{ Hz}$ (obrotów na sekundę).",
                                    "trap": "Nie pomyl średnicy z promieniem! Średnica to $2r$."
                                }
                            },
                            {
                                "id": "k-zad-43",
                                "number": 43,
                                "title": "Zadanie 43. Koło pasowe maszyny rolniczej",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Ruch po okręgu",
                                "link": "https://skul.pl/fizyka/zadanie,3-4-9,zid,610162",
                                "tags": [
                                    "Pas transmisyjny",
                                    "Okres"
                                ],
                                "problem": "Koło pasowe maszyny rolniczej ma promień $r = 20\\text{ cm}$ i napędza pas transmisyjny, który uzyskuje prędkość liniową $v = 21{,}7\\text{ m/s}$.\n\nOblicz czas jednego obrotu koła pasowego.",
                                "solution": {
                                    "intuition": "Prędkość liniowa pasa jest równa prędkości liniowej punktów na obwodzie koła: $v = \\frac{2\\pi r}{T} \\implies T = \\frac{2\\pi r}{v}$.",
                                    "givens": "$r = 20\\text{ cm} = 0{,}2\\text{ m}$, $v = 21{,}7\\text{ m/s}$.",
                                    "steps": [
                                        {
                                            "title": "Okres jednego obrotu $T$",
                                            "content": "$$T = \\frac{2\\pi r}{v} = \\frac{2\\pi \\cdot 0{,}2\\text{ m}}{21{,}7\\text{ m/s}} = \\frac{0{,}4\\pi}{21{,}7} \\approx \\frac{1{,}2566}{21{,}7} \\approx 0{,}0579\\text{ s} \\approx 58\\text{ ms}$$"
                                        }
                                    ],
                                    "numerical": "$$T \\approx 0{,}058\\text{ s}$$",
                                    "answer": "Czas jednego obrotu wynosi ok. $0{,}058\\text{ s}$ ($58\\text{ milisekund}$).",
                                    "trap": "Pamiętaj o zamianie centymetrów na metry: $20\\text{ cm} = 0{,}2\\text{ m}$."
                                }
                            },
                            {
                                "id": "k-zad-44",
                                "number": 44,
                                "title": "Zadanie 44. Wskazówki zegara ściennego",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Ruch po okręgu",
                                "link": "https://skul.pl/fizyka/zadanie,3-4-10,zid,610163",
                                "tags": [
                                    "Zegar",
                                    "Stosunek prędkości"
                                ],
                                "problem": "Minutowa wskazówka zegara ściennego jest dwa razy dłuższa od godzinowej: $l_1 = 2 l_2$. Okres obrotu wskazówki minutowej to $T_1 = 60\\text{ min} = 1\\text{ h}$, a wskazówki godzinowej $T_2 = 12\\text{ h}$.\n\nOblicz stosunek prędkości liniowych końców wskazówek minutowej i godzinowej ($\\frac{v_1}{v_2}$) oraz stosunek ich prędkości kątowych ($\\frac{\\omega_1}{\\omega_2}$).",
                                "solution": {
                                    "intuition": "Wskazówka minutowa obraca się 12 razy szybciej kątowo niż godzinowa. Ponieważ jest też 2 razy dłuższa, jej koniec pokonuje znacznie większą drogę liniową!",
                                    "givens": "$l_1 = 2 l_2$, $T_1 = 1\\text{ h}$, $T_2 = 12\\text{ h}$.",
                                    "steps": [
                                        {
                                            "title": "Stosunek prędkości kątowych",
                                            "content": "$$\\omega_1 = \\frac{2\\pi}{T_1}, \\quad \\omega_2 = \\frac{2\\pi}{T_2}$$\n$$\\frac{\\omega_1}{\\omega_2} = \\frac{T_2}{T_1} = \\frac{12\\text{ h}}{1\\text{ h}} = 12$$"
                                        },
                                        {
                                            "title": "Stosunek prędkości liniowych",
                                            "content": "$$v_1 = \\omega_1 l_1, \\quad v_2 = \\omega_2 l_2$$\n$$\\frac{v_1}{v_2} = \\frac{\\omega_1}{\\omega_2} \\cdot \\frac{l_1}{l_2} = 12 \\cdot 2 = 24$$"
                                        }
                                    ],
                                    "numerical": "$$\\frac{\\omega_1}{\\omega_2} = 12, \\quad \\frac{v_1}{v_2} = 24$$",
                                    "answer": "Stosunek prędkości kątowych wynosi $12$, a stosunek prędkości liniowych końców wynosi $24$.",
                                    "trap": "Pamiętaj, że okres wskazówki godzinowej wynosi $12\\text{ godzin}$, a nie $24\\text{ h}$ (zegar ma tarczę 12-godzinną!)."
                                }
                            },
                            {
                                "id": "k-zad-45",
                                "number": 45,
                                "title": "Zadanie 45. Platforma karuzeli dla dzieci",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Ruch po okręgu",
                                "link": "https://skul.pl/fizyka/zadanie,3-4-11,a,pid,693698",
                                "tags": [
                                    "Karuzela",
                                    "Zmiana obrotów"
                                ],
                                "problem": "Na obwodzie platformy karuzeli o promieniu $R = 2\\text{ m}$ rozmieszczone są równomiernie krzesełka dla dzieci. Krzesełko poruszające się ruchem jednostajnym po okręgu wykonuje $n = 12\\text{ obrotów w ciągu } t = 1\\text{ min}$.\n\nOblicz:\na) częstotliwość i okres obrotu karuzeli,\nb) prędkość kątową i liniową dzieci siedzących na krzesełkach,\nc) zmianę prędkości kątowej karuzeli $\\Delta\\omega$, gdy liczba jej obrotów zwiększy się o $\\Delta n = 6$ w ciągu $t = 1\\text{ min}$.",
                                "solution": {
                                    "intuition": "$f = n/t$, $T = 1/f$, $\\omega = 2\\pi f$, $v = \\omega R$.",
                                    "givens": "$R = 2\\text{ m}$, $n = 12$, $t = 60\\text{ s}$, $\\Delta n = 6$.",
                                    "steps": [
                                        {
                                            "title": "a) Częstotliwość i okres",
                                            "content": "$$f = \\frac{12}{60\\text{ s}} = 0{,}2\\text{ Hz}$$\n$$T = \\frac{1}{f} = \\frac{1}{0{,}2} = 5\\text{ s}$$"
                                        },
                                        {
                                            "title": "b) Prędkość kątowa i liniowa",
                                            "content": "$$\\omega = 2\\pi f = 2\\pi \\cdot 0{,}2 = 0{,}4\\pi\\text{ rad/s} \\approx 1{,}257\\text{ rad/s}$$\n$$v = \\omega R = 0{,}4\\pi \\cdot 2 = 0{,}8\\pi\\text{ m/s} \\approx 2{,}51\\text{ m/s}$$"
                                        },
                                        {
                                            "title": "c) Zmiana prędkości kątowej $\\Delta\\omega$",
                                            "content": "$$\\Delta f = \\frac{\\Delta n}{t} = \\frac{6}{60} = 0{,}1\\text{ Hz}$$\n$$\\Delta\\omega = 2\\pi \\Delta f = 2\\pi \\cdot 0{,}1 = 0{,}2\\pi\\text{ rad/s} \\approx 0{,}628\\text{ rad/s}$$"
                                        }
                                    ],
                                    "numerical": "$$f = 0{,}2\\text{ Hz}, \\quad T = 5\\text{ s}, \\quad \\omega \\approx 1{,}26\\text{ rad/s}, \\quad v \\approx 2{,}51\\text{ m/s}, \\quad \\Delta\\omega \\approx 0{,}63\\text{ rad/s}$$",
                                    "answer": "a) $f = 0{,}2\\text{ Hz}, T = 5\\text{ s}$.\nb) $\\omega = 0{,}4\\pi\\text{ rad/s} \\approx 1{,}26\\text{ rad/s}$, $v = 0{,}8\\pi\\text{ m/s} \\approx 2{,}51\\text{ m/s}$.\nc) $\\Delta\\omega = 0{,}2\\pi\\text{ rad/s} \\approx 0{,}63\\text{ rad/s}$.",
                                    "trap": "Zwróć uwagę, że w podpunkcie c pytają o ZMIANĘ prędkości kątowej, a nie o nową całkowitą wartość."
                                }
                            },
                            {
                                "id": "k-zad-46",
                                "number": 46,
                                "title": "Zadanie 46. Przyspieszenie dośrodkowe opony samochodu",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Ruch po okręgu",
                                "link": "https://skul.pl/fizyka/zadanie,3-5-1,zid,610172",
                                "tags": [
                                    "Przyspieszenie dośrodkowe",
                                    "Obrót koła"
                                ],
                                "problem": "Promień koła samochodu osobowego wynosi $R = 31{,}7\\text{ cm}$.\n\nOblicz przyspieszenie dośrodkowe punktu znajdującego się na powierzchni opony względem pojazdu przy prędkości pojazdu $72\\text{ km/h}$.",
                                "solution": {
                                    "intuition": "W układzie odniesienia pojazdu punkt na brzegu opony porusza się po okręgu z prędkością równą prędkości auta ($v = 72\\text{ km/h} = 20\\text{ m/s}$). Wzór na przyspieszenie dośrodkowe to $a_d = \\frac{v^2}{R}$.",
                                    "givens": "$R = 31{,}7\\text{ cm} = 0{,}317\\text{ m}$, $v = 72\\text{ km/h} = 20\\text{ m/s}$.",
                                    "steps": [
                                        {
                                            "title": "Obliczenie przyspieszenia dośrodkowego",
                                            "content": "$$a_d = \\frac{v^2}{R} = \\frac{20^2}{0{,}317} = \\frac{400}{0{,}317} \\approx 1261{,}8\\text{ m/s}^2$$"
                                        }
                                    ],
                                    "numerical": "$$a_d = \\frac{400}{0{,}317} \\approx 1262\\text{ m/s}^2$$",
                                    "answer": "Przyspieszenie dośrodkowe wynosi ok. $1262\\text{ m/s}^2$ (ponad 120 razy więcej niż przyspieszenie ziemskie g!).",
                                    "trap": "Nie zapomnij zamienić centymetrów na metry: $31{,}7\\text{ cm} = 0{,}317\\text{ m}$."
                                }
                            },
                            {
                                "id": "k-zad-47",
                                "number": 47,
                                "title": "Zadanie 47. Koło roweru i przyspieszenie dośrodkowe",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Ruch po okręgu",
                                "link": "https://skul.pl/fizyka/zadanie,3-5-2,zid,610173",
                                "tags": [
                                    "Koło roweru",
                                    "Częstotliwość"
                                ],
                                "problem": "Podczas jazdy ze stałą prędkością koło roweru o średnicy $d = 70\\text{ cm}$ w ciągu $t = 2\\text{ min}$ obróciło się $n = 200\\text{ razy}$.\n\nOblicz przyspieszenie dośrodkowe punktu znajdującego się na brzegu koła względem roweru.",
                                "solution": {
                                    "intuition": "Z $n$ i $t$ obliczamy częstotliwość $f = n/t$, stąd prędkość kątową $\\omega = 2\\pi f$, a następnie przyspieszenie dośrodkowe $a_d = \\omega^2 r$.",
                                    "givens": "$d = 70\\text{ cm} \\implies r = 0{,}35\\text{ m}$, $n = 200$, $t = 2\\text{ min} = 120\\text{ s}$.",
                                    "steps": [
                                        {
                                            "title": "Częstotliwość i prędkość kątowa",
                                            "content": "$$f = \\frac{200}{120\\text{ s}} = \\frac{5}{3}\\text{ Hz}$$\n$$\\omega = 2\\pi f = 2\\pi \\cdot \\frac{5}{3} = \\frac{10\\pi}{3}\\text{ rad/s} \\approx 10{,}47\\text{ rad/s}$$"
                                        },
                                        {
                                            "title": "Przyspieszenie dośrodkowe $a_d$",
                                            "content": "$$a_d = \\omega^2 r = \\left( \\frac{10\\pi}{3} \\right)^2 \\cdot 0{,}35 = \\frac{100\\pi^2}{9} \\cdot 0{,}35 \\approx 109{,}66 \\cdot 0{,}35 \\approx 38{,}38\\text{ m/s}^2$$"
                                        }
                                    ],
                                    "numerical": "$$a_d = \\omega^2 r \\approx 38{,}4\\text{ m/s}^2$$",
                                    "answer": "Przyspieszenie dośrodkowe wynosi ok. $38{,}4\\text{ m/s}^2$.",
                                    "trap": "Średnica to $70\\text{ cm}$, więc promień wynosi $r = 35\\text{ cm} = 0{,}35\\text{ m}$."
                                }
                            },
                            {
                                "id": "k-zad-48",
                                "number": 48,
                                "title": "Zadanie 48. Samochód na zakręcie o promieniu R = 18 m",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Ruch po okręgu",
                                "link": "https://skul.pl/fizyka/zadanie,3-5-3,zid,610174",
                                "tags": [
                                    "Zakręt",
                                    "Prędkość pokonywania zakrętu"
                                ],
                                "problem": "Samochód przejeżdżał przez zakręt o promieniu $R = 18\\text{ m}$ z przyspieszeniem dośrodkowym $a_d = 8\\text{ m/s}^2$.\n\nOblicz, z jaką prędkością pojazd pokonywał zakręt. Wynik podaj w m/s i w km/h.",
                                "solution": {
                                    "intuition": "$a_d = \\frac{v^2}{R} \\implies v = \\sqrt{a_d R}$.",
                                    "givens": "$R = 18\\text{ m}$, $a_d = 8\\text{ m/s}^2$.",
                                    "steps": [
                                        {
                                            "title": "Obliczenie prędkości",
                                            "content": "$$v = \\sqrt{a_d R} = \\sqrt{8 \\cdot 18} = \\sqrt{144} = 12\\text{ m/s}$$\n$$v = 12 \\cdot 3{,}6\\text{ km/h} = 43{,}2\\text{ km/h}$$"
                                        }
                                    ],
                                    "numerical": "$$v = 12\\text{ m/s} = 43{,}2\\text{ km/h}$$",
                                    "answer": "Pojazd pokonywał zakręt z prędkością $12\\text{ m/s}$ ($43{,}2\\text{ km/h}$).",
                                    "trap": "Czysty rachunek: $\\sqrt{144} = 12$."
                                }
                            },
                            {
                                "id": "k-zad-49",
                                "number": 49,
                                "title": "Zadanie 49. Długość ramienia karuzeli",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Ruch po okręgu",
                                "link": "https://skul.pl/fizyka/zadanie,3-5-4,zid,610175",
                                "tags": [
                                    "Karuzela",
                                    "Wyznaczanie promienia"
                                ],
                                "problem": "Ramię karuzeli zatacza okrąg $15\\text{ razy}$ w czasie jednej minuty. Przyspieszenie dośrodkowe osoby siedzącej w krzesełku na końcu ramienia ma wartość $a_d = 12{,}5\\text{ m/s}^2$.\n\nOblicz długość ramienia karuzeli.",
                                "solution": {
                                    "intuition": "Z $n = 15$ i $t = 60\\text{ s}$ wyliczamy $\\omega = 2\\pi \\frac{n}{t} = \\frac{30\\pi}{60} = 0{,}5\\pi\\text{ rad/s}$. Następnie $R = a_d / \\omega^2$.",
                                    "givens": "$n = 15$, $t = 60\\text{ s}$, $a_d = 12{,}5\\text{ m/s}^2$.",
                                    "steps": [
                                        {
                                            "title": "Prędkość kątowa",
                                            "content": "$$f = \\frac{15}{60} = 0{,}25\\text{ Hz}$$\n$$\\omega = 2\\pi f = 2\\pi \\cdot 0{,}25 = 0{,}5\\pi\\text{ rad/s}$$"
                                        },
                                        {
                                            "title": "Długość ramienia (promień $R$)",
                                            "content": "$$a_d = \\omega^2 R \\implies R = \\frac{a_d}{\\omega^2} = \\frac{12{,}5}{(0{,}5\\pi)^2} = \\frac{12{,}5}{0{,}25\\pi^2} = \\frac{50}{\\pi^2} \\approx \\frac{50}{9{,}8696} \\approx 5{,}07\\text{ m}$$"
                                        }
                                    ],
                                    "numerical": "$$R = \\frac{50}{\\pi^2} \\approx 5{,}07\\text{ m}$$",
                                    "answer": "Długość ramienia karuzeli wynosi ok. $5{,}07\\text{ m}$ (ok. $5\\text{ metrów}$).",
                                    "trap": "$(0{,}5\\pi)^2 = 0{,}25\\pi^2 \\approx 2{,}467$. Nie zapomnij podnieść $\\pi$ do kwadratu!"
                                }
                            },
                            {
                                "id": "k-zad-50",
                                "number": 50,
                                "title": "Zadanie 50. Piłeczka na skróconym sznurku",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Ruch po okręgu",
                                "link": "https://skul.pl/fizyka/zadanie,3-5-6,zid,610177",
                                "tags": [
                                    "Zmiana promienia",
                                    "Niezmiennik przyspieszenia"
                                ],
                                "problem": "Piłeczka przywiązana do nierozciągliwego sznurka krąży po okręgu o promieniu $R$ z częstotliwością $f$.\n\nJak powinna się zmienić częstotliwość ruchu piłeczki, by po skróceniu sznurka do $\\frac{R}{3}$ przyspieszenie dośrodkowe nie zmieniło wartości?",
                                "solution": {
                                    "intuition": "Przyspieszenie dośrodkowe wyrażone przez częstotliwość to $a_d = \\omega^2 R = (2\\pi f)^2 R = 4\\pi^2 f^2 R$. Jeśli $R$ maleje 3 razy, to $f^2$ musi wzrosnąć 3 razy, aby iloczyn pozostał stały!",
                                    "givens": "$R_1 = R$, $f_1 = f$, $R_2 = \\frac{R}{3}$, $a_{d1} = a_{d2}$.",
                                    "steps": [
                                        {
                                            "title": "Zależność przyspieszenia dośrodkowego od częstotliwości",
                                            "content": "$$a_d = 4\\pi^2 f^2 R$$"
                                        },
                                        {
                                            "title": "Warunek równości przyspieszeń",
                                            "content": "$$4\\pi^2 f_1^2 R_1 = 4\\pi^2 f_2^2 R_2$$\n$$f^2 R = f_2^2 \\cdot \\frac{R}{3}$$\n$$f_2^2 = 3 f^2 \\implies f_2 = f \\sqrt{3} \\approx 1{,}73 f$$"
                                        }
                                    ],
                                    "numerical": "$$f_2 = f\\sqrt{3} \\approx 1{,}73 f$$",
                                    "answer": "Częstotliwość powinna wzrosnąć $\\sqrt{3}$ razy (czyli około $1{,}73$ razy).",
                                    "trap": "Częsty błąd: odpowiedź, że częstotliwość musi wzrosnąć 3 razy. Pamiętaj, że $f$ występuje w kwadracie, więc zmiana to pierwiastek z 3!"
                                }
                            }
                        ],
                        "number": 5,
                        "shortTitle": "Ruch po okręgu",
                        "formulaCheat": "T = \\frac{1}{f}, \\quad \\omega = 2\\pi f = \\frac{2\\pi}{T}, \\quad v = \\omega R, \\quad a_d = \\frac{v^2}{R} = \\omega^2 R"
                    },
                    {
                        "id": "sub-matura-cke",
                        "number": 6,
                        "title": "6. Zadania maturalne CKE",
                        "shortTitle": "Zadania Maturalne CKE",
                        "icon": "🏆",
                        "desc": "Zadania egzaminacyjne z oficjalnych arkuszy maturalnych CKE Formuła 2023 – rzuty, wektory i tor ruchu.",
                        "formulaCheat": "\\text{Zastosowanie równań toru i wektorów w zadaniach CKE}",
                        "tasks": [
                            {
                                "id": "m-kin-1",
                                "number": 1,
                                "title": "Zadanie maturalne: Rzut poziomy na stok nachylony pod kątem",
                                "difficulty": 2,
                                "source": "CKE Matura z Fizyki (Arkusz Pokazowy)",
                                "tags": [
                                    "Rzut poziomy",
                                    "Geometria toru",
                                    "Wektory"
                                ],
                                "problem": "Z krawędzi zbocza nachylonego do poziomu pod kątem $\\alpha = 30^\\circ$ wystrzelono poziomo małe ciało z prędkością początkową $v_0 = 10\\text{ m/s}$. Przyjmij $g = 10\\text{ m/s}^2$ oraz pomiń opory powietrza.\n\n1. Wyprowadź równanie toru ruchu ciała $y(x)$.\n2. Oblicz czas lotu ciała $t$ do momentu uderzenia w zbocze.\n3. Oblicz odległość $d$ mierzoną wzdłuż stoku od punktu wyrzutu do punktu upadku.",
                                "solution": {
                                    "intuition": "Rzut poziomy to złożenie dwóch niezależnych ruchów: w poziomie (oś X) ruch jednostajny z prędkością $v_0$, a w pionie (oś Y) swobodny spadek z przyspieszeniem $g$. Stok tworzy prostą o równaniu $y = -x \\cdot \\tan\\alpha$.",
                                    "givens": "$v_0 = 10\\text{ m/s}$, $\\alpha = 30^\\circ$, $g = 10\\text{ m/s}^2$. Szukane: $t, d$.",
                                    "steps": [
                                        {
                                            "title": "Równania parametryczne ruchu",
                                            "content": "$$x(t) = v_0 t$$\n$$y(t) = \\frac{g t^2}{2}$$"
                                        },
                                        {
                                            "title": "Warunek uderzenia w stok",
                                            "content": "$$\\tan\\alpha = \\frac{y}{x} = \\frac{g t}{2 v_0} \\implies t = \\frac{2 v_0 \\tan\\alpha}{g}$$"
                                        },
                                        {
                                            "title": "Odległość wzdłuż stoku $d$",
                                            "content": "$$d = \\frac{x}{\\cos\\alpha} = \\frac{2 v_0^2 \\sin\\alpha}{g \\cos^2\\alpha}$$"
                                        }
                                    ],
                                    "numerical": "$$t \\approx 1{,}15\\text{ s}, \\quad d \\approx 13{,}3\\text{ m}$$",
                                    "answer": "Czas lotu wynosi $t \\approx 1{,}15\\text{ s}$, a odległość wzdłuż stoku $d \\approx 13{,}3\\text{ m}$.",
                                    "trap": "Częsty błąd: próba obracania układu bez poprawnego rozłożenia wektora przyspieszenia $g$."
                                }
                            }
                        ]
                    }
                ],
                "tasks": [
                    {
                        "id": "k-zad-1",
                        "number": 1,
                        "title": "Zadanie 1. Kierowca Kraków – Chrzanów",
                        "difficulty": 1,
                        "source": "Zbiór zadań • Ruch jednostajny prostoliniowy",
                        "link": "https://skul.pl/fizyka/zadanie,4-1,zid,81231",
                        "tags": [
                            "Prędkość średnia",
                            "Dwa etapy czasu"
                        ],
                        "problem": "W czasie pierwszych $30\\text{ minut}$ kierowca jedzie autostradą z Krakowa do Chrzanowa z szybkością średnią $95\\text{ km/h}$. Następnie zjeżdża z autostrady i przez kolejne $45\\text{ minut}$ porusza się z szybkością średnią $45\\text{ km/h}$.\n\nOblicz szybkość średnią kierowcy na całej trasie.",
                        "solution": {
                            "intuition": "Szybkość średnia to ZAWSZE całkowita przebyta droga podzielona przez całkowity czas podróży ($v_{sr} = \\frac{s_{calk}}{t_{calk}}$). Nie możemy po prostu dodać $95$ i $45$ i podzielić przez dwa, bo kierowca jechał dłużej z mniejszą prędkością!",
                            "givens": "$t_1 = 30\\text{ min} = 0{,}5\\text{ h}$, $v_1 = 95\\text{ km/h}$, $t_2 = 45\\text{ min} = 0{,}75\\text{ h}$, $v_2 = 45\\text{ km/h}$.",
                            "steps": [
                                {
                                    "title": "Obliczenie dróg przebytych na poszczególnych etapach",
                                    "content": "$$s_1 = v_1 \\cdot t_1 = 95\\text{ km/h} \\cdot 0{,}5\\text{ h} = 47{,}5\\text{ km}$$\n$$s_2 = v_2 \\cdot t_2 = 45\\text{ km/h} \\cdot 0{,}75\\text{ h} = 33{,}75\\text{ km}$$"
                                },
                                {
                                    "title": "Całkowita droga i całkowity czas",
                                    "content": "$$s_{calk} = s_1 + s_2 = 47{,}5\\text{ km} + 33{,}75\\text{ km} = 81{,}25\\text{ km}$$\n$$t_{calk} = t_1 + t_2 = 0{,}5\\text{ h} + 0{,}75\\text{ h} = 1{,}25\\text{ h} = 75\\text{ min}$$"
                                },
                                {
                                    "title": "Wyznaczenie szybkości średniej",
                                    "content": "$$v_{sr} = \\frac{s_{calk}}{t_{calk}} = \\frac{81{,}25\\text{ km}}{1{,}25\\text{ h}} = 65\\text{ km/h}$$"
                                }
                            ],
                            "numerical": "$$v_{sr} = \\frac{47{,}5 + 33{,}75}{0{,}5 + 0{,}75} = \\frac{81{,}25}{1{,}25} = 65\\text{ km/h}$$",
                            "answer": "Szybkość średnia kierowcy na całej trasie wynosi $65\\text{ km/h}$.",
                            "trap": "Nie wolno liczyć średniej arytmetycznej $\\frac{95+45}{2} = 70\\text{ km/h}$, ponieważ czasy trwania obu etapów są różne ($30\\text{ min} \\neq 45\\text{ min}$)."
                        }
                    },
                    {
                        "id": "k-zad-2",
                        "number": 2,
                        "title": "Zadanie 2. Bieg lekkoatlety po bieżni",
                        "difficulty": 1,
                        "source": "Zbiór zadań • Ruch jednostajny prostoliniowy",
                        "link": "https://skul.pl/fizyka/zadanie,4-3,zid,81233",
                        "tags": [
                            "Prędkość średnia",
                            "Jednostki SI"
                        ],
                        "problem": "Pierwsze cztery okrążenia, o długości $400\\text{ m}$ każde, lekkoatleta przebiega w czasie $4\\text{ min i } 20\\text{ s}$, kolejne trzy i pół okrążenia – w czasie $6\\text{ min}$, a ostatnie $200\\text{ m}$ – z szybkością $8\\text{ m/s}$.\n\nOblicz szybkość średnią lekkoatlety podczas całego biegu.",
                        "solution": {
                            "intuition": "Rozbij bieg na trzy etapy, przelicz wszystkie czasy na sekundy, a odległości na metry. Następnie zsumuj drogi i czasy.",
                            "givens": "$s_1 = 4 \\cdot 400\\text{ m} = 1600\\text{ m}$, $t_1 = 4\\text{ min } 20\\text{ s} = 260\\text{ s}$.\n$s_2 = 3{,}5 \\cdot 400\\text{ m} = 1400\\text{ m}$, $t_2 = 6\\text{ min} = 360\\text{ s}$.\n$s_3 = 200\\text{ m}$, $v_3 = 8\\text{ m/s}$.",
                            "steps": [
                                {
                                    "title": "Czas trwania trzeciego etapu",
                                    "content": "$$t_3 = \\frac{s_3}{v_3} = \\frac{200\\text{ m}}{8\\text{ m/s}} = 25\\text{ s}$$"
                                },
                                {
                                    "title": "Całkowita droga i czas",
                                    "content": "$$s_{calk} = 1600\\text{ m} + 1400\\text{ m} + 200\\text{ m} = 3200\\text{ m}$$\n$$t_{calk} = 260\\text{ s} + 360\\text{ s} + 25\\text{ s} = 645\\text{ s}$$"
                                },
                                {
                                    "title": "Szybkość średnia",
                                    "content": "$$v_{sr} = \\frac{s_{calk}}{t_{calk}} = \\frac{3200\\text{ m}}{645\\text{ s}} \\approx 4{,}96\\text{ m/s} \\approx 17{,}86\\text{ km/h}$$"
                                }
                            ],
                            "numerical": "$$v_{sr} = \\frac{3200\\text{ m}}{645\\text{ s}} \\approx 4{,}96\\text{ m/s}$$",
                            "answer": "Szybkość średnia lekkoatlety wynosi około $4{,}96\\text{ m/s}$ ($17{,}9\\text{ km/h}$).",
                            "trap": "Pamiętaj o przeliczeniu minut na sekundy ($1\\text{ min} = 60\\text{ s}$)."
                        }
                    },
                    {
                        "id": "k-zad-3",
                        "number": 3,
                        "title": "Zadanie 3. Trasa Kraków – Krościenko i powrót",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Ruch jednostajny prostoliniowy",
                        "link": "https://skul.pl/fizyka/zadanie,4-6,a,pid,78588",
                        "tags": [
                            "Średnia harmoniczna",
                            "Średnia arytmetyczna"
                        ],
                        "problem": "Pierwszą połowę drogi z Krakowa do Krościenka bus przebywa z szybkością średnią $30\\text{ km/h}$, a drugą połowę z szybkością średnią $60\\text{ km/h}$. W drodze powrotnej przez pierwszą połowę czasu porusza się z szybkością średnią $80\\text{ km/h}$, a przez drugą połowę czasu z szybkością średnią $60\\text{ km/h}$.\n\nOblicz szybkości średnie busa na trasach:\na) z Krakowa do Krościenka,\nb) z Krościenka do Krakowa,\nc) z Krakowa do Krościenka i z powrotem.",
                        "solution": {
                            "intuition": "Dla równej drogi ($s_1 = s_2$) prędkość średnia to średnia harmoniczna: $v = \\frac{2v_1 v_2}{v_1 + v_2}$.\nDla równego czasu ($t_1 = t_2$) prędkość średnia to średnia arytmetyczna: $v = \\frac{v_1 + v_2}{2}$.",
                            "givens": "Tam: $s_1 = s_2 = \\frac{s}{2}$, $v_1 = 30\\text{ km/h}$, $v_2 = 60\\text{ km/h}$.\nZ powrotem: $t_1 = t_2 = \\frac{t_{pow}}{2}$, $u_1 = 80\\text{ km/h}$, $u_2 = 60\\text{ km/h}$.",
                            "steps": [
                                {
                                    "title": "a) Szybkość średnia Kraków -> Krościenko (równe drogi)",
                                    "content": "$$v_{tam} = \\frac{s}{\\frac{s/2}{v_1} + \\frac{s/2}{v_2}} = \\frac{2 v_1 v_2}{v_1 + v_2} = \\frac{2 \\cdot 30 \\cdot 60}{30 + 60} = \\frac{3600}{90} = 40\\text{ km/h}$$"
                                },
                                {
                                    "title": "b) Szybkość średnia Krościenko -> Kraków (równe czasy)",
                                    "content": "$$s_{pow} = u_1 \\frac{t}{2} + u_2 \\frac{t}{2} = \\frac{u_1 + u_2}{2} t \\implies v_{pow} = \\frac{s_{pow}}{t} = \\frac{u_1 + u_2}{2} = \\frac{80 + 60}{2} = 70\\text{ km/h}$$"
                                },
                                {
                                    "title": "c) Szybkość średnia na całej trasie w obie strony",
                                    "content": "Droga całkowita: $2s$. Czas tam: $t_{tam} = \\frac{s}{40}$. Czas powrotu: $t_{pow} = \\frac{s}{70}$.\n$$v_{calk} = \\frac{2s}{t_{tam} + t_{pow}} = \\frac{2s}{\\frac{s}{40} + \\frac{s}{70}} = \\frac{2}{\\frac{1}{40} + \\frac{1}{70}} = \\frac{2 \\cdot 2800}{70 + 40} = \\frac{5600}{110} \\approx 50{,}91\\text{ km/h}$$"
                                }
                            ],
                            "numerical": "$$v_{tam} = 40\\text{ km/h}, \\quad v_{pow} = 70\\text{ km/h}, \\quad v_{calk} = \\frac{5600}{110} \\approx 50{,}9\\text{ km/h}$$",
                            "answer": "a) $40\\text{ km/h}$, b) $70\\text{ km/h}$, c) $\\approx 50{,}9\\text{ km/h}$.",
                            "trap": "Nie wolno liczyć w podpunkcie c) średniej arytmetycznej z $40$ i $70$! Drogi tam i z powrotem są równe, więc znów stosujemy średnią harmoniczną z prędkości $40$ i $70$."
                        }
                    },
                    {
                        "id": "k-zad-4",
                        "number": 4,
                        "title": "Zadanie 4. Motocyklista na 2/3 i 1/3 drogi",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Ruch jednostajny prostoliniowy",
                        "link": "https://skul.pl/fizyka/zadanie,4-7,a,pid,78591",
                        "tags": [
                            "Prędkość średnia",
                            "Stosunek czasów"
                        ],
                        "problem": "Motocyklista $\\frac{2}{3}$ drogi przejechał z szybkością $10\\text{ m/s}$, a pozostałą $\\frac{1}{3}$ drogi z szybkością $20\\text{ m/s}$.\n\na) Oblicz szybkość średnią motocyklisty na całej drodze.\nb) Rozstrzygnij, czy na podstawie tych danych można obliczyć czas przejazdu motocyklisty dla każdej części drogi. Czy można obliczyć stosunek tych czasów?",
                        "solution": {
                            "intuition": "Nawet jeśli nie znamy całkowitej długości drogi $s$, możemy policzyć prędkość średnią oraz stosunek czasów, ponieważ litera $s$ skraca się w ułamku!",
                            "givens": "$s_1 = \\frac{2}{3} s$, $v_1 = 10\\text{ m/s}$, $s_2 = \\frac{1}{3} s$, $v_2 = 20\\text{ m/s}$.",
                            "steps": [
                                {
                                    "title": "a) Szybkość średnia na całej drodze",
                                    "content": "$$t_1 = \\frac{s_1}{v_1} = \\frac{2s/3}{10} = \\frac{2s}{30} = \\frac{s}{15}$$\n$$t_2 = \\frac{s_2}{v_2} = \\frac{s/3}{20} = \\frac{s}{60}$$\n$$t_{calk} = \\frac{s}{15} + \\frac{s}{60} = \\frac{4s + s}{60} = \\frac{5s}{60} = \\frac{s}{12}$$\n$$v_{sr} = \\frac{s}{t_{calk}} = \\frac{s}{s/12} = 12\\text{ m/s}$$"
                                },
                                {
                                    "title": "b) Rozstrzygnięcie o czasach i ich stosunku",
                                    "content": "Nie można obliczyć bezwzględnych czasów przejazdu $t_1$ i $t_2$, ponieważ nie znamy długości drogi $s$.\nMożna jednak bez problemu obliczyć stosunek tych czasów:\n$$\\frac{t_1}{t_2} = \\frac{\\frac{s}{15}}{\\frac{s}{60}} = \\frac{60}{15} = 4$$"
                                }
                            ],
                            "numerical": "$$v_{sr} = 12\\text{ m/s}, \\quad \\frac{t_1}{t_2} = 4$$",
                            "answer": "a) $v_{sr} = 12\\text{ m/s}$.\nb) Czasów bezwzględnych nie można obliczyć bez znajomości $s$. Stosunek czasów wynosi $\\frac{t_1}{t_2} = 4$.",
                            "trap": "Częste przeoczenie: próba wymyślania fikcyjnej drogi $s$. Zawsze zostaw $s$ jako zmienną i pokaż, że się skraca."
                        }
                    },
                    {
                        "id": "k-zad-5",
                        "number": 5,
                        "title": "Zadanie 5. Wykres współrzędnej prędkości biegacza",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Ruch jednostajny prostoliniowy",
                        "link": "https://skul.pl/fizyka/zadanie,4-9,a,pid,78593",
                        "tags": [
                            "Wykres v(t)",
                            "Pole pod wykresem",
                            "Droga a przemieszczenie"
                        ],
                        "problem": "Wykres przedstawia zależność współrzędnej prędkości $v_x$ od czasu pewnego biegacza, który biegnie po prostoliniowym odcinku toru przez $2\\text{ minuty}$ ($120\\text{ s}$):\n- $0 - 20\\text{ s}$: $v_x = 5\\text{ m/s}$\n- $20 - 30\\text{ s}$: $v_x = 8\\text{ m/s}$\n- $30 - 40\\text{ s}$: $v_x = 5\\text{ m/s}$\n- $40 - 60\\text{ s}$: $v_x = 6\\text{ m/s}$\n- $60 - 80\\text{ s}$: $v_x = 8\\text{ m/s}$\n- $80 - 100\\text{ s}$: $v_x = 4\\text{ m/s}$\n- $100 - 110\\text{ s}$: $v_x = 0\\text{ m/s}$\n- $110 - 120\\text{ s}$: $v_x = -4\\text{ m/s}$\n\n<div class=\"chart-container-svg\">\n<svg viewBox=\"0 0 520 220\" class=\"physics-chart-svg\">\n  <defs>\n    <pattern id=\"grid5\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.08)\" stroke-width=\"1\"/>\n    </pattern>\n  </defs>\n  <rect width=\"520\" height=\"220\" fill=\"rgba(0,0,0,0.2)\"/>\n  <rect width=\"520\" height=\"220\" fill=\"url(#grid5)\"/>\n  <!-- Osie -->\n  <line x1=\"40\" y1=\"150\" x2=\"500\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  <line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"210\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  <text x=\"505\" y=\"154\" fill=\"#94a3b8\" font-size=\"12\">t (s)</text>\n  <text x=\"15\" y=\"25\" fill=\"#94a3b8\" font-size=\"12\">vx (m/s)</text>\n  <!-- Skale -->\n  <text x=\"30\" y=\"154\" fill=\"#94a3b8\" font-size=\"10\">0</text>\n  <text x=\"25\" y=\"125\" fill=\"#94a3b8\" font-size=\"10\">2</text>\n  <text x=\"25\" y=\"100\" fill=\"#94a3b8\" font-size=\"10\">4</text>\n  <text x=\"25\" y=\"75\" fill=\"#94a3b8\" font-size=\"10\">6</text>\n  <text x=\"25\" y=\"50\" fill=\"#94a3b8\" font-size=\"10\">8</text>\n  <text x=\"20\" y=\"200\" fill=\"#94a3b8\" font-size=\"10\">-4</text>\n  <!-- Czasy -->\n  <text x=\"110\" y=\"166\" fill=\"#94a3b8\" font-size=\"10\">20</text>\n  <text x=\"180\" y=\"166\" fill=\"#94a3b8\" font-size=\"10\">40</text>\n  <text x=\"250\" y=\"166\" fill=\"#94a3b8\" font-size=\"10\">60</text>\n  <text x=\"320\" y=\"166\" fill=\"#94a3b8\" font-size=\"10\">80</text>\n  <text x=\"390\" y=\"166\" fill=\"#94a3b8\" font-size=\"10\">100</text>\n  <text x=\"460\" y=\"166\" fill=\"#94a3b8\" font-size=\"10\">120</text>\n  <!-- Wykres schodkowy czerwony -->\n  <path d=\"M 40 87 L 110 87 L 110 50 L 145 50 L 145 87 L 180 87 L 180 75 L 250 75 L 250 50 L 320 50 L 320 100 L 390 100 L 390 150 L 425 150 L 425 200 L 460 200\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n</svg>\n</div>\n\nNa podstawie wykresu:\na) oblicz drogę, jaką przebył biegacz,\nb) opisz, jak wygląda wykres drogi w zależności od czasu,\nc) oblicz szybkość średnią biegacza,\nd) oblicz wartość prędkości średniej biegacza.",
                        "solution": {
                            "intuition": "Pamiętaj o kluczowej różnicy:\n- DROGA $s$ to suma wartości bezwzględnych pól pod wykresem (zawsze rośnie, nawet gdy biegacz cofa się).\n- PRZEMIESZCZENIE $\\Delta x$ uwzględnia znak minus (cofanie się odejmuje przemieszczenie!).\n- Szybkość średnia = droga / czas, a prędkość średnia = przemieszczenie / czas.",
                            "givens": "Poszczególne odcinki czasu i prędkości odczytane z wykresu.",
                            "steps": [
                                {
                                    "title": "a) Obliczenie drogi (pola prostokątów)",
                                    "content": "$$s_1 = 5\\text{ m/s} \\cdot 20\\text{ s} = 100\\text{ m}$$\n$$s_2 = 8\\text{ m/s} \\cdot 10\\text{ s} = 80\\text{ m}$$\n$$s_3 = 5\\text{ m/s} \\cdot 10\\text{ s} = 50\\text{ m}$$\n$$s_4 = 6\\text{ m/s} \\cdot 20\\text{ s} = 120\\text{ m}$$\n$$s_5 = 8\\text{ m/s} \\cdot 20\\text{ s} = 160\\text{ m}$$\n$$s_6 = 4\\text{ m/s} \\cdot 20\\text{ s} = 80\\text{ m}$$\n$$s_7 = 0\\text{ m/s} \\cdot 10\\text{ s} = 0\\text{ m}$$\n$$s_8 = |-4\\text{ m/s}| \\cdot 10\\text{ s} = 40\\text{ m}$$\n$$s_{calk} = 100 + 80 + 50 + 120 + 160 + 80 + 0 + 40 = 730\\text{ m}$$"
                                },
                                {
                                    "title": "b) Wykres drogi od czasu $s(t)$",
                                    "content": "Wykres $s(t)$ to linia łamana, składająca się z odcinków prostych o różnych nachyleniach (współczynnik kierunkowy równy aktualnej wartości szybkości). Funkcja $s(t)$ jest niemalejąca."
                                },
                                {
                                    "title": "c) Szybkość średnia",
                                    "content": "$$v_{sr} = \\frac{s_{calk}}{t_{calk}} = \\frac{730\\text{ m}}{120\\text{ s}} \\approx 6{,}08\\text{ m/s}$$"
                                },
                                {
                                    "title": "d) Wartość prędkości średniej (wektorowej)",
                                    "content": "Przemieszczenie uwzględnia cofnięcie się:\n$$\\Delta x = 100 + 80 + 50 + 120 + 160 + 80 + 0 - 40 = 650\\text{ m}$$\n$$|v_{sr,wekt}| = \\frac{|\\Delta x|}{t_{calk}} = \\frac{650\\text{ m}}{120\\text{ s}} \\approx 5{,}42\\text{ m/s}$$"
                                }
                            ],
                            "numerical": "$$s = 730\\text{ m}, \\quad v_{sr} = 6{,}08\\text{ m/s}, \\quad |v_{sr,wekt}| = 5{,}42\\text{ m/s}$$",
                            "answer": "a) Droga wynosi $730\\text{ m}$.\nb) Wykres $s(t)$ to łamana rosnąca od $0$ do $730\\text{ m}$.\nc) Szybkość średnia wynosi $6{,}08\\text{ m/s}$.\nd) Wartość prędkości średniej wynosi $5{,}42\\text{ m/s}$.",
                            "trap": "Częsty błąd: odejmowanie drogi przy $v_x < 0$ w podpunkcie a. Droga nigdy nie maleje!"
                        }
                    },
                    {
                        "id": "k-zad-6",
                        "number": 6,
                        "title": "Zadanie 6. Spacer pani Matyldy po alejce",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Ruch jednostajny prostoliniowy",
                        "link": "https://skul.pl/fizyka/zadanie,4-10,a,pid,78597",
                        "tags": [
                            "Wykres v(t)",
                            "Interpretacja fizyczna"
                        ],
                        "problem": "Pani Matylda wyruszyła na półgodzinny spacer ($30\\text{ min}$) po prostej alejce parkowej. Zależność współrzędnej $v_x$ jej prędkości od czasu przedstawiono na wykresie:\n- $0 - 3\\text{ min}$: $v_x = 1\\text{ m/s}$\n- $3 - 12\\text{ min}$: $v_x = 0{,}5\\text{ m/s}$\n- $12 - 19\\text{ min}$: $v_x = 0\\text{ m/s}$ (spoczynek przy rzeźbie)\n- $19 - 29\\text{ min}$: $v_x = -1\\text{ m/s}$ (powrót)\n- $29 - 30\\text{ min}$: $v_x = 0\\text{ m/s}$\n\na) Odpowiedz na poniższe pytania:\n- jak długo pani Matylda podziwiała rzeźbę na końcu alejki?\n- jak długa była alejka?\n- po jakim czasie od chwili rozpoczęcia spaceru pani Matylda zaczęła wracać?\nb) Oblicz szybkość średnią spacerowiczki podczas całego spaceru oraz wartość jej prędkości średniej.",
                        "solution": {
                            "intuition": "Ujemna wartość prędkości oznacza ruch w przeciwną stronę (powrót). Prędkość równa zero to postój.",
                            "givens": "Czasy i prędkości odczytane z wykresu.",
                            "steps": [
                                {
                                    "title": "Odpowiedzi na pytania (część a)",
                                    "content": "1. Rzeźba była podziwiana od $12$ do $19\\text{ min}$, czyli przez $19 - 12 = 7\\text{ minut}$.\n2. Długość alejki to droga przebyta w tamtą stronę ($0$ do $12\\text{ min}$):\n$$s_1 = 1\\text{ m/s} \\cdot 3\\text{ min} \\cdot 60\\text{ s} = 180\\text{ m}$$\n$$s_2 = 0{,}5\\text{ m/s} \\cdot 9\\text{ min} \\cdot 60\\text{ s} = 270\\text{ m}$$\n$$d = s_1 + s_2 = 180\\text{ m} + 270\\text{ m} = 450\\text{ m}$$\n3. Pani Matylda zaczęła wracać w $19.\\text{ minucie}$ spaceru (gdy $v_x$ stało się ujemne)."
                                },
                                {
                                    "title": "Część b: Szybkość średnia i prędkość średnia",
                                    "content": "Droga powrotna:\n$$s_{pow} = |-1\\text{ m/s}| \\cdot 10\\text{ min} \\cdot 60\\text{ s} = 600\\text{ m}$$\nCałkowita droga: $s_{calk} = 450\\text{ m} + 600\\text{ m} = 1050\\text{ m}$.\nCałkowity czas: $t_{calk} = 30\\text{ min} = 1800\\text{ s}$.\n$$v_{sr} = \\frac{1050\\text{ m}}{1800\\text{ s}} \\approx 0{,}583\\text{ m/s}$$\nPrzemieszczenie końcowe:\n$$\\Delta x = 450\\text{ m} - 600\\text{ m} = -150\\text{ m}$$\n$$|v_{sr,wekt}| = \\frac{|-150\\text{ m}|}{1800\\text{ s}} = \\frac{150}{1800} \\approx 0{,}083\\text{ m/s}$$"
                                }
                            ],
                            "numerical": "$$t_{rzezba} = 7\\text{ min}, \\quad d = 450\\text{ m}, \\quad t_{start,pow} = 19\\text{ min}, \\quad v_{sr} \\approx 0{,}58\\text{ m/s}, \\quad |v_{sr,w}| \\approx 0{,}083\\text{ m/s}$$",
                            "answer": "a) Rzeźbę podziwiała przez $7\\text{ min}$; alejka miała $450\\text{ m}$; wracać zaczęła po $19\\text{ min}$.\nb) Szybkość średnia: $0{,}58\\text{ m/s}$; wartość prędkości średniej: $0{,}083\\text{ m/s}$.",
                            "trap": "Pamiętaj o przeliczeniu minut na sekundy przed mnożeniem przez prędkość w m/s!"
                        }
                    },
                    {
                        "id": "k-zad-7",
                        "number": 7,
                        "title": "Zadanie 7. Równania ruchu dwóch ciał",
                        "difficulty": 1,
                        "source": "Zbiór zadań • Ruch jednostajny prostoliniowy",
                        "link": "https://skul.pl/fizyka/zadanie,4-13,a,pid,78603",
                        "tags": [
                            "Równanie ruchu x(t)",
                            "Punkt przecięcia"
                        ],
                        "problem": "Ruch jednego ciała opisano równaniem $x_1(t) = 5 + 2{,}5t$, a drugiego ciała równaniem $x_2(t) = 35 - 5t$ (współczynniki liczbowe są podane w jednostkach SI: metry i sekundy).\n\nDla pierwszych pięciu sekund obu ruchów:\na) narysuj w jednym układzie współrzędnych wykresy zależności położenia od czasu $x(t)$,\nb) narysuj wykresy współrzędnej prędkości od czasu $v_x(t)$,\nc) zinterpretuj fizycznie punkt przecięcia się wykresów $x(t)$.",
                        "solution": {
                            "intuition": "Równanie $x(t) = x_0 + v t$ to linia prosta. Punkt przecięcia dwóch takich prostych to moment i miejsce spotkania obu ciał.",
                            "givens": "$x_{01} = 5\\text{ m}$, $v_1 = 2{,}5\\text{ m/s}$. $x_{02} = 35\\text{ m}$, $v_2 = -5\\text{ m/s}$.",
                            "steps": [
                                {
                                    "title": "a) Wykresy $x(t)$",
                                    "content": "Ciało 1 startuje z $x = 5\\text{ m}$, a po $5\\text{ s}$: $x_1(5) = 5 + 2{,}5 \\cdot 5 = 17{,}5\\text{ m}$.\nCiało 2 startuje z $x = 35\\text{ m}$, a po $5\\text{ s}$: $x_2(5) = 35 - 5 \\cdot 5 = 10\\text{ m}$."
                                },
                                {
                                    "title": "b) Wykresy $v_x(t)$",
                                    "content": "Prędkości są stałe w czasie:\n- dla ciała 1: pozioma prosta na wysokości $v_1 = 2{,}5\\text{ m/s}$,\n- dla ciała 2: pozioma prosta na wysokości $v_2 = -5\\text{ m/s}$."
                                },
                                {
                                    "title": "c) Wyznaczenie punktu przecięcia (spotkania)",
                                    "content": "$$x_1(t) = x_2(t) \\implies 5 + 2{,}5t = 35 - 5t$$\n$$7{,}5t = 30 \\implies t_s = 4\\text{ s}$$\n$$x_s = 5 + 2{,}5 \\cdot 4 = 15\\text{ m}$$\nPunkt przecięcia oznacza spotkanie ciał: po $4\\text{ sekundach}$ w punkcie o współrzędnej $15\\text{ metrów}$."
                                }
                            ],
                            "numerical": "$$t_s = 4\\text{ s}, \\quad x_s = 15\\text{ m}$$",
                            "answer": "c) Punkt przecięcia oznacza czas ($4\\text{ s}$) i miejsce ($15\\text{ m}$) spotkania obu ciał.",
                            "trap": "Znak minus przy prędkości drugiego ciała oznacza, że porusza się ono w stronę malejących współrzędnych osi $x$."
                        }
                    },
                    {
                        "id": "k-zad-8",
                        "number": 8,
                        "title": "Zadanie 8. Bieg Ali wzdłuż prostej i zawrócenie",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Ruch jednostajny prostoliniowy",
                        "link": "https://skul.pl/fizyka/zadanie,4-15,zid,81245",
                        "tags": [
                            "Równania etapowe",
                            "Zwrot wektora"
                        ],
                        "problem": "Przez pierwsze $4\\text{ minuty}$ ruchu Ala biegła wzdłuż prostej równoległej do osi $x$ zgodnie ze zwrotem tej osi i ze stałą szybkością $5\\text{ m/s}$. Przez kolejne $5\\text{ minut}$ biegła wzdłuż tej samej prostej ze stałą szybkością $6\\text{ m/s}$. Następnie zawróciła i przez kolejne $8\\text{ minut}$ biegła wzdłuż tej samej prostej z szybkością $3\\text{ m/s}$ w kierunku punktu, z którego wystartowała.\n\nNapisz równania $x(t)$ dla każdego etapu ruchu i narysuj wykres zależności położenia od czasu, jeżeli $x_0 = 0$.",
                        "solution": {
                            "intuition": "Równanie każdego kolejnego etapu musi jako położenie początkowe przyjąć punkt, w którym zakończył się etap poprzedni!",
                            "givens": "$t_1 = 4\\text{ min} = 240\\text{ s}$, $v_1 = 5\\text{ m/s}$.\n$t_2 = 5\\text{ min} = 300\\text{ s}$, $v_2 = 6\\text{ m/s}$.\n$t_3 = 8\\text{ min} = 480\\text{ s}$, $v_3 = -3\\text{ m/s}$.",
                            "steps": [
                                {
                                    "title": "Etap 1 ($0 \\le t \\le 240\\text{ s}$)",
                                    "content": "$$x_I(t) = 5t$$\nPołożenie na końcu etapu 1: $x(240) = 5 \\cdot 240 = 1200\\text{ m}$."
                                },
                                {
                                    "title": "Etap 2 ($240\\text{ s} < t \\le 540\\text{ s}$)",
                                    "content": "$$x_{II}(t) = 1200 + 6(t - 240) = 6t - 240$$\nPołożenie na końcu etapu 2: $x(540) = 1200 + 6 \\cdot 300 = 3000\\text{ m}$."
                                },
                                {
                                    "title": "Etap 3 ($540\\text{ s} < t \\le 1020\\text{ s}$)",
                                    "content": "Zawrócenie oznacza ujemną prędkość:\n$$x_{III}(t) = 3000 - 3(t - 540) = 4620 - 3t$$\nPołożenie końcowe: $x(1020) = 3000 - 3 \\cdot 480 = 3000 - 1440 = 1560\\text{ m}$."
                                }
                            ],
                            "numerical": "$$x_I(240) = 1200\\text{ m}, \\quad x_{II}(540) = 3000\\text{ m}, \\quad x_{III}(1020) = 1560\\text{ m}$$",
                            "answer": "Etap 1: $x(t) = 5t$. Etap 2: $x(t) = 6t - 240$. Etap 3: $x(t) = 4620 - 3t$ (czasy w sekundach).",
                            "trap": "Pamiętaj o przesunięciu czasu $(t - t_0)$ w kolejnych etapach, jeśli $t$ liczymy od chwili startu całego ruchu!"
                        }
                    },
                    {
                        "id": "k-zad-9",
                        "number": 9,
                        "title": "Zadanie 9. Pogoń orki za młodą foką",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Ruch jednostajny prostoliniowy",
                        "link": "https://skul.pl/fizyka/zadanie,4-16,a,pid,78608",
                        "tags": [
                            "Pościg",
                            "Ruch względny"
                        ],
                        "problem": "Młoda foka zauważyła orkę w odległości $50\\text{ m}$ za sobą, więc zaczęła uciekać z szybkością $43{,}2\\text{ km/h}$. Orka płynie w jej kierunku z szybkością $50{,}4\\text{ km/h}$.\n\na) Napisz równania ruchu foki i orki (przyjmij, że dla orki $x_0 = 0$).\nb) Oblicz czas, po którym orka dogoni fokę.\nc) Oblicz współrzędną miejsca spotkania zwierząt.",
                        "solution": {
                            "intuition": "Przelicz km/h na m/s (dzieląc przez $3{,}6$). Prędkość zbliżania się orki do foki to różnica ich prędkości: $v_{zb} = v_{orka} - v_{foka}$.",
                            "givens": "$v_f = 43{,}2\\text{ km/h} = \\frac{43{,}2}{3{,}6} = 12\\text{ m/s}$.\n$v_o = 50{,}4\\text{ km/h} = \\frac{50{,}4}{3{,}6} = 14\\text{ m/s}$.\n$x_{0o} = 0$, $x_{0f} = 50\\text{ m}$.",
                            "steps": [
                                {
                                    "title": "a) Równania ruchu zwierząt",
                                    "content": "$$x_o(t) = 14t$$\n$$x_f(t) = 50 + 12t$$"
                                },
                                {
                                    "title": "b) Czas dogonienia",
                                    "content": "Orka dogania fokę, gdy $x_o(t) = x_f(t)$:\n$$14t = 50 + 12t \\implies 2t = 50 \\implies t = 25\\text{ s}$$"
                                },
                                {
                                    "title": "c) Miejsce spotkania",
                                    "content": "$$x_s = 14 \\cdot 25 = 350\\text{ m}$$"
                                }
                            ],
                            "numerical": "$$t = 25\\text{ s}, \\quad x_s = 350\\text{ m}$$",
                            "answer": "a) $x_o(t) = 14t$, $x_f(t) = 50 + 12t$.\nb) Orka dogoni fokę po $25\\text{ s}$.\nc) Miejsce spotkania ma współrzędną $350\\text{ m}$ od miejsca startu orki.",
                            "trap": "Nie zapomnij o przeliczeniu jednostek km/h na m/s przed rozwiązaniem równania!"
                        }
                    },
                    {
                        "id": "k-zad-11",
                        "number": 11,
                        "title": "Zadanie 11. Zjazd sanek z górki",
                        "difficulty": 1,
                        "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                        "link": "https://skul.pl/fizyka/zadanie,5-1,zid,81250",
                        "tags": [
                            "Przyspieszenie",
                            "Prędkość końcowa"
                        ],
                        "problem": "Sanki zjechały z górki ruchem jednostajnie przyspieszonym ($v_0 = 0$) i przebyły w czasie $5\\text{ s}$ drogę $25\\text{ m}$.\n\nOblicz wartość prędkości sanek po $5\\text{ sekundach}$. Wynik podaj w km/h.",
                        "solution": {
                            "intuition": "Dla $v_0 = 0$ droga to $s = \\frac{at^2}{2}$, a prędkość to $v = at$. Stąd $s = \\frac{v t}{2} \\implies v = \\frac{2s}{t}$. Prędkość końcowa jest dokładnie dwa razy większa niż prędkość średnia!",
                            "givens": "$v_0 = 0$, $t = 5\\text{ s}$, $s = 25\\text{ m}$.",
                            "steps": [
                                {
                                    "title": "Wyprowadzenie prędkości końcowej",
                                    "content": "$$s = \\frac{a t^2}{2}, \\quad v = at \\implies s = \\frac{v t}{2}$$\n$$v = \\frac{2s}{t} = \\frac{2 \\cdot 25\\text{ m}}{5\\text{ s}} = 10\\text{ m/s}$$"
                                },
                                {
                                    "title": "Przeliczenie na km/h",
                                    "content": "$$v = 10 \\cdot 3{,}6\\text{ km/h} = 36\\text{ km/h}$$"
                                }
                            ],
                            "numerical": "$$v = \\frac{2 \\cdot 25}{5} \\cdot 3{,}6 = 36\\text{ km/h}$$",
                            "answer": "Wartość prędkości sanek po $5\\text{ s}$ wynosi $36\\text{ km/h}$.",
                            "trap": "Zwróć uwagę na wymóg podania wyniku w km/h, a nie w m/s!"
                        }
                    },
                    {
                        "id": "k-zad-12",
                        "number": 12,
                        "title": "Zadanie 12. Przyspieszanie samochodu ciężarowego",
                        "difficulty": 1,
                        "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                        "link": "https://skul.pl/fizyka/zadanie,5-4,zid,81253",
                        "tags": [
                            "Ruch przyspieszony",
                            "Droga"
                        ],
                        "problem": "Samochód ciężarowy porusza się ruchem jednostajnie przyspieszonym z przyspieszeniem o wartości $0{,}8\\text{ m/s}^2$. Prędkość początkowa samochodu wynosi zero ($v_0 = 0$).\n\nOblicz, po jakim czasie samochód osiągnie szybkość $64{,}8\\text{ km/h}$, a następnie oblicz drogę, którą przebędzie do czasu osiągnięcia tej szybkości.",
                        "solution": {
                            "intuition": "Najpierw zamień prędkość z km/h na m/s: $64{,}8 / 3{,}6 = 18\\text{ m/s}$. Następnie użyj $v = at$ oraz $s = \\frac{at^2}{2}$.",
                            "givens": "$a = 0{,}8\\text{ m/s}^2$, $v = 64{,}8\\text{ km/h} = 18\\text{ m/s}$, $v_0 = 0$.",
                            "steps": [
                                {
                                    "title": "Obliczenie czasu $t$",
                                    "content": "$$v = a t \\implies t = \\frac{v}{a} = \\frac{18\\text{ m/s}}{0{,}8\\text{ m/s}^2} = 22{,}5\\text{ s}$$"
                                },
                                {
                                    "title": "Obliczenie drogi $s$",
                                    "content": "$$s = \\frac{a t^2}{2} = \\frac{0{,}8 \\cdot (22{,}5)^2}{2} = 0{,}4 \\cdot 506{,}25 = 202{,}5\\text{ m}$$"
                                }
                            ],
                            "numerical": "$$t = 22{,}5\\text{ s}, \\quad s = 202{,}5\\text{ m}$$",
                            "answer": "Czas wynosi $22{,}5\\text{ s}$, a droga $202{,}5\\text{ m}$.",
                            "trap": "Błąd rachunkowy przy potęgowaniu $22{,}5^2$. Można też użyć wzoru $s = \\frac{v^2}{2a} = \\frac{18^2}{2 \\cdot 0{,}8} = \\frac{324}{1{,}6} = 202{,}5\\text{ m}$."
                        }
                    },
                    {
                        "id": "k-zad-13",
                        "number": 13,
                        "title": "Zadanie 13. Ostatnie dwie sekundy przyspieszania",
                        "difficulty": 3,
                        "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                        "link": "https://skul.pl/fizyka/zadanie,5-5,a,pid,78617",
                        "tags": [
                            "Droga w przedziale czasu",
                            "Wyprowadzenie"
                        ],
                        "problem": "Ruszający ze spoczynku ($v_0 = 0$) samochód przez $10\\text{ s}$ jechał ruchem jednostajnie przyspieszonym. W ostatnich dwóch sekundach przebył $45\\text{ m}$.\n\nOblicz:\na) wartość przyspieszenia samochodu,\nb) jego szybkość po $10\\text{ sekundach}$,\nc) drogę przebytą przez niego w całym tym czasie,\nd) drogi przebyte przez niego oddzielnie w dziewiątej i dziesiątej sekundzie.",
                        "solution": {
                            "intuition": "Droga przebyta w ostatnich 2 sekundach (od $t = 8\\text{ s}$ do $t = 10\\text{ s}$) to różnica dróg: $\\Delta s = s(10) - s(8)$.",
                            "givens": "$v_0 = 0$, $t_{calk} = 10\\text{ s}$, $\\Delta s_{8-10} = 45\\text{ m}$.",
                            "steps": [
                                {
                                    "title": "a) Wyznaczenie przyspieszenia $a$",
                                    "content": "$$\\Delta s = s(10) - s(8) = \\frac{a \\cdot 10^2}{2} - \\frac{a \\cdot 8^2}{2} = \\frac{a}{2} (100 - 64) = 18 a$$\n$$18 a = 45 \\implies a = \\frac{45}{18} = 2{,}5\\text{ m/s}^2$$"
                                },
                                {
                                    "title": "b) Szybkość po $10\\text{ sekundach}$",
                                    "content": "$$v(10) = a \\cdot 10 = 2{,}5 \\cdot 10 = 25\\text{ m/s} = 90\\text{ km/h}$$"
                                },
                                {
                                    "title": "c) Całkowita droga po $10\\text{ sekundach}$",
                                    "content": "$$s(10) = \\frac{a \\cdot 10^2}{2} = \\frac{2{,}5 \\cdot 100}{2} = 125\\text{ m}$$"
                                },
                                {
                                    "title": "d) Droga w 9. i 10. sekundzie",
                                    "content": "Droga w 9. sekundzie: $\\Delta s_9 = s(9) - s(8) = \\frac{a}{2}(81 - 64) = 1{,}25 \\cdot 17 = 21{,}25\\text{ m}$.\nDroga w 10. sekundzie: $\\Delta s_{10} = s(10) - s(9) = \\frac{a}{2}(100 - 81) = 1{,}25 \\cdot 19 = 23{,}75\\text{ m}$.\n(Zauważ: $21{,}25 + 23{,}75 = 45\\text{ m}$, zgadza się!)"
                                }
                            ],
                            "numerical": "$$a = 2{,}5\\text{ m/s}^2, \\quad v = 25\\text{ m/s}, \\quad s = 125\\text{ m}, \\quad \\Delta s_9 = 21{,}25\\text{ m}, \\quad \\Delta s_{10} = 23{,}75\\text{ m}$$",
                            "answer": "a) $a = 2{,}5\\text{ m/s}^2$, b) $v = 25\\text{ m/s}$, c) $s = 125\\text{ m}$, d) $\\Delta s_9 = 21{,}25\\text{ m}$, $\\Delta s_{10} = 23{,}75\\text{ m}$.",
                            "trap": "Droga w n-tej sekundzie to $s(n) - s(n-1)$, a nie $s(n)$!"
                        }
                    },
                    {
                        "id": "k-zad-14",
                        "number": 14,
                        "title": "Zadanie 14. Droga w czwartej sekundzie",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                        "link": "https://skul.pl/fizyka/zadanie,5-6,zid,81255",
                        "tags": [
                            "Droga w n-tej sekundzie",
                            "Prawo Galileusza"
                        ],
                        "problem": "W czwartej sekundzie ruchu motocyklista jadący ruchem jednostajnie przyspieszonym przebył drogę $8\\text{ m}$.\n\nOblicz wartość jego przyspieszenia, jeżeli $v_0 = 0$.",
                        "solution": {
                            "intuition": "Z prawa nieparzystych liczb Galileusza: drogi przebywane w kolejnych sekundach mają się do siebie jak $1 : 3 : 5 : 7 : 9...$ W czwartej sekundzie współczynnik wynosi $2 \\cdot 4 - 1 = 7$.",
                            "givens": "$v_0 = 0$, $n = 4$, $\\Delta s_4 = 8\\text{ m}$.",
                            "steps": [
                                {
                                    "title": "Wyprowadzenie wzoru na drogę w n-tej sekundzie",
                                    "content": "$$\\Delta s_n = s(n) - s(n-1) = \\frac{a n^2}{2} - \\frac{a (n-1)^2}{2} = \\frac{a}{2} (n^2 - n^2 + 2n - 1) = \\frac{a}{2}(2n - 1)$$"
                                },
                                {
                                    "title": "Obliczenie przyspieszenia $a$ dla $n = 4$",
                                    "content": "$$\\Delta s_4 = \\frac{a}{2}(2 \\cdot 4 - 1) = \\frac{7}{2} a = 3{,}5 a$$\n$$3{,}5 a = 8\\text{ m} \\implies a = \\frac{8}{3{,}5} = \\frac{16}{7} \\approx 2{,}29\\text{ m/s}^2$$"
                                }
                            ],
                            "numerical": "$$a = \\frac{16}{7}\\text{ m/s}^2 \\approx 2{,}29\\text{ m/s}^2$$",
                            "answer": "Przyspieszenie wynosi $\\frac{16}{7}\\text{ m/s}^2 \\approx 2{,}29\\text{ m/s}^2$.",
                            "trap": "Częsty błąd: podstawienie $t = 4\\text{ s}$ do wzoru $s = \\frac{at^2}{2}$ i przyrównanie do $8\\text{ m}$. To dałoby drogę za całe 4 sekundy, a nie W CZWARTEJ sekundzie!"
                        }
                    },
                    {
                        "id": "k-zad-15",
                        "number": 15,
                        "title": "Zadanie 15. Przyspieszenie z niezerową prędkością początkową",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                        "link": "https://skul.pl/fizyka/zadanie,5-8,zid,81257",
                        "tags": [
                            "Prędkość początkowa",
                            "Układ równań"
                        ],
                        "problem": "Ciało poruszające się ruchem jednostajnie przyspieszonym w czasie $10\\text{ sekund}$ przebyło drogę $175\\text{ m}$ i osiągnęło szybkość $90\\text{ km/h}$.\n\nOblicz wartość przyspieszenia ciała i jego szybkość początkową.",
                        "solution": {
                            "intuition": "Znamy czas, drogę i prędkość końcową ($90\\text{ km/h} = 25\\text{ m/s}$). Średnia prędkość wynosi $v_{sr} = \\frac{s}{t} = 17{,}5\\text{ m/s}$. Ponieważ $v_{sr} = \\frac{v_0 + v}{2}$, natychmiast możemy wyznaczyć $v_0$!",
                            "givens": "$t = 10\\text{ s}$, $s = 175\\text{ m}$, $v_k = 90\\text{ km/h} = 25\\text{ m/s}$.",
                            "steps": [
                                {
                                    "title": "Wyznaczenie prędkości początkowej $v_0$",
                                    "content": "$$v_{sr} = \\frac{v_0 + v_k}{2} = \\frac{s}{t}$$\n$$\\frac{v_0 + 25}{2} = \\frac{175}{10} = 17{,}5$$\n$$v_0 + 25 = 35 \\implies v_0 = 10\\text{ m/s} = 36\\text{ km/h}$$"
                                },
                                {
                                    "title": "Wyznaczenie przyspieszenia $a$",
                                    "content": "$$a = \\frac{v_k - v_0}{t} = \\frac{25 - 10}{10} = \\frac{15}{10} = 1{,}5\\text{ m/s}^2$$"
                                }
                            ],
                            "numerical": "$$v_0 = 10\\text{ m/s}, \\quad a = 1{,}5\\text{ m/s}^2$$",
                            "answer": "Prędkość początkowa wynosi $10\\text{ m/s}$ ($36\\text{ km/h}$), a przyspieszenie $1{,}5\\text{ m/s}^2$.",
                            "trap": "Nie zakładaj, że $v_0 = 0$, bo treść zadania tego nie mówi!"
                        }
                    },
                    {
                        "id": "k-zad-16",
                        "number": 16,
                        "title": "Zadanie 16. Hamowanie przed przeszkodą",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                        "link": "https://skul.pl/fizyka/zadanie,5-16,a,pid,78621",
                        "tags": [
                            "Ruch opóźniony",
                            "Droga hamowania"
                        ],
                        "problem": "Kierowca samochodu jadącego z szybkością $99\\text{ km/h}$ zauważył przeszkodę i rozpoczął nagłe hamowanie z opóźnieniem o wartości $5\\text{ m/s}^2$.\n\nOblicz:\na) w jakiej odległości znajdowała się przeszkoda, jeśli samochód uderzył w nią z szybkością $72\\text{ km/h}$,\nb) drogę hamowania i czas, po którym samochód zatrzymałby się, gdyby nie było przeszkody.",
                        "solution": {
                            "intuition": "Użyj wygodnego wzoru bez czasu: $v^2 = v_0^2 - 2as \\implies s = \\frac{v_0^2 - v^2}{2a}$. Pamiętaj o zamianie km/h na m/s!",
                            "givens": "$v_0 = 99\\text{ km/h} = 27{,}5\\text{ m/s}$, $a = 5\\text{ m/s}^2$, $v_1 = 72\\text{ km/h} = 20\\text{ m/s}$.",
                            "steps": [
                                {
                                    "title": "a) Odległość przeszkody $s_1$",
                                    "content": "$$s_1 = \\frac{v_0^2 - v_1^2}{2a} = \\frac{(27{,}5)^2 - 20^2}{2 \\cdot 5} = \\frac{756{,}25 - 400}{10} = \\frac{356{,}25}{10} = 35{,}625\\text{ m}$$"
                                },
                                {
                                    "title": "b) Całkowita droga hamowania i czas zatrzymania",
                                    "content": "Do pełnego zatrzymania ($v = 0$):\n$$t_{zatrz} = \\frac{v_0}{a} = \\frac{27{,}5}{5} = 5{,}5\\text{ s}$$\n$$s_{calk} = \\frac{v_0^2}{2a} = \\frac{756{,}25}{10} = 75{,}625\\text{ m}$$"
                                }
                            ],
                            "numerical": "$$s_1 \\approx 35{,}6\\text{ m}, \\quad t_{zatrz} = 5{,}5\\text{ s}, \\quad s_{calk} \\approx 75{,}6\\text{ m}$$",
                            "answer": "a) Przeszkoda znajdowała się w odległości ok. $35{,}6\\text{ m}$.\nb) Droga hamowania wynosi ok. $75{,}6\\text{ m}$, a czas $5{,}5\\text{ s}$.",
                            "trap": "Zwróć uwagę, że $99\\text{ km/h} / 3{,}6 = 27{,}5\\text{ m/s}$."
                        }
                    },
                    {
                        "id": "k-zad-17",
                        "number": 17,
                        "title": "Zadanie 17. Analiza wykresu v(t) pojazdu",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                        "link": "https://skul.pl/fizyka/zadanie,5-18,zid,81267",
                        "tags": [
                            "Wykres v(t)",
                            "Pole trapezu",
                            "Prędkość średnia"
                        ],
                        "problem": "Na wykresie przedstawiono zależność szybkości od czasu dla pewnego pojazdu:\n- $0$ do $1/3\\text{ min}$ ($20\\text{ s}$): przyspieszanie od $0$ do $54\\text{ km/h}$ ($15\\text{ m/s}$)\n- $1/3$ do $1\\text{ min}$ ($40\\text{ s}$): ruch jednostajny z $54\\text{ km/h}$\n- $1$ do $1\\frac{1}{6}\\text{ min}$ ($10\\text{ s}$): przyspieszanie od $54$ do $72\\text{ km/h}$ ($20\\text{ m/s}$)\n- $1\\frac{1}{6}$ do $3\\frac{1}{6}\\text{ min}$ ($120\\text{ s}$): ruch jednostajny z $72\\text{ km/h}$\n- $3\\frac{1}{6}$ do $5\\frac{1}{6}\\text{ min}$ ($120\\text{ s}$): hamowanie od $72\\text{ km/h}$ do $0$\n\nOblicz drogę przebytą przez pojazd podczas całego ruchu oraz szybkość średnią pojazdu.",
                        "solution": {
                            "intuition": "Drogę obliczamy jako sumę pól figur geometrycznych pod wykresem $v(t)$ (trójkąty, prostokąty, trapezy). Wszystkie prędkości przeliczamy na m/s, a czasy na sekundy.",
                            "givens": "$v_1 = 54\\text{ km/h} = 15\\text{ m/s}$, $v_2 = 72\\text{ km/h} = 20\\text{ m/s}$, całkowity czas $t = 5\\frac{1}{6}\\text{ min} = 310\\text{ s}$.",
                            "steps": [
                                {
                                    "title": "Obliczenie pól poszczególnych etapów",
                                    "content": "1. Trójkąt $0 - 20\\text{ s}$: $s_1 = \\frac{1}{2} \\cdot 20 \\cdot 15 = 150\\text{ m}$\n2. Prostokąt $20 - 60\\text{ s}$: $s_2 = 40 \\cdot 15 = 600\\text{ m}$\n3. Trapez $60 - 70\\text{ s}$: $s_3 = \\frac{15 + 20}{2} \\cdot 10 = 175\\text{ m}$\n4. Prostokąt $70 - 190\\text{ s}$: $s_4 = 120 \\cdot 20 = 2400\\text{ m}$\n5. Trójkąt $190 - 310\\text{ s}$: $s_5 = \\frac{1}{2} \\cdot 120 \\cdot 20 = 1200\\text{ m}$"
                                },
                                {
                                    "title": "Całkowita droga i szybkość średnia",
                                    "content": "$$s_{calk} = 150 + 600 + 175 + 2400 + 1200 = 4525\\text{ m}$$\n$$v_{sr} = \\frac{s_{calk}}{t_{calk}} = \\frac{4525\\text{ m}}{310\\text{ s}} \\approx 14{,}6\\text{ m/s} \\approx 52{,}55\\text{ km/h}$$"
                                }
                            ],
                            "numerical": "$$s_{calk} = 4525\\text{ m}, \\quad v_{sr} \\approx 14{,}6\\text{ m/s} = 52{,}55\\text{ km/h}$$",
                            "answer": "Droga wynosi $4525\\text{ m}$ ($4{,}525\\text{ km}$), a szybkość średnia ok. $52{,}6\\text{ km/h}$.",
                            "trap": "Uważaj na jednostki czasu w minutach na osi poziomej: $5\\frac{1}{6}\\text{ min} = 5 \\cdot 60 + 10 = 310\\text{ s}$."
                        }
                    },
                    {
                        "id": "k-zad-18",
                        "number": 18,
                        "title": "Zadanie 18. Dwa ciała na wykresie vx(t)",
                        "difficulty": 3,
                        "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                        "link": "https://skul.pl/fizyka/zadanie,5-19,a,pid,78623",
                        "tags": [
                            "Dwa ciała",
                            "Wykres v(t)",
                            "Przyspieszenie"
                        ],
                        "problem": "Dwa ciała poruszają się równolegle do osi $x$. Wykresy przedstawiają zależność współrzędnej prędkości od czasu dla każdego z tych ciał ($0 - 36\\text{ s}$):\n- **Ciało I**: $0-6\\text{ s}$ hamuje od $6$ do $-6\\text{ m/s}$; $6-18\\text{ s}$ przyspiesza od $-6$ do $+12\\text{ m/s}$; $18-36\\text{ s}$ przyspiesza od $12$ do $18\\text{ m/s}$.\n- **Ciało II**: $0-6\\text{ s}$ przyspiesza od $0$ do $12\\text{ m/s}$; $6-12\\text{ s}$ ruch jednostajny $12\\text{ m/s}$; $12-18\\text{ s}$ hamuje do $0$; $18-24\\text{ s}$ przyspiesza do $18\\text{ m/s}$; $24-36\\text{ s}$ hamuje od $18$ do $-6\\text{ m/s}$.\n\nNa podstawie wykresu oblicz dla każdego ciała:\na) szybkość średnią,\nb) wartość prędkości średniej,\nc) narysuj wykresy zależności współrzędnej przyspieszenia od czasu.",
                        "solution": {
                            "intuition": "Szybkość średnia to droga (suma wartości bezwzględnych pól) podzielona przez $36\\text{ s}$. Prędkość średnia to przemieszczenie (pola nad osią minus pola pod osią) podzielone przez $36\\text{ s}$.",
                            "givens": "Wykres $v_x(t)$ dla ciał I i II w przedziale $t \\in [0, 36\\text{ s}]$.",
                            "steps": [
                                {
                                    "title": "Analiza ciała I",
                                    "content": "Przyspieszenia: $a_1 = \\frac{-6 - 6}{6} = -2\\text{ m/s}^2$. Pole trójkąta pod osią ($3$ do $6\\text{ s}$) wynosi $9\\text{ m}$, pole trójkąta pod osią ($6$ do $12\\text{ s}$) wynosi $36\\text{ m}$.\nCałkowita droga: $s_I = 9 + 9 + 36 + 36 + 270 = 360\\text{ m}$.\nPrzemieszczenie: $\\Delta x_I = -45 + 315 = 270\\text{ m}$.\n$$v_{sr,I} = \\frac{360}{36} = 10\\text{ m/s}, \\quad v_{sr,wekt,I} = \\frac{270}{36} = 7{,}5\\text{ m/s}$$"
                                },
                                {
                                    "title": "Analiza ciała II",
                                    "content": "Droga: $s_{II} = 36 + 72 + 36 + 54 + 81 + 9 = 288\\text{ m}$.\nPrzemieszczenie: $\\Delta x_{II} = 279 - 9 = 270\\text{ m}$.\n$$v_{sr,II} = \\frac{288}{36} = 8\\text{ m/s}, \\quad v_{sr,wekt,II} = \\frac{270}{36} = 7{,}5\\text{ m/s}$$"
                                }
                            ],
                            "numerical": "$$v_{sr,I} = 10\\text{ m/s}, \\quad v_{wekt,I} = 7{,}5\\text{ m/s}, \\quad v_{sr,II} = 8\\text{ m/s}, \\quad v_{wekt,II} = 7{,}5\\text{ m/s}$$",
                            "answer": "Dla ciała I: szybkość średnia $10\\text{ m/s}$, prędkość średnia $7{,}5\\text{ m/s}$.\nDla ciała II: szybkość średnia $8\\text{ m/s}$, prędkość średnia $7{,}5\\text{ m/s}$.",
                            "trap": "Zwróć uwagę na punkty, w których wykres przecina oś czasu – tam zmienia się znak prędkości!"
                        }
                    },
                    {
                        "id": "k-zad-19",
                        "number": 19,
                        "title": "Zadanie 19. Wykres ax(t) i rekonstrukcja ruchu",
                        "difficulty": 3,
                        "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                        "link": "https://skul.pl/fizyka/zadanie,5-20,a,pid,78626",
                        "tags": [
                            "Wykres a(t)",
                            "Rekonstrukcja v(t)"
                        ],
                        "problem": "Wykres przedstawia zależność współrzędnej przyspieszenia od czasu dla pewnego ciała:\n- $0 - 3\\text{ s}$: $a_x = 0$\n- $3 - 9\\text{ s}$: $a_x = 1\\text{ m/s}^2$\n- $9 - 12\\text{ s}$: $a_x = 2\\text{ m/s}^2$\n- $12 - 15\\text{ s}$: $a_x = 1\\text{ m/s}^2$\n- $15 - 21\\text{ s}$: $a_x = 0$\n- $21 - 24\\text{ s}$: $a_x = 1\\text{ m/s}^2$\n\nNa podstawie wykresu:\na) narysuj wykres $v_x(t)$, przy założeniu, że $v_0 = 0$,\nb) oblicz drogę przebytą przez ciało od końca dwunastej sekundy do końca piętnastej sekundy,\nc) oblicz drogę przebytą w szóstej sekundzie ruchu,\nd) oblicz szybkość średnią ciała w przedziale czasu $3-24\\text{ s}$.",
                        "solution": {
                            "intuition": "Pole pod wykresem $a_x(t)$ to zmiana prędkości $\\Delta v$. Całkując (sumując pola), otrzymujemy prędkość w każdej chwili.",
                            "givens": "$v_0 = 0$. Wartości $a_x$ w kolejnych przedziałach czasu.",
                            "steps": [
                                {
                                    "title": "a) Wyznaczenie prędkości w węzłach czasu",
                                    "content": "$$v(3) = 0$$\n$$v(9) = 0 + 1 \\cdot 6 = 6\\text{ m/s}$$\n$$v(12) = 6 + 2 \\cdot 3 = 12\\text{ m/s}$$\n$$v(15) = 12 + 1 \\cdot 3 = 15\\text{ m/s}$$\n$$v(21) = 15\\text{ m/s}$$\n$$v(24) = 15 + 1 \\cdot 3 = 18\\text{ m/s}$$"
                                },
                                {
                                    "title": "b) Droga w przedziale $12 - 15\\text{ s}$",
                                    "content": "Pole trapezu pod wykresem $v(t)$:\n$$s_{12-15} = \\frac{v(12) + v(15)}{2} \\cdot 3 = \\frac{12 + 15}{2} \\cdot 3 = 13{,}5 \\cdot 3 = 40{,}5\\text{ m}$$"
                                },
                                {
                                    "title": "c) Droga w szóstej sekundzie ruchu ($t \\in [5, 6\\text{ s}]$)",
                                    "content": "W przedziale $3-9\\text{ s}$ ruch jest jednostajnie przyspieszony z $a = 1\\text{ m/s}^2$, $v(3) = 0$.\nCzas trwania od początku przyspieszania do $t=5\\text{ s}$ wynosi $\\tau_1 = 2\\text{ s}$, a do $t=6\\text{ s}$ wynosi $\\tau_2 = 3\\text{ s}$.\n$$\\Delta s_6 = s(\\tau_2) - s(\\tau_1) = \\frac{1 \\cdot 3^2}{2} - \\frac{1 \\cdot 2^2}{2} = \\frac{9 - 4}{2} = 2{,}5\\text{ m}$$"
                                },
                                {
                                    "title": "d) Szybkość średnia w przedziale $3 - 24\\text{ s}$",
                                    "content": "Suma pól pod wykresem $v(t)$ od $3$ do $24\\text{ s}$:\n$s_{3-9} = \\frac{1}{2} \\cdot 6 \\cdot 6 = 18\\text{ m}$\n$s_{9-12} = \\frac{6 + 12}{2} \\cdot 3 = 27\\text{ m}$\n$s_{12-15} = 40{,}5\\text{ m}$\n$s_{15-21} = 15 \\cdot 6 = 90\\text{ m}$\n$s_{21-24} = \\frac{15 + 18}{2} \\cdot 3 = 49{,}5\\text{ m}$\n$s_{calk} = 18 + 27 + 40{,}5 + 90 + 49{,}5 = 225\\text{ m}$.\nCzas trwania: $\\Delta t = 24 - 3 = 21\\text{ s}$.\n$$v_{sr} = \\frac{225\\text{ m}}{21\\text{ s}} \\approx 10{,}71\\text{ m/s}$$"
                                }
                            ],
                            "numerical": "$$s_{12-15} = 40{,}5\\text{ m}, \\quad \\Delta s_6 = 2{,}5\\text{ m}, \\quad v_{sr} \\approx 10{,}71\\text{ m/s}$$",
                            "answer": "b) $40{,}5\\text{ m}$, c) $2{,}5\\text{ m}$, d) $10{,}71\\text{ m/s}$.",
                            "trap": "Szósta sekunda ruchu trwa od $t = 5\\text{ s}$ do $t = 6\\text{ s}$. Ponieważ przyspieszanie zaczęło się w $t = 3\\text{ s}$, prędkość w $t=5$ wynosi $2\\text{ m/s}$, a w $t=6$ wynosi $3\\text{ m/s}$."
                        }
                    },
                    {
                        "id": "k-zad-20",
                        "number": 20,
                        "title": "Zadanie 20. Funkcja drogi s(t) = 2(t + t^2)",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                        "link": "https://skul.pl/fizyka/zadanie,6-4,a,pid,78640",
                        "tags": [
                            "Funkcja drogi",
                            "Odczyt parametrów"
                        ],
                        "problem": "Ciało porusza się ruchem prostoliniowym. Jego droga jest następującą funkcją czasu:\n$$s(t) = 2(t + t^2) = 2t + 2t^2$$\nW tym wzorze współczynniki liczbowe są wyrażone w układzie SI.\n\na) Odczytaj z podanego wzoru wartości prędkości początkowej i przyspieszenia ciała.\nb) Oblicz drogę przebytą między początkiem trzeciej a końcem piątej sekundy ruchu oraz szybkość średnią ciała w tym czasie.",
                        "solution": {
                            "intuition": "Porównaj ogólny wzór na drogę w ruchu jednostajnie przyspieszonym $s(t) = v_0 t + \\frac{at^2}{2}$ ze wzorem podanym w zadaniu $s(t) = 2t + 2t^2$.",
                            "givens": "$s(t) = 2t + 2t^2$.",
                            "steps": [
                                {
                                    "title": "a) Odczyt parametrów ruchu",
                                    "content": "Porównujemy współczynniki przy odpowiednich potęgach czasu:\n- przy $t$: $v_0 = 2\\text{ m/s}$\n- przy $t^2$: $\\frac{a}{2} = 2 \\implies a = 4\\text{ m/s}^2$"
                                },
                                {
                                    "title": "b) Droga między początkiem 3. a końcem 5. sekundy",
                                    "content": "Początek 3. sekundy to chwila $t_1 = 2\\text{ s}$.\nKoniec 5. sekundy to chwila $t_2 = 5\\text{ s}$.\n$$s(2) = 2(2) + 2(2^2) = 4 + 8 = 12\\text{ m}$$\n$$s(5) = 2(5) + 2(5^2) = 10 + 50 = 60\\text{ m}$$\n$$\\Delta s = s(5) - s(2) = 60 - 12 = 48\\text{ m}$$\nCzas trwania: $\\Delta t = 5 - 2 = 3\\text{ s}$.\nSzybkość średnia:\n$$v_{sr} = \\frac{\\Delta s}{\\Delta t} = \\frac{48\\text{ m}}{3\\text{ s}} = 16\\text{ m/s}$$"
                                }
                            ],
                            "numerical": "$$v_0 = 2\\text{ m/s}, \\quad a = 4\\text{ m/s}^2, \\quad \\Delta s = 48\\text{ m}, \\quad v_{sr} = 16\\text{ m/s}$$",
                            "answer": "a) $v_0 = 2\\text{ m/s}$, $a = 4\\text{ m/s}^2$.\nb) Droga wynosi $48\\text{ m}$, a szybkość średnia $16\\text{ m/s}$.",
                            "trap": "Początek 3. sekundy to $t = 2\\text{ s}$, a nie $t = 3\\text{ s}$!"
                        }
                    },
                    {
                        "id": "k-zad-21",
                        "number": 21,
                        "title": "Zadanie 21. Równanie położenia x(t) = 2 + 6t + 1,5t^2",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                        "link": "https://skul.pl/fizyka/zadanie,6-5,a,pid,78642",
                        "tags": [
                            "Równanie x(t)",
                            "Jednostki współczynników"
                        ],
                        "problem": "Ciało porusza się wzdłuż osi $x$. W jego równaniu ruchu:\n$$x(t) = 2 + 6t + 1{,}5t^2$$\ndroga jest wyrażona w metrach, a czas w sekundach.\n\na) Dopisz odpowiednie jednostki przy wszystkich współczynnikach liczbowych.\nb) Opisz słowami ten ruch.\nc) Oblicz szybkość średnią ciała podczas czterech pierwszych sekund ruchu.\nd) Na podstawie informacji, że w ruchu jednostajnie zmiennym $v_{sr}$ jest średnią arytmetyczną z szybkości początkowej i końcowej, wyznacz szybkość średnią w tym przedziale czasu i porównaj z wynikiem otrzymanym w punkcie c.",
                        "solution": {
                            "intuition": "Każdy składnik sumy musi mieć jednostkę metra [m]. Porównaj z $x(t) = x_0 + v_0 t + \\frac{at^2}{2}$.",
                            "givens": "$x(t) = 2 + 6t + 1{,}5t^2$.",
                            "steps": [
                                {
                                    "title": "a) Jednostki współczynników",
                                    "content": "- $x_0 = 2\\text{ m}$\n- $v_0 = 6\\text{ m/s}$\n- $\\frac{a}{2} = 1{,}5\\text{ m/s}^2 \\implies a = 3\\text{ m/s}^2$"
                                },
                                {
                                    "title": "b) Opis słowny ruchu",
                                    "content": "Jest to ruch prostoliniowy, jednostajnie przyspieszony, odbywający się w dodatnim kierunku osi $x$, z położenia początkowego $x_0 = 2\\text{ m}$, z prędkością początkową $v_0 = 6\\text{ m/s}$ i stałym przyspieszeniem $a = 3\\text{ m/s}^2$."
                                },
                                {
                                    "title": "c) Szybkość średnia z definicji",
                                    "content": "$$x(0) = 2\\text{ m}, \\quad x(4) = 2 + 6(4) + 1{,}5(16) = 2 + 24 + 24 = 50\\text{ m}$$\nPrzebyta droga: $s = x(4) - x(0) = 50 - 2 = 48\\text{ m}$.\n$$v_{sr} = \\frac{48\\text{ m}}{4\\text{ s}} = 12\\text{ m/s}$$"
                                },
                                {
                                    "title": "d) Szybkość średnia jako średnia arytmetyczna",
                                    "content": "Prędkość początkowa: $v(0) = 6\\text{ m/s}$.\nPrędkość końcowa: $v(4) = v_0 + at = 6 + 3 \\cdot 4 = 18\\text{ m/s}$.\n$$v_{sr} = \\frac{v_0 + v(4)}{2} = \\frac{6 + 18}{2} = \\frac{24}{2} = 12\\text{ m/s}$$\nWyniki w punktach c i d są identyczne!"
                                }
                            ],
                            "numerical": "$$v_{sr} = 12\\text{ m/s}$$",
                            "answer": "a) $2\\text{ m}, 6\\text{ m/s}, 1{,}5\\text{ m/s}^2$.\nb) Ruch prostoliniowy jednostajnie przyspieszony.\nc) $v_{sr} = 12\\text{ m/s}$.\nd) $v_{sr} = 12\\text{ m/s}$ (wyniki są zgodne).",
                            "trap": "Współczynnik przy $t^2$ to $\\frac{a}{2}$, więc samo przyspieszenie to $2 \\cdot 1{,}5 = 3\\text{ m/s}^2$."
                        }
                    },
                    {
                        "id": "k-zad-22a",
                        "number": 22,
                        "title": "Zadanie 22. Rowerzysta i motocyklista naprzeciw siebie",
                        "difficulty": 3,
                        "source": "Zbiór zadań • Ruch jednostajnie zmienny",
                        "link": "https://skul.pl/fizyka/zadanie,6-10,a,pid,78658",
                        "tags": [
                            "Spotkanie ciał",
                            "Równanie kwadratowe"
                        ],
                        "problem": "Rowerzysta i motocyklista jadą prostoliniowym odcinkiem szosy równoległej do osi $x$ z prędkościami o przeciwnych zwrotach.\nW chwili $t_0 = 0$ rowerzysta poruszający się ruchem jednostajnym z szybkością $3\\text{ m/s}$ mija punkt $A$ ($x_A = 0$), a motocyklista w tej samej chwili mija punkt $B$ ($x_B = 300\\text{ m}$) z szybkością początkową $2\\text{ m/s}$ i jedzie w stronę rowerzysty ruchem jednostajnie przyspieszonym z przyspieszeniem o wartości $1\\text{ m/s}^2$.\n\na) Napisz równania: $x_R(t), x_M(t), v_R(t), v_M(t)$.\nb) Oblicz czas, po którym motocyklista minie rowerzystę, i współrzędną miejsca, w którym to nastąpi.\nc) Oblicz współrzędną prędkości motocyklisty względem rowerzysty w chwili mijania.",
                        "solution": {
                            "intuition": "Rowerzysta jedzie w prawo ($+3\\text{ m/s}$). Motocyklista jedzie w lewo z punktu $300\\text{ m}$ i przyspiesza w lewo, więc jego prędkość początkowa i przyspieszenie mają znaki ujemne.",
                            "givens": "$x_{0R} = 0$, $v_R = 3\\text{ m/s}$. $x_{0M} = 300\\text{ m}$, $v_{0M} = -2\\text{ m/s}$, $a_M = -1\\text{ m/s}^2$.",
                            "steps": [
                                {
                                    "title": "a) Równania ruchu i prędkości",
                                    "content": "$$x_R(t) = 3t, \\quad v_R(t) = 3$$\n$$x_M(t) = 300 - 2t - \\frac{1}{2} t^2, \\quad v_M(t) = -2 - t$$"
                                },
                                {
                                    "title": "b) Chwila i miejsce mijania",
                                    "content": "$$x_R(t) = x_M(t) \\implies 3t = 300 - 2t - 0{,}5t^2$$\n$$0{,}5t^2 + 5t - 300 = 0 \\implies t^2 + 10t - 600 = 0$$\n$$\\Delta = 100 - 4(1)(-600) = 2500, \\quad \\sqrt{\\Delta} = 50$$\n$$t = \\frac{-10 + 50}{2} = 20\\text{ s} \\quad (t > 0)$$\nMiejsce mijania:\n$$x_s = x_R(20) = 3 \\cdot 20 = 60\\text{ m}$$"
                                },
                                {
                                    "title": "c) Prędkość względna w chwili mijania",
                                    "content": "W chwili $t = 20\\text{ s}$:\n$$v_M(20) = -2 - 20 = -22\\text{ m/s}$$\nPrędkość motocyklisty względem rowerzysty:\n$$v_{M/R} = v_M - v_R = -22 - 3 = -25\\text{ m/s}$$\nWartość prędkości względnej wynosi $25\\text{ m/s}$."
                                }
                            ],
                            "numerical": "$$t = 20\\text{ s}, \\quad x = 60\\text{ m}, \\quad v_{M/R} = -25\\text{ m/s}$$",
                            "answer": "a) $x_R = 3t, x_M = 300 - 2t - 0{,}5t^2$.\nb) Miną się po $20\\text{ s}$ w punkcie $x = 60\\text{ m}$.\nc) Współrzędna prędkości względnej wynosi $-25\\text{ m/s}$ (wartość $25\\text{ m/s}$).",
                            "trap": "Pamiętaj o ujemnych znakach przy prędkości i przyspieszeniu motocyklisty!"
                        }
                    },
                    {
                        "id": "k-zad-22b",
                        "number": 22,
                        "title": "Zadanie 22. Wycieczka rowerowa Kasi pod wiatr i z wiatrem",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Względność ruchu",
                        "link": "https://skul.pl/fizyka/zadanie,6-10,a,pid,78658",
                        "tags": [
                            "Wiatr",
                            "Ruch względny"
                        ],
                        "problem": "Kasia podczas wycieczki rowerowej przebywa trasę $10\\text{ km}$ w czasie $45\\text{ minut}$, jeśli jedzie pod wiatr, natomiast jeśli jedzie zgodnie z wiatrem, ten sam odcinek przebywa w czasie $25\\text{ minut}$.\n\nOblicz:\na) szybkość Kasi w obu przypadkach,\nb) szybkość Kasi przy bezwietrznej pogodzie,\nc) szybkość wiatru.\n(Dla uproszczenia zakładamy, że rowerzystka jedzie w obu przypadkach z taką samą szybkością względem powietrza).",
                        "solution": {
                            "intuition": "Jadąc z wiatrem, prędkości się dodają ($v_K + v_w$), a pod wiatr odejmują ($v_K - v_w$).",
                            "givens": "$s = 10\\text{ km}$, $t_1 = 45\\text{ min} = \\frac{3}{4}\\text{ h}$, $t_2 = 25\\text{ min} = \\frac{5}{12}\\text{ h}$.",
                            "steps": [
                                {
                                    "title": "a) Szybkości w obu przypadkach",
                                    "content": "$$v_1 = \\frac{s}{t_1} = \\frac{10\\text{ km}}{3/4\\text{ h}} = \\frac{40}{3} \\approx 13{,}33\\text{ km/h} \\quad (\\text{pod wiatr})$$\n$$v_2 = \\frac{s}{t_2} = \\frac{10\\text{ km}}{5/12\\text{ h}} = 24\\text{ km/h} \\quad (\\text{z wiatrem})$$"
                                },
                                {
                                    "title": "b) i c) Szybkość Kasi $v_K$ i szybkość wiatru $v_w$",
                                    "content": "$$v_K - v_w = \\frac{40}{3}$$\n$$v_K + v_w = 24$$\nDodając stronami:\n$$2 v_K = 24 + \\frac{40}{3} = \\frac{112}{3} \\implies v_K = \\frac{56}{3} \\approx 18{,}67\\text{ km/h}$$\nOdejmując stronami:\n$$2 v_w = 24 - \\frac{40}{3} = \\frac{32}{3} \\implies v_w = \\frac{16}{3} \\approx 5{,}33\\text{ km/h}$$"
                                }
                            ],
                            "numerical": "$$v_1 = 13{,}3\\text{ km/h}, \\quad v_2 = 24\\text{ km/h}, \\quad v_K \\approx 18{,}67\\text{ km/h}, \\quad v_w \\approx 5{,}33\\text{ km/h}$$",
                            "answer": "a) Pod wiatr $13{,}3\\text{ km/h}$, z wiatrem $24\\text{ km/h}$.\nb) Szybkość Kasi bez wiatru: $18{,}67\\text{ km/h}$.\nc) Szybkość wiatru: $5{,}33\\text{ km/h}$.",
                            "trap": "Uważaj na ułamki godzin: $25\\text{ min} = 25/60 = 5/12\\text{ h}$."
                        }
                    },
                    {
                        "id": "k-zad-23",
                        "number": 23,
                        "title": "Zadanie 23. Wyprzedzanie TIR-a przez motocyklistę",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Względność ruchu",
                        "link": "https://skul.pl/fizyka/zadanie,7-9,zid,81291",
                        "tags": [
                            "Wyprzedzanie",
                            "Długość pojazdu"
                        ],
                        "problem": "Po dwóch pasach autostrady poruszają się równolegle do siebie: TIR o długości $L = 10\\text{ m}$ jadący z szybkością $90\\text{ km/h}$ i motocyklista jadący z szybkością $108\\text{ km/h}$.\n\nOblicz czas wyprzedzania TIR-a przez motocyklistę oraz drogi przebyte przez oba pojazdy w tym czasie. Przyjmij, że rozmiary motocyklisty można pominąć.",
                        "solution": {
                            "intuition": "W układzie odniesienia TIR-a motocyklista porusza się z prędkością względną $\\Delta v = v_m - v_{TIR}$ i musi pokonać drogę równą długości TIR-a ($L = 10\\text{ m}$).",
                            "givens": "$L = 10\\text{ m}$, $v_{TIR} = 90\\text{ km/h} = 25\\text{ m/s}$, $v_m = 108\\text{ km/h} = 30\\text{ m/s}$.",
                            "steps": [
                                {
                                    "title": "Czas wyprzedzania",
                                    "content": "$$\\Delta v = v_m - v_{TIR} = 30\\text{ m/s} - 25\\text{ m/s} = 5\\text{ m/s}$$\n$$t = \\frac{L}{\\Delta v} = \\frac{10\\text{ m}}{5\\text{ m/s}} = 2\\text{ s}$$"
                                },
                                {
                                    "title": "Drogi przebyte względem jezdni w czasie $t = 2\\text{ s}$",
                                    "content": "$$s_{TIR} = v_{TIR} \\cdot t = 25\\text{ m/s} \\cdot 2\\text{ s} = 50\\text{ m}$$\n$$s_m = v_m \\cdot t = 30\\text{ m/s} \\cdot 2\\text{ s} = 60\\text{ m}$$\n(Różnica dróg wynosi $60 - 50 = 10\\text{ m} = L$ – zgadza się!)"
                                }
                            ],
                            "numerical": "$$t = 2\\text{ s}, \\quad s_{TIR} = 50\\text{ m}, \\quad s_m = 60\\text{ m}$$",
                            "answer": "Czas wyprzedzania wynosi $2\\text{ sekundy}$. Droga TIR-a wynosi $50\\text{ m}$, a motocyklisty $60\\text{ m}$.",
                            "trap": "Zawsze przelicz km/h na m/s przed dzieleniem przez metry!"
                        }
                    },
                    {
                        "id": "k-zad-24",
                        "number": 24,
                        "title": "Zadanie 24. Mijanie się motocykla i samochodu",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Względność ruchu",
                        "link": "https://skul.pl/fizyka/zadanie,7-11,a,pid,78683",
                        "tags": [
                            "Prędkość względna",
                            "Pojazdy z naprzeciwka"
                        ],
                        "problem": "Po przeciwległych pasach ruchu jadą motocykl i samochód. W zapisanych poniżej równaniach ruchu tych pojazdów wszystkie współczynniki liczbowe wyrażone są w odpowiednich jednostkach SI:\n$$x_S(t) = 5t - 0{,}1t^2$$\n$$x_M(t) = 100 - 0{,}1t^2$$\n\na) Opisz słowami ruch każdego z tych pojazdów.\nb) Oblicz, po jakim czasie pojazdy się miną.\nc) Zapisz funkcje $v_S(t)$ i $v_M(t)$.\nd) Oblicz wartość prędkości względnej pojazdów w chwili mijania.",
                        "solution": {
                            "intuition": "Pojazdy miną się, gdy ich współrzędne będą równe ($x_S = x_M$). Zauważ, że człon $-0{,}1t^2$ występuje w obu równaniach, więc upraszcza się przy porównaniu!",
                            "givens": "$x_S(t) = 5t - 0{,}1t^2$, $x_M(t) = 100 - 0{,}1t^2$.",
                            "steps": [
                                {
                                    "title": "a) Opis ruchów",
                                    "content": "- Samochód: startuje z $x_0 = 0$, prędkość początkowa $v_0 = 5\\text{ m/s}$, ruch opóźniony z $a = -0{,}2\\text{ m/s}^2$.\n- Motocykl: startuje z $x_0 = 100\\text{ m}$, prędkość początkowa $0$, przyspiesza w stronę ujemnych $x$ z $a = -0{,}2\\text{ m/s}^2$."
                                },
                                {
                                    "title": "b) Czas mijania",
                                    "content": "$$x_S(t) = x_M(t) \\implies 5t - 0{,}1t^2 = 100 - 0{,}1t^2$$\n$$5t = 100 \\implies t = 20\\text{ s}$$"
                                },
                                {
                                    "title": "c) Funkcje prędkości",
                                    "content": "$$v_S(t) = 5 - 0{,}2t$$\n$$v_M(t) = -0{,}2t$$"
                                },
                                {
                                    "title": "d) Prędkość względna w chwili $t = 20\\text{ s}$",
                                    "content": "$$v_S(20) = 5 - 0{,}2(20) = 5 - 4 = 1\\text{ m/s}$$\n$$v_M(20) = -0{,}2(20) = -4\\text{ m/s}$$\n$$v_{wzgl} = |v_S - v_M| = |1 - (-4)| = 5\\text{ m/s}$$"
                                }
                            ],
                            "numerical": "$$t = 20\\text{ s}, \\quad v_S(20) = 1\\text{ m/s}, \\quad v_M(20) = -4\\text{ m/s}, \\quad v_{wzgl} = 5\\text{ m/s}$$",
                            "answer": "b) Pojazdy miną się po $20\\text{ s}$.\nc) $v_S(t) = 5 - 0{,}2t$, $v_M(t) = -0{,}2t$.\nd) Wartość prędkości względnej wynosi $5\\text{ m/s}$.",
                            "trap": "Pojazdy poruszają się w przeciwne strony, więc ich prędkości względne sumują się co do wartości bezwzględnej!"
                        }
                    },
                    {
                        "id": "k-zad-25",
                        "number": 25,
                        "title": "Zadanie 25. Dwa ciała wyrzucone w pionie",
                        "difficulty": 3,
                        "source": "Zbiór zadań • Względność ruchu",
                        "link": "https://skul.pl/fizyka/zadanie,7-12,a,pid,78687",
                        "tags": [
                            "Rzut pionowy",
                            "Spadek swobodny",
                            "Niezależność od g"
                        ],
                        "problem": "Pierwsze ciało wyrzucono z powierzchni Ziemi pionowo w górę z prędkością o wartości $v_0 = 20\\text{ m/s}$. Równocześnie z maksymalnej wysokości $H$, na którą to ciało się wzniesie, zaczęło spadać swobodnie drugie ciało. Rozmiary obu ciał pomijamy. Przyjmij $g = 10\\text{ m/s}^2$.\n\na) Dla obu ciał napisz równania: $y_1(t), y_2(t), v_{1y}(t), v_{2y}(t)$ (oś $y$ zwrócona w górę, $y=0$ na Ziemi).\nb) Oblicz czas, po którym miną się te ciała.\nc) Oblicz wysokość, na której to nastąpi.\nd) Oblicz wartość prędkości względnej ciała 1 względem ciała 2 oraz podaj jej kierunek i zwrot w chwili mijania.\ne) Zbadaj, czy obliczona prędkość względna zależy od czasu.",
                        "solution": {
                            "intuition": "Obydwa ciała poruszają się w tym samym polu grawitacyjnym z dokładnie takim samym przyspieszeniem $g$. Oznacza to, że ich przyspieszenie względne wynosi ZERO! Względem siebie ciała poruszają się ruchem jednostajnym ze stałą prędkością $v_0$!",
                            "givens": "$v_0 = 20\\text{ m/s}$, $g = 10\\text{ m/s}^2$.",
                            "steps": [
                                {
                                    "title": "a) Maksymalna wysokość i równania ruchu",
                                    "content": "$$H = \\frac{v_0^2}{2g} = \\frac{400}{20} = 20\\text{ m}$$\n$$y_1(t) = 20t - 5t^2, \\quad v_{1y}(t) = 20 - 10t$$\n$$y_2(t) = 20 - 5t^2, \\quad v_{2y}(t) = -10t$$"
                                },
                                {
                                    "title": "b) Czas mijania",
                                    "content": "$$y_1(t) = y_2(t) \\implies 20t - 5t^2 = 20 - 5t^2$$\n$$20t = 20 \\implies t = 1\\text{ s}$$"
                                },
                                {
                                    "title": "c) Wysokość mijania",
                                    "content": "$$h = y_1(1) = 20(1) - 5(1)^2 = 15\\text{ m}$$"
                                },
                                {
                                    "title": "d) i e) Prędkość względna",
                                    "content": "$$v_{wzgl} = v_{1y}(t) - v_{2y}(t) = (20 - 10t) - (-10t) = 20\\text{ m/s}$$\nPrędkość względna jest STAŁA w czasie i wynosi dokładnie $20\\text{ m/s}$ skierowana pionowo w górę!"
                                }
                            ],
                            "numerical": "$$H = 20\\text{ m}, \\quad t = 1\\text{ s}, \\quad h = 15\\text{ m}, \\quad v_{wzgl} = 20\\text{ m/s}$$",
                            "answer": "b) Ciała miną się po $1\\text{ s}$.\nc) Na wysokości $15\\text{ m}$.\nd) Wartość prędkości względnej to $20\\text{ m/s}$, zwrot w górę.\ne) Prędkość względna NIE ZALEŻY od czasu.",
                            "trap": "Częsty błąd: próba liczenia przyspieszenia względnego. Ponieważ na oba ciała działa to samo $g$, $a_{wzgl} = g - g = 0$."
                        }
                    },
                    {
                        "id": "k-zad-27",
                        "number": 27,
                        "title": "Zadanie 27. Pocisk z wieży o równaniach x(t)=40t i y(t)=5t^2",
                        "difficulty": 1,
                        "source": "Zbiór zadań • Rzut poziomy",
                        "link": "https://skul.pl/fizyka/zadanie,3-2-1,a,pid,693668",
                        "tags": [
                            "Równania parametryczne",
                            "Składowe prędkości"
                        ],
                        "problem": "Z wieży wystrzelono poziomo pocisk, którego współrzędne $x$ i $y$ są opisane równaniami:\n$$x(t) = 40t \\quad \\text{oraz} \\quad y(t) = 5t^2$$\nPrzyjmij $g = 10\\text{ m/s}^2$.\n\na) Oblicz, po jakim czasie od wystrzelenia pocisku jego prędkość pozioma $v_x$ będzie równa prędkości w kierunku pionowym $v_y$.\nb) Oblicz współrzędną $x$ i współrzędną $y$ pocisku po tym czasie.",
                        "solution": {
                            "intuition": "W poziomie ruch jest jednostajny ze stałą prędkością $v_x = 40\\text{ m/s}$. W pionie ruch jest jednostajnie przyspieszony z przyspieszeniem $g = 10\\text{ m/s}^2$ ($v_y = gt = 10t$).",
                            "givens": "$x(t) = 40t \\implies v_x = 40\\text{ m/s}$, $y(t) = 5t^2 \\implies v_y = 10t$.",
                            "steps": [
                                {
                                    "title": "a) Warunek $v_x = v_y$",
                                    "content": "$$40 = 10t \\implies t = 4\\text{ s}$$"
                                },
                                {
                                    "title": "b) Współrzędne po $4\\text{ s}$",
                                    "content": "$$x(4) = 40 \\cdot 4 = 160\\text{ m}$$\n$$y(4) = 5 \\cdot 4^2 = 5 \\cdot 16 = 80\\text{ m}$$"
                                }
                            ],
                            "numerical": "$$t = 4\\text{ s}, \\quad x = 160\\text{ m}, \\quad y = 80\\text{ m}$$",
                            "answer": "a) Po $4\\text{ sekundach}$.\nb) $x = 160\\text{ m}$, $y = 80\\text{ m}$.",
                            "trap": "Uważaj: prędkość pionowa to $v_y = 10t$, a nie $5t$ (pochodna z $5t^2$ to $10t$)."
                        }
                    },
                    {
                        "id": "k-zad-28",
                        "number": 28,
                        "title": "Zadanie 28. Piłka rzucona pod kątem 45 stopni do podłogi",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Rzut poziomy",
                        "link": "https://skul.pl/fizyka/zadanie,3-2-2,zid,610119",
                        "tags": [
                            "Kąt uderzenia",
                            "Zasada zachowania energii"
                        ],
                        "problem": "Dziecko wyrzuciło piłkę znad głowy, z wysokości $H = 1{,}25\\text{ m}$, w kierunku poziomym. Piłka uderzyła o podłogę pod kątem $\\alpha = 45^\\circ$ do poziomu. Przyjmij $g = 10\\text{ m/s}^2$.\n\nOblicz prędkość początkową piłki $v_0$ oraz jej prędkość $v_k$ w chwili uderzenia o podłogę.",
                        "solution": {
                            "intuition": "Skoro kąt uderzenia to $45^\\circ$, to składowa pionowa $v_y$ w chwili uderzenia musi być DOKŁADNIE RÓWNA składowej poziomej $v_x$ (bo $\\tan 45^\\circ = 1$!).",
                            "givens": "$H = 1{,}25\\text{ m}$, $\\alpha = 45^\\circ$, $g = 10\\text{ m/s}^2$.",
                            "steps": [
                                {
                                    "title": "Prędkość pionowa przy uderzeniu $v_y$",
                                    "content": "Ze spadku swobodnego z wysokości $H$:\n$$v_y = \\sqrt{2gH} = \\sqrt{2 \\cdot 10 \\cdot 1{,}25} = \\sqrt{25} = 5\\text{ m/s}$$"
                                },
                                {
                                    "title": "Wyznaczenie $v_0$ z kąta uderzenia",
                                    "content": "$$\\tan 45^\\circ = \\frac{v_y}{v_0} = 1 \\implies v_0 = v_y = 5\\text{ m/s}$$"
                                },
                                {
                                    "title": "Prędkość wypadkowa $v_k$",
                                    "content": "$$v_k = \\sqrt{v_0^2 + v_y^2} = \\sqrt{5^2 + 5^2} = 5\\sqrt{2} \\approx 7{,}07\\text{ m/s}$$"
                                }
                            ],
                            "numerical": "$$v_0 = 5\\text{ m/s}, \\quad v_k = 5\\sqrt{2} \\approx 7{,}07\\text{ m/s}$$",
                            "answer": "Prędkość początkowa wynosi $5\\text{ m/s}$, a prędkość w chwili uderzenia $5\\sqrt{2}\\text{ m/s} \\approx 7{,}07\\text{ m/s}$.",
                            "trap": "Kąt do poziomu oznacza $\\tan\\alpha = v_y / v_x$."
                        }
                    },
                    {
                        "id": "k-zad-29",
                        "number": 29,
                        "title": "Zadanie 29. Kamień o prędkości 1,5 raza większej",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Rzut poziomy",
                        "link": "https://skul.pl/fizyka/zadanie,3-2-3,zid,610120",
                        "tags": [
                            "Wektor prędkości",
                            "Twierdzenie Pitagorasa"
                        ],
                        "problem": "Kamień rzucony poziomo z wysokiego brzegu po czasie $t = 0{,}5\\text{ s}$ osiągnął prędkość $n = 1{,}5$ raza większą od prędkości początkowej ($v(t) = 1{,}5 v_0$). Przyjmij $g = 10\\text{ m/s}^2$.\n\nZ jaką prędkością początkową $v_0$ rzucono kamień?",
                        "solution": {
                            "intuition": "Wypadkowa prędkość to $v = \\sqrt{v_0^2 + v_y^2}$, gdzie $v_y = gt$. Podstawiamy $v = 1{,}5 v_0$ i rozwiązujemy równanie.",
                            "givens": "$t = 0{,}5\\text{ s}$, $g = 10\\text{ m/s}^2$, $v = 1{,}5 v_0$.",
                            "steps": [
                                {
                                    "title": "Obliczenie składowej pionowej $v_y$",
                                    "content": "$$v_y = g t = 10 \\cdot 0{,}5 = 5\\text{ m/s}$$"
                                },
                                {
                                    "title": "Równanie pitagorejskie dla wektora prędkości",
                                    "content": "$$v^2 = v_0^2 + v_y^2$$\n$$(1{,}5 v_0)^2 = v_0^2 + 5^2$$\n$$2{,}25 v_0^2 = v_0^2 + 25$$\n$$1{,}25 v_0^2 = 25$$\n$$v_0^2 = \\frac{25}{1{,}25} = 20 \\implies v_0 = \\sqrt{20} = 2\\sqrt{5} \\approx 4{,}47\\text{ m/s}$$"
                                }
                            ],
                            "numerical": "$$v_0 = \\sqrt{20} \\approx 4{,}47\\text{ m/s}$$",
                            "answer": "Kamień rzucono z prędkością początkową $2\\sqrt{5}\\text{ m/s} \\approx 4{,}47\\text{ m/s}$.",
                            "trap": "Pamiętaj o podniesieniu całego wyrażenia $(1{,}5 v_0)$ do kwadratu, co daje $2{,}25 v_0^2$."
                        }
                    },
                    {
                        "id": "k-zad-30",
                        "number": 30,
                        "title": "Zadanie 30. Kulka rzucona w stronę ściany",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Rzut poziomy",
                        "link": "https://skul.pl/fizyka/zadanie,3-2-4,a,pid,693670",
                        "tags": [
                            "Uderzenie w ścianę",
                            "Tor paraboli"
                        ],
                        "problem": "Chłopiec wyrzucił kulkę znad głowy z wysokości $H = 1{,}8\\text{ m}$ nad ziemią. Przy prędkości początkowej $v_0 = 6\\text{ m/s}$ skierowanej poziomo kulka uderzyła w ścianę znajdującą się w odległości $l = 3\\text{ m}$ od chłopca. Przyjmij $g = 10\\text{ m/s}^2$.\n\na) Oblicz czas lotu kulki do chwili uderzenia w ścianę oraz wartość jej prędkości $v$ w chwili uderzenia.\nb) Na jakiej wysokości od powierzchni ziemi kulka uderzyła w ścianę?\nc) Z jaką prędkością chłopiec powinien wyrzucić kulkę poziomo, aby nie uderzyła ona bezpośrednio w ścianę (upadła na ziemię przed ścianą)?",
                        "solution": {
                            "intuition": "Czas dotarcia do ściany zależy wyłącznie od składowej poziomej ($t = l / v_0$). Wysokość uderzenia to wysokość początkowa minus spadek swobodny w tym czasie.",
                            "givens": "$H = 1{,}8\\text{ m}$, $v_0 = 6\\text{ m/s}$, $l = 3\\text{ m}$, $g = 10\\text{ m/s}^2$.",
                            "steps": [
                                {
                                    "title": "a) Czas lotu i prędkość uderzenia",
                                    "content": "$$t = \\frac{l}{v_0} = \\frac{3\\text{ m}}{6\\text{ m/s}} = 0{,}5\\text{ s}$$\n$$v_y = gt = 10 \\cdot 0{,}5 = 5\\text{ m/s}$$\n$$v = \\sqrt{v_0^2 + v_y^2} = \\sqrt{6^2 + 5^2} = \\sqrt{36 + 25} = \\sqrt{61} \\approx 7{,}81\\text{ m/s}$$"
                                },
                                {
                                    "title": "b) Wysokość uderzenia nad ziemią",
                                    "content": "Spadek w pionie:\n$$h_{opad} = \\frac{g t^2}{2} = \\frac{10 \\cdot 0{,}5^2}{2} = 1{,}25\\text{ m}$$\nWysokość nad ziemią:\n$$h = H - h_{opad} = 1{,}8 - 1{,}25 = 0{,}55\\text{ m}$$"
                                },
                                {
                                    "title": "c) Warunek upadku przed ścianą",
                                    "content": "Całkowity czas spadku na ziemię z wysokości $H$:\n$$t_{calk} = \\sqrt{\\frac{2H}{g}} = \\sqrt{\\frac{2 \\cdot 1{,}8}{10}} = \\sqrt{0{,}36} = 0{,}6\\text{ s}$$\nAby zasięg $Z = v_0 t_{calk} < l$ ($Z < 3\\text{ m}$):\n$$v_0 < \\frac{l}{t_{calk}} = \\frac{3}{0{,}6} = 5\\text{ m/s}$$"
                                }
                            ],
                            "numerical": "$$t = 0{,}5\\text{ s}, \\quad v = \\sqrt{61} \\approx 7{,}81\\text{ m/s}, \\quad h = 0{,}55\\text{ m}, \\quad v_0 < 5\\text{ m/s}$$",
                            "answer": "a) $t = 0{,}5\\text{ s}$, $v \\approx 7{,}81\\text{ m/s}$.\nb) $h = 0{,}55\\text{ m}$ ($55\\text{ cm}$).\nc) Prędkość początkowa musi być mniejsza niż $5\\text{ m/s}$.",
                            "trap": "Pamiętaj: wysokość uderzenia to $H - \\frac{gt^2}{2}$, a nie sama wartość $\\frac{gt^2}{2}$."
                        }
                    },
                    {
                        "id": "k-zad-31",
                        "number": 31,
                        "title": "Zadanie 31. Strzelanie do tarczy z pistoletu pneumatycznego",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Rzut poziomy",
                        "link": "https://skul.pl/fizyka/zadanie,3-2-5,zid,610122",
                        "tags": [
                            "Balistyka",
                            "Opadanie pocisku"
                        ],
                        "problem": "Podczas strzelania do tarczy umieszczonej w odległości $l = 10\\text{ m}$ od lufy pistoletu pneumatycznego pocisk trafił w odległości $d = 1\\text{ cm}$ poniżej środka tarczy. Przyjmij $g = 9{,}81\\text{ m/s}^2$ (lub $10\\text{ m/s}^2$).\n\nOblicz prędkość pocisku $v_0$ w chwili opuszczania lufy. Załóż, że lufa pistoletu w tym momencie była ustawiona poziomo, a strzelec celował w środek tarczy.",
                        "solution": {
                            "intuition": "Pocisk opadł o $d = 1\\text{ cm} = 0{,}01\\text{ m}$ pod wpływem grawitacji. Z tego opadu wyznaczymy czas lotu $t$, a stąd prędkość początkową $v_0 = l / t$.",
                            "givens": "$l = 10\\text{ m}$, $d = 1\\text{ cm} = 0{,}01\\text{ m}$, $g = 9{,}81\\text{ m/s}^2$.",
                            "steps": [
                                {
                                    "title": "Czas lotu pocisku",
                                    "content": "$$d = \\frac{g t^2}{2} \\implies t = \\sqrt{\\frac{2d}{g}} = \\sqrt{\\frac{2 \\cdot 0{,}01}{9{,}81}} = \\sqrt{\\frac{0{,}02}{9{,}81}} \\approx 0{,}04515\\text{ s}$$"
                                },
                                {
                                    "title": "Prędkość wylotowa pocisku $v_0$",
                                    "content": "$$v_0 = \\frac{l}{t} = \\frac{10\\text{ m}}{0{,}04515\\text{ s}} \\approx 221{,}5\\text{ m/s}$$"
                                }
                            ],
                            "numerical": "$$t \\approx 0{,}045\\text{ s}, \\quad v_0 \\approx 221{,}5\\text{ m/s} \\quad (\\text{dla } g=10: v_0 \\approx 223{,}6\\text{ m/s})$$",
                            "answer": "Prędkość pocisku wynosi ok. $221{,}5\\text{ m/s}$ ($223{,}6\\text{ m/s}$ dla $g=10$).",
                            "trap": "Pamiętaj o zamianie centymetrów na metry: $1\\text{ cm} = 0{,}01\\text{ m}$."
                        }
                    },
                    {
                        "id": "k-zad-32",
                        "number": 32,
                        "title": "Zadanie 32. Karabinek sportowy i deska sosnowa",
                        "difficulty": 1,
                        "source": "Zbiór zadań • Rzut poziomy",
                        "link": "https://skul.pl/fizyka/zadanie,3-2-6,a,pid,693673",
                        "tags": [
                            "Czas lotu",
                            "Opadanie pocisku"
                        ],
                        "problem": "Z karabinka sportowego strzelano w kierunku deski sosnowej. Sprawdzano, czy pocisk przebije deskę ustawioną w odległości $l = 60\\text{ m}$ od lufy. Pocisk został wystrzelony z prędkością $v_0 = 350\\text{ m/s}$ w kierunku poziomym. Przyjmij $g = 9{,}81\\text{ m/s}^2$.\n\na) Ile czasu trwał lot pocisku?\nb) O ile milimetrów opadł pocisk w trakcie lotu?",
                        "solution": {
                            "intuition": "Czas lotu w poziomie: $t = l / v_0$. Opadanie w pionie: $h = \\frac{gt^2}{2}$. Wynik zamieniamy na milimetry ($1\\text{ m} = 1000\\text{ mm}$).",
                            "givens": "$l = 60\\text{ m}$, $v_0 = 350\\text{ m/s}$, $g = 9{,}81\\text{ m/s}^2$.",
                            "steps": [
                                {
                                    "title": "a) Czas lotu pocisku",
                                    "content": "$$t = \\frac{l}{v_0} = \\frac{60\\text{ m}}{350\\text{ m/s}} = \\frac{6}{35} \\approx 0{,}1714\\text{ s}$$"
                                },
                                {
                                    "title": "b) Opadnięcie pocisku w milimetrach",
                                    "content": "$$h = \\frac{g t^2}{2} = \\frac{9{,}81 \\cdot (0{,}1714)^2}{2} \\approx \\frac{9{,}81 \\cdot 0{,}02939}{2} \\approx 0{,}1441\\text{ m} = 144{,}1\\text{ mm}$$"
                                }
                            ],
                            "numerical": "$$t \\approx 0{,}171\\text{ s}, \\quad h \\approx 144\\text{ mm}$$",
                            "answer": "a) Lot trwał ok. $0{,}171\\text{ s}$.\nb) Pocisk opadł o ok. $144\\text{ mm}$ ($14{,}4\\text{ cm}$).",
                            "trap": "Zwróć uwagę na wymóg podania wyniku w milimetrach [mm]."
                        }
                    },
                    {
                        "id": "k-zad-33",
                        "number": 33,
                        "title": "Zadanie 33. Zasięg rzutu na Ziemi, Księżycu i Marsie",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Rzut poziomy",
                        "link": "https://skul.pl/fizyka/zadanie,3-2-7,zid,610124",
                        "tags": [
                            "Grawitacja na innych ciałach",
                            "Zasięg rzutu"
                        ],
                        "problem": "Kamień rzucony poziomo na Ziemi z pewnej wysokości z prędkością $v_0$ uzyskał zasięg $Z = 4\\text{ m}$.\nPrzyspieszenia grawitacyjne na Ziemi, Księżycu i Marsie wynoszą odpowiednio:\n$g_Z = 9{,}81\\text{ m/s}^2$, $g_K = 1{,}62\\text{ m/s}^2$, $g_M = 3{,}69\\text{ m/s}^2$.\n\nOblicz, ile razy większy niż na Ziemi byłby zasięg takiego rzutu na Księżycu, a ile razy na Marsie (przy tej samej wysokości $H$ i prędkości $v_0$).",
                        "solution": {
                            "intuition": "Czas spadku to $t = \\sqrt{\\frac{2H}{g}}$, zatem zasięg to $Z = v_0 \\sqrt{\\frac{2H}{g}}$. Zasięg jest odwrotnie proporcjonalny do pierwiastka z przyspieszenia grawitacyjnego: $Z \\sim \\frac{1}{\\sqrt{g}}$.",
                            "givens": "$Z_Z = 4\\text{ m}$, $g_Z = 9{,}81\\text{ m/s}^2$, $g_K = 1{,}62\\text{ m/s}^2$, $g_M = 3{,}69\\text{ m/s}^2$.",
                            "steps": [
                                {
                                    "title": "Wyprowadzenie stosunku zasięgów",
                                    "content": "$$\\frac{Z_K}{Z_Z} = \\frac{v_0 \\sqrt{2H/g_K}}{v_0 \\sqrt{2H/g_Z}} = \\sqrt{\\frac{g_Z}{g_K}}$$\n$$\\frac{Z_M}{Z_Z} = \\sqrt{\\frac{g_Z}{g_M}}$$"
                                },
                                {
                                    "title": "Obliczenia liczbowe",
                                    "content": "Na Księżycu:\n$$\\frac{Z_K}{Z_Z} = \\sqrt{\\frac{9{,}81}{1{,}62}} = \\sqrt{6{,}0556} \\approx 2{,}46$$\nNa Marsie:\n$$\\frac{Z_M}{Z_Z} = \\sqrt{\\frac{9{,}81}{3{,}69}} = \\sqrt{2{,}6585} \\approx 1{,}63$$"
                                }
                            ],
                            "numerical": "$$\\frac{Z_K}{Z_Z} \\approx 2{,}46, \\quad \\frac{Z_M}{Z_Z} \\approx 1{,}63$$",
                            "answer": "Na Księżycu zasięg byłby ok. $2{,}46$ razy większy (ok. $9{,}84\\text{ m}$), a na Marsie ok. $1{,}63$ razy większy (ok. $6{,}52\\text{ m}$).",
                            "trap": "Nie dziel przyspieszeń bez pierwiastka! Zasięg zależy od $\\sqrt{g}$, a nie od samego $g$."
                        }
                    },
                    {
                        "id": "k-zad-34",
                        "number": 34,
                        "title": "Zadanie 34. Kamień wystrzelony z wieży H = 45 m",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Rzut poziomy",
                        "link": "https://skul.pl/fizyka/zadanie,3-2-8,zid,610125",
                        "tags": [
                            "Wektor prędkości",
                            "Kąt uderzenia"
                        ],
                        "problem": "Z wieży o wysokości $H = 45\\text{ m}$ wystrzelono z procy kamień z prędkością $v_0 = 40\\text{ m/s}$ w kierunku poziomym. Przyjmij $g = 10\\text{ m/s}^2$.\n\nOblicz jego prędkość w chwili uderzenia o ziemię. Ustal kierunek, jaki wektor prędkości tworzy z poziomem tuż przed uderzeniem kamienia w ziemię.",
                        "solution": {
                            "intuition": "Energię lub kinematykę można wykorzystać do policzenia $v_y = \\sqrt{2gH}$. Całkowita prędkość to $v = \\sqrt{v_0^2 + v_y^2}$, a kąt z poziomem wyznaczamy z $\\tan\\alpha = v_y / v_0$.",
                            "givens": "$H = 45\\text{ m}$, $v_0 = 40\\text{ m/s}$, $g = 10\\text{ m/s}^2$.",
                            "steps": [
                                {
                                    "title": "Składowa pionowa $v_y$",
                                    "content": "$$v_y = \\sqrt{2gH} = \\sqrt{2 \\cdot 10 \\cdot 45} = \\sqrt{900} = 30\\text{ m/s}$$"
                                },
                                {
                                    "title": "Prędkość wypadkowa $v$",
                                    "content": "$$v = \\sqrt{v_0^2 + v_y^2} = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50\\text{ m/s}$$"
                                },
                                {
                                    "title": "Kierunek (kąt z poziomem)",
                                    "content": "$$\\tan\\alpha = \\frac{v_y}{v_0} = \\frac{30}{40} = 0{,}75 \\implies \\alpha \\approx 36{,}87^\\circ \\approx 37^\\circ$$"
                                }
                            ],
                            "numerical": "$$v = 50\\text{ m/s}, \\quad \\tan\\alpha = 0{,}75 \\implies \\alpha \\approx 37^\\circ$$",
                            "answer": "Prędkość w chwili uderzenia wynosi $50\\text{ m/s}$, a wektor prędkości tworzy z poziomem kąt około $37^\\circ$.",
                            "trap": "Jest to klasyczny trójkąt egipski 3-4-5 ($30-40-50$)."
                        }
                    },
                    {
                        "id": "k-zad-35",
                        "number": 35,
                        "title": "Zadanie 35. Ostrze kosiarki do trawy",
                        "difficulty": 1,
                        "source": "Zbiór zadań • Ruch po okręgu",
                        "link": "https://skul.pl/fizyka/zadanie,3-4-1,zid,610154",
                        "tags": [
                            "Częstotliwość",
                            "Okres"
                        ],
                        "problem": "Ostrze kosiarki do trawy wykonuje $n = 2880\\text{ obrotów na minutę}$.\n\nOblicz częstotliwość obrotów kosiarki oraz czas jednego obrotu (okres).",
                        "solution": {
                            "intuition": "Częstotliwość $f$ to liczba obrotów na sekundę [Hz]. Okres $T$ to czas jednego obrotu: $T = 1/f$.",
                            "givens": "$n = 2880$, $t = 1\\text{ min} = 60\\text{ s}$.",
                            "steps": [
                                {
                                    "title": "Częstotliwość $f$",
                                    "content": "$$f = \\frac{n}{t} = \\frac{2880}{60\\text{ s}} = 48\\text{ Hz}$$"
                                },
                                {
                                    "title": "Okres $T$",
                                    "content": "$$T = \\frac{1}{f} = \\frac{1}{48}\\text{ s} \\approx 0{,}0208\\text{ s} \\approx 20{,}8\\text{ ms}$$"
                                }
                            ],
                            "numerical": "$$f = 48\\text{ Hz}, \\quad T = \\frac{1}{48}\\text{ s} \\approx 0{,}021\\text{ s}$$",
                            "answer": "Częstotliwość wynosi $48\\text{ Hz}$, a okres ok. $0{,}021\\text{ s}$.",
                            "trap": "Pamiętaj o zamianie minuty na $60\\text{ sekund}$."
                        }
                    },
                    {
                        "id": "k-zad-36",
                        "number": 36,
                        "title": "Zadanie 36. Trening na gokarcie",
                        "difficulty": 1,
                        "source": "Zbiór zadań • Ruch po okręgu",
                        "link": "https://skul.pl/fizyka/zadanie,3-4-2,zid,610155",
                        "tags": [
                            "Okres",
                            "Czas okrążenia"
                        ],
                        "problem": "Podczas treningu na gokarcie zawodnik w czasie $t = 5\\text{ min}$ wykonał $n = 15\\text{ okrążeń}$.\n\nOblicz czas jednego okrążenia.",
                        "solution": {
                            "intuition": "Czas jednego okrążenia to okres $T = t / n$.",
                            "givens": "$t = 5\\text{ min} = 300\\text{ s}$, $n = 15$.",
                            "steps": [
                                {
                                    "title": "Obliczenie okresu $T$",
                                    "content": "$$T = \\frac{t}{n} = \\frac{300\\text{ s}}{15} = 20\\text{ s}$$"
                                }
                            ],
                            "numerical": "$$T = \\frac{300}{15} = 20\\text{ s}$$",
                            "answer": "Czas jednego okrążenia wynosi $20\\text{ sekund}$.",
                            "trap": "Bardzo proste zadanie – pamiętaj tylko o zamianie $5\\text{ min}$ na $300\\text{ s}$."
                        }
                    },
                    {
                        "id": "k-zad-37",
                        "number": 37,
                        "title": "Zadanie 37. Promień wodzący ciężarka",
                        "difficulty": 1,
                        "source": "Zbiór zadań • Ruch po okręgu",
                        "link": "https://skul.pl/fizyka/zadanie,3-4-3,zid,610156",
                        "tags": [
                            "Prędkość kątowa",
                            "Radiany"
                        ],
                        "problem": "Promień wodzący ciężarka poruszającego się po okręgu zakreśla kąt $\\Delta\\varphi = 150^\\circ$ w czasie $\\Delta t = 0{,}5\\text{ s}$.\n\nOblicz średnią prędkość kątową ciężarka w rad/s.",
                        "solution": {
                            "intuition": "Przelicz kąt w stopniach na radiany: $\\alpha\\text{ rad} = \\alpha^\\circ \\cdot \\frac{\\pi}{180^\\circ}$. Następnie $\\omega = \\Delta\\varphi / \\Delta t$.",
                            "givens": "$\\Delta\\varphi = 150^\\circ = 150 \\cdot \\frac{\\pi}{180} = \\frac{5\\pi}{6}\\text{ rad}$, $\\Delta t = 0{,}5\\text{ s}$.",
                            "steps": [
                                {
                                    "title": "Prędkość kątowa $\\omega$",
                                    "content": "$$\\omega = \\frac{\\Delta\\varphi}{\\Delta t} = \\frac{\\frac{5\\pi}{6}\\text{ rad}}{0{,}5\\text{ s}} = \\frac{5\\pi}{3}\\text{ rad/s} \\approx 5{,}24\\text{ rad/s}$$"
                                }
                            ],
                            "numerical": "$$\\omega = \\frac{5\\pi}{3}\\text{ rad/s} \\approx 5{,}24\\text{ rad/s}$$",
                            "answer": "Średnia prędkość kątowa wynosi $\\frac{5\\pi}{3}\\text{ rad/s} \\approx 5{,}24\\text{ rad/s}$.",
                            "trap": "Prędkość kątowa w układzie SI musi być w radianach na sekundę [rad/s], a nie w stopniach!"
                        }
                    },
                    {
                        "id": "k-zad-38",
                        "number": 38,
                        "title": "Zadanie 38. Kąt zakreślony przy stałej prędkości kątowej",
                        "difficulty": 1,
                        "source": "Zbiór zadań • Ruch po okręgu",
                        "link": "https://skul.pl/fizyka/zadanie,3-4-4,zid,610157",
                        "tags": [
                            "Kąt",
                            "Ruch obrotowy"
                        ],
                        "problem": "Ciało porusza się ze stałą prędkością kątową $\\omega = 0{,}5\\pi\\text{ rad/s}$.\n\nJaki kąt zakreśli jego promień wodzący w czasie $\\Delta t = 20\\text{ s}$? Ile to pełnych obrotów?",
                        "solution": {
                            "intuition": "$\\Delta\\varphi = \\omega \\cdot \\Delta t$. Jeden pełny obrót to $2\\pi\\text{ rad}$.",
                            "givens": "$\\omega = 0{,}5\\pi\\text{ rad/s}$, $\\Delta t = 20\\text{ s}$.",
                            "steps": [
                                {
                                    "title": "Obliczenie kąta",
                                    "content": "$$\\Delta\\varphi = \\omega \\cdot \\Delta t = 0{,}5\\pi \\cdot 20 = 10\\pi\\text{ rad} = 10 \\cdot 180^\\circ = 1800^\\circ$$"
                                },
                                {
                                    "title": "Liczba pełnych obrotów",
                                    "content": "$$n = \\frac{\\Delta\\varphi}{2\\pi} = \\frac{10\\pi}{2\\pi} = 5\\text{ obrotów}$$"
                                }
                            ],
                            "numerical": "$$\\Delta\\varphi = 10\\pi\\text{ rad} = 1800^\\circ, \\quad n = 5$$",
                            "answer": "Promień wodzący zakreśli kąt $10\\pi\\text{ rad}$ ($1800^\\circ$), co odpowiada $5$ pełnym obrotom.",
                            "trap": "Pamiętaj: $2\\pi\\text{ rad} = 360^\\circ$."
                        }
                    },
                    {
                        "id": "k-zad-39",
                        "number": 39,
                        "title": "Zadanie 39. Samochód na rondzie",
                        "difficulty": 1,
                        "source": "Zbiór zadań • Ruch po okręgu",
                        "link": "https://skul.pl/fizyka/zadanie,3-4-5,zid,610158",
                        "tags": [
                            "Rondo",
                            "Prędkość kątowa"
                        ],
                        "problem": "Samochód wykonał pełne okrążenie ronda w czasie $\\Delta t = 20\\text{ s}$.\n\nOblicz prędkość kątową pojazdu.",
                        "solution": {
                            "intuition": "Pełne okrążenie to kąt $\\Delta\\varphi = 2\\pi\\text{ rad}$. Zatem $\\omega = 2\\pi / T$.",
                            "givens": "$T = 20\\text{ s}$, $\\Delta\\varphi = 2\\pi\\text{ rad}$.",
                            "steps": [
                                {
                                    "title": "Prędkość kątowa $\\omega$",
                                    "content": "$$\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{20} = \\frac{\\pi}{10}\\text{ rad/s} = 0{,}1\\pi\\text{ rad/s} \\approx 0{,}314\\text{ rad/s}$$"
                                }
                            ],
                            "numerical": "$$\\omega = 0{,}1\\pi\\text{ rad/s} \\approx 0{,}314\\text{ rad/s}$$",
                            "answer": "Prędkość kątowa pojazdu wynosi $\\frac{\\pi}{10}\\text{ rad/s} \\approx 0{,}314\\text{ rad/s}$.",
                            "trap": "Nie myl prędkości kątowej [rad/s] z prędkością liniową [m/s]."
                        }
                    },
                    {
                        "id": "k-zad-40",
                        "number": 40,
                        "title": "Zadanie 40. Krzesełko karuzeli",
                        "difficulty": 1,
                        "source": "Zbiór zadań • Ruch po okręgu",
                        "link": "https://skul.pl/fizyka/zadanie,3-4-6,zid,610159",
                        "tags": [
                            "Karuzela",
                            "Okres"
                        ],
                        "problem": "Krzesełko karuzeli porusza się po okręgu ze stałą prędkością kątową $\\omega = 0{,}08\\pi\\text{ rad/s}$.\n\nW jakim czasie krzesełko karuzeli zatoczy jeden pełny okrąg?",
                        "solution": {
                            "intuition": "Czas jednego pełnego okręgu to okres $T = 2\\pi / \\omega$.",
                            "givens": "$\\omega = 0{,}08\\pi\\text{ rad/s}$.",
                            "steps": [
                                {
                                    "title": "Obliczenie okresu $T$",
                                    "content": "$$T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{0{,}08\\pi} = \\frac{2}{0{,}08} = 25\\text{ s}$$"
                                }
                            ],
                            "numerical": "$$T = \\frac{2}{0{,}08} = 25\\text{ s}$$",
                            "answer": "Krzesełko zatoczy pełny okrąg w czasie $25\\text{ sekund}$.",
                            "trap": "Liczba $\\pi$ skraca się w liczniku i mianowniku!"
                        }
                    },
                    {
                        "id": "k-zad-41",
                        "number": 41,
                        "title": "Zadanie 41. Płonąca kula na sznurze",
                        "difficulty": 1,
                        "source": "Zbiór zadań • Ruch po okręgu",
                        "link": "https://skul.pl/fizyka/zadanie,3-4-7,zid,610160",
                        "tags": [
                            "Częstotliwość",
                            "Złudzenie optyczne"
                        ],
                        "problem": "Gdy płonąca kula zatacza okręgi ze stałą prędkością kątową $\\omega = 200\\text{ rad/s}$, nasze oko widzi ognisty okrąg.\n\nOblicz częstotliwość w ruchu po okręgu dla płonącej kuli.",
                        "solution": {
                            "intuition": "Zależność między prędkością kątową a częstotliwością: $\\omega = 2\\pi f \\implies f = \\frac{\\omega}{2\\pi}$.",
                            "givens": "$\\omega = 200\\text{ rad/s}$.",
                            "steps": [
                                {
                                    "title": "Częstotliwość $f$",
                                    "content": "$$f = \\frac{\\omega}{2\\pi} = \\frac{200}{2\\pi} = \\frac{100}{\\pi} \\approx 31{,}83\\text{ Hz}$$"
                                }
                            ],
                            "numerical": "$$f = \\frac{100}{\\pi}\\text{ Hz} \\approx 31{,}83\\text{ Hz}$$",
                            "answer": "Częstotliwość wynosi ok. $31{,}8\\text{ Hz}$ (ponad $31$ obrotów na sekundę, dlatego bezwładność oka tworzy ciągły okrąg).",
                            "trap": "Pamiętaj o dzieleniu przez $2\\pi$, a nie tylko przez $\\pi$."
                        }
                    },
                    {
                        "id": "k-zad-42",
                        "number": 42,
                        "title": "Zadanie 42. Częstotliwość obrotów kół samochodu",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Ruch po okręgu",
                        "link": "https://skul.pl/fizyka/zadanie,3-4-8,zid,610161",
                        "tags": [
                            "Toczenie koła",
                            "Obwód"
                        ],
                        "problem": "Oblicz częstotliwość obrotów kół samochodu jadącego z prędkością $72\\text{ km/h}$, którego koła mają średnicę $d = 720\\text{ mm}$.",
                        "solution": {
                            "intuition": "Prędkość liniowa brzegu koła względem osi jest równa prędkości samochodu: $v = 72\\text{ km/h} = 20\\text{ m/s}$. Związek między prędkością a częstotliwością: $v = \\omega r = 2\\pi f r = \\pi d f$.",
                            "givens": "$v = 72\\text{ km/h} = 20\\text{ m/s}$, $d = 720\\text{ mm} = 0{,}72\\text{ m}$, promień $r = 0{,}36\\text{ m}$.",
                            "steps": [
                                {
                                    "title": "Wyprowadzenie częstotliwości",
                                    "content": "$$v = \\pi d f \\implies f = \\frac{v}{\\pi d} = \\frac{20\\text{ m/s}}{\\pi \\cdot 0{,}72\\text{ m}} = \\frac{20}{0{,}72\\pi} \\approx 8{,}84\\text{ Hz}$$"
                                }
                            ],
                            "numerical": "$$f = \\frac{20}{0{,}72\\pi} \\approx 8{,}84\\text{ Hz}$$",
                            "answer": "Częstotliwość obrotów kół wynosi ok. $8{,}84\\text{ Hz}$ (obrotów na sekundę).",
                            "trap": "Nie pomyl średnicy z promieniem! Średnica to $2r$."
                        }
                    },
                    {
                        "id": "k-zad-43",
                        "number": 43,
                        "title": "Zadanie 43. Koło pasowe maszyny rolniczej",
                        "difficulty": 1,
                        "source": "Zbiór zadań • Ruch po okręgu",
                        "link": "https://skul.pl/fizyka/zadanie,3-4-9,zid,610162",
                        "tags": [
                            "Pas transmisyjny",
                            "Okres"
                        ],
                        "problem": "Koło pasowe maszyny rolniczej ma promień $r = 20\\text{ cm}$ i napędza pas transmisyjny, który uzyskuje prędkość liniową $v = 21{,}7\\text{ m/s}$.\n\nOblicz czas jednego obrotu koła pasowego.",
                        "solution": {
                            "intuition": "Prędkość liniowa pasa jest równa prędkości liniowej punktów na obwodzie koła: $v = \\frac{2\\pi r}{T} \\implies T = \\frac{2\\pi r}{v}$.",
                            "givens": "$r = 20\\text{ cm} = 0{,}2\\text{ m}$, $v = 21{,}7\\text{ m/s}$.",
                            "steps": [
                                {
                                    "title": "Okres jednego obrotu $T$",
                                    "content": "$$T = \\frac{2\\pi r}{v} = \\frac{2\\pi \\cdot 0{,}2\\text{ m}}{21{,}7\\text{ m/s}} = \\frac{0{,}4\\pi}{21{,}7} \\approx \\frac{1{,}2566}{21{,}7} \\approx 0{,}0579\\text{ s} \\approx 58\\text{ ms}$$"
                                }
                            ],
                            "numerical": "$$T \\approx 0{,}058\\text{ s}$$",
                            "answer": "Czas jednego obrotu wynosi ok. $0{,}058\\text{ s}$ ($58\\text{ milisekund}$).",
                            "trap": "Pamiętaj o zamianie centymetrów na metry: $20\\text{ cm} = 0{,}2\\text{ m}$."
                        }
                    },
                    {
                        "id": "k-zad-44",
                        "number": 44,
                        "title": "Zadanie 44. Wskazówki zegara ściennego",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Ruch po okręgu",
                        "link": "https://skul.pl/fizyka/zadanie,3-4-10,zid,610163",
                        "tags": [
                            "Zegar",
                            "Stosunek prędkości"
                        ],
                        "problem": "Minutowa wskazówka zegara ściennego jest dwa razy dłuższa od godzinowej: $l_1 = 2 l_2$. Okres obrotu wskazówki minutowej to $T_1 = 60\\text{ min} = 1\\text{ h}$, a wskazówki godzinowej $T_2 = 12\\text{ h}$.\n\nOblicz stosunek prędkości liniowych końców wskazówek minutowej i godzinowej ($\\frac{v_1}{v_2}$) oraz stosunek ich prędkości kątowych ($\\frac{\\omega_1}{\\omega_2}$).",
                        "solution": {
                            "intuition": "Wskazówka minutowa obraca się 12 razy szybciej kątowo niż godzinowa. Ponieważ jest też 2 razy dłuższa, jej koniec pokonuje znacznie większą drogę liniową!",
                            "givens": "$l_1 = 2 l_2$, $T_1 = 1\\text{ h}$, $T_2 = 12\\text{ h}$.",
                            "steps": [
                                {
                                    "title": "Stosunek prędkości kątowych",
                                    "content": "$$\\omega_1 = \\frac{2\\pi}{T_1}, \\quad \\omega_2 = \\frac{2\\pi}{T_2}$$\n$$\\frac{\\omega_1}{\\omega_2} = \\frac{T_2}{T_1} = \\frac{12\\text{ h}}{1\\text{ h}} = 12$$"
                                },
                                {
                                    "title": "Stosunek prędkości liniowych",
                                    "content": "$$v_1 = \\omega_1 l_1, \\quad v_2 = \\omega_2 l_2$$\n$$\\frac{v_1}{v_2} = \\frac{\\omega_1}{\\omega_2} \\cdot \\frac{l_1}{l_2} = 12 \\cdot 2 = 24$$"
                                }
                            ],
                            "numerical": "$$\\frac{\\omega_1}{\\omega_2} = 12, \\quad \\frac{v_1}{v_2} = 24$$",
                            "answer": "Stosunek prędkości kątowych wynosi $12$, a stosunek prędkości liniowych końców wynosi $24$.",
                            "trap": "Pamiętaj, że okres wskazówki godzinowej wynosi $12\\text{ godzin}$, a nie $24\\text{ h}$ (zegar ma tarczę 12-godzinną!)."
                        }
                    },
                    {
                        "id": "k-zad-45",
                        "number": 45,
                        "title": "Zadanie 45. Platforma karuzeli dla dzieci",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Ruch po okręgu",
                        "link": "https://skul.pl/fizyka/zadanie,3-4-11,a,pid,693698",
                        "tags": [
                            "Karuzela",
                            "Zmiana obrotów"
                        ],
                        "problem": "Na obwodzie platformy karuzeli o promieniu $R = 2\\text{ m}$ rozmieszczone są równomiernie krzesełka dla dzieci. Krzesełko poruszające się ruchem jednostajnym po okręgu wykonuje $n = 12\\text{ obrotów w ciągu } t = 1\\text{ min}$.\n\nOblicz:\na) częstotliwość i okres obrotu karuzeli,\nb) prędkość kątową i liniową dzieci siedzących na krzesełkach,\nc) zmianę prędkości kątowej karuzeli $\\Delta\\omega$, gdy liczba jej obrotów zwiększy się o $\\Delta n = 6$ w ciągu $t = 1\\text{ min}$.",
                        "solution": {
                            "intuition": "$f = n/t$, $T = 1/f$, $\\omega = 2\\pi f$, $v = \\omega R$.",
                            "givens": "$R = 2\\text{ m}$, $n = 12$, $t = 60\\text{ s}$, $\\Delta n = 6$.",
                            "steps": [
                                {
                                    "title": "a) Częstotliwość i okres",
                                    "content": "$$f = \\frac{12}{60\\text{ s}} = 0{,}2\\text{ Hz}$$\n$$T = \\frac{1}{f} = \\frac{1}{0{,}2} = 5\\text{ s}$$"
                                },
                                {
                                    "title": "b) Prędkość kątowa i liniowa",
                                    "content": "$$\\omega = 2\\pi f = 2\\pi \\cdot 0{,}2 = 0{,}4\\pi\\text{ rad/s} \\approx 1{,}257\\text{ rad/s}$$\n$$v = \\omega R = 0{,}4\\pi \\cdot 2 = 0{,}8\\pi\\text{ m/s} \\approx 2{,}51\\text{ m/s}$$"
                                },
                                {
                                    "title": "c) Zmiana prędkości kątowej $\\Delta\\omega$",
                                    "content": "$$\\Delta f = \\frac{\\Delta n}{t} = \\frac{6}{60} = 0{,}1\\text{ Hz}$$\n$$\\Delta\\omega = 2\\pi \\Delta f = 2\\pi \\cdot 0{,}1 = 0{,}2\\pi\\text{ rad/s} \\approx 0{,}628\\text{ rad/s}$$"
                                }
                            ],
                            "numerical": "$$f = 0{,}2\\text{ Hz}, \\quad T = 5\\text{ s}, \\quad \\omega \\approx 1{,}26\\text{ rad/s}, \\quad v \\approx 2{,}51\\text{ m/s}, \\quad \\Delta\\omega \\approx 0{,}63\\text{ rad/s}$$",
                            "answer": "a) $f = 0{,}2\\text{ Hz}, T = 5\\text{ s}$.\nb) $\\omega = 0{,}4\\pi\\text{ rad/s} \\approx 1{,}26\\text{ rad/s}$, $v = 0{,}8\\pi\\text{ m/s} \\approx 2{,}51\\text{ m/s}$.\nc) $\\Delta\\omega = 0{,}2\\pi\\text{ rad/s} \\approx 0{,}63\\text{ rad/s}$.",
                            "trap": "Zwróć uwagę, że w podpunkcie c pytają o ZMIANĘ prędkości kątowej, a nie o nową całkowitą wartość."
                        }
                    },
                    {
                        "id": "k-zad-46",
                        "number": 46,
                        "title": "Zadanie 46. Przyspieszenie dośrodkowe opony samochodu",
                        "difficulty": 1,
                        "source": "Zbiór zadań • Ruch po okręgu",
                        "link": "https://skul.pl/fizyka/zadanie,3-5-1,zid,610172",
                        "tags": [
                            "Przyspieszenie dośrodkowe",
                            "Obrót koła"
                        ],
                        "problem": "Promień koła samochodu osobowego wynosi $R = 31{,}7\\text{ cm}$.\n\nOblicz przyspieszenie dośrodkowe punktu znajdującego się na powierzchni opony względem pojazdu przy prędkości pojazdu $72\\text{ km/h}$.",
                        "solution": {
                            "intuition": "W układzie odniesienia pojazdu punkt na brzegu opony porusza się po okręgu z prędkością równą prędkości auta ($v = 72\\text{ km/h} = 20\\text{ m/s}$). Wzór na przyspieszenie dośrodkowe to $a_d = \\frac{v^2}{R}$.",
                            "givens": "$R = 31{,}7\\text{ cm} = 0{,}317\\text{ m}$, $v = 72\\text{ km/h} = 20\\text{ m/s}$.",
                            "steps": [
                                {
                                    "title": "Obliczenie przyspieszenia dośrodkowego",
                                    "content": "$$a_d = \\frac{v^2}{R} = \\frac{20^2}{0{,}317} = \\frac{400}{0{,}317} \\approx 1261{,}8\\text{ m/s}^2$$"
                                }
                            ],
                            "numerical": "$$a_d = \\frac{400}{0{,}317} \\approx 1262\\text{ m/s}^2$$",
                            "answer": "Przyspieszenie dośrodkowe wynosi ok. $1262\\text{ m/s}^2$ (ponad 120 razy więcej niż przyspieszenie ziemskie g!).",
                            "trap": "Nie zapomnij zamienić centymetrów na metry: $31{,}7\\text{ cm} = 0{,}317\\text{ m}$."
                        }
                    },
                    {
                        "id": "k-zad-47",
                        "number": 47,
                        "title": "Zadanie 47. Koło roweru i przyspieszenie dośrodkowe",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Ruch po okręgu",
                        "link": "https://skul.pl/fizyka/zadanie,3-5-2,zid,610173",
                        "tags": [
                            "Koło roweru",
                            "Częstotliwość"
                        ],
                        "problem": "Podczas jazdy ze stałą prędkością koło roweru o średnicy $d = 70\\text{ cm}$ w ciągu $t = 2\\text{ min}$ obróciło się $n = 200\\text{ razy}$.\n\nOblicz przyspieszenie dośrodkowe punktu znajdującego się na brzegu koła względem roweru.",
                        "solution": {
                            "intuition": "Z $n$ i $t$ obliczamy częstotliwość $f = n/t$, stąd prędkość kątową $\\omega = 2\\pi f$, a następnie przyspieszenie dośrodkowe $a_d = \\omega^2 r$.",
                            "givens": "$d = 70\\text{ cm} \\implies r = 0{,}35\\text{ m}$, $n = 200$, $t = 2\\text{ min} = 120\\text{ s}$.",
                            "steps": [
                                {
                                    "title": "Częstotliwość i prędkość kątowa",
                                    "content": "$$f = \\frac{200}{120\\text{ s}} = \\frac{5}{3}\\text{ Hz}$$\n$$\\omega = 2\\pi f = 2\\pi \\cdot \\frac{5}{3} = \\frac{10\\pi}{3}\\text{ rad/s} \\approx 10{,}47\\text{ rad/s}$$"
                                },
                                {
                                    "title": "Przyspieszenie dośrodkowe $a_d$",
                                    "content": "$$a_d = \\omega^2 r = \\left( \\frac{10\\pi}{3} \\right)^2 \\cdot 0{,}35 = \\frac{100\\pi^2}{9} \\cdot 0{,}35 \\approx 109{,}66 \\cdot 0{,}35 \\approx 38{,}38\\text{ m/s}^2$$"
                                }
                            ],
                            "numerical": "$$a_d = \\omega^2 r \\approx 38{,}4\\text{ m/s}^2$$",
                            "answer": "Przyspieszenie dośrodkowe wynosi ok. $38{,}4\\text{ m/s}^2$.",
                            "trap": "Średnica to $70\\text{ cm}$, więc promień wynosi $r = 35\\text{ cm} = 0{,}35\\text{ m}$."
                        }
                    },
                    {
                        "id": "k-zad-48",
                        "number": 48,
                        "title": "Zadanie 48. Samochód na zakręcie o promieniu R = 18 m",
                        "difficulty": 1,
                        "source": "Zbiór zadań • Ruch po okręgu",
                        "link": "https://skul.pl/fizyka/zadanie,3-5-3,zid,610174",
                        "tags": [
                            "Zakręt",
                            "Prędkość pokonywania zakrętu"
                        ],
                        "problem": "Samochód przejeżdżał przez zakręt o promieniu $R = 18\\text{ m}$ z przyspieszeniem dośrodkowym $a_d = 8\\text{ m/s}^2$.\n\nOblicz, z jaką prędkością pojazd pokonywał zakręt. Wynik podaj w m/s i w km/h.",
                        "solution": {
                            "intuition": "$a_d = \\frac{v^2}{R} \\implies v = \\sqrt{a_d R}$.",
                            "givens": "$R = 18\\text{ m}$, $a_d = 8\\text{ m/s}^2$.",
                            "steps": [
                                {
                                    "title": "Obliczenie prędkości",
                                    "content": "$$v = \\sqrt{a_d R} = \\sqrt{8 \\cdot 18} = \\sqrt{144} = 12\\text{ m/s}$$\n$$v = 12 \\cdot 3{,}6\\text{ km/h} = 43{,}2\\text{ km/h}$$"
                                }
                            ],
                            "numerical": "$$v = 12\\text{ m/s} = 43{,}2\\text{ km/h}$$",
                            "answer": "Pojazd pokonywał zakręt z prędkością $12\\text{ m/s}$ ($43{,}2\\text{ km/h}$).",
                            "trap": "Czysty rachunek: $\\sqrt{144} = 12$."
                        }
                    },
                    {
                        "id": "k-zad-49",
                        "number": 49,
                        "title": "Zadanie 49. Długość ramienia karuzeli",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Ruch po okręgu",
                        "link": "https://skul.pl/fizyka/zadanie,3-5-4,zid,610175",
                        "tags": [
                            "Karuzela",
                            "Wyznaczanie promienia"
                        ],
                        "problem": "Ramię karuzeli zatacza okrąg $15\\text{ razy}$ w czasie jednej minuty. Przyspieszenie dośrodkowe osoby siedzącej w krzesełku na końcu ramienia ma wartość $a_d = 12{,}5\\text{ m/s}^2$.\n\nOblicz długość ramienia karuzeli.",
                        "solution": {
                            "intuition": "Z $n = 15$ i $t = 60\\text{ s}$ wyliczamy $\\omega = 2\\pi \\frac{n}{t} = \\frac{30\\pi}{60} = 0{,}5\\pi\\text{ rad/s}$. Następnie $R = a_d / \\omega^2$.",
                            "givens": "$n = 15$, $t = 60\\text{ s}$, $a_d = 12{,}5\\text{ m/s}^2$.",
                            "steps": [
                                {
                                    "title": "Prędkość kątowa",
                                    "content": "$$f = \\frac{15}{60} = 0{,}25\\text{ Hz}$$\n$$\\omega = 2\\pi f = 2\\pi \\cdot 0{,}25 = 0{,}5\\pi\\text{ rad/s}$$"
                                },
                                {
                                    "title": "Długość ramienia (promień $R$)",
                                    "content": "$$a_d = \\omega^2 R \\implies R = \\frac{a_d}{\\omega^2} = \\frac{12{,}5}{(0{,}5\\pi)^2} = \\frac{12{,}5}{0{,}25\\pi^2} = \\frac{50}{\\pi^2} \\approx \\frac{50}{9{,}8696} \\approx 5{,}07\\text{ m}$$"
                                }
                            ],
                            "numerical": "$$R = \\frac{50}{\\pi^2} \\approx 5{,}07\\text{ m}$$",
                            "answer": "Długość ramienia karuzeli wynosi ok. $5{,}07\\text{ m}$ (ok. $5\\text{ metrów}$).",
                            "trap": "$(0{,}5\\pi)^2 = 0{,}25\\pi^2 \\approx 2{,}467$. Nie zapomnij podnieść $\\pi$ do kwadratu!"
                        }
                    },
                    {
                        "id": "k-zad-50",
                        "number": 50,
                        "title": "Zadanie 50. Piłeczka na skróconym sznurku",
                        "difficulty": 2,
                        "source": "Zbiór zadań • Ruch po okręgu",
                        "link": "https://skul.pl/fizyka/zadanie,3-5-6,zid,610177",
                        "tags": [
                            "Zmiana promienia",
                            "Niezmiennik przyspieszenia"
                        ],
                        "problem": "Piłeczka przywiązana do nierozciągliwego sznurka krąży po okręgu o promieniu $R$ z częstotliwością $f$.\n\nJak powinna się zmienić częstotliwość ruchu piłeczki, by po skróceniu sznurka do $\\frac{R}{3}$ przyspieszenie dośrodkowe nie zmieniło wartości?",
                        "solution": {
                            "intuition": "Przyspieszenie dośrodkowe wyrażone przez częstotliwość to $a_d = \\omega^2 R = (2\\pi f)^2 R = 4\\pi^2 f^2 R$. Jeśli $R$ maleje 3 razy, to $f^2$ musi wzrosnąć 3 razy, aby iloczyn pozostał stały!",
                            "givens": "$R_1 = R$, $f_1 = f$, $R_2 = \\frac{R}{3}$, $a_{d1} = a_{d2}$.",
                            "steps": [
                                {
                                    "title": "Zależność przyspieszenia dośrodkowego od częstotliwości",
                                    "content": "$$a_d = 4\\pi^2 f^2 R$$"
                                },
                                {
                                    "title": "Warunek równości przyspieszeń",
                                    "content": "$$4\\pi^2 f_1^2 R_1 = 4\\pi^2 f_2^2 R_2$$\n$$f^2 R = f_2^2 \\cdot \\frac{R}{3}$$\n$$f_2^2 = 3 f^2 \\implies f_2 = f \\sqrt{3} \\approx 1{,}73 f$$"
                                }
                            ],
                            "numerical": "$$f_2 = f\\sqrt{3} \\approx 1{,}73 f$$",
                            "answer": "Częstotliwość powinna wzrosnąć $\\sqrt{3}$ razy (czyli około $1{,}73$ razy).",
                            "trap": "Częsty błąd: odpowiedź, że częstotliwość musi wzrosnąć 3 razy. Pamiętaj, że $f$ występuje w kwadracie, więc zmiana to pierwiastek z 3!"
                        }
                    },
                    {
                        "id": "m-kin-1",
                        "number": 1,
                        "title": "Zadanie maturalne: Rzut poziomy na stok nachylony pod kątem",
                        "difficulty": 2,
                        "source": "CKE Matura z Fizyki (Arkusz Pokazowy)",
                        "tags": [
                            "Rzut poziomy",
                            "Geometria toru",
                            "Wektory"
                        ],
                        "problem": "Z krawędzi zbocza nachylonego do poziomu pod kątem $\\alpha = 30^\\circ$ wystrzelono poziomo małe ciało z prędkością początkową $v_0 = 10\\text{ m/s}$. Przyjmij $g = 10\\text{ m/s}^2$ oraz pomiń opory powietrza.\n\n1. Wyprowadź równanie toru ruchu ciała $y(x)$.\n2. Oblicz czas lotu ciała $t$ do momentu uderzenia w zbocze.\n3. Oblicz odległość $d$ mierzoną wzdłuż stoku od punktu wyrzutu do punktu upadku.",
                        "solution": {
                            "intuition": "Rzut poziomy to złożenie dwóch niezależnych ruchów: w poziomie (oś X) ruch jednostajny z prędkością $v_0$, a w pionie (oś Y) swobodny spadek z przyspieszeniem $g$. Stok tworzy prostą o równaniu $y = -x \\cdot \\tan\\alpha$.",
                            "givens": "$v_0 = 10\\text{ m/s}$, $\\alpha = 30^\\circ$, $g = 10\\text{ m/s}^2$. Szukane: $t, d$.",
                            "steps": [
                                {
                                    "title": "Równania parametryczne ruchu",
                                    "content": "$$x(t) = v_0 t$$\n$$y(t) = \\frac{g t^2}{2}$$"
                                },
                                {
                                    "title": "Warunek uderzenia w stok",
                                    "content": "$$\\tan\\alpha = \\frac{y}{x} = \\frac{g t}{2 v_0} \\implies t = \\frac{2 v_0 \\tan\\alpha}{g}$$"
                                },
                                {
                                    "title": "Odległość wzdłuż stoku $d$",
                                    "content": "$$d = \\frac{x}{\\cos\\alpha} = \\frac{2 v_0^2 \\sin\\alpha}{g \\cos^2\\alpha}$$"
                                }
                            ],
                            "numerical": "$$t \\approx 1{,}15\\text{ s}, \\quad d \\approx 13{,}3\\text{ m}$$",
                            "answer": "Czas lotu wynosi $t \\approx 1{,}15\\text{ s}$, a odległość wzdłuż stoku $d \\approx 13{,}3\\text{ m}$.",
                            "trap": "Częsty błąd: próba obracania układu bez poprawnego rozłożenia wektora przyspieszenia $g$."
                        }
                    }
                ]
            },
            {
                "id": "m-dynamika",
                "title": "Dział 2: Dynamika i Zasady Newtona",
                "icon": "⚖️",
                "badge": "Wkrótce",
                "isComingSoon": true,
                "desc": "Zasady dynamiki Newtona, tarcie, siły bezwładności i równia pochyła.",
                "subchapters": [],
                "tasks": []
            },
            {
                "id": "m-bryla",
                "title": "Dział 3: Bryła Sztywna i Ruch Obrotowy",
                "icon": "⚙️",
                "badge": "Wkrótce",
                "isComingSoon": true,
                "desc": "Moment siły, moment bezwładności, twierdzenie Steinera i toczenie bez poślizgu.",
                "subchapters": [],
                "tasks": []
            },
            {
                "id": "m-grawitacja",
                "title": "Dział 4: Grawitacja i Ruch Planet",
                "icon": "🪐",
                "badge": "Wkrótce",
                "isComingSoon": true,
                "desc": "Prawo powszechnego ciążenia, prędkości kosmiczne i prawa Keplera.",
                "subchapters": [],
                "tasks": []
            }
        ]
    },
    "konkurs-fizyka": {
        "id": "konkurs-fizyka",
        "title": "Konkurs Kuratoryjny z Fizyki (SP)",
        "subtitle": "Zbiór Zadań z Fizyki z Podziałem na Działy (Etap Szkolny)",
        "badge": "Szkoła Podstawowa • Konkurs Kuratoryjny",
        "icon": "🏆",
        "accentColor": "#38bdf8",
        "sections": [
            {
                "id": "k-dzial-1",
                "number": 1,
                "title": "Dział 1: Pomiary, Jednostki i Właściwości Materii",
                "icon": "📏",
                "badge": "3 Tematy • 16 Zadań",
                "desc": "Układ SI, analiza wymiarowa, niepewności pomiarowe, cyfry znaczące oraz siły spójności i przylegania.",
                "subchapters": [
                    {
                        "id": "k-sub-1-1",
                        "number": "1.1",
                        "title": "Temat 1.1: Układ SI i analiza jednostek",
                        "shortTitle": "1.1 Układ SI i jednostki",
                        "icon": "📐",
                        "desc": "Jednostki podstawowe i pochodne, wyprowadzanie jednostek wielkości fizycznych.",
                        "formulaCheat": "1\\text{ J} = 1\\text{ N}\\cdot\\text{m} = 1\\frac{\\text{kg}\\cdot\\text{m}^2}{\\text{s}^2}, \\quad 1\\text{ W} = 1\\frac{\\text{J}}{\\text{s}} = 1\\frac{\\text{kg}\\cdot\\text{m}^2}{\\text{s}^3}, \\quad 1\\text{ Pa} = 1\\frac{\\text{N}}{\\text{m}^2} = 1\\frac{\\text{kg}}{\\text{m}\\cdot\\text{s}^2}",
                        "theory": `
<div class="theory-section">
    <h4>1. Układ SI</h4>
    <p>Dawniej w różnych krajach używano odmiennych miar, takich jak stopy, łokcie czy funty. Aby ułatwić komunikację i badania naukowe na całym świecie, wprowadzono jednolity <strong>Międzynarodowy Układ Jednostek Miar (SI)</strong>.</p>
    <div class="theory-image-wrapper">
        <img src="img/si_units.png" alt="Układ SI - 7 jednostek" class="theory-img">
    </div>
    <h4>2. Jednostki podstawowe i pochodne</h4>
    <p>W układzie SI wyróżniamy <strong>7 jednostek podstawowych</strong>:</p>
    <ul>
        <li><strong>Czas:</strong> sekunda (s)</li>
        <li><strong>Długość:</strong> metr (m)</li>
        <li><strong>Masa:</strong> kilogram (kg)</li>
        <li><strong>Prąd elektryczny:</strong> amper (A)</li>
        <li><strong>Temperatura:</strong> kelwin (K)</li>
        <li><strong>Liczność materii:</strong> mol (mol)</li>
        <li><strong>Światłość:</strong> kandela (cd)</li>
    </ul>
    <p>Wszystkie pozostałe jednostki w fizyce to <strong>jednostki pochodne</strong> – powstają z połączenia jednostek podstawowych za pomocą wzorów fizycznych.</p>

    <h4>3. Wyprowadzanie jednostki pochodnej krok po kroku (jednostka pracy)</h4>
    <p>Jednostki wielkości fizycznych możemy łatwo wyznaczyć na podstawie definicji i wzorów. Zobaczmy to na przykładzie jednostki pracy – <strong>dżula [J]</strong>:</p>

    <div class="step-breakdown" style="background: rgba(255,255,255,0.03); border-left: 3px solid #38bdf8; padding: 12px 16px; margin: 12px 0; border-radius: 6px;">
        <p>1. Pracę wyraża wzór $W = F \\cdot s$ (siła $\\cdot$ przesunięcie), zatem jej jednostką jest niutonometr:</p>
        <p>$$1\\text{ J} = 1\\text{ N} \\cdot 1\\text{ m}$$</p>
        <p>2. Z II zasady dynamiki wiemy, że $F = m \\cdot a$ (masa $\\cdot$ przyspieszenie). Rozpisujemy więc niuton na jednostki podstawowe:</p>
        <p>$$1\\text{ N} = 1\\text{ kg} \\cdot 1\\frac{\\text{m}}{\\text{s}^2} = 1\\frac{\\text{kg}\\cdot\\text{m}}{\\text{s}^2}$$</p>
        <p>3. Wstawiamy rozpisany niuton do wzoru na dżul:</p>
        <p>$$1\\text{ J} = 1\\text{ N} \\cdot 1\\text{ m} = \\left(1\\frac{\\text{kg}\\cdot\\text{m}}{\\text{s}^2}\\right) \\cdot 1\\text{ m} = 1\\frac{\\text{kg}\\cdot\\text{m}^2}{\\text{s}^2}$$</p>
    </div>
</div>`,
                        "tasks": [
                            {
                                "id": "kk-zad-1",
                                "number": 1,
                                "points": 1,
                                "title": "Zadanie 1. (1 pkt) Jednostka podstawowa układu SI",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Układ SI",
                                    "Jednostki podstawowe"
                                ],
                                "problem": "Z wymienionych jednostek, jednostką podstawową układu SI nie jest:\n\nA. sekunda (s).\nB. kilogram (kg).\nC. wat (W).\nD. metr (m).",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-2",
                                "number": 2,
                                "points": 1,
                                "title": "Zadanie 2. (1 pkt) Jednostka niebędąca podstawową",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Układ SI",
                                    "Jednostki podstawowe"
                                ],
                                "problem": "Która z wymienionych jednostek nie jest jednostką podstawową w układzie SI?\n\nA. kandela.\nB. amper.\nC. gram.\nD. kelwin.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-3",
                                "number": 3,
                                "points": 1,
                                "title": "Zadanie 3. (1 pkt) Jednostka prędkości w układzie SI",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Układ SI",
                                    "Prędkość"
                                ],
                                "problem": "Spośród, niżej wymienionych, używanych obecnie jednostek prędkości jednostką układu SI jest:\n\nA. węzeł.\nB. mach.\nC. km/h.\nD. m/s.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-4",
                                "number": 4,
                                "points": 1,
                                "title": "Zadanie 4. (1 pkt) Jednostka mocy w układzie SI",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Analiza wymiarowa",
                                    "Moc",
                                    "Układ SI"
                                ],
                                "problem": "Jednostka mocy w układzie SI wyraża się przez podstawowe jednostki tego układu następująco:\n\nA. $\\text{kg}\\cdot\\text{m}$\nB. $\\text{kg}\\cdot\\text{m}/\\text{s}$\nC. $\\text{kg}\\cdot\\text{m}^2/\\text{s}$\nD. $\\text{kg}\\cdot\\text{m}^2/\\text{s}^3$",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-5",
                                "number": 5,
                                "points": 1,
                                "title": "Zadanie 5. (1 pkt) Jednostka ciśnienia w układzie SI",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Analiza wymiarowa",
                                    "Ciśnienie",
                                    "Układ SI"
                                ],
                                "problem": "Jednostka ciśnienia w układzie SI wyraża się przez podstawowe jednostki tego układu następująco:\n\nA. $\\frac{\\text{kg}}{\\text{s}^2}$\nB. $\\frac{\\text{kg}}{\\text{s}\\cdot\\text{m}^2}$\nC. $\\text{kg}\\cdot\\text{m}\\cdot\\text{s}^2$\nD. $\\frac{\\text{kg}}{\\text{m}\\cdot\\text{s}^2}$",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-6",
                                "number": 6,
                                "points": 1,
                                "title": "Zadanie 6. (1 pkt) Identyfikacja wielkości fizycznej",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Analiza wymiarowa",
                                    "Układ SI"
                                ],
                                "problem": "Jednostka jakiej wielkości fizycznej może być wyrażona za pomocą jednostek podstawowych układu SI w następujący sposób: $\\frac{\\text{kg}\\cdot\\text{m}^2}{\\text{s}^3}$ ?\n\nA. siły.\nB. pracy.\nC. mocy.\nD. pędu.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-1-2",
                        "number": "1.2",
                        "title": "Temat 1.2: Pomiary i niepewność pomiarowa",
                        "shortTitle": "1.2 Pomiary i niepewności",
                        "icon": "🔬",
                        "desc": "Niepewność pomiarowa, cyfry znaczące, pomiary pośrednie (metoda zwielokrotnienia).",
                        "formulaCheat": "v = \\frac{s}{t}, \\quad \\Delta x = \\frac{\\Delta d}{n}, \\quad x = (x_0 \\pm \\Delta x)",
                        "theory": `
<div class="theory-section">
    <h4>1. Niepewność pomiaru</h4>
    <p>Każdy pomiar w fizyce obarczony jest pewną niedokładnością wynikającą z ograniczeń przyrządu lub zmysłów obserwatora. Zazwyczaj jako <strong>niepewność pomiarową przyrządu $\\Delta x$</strong> przyjmuje się wartość najmniejszej działki na jego skali.</p>
    <p>Wynik pomiaru zapisujemy w postaci:</p>
    <p>$$x = (x_0 \\pm \\Delta x)$$</p>
    <p>Oznacza to, że rzeczywista wartość mierzonej wielkości mieści się w przedziale od $x_0 - \\Delta x$ do $x_0 + \\Delta x$.</p>

    <div style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.2); padding: 12px; border-radius: 8px; margin: 10px 0;">
        <p><strong>Przykład na liczbach:</strong></p>
        <p>Mierzymy długość zeszytu linijką z podziałką milimetrową (najmniejsza działka to $1\\text{ mm}$).</p>
        <p>Odczytujemy wynik: $210\\text{ mm}$. Zapisujemy go jako:</p>
        <p>$$L = (210 \\pm 1)\\text{ mm}$$</p>
        <p>Rzeczywista długość zeszytu znajduje się więc w przedziale od $209\\text{ mm}$ do $211\\text{ mm}$.</p>
    </div>

    <h4>2. Pomiar małych wielkości (Metoda zwielokrotnienia)</h4>
    <p>Gdy chcemy zmierzyć bardzo małą grubość (np. pojedynczego drutu lub kartki papieru), która jest mniejsza niż najmniejsza działka linijki, stosujemy metodę zwielokrotnienia.</p>
    <p>Mierzymy łączną szerokość $D$ grupy $n$ jednakowych elementów (np. $n$ ściśle nawiniętych zwojów drutu), a następnie dzielimy otrzymany wynik przez ich liczbę:</p>
    <p>$$d = \\frac{D}{n}$$</p>
    <p>Co ważne, niepewność takiego pomiaru również ulega $n$-krotnemu zmniejszeniu:</p>
    <p>$$\\Delta d = \\frac{\\Delta D}{n}$$</p>

    <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); padding: 12px; border-radius: 8px; margin: 10px 0;">
        <p><strong>Przykład na liczbach:</strong></p>
        <p>Nawinięto ciasno $n = 40$ zwojów cienkiego drutu. Zmierzona linijką o podziałce milimetrowej ($\\Delta D = 1\\text{ mm}$) szerokość wszystkich zwojów wyniosła $D = 14\\text{ mm}$.</p>
        <p>• Średnica jednego drutu: $d = \\frac{14\\text{ mm}}{40} = 0{,}35\\text{ mm}$</p>
        <p>• Niepewność pomiaru: $\\Delta d = \\frac{1\\text{ mm}}{40} = 0{,}025\\text{ mm} \\approx 0{,}03\\text{ mm}$</p>
        <p>Zwykłą linijką udało się wyznaczyć średnicę z dokładnością rzędu setnych części milimetra.</p>
    </div>
</div>`,
                        "tasks": [
                            {
                                "id": "zb-zad-4-1",
                                "number": 1,
                                "title": "Zadanie 1. Przedrostki jednostek wielkości fizycznych (4.1)",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Pomiary i niepewności",
                                "tags": [
                                    "Przedrostki SI",
                                    "Mnożniki jednostek"
                                ],
                                "problem": "Co oznaczają przy jednostkach wielkości fizycznych (np. długości) przedrostki: kilo-, deka-, decy-, mikro-, nano-? Sprawdź to w tabeli przedrostków. Podaj jeszcze kilka rzadziej używanych przedrostków (z początku i końca skali), a także ich oznaczenia skrótowe.",
                                "solution": {
                                    "intuition": "Przedrostki w układzie SI to wygodny sposób na zapisywanie bardzo dużych lub bardzo małych liczb za pomocą potęg dziesiątki, bez konieczności pisania wielu zer.",
                                    "givens": "Wymienione przedrostki: kilo-, deka-, decy-, mikro-, nano-.",
                                    "steps": [
                                        {
                                            "title": "Przedrostki z polecenia",
                                            "content": "• **kilo-** (symbol: **k**) oznacza mnożnik $10^3 = 1000$ (tysiąc razy więcej, np. $1\\text{ km} = 1000\\text{ m}$)\n• **deka-** (symbol: **da**) oznacza mnożnik $10^1 = 10$ (dziesięć razy więcej, np. $1\\text{ dag} = 10\\text{ g}$)\n• **decy-** (symbol: **d**) oznacza mnożnik $10^{-1} = 0{,}1$ (jedna dziesiąta, np. $1\\text{ dm} = 0{,}1\\text{ m}$)\n• **mikro-** (symbol: **$\\mu$**) oznacza mnożnik $10^{-6} = 0{,}000001$ (jedna milionowa)\n• **nano-** (symbol: **n**) oznacza mnożnik $10^{-9} = 0{,}000000001$ (jedna miliardowa)"
                                        },
                                        {
                                            "title": "Dodatkowe rzadziej używane przedrostki",
                                            "content": "Z początku skali (bardzo duże wielkości):\n• **mega-** (symbol: **M**) = $10^6$ (milion)\n• **giga-** (symbol: **G**) = $10^9$ (miliard)\n• **tera-** (symbol: **T**) = $10^{12}$ (bilion)\n\nZ końca skali (bardzo małe wielkości):\n• **piko-** (symbol: **p**) = $10^{-12}$ (jedna bilionowa)\n• **femto-** (symbol: **f**) = $10^{-15}$ (jedna biliardowa)"
                                        }
                                    ],
                                    "numerical": "$$\\text{kilo } (10^3), \\quad \\text{deka } (10^1), \\quad \\text{decy } (10^{-1}), \\quad \\mu (10^{-6}), \\quad \\text{n } (10^{-9})$$",
                                    "answer": "kilo ($k, 10^3$), deka ($da, 10^1$), decy ($d, 10^{-1}$), mikro ($\\mu, 10^{-6}$), nano ($n, 10^{-9}$). Przykłady skrajne: giga ($G, 10^9$), tera ($T, 10^{12}$) oraz piko ($p, 10^{-12}$), femto ($f, 10^{-15}$).",
                                    "trap": "Pamiętaj o rozróżnieniu wielkich i małych liter! 'm' to mili- ($10^{-3}$), a 'M' to mega- ($10^6$)."
                                }
                            },
                            {
                                "id": "zb-zad-4-3",
                                "number": 2,
                                "title": "Zadanie 2. Niepewność pomiaru deski przymiarem centymetrowym (4.3)",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Pomiary i niepewności",
                                "tags": [
                                    "Niepewność pomiarowa",
                                    "Przyrządy pomiarowe"
                                ],
                                "problem": "Deskę o długości $0{,}5\\text{ m}$ zmierzono przymiarem centymetrowym (linijka z podziałką centymetrową) o długości $1\\text{ m}$. Jaka jest niepewność tego pomiaru?",
                                "solution": {
                                    "intuition": "Zgodnie z podstawową zasadą niepewność pojedynczego pomiaru przyrządu ze skalą kreskową przyjmuje się jako wartość najmniejszej działki na skali tego przyrządu.",
                                    "givens": "Długość deski $L = 0{,}5\\text{ m} = 50\\text{ cm}$. Przymiar o podziałce centymetrowej (najmniejsza działka: $1\\text{ cm}$).",
                                    "steps": [
                                        {
                                            "title": "Określenie najmniejszej działki przyrządu",
                                            "content": "Przymiar ma podziałkę centymetrową, co oznacza, że kreski na skali znajdują się co $1\\text{ cm}$. Najmniejsza działka wynosi zatem:\n$$\\Delta x = 1\\text{ cm} = 0{,}01\\text{ m}$$"
                                        },
                                        {
                                            "title": "Zapis wyniku pomiaru z niepewnością",
                                            "content": "Niepewność pomiaru wynosi $\\pm 1\\text{ cm}$ (lub $\\pm 0{,}01\\text{ m}$).\nWynik pomiaru deski zapisujemy jako:\n$$L = (50 \\pm 1)\\text{ cm} \\quad \\text{lub} \\quad L = (0{,}50 \\pm 0{,}01)\\text{ m}$$"
                                        }
                                    ],
                                    "numerical": "$$\\Delta x = 1\\text{ cm} = 0{,}01\\text{ m}$$",
                                    "answer": "Niepewność tego pomiaru wynosi $1\\text{ cm}$ (czyli $0{,}01\\text{ m}$).",
                                    "trap": "Całkowita długość przymiaru ($1\\text{ m}$) ani długość deski ($0{,}5\\text{ m}$) nie mają wpływu na niepewność przyrządu – decyduje wyłącznie najmniejsza działka podziałki!"
                                }
                            },
                            {
                                "id": "kk-zad-7",
                                "number": 3,
                                "points": 1,
                                "title": "Zadanie 3. (1 pkt) Dwa pomiary prędkości samochodu",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Niepewność pomiarowa",
                                    "Przedziały ufności"
                                ],
                                "problem": "Dwoma różnymi sposobami zmierzono prawie jednocześnie prędkość samochodu. Otrzymane wyniki obarczone były oczywiście niepewnościami pomiarowymi. Otrzymano następujące wartości: $v = (82{,}0 \\pm 3{,}0)\\text{ km/h}$ oraz $v = (78{,}0 \\pm 4{,}0)\\text{ km/h}$. Przyjmij, że oba pomiary wykonano poprawnie.\n\nWyniki te oznaczają, że rzeczywista prędkość samochodu zawarta jest pomiędzy:\n\nA. $(74{,}0;\\ 85{,}0)\\text{ km/h}$\nB. $(79{,}0;\\ 82{,}0)\\text{ km/h}$\nC. $(76{,}0;\\ 84{,}0)\\text{ km/h}$\nD. $(78{,}0;\\ 82{,}0)\\text{ km/h}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-8",
                                "number": 4,
                                "points": 1,
                                "title": "Zadanie 4. (1 pkt) Odcinkowy pomiar prędkości i cyfry znaczące",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Cyfry znaczące",
                                    "Prędkość średnia"
                                ],
                                "problem": "Czas ruchu samochodu na pewnym odcinku drogi, zmierzony podczas odcinkowego pomiaru prędkości, wyniósł $30{,}51\\text{ s}$. Pomiar długości tego odcinka drogi dał wynik $721\\text{ m}$.\n\nZatem otrzymana wartość prędkości średniej samochodu na tym odcinku drogi, z zachowaniem liczby cyfr znaczących, wyniosła:\n\nA. $23{,}632\\text{ m/s}$\nB. $23{,}63\\text{ m/s}$\nC. $23{,}6\\text{ m/s}$\nD. $23\\text{ m/s}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-9",
                                "number": 5,
                                "points": 1,
                                "title": "Zadanie 5. (1 pkt) Pomiar grubości drucika (10 pętli)",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Niepewność pomiarowa",
                                    "Pomiary wielokrotne"
                                ],
                                "problem": "Chcąc zmierzyć grubość metalowego drucika, uczeń nawinął go na okrągły pręt, wykonując 10 stykających się ze sobą pętli, i zmierzył linijką z podziałką milimetrową szerokość tych 10 pętli.\n\nNiepewność tak wykonanego pomiaru grubości drucika wynosi:\n\nA. $0{,}1\\text{ mm}$.\nB. $0{,}5\\text{ mm}$.\nC. $\\pm 1\\text{ mm}$.\nD. $\\pm 10\\text{ mm}$.",
                                "solution": null
                            },
                            {
                                "id": "zb-zad-4-5",
                                "number": 6,
                                "title": "Zadanie 6. Średnica drucika z niepewnością pomiarową – 20 zwojów (4.5)",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Pomiary i niepewności",
                                "tags": [
                                    "Niepewność pomiarowa",
                                    "Metoda zwielokrotnienia"
                                ],
                                "problem": "Aby zmierzyć średnicę drucika, nawinięto 20 zwojów ciasno na ołówku i zmierzono długość tej spirali linijką z podziałką milimetrową. Długość tej spirali wynosiła $32\\text{ mm}$.\n\nŚrednica tego drucika wraz z niepewnością pomiarową była równa:\n\nA) $(1{,}6 \\pm 1)\\text{ mm}$\nB) $(1{,}6 \\pm 0{,}05)\\text{ mm}$\nC) $(0{,}625 \\pm 1)\\text{ mm}$\nD) $(0{,}625 \\pm 0{,}05)\\text{ mm}$",
                                "solution": {
                                    "intuition": "Średnica jednego zwoju to całkowita długość podzielona przez liczbę zwojów ($d = D / n$). Niepewność pomiaru linijki ($\\Delta D = 1\\text{ mm}$) również dzieli się przez liczbę zwojów: $\\Delta d = \\Delta D / n$!",
                                    "givens": "Liczba zwojów $n = 20$. Długość spirali $D = 32\\text{ mm}$. Dokładność linijki $\\Delta D = 1\\text{ mm}$.",
                                    "steps": [
                                        {
                                            "title": "Obliczenie średnicy pojedynczego drutu",
                                            "content": "$$d = \\frac{D}{n} = \\frac{32\\text{ mm}}{20} = 1{,}6\\text{ mm}$$"
                                        },
                                        {
                                            "title": "Obliczenie niepewności pomiaru średnicy",
                                            "content": "Podziałka milimetrowa ma najmniejszą działkę $1\\text{ mm}$, więc niepewność zmierzenia całej spirali to $\\Delta D = 1\\text{ mm}$.\nNiepewność wyznaczenia średnicy jednego drutu wynosi:\n$$\\Delta d = \\frac{\\Delta D}{n} = \\frac{1\\text{ mm}}{20} = 0{,}05\\text{ mm}$$"
                                        },
                                        {
                                            "title": "Zapis wyniku końcowego",
                                            "content": "$$d = (1{,}6 \\pm 0{,}05)\\text{ mm}$$"
                                        }
                                    ],
                                    "numerical": "$$d = (1{,}6 \\pm 0{,}05)\\text{ mm}$$",
                                    "answer": "Poprawna jest odpowiedź B: $(1{,}6 \\pm 0{,}05)\\text{ mm}$.",
                                    "trap": "Częsty błąd to pozostawienie niepewności linijki równej $\\pm 1\\text{ mm}$ (odpowiedź A). Dzieląc długość przez 20, niepewność również dzielimy przez 20!"
                                }
                            },
                            {
                                "id": "kk-zad-10",
                                "number": 7,
                                "points": 1,
                                "title": "Zadanie 7. (1 pkt) Średnica giętkiego drutu (40 zwojów)",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Niepewność pomiarowa",
                                    "Pomiary wielokrotne"
                                ],
                                "problem": "Dysponując linijką ze skalą o najmniejszej działce $1\\text{ mm}$, chcemy zmierzyć średnicę dość cienkiego, giętkiego drutu. W tym celu bardzo ciasno nawijamy na ołówek 40 zwojów tego drutu. Odcinek ołówka zajęty przez nawinięte zwoje ma długość $14\\text{ mm}$. Wyznaczona na tej podstawie średnica drutu wynosi $0{,}35\\text{ mm}$.\n\nNiepewność otrzymanego wyniku wynosi:\n\nA. $1{,}00\\text{ mm}$,\nB. $0{,}10\\text{ mm}$,\nC. $0{,}03\\text{ mm}$,\nD. $0{,}35\\text{ mm}$.",
                                "solution": null
                            },
                            {
                                "id": "zb-zad-4-6",
                                "number": 8,
                                "title": "Zadanie 8. Średnica i dokładność wyznaczenia drutu – 45 zwojów (4.6)",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Pomiary i niepewności",
                                "tags": [
                                    "Niepewność pomiarowa",
                                    "Metoda zwielokrotnienia"
                                ],
                                "problem": "Aby wyznaczyć średnicę drutu, uczeń nawinął ciasno na ołówek 45 zwojów, które zajęły część ołówka o długości $3\\text{ cm}$ i $2\\text{ mm}$.\n\nIle wynosi średnica tego drutu i z jaką dokładnością wyznaczono tę średnicę? Długość spirali na ołówku uczeń mierzył linijką ze skalą milimetrową.",
                                "solution": {
                                    "intuition": "Najpierw ujednolicamy jednostki do milimetrów ($3\\text{ cm } 2\\text{ mm} = 32\\text{ mm}$), a potem dzielimy zarówno długość, jak i najmniejszą działkę linijki przez liczbę zwojów ($45$).",
                                    "givens": "Liczba zwojów $n = 45$. Łączna długość $D = 3\\text{ cm } 2\\text{ mm} = 32\\text{ mm}$. Niepewność linijki milimetrowej $\\Delta D = 1\\text{ mm}$.",
                                    "steps": [
                                        {
                                            "title": "Wyznaczenie średnicy drutu",
                                            "content": "$$d = \\frac{D}{n} = \\frac{32\\text{ mm}}{45} \\approx 0{,}711\\text{ mm}$$"
                                        },
                                        {
                                            "title": "Wyznaczenie dokładności (niepewności) pomiaru",
                                            "content": "Linijka ze skalą milimetrową ma najmniejszą działkę $1\\text{ mm}$, więc dokładność wyznaczenia średnicy pojedynczego drutu wynosi:\n$$\\Delta d = \\frac{\\Delta D}{n} = \\frac{1\\text{ mm}}{45} \\approx 0{,}022\\text{ mm}$$"
                                        },
                                        {
                                            "title": "Podsumowanie z zapisem niepewności",
                                            "content": "Średnica drutu wynosi ok. $0{,}71\\text{ mm}$, a dokładność pomiaru to $\\pm 0{,}02\\text{ mm}$:\n$$d = (0{,}71 \\pm 0{,}02)\\text{ mm}$$"
                                        }
                                    ],
                                    "numerical": "$$d \\approx 0{,}71\\text{ mm}, \\quad \\Delta d = \\frac{1}{45}\\text{ mm} \\approx 0{,}02\\text{ mm}$$",
                                    "answer": "Średnica drutu wynosi około $0{,}71\\text{ mm}$ (dokładnie $\\frac{32}{45}\\text{ mm}$), a wyznaczono ją z dokładnością do około $0{,}02\\text{ mm}$ (dokładnie $\\frac{1}{45}\\text{ mm}$).",
                                    "trap": "Pamiętaj o przeliczeniu $3\\text{ cm}$ na $30\\text{ mm}$ przed dodaniem $2\\text{ mm}$!"
                                }
                            }
                        ]
                    },
                    {
                        "id": "k-sub-1-3",
                        "number": "1.3",
                        "title": "Temat 1.3: Zjawiska powierzchniowe",
                        "shortTitle": "1.3 Zjawiska powierzchniowe",
                        "icon": "💧",
                        "desc": "Siły spójności (kohezji), siły przylegania (adhezji), menisk wklęsły i wypukły, zwilżanie.",
                        "formulaCheat": "F_{\\text{spójności}} > F_{\\text{przylegania}} \\implies \\text{menisk wypukły}, \\quad F_{\\text{spójności}} < F_{\\text{przylegania}} \\implies \\text{menisk wklęsły}",
                        "theory": `
<div class="theory-section">
    <h4>1. Siły spójności (kohezji) i przylegania (adhezji)</h4>
    <p>W cieczach cząsteczki oddziałują ze sobą oraz z otoczeniem:</p>
    <ul>
        <li><strong>Siły spójności (kohezja):</strong> działają między cząsteczkami <em>tej samej substancji</em> (np. cząsteczki wody przyciągają się wzajemnie). Powodują one powstawanie napięcia powierzchniowego i sprawiają, że krople dążą do kulistego kształtu.</li>
        <li><strong>Siły przylegania (adhezja):</strong> działają między cząsteczkami <em>różnych substancji</em> (np. cząsteczki wody przyciągane przez cząsteczki szkła naczynia).</li>
    </ul>

    <div class="theory-image-wrapper">
        <img src="img/menisk_comparison.jpg" alt="Porównanie menisków: wklęsły i wypukły" class="theory-img">
    </div>

    <h4>2. Kształt menisku i zjawisko zwilżania</h4>
    <p>Kształt powierzchni cieczy przy ściance naczynia zależy od wzajemnej relacji sił przylegania i spójności:</p>

    <div class="step-breakdown" style="background: rgba(56, 189, 248, 0.05); border-left: 3px solid #38bdf8; padding: 10px 14px; margin: 10px 0; border-radius: 4px;">
        <p><strong>A. Menisk wklęsły (ciecz zwilża ścianki naczynia):</strong></p>
        <p>$$F_{\\text{przylegania}} > F_{\\text{spójności}}$$</p>
        <p>Cząsteczki cieczy silniej przyciągają się ze ścianką naczynia niż między sobą. Ciecz unosi się przy ściankach ku górze. Przykład: <strong>woda w szklanym naczyniu</strong>.</p>
    </div>

    <div class="step-breakdown" style="background: rgba(244, 63, 94, 0.05); border-left: 3px solid #f43f5e; padding: 10px 14px; margin: 10px 0; border-radius: 4px;">
        <p><strong>B. Menisk wypukły (ciecz nie zwilża ścianek naczynia):</strong></p>
        <p>$$F_{\\text{spójności}} > F_{\\text{przylegania}}$$</p>
        <p>Cząsteczki cieczy przyciągają się silniej między sobą niż ze ściankami naczynia. Powierzchnia cieczy przy ściankach zakrzywia się w dół. Przykład: <strong>rtęć w szklanym naczyniu</strong> lub kropla wody na natłuszczonym szkle.</p>
    </div>

    <h4>3. Przykład doświadczalny</h4>
    <div style="background: rgba(168, 85, 247, 0.08); border: 1px solid rgba(168, 85, 247, 0.2); padding: 12px; border-radius: 8px; margin-top: 10px;">
        <p><strong>Doświadczenie: Pływająca igła</strong></p>
        <p>Stalowa igła ma gęstość ok. $7800\\frac{\\text{kg}}{\\text{m}^3}$, znacznie większą od gęstości wody ($1000\\frac{\\text{kg}}{\\text{m}^3}$). Mimo to położona ostrożnie i płasko na powierzchni wody nie tonie.</p>
        <p>Utrzymuje ją napięcie powierzchniowe, które działa jak sprężysta błona. Gdy dodamy choćby <strong>jedną kroplę detergentu</strong> (np. płynu do naczyń), zmniejsza on siły spójności między cząsteczkami wody i igła natychmiast opada na dno.</p>
    </div>
</div>`,
                        "tasks": [
                            {
                                "id": "kk-zad-11",
                                "number": 11,
                                "points": 1,
                                "title": "Zadanie 11. (1 pkt) Zwilżanie powierzchni cieczą",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Zjawiska powierzchniowe",
                                    "Spójność i przyleganie"
                                ],
                                "problem": "Kiedy ciecz styka się z ciałem stałym możliwe są dwie sytuacje - ciecz zwilża lub nie zwilża powierzchni ciała stałego. O tym, z którą z wyżej wymienionych sytuacji mamy do czynienia decydują siły:\n\nA. ciężkości cząsteczek.\nB. tylko przylegania.\nC. tylko spójności.\nD. spójności i przylegania.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-12",
                                "number": 12,
                                "points": 1,
                                "title": "Zadanie 12. (1 pkt) Kształt menisku wody w szklance",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Menisk",
                                    "Siły spójności i przylegania"
                                ],
                                "problem": "Woda wlana do szklanki i wypełniająca ją częściowo tworzy:\n\nA. menisk wypukły, ponieważ siły spójności w wodzie są większe niż siły przylegania między wodą i szkłem.\nB. menisk wypukły, ponieważ siły spójności w wodzie są mniejsze niż siły przylegania między wodą i szkłem.\nC. menisk wklęsły, ponieważ siły spójności w wodzie są większe niż siły przylegania między wodą i szkłem.\nD. menisk wklęsły, ponieważ siły spójności w wodzie są mniejsze niż siły przylegania między wodą i szkłem.",
                                "solution": null
                            }
                        ]
                    }
                ]
            },
            {
                "id": "k-dzial-2",
                "number": 2,
                "title": "Dział 2: Kinematyka",
                "icon": "🚀",
                "badge": "3 Tematy • 28 Zadań",
                "desc": "Prędkość średnia, droga i czas, względność ruchu na rzece i torach, ruch jednostajnie zmienny i wykresy.",
                "subchapters": [
                    {
                        "id": "k-sub-2-1",
                        "number": "2.1",
                        "title": "Temat 2.1: Prędkość średnia, droga i czas",
                        "shortTitle": "2.1 Prędkość średnia",
                        "icon": "⏱️",
                        "desc": "Przeliczanie jednostek prędkości, etapy drogi i czasu, pociągi w tunelach, wskazówki zegara.",
                        "formulaCheat": "v_{sr} = \\frac{s_{calk}}{t_{calk}}, \\quad v_{sr} = \\frac{2 v_1 v_2}{v_1 + v_2} \\text{ (dla równych dróg)}",
                        "tasks": [
                            {
                                "id": "kk-zad-13",
                                "number": 13,
                                "points": 1,
                                "title": "Zadanie 13. (1 pkt) Porównanie trzech prędkości",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Przeliczanie jednostek",
                                    "Prędkość"
                                ],
                                "problem": "Podane są trzy prędkości: $v_1 = 270\\text{ m/min}$, $v_2 = 15\\text{ km/h}$ i $v_3 = 480\\text{ cm/s}$.\n\nPrędkości te spełniają nierówności:\n\nA. $v_1 > v_2 > v_3$\nB. $v_1 < v_2 < v_3$\nC. $v_2 > v_1 > v_3$\nD. $v_2 < v_1 < v_3$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-14",
                                "number": 14,
                                "points": 1,
                                "title": "Zadanie 14. (1 pkt) Trzech turystów na pustyni",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Przeliczanie jednostek",
                                    "Prędkość"
                                ],
                                "problem": "Trzech turystów wędruje po pustyni. Pierwszy z prędkością $v_1 = 90\\text{ m/min}$, drugi z $v_2 = 5\\text{ km/h}$, trzeci z $v_3 = 160\\text{ cm/s}$.\n\nPrędkości te spełniają zależność:\n\nA. $v_1 < v_2 < v_3$\nB. $v_1 > v_2 > v_3$\nC. $v_2 < v_1 < v_3$\nD. $v_2 > v_1 > v_3$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-15",
                                "number": 15,
                                "points": 1,
                                "title": "Zadanie 15. (1 pkt) Piesza wycieczka Janka",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Przeliczanie jednostek",
                                    "Prędkość"
                                ],
                                "problem": "Na pieszej wycieczce Janek podzielił trasę na trzy części. Pierwszy odcinek trasy przebył z prędkością o wartości $v_1 = 80\\text{ m/min}$, drugi z $v_2 = 6\\text{ km/h}$, trzeci z $v_3 = 150\\text{ cm/s}$.\n\nPrędkości te spełniają nierówność:\n\nA. $v_1 < v_2 < v_3$\nB. $v_1 > v_2 > v_3$\nC. $v_2 < v_1 < v_3$\nD. $v_2 > v_3 > v_1$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-16",
                                "number": 16,
                                "points": 1,
                                "title": "Zadanie 16. (1 pkt) Wnioskowanie o charakterze ruchu",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Ruch jednostajny",
                                    "Logika fizyczna"
                                ],
                                "problem": "Samochód w ciągu każdej z kolejnych 5 godzin ruchu prostoliniowego przebywał po 70 km. Na podstawie tej informacji możemy twierdzić, że samochód:\n\nA. poruszał się ruchem jednostajnym prostoliniowym\nB. poruszał się ruchem niejednostajnym prostoliniowym\nC. mógł poruszać się ruchem jednostajnym prostoliniowym\nD. nie poruszał się z przyspieszeniem w żadnym momencie.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-17",
                                "number": 17,
                                "points": 1,
                                "title": "Zadanie 17. (1 pkt) Doświadczenie z zależnością s(t)",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Ruch jednostajny",
                                    "Doświadczenie"
                                ],
                                "problem": "Podczas wykonywania doświadczenia, w którym badano zależność przebytej drogi od czasu trwania ruchu stwierdzono, że w takich samych odstępach czasu ciało przebywało takie same drogi. Na tej podstawie wyciągnięto wniosek, że ciało poruszało się ruchem:\n\nA. jednostajnym, ponieważ 1. droga przebyta przez ciało nie zależała od czasu trwania ruchu.\nB. jednostajnie przyspieszonym, ponieważ 2. droga przebyta przez ciało była wprost proporcjonalna do czasu trwania ruchu.\nC. jednostajnie opóźnionym, ponieważ 3. wartość prędkości ciała była wprost proporcjonalna do czasu trwania ruchu.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-18",
                                "number": 18,
                                "points": 1,
                                "title": "Zadanie 18. (1 pkt) Droga samochodu w 10 minut",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Droga",
                                    "Prędkość",
                                    "Czas"
                                ],
                                "problem": "Samochód jedzie z prędkością $120\\text{ km/h}$. W ciągu 10 minut przebywa drogę:\n\nA. $20\\,000\\text{ m}$.\nB. $12\\,000\\text{ m}$.\nC. $5\\,000\\text{ m}$.\nD. $1\\,200\\text{ m}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-19",
                                "number": 19,
                                "points": 1,
                                "title": "Zadanie 19. (1 pkt) Wyjazd pociągu z tunelu",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Długość pociągu",
                                    "Tunel",
                                    "Czas mijania"
                                ],
                                "problem": "Pociąg (jego przedni zderzak) o długości $200\\text{ m}$ wjeżdża do tunelu o długości $300\\text{ m}$, jadąc ze stałą prędkością o wartości $10\\text{ m/s}$.\n\nOznacza to, że pociąg całkowicie wyjedzie z tunelu po czasie:\n\nA. $20\\text{ s}$.\nB. $30\\text{ s}$.\nC. $50\\text{ s}$.\nD. $70\\text{ s}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-20",
                                "number": 20,
                                "points": 1,
                                "title": "Zadanie 20. (1 pkt) Prędkość końca wskazówki minutowej",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Ruch po okręgu",
                                    "Zegar wieżowy"
                                ],
                                "problem": "Wskazówka minutowa dużego zegara wieżowego ma długość $4{,}2\\text{ m}$.\n\nWartość prędkości jej końca wynosi:\n\nA. $1{,}1\\text{ m/s}$,\nB. $0{,}55\\text{ m/s}$,\nC. $0{,}44\\text{ m/s}$,\nD. $0{,}0073\\text{ m/s}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-21",
                                "number": 21,
                                "points": 3,
                                "title": "Zadanie 21. (3 pkt) Podróż na biwak leśną drogą",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Prędkość średnia",
                                    "Zadanie otwarte",
                                    "Równania czasu"
                                ],
                                "problem": "Samochód jechał po szosie z pewną prędkością $v$. Gdy dojechał do skrzyżowania z leśną drogą (punkt $S$), zegar pokazywał godzinę 9:58 (czas $t_1$). Na leśnej drodze samochód musiał zwolnić i do punktu $T$ (oznaczmy odległość $ST$ przez $l$) jechał o 20% wolniej niż po szosie, a następnie, do biwaku (punkt $B$), oddalonego od punktu $T$ również o $l$, aż o 50% wolniej niż po szosie. W chwili dojazdu do biwaku zegar pokazywał godzinę 11:11 (czas $t_2$).\n\nJaką godzinę (czas $t_x$) pokazywał ten zegar w chwili mijania punktu $T$?",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-22",
                                "number": 22,
                                "points": 3,
                                "title": "Zadanie 22. (3 pkt) Dwie grupy turystów na tej samej trasie",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Prędkość średnia",
                                    "Połowa drogi vs połowa czasu"
                                ],
                                "problem": "Dwie grupy turystów wyruszyły na tę samą trasę. Pierwsza grupa przebyła pierwszą połowę drogi z prędkością o wartości $v_1$, a drugą - z prędkością o wartości $v_2$. Druga grupa pierwszą połowę czasu swojego ruchu wędrowała z prędkością o wartości $v_1$, a drugą połowę czasu swojego ruchu z prędkością o wartości $v_2$.\n\nKtóra grupa przeszła całą trasę szybciej (w krótszym czasie)? Odpowiedź uzasadnij.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-2-2",
                        "number": "2.2",
                        "title": "Temat 2.2: Względność ruchu",
                        "shortTitle": "2.2 Względność ruchu",
                        "icon": "🚆",
                        "desc": "Składanie prędkości, ruch z prądem i pod prąd, mijanie pociągów, schody ruchome.",
                        "formulaCheat": "\\vec{v}_{wzgl} = \\vec{v}_1 - \\vec{v}_2, \\quad v_{\\text{z prądem}} = v_w + v_r, \\quad v_{\\text{pod prąd}} = v_w - v_r",
                        "tasks": [
                            {
                                "id": "kk-zad-23",
                                "number": 23,
                                "points": 1,
                                "title": "Zadanie 23. (1 pkt) Mijanie się dwóch pociągów",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Względność ruchu",
                                    "Prędkość względna"
                                ],
                                "problem": "Pociąg pośpieszny jadący z Łodzi do Warszawy poruszający się na pewnym odcinku trasy z szybkością $160\\text{ km/h}$ mija się z pociągiem osobowym, jadącym z Warszawy do Łodzi z szybkością $80\\text{ km/h}$.\n\nW chwili mijania się pociągów szybkość pociągu pośpiesznego względem osobowego, w porównaniu z szybkością pociągu osobowego względem pospiesznego, jest:\n\nA. taka sama.\nB. dwa razy mniejsza.\nC. dwa razy większa.\nD. trzy razy większa.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-24",
                                "number": 24,
                                "points": 1,
                                "title": "Zadanie 24. (1 pkt) Spacer Zosi po pokładzie statku",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Względność ruchu",
                                    "Dodawanie wektorowe"
                                ],
                                "problem": "Zosia płynie statkiem poruszającym się z prędkością $10\\text{ km/h}$ względem brzegu. W pewnym momencie rozpoczęła spacer po pokładzie z prędkością $5\\text{ km/h}$ względem niego.\n\nWynika stąd, że wartość prędkości Zosi względem brzegu ($v$) spełniała na pewno warunek:\n\nA. $v = 15\\text{ km/h}$\nB. $v = 5\\text{ km/h}$.\nC. $5\\text{ km/h} < v < 15\\text{ km/h}$\nD. $5\\text{ km/h} \\le v \\le 15\\text{ km/h}$",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-25",
                                "number": 25,
                                "points": 1,
                                "title": "Zadanie 25. (1 pkt) Pływak płynący pod prąd rzeki",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Ruch na rzece",
                                    "Względność ruchu"
                                ],
                                "problem": "Pływak płynie pod prąd rzeki. Wartość prędkości pływaka względem wody wynosi $1{,}5\\text{ m/s}$, a wartość prędkości wody w nurcie rzeki względem brzegu wynosi $0{,}5\\text{ m/s}$.\n\nWartość prędkości pływaka względem brzegu wynosi:\n\nA. $0{,}5\\text{ m/s}$.\nB. $1{,}0\\text{ m/s}$.\nC. $1{,}5\\text{ m/s}$.\nD. $2{,}0\\text{ m/s}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-26",
                                "number": 26,
                                "points": 1,
                                "title": "Zadanie 26. (1 pkt) Dym z komina parowozu",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Względność ruchu",
                                    "Kierunek wiatru"
                                ],
                                "problem": "Parowóz porusza się na wschód z prędkością o wartości $18\\text{ km/h}$. Dym z jego komina unosi się pionowo w górę.\n\nOznacza to, że wartość prędkości wiatru i jej kierunek są odpowiednio:\n\nA. $18\\text{ km/h}$ na zachód.\nB. $36\\text{ km/h}$ na wschód.\nC. $18\\text{ km/h}$ na wschód.\nD. $36\\text{ km/h}$ na zachód.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-27",
                                "number": 27,
                                "points": 1,
                                "title": "Zadanie 27. (1 pkt) Schody ruchome w metrze",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Względność ruchu",
                                    "Schody ruchome"
                                ],
                                "problem": "Najdłuższe schody ruchome w Polsce mają długość $36\\text{ m}$, a stojący na nich człowiek pokonuje tę odległość w czasie $72\\text{ s}$.\n\nZ jaką prędkością względem jadących w górę schodów musi poruszać się człowiek, żeby z dołu do góry dostać się w ciągu $36\\text{ s}$?:\n\nA. $0{,}5\\text{ m/s}$\nB. $1\\text{ m/s}$\nC. $1{,}5\\text{ m/s}$\nD. $2\\text{ m/s}$",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-28",
                                "number": 28,
                                "points": 1,
                                "title": "Zadanie 28. (1 pkt) Dwie motorówki płynące naprzeciwko siebie",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Ruch na rzece",
                                    "Prędkość względna"
                                ],
                                "problem": "Dwie motorówki płyną naprzeciwko siebie, wzdłuż rzeki, płynącej z prędkością $2\\text{ m/s}$. Prędkości motorówek względem wody wynoszą odpowiednio $3\\text{ m/s}$ i $4\\text{ m/s}$.\n\nOd spotkania motorówek do momentu, w którym ich odległość wyniesie $84\\text{ m}$, upłynie:\n\nA. $12\\text{ s}$.\nB. $21\\text{ s}$,\nC. $28\\text{ s}$,\nD. $42\\text{ s}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-29",
                                "number": 29,
                                "points": 1,
                                "title": "Zadanie 29. (1 pkt) Wyścig dwóch motorówek z prądem rzeki",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Wyprzedzanie",
                                    "Ruch na rzece"
                                ],
                                "problem": "Dwie motorówki ścigają się płynąc z prądem rzeki, płynącej z prędkością $2\\text{ m/s}$ względem brzegu. Prędkości motorówek względem wody wynoszą odpowiednio $3\\text{ m/s}$ i $4\\text{ m/s}$, przy czym początkowo, ze względu na wcześniejszy start, prowadziła wolniejsza z nich. W pewnej chwili motorówki zrównały się i szybsza wyprzedziła wolniejszą.\n\nCzas, który upłynie od spotkania motorówek, do momentu, w którym ich odległość wyniesie $84\\text{ m}$ to:\n\nA. $12\\text{ s}$.\nB. $21\\text{ s}$,\nC. $42\\text{ s}$,\nD. $84\\text{ s}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-30",
                                "number": 30,
                                "points": 1,
                                "title": "Zadanie 30. (1 pkt) Pendolino wyprzedza pociąg osobowy",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Wyprzedzanie",
                                    "Długość ciał",
                                    "Prędkość względna"
                                ],
                                "problem": "Pociąg pendolino, jadący z prędkością o wartości $160\\text{ km/h}$, zaczął wyprzedzać poruszający się po sąsiednim torze w tę samą stronę, z prędkością $105\\text{ km/h}$, pociąg osobowy. Długość pociągu pendolino wynosi $400\\text{ m}$, a długość pociągu osobowego $150\\text{ m}$.\n\nCzas trwania całkowitego wyprzedzania (od chwili, gdy przód pociągu pendolino znalazł się na wysokości końca pociągu osobowego do chwili, gdy koniec pociągu pendolino minął przód pociągu osobowego) wyniósł około:\n\nA. $3\\text{ s}$.\nB. $7{,}5\\text{ s}$.\nC. $14\\text{ s}$.\nD. $36\\text{ s}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-31",
                                "number": 31,
                                "points": 5,
                                "title": "Zadanie 31. (5 pkt) Prędkość średnia statku na całej trasie",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Prędkość średnia",
                                    "Rzeka"
                                ],
                                "problem": "Statek spacerowy, kursujący na stałej trasie, płynął w górę rzeki z prędkością średnią $v_1$, a wracał z prędkością średnią $v_2$. Prędkości te liczone były względem brzegu.\n\nWyznacz prędkość średnią statku względem brzegu na całej trasie.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-2-3",
                        "number": "2.3",
                        "title": "Temat 2.3: Ruch zmienny i przyspieszenie",
                        "shortTitle": "2.3 Ruch zmienny",
                        "icon": "🏎️",
                        "desc": "Przyspieszenie, droga w kolejnych sekundach, hamowanie, analiza wykresów v(t).",
                        "formulaCheat": "a = \\frac{\\Delta v}{\\Delta t}, \\quad s = v_0 t \\pm \\frac{a t^2}{2}, \\quad s_n = \\frac{a}{2}(2n - 1), \\quad v^2 - v_0^2 = 2as",
                        "tasks": [
                            {
                                "id": "kk-zad-32",
                                "number": 32,
                                "points": 1,
                                "title": "Zadanie 32. (1 pkt) Przyspieszenie bolidu Formuły 1",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Przyspieszenie",
                                    "Ruch jednostajnie przyspieszony"
                                ],
                                "problem": "Podczas startu w wyścigu Formuły 1 samochód rozpędził się do szybkości $100\\text{ km/h}$ w czasie $1{,}7$ sekundy.\n\nŚrednie przyspieszenie, z jakim w tym czasie poruszał się ten samochód, miało wartość w przybliżeniu:\n\nA. $59\\text{ m/s}^2$\nB. $16\\text{ m/s}^2$\nC. $5{,}9\\text{ m/s}^2$\nD. $1{,}6\\text{ m/s}^2$",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-33",
                                "number": 33,
                                "points": 1,
                                "title": "Zadanie 33. (1 pkt) Droga w trzeciej sekundzie i po 3 sekundach",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Droga w n-tej sekundzie",
                                    "Ruch jednostajnie przyspieszony"
                                ],
                                "problem": "Spoczywające początkowo ciało, zaczyna poruszać się ze stałym przyspieszeniem. W ciągu trzeciej sekundy od chwili rozpoczęcia ruchu, przebyło ono drogę $5\\text{ m}$.\n\nPo upływie $3\\text{ s}$ od chwili rozpoczęcia ruchu, ciało to przebyło drogę:\n\nA. $5\\text{ m}$,\nB. $7\\text{ m}$,\nC. $9\\text{ m}$,\nD. $11\\text{ m}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-34",
                                "number": 34,
                                "points": 1,
                                "title": "Zadanie 34. (1 pkt) Droga w 3 pierwszych sekundach a w trzeciej",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Droga w n-tej sekundzie",
                                    "Ruch jednostajnie przyspieszony"
                                ],
                                "problem": "Ciało, spoczywające początkowo, zaczyna poruszać się ze stałym przyspieszeniem. W ciągu pierwszych trzech sekund od chwili rozpoczęcia ruchu przebyło ono drogę $9\\text{ m}$.\n\nW trzeciej sekundzie od chwili rozpoczęcia ruchu, ciało to przebyło drogę:\n\nA. $4{,}5\\text{ m}$,\nB. $7\\text{ m}$,\nC. $9\\text{ m}$,\nD. $5\\text{ m}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-35",
                                "number": 35,
                                "points": 1,
                                "title": "Zadanie 35. (1 pkt) Droga hamowania klocka z tarciem",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Hamowanie",
                                    "Ruch opóźniony",
                                    "Czas zatrzymania"
                                ],
                                "problem": "Klockowi znajdującemu się na poziomej powierzchni nadano prędkość o wartości $4{,}0\\text{ m/s}$. W wyniku działania sił tarcia klocek zaczął poruszać się (hamował) z przyspieszeniem o wartości $1{,}0\\text{ m/s}^2$.\n\nW ciągu $5{,}0\\text{ s}$ od chwili nadania mu prędkości klocek przebędzie drogę:\n\nA. $7{,}5\\text{ m}$.\nB. $8{,}0\\text{ m}$.\nC. $20{,}0\\text{ m}$.\nD. $32{,}5\\text{ m}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-36",
                                "number": 36,
                                "points": 1,
                                "title": "Zadanie 36. (1 pkt) Wykres prędkości narciarza na stoku",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Wykres v(t)",
                                    "Przyspieszenie",
                                    "Interpretacja graficzna"
                                ],
                                "chartSvg": "<svg viewBox=\"0 0 500 270\" class=\"physics-chart\" style=\"max-width:480px; width:100%; height:auto; display:block; margin:20px auto; background:rgba(15,23,42,0.65); border-radius:12px; border:1px solid rgba(255,255,255,0.12); padding:16px;\">\n  <defs>\n    <marker id=\"axis-arrow\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#cbd5e1\" />\n    </marker>\n  </defs>\n  <line x1=\"70\" y1=\"70\" x2=\"230\" y2=\"70\" stroke=\"#94a3b8\" stroke-dasharray=\"4,4\" stroke-width=\"1.3\" />\n  <line x1=\"230\" y1=\"70\" x2=\"230\" y2=\"210\" stroke=\"#94a3b8\" stroke-dasharray=\"4,4\" stroke-width=\"1.3\" />\n  <line x1=\"310\" y1=\"70\" x2=\"310\" y2=\"210\" stroke=\"#94a3b8\" stroke-dasharray=\"4,4\" stroke-width=\"1.3\" />\n  <line x1=\"70\" y1=\"210\" x2=\"435\" y2=\"210\" stroke=\"#cbd5e1\" stroke-width=\"1.8\" marker-end=\"url(#axis-arrow)\" />\n  <line x1=\"70\" y1=\"210\" x2=\"70\" y2=\"35\" stroke=\"#cbd5e1\" stroke-width=\"1.8\" marker-end=\"url(#axis-arrow)\" />\n  <text x=\"70\" y=\"24\" fill=\"#f8fafc\" font-family=\"'Plus Jakarta Sans', Inter, sans-serif\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">v[m/s]</text>\n  <text x=\"445\" y=\"214\" fill=\"#f8fafc\" font-family=\"'Plus Jakarta Sans', Inter, sans-serif\" font-size=\"14\" font-weight=\"700\">t[s]</text>\n  <line x1=\"65\" y1=\"140\" x2=\"70\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.8\" />\n  <line x1=\"65\" y1=\"70\" x2=\"70\" y2=\"70\" stroke=\"#cbd5e1\" stroke-width=\"1.8\" />\n  <text x=\"58\" y=\"145\" fill=\"#cbd5e1\" font-family=\"'Plus Jakarta Sans', Inter, sans-serif\" font-size=\"13\" font-weight=\"600\" text-anchor=\"end\">10</text>\n  <text x=\"58\" y=\"75\" fill=\"#cbd5e1\" font-family=\"'Plus Jakarta Sans', Inter, sans-serif\" font-size=\"13\" font-weight=\"600\" text-anchor=\"end\">20</text>\n  <line x1=\"150\" y1=\"210\" x2=\"150\" y2=\"215\" stroke=\"#cbd5e1\" stroke-width=\"1.8\" />\n  <line x1=\"230\" y1=\"210\" x2=\"230\" y2=\"215\" stroke=\"#cbd5e1\" stroke-width=\"1.8\" />\n  <line x1=\"310\" y1=\"210\" x2=\"310\" y2=\"215\" stroke=\"#cbd5e1\" stroke-width=\"1.8\" />\n  <line x1=\"390\" y1=\"210\" x2=\"390\" y2=\"215\" stroke=\"#cbd5e1\" stroke-width=\"1.8\" />\n  <text x=\"150\" y=\"234\" fill=\"#cbd5e1\" font-family=\"'Plus Jakarta Sans', Inter, sans-serif\" font-size=\"13\" font-weight=\"600\" text-anchor=\"middle\">10</text>\n  <text x=\"230\" y=\"234\" fill=\"#cbd5e1\" font-family=\"'Plus Jakarta Sans', Inter, sans-serif\" font-size=\"13\" font-weight=\"600\" text-anchor=\"middle\">20</text>\n  <text x=\"310\" y=\"234\" fill=\"#cbd5e1\" font-family=\"'Plus Jakarta Sans', Inter, sans-serif\" font-size=\"13\" font-weight=\"600\" text-anchor=\"middle\">30</text>\n  <text x=\"390\" y=\"234\" fill=\"#cbd5e1\" font-family=\"'Plus Jakarta Sans', Inter, sans-serif\" font-size=\"13\" font-weight=\"600\" text-anchor=\"middle\">40</text>\n  <polyline points=\"70,210 230,70 310,70 390,210\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</svg>",
                                "problem": "Na wykresie poniżej przedstawiono zależność prędkości narciarza podczas zjeżdżania ze stoku góry w funkcji czasu.\n\nWartość bezwzględna przyspieszenia podczas hamowania była w porównaniu z przyspieszeniem podczas przyspieszania:\n\nA. równa temu przyspieszeniu.\nB. dwa razy większa.\nC. dwa razy mniejsza.\nD. cztery razy mniejsza.\n\n(Dodatkowe pytania do wykresu: Droga całkowita wynosi: C. 600m; Wartość wypadkowej sił: D. dwa razy mniejsza niż podczas hamowania).",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-37",
                                "number": 37,
                                "points": 3,
                                "title": "Zadanie 37. (3 pkt) Zagrożenie zderzeniem dwóch pociągów",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Hamowanie",
                                    "Ruch względny",
                                    "Zderzenie"
                                ],
                                "problem": "Maszynista pociągu pospiesznego jadącego z prędkością $v_1 = 30{,}0\\text{ m/s}$ z przerażeniem zauważył, że przed nim, w odległości $d = 180\\text{ m}$, jedzie w tę samą stronę i po tym samym torze pociąg towarowy. Prędkość pociągu towarowego była stała i wynosiła $v_2 = 9{,}0\\text{ m/s}$. Maszynista włączył natychmiast układ hamulcowy, co spowodowało, że jego pociąg poruszał się (hamował) z przyspieszeniem o wartości $a = 1{,}2\\text{ m/s}^2$.\n\nNa podstawie odpowiednich rozumowań i obliczeń ustal, czy dojdzie do zderzenia tych pociągów.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-38",
                                "number": 38,
                                "points": 5,
                                "title": "Zadanie 38. (5 pkt) Samochód elektryczny przed znakiem",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Ruch opóźniony",
                                    "Zatrzymanie"
                                ],
                                "problem": "W chwili, gdy wyczerpał się akumulator, samochód elektryczny poruszał się z prędkością $v = 16\\text{ m/s}$. Wskutek działania oporów ruchu zaczął się on poruszać ruchem jednostajnie opóźnionym z przyspieszeniem (zwanym w tym przypadku opóźnieniem) o wartości $a = 2\\text{ m/s}^2$. W chwili rozpoczęcia hamowania samochód znajdował się w odległości $L = 80\\text{ m}$ od znaku drogowego.\n\nOblicz odległość $S$ samochodu od tego znaku drogowego po czasie $t_1 = 10\\text{ s}$ od chwili rozpoczęcia hamowania.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-39",
                                "number": 39,
                                "points": 5,
                                "title": "Zadanie 39. (5 pkt) Trzy etapy ruchu ciała",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Trzy etapy ruchu",
                                    "Ruch zmienny"
                                ],
                                "problem": "Ciało, pozostające początkowo w spoczynku, rusza z miejsca i przebywa odległość $12{,}5\\text{ m}$ z przyspieszeniem $1\\text{ m/s}^2$. Następnie porusza się ruchem jednostajnym prostoliniowym przez $15\\text{ s}$ i wreszcie, poruszając się ruchem jednostajnie opóźnionym, przebywa $20\\text{ m}$, do całkowitego zatrzymania się.\n\nOblicz prędkość ciała podczas ruchu jednostajnego prostoliniowego oraz całkowity czas ruchu ciała.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-40",
                                "number": 40,
                                "points": 5,
                                "title": "Zadanie 40. (5 pkt) Rozpędzanie od 40 km/h do 90 km/h",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Przyspieszenie",
                                    "Równanie bezczasowe"
                                ],
                                "problem": "Kierowca samochodu jadącego z szybkością $40\\text{ km/h}$ zaczął przyspieszać i po przejechaniu $100\\text{ m}$ szybkość samochodu wzrosła do $90\\text{ km/h}$.\n\nOblicz przyspieszenie samochodu przyjmując, że samochód podczas zwiększania szybkości poruszał się ruchem jednostajnie przyspieszonym.",
                                "solution": null
                            }
                        ]
                    }
                ]
            },
            {
                "id": "k-dzial-3",
                "number": 3,
                "title": "Dział 3: Dynamika",
                "icon": "⚖️",
                "badge": "4 Tematy • 12 Zadań",
                "desc": "Zasady dynamiki Newtona, siła wypadkowa, siły bezwładności w windzie, III zasada dynamiki i naprężenia nici, tarcie.",
                "subchapters": [
                    {
                        "id": "k-sub-3-1",
                        "number": "3.1",
                        "title": "Temat 3.1: Zasady dynamiki Newtona i siła wypadkowa",
                        "shortTitle": "3.1 Zasady dynamiki",
                        "icon": "🍎",
                        "desc": "II zasada dynamiki, siła wypadkowa i opory ruchu pociągu, pomiary siłomierzem.",
                        "formulaCheat": "F_w = m \\cdot a, \\quad F_{\\text{ciągu}} - F_{\\text{oporu}} = m \\cdot a, \\quad F_g = m \\cdot g",
                        "tasks": [
                            {
                                "id": "kk-zad-41",
                                "number": 41,
                                "points": 1,
                                "title": "Zadanie 41. (1 pkt) Siła 5 hN i masa 20 mg",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "Przedrostki SI",
                                    "II zasada dynamiki"
                                ],
                                "problem": "Na ciało działa siła wypadkowa o wartości $5\\text{ hN}$. Masa tego ciała ma wartość $20\\text{ mg}$.\n\nPrzyspieszenie tego ciała ma wartość:\n\nA. $25\\text{ Mm/s}^2$\nB. $25\\text{ m/s}^2$\nC. $0{,}4\\text{ km/s}^2$\nD. $2{,}5\\text{ Mm/s}^2$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-42",
                                "number": 42,
                                "points": 1,
                                "title": "Zadanie 42. (1 pkt) Niezrównoważona siła i cyfry znaczące",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "II zasada dynamiki",
                                    "Cyfry znaczące"
                                ],
                                "problem": "Zmierzono przyspieszenie ciała i wyniosło ono $3{,}2\\text{ m/s}^2$. Następnie ciało zważono - okazało się, że jego masa wynosi $21{,}6\\text{ kg}$.\n\nWynika stąd, że na ciało w czasie przyspieszania działała niezrównoważona siła o wartości:\n\nA. $70\\text{ N}$.\nB. $69{,}12\\text{ N}$.\nC. $69{,}1\\text{ N}$.\nD. $69\\text{ N}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-43",
                                "number": 43,
                                "points": 1,
                                "title": "Zadanie 43. (1 pkt) Siła ciągu elektrowozu ze składem 500 t",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "Opory ruchu",
                                    "Siła ciągu",
                                    "II zasada dynamiki"
                                ],
                                "problem": "Na poziomym, prostoliniowym torze na skład wagonów o masie $500\\text{ t}$ działa stała siła oporów ruchu. Aby ten skład poruszał się ze stałą prędkością, elektrowóz musi ciągnąć go siłą o wartości $50\\text{ kN}$.\n\nAby ten skład poruszał się z przyspieszeniem $0{,}5\\text{ m/s}^2$, elektrowóz musi ciągnąć go siłą o wartości:\n\nA. $200\\text{ kN}$.\nB. $250\\text{ kN}$.\nC. $300\\text{ kN}$.\nD. $500\\text{ kN}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-44",
                                "number": 44,
                                "points": 3,
                                "title": "Zadanie 44. (3 pkt) Stosunek mas na siłomierzu",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Siłomierz",
                                    "Ciężar"
                                ],
                                "problem": "Po zawieszeniu pewnego ciężarka na siłomierzu na jego skali odczytano wartość $1{,}5\\text{ N}$. Po zawieszeniu innego ciężarka odczytano na skali siłomierza wartość $9\\text{ N}$.\n\nWykaż, wykonując odpowiednie obliczenia, że masa drugiego ciężarka była 6 razy większa od masy ciężarka zawieszonego na siłomierzu w sytuacji pierwszej.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-3-2",
                        "number": "3.2",
                        "title": "Temat 3.2: Siły bezwładności i waga",
                        "shortTitle": "3.2 Siły bezwładności",
                        "icon": "🛗",
                        "desc": "Waga w ruszającej i hamującej windzie, przeciążenie i niedociążenie, układ nieinercjalny.",
                        "formulaCheat": "N = m(g + a) \\text{ (w górę z przysp.)}, \\quad N = m(g - a) \\text{ (w dół z przysp.)}, \\quad N = mg \\text{ (ruch jednostajny)}",
                        "tasks": [
                            {
                                "id": "kk-zad-45",
                                "number": 45,
                                "points": 1,
                                "title": "Zadanie 45. (1 pkt) Wskazanie wagi łazienkowej w windzie",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "Siła bezwładności",
                                    "Winda",
                                    "Przeciążenie"
                                ],
                                "problem": "Winda w budynku porusza się ze stałą prędkością (jednakową w górę i w dół) poza krótkimi okresami czasu tuż po ruszeniu oraz tuż przed zatrzymaniem się. Na ustawionej w windzie wadze łazienkowej stoi dziecko. W nieruchomej windzie waga wskazuje $20\\text{ kg}$. W pewnej chwili winda ruszyła w górę.\n\nWskaż poprawne zachowanie wagi podczas ruchu windy.\n\nA. Początkowo wskazanie wagi zmalało, a następnie wróciło do wartości $20\\text{ kg}$.\nB. Początkowo wskazanie wagi wzrosło, a następnie wróciło do wartości $20\\text{ kg}$.\nC. Przez cały czas trwania ruchu windy wskazanie wagi było większe niż $20\\text{ kg}$.\nD. Przez cały czas trwania ruchu windy wskazanie wagi było mniejsze niż $20\\text{ kg}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-46",
                                "number": 46,
                                "points": 1,
                                "title": "Zadanie 46. (1 pkt) Waga Dominiki przy jeździe windą w dół",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "Niedociążenie",
                                    "Winda",
                                    "Siła nacisku"
                                ],
                                "problem": "Dominika o masie ciała $50\\text{ kg}$, jadąc windą miała okazję zważyć się na wadze sprężynowej (wyskalowanej w N). Zaczęła obserwować wskazania wagi w zależności od przyspieszenia windy. Przyjmij, że $g = 10\\text{ m/s}^2$.\n\nWskazanie wagi w windzie poruszającej się z przyspieszeniem $1{,}0\\text{ m/s}^2$ skierowanym w dół wyniosło:\n\nA. $50\\text{ N}$.\nB. $450\\text{ N}$.\nC. $500\\text{ N}$.\nD. $550\\text{ N}$.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-3-3",
                        "number": "3.3",
                        "title": "Temat 3.3: Trzecia zasada dynamiki (naprężenia nici)",
                        "shortTitle": "3.3 III zasada dynamiki",
                        "icon": "🪢",
                        "desc": "Siła naprężenia nici/linki, akcja i reakcja, hak w ścianie vs przeciąganie liny.",
                        "formulaCheat": "\\vec{F}_{AB} = -\\vec{F}_{BA}, \\quad N_{\\text{linki}} = F_1 = F_2 \\text{ (lina w spoczynku)}",
                        "tasks": [
                            {
                                "id": "kk-zad-47",
                                "number": 47,
                                "points": 1,
                                "title": "Zadanie 47. (1 pkt) Janek i Staszek ciągnący linkę",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "III zasada dynamiki",
                                    "Naprężenie liny"
                                ],
                                "problem": "Janek i Staszek ciągną za dwa końce jednorodnej linki, która pozostaje nieruchoma. Gdy każdy z nich ciągnie za jeden koniec linki siłą o wartości $1\\text{ kN}$, ulega ona zerwaniu. Następnie linka (to co z niej pozostało) została przymocowana do haka w ścianie i Janek zaczyna ją ciągnąć sam, za drugi koniec.\n\nAby zerwać linkę Janek musi ją teraz ciągnąć siłą o wartości:\n\nA. $2\\text{ kN}$,\nB. $1\\text{ kN}$,\nC. $0{,}5\\text{ kN}$,\nD. której nie da się określić.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-48",
                                "number": 48,
                                "points": 1,
                                "title": "Zadanie 48. (1 pkt) Trener i Zosia ciągnący linkę z siłomierzem",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "III zasada dynamiki",
                                    "Siłomierz",
                                    "Naprężenie"
                                ],
                                "problem": "Zosia, która trenuje zapasy, przywiązała do haka w ścianie linkę i ciągnęła za jej drugi koniec za pomocą przywiązanego do niego siłomierza. Linka zerwała się, gdy siłomierz wskazywał siłę o wartości $1{,}0\\text{ kN}$. Następnie, za zerwany koniec linki złapał trener Zosi. Zosia i trener zaczęli ciągnąć linkę w przeciwne strony, ale ona pozostawała w spoczynku.\n\nZerwała się, gdy siłomierz na końcu ciągniętym przez Zosię wskazywał:\n\nA. $2{,}0\\text{ kN}$,\nB. $0{,}5\\text{ kN}$,\nC. $1{,}0\\text{ kN}$,\nD. siłę, której nie da się określić.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-49",
                                "number": 49,
                                "points": 1,
                                "title": "Zadanie 49. (1 pkt) Lina holownicza szybowca i dwa auta",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "Naprężenie liny",
                                    "II i III zasada dynamiki"
                                ],
                                "problem": "Lekka lina holownicza ulega zerwaniu, gdy nadaje szybowcowi o masie $500\\text{ kg}$ przyspieszenie $10\\text{ m/s}^2$. Pomijamy siłę oporu powietrza przy przyspieszaniu szybowca. Janek i Józek połączyli tą liną swoje identyczne samochody i próbują ją rozerwać, jadąc w przeciwne strony, gdy linka jest już naprężona.\n\nSamochód każdego z nich musi ciągnąć linę siłą o wartości co najmniej:\n\nA. $5\\text{ kN}$.\nB. $2{,}5\\text{ kN}$.\nC. $2{,}0\\text{ kN}$.\nD. $1{,}0\\text{ kN}$.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-3-4",
                        "number": "3.4",
                        "title": "Temat 3.4: Siły tarcia, oporu i siły grawitacyjne/magnetyczne",
                        "shortTitle": "3.4 Tarcie i opory",
                        "icon": "🧲",
                        "desc": "Tarcie statyczne i kinetyczne, magnes na lodówce i sejfie, opory ruchu klocka.",
                        "formulaCheat": "T \\le f \\cdot N, \\quad T = Q \\text{ (magnes na pionowej ścianie w spoczynku)}, \\quad F_w = 0 \\implies F = T",
                        "tasks": [
                            {
                                "id": "kk-zad-50",
                                "number": 50,
                                "points": 1,
                                "title": "Zadanie 50. (1 pkt) Magnes na pionowej ściance lodówki",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "Tarcie statyczne",
                                    "Siła nacisku",
                                    "Magnes"
                                ],
                                "problem": "Magnes o ciężarze $Q = 0{,}1\\text{ N}$ przywarł do płaskiej, pionowej, stalowej ścianki lodówki i jest w spoczynku. Ścianka przyciąga magnes z siłą $F = 5\\text{ N}$. Przyjmując, że wartość przyspieszenia grawitacyjnego $g = 10\\text{ m/s}^2$.\n\nWartość siły tarcia między ścianką a magnesem wynosi:\n\nA. $0{,}01\\text{ N}$\nB. $0{,}1\\text{ N}$\nC. $1\\text{ N}$\nD. $5\\text{ N}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-51",
                                "number": 51,
                                "points": 1,
                                "title": "Zadanie 51. (1 pkt) Klocek drewniany ciągnięty dynamometrem",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "I zasada dynamiki",
                                    "Opory ruchu",
                                    "Dynamometr"
                                ],
                                "problem": "Drewniany klocek o masie $0{,}2\\text{ kg}$ jest ciągnięty poziomo, ruchem jednostajnym prostoliniowym, po poziomej powierzchni za pomocą dynamometru. Dynamometr wskazuje $0{,}5\\text{ N}$.\n\nJeśli przyjąć wartość przyspieszenia ziemskiego $g = 10\\text{ m/s}^2$ to siła oporów ruchu działająca na klocek jest równa:\n\nA. $1{,}5\\text{ N}$,\nB. $2{,}0\\text{ N}$,\nC. $0{,}5\\text{ N}$,\nD. $2{,}5\\text{ N}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-52",
                                "number": 52,
                                "points": 1,
                                "title": "Zadanie 52. (1 pkt) Magnes przy górnej ściance sejfu",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "Siła magnetyczna",
                                    "Ciężar",
                                    "Nacisk"
                                ],
                                "problem": "Do górnej, poziomej ścianki wnętrza stalowego sejfu przywarł magnes o masie $m = 20\\text{ g}$. Magnes naciska na powierzchnię tej ścianki siłą o wartości $F = 2{,}0\\text{ N}$. Znajdź wartość siły $F_m$, związanej z magnetycznym oddziaływaniem magnesu i ścianki, jaką magnes przyciąga ściankę. Przyjmij wartość przyspieszenia ziemskiego $g = 10\\text{ m/s}^2$.\n\nA. $2{,}2\\text{ N}$\nB. $1{,}8\\text{ N}\nC. $2{,}0\\text{ N}\nD. $0{,}2\\text{ N}",
                                "solution": null
                            }
                        ]
                    }
                ]
            },
            {
                "id": "k-dzial-4",
                "number": 4,
                "title": "Dział 4: Hydrostatyka i Aerostatyka",
                "icon": "💧",
                "badge": "3 Tematy • 13 Zadań",
                "desc": "Ciśnienie ciał stałych i hydrostatyczne, prawo Archimedesa i pływanie ciał, topnienie lodu w wodzie słonej i słodkiej.",
                "subchapters": [
                    {
                        "id": "k-sub-4-1",
                        "number": "4.1",
                        "title": "Temat 4.1: Ciśnienie ciał stałych i ciśnienie hydrostatyczne",
                        "shortTitle": "4.1 Ciśnienie ciał stałych i cieczy",
                        "icon": "🧮",
                        "desc": "Definicja ciśnienia $p=F/S$, ciśnienie łyżew na lód, ostrze gwoździa, słup rtęci.",
                        "formulaCheat": "p = \\frac{F}{S}, \\quad p_h = \\rho \\cdot g \\cdot h, \\quad 1\\text{ Pa} = 1\\frac{\\text{N}}{\\text{m}^2}",
                        "tasks": [
                            {
                                "id": "kk-zad-53",
                                "number": 53,
                                "points": 1,
                                "title": "Zadanie 53. (1 pkt) Ciśnienie łyżew Antka na lód",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Ciśnienie",
                                    "Pole powierzchni",
                                    "Dwa buty"
                                ],
                                "problem": "Antek ma przyczepiony do każdego buta pasek metalu o długości $30\\text{ cm}$ i szerokości $1{,}0\\text{ mm}$ (pierwowzór łyżew). Masa Antka z „łyżwami” wynosi $60\\text{ kg}$. Przyjmij, że $g = 10\\text{ m/s}^2$. Buty Antka stykają się z lodem wyłącznie za pośrednictwem tych pasków metalu.\n\nOznacza to, że ciśnienie wywierane przez Antka na powierzchnię lodu wynosi:\n\nA. $2{,}0\\text{ GPa}$.\nB. $1{,}0\\text{ GPa}$.\nC. $2{,}0\\text{ MPa}$.\nD. $1{,}0\\text{ MPa}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-54",
                                "number": 54,
                                "points": 1,
                                "title": "Zadanie 54. (1 pkt) Ciśnienie ostrza gwoździa pod deską",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Ciśnienie",
                                    "Koło",
                                    "Przeliczanie jednostek"
                                ],
                                "problem": "Ostry koniec gwoździa ma w przybliżeniu kształt koła o średnicy $0{,}5\\text{ mm}$. Uderzając w łepek gwoździa siłą o wartości $50\\text{ N}$, wytwarzamy w miejscu zetknięcia ostrego końca gwoździa z deską ciśnienie o wartości około:\n\nA. $250\\text{ MPa}$.\nB. $60\\text{ MPa}$.\nC. $250\\text{ Pa}$.\nD. $60\\text{ Pa}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-55",
                                "number": 55,
                                "points": 1,
                                "title": "Zadanie 55. (1 pkt) Ciśnienie hydrostatyczne słupa rtęci",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Ciśnienie hydrostatyczne",
                                    "Cyfry znaczące"
                                ],
                                "problem": "Gęstość rtęci wynosi $13{,}55 \\times 10^3\\text{ kg/m}^3$, a przyspieszenie ziemskie $9{,}81\\text{ m/s}^2$. Na dnie naczynia wypełnionego rtęcią do wysokości $0{,}12\\text{ m}$, rtęć wytwarza ciśnienie hydrostatyczne:\n\nA. $15{,}95106\\text{ kPa}$.\nB. $16\\text{ kPa}$.\nC. $15{,}95\\text{ kPa}$.\nD. $16{,}0\\text{ kPa}$.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-4-2",
                        "number": "4.2",
                        "title": "Temat 4.2: Prawo Archimedesa i warunki pływania ciał",
                        "shortTitle": "4.2 Prawo Archimedesa i pływanie ciał",
                        "icon": "🪵",
                        "desc": "Siła wyporu, warunki pływania ciał, zanurzenie częściowe, topnienie lodu w wodzie słonej.",
                        "formulaCheat": "F_w = \\rho_c \\cdot g \\cdot V_z, \\quad \\frac{V_z}{V} = \\frac{\\rho_{\\text{ciała}}}{\\rho_c} \\implies \\rho_{\\text{ciała}} = \\frac{V_z}{V} \\rho_c",
                        "tasks": [
                            {
                                "id": "kk-zad-56",
                                "number": 56,
                                "points": 1,
                                "title": "Zadanie 56. (1 pkt) Pień drzewa unoszący się na jeziorze",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Prawo Archimedesa",
                                    "Warunki pływania"
                                ],
                                "problem": "Na powierzchni jeziora nieruchomo unosi się częściowo zanurzony pień drzewa. Oznacza to, że:\n\nA. na pień nie działa żadna siła,\nB. siła wyporu działająca na pień jest większa od jego ciężaru,\nC. gęstość drewna jest większa niż gęstość wody,\nD. gęstość drewna jest mniejsza niż gęstość wody.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-57",
                                "number": 57,
                                "points": 1,
                                "title": "Zadanie 57. (1 pkt) Namoknięty pień na dnie jeziora",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Warunki tonięcia",
                                    "Gęstość"
                                ],
                                "problem": "Na dnie jeziora spoczywa nieruchomo, zanurzony całkowicie, namoknięty pień drzewa. Jego uniesienie z zajmowanego położenia wymaga przyłożenia sporej siły skierowanej do góry. Oznacza to, że:\n\nA. na pień nie działa żadna siła,\nB. siła wyporu działająca na pień jest równa jego ciężarowi,\nC. gęstość pnia jest większa niż gęstość wody,\nD. gęstość pnia jest mniejsza niż gęstość wody.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-58",
                                "number": 58,
                                "points": 1,
                                "title": "Zadanie 58. (1 pkt) Ciało unosi się wewnątrz cieczy bez ruchu",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Pływanie wewnątrz cieczy",
                                    "Gęstość"
                                ],
                                "problem": "W jednorodnej cieczy, w dużym naczyniu, unosi się bez ruchu całkowicie zanurzone ciało. Oznacza to, że:\n\nA. średnia gęstość ciała jest mniejsza od gęstości cieczy.\nB. średnia gęstość ciała jest równa gęstości cieczy.\nC. średnia gęstość ciała jest większa od gęstości cieczy.\nD. na to ciało nie działa żadna siła.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-59",
                                "number": 59,
                                "points": 1,
                                "title": "Zadanie 59. (1 pkt) Kulka i walec w cieczy o gęstości 1,5 g/cm³",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Gęstość brył",
                                    "Warunki pływania"
                                ],
                                "problem": "Do cieczy o gęstości $1{,}5\\text{ g/cm}^3$ wrzucono kulkę o średnicy $1\\text{ cm}$ i masie $1\\text{ g}$ oraz walec o średnicy $1\\text{ cm}$, wysokości $1\\text{ cm}$ i masie $1\\text{ g}$.\n\nWskaż zdanie poprawne.\n\nA. I kulka, i walec zatoną.\nB. I kulka, i walec wypłyną na powierzchnię.\nC. kulka zatonie, a walec wypłynie na powierzchnię.\nD. kulka wypłynie na powierzchnię, a walec zatonie.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-60",
                                "number": 60,
                                "points": 1,
                                "title": "Zadanie 60. (1 pkt) Ciało zanurzone w 60% objętości",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Prawo Archimedesa",
                                    "Obliczanie gęstości"
                                ],
                                "problem": "Poniżej poziomu powierzchni cieczy o gęstości $800\\text{ kg/m}^3$ znajduje się 60% objętości pływającego w niej jednorodnego ciała.\n\nGęstość pływającego ciała jest równa:\n\nA. $800\\text{ kg/m}^3$\nB. $600\\text{ kg/m}^3$\nC. $480\\text{ kg/m}^3$\nD. $320\\text{ kg/m}^3$",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-61",
                                "number": 61,
                                "points": 1,
                                "title": "Zadanie 61. (1 pkt) Topnienie kostki lodu w słonej wodzie",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Topnienie lodu",
                                    "Woda słona",
                                    "Poziom cieczy"
                                ],
                                "problem": "W naczyniu ze słoną wodą pływa kostka lodu z wody z kranu w Twojej szkole. Po całkowitym stopieniu kostki poziom wody w naczyniu:\n\nA. pozostał bez zmian\nB. wzrósł\nC. obniżył się\nD. zmienił się w sposób niemożliwy do ustalenia.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-4-3",
                        "number": "4.3",
                        "title": "Temat 4.3: Hydrostatyka – Zadania otwarte",
                        "shortTitle": "4.3 Hydrostatyka otwarte",
                        "icon": "🌊",
                        "desc": "Przyssany krążek do dna naczynia, zmiana ciśnienia po wrzuceniu pływaka, tonięcie z przyspieszeniem, obniżenie poziomu cieczy.",
                        "formulaCheat": "F_{\\text{nacisku}} = Q + \\rho g h S, \\quad a = g\\left(1 - \\frac{\\rho_2}{\\rho_1}\\right), \\quad \\Delta V = \\frac{m}{\\rho_0} - \\frac{m}{\\rho_c} = S \\cdot \\Delta h",
                        "tasks": [
                            {
                                "id": "kk-zad-62",
                                "number": 62,
                                "points": 5,
                                "title": "Zadanie 62. (5 pkt) Metalowy krążek przylegający do dna naczynia",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Brak siły wyporu",
                                    "Siła nacisku na dno"
                                ],
                                "problem": "Gładki metalowy krążek o polu powierzchni podstawy $S = 20\\text{ cm}^2$ i wysokości $H = 1{,}0\\text{ cm}$, mający ciężar $Q = 3\\text{ N}$ przylega ściśle podstawą do gładkiego poziomego dna naczynia z wodą tak, że woda nie dostała się pomiędzy dno a krążek. Wysokość słupa wody nad górną powierzchnią krążka wynosi $h = 0{,}5\\text{ m}$.\n\nOblicz siłę nacisku krążka na dno naczynia. Zaniedbaj wpływ ciśnienia atmosferycznego oraz przyjmij, że gęstość wody $d = 10^3\\text{ kg/m}^3$, a przyspieszenie grawitacyjne $g = 10\\text{ m/s}^2$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-63",
                                "number": 63,
                                "points": 3,
                                "title": "Zadanie 63. (3 pkt) Wzrost ciśnienia na dno po wrzuceniu pływającej kulki",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Ciśnienie hydrostatyczne",
                                    "Wyporność"
                                ],
                                "problem": "Do naczynia o wysokich, pionowych ścianach bocznych nalano wody tak, że wysokość jej słupa wynosi $h = 50\\text{ cm}$.\n\nO ile procent zmieni się ciśnienie hydrostatyczne na poziome dno naczynia o polu powierzchni $S = 100\\text{ cm}^2$, jeżeli na powierzchni wody umieścimy kulkę o masie $m = 100\\text{ g}$, która będzie pływać częściowo zanurzona? Przyjmij gęstość wody $d = 1{,}0\\text{ g/cm}^3$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-64",
                                "number": 64,
                                "points": 3,
                                "title": "Zadanie 64. (3 pkt) Przyspieszenie tonącej kulki w cieczy",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Ruch tonącego ciała",
                                    "II zasada dynamiki"
                                ],
                                "problem": "Kulkę o promieniu $r = 5\\text{ cm}$ wykonaną z materiału o gęstości $d_1 = 1200\\text{ kg/m}^3$ zanurzono całkowicie w cieczy o gęstości $d_2 = 900\\text{ kg/m}^3$.\n\nOblicz wartość przyspieszenia, z jakim kulka będzie tonąć od chwili, gdy całkowicie znajdzie się pod powierzchnią cieczy. Przyjmij wartość przyspieszenia ziemskiego $g = 9{,}81\\text{ m/s}^2$. Opory ruchu zaniedbaj.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-65",
                                "number": 65,
                                "points": 3,
                                "title": "Zadanie 65. (3 pkt) Wyznaczanie gęstości cieczy z topnienia lodu",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Topnienie lodu",
                                    "Gęstość cieczy"
                                ],
                                "problem": "Kawałek lodu o masie $m = 3{,}8\\text{ kg}$ pływa na powierzchni cieczy znajdującej się w cylindrycznym naczyniu o polu powierzchni dna $S = 100\\text{ cm}^2$.\n\nZnajdź gęstość tej cieczy, jeśli po pełnym roztopieniu się lodu jej poziom w naczyniu obniżył się o $\\Delta h = 20\\text{ mm}$. Gęstość wody wynosi $d_0 = 1{,}0\\text{ g/cm}^3$.",
                                "solution": null
                            }
                        ]
                    }
                ]
            },
            {
                "id": "k-dzial-5",
                "number": 5,
                "title": "Dział 5: Praca, Moc, Energia Mechaniczna",
                "icon": "⚡",
                "badge": "3 Tematy • 15 Zadań",
                "desc": "Praca mechaniczna, moc urządzeń, energia kinetyczna i potencjalna, maszyny proste (kołowrót) i sprawność.",
                "subchapters": [
                    {
                        "id": "k-sub-5-1",
                        "number": "5.1",
                        "title": "Temat 5.1: Definicje, jednostki, bilans pracy",
                        "shortTitle": "5.1 Praca i moc",
                        "icon": "💡",
                        "desc": "Wzory na pracę i moc, przeliczanie jednostek (W, kW, J, kJ, MJ), dźwigi i żarówki.",
                        "formulaCheat": "W = F \\cdot s, \\quad P = \\frac{W}{t}, \\quad 1\\text{ J} = 1\\text{ N}\\cdot\\text{m} = 1\\text{ W}\\cdot\\text{s}",
                        "tasks": [
                            {
                                "id": "kk-zad-66",
                                "number": 66,
                                "points": 1,
                                "title": "Zadanie 66. (1 pkt) Jednostka mocy przez jednostki podstawowe SI",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Moc",
                                    "Układ SI",
                                    "Analiza jednostek"
                                ],
                                "problem": "Jednostka mocy w układzie SI wyraża się przez podstawowe jednostki tego układu następująco:\n\nA. $\\text{kg}\\cdot\\text{m}$\nB. $\\text{kg}\\cdot\\text{m}/\\text{s}$\nC. $\\text{kg}\\cdot\\text{m}^2/\\text{s}$\nD. $\\text{kg}\\cdot\\text{m}^2/\\text{s}^3$",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-67",
                                "number": 67,
                                "points": 1,
                                "title": "Zadanie 67. (1 pkt) Czas świecenia żarówki 60 W",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Moc",
                                    "Energia elektryczna",
                                    "Czas"
                                ],
                                "problem": "60-watowa żarówka zużyła $7{,}2\\text{ kJ}$ energii elektrycznej. Czas jej świecenia wynosił więc:\n\nA. $2{,}0\\text{ min}$.\nB. $1/5\\text{ min}$.\nC. $43{,}2\\text{ s}$.\nD. $8{,}3\\text{ s}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-68",
                                "number": 68,
                                "points": 1,
                                "title": "Zadanie 68. (1 pkt) Podnoszenie ciała pionową siłą 30 N",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Praca",
                                    "Siła",
                                    "Droga"
                                ],
                                "problem": "Ciało o masie $2{,}0\\text{ kg}$ zostało podniesione pionową siłą $30\\text{ N}$ na wysokość $5{,}0\\text{ m}$. Przyjmij, że $g = 10\\text{ m/s}^2$.\n\nSiła ta wykonała pracę:\n\nA. $150\\text{ J}$.\nB. $50\\text{ J}$.\nC. $300\\text{ J}$.\nD. $100\\text{ J}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-69",
                                "number": 69,
                                "points": 1,
                                "title": "Zadanie 69. (1 pkt) Droga przy wykonaniu pracy 2,5 MJ",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Praca",
                                    "Droga",
                                    "Przedrostki jednostek"
                                ],
                                "problem": "Ciało porusza się w kierunku wypadkowej siły o wartości $5{,}0\\text{ kN}$. Siła ta wykonała nad tym ciałem pracę $2{,}5\\text{ MJ}$.\n\nDziałała ona na ciało na drodze o długości:\n\nA. $2\\text{ mm}$,\nB. $0{,}5\\text{ km}$,\nC. $250\\text{ cm}$,\nD. $12{,}5\\text{ Gm}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-70",
                                "number": 70,
                                "points": 1,
                                "title": "Zadanie 70. (1 pkt) Moc użyteczna dźwigu",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Moc użyteczna",
                                    "Dźwig",
                                    "Ciężar"
                                ],
                                "problem": "Dźwig podnosi ruchem jednostajnym ładunek o masie $5000\\text{ kg}$, na wysokość $10\\text{ m}$, w ciągu $25\\text{ s}$. Przyjmując, że przyspieszenie ziemskie wynosi $10\\text{ m/s}^2$.\n\nMoc użyteczna dźwigu wynosi:\n\nA. $0{,}2\\text{ kW}$,\nB. $2\\text{ kW}$,\nC. $20\\text{ kW}$,\nD. $200\\text{ kW}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-71",
                                "number": 71,
                                "points": 1,
                                "title": "Zadanie 71. (1 pkt) Wysokość podniesienia ładunku przez dźwig",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Praca",
                                    "Moc",
                                    "Wysokość"
                                ],
                                "problem": "Ładunek o masie $5000\\text{ kg}$, został podniesiony przez dźwig, w ciągu $25\\text{ s}$. Moc użyteczna dźwigu wynosi $20\\text{ kW}$. Przyjmijmy, że przyspieszenie ziemskie wynosi $10\\text{ m/s}^2$.\n\nDźwig podniósł ten ładunek na wysokość:\n\nA. $10{,}0\\text{ m}$.\nB. $5{,}0\\text{ m}$,\nC. $1{,}0\\text{ m}$,\nD. $12{,}5\\text{ m}$.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-5-2",
                        "number": "5.2",
                        "title": "Temat 5.2: Energia mechaniczna, układy odniesienia i straty",
                        "shortTitle": "5.2 Energia i praca",
                        "icon": "🔋",
                        "desc": "Energia kinetyczna w różnych układach odniesienia, energia potencjalna, praca sił oporu.",
                        "formulaCheat": "E_p = mgh, \\quad E_k = \\frac{m v^2}{2}, \\quad E_{k,\\text{wzgl}} = \\frac{m (v_2 - v_1)^2}{2}, \\quad W_{\\text{silnika}} = \\Delta E_k + W_{\\text{oporów}}",
                        "tasks": [
                            {
                                "id": "kk-zad-72",
                                "number": 72,
                                "points": 1,
                                "title": "Zadanie 72. (1 pkt) Energia potencjalna na innej planecie",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Energia potencjalna",
                                    "Cyfry znaczące"
                                ],
                                "problem": "Ciało o masie $12{,}3\\text{ g}$ zawieszono na wysokości $5{,}3\\text{ m}$ nad powierzchnią planety, na której przyspieszenie grawitacyjne jest równe $11{,}42\\text{ m/s}^2$.\n\nEnergia potencjalna grawitacji ciała względem powierzchni tej planety wynosi:\n\nA. $0{,}7444698\\text{ J}$\nB. $0{,}7\\text{ J}$\nC. $0{,}74\\text{ J}$\nD. $0{,}744\\text{ J}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-73",
                                "number": 73,
                                "points": 1,
                                "title": "Zadanie 73. (1 pkt) Zjazd samochodu z górki ze stałą prędkością",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Energia potencjalna",
                                    "Energia kinetyczna",
                                    "Przemiany energii"
                                ],
                                "problem": "Samochód zjeżdżając z górki hamuje w taki sposób, że jego prędkość jest stała. Oznacza to, że:\n\nA. zarówno jego energia kinetyczna, jak i potencjalna są stałe.\nB. jego energia potencjalna maleje, a kinetyczna jest stała.\nC. jego energia potencjalna jest stała, a kinetyczna maleje.\nD. jego energia potencjalna maleje, a kinetyczna rośnie.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-74",
                                "number": 74,
                                "points": 1,
                                "title": "Zadanie 74. (1 pkt) Energia kinetyczna w układzie drugiego auta",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Energia kinetyczna",
                                    "Względność ruchu"
                                ],
                                "problem": "Dwa samochody o jednakowych masach $m$ poruszają się z prędkościami o wartościach $v$ i $3v$ względem ziemi, w tę samą stronę.\n\nEnergia kinetyczna drugiego samochodu, w układzie odniesienia związanym z pierwszym, wynosi:\n\nA. $1\\,mv^2$\nB. $2\\,mv^2$\nC. $3\\,mv^2$\nD. $4\\,mv^2$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-75",
                                "number": 75,
                                "points": 1,
                                "title": "Zadanie 75. (1 pkt) Prędkość szybszego auta względem ziemi",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Energia kinetyczna",
                                    "Prędkość względna"
                                ],
                                "problem": "Dwa samochody o jednakowych masach $m$ poruszają się w tę samą stronę, z prędkościami o różnych wartościach. Wartość prędkości wolniejszego z nich względem ziemi wynosi $v$. Energia kinetyczna szybszego samochodu, w układzie odniesienia związanym z wolniejszym, jest równa $8mv^2$.\n\nPrędkość szybszego samochodu względem ziemi wynosi:\n\nA. $2v$\nB. $3v$\nC. $4v$\nD. $5v$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-76",
                                "number": 76,
                                "points": 1,
                                "title": "Zadanie 76. (1 pkt) Energia stracona na opory przy popychaniu wagonu",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Bilans energii",
                                    "Praca sił oporu"
                                ],
                                "problem": "Lokomotywa o masie 20 ton nadała szybkość $0{,}5\\text{ m/s}$ stojącemu początkowo wagonowi o masie 22 ton. Jeżeli silnik lokomotywy wykonał w tym czasie pracę $12\\text{ kJ}$ to energia stracona na pokonanie sił oporu była równa:\n\nA. $1{,}5\\text{ kJ}$.\nB. $6{,}5\\text{ kJ}$.\nC. $6{,}75\\text{ kJ}$.\nD. $9{,}25\\text{ kJ}$.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-5-3",
                        "number": "5.3",
                        "title": "Temat 5.3: Maszyny proste i zasada zachowania energii (otwarte)",
                        "shortTitle": "5.3 Maszyny proste i ZZE otwarte",
                        "icon": "⚙️",
                        "desc": "Wjazd na wzgórze ze stratami, zsuwanie się po pochylni, dowód dla kołowrotu (równowaga momentów sił).",
                        "formulaCheat": "W_{\\text{użyteczna}} = \\eta \\cdot W_{\\text{całkowita}}, \\quad mgh = \\frac{mv^2}{2} + F_{\\text{op}} \\cdot l, \\quad F_1 \\cdot R = F_2 \\cdot r",
                        "tasks": [
                            {
                                "id": "kk-zad-77",
                                "number": 77,
                                "points": 5,
                                "title": "Zadanie 77. (5 pkt) Kolarz wjeżdżający na wzgórze",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Zasada zachowania energii",
                                    "Sprawność"
                                ],
                                "problem": "Kolarz rozpoczynający wjazd na wzgórze ($v_0 = 0$) razem z rowerem ma masę równą $90\\text{ kg}$. Podczas wjeżdżania na szczyt wzgórza mięśnie kolarza wykonały pracę równą $50\\text{ kJ}$. Na szczycie wzgórza kolarz osiągnął szybkość $18\\text{ km/h}$.\n\nOblicz wysokość wzgórza przyjmując, że 20% wykonanej przez mięśnie kolarza pracy zostało stracone na pokonanie oporów ruchu.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-78",
                                "number": 78,
                                "points": 3,
                                "title": "Zadanie 78. (3 pkt) Rozpędzanie samochodzika ze stratami na tarcie",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Praca i energia kinetyczna"
                                ],
                                "problem": "Pod wpływem stałej poziomej siły $F = 1{,}0\\text{ N}$ samochodzik o masie $m = 1000\\text{ g}$, będący początkowo w spoczynku, rozpędza się na poziomej podłodze na odcinku o długości $d = 600\\text{ cm}$. Opory ruchu pochłonęły 25% wykonanej przez siłę $F$ pracy.\n\nOblicz wartość prędkości końcowej samochodziku.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-79",
                                "number": 79,
                                "points": 3,
                                "title": "Zadanie 79. (3 pkt) Skrzynia na oblodzonej platformie",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Równia pochyła",
                                    "Siła oporów"
                                ],
                                "problem": "Skrzynia o masie $m = 20\\text{ kg}$ zsunęła się z wysokości $h = 6\\text{ m}$ po oblodzonej platformie o długości $l = 10\\text{ m}$ uzyskując na jej końcu prędkość o wartości $v = 9{,}8\\text{ m/s}$.\n\nOblicz średnią wartość siły oporów ruchu działających na skrzynię podczas zsuwania się. Przyjmij wartość przyspieszenia ziemskiego $g = 9{,}81\\text{ m/s}^2$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-80",
                                "number": 80,
                                "points": 5,
                                "title": "Zadanie 80. (5 pkt) Kołowrót na budowie i złota reguła mechaniki",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Maszyny proste",
                                    "Kołowrót",
                                    "Moment siły"
                                ],
                                "problem": "Podczas budowy domu pracownicy mieli dostarczyć na drugie piętro materiały budowlane. Jeden z pracowników wnosił elementy po schodach a drugi skorzystał z kołowrotu umieszczonego na drugim piętrze.\n\nWykaż, pomijając wszelkie straty energii oraz analizując siły działające na ramiona kołowrotu, promienie kołowrotu i jego liczbę obrotów, że pracownik korzystający z maszyny prostej, jaką jest kołowrót, wykonał taką samą pracę przy użyciu mniejszej siły w porównaniu z pracą pracownika używającego schodów.",
                                "solution": null
                            }
                        ]
                    }
                ]
            },
            {
                "id": "k-dzial-6",
                "number": 6,
                "title": "Dział 6: Zjawiska Cieplne (Termodynamika)",
                "icon": "🔥",
                "badge": "3 Tematy • 13 Zadań",
                "desc": "Skale temperatur, przewodnictwo cieplne i konwekcja, przemiany fazowe (topnienie, parowanie, krzepnięcie) oraz bilans cieplny.",
                "subchapters": [
                    {
                        "id": "k-sub-6-1",
                        "number": "6.1",
                        "title": "Temat 6.1: Właściwości materii, przewodnictwo cieplne i skale",
                        "shortTitle": "6.1 Przewodnictwo i skale",
                        "icon": "🌡️",
                        "desc": "Sposoby przekazywania ciepła, szeregowanie materiałów pod kątem przewodnictwa, przeliczanie skali Fahrenheita, Celsjusza i Kelwina.",
                        "formulaCheat": "T_{\\text{Kelwin}} = T_{^\\circ\\text{C}} + 273{,}15, \\quad \\Delta T_{^\\circ\\text{C}} = \\Delta T_{\\text{K}} = \\frac{5}{9} \\Delta T_{^\\circ\\text{F}}",
                        "tasks": [
                            {
                                "id": "kk-zad-81",
                                "number": 81,
                                "points": 1,
                                "title": "Zadanie 81. (1 pkt) Przepływ ciepła przy zetknięciu ciał",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Ciepło",
                                    "Energia wewnętrzna"
                                ],
                                "problem": "Jeśli zetkniemy ciało o niższej temperaturze z ciałem o wyższej temperaturze, to do ciała pierwszego przechodzi z drugiego:\n\nA. energia.\nB. cieplik.\nC. temperatura.\nD. pęd.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-82",
                                "number": 82,
                                "points": 1,
                                "title": "Zadanie 82. (1 pkt) Położenie grzałki w czajniku elektrycznym",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Konwekcja",
                                    "Przekazywanie ciepła"
                                ],
                                "problem": "Czajnik elektryczny ma grzałkę w swojej dolnej części, aby wykorzystać przede wszystkim zjawisko:\n\nA. przewodnictwa cieplnego.\nB. konwekcji.\nC. promieniowania.\nD. przewodnictwa cieplnego i promieniowania.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-83",
                                "number": 83,
                                "points": 1,
                                "title": "Zadanie 83. (1 pkt) Uszeregowanie substancji wg przewodnictwa cieplnego",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Przewodnictwo cieplne",
                                    "Właściwości materii"
                                ],
                                "problem": "Rozważamy następujące substancje: styropian (x), miedź (y), bardzo rozrzedzony gaz (w), cegła (z).\n\nWedług przewodnictwa cieplnego (od największego do najmniejszego) substancje te można uszeregować następująco:\n\nA. xywz,\nB. zwyx,\nC. yzxw,\nD. yzwx.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-84",
                                "number": 84,
                                "points": 1,
                                "title": "Zadanie 84. (1 pkt) Wzrost temperatury o 100°F",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Skala Fahrenheita",
                                    "Skala Celsjusza",
                                    "Kelwiny"
                                ],
                                "problem": "W skali Fahrenheita, w warunkach normalnych, woda zamarza w temperaturze $32^\\circ\\text{F}$, a wrze w temperaturze $212^\\circ\\text{F}$. Temperatura ciała wzrosła o $100^\\circ\\text{F}$.\n\nOznacza to wzrost temperatury w skali Celsjusza i Kelwina odpowiednio o około:\n\nA. $56^\\circ\\text{C}$ i $56\\text{ K}$\nB. $38^\\circ\\text{C}$ i $38\\text{ K}$\nC. $38^\\circ\\text{C}$ i $311\\text{ K}$\nD. $56^\\circ\\text{C}$ i $329\\text{ K}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-85",
                                "number": 85,
                                "points": 1,
                                "title": "Zadanie 85. (1 pkt) Menisk wody w szklance",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Menisk wklęsły",
                                    "Siły spójności"
                                ],
                                "problem": "Woda wlana do szklanki i wypełniająca ją częściowo tworzy:\n\nA. menisk wypukły, ponieważ siły spójności w wodzie są większe niż siły przylegania między wodą i szkłem.\nB. menisk wypukły, ponieważ siły spójności w wodzie są mniejsze niż siły przylegania między wodą i szkłem.\nC. menisk wklęsły, ponieważ siły spójności w wodzie są większe niż siły przylegania między wodą i szkłem.\nD. menisk wklęsły, ponieważ siły spójności w wodzie są mniejsze niż siły przylegania między wodą i szkłem.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-86",
                                "number": 86,
                                "points": 1,
                                "title": "Zadanie 86. (1 pkt) Zwilżanie powierzchni ciała stałego cieczą",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Zjawiska powierzchniowe",
                                    "Spójność"
                                ],
                                "problem": "Kiedy ciecz styka się z ciałem stałym możliwe są dwie sytuacje - ciecz zwilża lub nie zwilża powierzchni ciała stałego. O tym, z którą z wyżej wymienionych sytuacji mamy do czynienia decydują siły:\n\nA. ciężkości cząsteczek.\nB. tylko przylegania.\nC. tylko spójności.\nD. spójności i przylegania.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-6-2",
                        "number": "6.2",
                        "title": "Temat 6.2: Przemiany fazowe i bilans cieplny",
                        "shortTitle": "6.2 Przemiany fazowe",
                        "icon": "❄️",
                        "desc": "Temperatura topnienia i krzepnięcia, zmiana energii wewnętrznej podczas krzepnięcia, wrzucenie zimnego lodu do wody z lodem.",
                        "formulaCheat": "Q = m \\cdot c_w \\cdot \\Delta T, \\quad Q = m \\cdot L, \\quad T_{\\text{topnienia}} = T_{\\text{krzepnięcia}} = 0^\\circ\\text{C}",
                        "tasks": [
                            {
                                "id": "kk-zad-87",
                                "number": 87,
                                "points": 1,
                                "title": "Zadanie 87. (1 pkt) Temperatura topnienia lodu i krzepnięcia wody",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Przemiany fazowe",
                                    "Temperatura topnienia"
                                ],
                                "problem": "Wskaż zdanie prawdziwe (w każdym z przypadków panują warunki normalne).\n\nA. lód topnieje w temperaturze minimalnie wyższej niż $0^\\circ\\text{C}$, a woda krzepnie w temperaturze minimalnie niższej niż $0^\\circ\\text{C}$.\nB. lód topnieje w temperaturze równej $0^\\circ\\text{C}$, a woda krzepnie w temperaturze minimalnie niższej niż $0^\\circ\\text{C}$.\nC. lód topnieje w temperaturze minimalnie wyższej niż $0^\\circ\\text{C}$, a woda krzepnie w temperaturze równej $0^\\circ\\text{C}$.\nD. lód topnieje w temperaturze równej $0^\\circ\\text{C}$, a woda krzepnie również w tej samej temperaturze równej $0^\\circ\\text{C}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-88",
                                "number": 88,
                                "points": 1,
                                "title": "Zadanie 88. (1 pkt) Zmiana energii wewnętrznej podczas krzepnięcia",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Krzepnięcie",
                                    "Energia wewnętrzna"
                                ],
                                "problem": "Podczas procesu krzepnięcia wody jej energia wewnętrzna:\n\nA. nie zmienia się, ponieważ proces ten jest związany z dostarczaniem energii cieplnej.\nB. wzrasta, ponieważ proces ten jest związany z odbieraniem energii cieplnej.\nC. maleje, ponieważ proces ten przebiega w stałej temperaturze.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-89",
                                "number": 89,
                                "points": 1,
                                "title": "Zadanie 89. (1 pkt) Kostka lodu o temp. -10°C w mieszaninie wody z lodem",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Mieszanina woda-lód",
                                    "Temperatura końcowa"
                                ],
                                "problem": "Do izolowanego cieplnie od otoczenia bardzo dużego naczynia, wypełnionego niemal całkowicie mieszaniną wody z lodem (masy wody i lodu są takie same) o temperaturze $0^\\circ\\text{C}$, wrzucono niewielką kostkę lodu o temperaturze $-10^\\circ\\text{C}$.\n\nPo ustaleniu się jednolitej temperatury układu $t$ wyniosła ona:\n\nA. $-5^\\circ\\text{C}$\nB. $-10^\\circ\\text{C}$\nC. $0^\\circ\\text{C}$\nD. $-1^\\circ\\text{C} > t > 0^\\circ\\text{C}$.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-6-3",
                        "number": "6.3",
                        "title": "Temat 6.3: Bilans cieplny – Zadania otwarte",
                        "shortTitle": "6.3 Bilans cieplny otwarte",
                        "icon": "🧊",
                        "desc": "Rozszerzalność temperaturowa a gęstość, rozmrażanie lodu w zamrażarce, zamiana energii spadku na ciepło, parowanie i zamarzanie pod próżnią.",
                        "formulaCheat": "\\frac{\\Delta \\rho}{\\rho} \\approx 3\\epsilon, \\quad Q_1 = m c_l \\Delta T, \\quad Q_2 = m L_t, \\quad m g(H - h) = m c_g \\Delta T, \\quad m_p L_p = m_l \\lambda",
                        "tasks": [
                            {
                                "id": "kk-zad-90",
                                "number": 90,
                                "points": 3,
                                "title": "Zadanie 90. (3 pkt) Kurczenie się klocka metalowego a wzrost gęstości",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Rozszerzalność objętościowa",
                                    "Gęstość"
                                ],
                                "problem": "Wysokość prostopadłościennego metalowego klocka, chłodzonego ze wszystkich stron równomiernym strumieniem zimnego powietrza, zmniejszyła się o wielkość $\\epsilon = 0{,}1\\%$.\n\nO ile procent wzrosła przy tym gęstość metalu?",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-91",
                                "number": 91,
                                "points": 5,
                                "title": "Zadanie 91. (5 pkt) Czas całkowitego stopienia lodu w zamrażarce",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Bilans cieplny",
                                    "Ciepło właściwe i topnienia"
                                ],
                                "problem": "W zamrażarce nagromadził się lód o ujemnej temperaturze, wynoszącej $-3^\\circ\\text{C}$. Aby go usunąć, zamrażarkę, w upalne letnie popołudnie, wyłączono z sieci elektrycznej i otwarto szeroko jej drzwi. Po 5 minutach lód zaczął topnieć.\n\nOszacuj czas, od początku topnienia, po którym lód stopi się całkowicie. Ciepło właściwe lodu wynosi $2{,}1\\text{ kJ/(kg}\\cdot{^\\circ\\text{C}})$, a ciepło jego topnienia $0{,}33\\text{ MJ/kg}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-92",
                                "number": 92,
                                "points": 3,
                                "title": "Zadanie 92. (3 pkt) Odbicie gumowej piłeczki i jej ogrzanie",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Energia potencjalna",
                                    "Ciepło właściwe"
                                ],
                                "problem": "Spadająca swobodnie z wysokości $H = 20\\text{ m}$ gumowa piłeczka po odbiciu od podłoża wzniosła się na wysokość $h$. Zakładając, że straty energii wystąpiły wyłącznie podczas odbicia i całkowicie zmieniły się w energię wewnętrzną gumy, oblicz, na jaką wysokość wzniosła się piłeczka po odbiciu, jeśli w wyniku odbicia temperatura piłeczki wzrosła o $\\Delta T = 0{,}5^\\circ\\text{C}$.\n\nCiepło właściwe gumy $c = 110\\text{ J/(kg}\\cdot\\text{K)}$. Przyjmij $g = 9{,}81\\text{ m/s}^2$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-93",
                                "number": 93,
                                "points": 3,
                                "title": "Zadanie 93. (3 pkt) Parowanie i zamarzanie wody w próżni",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Parowanie",
                                    "Krzepnięcie",
                                    "Bilans fazowy"
                                ],
                                "problem": "W izolowanym cieplnie, szczelnym naczyniu zawierającym bardzo rozrzedzony gaz rozlano wodę o temperaturze $t_0 = 0^\\circ\\text{C}$. Po upływie pewnego czasu $\\Delta t$ część wody wyparowała, a reszta zamieniła się w lód, przy czym temperatura pary i lodu wynosiła nadal $t_0$.\n\nIle sekund trwał czas $\\Delta t$, jeśli w czasie $t_1 = 1\\text{ s}$ średnio wyparowywała $n = 0{,}01$ część początkowej masy wody?\n\nPrzyjmij wartość ciepła parowania wody $L = 2{,}40\\text{ MJ/kg}$, a ciepła krzepnięcia wody (równego ciepłu topnienia lodu) $\\lambda = 330\\text{ kJ/kg}$.",
                                "solution": null
                            }
                        ]
                    }
                ]
            }
        ]
    }
};
