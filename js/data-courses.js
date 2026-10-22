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
        "badge": "W przygotowaniu",
        "isComingSoon": true,
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
                "problem": "Wykres przedstawia zależność współrzędnej prędkości $v_x$ od czasu pewnego biegacza, który biegnie po prostoliniowym odcinku toru przez $2\\text{ minuty}$ ($120\\text{ s}$):\n- $0 - 20\\text{ s}$: $v_x = 5\\text{ m/s}$\n- $20 - 30\\text{ s}$: $v_x = 8\\text{ m/s}$\n- $30 - 40\\text{ s}$: $v_x = 5\\text{ m/s}$\n- $40 - 60\\text{ s}$: $v_x = 6\\text{ m/s}$\n- $60 - 80\\text{ s}$: $v_x = 8\\text{ m/s}$\n- $80 - 100\\text{ s}$: $v_x = 4\\text{ m/s}$\n- $100 - 110\\text{ s}$: $v_x = 0\\text{ m/s}$\n- $110 - 120\\text{ s}$: $v_x = -4\\text{ m/s}$\n\n<div class=\"chart-container-svg\">\n[TUTAJ WKLEJ GRAFIKĘ]\n</div>\n\nNa podstawie wykresu:\na) oblicz drogę, jaką przebył biegacz,\nb) opisz, jak wygląda wykres drogi w zależności od czasu,\nc) oblicz szybkość średnią biegacza,\nd) oblicz wartość prędkości średniej biegacza.",
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
                "id": "matura-cke-2025-czerwiec-zad-1",
                "number": 202506,
                "title": "Matura czerwiec 2025 zad.1 nowa formuła",
                "year": "2025 czerwiec",
                "difficulty": 3,
                "source": "Matura CKE 2025 Czerwiec (Termin dodatkowy)",
                "link": "https://arkusze.pl/maturalne/fizyka-2025-czerwiec-matura-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Ruch prostoliniowy",
                  "Równania ruchu",
                  "Kinematyka"
                ],
                "image": "img/cke_2025_czerwiec_zad1.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1.</h4>\n<p>Ciało $\\mathcal{C}$ porusza się wzdłuż osi $x$. Zależność współrzędnej położenia $x$ ciała $\\mathcal{C}$ od czasu $t$ opisują równania:</p>\n<p style=\"text-align:center;\">\n$x = x(t) = \\begin{cases} 4 + 16t - 4t^2 & \\text{dla } 0\\text{ s} \\le t \\le 3\\text{ s} \\\\ 40 - 8t & \\text{dla } 3\\text{ s} < t \\le 5\\text{ s} \\end{cases}$\n</p>\n<br>\n<p>Wszystkie współczynniki w tych równaniach wyrażone są domyślnie przy pomocy jednostek podstawowych układu SI.</p>\n<br>\n<p>Na wykresie 1. przedstawiono opisaną zależność $x(t)$ dla $0\\text{ s} \\le t \\le 5\\text{ s}$.</p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2025_czerwiec_zad1_wykres1.png\" alt=\"Rysunek do zadania\" class=\"theory-img\" style=\"max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<h4>Zadanie 1.1. (0–2)</h4>\n<p>Drogę przebytą przez ciało $\\mathcal{C}$ od chwili $t = 0\\text{ s}$ do chwili $t = 5\\text{ s}$ oznaczymy jako $s_C$.</p>\n<br>\n<p>Wektor przemieszczenia ciała $\\mathcal{C}$ od chwili $t = 0\\text{ s}$ do chwili $t = 5\\text{ s}$ oznaczymy jako $\\Delta \\vec{x}_C$.</p>\n<br>\n<p>Czas ruchu ciała $\\mathcal{C}$ od chwili $t = 0\\text{ s}$ do chwili $t = 5\\text{ s}$ oznaczymy jako $\\Delta t_C$.</p>\n<br>\n<p><strong>Dokończ zdania. Wpisz właściwe liczby w wykropkowane miejsca.</strong></p>\n<table class=\"cke-table\">\n  <tr>\n    <td class=\"cke-num-col\">1.</td>\n    <td>Droga przebyta przez ciało $\\mathcal{C}$ w czasie $\\Delta t_C$ jest równa $s_C = \\dots\\dots\\dots\\dots\\text{ m}$.</td>\n    <td class=\"cke-pf-col\">P</td>\n    <td class=\"cke-pf-col\">F</td>\n  </tr>\n  <tr>\n    <td class=\"cke-num-col\">2.</td>\n    <td>Wartość wektora $\\frac{\\Delta \\vec{x}_C}{\\Delta t_C}$ jest równa $\\left|\\frac{\\Delta \\vec{x}_C}{\\Delta t_C}\\right| = \\dots\\dots\\dots\\dots\\text{ m/s}$.</td>\n    <td class=\"cke-pf-col\">P</td>\n    <td class=\"cke-pf-col\">F</td>\n  </tr>\n</table>\n\n<h4>Zadanie 1.2. (0–2)</h4>\n<p><strong>Oceń prawdziwość poniższych stwierdzeń. Zaznacz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p>\n<br>\n<p>W chwili $t = 1\\text{ s}$:</p>\n<table class=\"pf-table\">\n<tbody>\n<tr>\n<td class=\"pf-num\">1.</td>\n<td class=\"pf-text\">wartość przyśpieszenia ciała $\\mathcal{C}$ jest równa $16\\text{ m/s}^2$.</td>\n<td class=\"pf-box\">P</td>\n<td class=\"pf-box\">F</td>\n</tr>\n<tr>\n<td class=\"pf-num\">2.</td>\n<td class=\"pf-text\">wartość prędkości ciała $\\mathcal{C}$ jest równa $16\\text{ m/s}$.</td>\n<td class=\"pf-box\">P</td>\n<td class=\"pf-box\">F</td>\n</tr>\n<tr>\n<td class=\"pf-num\">3.</td>\n<td class=\"pf-text\">położenie ciała $\\mathcal{C}$ ma współrzędną $16\\text{ m}$.</td>\n<td class=\"pf-box\">P</td>\n<td class=\"pf-box\">F</td>\n</tr>\n</tbody>\n</table>\n\n<h4>Zadanie 1.3. (0–2)</h4>\n<p>Współrzędną prędkości ciała $\\mathcal{C}$ oznaczymy jako $v_x$. Dodatnia wartość $v_x$ będzie oznaczała, że zwrot wektora prędkości ciała $\\mathcal{C}$ jest zgodny ze zwrotem osi $x$, a ujemna wartość – że zwrot wektora prędkości ciała $\\mathcal{C}$ jest przeciwny do zwrotu osi $x$.</p>\n<br>\n<p><strong>Na wykresie 2. narysuj zależność $v_x$ od czasu $t$ dla $0\\text{ s} \\le t \\le 5\\text{ s}$.</strong></p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2025_czerwiec_zad1_wykres2.png\" alt=\"Rysunek do zadania\" class=\"theory-img\" style=\"max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n</div>",
                "solution": {
                  "intuition": "Ruch w pierwszym etapie jest ruchem jednostajnie opóźnionym z zawróceniem ciała (wierzchołek paraboli), a w drugim ruchem jednostajnym w stronę ujemną osi x.",
                  "givens": "$x_1(t) = 4 + 16t - 4t^2$, $x_2(t) = 40 - 8t$",
                  "steps": [
                    {
                      "title": "Zadanie 1.1",
                      "content": "W chwili $t=0: x=4\\text{ m}$. Ciało zawraca w chwili, gdy $v_x = x'(t) = 16 - 8t = 0 \\implies t = 2\\text{ s}$. Wtedy $x(2) = 4 + 32 - 16 = 20\\text{ m}$. Od $t=0$ do $t=2$ przebyło $16\\text{ m}$. W $t=5: x(5) = 40 - 40 = 0\\text{ m}$. Od $x=20$ do $x=0$ przebyło kolejne $20\\text{ m}$. Całkowita droga $s_C = 16 + 20 = 36\\text{ m}$. Przemieszczenie $\\Delta x_C = x(5) - x(0) = 0 - 4 = -4\\text{ m}$, więc $|\\Delta x_C / \\Delta t_C| = 4/5 = 0{,}8\\text{ m/s}$."
                    },
                    {
                      "title": "Zadanie 1.2",
                      "content": "Dla $t=1\\text{ s}$: $a_x = x''(t) = -8\\text{ m/s}^2$ (wartość 8, a nie 16) -> F; $v_x(1) = 16 - 8(1) = 8\\text{ m/s}$ (a nie 16) -> F; $x(1) = 4 + 16 - 4 = 16\\text{ m}$ -> P. Odpowiedź: F, F, P."
                    },
                    {
                      "title": "Zadanie 1.3",
                      "content": "Wykres $v_x(t)$: odcinek prostoliniowy od $(0, 16)$ przez $(2, 0)$ do $(3, -8)$, a od $t=3\\text{ s}$ do $t=5\\text{ s}$ odcinek poziomy na poziomie $v_x = -8\\text{ m/s}$."
                    }
                  ],
                  "numerical": "1.1: $s_C = 36\\text{ m}$, $0{,}8\\text{ m/s}$; 1.2: F, F, P",
                  "answer": "1.1: 1. $36\\text{ m}$, 2. $0{,}8\\text{ m/s}$; 1.2: 1-F, 2-F, 3-P; 1.3: wykres liniowy od 16 do -8, potem stały -8.",
                  "trap": "Droga to suma długości przebytych odcinków (trzeba uwzględnić zawrócenie w t=2 s), a przemieszczenie to różnica współrzędnych końcowej i początkowej."
                }
              },
              {
                "id": "matura-cke-2025-zad-1",
                "number": 2025,
                "title": "Matura maj 2025 zad.1 nowa formuła",
                "year": "2025 maj",
                "difficulty": 3,
                "source": "Matura CKE 2025 (Maj)",
                "link": "https://arkusze.pl/maturalne/fizyka-2025-maj-matura-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Rzut poziomy",
                  "Komora próżniowa",
                  "Kinematyka"
                ],
                "image": "img/cke_2025_zad1.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1.</h4>\n<p>Rozważamy rzuty wykonane w doświadczalnej komorze próżniowej.</p>\n<br>\n<p>Do analizy zadań 1.1. i 1.2. przyjmij model zjawiska, w którym:</p>\n<ul>\n<li>ruchy ciał odbywają się <u>bez działania sił oporu</u></li>\n<li>ciała poruszają się w inercjalnym układzie odniesienia, w jednorodnym, ziemskim polu grawitacyjnym</li>\n<li>poruszające się ciała traktujemy jako punkty materialne</li>\n<li>podłoże, na które upadają rzucone ciała, jest poziome</li>\n<li>przyśpieszenie ziemskie ma wartość $g = 9{,}81\\text{ m/s}^2$.</li>\n</ul>\n\n<h4>Zadanie 1.1. (0–2)</h4>\n<p>W chwili $t_0$ rzucono kulkę K z pewnej wysokości. Prędkość $\\vec{v}_0$ kulki w chwili $t_0$ miała kierunek <u>poziomy</u>.</p>\n<br>\n<p>Analizujemy ruch kulki K od chwili $t_0$ do chwili $t_k$ – momentu uderzenia kulki K o podłoże.</p>\n<br>\n<p><strong>1.1. Oceń prawdziwość poniższych stwierdzeń. Zaznacz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p>\n<table class=\"cke-table\">\n  <tr>\n    <td class=\"cke-num-col\">1.</td>\n    <td>Wartość prędkości kulki K rośnie wprost proporcjonalnie do czasu, mierzonego od chwili $t_0$.</td>\n    <td class=\"cke-pf-col\">P</td>\n    <td class=\"cke-pf-col\">F</td>\n  </tr>\n  <tr>\n    <td class=\"cke-num-col\">2.</td>\n    <td>Wektor przyśpieszenia kulki K podczas jej ruchu ma stałą wartość.</td>\n    <td class=\"cke-pf-col\">P</td>\n    <td class=\"cke-pf-col\">F</td>\n  </tr>\n  <tr>\n    <td class=\"cke-num-col\">3.</td>\n    <td>Czas ruchu kulki K od chwili $t_0$ do chwili $t_k$ zależy od $v_0$ – wartości prędkości początkowej kulki.</td>\n    <td class=\"cke-pf-col\">P</td>\n    <td class=\"cke-pf-col\">F</td>\n  </tr>\n</table>\n\n<h4>Zadanie 1.2. (0–3)</h4>\n<p>Z punktu A w chwili $t_0 = 0\\text{ s}$ rzucono kulkę $\\text{K}_\\text{A}$. Prędkość kulki $\\text{K}_\\text{A}$ w chwili $t_0$ miała kierunek <u>poziomy</u> i wartość równą $v_{0\\text{A}} = 8\\text{ m/s}$.</p>\n<br>\n<p>Z punktu B – w tej samej chwili $t_0$ – rzucono kulkę $\\text{K}_\\text{B}$. Prędkość kulki $\\text{K}_\\text{B}$ w chwili $t_0$ miała kierunek <u>pionowy, zwrot w górę</u> i wartość, którą oznaczymy jako $v_{0\\text{B}}$.</p>\n<br>\n<p>Rzucone kulki $\\text{K}_\\text{A}$ i $\\text{K}_\\text{B}$ zderzyły się w chwili $t_z$ w punkcie C.</p>\n<br>\n<p>Współrzędne punktów A, B i C wyrażone <u>w metrach</u>, w kartezjańskim układzie współrzędnych, są następujące:</p>\n<p style=\"text-align:center;\">$\\text{A} = (0; 12) \\qquad \\text{B} = (6; 0) \\qquad \\text{C} = (6; y_\\text{C})$</p>\n<br>\n<p>Opisaną sytuację ilustruje rysunek na stronie 5. Przyjmij, że dane w zadaniu są dokładne.</p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2025_zad1.png\" alt=\"Rysunek do zadania\" class=\"theory-img\" style=\"max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<p><strong>1.2. Oblicz $v_{0\\text{B}}$ – wartość prędkości początkowej kulki $\\text{K}_\\text{B}$ w punkcie B. Zapisz obliczenia.</strong></p>\n</div>",
                "solution": {
                  "intuition": "Ruch odbywa się niezależnie w osiach X i Y, tak jak uczył Galileusz.",
                  "givens": "$v_{0A} = 8\\text{ m/s}$",
                  "steps": [
                    {
                      "title": "Zadanie 1.1",
                      "content": "1. F, 2. P, 3. F"
                    },
                    {
                      "title": "Zadanie 1.2",
                      "content": "$v_{0B} = 16\\text{ m/s}$"
                    }
                  ],
                  "numerical": "$v_{0B} = 16\\text{ m/s}$",
                  "answer": "1. F, 2. P, 3. F; $v_{0B} = 16\\text{ m/s}$",
                  "trap": "Trzeba zrównać współrzędne x i y obu kulek w momencie spotkania."
                }
              },
              {
                "id": "matura-cke-2024-grudzien-zad-1",
                "number": 202412,
                "title": "Matura próbna grudzień 2024 zad.1 nowa formuła",
                "year": "2024 grudzień",
                "difficulty": 3,
                "source": "Matura próbna CKE Grudzień 2024",
                "link": "https://arkusze.pl/maturalne/fizyka-2024-grudzien-probna-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Ruch po okręgu",
                  "Przyspieszenie kątowe",
                  "Kinematyka"
                ],
                "image": "img/cke_2024_grudzien_zad1.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1.</h4>\n<p>W chwili $t_0 = 0\\text{ s}$ początkowo nieruchoma, sztywna platforma w kształcie koła o środku $S$ rozpoczyna obrót dookoła osi prostopadłej do platformy i przechodzącej przez $S$. Do chwili $t_1 = 8\\text{ s}$ platforma obraca się ze stałym przyśpieszeniem kątowym $\\epsilon$ i wykonuje w tym czasie dokładnie jeden obrót. W chwili $t_1$ platforma uzyskała prędkość kątową $\\omega$. Od chwili $t_1$ platforma obraca się ze stałą prędkością kątową $\\omega$. Promień platformy wynosi $R = 4\\text{ m}$.</p>\n\n<h4>Zadanie 1.1. (0–2)</h4>\n<p>Rysunki 1. i 2. przedstawiają platformę w czasie, gdy jej ruch obrotowy jest jednostajnie przyśpieszony. Na rysunku 1. narysowano wektor $\\vec{v}$ prędkości punktu $P$, leżącego na brzegu platformy.</p>\n<br>\n<p><strong>Na rysunku 2. narysuj składową styczną $\\vec{a}_s$ oraz składową dośrodkową $\\vec{a}_r$ wektora przyśpieszenia $\\vec{a}$ punktu $P$. Następnie wyznacz graficznie i narysuj wektor $\\vec{a}$. Podpisz wszystkie narysowane wektory.</strong></p>\n<br>\n<p><em>Uwaga! Długości składowej stycznej $a_s$ oraz składowej dośrodkowej $a_r$ wektora przyśpieszenia $a$ mogą być na rysunku umowne.</em></p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2024_grudzien_zad1_rysunki.png\" alt=\"Rysunek do zadania\" class=\"theory-img\" style=\"max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<h4>Zadanie 1.2. (0–2)</h4>\n<p><strong>Oceń prawdziwość poniższych stwierdzeń. Zaznacz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p>\n<br>\n<p>W chwili czasu $t = 5\\text{ s}$:</p>\n<table class=\"pf-table\">\n<tbody>\n<tr>\n<td class=\"pf-num\">1.</td>\n<td class=\"pf-text\">wszystkie punkty platformy różne od punktu $S$ mają takie samo przyśpieszenie kątowe.</td>\n<td class=\"pf-box\">P</td>\n<td class=\"pf-box\">F</td>\n</tr>\n<tr>\n<td class=\"pf-num\">2.</td>\n<td class=\"pf-text\">największą wartość prędkości liniowej mają punkty leżące na brzegu platformy.</td>\n<td class=\"pf-box\">P</td>\n<td class=\"pf-box\">F</td>\n</tr>\n<tr>\n<td class=\"pf-num\">3.</td>\n<td class=\"pf-text\">wszystkie punkty platformy mają tę samą wartość przyśpieszenia dośrodkowego.</td>\n<td class=\"pf-box\">P</td>\n<td class=\"pf-box\">F</td>\n</tr>\n</tbody>\n</table>\n\n<h4>Zadanie 1.3. (0–3)</h4>\n<p><strong>Oblicz, ile obrotów wykona platforma w czasie $\\Delta t = 60\\text{ s}$, liczonym od chwili $t_0 = 0\\text{ s}$. Zapisz obliczenia.</strong></p>\n</div>",
                "solution": {
                  "intuition": "W ruchu obrotowym przyspieszonym przyspieszenie całkowite jest sumą geometryczną przyspieszenia stycznego (zmieniającego wartość prędkości) i dośrodkowego (zmieniającego kierunek prędkości).",
                  "givens": "$t_1 = 8\\text{ s}$, $n_1 = 1$, $\\Delta t = 60\\text{ s}$, $R = 4\\text{ m}$",
                  "steps": [
                    {
                      "title": "Zadanie 1.1",
                      "content": "Wektor $\\vec{a}_s$ jest styczny do okręgu i ma zwrot zgodny z $\\vec{v}$. Wektor $\\vec{a}_r$ jest skierowany wzdłuż promienia do środka $S$. Wektor wypadkowy $\\vec{a} = \\vec{a}_s + \\vec{a}_r$ jest przekątną prostokąta utworzonego przez te wektory."
                    },
                    {
                      "title": "Zadanie 1.2",
                      "content": "1. P (dla bryły sztywnej $\\epsilon$ jest jednakowe dla wszystkich punktów). 2. P ($v = \\omega r$, największe na brzegu, gdzie $r=R$). 3. F ($a_r = \\omega^2 r$ zależy wprost proporcjonalnie od odległości $r$ od osi). Odpowiedź: P, P, F."
                    },
                    {
                      "title": "Zadanie 1.3",
                      "content": "W czasie $t_1 = 8\\text{ s}$: $\\Delta \\alpha_1 = 2\\pi$ (1 obrót), $\\Delta \\alpha_1 = \\frac{1}{2}\\epsilon t_1^2 \\implies \\epsilon = \\frac{4\\pi}{64} = \\frac{\\pi}{16}\\text{ rad/s}^2$. Prędkość kątowa w chwili $t_1$: $\\omega = \\epsilon t_1 = \\frac{\\pi}{2}\\text{ rad/s}$. W czasie pozostałych $\\Delta t' = 60 - 8 = 52\\text{ s}$ ruch jest jednostajny: $\\Delta \\alpha_2 = \\omega \\cdot \\Delta t' = \\frac{\\pi}{2} \\cdot 52 = 26\\pi\\text{ rad}$. Liczba obrotów w drugim etapie: $n_2 = \\frac{26\\pi}{2\\pi} = 13$. Łączna liczba obrotów: $n = 1 + 13 = 14$ obrotów."
                    }
                  ],
                  "numerical": "1.2: P, P, F; 1.3: $n = 14$ obrotów",
                  "answer": "1.2: P, P, F; 1.3: $n = 14$ obrotów.",
                  "trap": "Pamiętaj, że w czasie pierwszych 8 sekund ruch był przyspieszony (1 obrót), a przez pozostałe 52 sekundy jednostajny (13 obrotów)."
                }
              },
              {
                "id": "matura-cke-2023-czerwiec-zad-1",
                "number": 202306,
                "title": "Matura czerwiec 2023 zad.1 nowa formuła",
                "year": "2023 czerwiec",
                "difficulty": 3,
                "source": "Matura CKE 2023 Czerwiec (Termin dodatkowy)",
                "link": "https://arkusze.pl/maturalne/fizyka-2023-czerwiec-matura-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Ruch jednostajnie opóźniony",
                  "Wykres v²(s)",
                  "Kinematyka",
                  "Niepewności pomiarowe"
                ],
                "problem": "<div class=\"task-matura energy-statements\">\n<h4>Zadanie 1.</h4>\n<p>Ze szczytu równi pochyłej puszczano kulkę. Kulka staczała się z równi bez poślizgu. Po stoczeniu się z równi kulka poruszała się dalej wzdłuż prostej po poziomo ułożonym dywanie. Ruch kulki po dywanie został sfilmowany. Dzięki temu wyznaczono wartości $v$ prędkości kulki na dywanie w kilku ustalonych położeniach $x$, licząc od punktu $x = 0$ końca równi pochyłej. Następnie obliczono wartości $v^2$. Wyniki doświadczenia oraz niepewności $\\Delta_{v^2}$ wielkości $v^2$ przedstawiono w poniższej tabeli. Pomiar $x$ przyjmij za dokładny.</p>\n\n<div class=\"energy-table-scroll\"><table class=\"energy-data-table\">\n<tr><th>$x$, m</th><td>0</td><td>0,20</td><td>0,40</td><td>0,60</td><td>0,80</td></tr>\n<tr><th>$v^2$, $\\text{m}^2/\\text{s}^2$</th><td>0,098</td><td>0,078</td><td>0,054</td><td>0,037</td><td>0,014</td></tr>\n<tr><th>$\\Delta_{v^2}$, $\\text{m}^2/\\text{s}^2$</th><td>0,004</td><td>0,004</td><td>0,003</td><td>0,003</td><td>0,002</td></tr>\n</table></div>\n\n<p>W zadaniach 1.1.–1.2. przyjmij, że ruch postępowy kulki po dywanie był ruchem jednostajnie opóźnionym z przyśpieszeniem o wartości bezwzględnej $a$. Prędkość kulki na początku ruchu po dywanie, czyli w $x = 0$, oznaczymy jako $v_0$. Zależność między kwadratem wartości prędkości kulki a przebytą drogą $s = x$ i wartością przyśpieszenia $a$ wyraża się wzorem:</p>\n<p style=\"text-align:center;\">$v^2 = v_0^2 - 2as$</p>\n\n<h4>Zadanie 1.1. (0–2)</h4>\n<p><strong>Wyprowadź wzór $\\boldsymbol{v^2 = v_0^2 - 2as}$ podany we wstępie do zadania 1. Zapisz odpowiednie równania oraz przekształcenia prowadzące do uzyskania powyższej postaci tego wzoru.</strong></p>\n\n<h4>Zadanie 1.2. (0–4)</h4>\n<p><strong>W układzie współrzędnych $\\boldsymbol{(s, v^2)}$ poniżej narysuj wykres zależności $\\boldsymbol{v^2(s)}$ – kwadratu prędkości kulki na dywanie od drogi. <u>Zaznacz</u> punkty pomiarowe oraz niepewności $\\boldsymbol{\\Delta_{v^2}}$ oraz <u>narysuj</u> prostą najlepiej dopasowaną do punktów pomiarowych.</strong></p>\n<br>\n<p><strong>Na podstawie wykresu <u>wyznacz</u> wartość przyśpieszenia $\\boldsymbol{a}$ kulki na dywanie oraz drogę $\\boldsymbol{s_z}$, jaką przebyła kulka na dywanie aż do zatrzymania się.</strong></p>\n<br>\n<p>Uwaga! <em>Rozwiązania prowadzące do wyznaczenia $a$ oraz $s_z$, które nie wykorzystują wykresu </em>(tylko same dane z tabeli),<em> nie będą zgodne z poleceniem.</em></p>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/2023-czerwiec-z1-siatka.png\" alt=\"Układ współrzędnych do narysowania wykresu\" class=\"theory-img\" style=\"max-height:620px;display:block;margin:15px auto;\"></div>\n</div>",
                "solution": {
                  "intuition": "Praca siły wypadkowej zmienia energię kinetyczną ruchu postępowego. Nachylenie wykresu kwadratu prędkości pozwala wyznaczyć opóźnienie.",
                  "givens": "$a>0$ oznacza wartość opóźnienia. Dane pomiarowe i niepewności podano w tabeli.",
                  "steps": [
                    {
                      "title": "Zadanie 1.1",
                      "content": "Siła wypadkowa jest przeciwna do ruchu: $F_w=ma$. Jej praca na drodze $s$ wynosi $W=-mas$.\nTwierdzenie o pracy i zmianie energii kinetycznej ruchu postępowego:\n$-mas=\\frac12mv^2-\\frac12mv_0^2$.\nPo pomnożeniu przez $2/m$: $-2as=v^2-v_0^2$.\nZatem $v^2=v_0^2-2as$."
                    },
                    {
                      "title": "Zadanie 1.2",
                      "content": "Nanosimy wszystkie pięć punktów z tabeli i pionowe odcinki niepewności. Rysujemy prostą najlepiej dopasowaną (fioletową na rysunku CKE).<div class=\"chart-container-svg\"><img src=\"img/energy/2023-czerwiec-z1-rozwiazanie.png\" alt=\"Wykres z punktami, niepewnościami i prostą dopasowaną według klucza CKE\" class=\"theory-img\" style=\"max-height:610px;display:block;margin:15px auto;\"></div>Z prostej odczytujemy przykładowo punkty $(0{,}00;0{,}098)$ i $(0{,}84;0{,}010)$, w jednostkach osi wykresu.\nWartość bezwzględna nachylenia:\n$|b|=\\frac{0{,}098-0{,}010}{0{,}84-0{,}00}\\text{ m/s}^2$.\n$|b|\\approx0{,}105\\text{ m/s}^2$.\nPonieważ $b=-2a$, to $a=|b|/2\\approx0{,}052\\text{ m/s}^2$.\nPrzecięcie przedłużonej prostej z osią $s$ odpowiada $v=0$: $s_z\\approx0{,}94\\text{ m}$.\nKlucz dopuszcza $a$ od $0{,}047$ do $0{,}057\\text{ m/s}^2$ i $s_z$ od $0{,}90$ do $0{,}98\\text{ m}$."
                    }
                  ],
                  "answer": "1.1: $v^2=v_0^2-2as$.\n1.2: $a\\approx0{,}052\\text{ m/s}^2$, $s_z\\approx0{,}94\\text{ m}$.",
                  "trap": "W 1.2 trzeba wykorzystać narysowany wykres; same obliczenia z tabeli nie wystarczają.",
                  "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2023-czerwiec-matura-rozszerzona-odpowiedzi.pdf#page=2\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 2–7</a>."
                },
                "originalTaskId": "matura-cke-2023-czerwiec-zad-1",
                "formula": "2023",
                "sourcePages": [
                  4,
                  5
                ],
                "solutionSource": {
                  "publisher": "Centralna Komisja Egzaminacyjna",
                  "url": "https://arkusze.pl/maturalne/fizyka-2023-czerwiec-matura-rozszerzona-odpowiedzi.pdf",
                  "localFile": "data/arkusze_cke/2023/fizyka-2023-czerwiec-matura-rozszerzona-odpowiedzi.pdf",
                  "pages": [
                    2,
                    7
                  ]
                }
              },
              {
                "id": "matura-cke-2023-zad-1",
                "number": 2023,
                "title": "Matura maj 2023 zad.1 nowa formuła",
                "year": "2023 maj",
                "difficulty": 2,
                "source": "Matura CKE 2023 (Maj)",
                "link": "https://arkusze.pl/maturalne/fizyka-2023-maj-matura-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Ruch względny",
                  "Pościg",
                  "Maksymalna odległość",
                  "Kinematyka"
                ],
                "image": "img/cke_2023_maj_zad1_rysunek1.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1. (0–4)</h4>\n<p>Samochód policyjny $\\mathcal{P}$ jechał ze stałą prędkością o wartości $v_{0\\mathcal{P}} = 20\\text{ m/s}$. W pewnej chwili został on wyprzedzony przez samochód osobowy $\\mathcal{F}$, jadący w tym samym kierunku ze stałą prędkością o wartości $v_\\mathcal{F} = 35\\text{ m/s}$ (zobacz rysunek 1.).</p>\n\n<p style=\"text-align:center; margin-top: 10px; margin-bottom: 5px;\"><strong>Rysunek 1.</strong></p>\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2023_maj_zad1_rysunek1.png\" alt=\"Rysunek 1\" class=\"theory-img\" style=\"max-height: 250px; display: block; margin: 0 auto; margin-top: 5px; margin-bottom: 15px;\">\n</div>\n\n<p>W chwili $t_0 = 0$, gdy odległość między samochodami $\\mathcal{P}$ i $\\mathcal{F}$ zwiększyła się do $d_0 = 40\\text{ m}$, samochód policyjny rozpoczął pościg ze stałym przyśpieszeniem o wartości $a = 6\\text{ m/s}^2$ (zobacz rysunek 2.).</p>\n\n<p style=\"text-align:center; margin-top: 10px; margin-bottom: 5px;\"><strong>Rysunek 2. ($t_0 = 0$)</strong></p>\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2023_maj_zad1_rysunek2.png\" alt=\"Rysunek 2\" class=\"theory-img\" style=\"max-height: 250px; display: block; margin: 0 auto; margin-top: 5px; margin-bottom: 15px;\">\n</div>\n\n<p>Odległość $d$ między samochodami $\\mathcal{P}$ i $\\mathcal{F}$ jeszcze przez pewien czas rosła, w pewnej chwili osiągnęła wartość maksymalną $d_{max}$, a następnie zaczęła maleć.</p>\n<br>\n<p>Przyjmij, że:</p>\n<ul>\n<li>od chwili $t_0 = 0$ samochód policyjny $\\mathcal{P}$ poruszał się ruchem jednostajnie przyśpieszonym prostoliniowym</li>\n<li>samochód $\\mathcal{F}$ cały czas poruszał się ruchem jednostajnym prostoliniowym</li>\n<li>odległość pomiędzy samochodami traktujemy jako odległość pomiędzy ustalonymi punktami na przednich zderzakach.</li>\n</ul>\n<br>\n<p><strong>Oblicz $d_{max}$ – maksymalną odległość pomiędzy samochodami $\\mathcal{P}$ i $\\mathcal{F}$ podczas pościgu. Zapisz obliczenia.</strong></p>\n</div>",
                "solution": {
                  "intuition": "Odległość między samochodami rośnie tak długo, jak długo prędkość uciekającego samochodu F jest większa od prędkości goniącego samochodu policyjnego P. Maksymalna odległość d_max występuje dokładnie w chwili, gdy prędkości obu pojazdów się zrównają (v_P = v_F).",
                  "givens": "$v_{0\\mathcal{P}} = 20\\text{ m/s}$, $v_\\mathcal{F} = 35\\text{ m/s}$, $d_0 = 40\\text{ m}$, $a = 6\\text{ m/s}^2$",
                  "steps": [
                    {
                      "title": "Krok 1: Warunek maksymalnej odległości",
                      "content": "Odległość $d(t)$ osiąga ekstremum (maksimum), gdy prędkość względna wynosi zero, czyli gdy prędkości obu samochodów są równe: $v_\\mathcal{P}(t_m) = v_\\mathcal{F}$.\nPonieważ radiowóz przyspiesza: $v_\\mathcal{P}(t) = v_{0\\mathcal{P}} + a \\cdot t$.\nStąd:\n$$20 + 6 \\cdot t_m = 35 \\implies 6 \\cdot t_m = 15 \\implies t_m = \\frac{15}{6} = 2{,}5\\text{ s}$$"
                    },
                    {
                      "title": "Krok 2: Drogi przebyte do chwili $t_m$",
                      "content": "Droga przebyta przez samochód $\\mathcal{F}$:\n$$s_\\mathcal{F} = v_\\mathcal{F} \\cdot t_m = 35\\text{ m/s} \\cdot 2{,}5\\text{ s} = 87{,}5\\text{ m}$$\nDroga przebyta przez samochód policyjny $\\mathcal{P}$:\n$$s_\\mathcal{P} = v_{0\\mathcal{P}} \\cdot t_m + \\frac{a \\cdot t_m^2}{2} = 20 \\cdot 2{,}5 + \\frac{6 \\cdot (2{,}5)^2}{2} = 50 + 3 \\cdot 6{,}25 = 50 + 18{,}75 = 68{,}75\\text{ m}$$"
                    },
                    {
                      "title": "Krok 3: Obliczenie maksymalnej odległości $d_{max}$",
                      "content": "W chwili początkowej odległość wynosiła $d_0 = 40\\text{ m}$.\n$$d_{max} = d_0 + s_\\mathcal{F} - s_\\mathcal{P} = 40\\text{ m} + 87{,}5\\text{ m} - 68{,}75\\text{ m} = 58{,}75\\text{ m}$$"
                    }
                  ],
                  "numerical": "$d_{max} = 58{,}75\\text{ m}$",
                  "answer": "$d_{max} = 58{,}75\\text{ m}$",
                  "trap": "Pamiętaj o dodaniu początkowej odległości d_0 = 40 m oraz o tym, że samochód policyjny w chwili t_0 = 0 miał już prędkość początkową v_{0P} = 20 m/s."
                }
              },
              {
                "id": "matura-cke-2023-pokazowy-zad-1",
                "number": 202300,
                "title": "Matura arkusz pokazowy 2023 zad.1 nowa formuła",
                "year": "2023 pokazowy",
                "difficulty": 3,
                "source": "Arkusz pokazowy CKE (Formuła 2023)",
                "link": "https://arkusze.pl/maturalne/fizyka-2023-przykladowy-arkusz-cke-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Rzut poziomy",
                  "Równanie toru",
                  "Kinematyka"
                ],
                "image": "img/cke_2023_pokazowy_zad1.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1.</h4>\n<p>Z niewielkiej wysokości nad poziomym podłożem uczniowie rzucili małą metalową kulkę. Prędkość $\\vec{v}_0$ kulki w chwili początkowej ruchu ($t_0 = 0$) miała kierunek poziomy. Gdy kulka się poruszała, uczniowie wykonali serię zdjęć stroboskopowych (w jednakowych odstępach czasu) kulki w płaszczyźnie ruchu. Na zdjęciu przedstawiającym położenia kulki uczniowie dorysowali kartezjański układ współrzędnych $(x, y)$ oraz tor ruchu kulki (zobacz rysunek poniżej).</p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2023_pokazowy_zad1_tor.png\" alt=\"Rysunek do zadania\" class=\"theory-img\" style=\"max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<p>Następnie uczniowie wyznaczyli równanie toru ruchu kulki. W tym celu założyli, że torem ruchu jest fragment paraboli. W równaniu toru współczynniki liczbowe wyrażono w podstawowych jednostkach układu SI:</p>\n<p style=\"text-align:center;\">$y = 2 - \\frac{1}{18} x^2$</p>\n<br>\n<p>W zadaniach 1.1.–1.2. pomiń opór powietrza i przyjmij do obliczeń wartość przyśpieszenia ziemskiego $g = 9{,}81\\text{ m/s}^2$.</p>\n\n<h4>Zadanie 1.1. (0–1)</h4>\n<p><strong>Dokończ zdanie. Zaznacz właściwą odpowiedź spośród podanych.</strong></p>\n<br>\n<p>Czas lotu kulki od chwili $t_0$ do chwili uderzenia o podłoże wynosi w zaokrągleniu</p>\n<ol type=\"A\">\n<li>$t \\approx 0{,}24\\text{ s}$</li>\n<li>$t \\approx 0{,}64\\text{ s}$</li>\n<li>$t \\approx 1{,}11\\text{ s}$</li>\n<li>$t \\approx 1{,}41\\text{ s}$</li>\n</ol>\n\n<h4>Zadanie 1.2. (0–3)</h4>\n<p><strong>Oblicz $v_0$ – wartość prędkości początkowej tej kulki. Zapisz obliczenia.</strong></p>\n</div>",
                "solution": {
                  "intuition": "Równanie toru rzutu poziomego wynika z eliminacji czasu ze wzorów na współrzędne x(t) i y(t). Z postaci równania odczytujemy wysokość początkową i współczynnik wiążący g z v0.",
                  "givens": "$y(x) = 2 - \\frac{1}{18}x^2$, $g = 9{,}81\\text{ m/s}^2$",
                  "steps": [
                    {
                      "title": "Zadanie 1.1",
                      "content": "Dla $x=0$ mamy $y_0 = h = 2\\text{ m}$. Kulka uderza o podłoże, gdy $y=0$. Czas swobodnego spadania z wysokości $h$: $t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{4}{9{,}81}} \\approx 0{,}6387\\text{ s} \\approx 0{,}64\\text{ s}$. Poprawna odpowiedź B."
                    },
                    {
                      "title": "Zadanie 1.2",
                      "content": "Równania ruchu: $x = v_0 t \\implies t = \\frac{x}{v_0}$. $y = h - \\frac{g t^2}{2} = h - \\frac{g}{2v_0^2} x^2$. Porównując ze wzorem $y = 2 - \\frac{1}{18}x^2$, otrzymujemy: $\\frac{g}{2v_0^2} = \\frac{1}{18} \\implies v_0^2 = 9g = 9 \\cdot 9{,}81 = 88{,}29\\text{ m}^2/\\text{s}^2 \\implies v_0 = 3\\sqrt{9{,}81} \\approx 9{,}40\\text{ m/s}$."
                    }
                  ],
                  "numerical": "1.1: B ($0{,}64\\text{ s}$); 1.2: $v_0 \\approx 9{,}4\\text{ m/s}$",
                  "answer": "1.1: B; 1.2: $v_0 \\approx 9{,}4\\text{ m/s}$.",
                  "trap": "Pamiętaj, że współczynnik przy x^2 w równaniu toru to g / (2*v_0^2), a nie samo g / v_0^2."
                }
              },
              {
                "id": "matura-cke-2022-czerwiec-zad-1",
                "number": 202206,
                "title": "Matura czerwiec 2022 zad.1 stara formuła",
                "year": "2022 czerwiec",
                "difficulty": 2,
                "source": "Matura CKE 2022 Czerwiec (Termin dodatkowy)",
                "link": "https://arkusze.pl/maturalne/fizyka-2022-czerwiec-matura-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Wektory przemieszczenia",
                  "Droga",
                  "Kinematyka"
                ],
                "image": "img/cke_2022_czerwiec_zad1.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1.</h4>\n<p>Robot sprzątający rozpoczął ruch po płaskiej powierzchni. Ten robot może przemieszczać się wzdłuż odcinków prostych w dowolnym kierunku. Kolejne przemieszczenia robota, od chwili początkowej $t = 0$, opisano za pomocą współrzędnych $(x, y)$. W chwili $t = 0$ robot znajdował się w punkcie $P(0, 0)$. Ruch robota składał się z trzech kolejnych etapów:</p>\n<ul>\n<li>Etap I: ruch jednostajny z punktu $P$ z prędkością o wartości $10\\text{ cm/s}$ wzdłuż linii prostej do punktu o współrzędnych $x = 30\\text{ cm}$, $y = 40\\text{ cm}$.</li>\n<li>Etap II: przemieszczenie o wektor $\\Delta \\vec{r}_2 = [40\\text{ cm}; 30\\text{ cm}]$ wzdłuż linii prostej ruchem jednostajnym z prędkością o wartości $10\\text{ cm/s}$.</li>\n<li>Etap III: przemieszczenie do punktu o współrzędnych $x = 110\\text{ cm}$, $y = 40\\text{ cm}$ wzdłuż linii prostej ruchem jednostajnym z prędkością o wartości $10\\text{ cm/s}$.</li>\n</ul>\n\n<h4>Zadanie 1.1. (0–2)</h4>\n<p><strong>W układzie współrzędnych $(x, y)$ przedstaw tor ruchu robota od chwili $t = 0$ do końca trzeciego etapu ruchu. Wyskaluj osie i nanieś odpowiednie wartości.</strong></p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2022_czerwiec_zad1_siatka.png\" alt=\"Rysunek do zadania\" class=\"theory-img\" style=\"max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<h4>Zadanie 1.2. (0–3)</h4>\n<p><strong>Oblicz czas ruchu robota od chwili $t = 0$ do końca trzeciego etapu ruchu. Zapisz obliczenia.</strong></p>\n</div>",
                "solution": {
                  "intuition": "Ruch składa się z trzech prostoliniowych odcinków o stałej prędkości. Długość każdego odcinka wyznaczamy z twierdzenia Pitagorasa.",
                  "givens": "$v = 10\\text{ cm/s}$, kolejne punkty toru: $(0,0) \\to (30,40) \\to (70,70) \\to (110,40)$",
                  "steps": [
                    {
                      "title": "Zadanie 1.1",
                      "content": "Rysujemy trzy odcinki łączące punkty: $(0,0) \\to (30,40) \\to (70,70) \\to (110,40)$."
                    },
                    {
                      "title": "Zadanie 1.2",
                      "content": "Długość etapu 1: $s_1 = \\sqrt{30^2 + 40^2} = 50\\text{ cm}$. Długość etapu 2: $s_2 = \\sqrt{40^2 + 30^2} = 50\\text{ cm}$. Długość etapu 3: $\\Delta x = 110 - 70 = 40\\text{ cm}$, $\\Delta y = 40 - 70 = -30\\text{ cm} \\implies s_3 = \\sqrt{40^2 + (-30)^2} = 50\\text{ cm}$. Całkowita droga: $s = 50 + 50 + 50 = 150\\text{ cm}$. Czas ruchu: $t = \\frac{s}{v} = \\frac{150\\text{ cm}}{10\\text{ cm/s}} = 15\\text{ s}$."
                    }
                  ],
                  "numerical": "$s = 150\\text{ cm}$, $t = 15\\text{ s}$",
                  "answer": "1.1: Tor z trzech odcinków o długości 50 cm; 1.2: $t = 15\\text{ s}$.",
                  "trap": "Uważaj na współrzędne drugiego punktu: po dodaniu wektora [40, 30] do (30, 40) otrzymujemy (70, 70)."
                }
              },
              {
                "id": "matura-cke-2022-zad-1",
                "title": "Matura maj 2022 zad.1 stara formuła",
                "type": "theory",
                "difficulty": 3,
                "source": "CKE Matura (Maj 2022)",
                "tags": [
                  "kinematyka",
                  "dynamika",
                  "wykresy",
                  "matura"
                ],
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1.</h4>\n<p>Ciała A i B poruszały się w układzie inercjalnym w tę samą stronę, wzdłuż linii prostych równoległych. Na poniższym diagramie przedstawiono dla każdego z ciał A i B wykresy zależności wartości $v$ prędkości tych ciał od czasu $t$, od chwili $t = 0$ do chwili $t = 45\\text{ s}$. W chwili $t = 0$ ciała A i B znajdowały się obok siebie. Przyjmij, że odległość między torami ruchów obu ciał jest tak mała, że można ją pominąć.</p>\n<p style=\"text-align: center;\">Diagram</p>\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2022_zad1_diagram.png\" alt=\"Wykres prędkości dla ciał A i B\" class=\"theory-img\" style=\"max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n<h4>Zadanie 1.1. (0–1)</h4>\n<p><strong>Dokończ zdanie. Wpisz właściwą liczbę w wykropkowanym miejscu.</strong></p>\n<br>\n<p>Prędkość względna ciał A i B w chwili $t = 25\\text{ s}$ ma wartość ......... $\\frac{\\text{m}}{\\text{s}}$</p>\n<h4>Zadanie 1.2. (0–2)</h4>\n<p>Masa ciała A jest równa $12\\text{ kg}$.</p>\n<br>\n<p><strong>Oblicz wartość siły wypadkowej działającej na ciało A w chwili $t = 35\\text{ s}$.</strong></p>\n<h4>Zadanie 1.3. (0–3)</h4>\n<p><strong>Oblicz odległość pomiędzy ciałami A i B w chwili $t = 45\\text{ s}$.</strong></p>\n<br>\n<p>Przyjmij, że w chwili $t = 0$ odległość pomiędzy ciałami A i B była równa $0$.</p>\n</div>",
                "solution": {
                  "givens": "Wykres $v(t)$ dla ciał A i B.\n$m_A = 12\\text{ kg}$",
                  "intuition": "Zadanie 1.1: Prędkość względna to wartość bezwzględna różnicy prędkości obu ciał poruszających się w tę samą stronę.\nZadanie 1.2: Siłę wypadkową obliczamy z II zasady dynamiki Newtona ($F = ma$), gdzie przyspieszenie to zmiana prędkości w czasie odczytana z wykresu.\nZadanie 1.3: Odległość między ciałami to różnica dróg przebytych przez oba ciała. Drogę można obliczyć jako pole pod wykresem $v(t)$.",
                  "steps": [
                    {
                      "title": "Zadanie 1.1 - Prędkość względna",
                      "content": "Z wykresu odczytujemy prędkości w chwili $t = 25\\text{ s}$:\n$v_A = 20\\text{ m/s}$\n$v_B = 10\\text{ m/s}$\n\nCiała poruszają się w tę samą stronę, więc ich prędkość względna to różnica ich prędkości:\n$v_{\\text{wzgl}} = |v_A - v_B| = |20 - 10| = 10\\text{ m/s}$"
                    },
                    {
                      "title": "Zadanie 1.2 - Siła wypadkowa na ciało A",
                      "content": "Aby obliczyć siłę wypadkową, musimy wyznaczyć przyspieszenie ciała A w chwili $t = 35\\text{ s}$.\nZ wykresu widać, że w przedziale od $t = 30\\text{ s}$ do $t = 45\\text{ s}$ prędkość ciała A maleje liniowo od $20\\text{ m/s}$ do $0\\text{ m/s}$.\n\nPrzyspieszenie $a_A = \\frac{\\Delta v}{\\Delta t} = \\frac{0 - 20}{45 - 30} = \\frac{-20}{15} = -\\frac{4}{3}\\text{ m/s}^2$\n\nWartość siły wypadkowej (zgodnie z II zasadą dynamiki $F = ma$):\n$F = m_A \\cdot |a_A| = 12\\text{ kg} \\cdot \\frac{4}{3}\\text{ m/s}^2 = 16\\text{ N}$"
                    },
                    {
                      "title": "Zadanie 1.3 - Odległość pomiędzy ciałami",
                      "content": "Droga przebyta przez ciało jest równa polu figury pod wykresem $v(t)$.\n\n**Droga ciała A ($s_A$):**\nPole pod wykresem to suma pola prostokąta (od 0 do 30 s) i trójkąta (od 30 do 45 s).\n$s_A = (30\\text{ s} \\cdot 20\\text{ m/s}) + \\frac{1}{2} \\cdot 15\\text{ s} \\cdot 20\\text{ m/s}$\n$s_A = 600\\text{ m} + 150\\text{ m} = 750\\text{ m}$\n\n**Droga ciała B ($s_B$):**\nPole pod wykresem to suma trójkąta (0-15s), prostokąta (15-30s) i trójkąta (30-45s), lub po prostu pole trapezu (od 0 do 45s).\n$s_B = \\frac{1}{2} \\cdot 15 \\cdot 20 + 15 \\cdot 10 + \\frac{1}{2} \\cdot 15 \\cdot 10 = 150 + 150 + 75 = 375\\text{ m}$\n\n**Odległość:**\n$d = s_A - s_B = 750\\text{ m} - 375\\text{ m} = 375\\text{ m}$"
                    }
                  ],
                  "answer": "1.1: $10\\text{ m/s}$\n1.2: $16\\text{ N}$\n1.3: $375\\text{ m}$"
                }
              },
              {
                "id": "matura-cke-2022-pokazowy-zad-1",
                "number": 2022,
                "title": "Matura arkusz pokazowy marzec 2022 zad.1 nowa formuła",
                "year": "2022 maj",
                "difficulty": 2,
                "source": "Matura CKE 2022 (Maj)",
                "link": "https://arkusze.pl/maturalne/fizyka-2022-maj-matura-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Wykres v(t)",
                  "Prędkość względna",
                  "Kinematyka"
                ],
                "image": "img/cke_2022_zad1.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1. (0–4)</h4>\n<p>Dwa małe klocki A i B poruszały się wzdłuż osi $x$. W chwili $t = 0$ klocki mijały początek układu współrzędnych (punkt $x = 0$). Wykres 1. na stronie 3. przedstawia zależność współrzędnej prędkości $v_x$ klocka A od czasu $t$. Wykres 2. przedstawia zależność współrzędnej położenia $x$ klocka B od czasu $t$.</p>\n<br>\n<p>(Opisana sytuacja odnosi się do przedziału czasu $[0, 5\\text{ s}]$.)</p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2022_zad1.png\" alt=\"Rysunek do zadania\" class=\"theory-img\" style=\"max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<h4>Zadanie 1.1. (0–1)</h4>\n<p><strong>Oceń prawdziwość poniższych zdań. Zaznacz P, jeśli zdanie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p>\n<table class=\"cke-table\">\n  <tr>\n    <td class=\"cke-num-col\">1.</td>\n    <td>Klocki A i B mają zawsze jednakowy zwrot prędkości w przedziale czasu $[0, 5\\text{ s}]$.</td>\n    <td class=\"cke-pf-col\">P</td>\n    <td class=\"cke-pf-col\">F</td>\n  </tr>\n  <tr>\n    <td class=\"cke-num-col\">2.</td>\n    <td>Klocki A i B minęły się w chwili $t = 2\\text{ s}$.</td>\n    <td class=\"cke-pf-col\">P</td>\n    <td class=\"cke-pf-col\">F</td>\n  </tr>\n  <tr>\n    <td class=\"cke-num-col\">3.</td>\n    <td>Szybkość średnia klocka A w przedziale czasu $[0, 5\\text{ s}]$ jest równa $2\\text{ m/s}$.</td>\n    <td class=\"cke-pf-col\">P</td>\n    <td class=\"cke-pf-col\">F</td>\n  </tr>\n</table>\n\n<h4>Zadanie 1.2. (0–3)</h4>\n<p><strong>Oblicz i zapisz współrzędne położenia klocków A i B w chwili $t = 5\\text{ s}$. Oblicz odległość między tymi klockami w chwili $t = 5\\text{ s}$. Zapisz obliczenia.</strong></p>\n</div>",
                "solution": {
                  "intuition": "Z wykresu położenia można wyznaczyć prędkość jako nachylenie, z wykresu prędkości można wyznaczyć położenie jako pole powierzchni pod krzywą.",
                  "givens": "Odczyty z wykresów A i B.",
                  "steps": [
                    {
                      "title": "Zadanie 1.1",
                      "content": "Analiza wykresów."
                    },
                    {
                      "title": "Zadanie 1.2",
                      "content": "Położenie A jako pole pod wykresem $v_A(t)$, położenie B bezpośrednio z wykresu $x(t)$."
                    }
                  ],
                  "numerical": "1.1: Odpowiedzi P/F | 1.2: Ostateczna odległość z odejmowania.",
                  "answer": "1.1: Sprawdź nachylenia i pola.",
                  "trap": "Zwróć uwagę na ujemne współrzędne prędkości."
                }
              },
              {
                "id": "matura-cke-2021-czerwiec-zad-1",
                "number": 202106,
                "title": "Matura czerwiec 2021 zad.1 stara formuła",
                "year": "2021 czerwiec",
                "difficulty": 3,
                "source": "Matura CKE 2021 Czerwiec (Termin dodatkowy)",
                "link": "https://arkusze.pl/maturalne/fizyka-2021-czerwiec-matura-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Rzut poziomy",
                  "Równanie paraboli",
                  "Kinematyka"
                ],
                "image": "img/cke_2021_czerwiec_zad1.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1.</h4>\n<p>Z wieży obserwacyjnej wystrzelono małą kulkę. Prędkość $\\vec{v}_0$ kulki w chwili początkowej ruchu ($t_0 = 0$) miała kierunek <u>poziomy</u>. Na wykresie poniżej, w układzie współrzędnych $(x, y)$, przedstawiono tor lotu kulki od chwili $t_0$ aż do momentu uderzenia kulki w poziome podłoże.</p>\n<br>\n<p>Przyjmij do obliczeń przyśpieszenie ziemskie $g = 9{,}81\\text{ m/s}^2$. W zadaniach 1.1.–1.3. pomiń opory ruchu.</p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2021_czerwiec_zad1_tor.png\" alt=\"Rysunek do zadania\" class=\"theory-img\" style=\"max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<h4>Zadanie 1.1. (0–2)</h4>\n<p><strong>Na podstawie danych odczytanych z wykresu oblicz czas lotu kulki od chwili $t_0 = 0$, aż do chwili uderzenia kulki o ziemię.</strong></p>\n\n<h4>Zadanie 1.2. (0–4)</h4>\n<p>Torem ruchu kulki jest fragment paraboli opisanej równaniem:</p>\n<p style=\"text-align:center;\">$y = -0{,}0125 \\cdot x^2 + 20 \\qquad \\text{gdzie } x \\in [0; 40]$</p>\n<br>\n<p>Współczynniki liczbowe w tym równaniu wyrażone są (domyślnie) w podstawowych jednostkach układu SI.</p>\n<br>\n<p><strong>Wyprowadź powyższe równanie toru lotu kulki na podstawie równań ruchu rzutu poziomego oraz położenia początkowego i końcowego kulki podczas lotu.</strong></p>\n\n<h4>Zadanie 1.3. (0–1)</h4>\n<p><strong>Na rysunku poniżej narysuj wektor siły działającej na kulkę podczas lotu, gdy znajduje się ona w punkcie $A$. Zapisz obok rysunku nazwę tej siły.</strong></p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2021_czerwiec_zad1_punktA.png\" alt=\"Rysunek do zadania\" class=\"theory-img\" style=\"max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n</div>",
                "solution": {
                  "intuition": "Rzut poziomy składa się z jednostajnego ruchu w poziomie i jednostajnie przyspieszonego spadku swobodnego w pionie.",
                  "givens": "$h = 20\\text{ m}$, $z = 40\\text{ m}$, $g = 9{,}81\\text{ m/s}^2$",
                  "steps": [
                    {
                      "title": "Zadanie 1.1",
                      "content": "Z wykresu odczytujemy wysokość początkową $h = 20\\text{ m}$. Czas spadania: $t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{40}{9{,}81}} \\approx 2{,}02\\text{ s}$."
                    },
                    {
                      "title": "Zadanie 1.2",
                      "content": "Równania ruchu: $x(t) = v_0 t \\implies t = \\frac{x}{v_0}$. $y(t) = h - \\frac{gt^2}{2} = 20 - \\frac{g}{2v_0^2}x^2$. Kulka uderza w ziemię w $x=40\\text{ m}$ w czasie $t_k$: $v_0 = \\frac{x_k}{t_k} = \\frac{40\\text{ m}}{\\sqrt{40/g}} = \\sqrt{40g} \\implies v_0^2 = 40g$. Wtedy współczynnik przy $x^2$: $-\\frac{g}{2v_0^2} = -\\frac{g}{2 \\cdot 40g} = -\\frac{1}{80} = -0{,}0125$. Stąd $y = -0{,}0125 x^2 + 20$."
                    },
                    {
                      "title": "Zadanie 1.3",
                      "content": "Wektor skierowany pionowo w dół, przyłożony w punkcie A. Nazwa siły: siła grawitacji (ciężar / siła ciężkości)."
                    }
                  ],
                  "numerical": "1.1: $t \\approx 2{,}02\\text{ s}$; 1.2: wyprowadzenie $y = -0{,}0125x^2 + 20$; 1.3: siła ciężkości w dół",
                  "answer": "1.1: $t \\approx 2{,}02\\text{ s}$; 1.2: Wyprowadzenie algebraiczne; 1.3: Wektor siły ciężkości pionowo w dół.",
                  "trap": "Nie myl czasu lotu z zasięgiem. Czas zależy wyłącznie od wysokości początkowej i g."
                }
              },
              {
                "id": "matura-cke-2021-zad-1",
                "number": 2021,
                "title": "Matura maj 2021 zad.1 stara formuła",
                "year": "2021 maj",
                "difficulty": 3,
                "source": "Matura CKE 2021 (Maj)",
                "link": "https://arkusze.pl/maturalne/fizyka-2021-maj-matura-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Rzut poziomy",
                  "Zasięg rzutu",
                  "Kinematyka",
                  "Zasada zachowania energii"
                ],
                "image": "img/cke_2021_zad1.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1.</h4>\n<p>Z wysokości $h_1 = 5{,}0\\text{ m}$ ponad punktem $P$ rzucono kulkę $\\text{K}_1$. Kulka upadła na poziome podłoże w odległości $d$ od punktu $P$ i potoczyła się dalej. Następnie z wysokości $h_2 = 2{,}0\\text{ m}$ ponad punktem $P$ rzucono taką samą kulkę $\\text{K}_2$. Druga kulka upadła także w odległości $d$ od punktu $P$. Prędkości początkowe $\\vec{v}_{01}$ i $\\vec{v}_{02}$ kulek w każdym rzucie miały kierunki poziome i leżały w tej samej płaszczyźnie. Na poniższym rysunku zilustrowano tory ruchu kulek w układzie współrzędnych $(x, y)$ – bez skali na osi $x$. Punkt $P$ jest początkiem tego układu współrzędnych.</p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2021_zad1.png\" alt=\"Tory ruchu kulek K1 i K2 w rzucie poziomym\" class=\"theory-img\" style=\"max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<p>W zadaniach 1.1.–1.2. pomiń opory ruchu oraz przyjmij do obliczeń, że przyśpieszenie ziemskie ma wartość $g = 9{,}8\\text{ m/s}^2$.</p>\n\n<h4>Zadanie 1.1. (0–2)</h4>\n<p><strong>Oblicz iloraz $\\frac{v_{01}}{v_{02}}$ – wartości prędkości początkowej kulki $\\text{K}_1$ i wartości prędkości początkowej kulki $\\text{K}_2$. Wynik liczbowy podaj zaokrąglony do dwóch cyfr znaczących.</strong></p>\n\n<h4>Zadanie 1.2. (0–3)</h4>\n<p>Wartość prędkości początkowej kulki $\\text{K}_1$ wynosi $v_{01} = 7{,}9\\text{ m/s}$.</p>\n<br>\n<p><strong>Oblicz wartość $v_{k1}$ prędkości kulki $\\text{K}_1$ tuż przed uderzeniem w poziome podłoże.</strong></p>\n</div>",
                "solution": {
                  "intuition": "Zasięg w rzucie poziomym d = v0 * t_spadku, gdzie czas spadania t = sqrt(2h/g). Jeśli obie kulki spadły w tej samej odległości d, to v01 * sqrt(2h1/g) = v02 * sqrt(2h2/g). Prędkość końcową w zadaniu 1.2 można obliczyć ze składowych prędkości (vx i vy) lub bezpośrednio z zasady zachowania energii mechanicznej.",
                  "givens": "$h_1 = 5{,}0\\text{ m}$, $h_2 = 2{,}0\\text{ m}$, $g = 9{,}8\\text{ m/s}^2$, $v_{01} = 7{,}9\\text{ m/s}$",
                  "steps": [
                    {
                      "title": "Zadanie 1.1 - Iloraz prędkości początkowych v01 / v02",
                      "content": "Równania ruchu w osi poziomej i pionowej dla rzutu poziomego:\n$$x(t) = v_0 t, \\qquad y(t) = h - \\frac{gt^2}{2}$$\n\nCzas ruchu do momentu upadku na ziemię ($y = 0$):\n$$t = \\sqrt{\\frac{2h}{g}}$$\n\nZasięg rzutu $d$ wynosi:\n$$d = v_0 \\cdot t = v_0 \\sqrt{\\frac{2h}{g}}$$\n\nPonieważ obie kulki upadły w tej samej odległości $d$:\n$$d = v_{01} \\sqrt{\\frac{2h_1}{g}} = v_{02} \\sqrt{\\frac{2h_2}{g}}$$\n\nDzieląc obustronnie przez $\\sqrt{\\frac{2}{g}}$ i przekształcając do ilorazu:\n$$v_{01} \\sqrt{h_1} = v_{02} \\sqrt{h_2} \\implies \\frac{v_{01}}{v_{02}} = \\sqrt{\\frac{h_2}{h_1}}$$\n\nPodstawiamy dane liczbowe:\n$$\\frac{v_{01}}{v_{02}} = \\sqrt{\\frac{2{,}0\\text{ m}}{5{,}0\\text{ m}}} = \\sqrt{0{,}4} \\approx 0{,}6325$$\n\nZaokrąglając do dwóch cyfr znaczących:\n$$\\frac{v_{01}}{v_{02}} \\approx 0{,}63$$"
                    },
                    {
                      "title": "Zadanie 1.2 - Prędkość kulki K1 tuż przed uderzeniem",
                      "content": "**Sposób 1: Z zasady zachowania energii mechanicznej**\nEnergia początkowa równa się energii kinetycznej tuż przed uderzeniem o podłoże:\n$$E_{k0} + E_p = E_k$$\n$$\\frac{m v_{01}^2}{2} + m g h_1 = \\frac{m v_{k1}^2}{2}$$\n\nMnożąc przez 2 i dzieląc przez $m$:\n$$v_{k1}^2 = v_{01}^2 + 2 g h_1$$\n$$v_{k1} = \\sqrt{v_{01}^2 + 2 g h_1}$$\n\nPodstawiamy dane:\n$$v_{k1} = \\sqrt{(7{,}9)^2 + 2 \\cdot 9{,}8 \\cdot 5{,}0} = \\sqrt{62{,}41 + 98} = \\sqrt{160{,}41} \\approx 12{,}665\\text{ m/s} \\approx 13\\text{ m/s}$$\n\n*(Można też podać wynik z dokładnością do dwóch/trzech cyfr znaczących: ok. $12{,}7\\text{ m/s}$ lub $13\\text{ m/s}$)*."
                    }
                  ],
                  "numerical": "1.1: $\\frac{v_{01}}{v_{02}} \\approx 0{,}63$ | 1.2: $v_{k1} \\approx 13\\text{ m/s}$ (dokładniej $12{,}7\\text{ m/s}$)",
                  "answer": "1.1: $0{,}63$\n1.2: $13\\text{ m/s}$ (lub $12{,}7\\text{ m/s}$)",
                  "trap": "Pamiętaj o zaokrągleniu wyniku w zadaniu 1.1 dokładnie do dwóch cyfr znaczących (0,63)."
                }
              },
              {
                "id": "matura-cke-2020-lipiec-zad-1",
                "number": 202007,
                "title": "Matura lipiec 2020 zad.1 stara formuła",
                "year": "2020 lipiec",
                "difficulty": 2,
                "source": "Matura CKE 2020 Lipiec (Termin dodatkowy)",
                "link": "https://arkusze.pl/maturalne/fizyka-2020-lipiec-matura-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Ruch jednostajnie przyspieszony",
                  "Droga startu",
                  "Kinematyka"
                ],
                "image": "img/cke_2020_lipiec_zad1.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1.</h4>\n<p>Pewien samolot pasażerski odrywa się od ziemi po osiągnięciu prędkości o wartości $288\\text{ km/h}$ w kierunku <u>poziomy</u>m.</p>\n<br>\n<p>W zadaniach 1.1.–1.2. przyjmij uproszczony model zjawiska oparty na założeniu, że prędkość samolotu w chwili początkowej $t_0 = 0$ wynosiła zero i aż do momentu oderwania się od ziemi samolot poruszał się ruchem jednostajnie przyśpieszonym prostoliniowym względem ziemi.</p>\n\n<h4>Zadanie 1.1. (0–2)</h4>\n<p>Gdy ten samolot rozpędzał się po <u>poziomy</u>m pasie startowym lotniska, to przebył drogę $45\\text{ m}$ w czasie od chwili $t_7 = 7\\text{ s}$ do chwili $t_{10} = 10\\text{ s}$.</p>\n<br>\n<p><strong>Oblicz wartość przyśpieszenia samolotu w tej sytuacji. Zapisz obliczenia.</strong></p>\n\n<h4>Zadanie 1.2. (0–2)</h4>\n<p>Innym razem ten sam samolot rozpędzał się po pasie startowym, poruszając się ze stałym przyśpieszeniem o wartości $1{,}4\\text{ m/s}^2$.</p>\n<br>\n<p><strong>Ustal i zapisz, czy w takim przypadku samolot mógłby oderwać się od ziemi, gdyby rozpędził się po pasie startowym o długości $1\\,900\\text{ m}$. Wykonaj niezbędne obliczenia.</strong></p>\n</div>",
                "solution": {
                  "intuition": "Ruch jednostajnie przyspieszony bez prędkości początkowej opisywany jest równaniem s(t) = at^2 / 2.",
                  "givens": "$v_k = 288\\text{ km/h} = 80\\text{ m/s}$, $\\Delta s = 45\\text{ m}$ między 7 a 10 s",
                  "steps": [
                    {
                      "title": "Zadanie 1.1",
                      "content": "Droga przebyta między 7 a 10 s: $\\Delta s = s(10) - s(7) = \\frac{a \\cdot 10^2}{2} - \\frac{a \\cdot 7^2}{2} = \\frac{a}{2}(100 - 49) = 25{,}5 a$. $25{,}5 a = 45\\text{ m} \\implies a = \\frac{45}{25{,}5} = \\frac{90}{51} \\approx 1{,}76\\text{ m/s}^2$."
                    },
                    {
                      "title": "Zadanie 1.2",
                      "content": "Droga potrzebna do uzyskania prędkości oderwania $v = 80\\text{ m/s}$ przy przyspieszeniu $a = 1{,}4\\text{ m/s}^2$: $s = \\frac{v^2}{2a} = \\frac{80^2}{2 \\cdot 1{,}4} = \\frac{6400}{2{,}8} \\approx 2286\\text{ m}$. Ponieważ wymagana droga $2286\\text{ m} > 1900\\text{ m}$, samolot nie zdoła oderwać się od ziemi."
                    }
                  ],
                  "numerical": "1.1: $a \\approx 1{,}76\\text{ m/s}^2$; 1.2: Nie, wymagana droga to ok. $2286\\text{ m}$",
                  "answer": "1.1: $a \\approx 1{,}76\\text{ m/s}^2$; 1.2: Nie, pas $1900\\text{ m}$ jest za krótki (potrzeba ok. $2286\\text{ m}$).",
                  "trap": "Pamiętaj o przeliczeniu prędkości $288\\text{ km/h}$ na jednostki SI: $288 / 3{,}6 = 80\\text{ m/s}$."
                }
              },
              {
                "id": "matura-cke-2020-kwiecien-zad-1",
                "number": 202004,
                "title": "Matura próbna kwiecień 2020 zad.1 stara formuła",
                "year": "2020 kwiecień",
                "difficulty": 3,
                "source": "Matura próbna CKE Kwiecień 2020",
                "link": "https://arkusze.pl/maturalne/fizyka-2020-kwiecien-probna-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Ruch jednostajny",
                  "Wyprowadzenie wzoru",
                  "Kinematyka"
                ],
                "image": "img/cke_2020_kwiecien_zad1.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1.</h4>\n<p>Samochód A jedzie z maksymalną prędkością dozwoloną na danym odcinku trasy. Wartość tej prędkości wynosi $v_{\\max}$. Samochód B jedzie z prędkością mniejszą od $v_{\\max}$ o wartość $\\Delta v$. Oba samochody poruszają się ruchem jednostajnym. Czas, w jakim samochód B pokona odcinek trasy o długości $d$, jest dłuższy od czasu, w jakim samochód A pokona ten sam odcinek trasy, o wartość:</p>\n<p style=\"text-align:center;\">$\\Delta t = \\frac{d \\cdot \\Delta v}{v_{\\max}^2 - v_{\\max} \\Delta v}$</p>\n\n<h4>Zadanie 1.1. (0–2)</h4>\n<p><strong>Wyprowadź powyższy wzór na różnicę czasów, w jakich oba samochody pokonują odcinek trasy o długości $d$.</strong></p>\n\n<h4>Zadanie 1.2. (0–2)</h4>\n<p>Maksymalna dozwolona wartość prędkości dla pojazdów osobowych poruszających się po autostradzie wynosi $140\\text{ km/h}$. Samochód B pokonał odcinek autostrady o długości $10\\text{ km}$ w czasie o pół minuty dłuższym niż samochód A.</p>\n<br>\n<p><strong>Oblicz, ile wynosi różnica wartości prędkości samochodów A i B. Zapisz obliczenia.</strong></p>\n</div>",
                "solution": {
                  "intuition": "Różnica czasów przejazdu tego samego odcinka z różnymi stałymi prędkościami sprowadza się do odjęcia ułamków d/vB - d/vA.",
                  "givens": "$v_A = v_{\\max}$, $v_B = v_{\\max} - \\Delta v$, $v_{\\max} = 140\\text{ km/h}$, $d = 10\\text{ km}$, $\\Delta t = 0{,}5\\text{ min} = \\frac{1}{120}\\text{ h}$",
                  "steps": [
                    {
                      "title": "Zadanie 1.1",
                      "content": "Czas samochodu A: $t_A = \\frac{d}{v_{\\max}}$. Czas samochodu B: $t_B = \\frac{d}{v_{\\max} - \\Delta v}$. Różnica czasów: $\\Delta t = t_B - t_A = \\frac{d}{v_{\\max} - \\Delta v} - \\frac{d}{v_{\\max}} = \\frac{d \\cdot v_{\\max} - d(v_{\\max} - \\Delta v)}{v_{\\max}(v_{\\max} - \\Delta v)} = \\frac{d \\cdot \\Delta v}{v_{\\max}^2 - v_{\\max}\\Delta v}$."
                    },
                    {
                      "title": "Zadanie 1.2",
                      "content": "Wstawiamy dane: $\\frac{1}{120} = \\frac{10 \\cdot \\Delta v}{140^2 - 140 \\Delta v} \\implies 19600 - 140\\Delta v = 1200 \\Delta v \\implies 1340 \\Delta v = 19600 \\implies \\Delta v = \\frac{19600}{1340} \\approx 14{,}6\\text{ km/h}$."
                    }
                  ],
                  "numerical": "1.2: $\\Delta v \\approx 14{,}6\\text{ km/h}$",
                  "answer": "1.1: Wyprowadzenie algebraiczne; 1.2: $\\Delta v \\approx 14{,}6\\text{ km/h}$.",
                  "trap": "Zwróć uwagę na spójność jednostek: pół minuty to 1/120 godziny, a prędkość jest w km/h."
                }
              },
              {
                "id": "matura-cke-2019-czerwiec-zad-1",
                "number": 201906,
                "title": "Matura czerwiec 2019 zad.1 stara formuła",
                "year": "2019 czerwiec",
                "difficulty": 3,
                "source": "Matura CKE 2019 Czerwiec (Termin dodatkowy)",
                "link": "https://arkusze.pl/maturalne/fizyka-2019-czerwiec-matura-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Wykres przyspieszenia",
                  "Całkowanie graficzne",
                  "Kinematyka"
                ],
                "image": "img/cke_2019_czerwiec_zad1.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1.</h4>\n<p>Pewne ciało porusza się ruchem prostoliniowym wzdłuż osi $x$. Zamieszczony poniżej wykres przedstawia zależność współrzędnej $a_x$ przyspieszenia ciała od czasu $t$ w tym ruchu. Wartość prędkości początkowej ciała wynosi zero.</p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2019_czerwiec_zad1_wykres_a.png\" alt=\"Rysunek do zadania\" class=\"theory-img\" style=\"max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<h4>Zadanie 1.1. (0–3)</h4>\n<p><strong>Narysuj wykres zależności współrzędnej $v_x$ prędkości ciała od czasu $t$ w ruchu opisanym powyżej (od $t = 0\\text{ s}$ do $t = 12\\text{ s}$). Zapisz obliczenia pozwalające ustalić wartość $v_x$ w $t = 5\\text{ s}$ ruchu oraz w $t = 12\\text{ s}$ ruchu.</strong></p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2019_czerwiec_zad1_siatka_v.png\" alt=\"Rysunek do zadania\" class=\"theory-img\" style=\"max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<h4>Zadanie 1.2. (0–3)</h4>\n<p><strong>Uzupełnij tabelę przedstawioną poniżej. W drugiej kolumnie podkreśl właściwe określenie dotyczące wartości prędkości ciała w danym przedziale czasu. W trzeciej kolumnie wpisz drogę przebytą przez ciało w danym przedziale czasu.</strong></p>\n\n<table style=\"width:100%; border-collapse: collapse; text-align:center; margin: 15px 0;\" border=\"1\">\n<tr><th>Przedział czasu</th><th>Wartość prędkości</th><th>Droga $s$, m</th></tr>\n<tr><td>$0\\text{ s} < t \\le 5\\text{ s}$</td><td>rośnie / maleje / pozostaje stała</td><td>&nbsp;</td></tr>\n<tr><td>$5\\text{ s} < t \\le 10\\text{ s}$</td><td>rośnie / maleje / pozostaje stała</td><td>&nbsp;</td></tr>\n<tr><td>$10\\text{ s} < t \\le 12\\text{ s}$</td><td>rośnie / maleje / pozostaje stała</td><td>&nbsp;</td></tr>\n</table>\n</div>",
                "solution": {
                  "intuition": "Pole pod wykresem przyspieszenia a(t) odpowiada zmianie prędkości delta v, a pole pod wykresem prędkości v(t) odpowiada przebytej drodze.",
                  "givens": "$v_0 = 0$, $a_x(t)$ schodkowe: $2\\text{ m/s}^2$ dla $0-5\\text{ s}$, $0$ dla $5-10\\text{ s}$, $-3\\text{ m/s}^2$ dla $10-12\\text{ s}$",
                  "steps": [
                    {
                      "title": "Zadanie 1.1",
                      "content": "W $t=5\\text{ s}$: $v_x(5) = 0 + 2 \\cdot 5 = 10\\text{ m/s}$. W przedziale $5-10\\text{ s}$: $a=0$, więc $v_x = 10\\text{ m/s}$. W $t=12\\text{ s}$: $v_x(12) = 10 + (-3) \\cdot 2 = 4\\text{ m/s}$. Wykres: linia prosta od $(0,0)$ do $(5,10)$, pozioma od $(5,10)$ do $(10,10)$, opadająca prosta od $(10,10)$ do $(12,4)$."
                    },
                    {
                      "title": "Zadanie 1.2",
                      "content": "1. $0-5\\text{ s}$: wartość prędkości rośnie, droga $s_1 = \\frac{1}{2} \\cdot 5 \\cdot 10 = 25\\text{ m}$. 2. $5-10\\text{ s}$: wartość prędkości pozostaje stała, droga $s_2 = 5 \\cdot 10 = 50\\text{ m}$. 3. $10-12\\text{ s}$: wartość prędkości maleje, droga $s_3 = \\frac{10 + 4}{2} \\cdot 2 = 14\\text{ m}$."
                    }
                  ],
                  "numerical": "1.1: $v(5) = 10\\text{ m/s}, v(12) = 4\\text{ m/s}$; 1.2: drogi: $25\\text{ m}, 50\\text{ m}, 14\\text{ m}$",
                  "answer": "1.1: Wykres v(t) o wierzchołkach (0,0)-(5,10)-(10,10)-(12,4); 1.2: rośnie ($25\\text{ m}$), stała ($50\\text{ m}$), maleje ($14\\text{ m}$).",
                  "trap": "Zauważ, że w przedziale 10-12 s prędkość maleje z 10 do 4 m/s, ale wciąż jest dodatnia, więc droga nadal przyrasta."
                }
              },
              {
                "id": "matura-cke-2019-zad-1",
                "number": 2019,
                "title": "Matura maj 2019 zad.1 stara formuła",
                "year": "2019 maj",
                "difficulty": 2,
                "source": "Matura CKE 2019 (Maj)",
                "link": "https://arkusze.pl/maturalne/fizyka-2019-maj-matura-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Rzut poziomy",
                  "Prędkość początkowa",
                  "Kinematyka"
                ],
                "image": "img/cke_2019_zad1.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1.</h4>\n<p>Podczas wykonywania rzutu z autu zawodnik nadaje piłce prędkość $\\vec{v}_0$ w kierunku <u>poziomy</u>m. Środek masy piłki w chwili opuszczenia rąk zawodnika (chwili początkowej $t=0$) znajduje się na wysokości $h = 2{,}00\\text{ m}$ nad poziomą murawą boiska. Pomiń opór powietrza i przyjmij wartość przyspieszenia ziemskiego $g = 9{,}81\\text{ m/s}^2$.</p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2019_zad1.png\" alt=\"Rysunek do zadania\" class=\"theory-img\" style=\"max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<h4>Zadanie 1.1. (0–2)</h4>\n<p><strong>Oblicz czas lotu piłki od momentu wyrzutu do chwili uderzenia piłki o boisko.</strong></p>\n\n<h4>Zadanie 1.2. (0–2)</h4>\n<p>Piłka upadła na boisko w odległości poziomej $d = 8{,}00\\text{ m}$ od miejsca wyrzutu. <strong>Oblicz wartość prędkości początkowej piłki.</strong></p>\n\n<h4>Zadanie 1.3. (0–2)</h4>\n<p>Na wykresach (A–D) przedstawiono zależność energii kinetycznej $E_k$ piłki od czasu $t$ od chwili $t=0$ do chwili uderzenia w boisko.</p>\n<br>\n<p><strong>Zaznacz właściwy wykres spośród podanych A–D. Zapisz uzasadnienie.</strong></p>\n</div>",
                "solution": {
                  "intuition": "Czas lotu zależy tylko od wysokości początkowej, a zasięg od prędkości poziomej.",
                  "givens": "$h = 2{,}00\\text{ m}$, $d = 8{,}00\\text{ m}$, $g = 9{,}81\\text{ m/s}^2$",
                  "steps": [
                    {
                      "title": "Zadanie 1.1",
                      "content": "$t = \\sqrt{\\frac{2h}{g}}$"
                    },
                    {
                      "title": "Zadanie 1.2",
                      "content": "$v_0 = \\frac{d}{t}$"
                    }
                  ],
                  "numerical": "1.1: $t \\approx 0{,}638\\text{ s}$ | 1.2: $v_0 \\approx 12{,}5\\text{ m/s}$",
                  "answer": "1.1: $0{,}638\\text{ s}$. 1.2: $12{,}5\\text{ m/s}$.",
                  "trap": "Zwróć uwagę na wzór energii kinetycznej."
                }
              },
              {
                "id": "matura-cke-2018-zad-1",
                "number": 2018,
                "title": "Matura maj 2018 zad.1 stara formuła",
                "year": "2018 maj",
                "difficulty": 3,
                "source": "Matura CKE 2018 (Maj)",
                "link": "https://arkusze.pl/maturalne/fizyka-2018-maj-matura-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Wykres v(t)",
                  "Droga z pola",
                  "Kinematyka"
                ],
                "image": "img/cke_2018_zad1.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1.</h4>\n<p>Rozważamy ruch dwóch samochodów, które jechały po <u>poziomy</u>m i prostoliniowym odcinku autostrady. Każdy z samochodów w czasie $\\Delta t = 20\\text{ s}$ przebył odległość pomiędzy bramkami A i B równą $s = 500\\text{ m}$.</p>\n<br>\n<p>Wiadomo, że:</p>\n<ul>\n<li>samochód 1. przez pierwszą część tego czasu $\\Delta t$ jechał ruchem jednostajnie przyśpieszonym, a potem przez pozostały czas – ze stałą prędkością,</li>\n<li>samochód 2. w tym samym czasie $\\Delta t$ na tym samym odcinku jechał ruchem jednostajnie przyśpieszonym z przyśpieszeniem o wartości trzykrotnie mniejszej, a potem przez pozostały czas – ze stałą prędkością.</li>\n</ul>\n<p>W chwili wjazdu przez bramkę A (w chwili $t = 0$) prędkość obu samochodów wynosiła zero ($v_{1}(0) = 0, v_{2}(0) = 0$).</p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2018_zad1.png\" alt=\"Rysunek do zadania\" class=\"theory-img\" style=\"max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<h4>Zadanie 1.1. (0–2)</h4>\n<p><strong>Narysuj w jednym układzie współrzędnych wykresy zależności wartości prędkości obu samochodów od czasu w przedziale $[0, 20\\text{ s}]$.</strong></p>\n\n<h4>Zadanie 1.2. (0–3)</h4>\n<p><strong>Oblicz maksymalną prędkość osiągniętą przez samochód 1. (tzn. prędkość, z jaką poruszał się po ustaniu przyśpieszenia).</strong></p>\n</div>",
                "solution": {
                  "intuition": "Pola pod obiema krzywymi prędkości (trapezy) muszą być równe $s = 500\\text{ m}$.",
                  "givens": "$s = 500\\text{ m}$, $t = 20\\text{ s}$, $a_2 = \\frac{1}{3}a_1$",
                  "steps": [
                    {
                      "title": "Zadanie 1.1",
                      "content": "Dwa trapezy o różnych nachyleniach zboczy i tej samej całkowitej drodze."
                    },
                    {
                      "title": "Zadanie 1.2",
                      "content": "Rozwiązanie układu równań dróg w zależności od maksymalnych prędkości i czasów przyspieszania."
                    }
                  ],
                  "numerical": "1.2: Wyliczenie z układu równań z polami trapezów",
                  "answer": "Obliczenie analityczne zależnie od czasów.",
                  "trap": "Zwróć uwagę, że czasy przyspieszania dla obu aut mogą być różne."
                }
              },
              {
                "id": "matura-cke-2016-czerwiec-zad-1",
                "number": 201606,
                "title": "Matura czerwiec 2016 zad.1 stara formuła",
                "year": "2016 czerwiec",
                "difficulty": 2,
                "source": "Matura CKE 2016 Czerwiec (Termin dodatkowy)",
                "link": "https://arkusze.pl/maturalne/fizyka-2016-czerwiec-matura-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Wykres v(t)",
                  "Spotkanie pojazdów",
                  "Kinematyka"
                ],
                "image": "img/cke_2016_czerwiec_zad1.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1. (0–2)</h4>\n<p>Samochód i motocykl poruszały się wzdłuż tej samej prostej z prędkościami o takich samych zwrotach. Na wykresie poniżej przedstawiono zależności wartości prędkości od czasu w ruchu tych pojazdów. W chwili początkowej samochód i motocykl znajdowały się obok siebie.</p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2016_czerwiec_zad1_wykres.png\" alt=\"Rysunek do zadania\" class=\"theory-img\" style=\"max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<p><strong>Oceń prawdziwość poniższych zdań. Zaznacz P, jeśli zdanie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p>\n<table class=\"pf-table\">\n<tbody>\n<tr>\n<td class=\"pf-num\">1.</td>\n<td class=\"pf-text\">Droga, jaką przebył motocykl w ciągu pierwszych 6 sekund, była większa od drogi, jaką przebył w tym samym czasie samochód.</td>\n<td class=\"pf-box\">P</td>\n<td class=\"pf-box\">F</td>\n</tr>\n<tr>\n<td class=\"pf-num\">2.</td>\n<td class=\"pf-text\">Po 2 s ruchu pojazdy ponownie znajdowały się obok siebie.</td>\n<td class=\"pf-box\">P</td>\n<td class=\"pf-box\">F</td>\n</tr>\n<tr>\n<td class=\"pf-num\">3.</td>\n<td class=\"pf-text\">Maksymalna prędkość osiągnięta przez motocyklistę wyniosła 90 km/h, a średnia prędkość samochodu w ciągu 9 s ruchu wynosiła 900 m/min.</td>\n<td class=\"pf-box\">P</td>\n<td class=\"pf-box\">F</td>\n</tr>\n<tr>\n<td class=\"pf-num\">4.</td>\n<td class=\"pf-text\">W chwili $t = 4\\text{ s}$ wartość przyspieszenia motocykla wynosiła $5\\text{ m/s}^2$, a wartość przyspieszenia samochodu wynosiła 0.</td>\n<td class=\"pf-box\">P</td>\n<td class=\"pf-box\">F</td>\n</tr>\n</tbody>\n</table>\n</div>",
                "solution": {
                  "intuition": "Analiza wykresu v(t): droga odpowiada polu pod wykresem, przyspieszenie jest nachyleniem prostej, a ponowne spotkanie oznacza równość pól.",
                  "givens": "Wykres v(t): samochód $v = 15\\text{ m/s} = \\text{const}$, motocykl przyspiesza od 0 do $25\\text{ m/s}$ w 5 s, potem $25\\text{ m/s} = \\text{const}$",
                  "steps": [
                    {
                      "title": "Zdanie 1",
                      "content": "Droga samochodu w 6 s: $15 \\cdot 6 = 90\\text{ m}$. Droga motocykla w 6 s: trójkąt $\\frac{5 \\cdot 25}{2} = 62{,}5\\text{ m}$ plus prostokąt $1 \\cdot 25 = 25\\text{ m}$, łącznie $87{,}5\\text{ m}$. $87{,}5 < 90$, więc zdanie jest FAŁSZYWE."
                    },
                    {
                      "title": "Zdanie 2",
                      "content": "W $t=2\\text{ s}$: samochód przebył $30\\text{ m}$, motocykl $\\frac{2 \\cdot 10}{2} = 10\\text{ m}$. Nie znajdowały się obok siebie -> FAŁSZ."
                    },
                    {
                      "title": "Zdanie 3",
                      "content": "$v_{\\max}$ motocykla: $25\\text{ m/s} = 25 \\cdot 3{,}6 = 90\\text{ km/h}$ (Prawda). Samochód: $v = 15\\text{ m/s} = 15 \\cdot 60 = 900\\text{ m/min}$ (Prawda). Całe zdanie jest PRAWDZIWE."
                    },
                    {
                      "title": "Zdanie 4",
                      "content": "Dla motocykla $a = \\frac{25}{5} = 5\\text{ m/s}^2$, dla samochodu ruch jednostajny $a = 0$. Zdanie jest PRAWDZIWE."
                    }
                  ],
                  "numerical": "1-F, 2-F, 3-P, 4-P",
                  "answer": "1. F, 2. F, 3. P, 4. P.",
                  "trap": "Punkt przecięcia wykresów prędkości oznacza jedynie równość prędkości w danej chwili, a NIE ponowne spotkanie pojazdów."
                }
              },
              {
                "id": "matura-cke-2016-zad-1",
                "number": 2016,
                "title": "Matura maj 2016 zad.1 stara formuła",
                "year": "2016 maj",
                "difficulty": 2,
                "source": "Matura CKE 2016 (Maj)",
                "link": "https://arkusze.pl/maturalne/fizyka-2016-maj-matura-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Tabela pomiarów",
                  "Wykres x(t)",
                  "Kinematyka"
                ],
                "image": "img/cke_2016_zad1.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1.</h4>\n<p>Wózek o masie $m = 0{,}50\\text{ kg}$ uderzył w spoczywającą barierę sprężystą na torze powietrznym. Wykonano serię zdjęć fotograficznych i na ich podstawie odczytano położenie wózka w odstępach czasu równych $\\Delta t = 0{,}10\\text{ s}$. Wyniki pomiarów zestawiono w tabeli poniżej. Błąd systematyczny pomiaru czasu był tak mały, że pominięto go. Błąd systematyczny pomiaru położenia wynosił $\\Delta x = \\pm 0{,}02\\text{ m}$.</p>\n\n<table class=\"data-table\">\n<tr><th>$t$ [s]</th><td>0,0</td><td>0,1</td><td>0,2</td><td>0,3</td><td>0,4</td><td>0,5</td><td>0,6</td><td>0,7</td><td>0,8</td></tr>\n<tr><th>$x$ [m]</th><td>0,15</td><td>0,40</td><td>0,70</td><td>0,95</td><td>1,25</td><td>1,20</td><td>1,00</td><td>0,80</td><td>0,60</td></tr>\n</table>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2016_zad1.png\" alt=\"Rysunek do zadania\" class=\"theory-img\" style=\"max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<h4>Zadanie 1.1. (0–4)</h4>\n<p><strong>Wykonaj w układzie współrzędnych wykres zależności współrzędnej położenia wózka od czasu $x(t)$. Nanieś niepewności pomiarowe na obydwie osie.</strong></p>\n\n<h4>Zadanie 1.2. (0–2)</h4>\n<p><strong>Wyznacz wartość prędkości wózka z dokładnością do dwóch cyfr znaczących przed zderzeniem i po zderzeniu z barierą. Zapisz odpowiednie obliczenia.</strong></p>\n</div>",
                "solution": {
                  "intuition": "Z wykresu położenia można wyznaczyć prędkość wózka jako nachylenie przedziałów.",
                  "givens": "Pomiary z tabeli",
                  "steps": [
                    {
                      "title": "Zadanie 1.1",
                      "content": "Narysowanie punktów wraz z prostokątami błędów."
                    },
                    {
                      "title": "Zadanie 1.2",
                      "content": "Współczynnik nachylenia dla przedziału 0-0.4s oraz 0.5-0.8s."
                    }
                  ],
                  "numerical": "1.2: Przed: 2.5-3.0 m/s, po: -2.0 m/s",
                  "answer": "Wykres prostoliniowy przed odbiciem, potem załamuje się i opada.",
                  "trap": "Zwróć uwagę na błędy pomiarowe podczas wyznaczania linii najlepszego dopasowania."
                }
              },
              {
                "id": "matura-cke-2015-zad-1",
                "number": 2015,
                "title": "Matura maj 2015 zad.1 stara formuła",
                "year": "2015 maj",
                "difficulty": 2,
                "source": "Matura CKE 2015 (Maj)",
                "link": "https://arkusze.pl/maturalne/fizyka-2015-maj-matura-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Spadek swobodny",
                  "Pole grawitacyjne",
                  "Kinematyka"
                ],
                "image": "img/cke_2015_zad1.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1.</h4>\n<p>Uczeń analizował ruch swobodny dwóch piłek rzuconych z pewnej wysokości. Piłka A została rzucona poziomo z początkową prędkością o wartości $v_0 = 5\\text{ m/s}$. Piłka B została puszczona swobodnie, z prędkością początkową równą zeru, z tej samej wysokości, w tej samej chwili.</p>\n<br>\n<p>Przyjmij, że na piłki podczas ruchu działa wyłącznie siła ciężkości, a opór powietrza można pominąć. Przyspieszenie ziemskie $g = 9{,}81\\text{ m/s}^2$.</p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2015_zad1.png\" alt=\"Rysunek do zadania\" class=\"theory-img\" style=\"max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<h4>Zadanie 1.1. (0–2)</h4>\n<p><strong>Oceń prawdziwość zdań opisujących ruch piłek. Zaznacz P (prawda) lub F (fałsz).</strong></p>\n<table class=\"cke-table\">\n  <tr>\n    <td class=\"cke-num-col\">1.</td>\n    <td>W chwili uderzenia o podłoże piłka A ma większą prędkość całkowitą niż piłka B.</td>\n    <td class=\"cke-pf-col\">P</td>\n    <td class=\"cke-pf-col\">F</td>\n  </tr>\n  <tr>\n    <td class=\"cke-num-col\">2.</td>\n    <td>Czas spadania piłki A jest równy czasowi spadania piłki B.</td>\n    <td class=\"cke-pf-col\">P</td>\n    <td class=\"cke-pf-col\">F</td>\n  </tr>\n  <tr>\n    <td class=\"cke-num-col\">3.</td>\n    <td>Składowa pionowa wektora prędkości piłki A rośnie liniowo w czasie.</td>\n    <td class=\"cke-pf-col\">P</td>\n    <td class=\"cke-pf-col\">F</td>\n  </tr>\n</table>\n</div>",
                "solution": {
                  "intuition": "Ruch pionowy obu ciał jest identyczny, decyduje tylko $v_0$ składowej poziomej dla rzutu piłki A.",
                  "givens": "$v_{0A} = 5\\text{ m/s}, v_{0B} = 0$",
                  "steps": [
                    {
                      "title": "Zadanie 1.1",
                      "content": "Oceny prawdziwości stwierdzeń na podstawie fizyki rzutu."
                    }
                  ],
                  "numerical": "1.1: 1-P, 2-P, 3-P",
                  "answer": "1. P, 2. P, 3. P.",
                  "trap": "Zwróć uwagę, że czasy są równe, mimo że zasięgi są inne."
                }
              },
              {
                "id": "matura-cke-2015-przykladowy-zad-1",
                "number": 201500,
                "title": "Matura przykładowa 2015 zad.1 stara formuła",
                "year": "2015 przykładowy",
                "difficulty": 2,
                "source": "Przykładowy arkusz CKE (Formuła 2015)",
                "link": "https://arkusze.pl/maturalne/fizyka-2015-przykladowy-arkusz-cke-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Rzut poziomy",
                  "Opór powietrza",
                  "Kinematyka"
                ],
                "image": "img/cke_2015_przykladowy_zad1.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1. (0–3)</h4>\n<p>Podczas gry w badmintona zawodniczka uderzyła lotkę na wysokości $2\\text{ m}$, nadając jej poziomą prędkość o wartości $5\\text{ m/s}$. Lotka upadła w pewnej odległości od zawodniczki. Jest to odległość o jedną trzecią mniejsza od odległości upadku lotki przy pominięciu oporu powietrza. Przyjmij, że po uderzeniu lotki zawodniczka nie zmieniła swojego położenia.</p>\n<br>\n<p><strong>Oblicz, w jakiej odległości od zawodniczki upadła lotka. Zapisz obliczenia.</strong></p>\n</div>",
                "solution": {
                  "intuition": "Najpierw obliczamy teoretyczny zasięg rzutu poziomego bez oporów ruchu, a następnie zmniejszamy go o 1/3 zgodnie z treścią zadania.",
                  "givens": "$h = 2\\text{ m}$, $v_0 = 5\\text{ m/s}$, zasięg rzeczywisty $x = \\frac{2}{3} x_{\\text{teor}}$",
                  "steps": [
                    {
                      "title": "Krok 1: Zasięg bez oporów",
                      "content": "Czas spadania z wysokości $h$: $t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{4}{9{,}81}} \\approx 0{,}6388\\text{ s}$. Zasięg teoretyczny: $x_{\\text{teor}} = v_0 t = 5 \\cdot 0{,}6388 \\approx 3{,}194\\text{ m}$."
                    },
                    {
                      "title": "Krok 2: Zasięg rzeczywisty",
                      "content": "Zasięg poziomy z uwzględnieniem oporu powietrza: $x = \\left(1 - \\frac{1}{3}\\right) x_{\\text{teor}} = \\frac{2}{3} \\cdot 3{,}194 \\approx 2{,}13\\text{ m}$."
                    },
                    {
                      "title": "Krok 3: Odległość od zawodniczki",
                      "content": "Jeśli odległość mierzymy w poziomie: $d \\approx 2{,}13\\text{ m}$. Jeśli od miejsca uderzenia (w przestrzeni 3D): $D = \\sqrt{h^2 + x^2} = \\sqrt{2^2 + 2{,}13^2} \\approx 2{,}92\\text{ m}$. W oficjalnym kluczu CKE uznawano obie odpowiedzi."
                    }
                  ],
                  "numerical": "$x \\approx 2{,}13\\text{ m}$ (lub w przestrzeni $D \\approx 2{,}92\\text{ m}$)",
                  "answer": "Lotka upadła w odległości poziomej ok. $2{,}13\\text{ m}$ (lub w linii prostej ok. $2{,}92\\text{ m}$).",
                  "trap": "Zwróć uwagę na sformułowanie \"o jedną trzecią mniejsza\", co oznacza pomnożenie przez 2/3."
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
            "problem": "Wykres przedstawia zależność współrzędnej prędkości $v_x$ od czasu pewnego biegacza, który biegnie po prostoliniowym odcinku toru przez $2\\text{ minuty}$ ($120\\text{ s}$):\n- $0 - 20\\text{ s}$: $v_x = 5\\text{ m/s}$\n- $20 - 30\\text{ s}$: $v_x = 8\\text{ m/s}$\n- $30 - 40\\text{ s}$: $v_x = 5\\text{ m/s}$\n- $40 - 60\\text{ s}$: $v_x = 6\\text{ m/s}$\n- $60 - 80\\text{ s}$: $v_x = 8\\text{ m/s}$\n- $80 - 100\\text{ s}$: $v_x = 4\\text{ m/s}$\n- $100 - 110\\text{ s}$: $v_x = 0\\text{ m/s}$\n- $110 - 120\\text{ s}$: $v_x = -4\\text{ m/s}$\n\n<div class=\"chart-container-svg\">\n[TUTAJ WKLEJ GRAFIKĘ]\n</div>\n\nNa podstawie wykresu:\na) oblicz drogę, jaką przebył biegacz,\nb) opisz, jak wygląda wykres drogi w zależności od czasu,\nc) oblicz szybkość średnią biegacza,\nd) oblicz wartość prędkości średniej biegacza.",
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
        "badge": "9 zadań CKE",
        "isComingSoon": false,
        "desc": "Zasady dynamiki Newtona, siły, tarcie, opory ruchu, równowaga sił, pęd i zmiana pędu.",
        "subchapters": [
          {
            "id": "sub-dynamika-matura",
            "title": "Zadania maturalne CKE",
            "shortTitle": "Zadania Maturalne CKE",
            "number": 1,
            "icon": "⚖️",
            "desc": "Zadania CKE w Formule 2023: dynamika i siły z matur 2023–2026, prób CKE oraz informatorów 2023 i 2025. Zderzenia i bryła sztywna należą do osobnych działów.",
            "formulaCheat": "\\vec{F}_w = m\\vec{a} \\qquad \\vec{p} = m\\vec{v} \\qquad \\vec{F}_w = \\frac{\\Delta \\vec{p}}{\\Delta t} \\qquad T = \\mu N",
            "tasks": [
              {
                "id": "matura-cke-2026-czerwiec-zad-2",
                "number": 202606,
                "title": "Matura czerwiec 2026 zad. 2 nowa formuła",
                "year": "2026 czerwiec",
                "difficulty": 3,
                "source": "Matura CKE 2026 (Czerwiec – termin dodatkowy)",
                "link": "https://naukagryzie.pl/arkusze/matura-rozszerzona/fizyka/czerwiec-2026-formula-2023-cke/arkusz.pdf",
                "tags": [
                  "Matura CKE",
                  "Dynamika",
                  "Zasady Newtona"
                ],
                "image": "img/cke_2026_czerwiec_zad2_rysunek.png",
                "problem": "<div class=\"task-matura\"><h4>Zadanie 2.</h4>\n<p>Do końca linki o długości $l$ doczepiono kulkę K o masie $m$.</p>\n<p>Maksymalna wartość siły napięcia linki, po której przekroczeniu linka ulega zerwaniu, jest równa wartości dwukrotnego ciężaru kulki: $F_{n\\,max}=2mg$.</p>\n<p>Przyjmij, że:</p><ul><li>linka jest nierozciągliwa, masę linki pomijamy</li><li>przyśpieszenie ziemskie ma wartość $g=9{,}8\\text{ m/s}^2$</li><li>pomijamy siły oporów działające na kulkę</li><li>kulkę traktujemy jako punkt materialny</li><li>ruch kulki opisujemy w inercjalnym układzie odniesienia, w jednorodnym, ziemskim polu grawitacyjnym.</li></ul>\n<h4>Zadanie 2.1. (0–1)</h4><p>W doświadczeniu 1. linkę wraz z zawieszoną na niej kulką K podnoszono pionowo ruchem jednostajnie przyśpieszonym prostoliniowym.</p>\n<p>Wartość przyśpieszenia maksymalnego opisanego ruchu, przy którym linka się jeszcze nie zerwie, oznaczymy jako $a_{max}$.</p>\n<p><strong>Dokończ zdanie. Wybierz właściwą odpowiedź spośród podanych.</strong></p><p>Wartość $a_{max}$ w doświadczeniu 1. jest równa</p>\n<ol type=\"A\"><li>$a_{max}=\\frac12g$</li><li>$a_{max}=g$</li><li>$a_{max}=2g$</li><li>$a_{max}=3g$</li></ol>\n<h4>Zadanie 2.2. (0–4)</h4><p>W doświadczeniu 2. kulkę K zawieszoną na lince wprawiono w ruch jednostajny po okręgu o środku $O$ w płaszczyźnie poziomej. Górny koniec linki jest unieruchomiony w punkcie $P$.</p>\n<p>Częstotliwość graniczną (maksymalną) ruchu kulki K po okręgu, powyżej której nić ulegnie zerwaniu, oznaczymy jako $f_{max}$.</p>\n<p>Sytuację ilustruje rysunek poniżej, na którym oznaczono przyśpieszenie ziemskie $\\vec{g}$.</p>\n<div class=\"chart-container-svg\"><img src=\"img/cke_2026_czerwiec_zad2_rysunek.png\" alt=\"Kulka na lince poruszająca się w płaszczyźnie poziomej\" class=\"theory-img\" style=\"max-height: 300px; display: block; margin: 15px auto;\"></div>\n<p><strong>Wyznacz $f_{max}$ w doświadczeniu 2. w zależności <u>tylko</u> od wartości przyśpieszenia ziemskiego $g$ oraz od długości linki $l$.</strong></p>\n<p><strong>Zapisz odpowiednie równania i przekształcenia oraz podaj postać wzoru na $f_{max}$.</strong></p></div>",
                "solution": {
                  "intuition": "Rozkład napięcia linki na składowe pozwala zapisać II zasadę Newtona w pionie i w kierunku środka okręgu.",
                  "givens": "$F_{n\\,max}=2mg$, długość linki $l$.",
                  "steps": [
                    {
                      "title": "Zadanie 2.1",
                      "content": "$F_n-mg=ma$. Dla $F_n=2mg$ dostajemy $a_{max}=g$. Odpowiedź B."
                    },
                    {
                      "title": "Zadanie 2.2",
                      "content": "Niech $\\alpha$ będzie kątem linki z pionem. Promień okręgu $r=l\\sin\\alpha$.\nW pionie: $F_n\\cos\\alpha=mg$. W poziomie: $F_n\\sin\\alpha=m\\omega^2r=m\\omega^2l\\sin\\alpha$.\nDla ruchu po okręgu $\\sin\\alpha\\ne0$, więc $F_n=m\\omega^2l=4\\pi^2mf^2l$.\nPrzy granicznym napięciu $2mg=4\\pi^2mf_{max}^2l$, skąd $f_{max}=\\frac{1}{2\\pi}\\sqrt{\\frac{2g}{l}}$."
                    }
                  ],
                  "answer": "2.1: B; 2.2: $f_{max}=\\frac{1}{2\\pi}\\sqrt{\\frac{2g}{l}}$.",
                  "numerical": "2.1: B; 2.2: $f_{max}=\\frac{1}{2\\pi}\\sqrt{\\frac{2g}{l}}$.",
                  "trap": "Promień okręgu nie jest równy długości linki: $r=l\\sin\\alpha$."
                }
              },
              {
                "id": "matura-cke-2026-maj-zad-2",
                "number": 202605,
                "title": "Matura maj 2026 zad. 2 nowa formuła",
                "year": "2026 maj",
                "difficulty": 3,
                "source": "Matura CKE 2026 (Maj)",
                "link": "https://egzaminy.gov.pl/pliki/5948/697b5fd85d09a542f44987a9a4da5def56779e3dcf2fadd8834faea04277d0ab",
                "tags": [
                  "Matura CKE",
                  "Dynamika",
                  "Zasady Newtona"
                ],
                "image": "img/cke_2026_maj_zad2_ruch.png",
                "problem": "<div class=\"task-matura\"><h4>Zadanie 2.</h4>\n<p>Do jednego z końców nierozciągliwej nici o długości $l$ zamocowano niewielkie ciało $\\mathcal{B}$ o masie $m$. Drugi koniec nici jest unieruchomiony w punkcie $S$. Następnie ciało $\\mathcal{B}$ wprawiono w ruch po okręgu o środku w punkcie $S$ <u>w płaszczyźnie pionowej</u>.</p>\n<p>Przyjmij model zjawiska, w którym:</p><ul>\n<li>na ciało $\\mathcal{B}$ podczas ruchu działają dwie siły:<br>$\\vec{F}_g$ – siła grawitacji oraz $\\vec{F}_n$ – siła reakcji nici</li>\n<li>pomijamy wszelkie opory ruchu, masę nici, a ciało $\\mathcal{B}$ traktujemy jako punkt materialny</li>\n<li>ciało $\\mathcal{B}$ porusza się w inercjalnym układzie odniesienia, w jednorodnym, ziemskim polu grawitacyjnym.</li></ul>\n<div class=\"chart-container-svg\"><img src=\"img/cke_2026_maj_zad2_ruch.png\" alt=\"Ciało na nici w pionowej płaszczyźnie\" class=\"theory-img\" style=\"max-height: 260px; display: block; margin: 15px auto;\"></div>\n<p>Sytuację ilustruje rysunek powyżej, na którym oznaczono przyśpieszenie ziemskie $\\vec{g}$.</p>\n<h4>Zadanie 2.1. (0–2)</h4><p>Na poniższym rysunku przedstawiono wektory prędkości ciała $\\mathcal{B}$ w dwóch różnych chwilach czasu podczas opisanego ruchu tego ciała po okręgu.</p><p>Długość boku kratki odpowiada umownej jednostce odległości.</p>\n<div class=\"chart-container-svg\"><img src=\"img/cke_2026_maj_zad2_siatka.png\" alt=\"Rysunek – wektory prędkości na siatce\" class=\"theory-img\" style=\"max-height: 400px; display: block; margin: 15px auto;\"></div>\n<p><strong>Na rysunku powyżej wyznacz konstrukcyjnie środek okręgu, po którym porusza się ciało $\\mathcal{B}$. Podpisz środek tego okręgu jako $S$.</strong></p>\n<p><strong>Zapisz w wykropkowanym miejscu poniżej długość $l$ promienia tego okręgu. Wyraź tę długość w umownych jednostkach odległości.</strong></p>\n<p>$l =$ ........... długości boku kratki</p><p><em>Uwaga! W tym przykładzie środek $S$ okręgu leży w punkcie kratowym.</em></p>\n<h4>Zadanie 2.2. (0–1)</h4><p><strong>Na którym rysunku (spośród A–D) prawidłowo przedstawiono siły – grawitacji $\\vec{F}_g$ oraz reakcji nici $\\vec{F}_n$ – działające na ciało $\\mathcal{B}$ podczas ruchu po okręgu, gdy przechodzi ono przez najniższe położenie? Wybierz właściwą odpowiedź spośród podanych.</strong></p>\n<div class=\"chart-container-svg\"><img src=\"img/cke_2026_maj_zad2_opcje.png\" alt=\"Odpowiedzi A–D – siły w najniższym położeniu\" class=\"theory-img\" style=\"max-height: 600px; display: block; margin: 15px auto;\"></div>\n<h4>Zadanie 2.3. (0–4)</h4><p>Siła $\\vec{F}_n$, z jaką nić działa na ciało $\\mathcal{B}$ podczas jego ruchu po okręgu, zmienia swoją wartość. Największą wartość tej siły oznaczymy jako $F_{n\\,max}$, a najmniejszą – jako $F_{n\\,min}$.</p>\n<p>Dany jest iloraz największej i najmniejszej wartości prędkości ciała $\\mathcal{B}$ podczas jego ruchu po okręgu:</p><p style=\"text-align:center\">$\\frac{v_{max}}{v_{min}}=\\sqrt{3}$</p>\n<p><strong>Oblicz iloraz $\\frac{F_{n\\,max}}{F_{n\\,min}}$. Zapisz obliczenia.</strong></p></div>",
                "solution": {
                  "givens": "Długość nici (promień okręgu): $l$, masa ciała: $m$, stosunek prędkości skrajnych: $\\frac{v_{\\max}}{v_{\\min}} = \\sqrt{3}$, ruch po okręgu w płaszczyźnie pionowej, brak oporów ruchu.",
                  "steps": [
                    {
                      "title": "Zadanie 2.1 – Konstrukcja środka okręgu i odczyt promienia",
                      "content": "Wektor prędkości w ruchu po okręgu jest w każdej chwili styczny do toru, co oznacza, że promień łączący ciało ze środkiem okręgu $S$ jest zawsze prostopadły do wektora prędkości $\\vec{v}$:\n1. Prowadzimy prostą prostopadłą do wektora prędkości $\\vec{v}_1$ w punkcie jego przyłożenia (pionowo w dół).\n2. Prowadzimy prostą prostopadłą do wektora prędkości $\\vec{v}_2$ w punkcie jego przyłożenia.\n3. Punkt przecięcia obu prostych jednoznacznie wyznacza środek okręgu $S$.\n\nOdliczając kratki pionowo od środka $S$ do punktu zaczepienia wektora $\\vec{v}_1$, odczytujemy promień okręgu:\n$$l = 10\\text{ długości kratek}$$\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-maj-z2-konstrukcja-rozwiazanie.png\" alt=\"Konstrukcja środka i promienia okręgu według klucza CKE\" class=\"theory-img\" style=\"max-height:440px;display:block;margin:15px auto;\"></div>"
                    },
                    {
                      "title": "Zadanie 2.2 – Wybór sił działających w najniższym położeniu",
                      "content": "W najniższym położeniu na ciało działają dwie pionowe siły:\n- siła grawitacji $\\vec{F}_g = m\\vec{g}$ skierowana pionowo w dół,\n- siła reakcji (naciągu) nici $\\vec{F}_n$ skierowana pionowo w górę (w stronę środka okręgu $S$).\n\nAby ciało poruszało się po okręgu, siła wypadkowa musi być skierowana do środka okręgu (w górę) i pełnić rolę siły dośrodkowej:\n$$F_{\\text{doś}} = F_n - F_g = \\frac{m v_{\\max}^2}{l} > 0 \\implies F_n > F_g$$\nWektor siły reakcji nici $\\vec{F}_n$ musi mieć zatem większą długość niż wektor ciężaru $\\vec{F}_g$. Warunek ten spełnia wyłącznie **rysunek B**."
                    },
                    {
                      "title": "Zadanie 2.3 – Równania dynamiki w skrajnych punktach toru",
                      "content": "Zapisujemy II zasadę dynamiki dla składowych sił wzdłuż promienia okręgu w punktach o prędkości maksymalnej i minimalnej:\n- **W najniższym punkcie (prędkość maksymalna $v_{\\max}$):**\n$$F_{n,\\max} - mg = \\frac{m v_{\\max}^2}{l} \\implies F_{n,\\max} = mg + \\frac{m v_{\\max}^2}{l}$$\n- **W najwyższym punkcie (prędkość minimalna $v_{\\min}$):**\nZarówno siła reakcji nici, jak i siła grawitacji działają w dół (w stronę środka $S$):\n$$F_{n,\\min} + mg = \\frac{m v_{\\min}^2}{l} \\implies F_{n,\\min} = \\frac{m v_{\\min}^2}{l} - mg$$"
                    },
                    {
                      "title": "Zadanie 2.3 – Zastosowanie zasady zachowania energii i obliczenie ilorazu sił",
                      "content": "Różnica wysokości między najniższym a najwyższym punktem toru wynosi $h = 2l$. Z zasady zachowania energii mechanicznej:\n$$\\frac{1}{2}m v_{\\max}^2 = \\frac{1}{2}m v_{\\min}^2 + mg(2l)$$\nMnożymy obustronnie przez $\\frac{2}{l}$:\n$$\\frac{m v_{\\max}^2}{l} = \\frac{m v_{\\min}^2}{l} + 4mg$$\nZ treści zadania wiemy, że $v_{\\max} = \\sqrt{3}\\,v_{\\min}$, co oznacza $v_{\\max}^2 = 3v_{\\min}^2$. Podstawiamy:\n$$3\\,\\frac{m v_{\\min}^2}{l} = \\frac{m v_{\\min}^2}{l} + 4mg \\implies 2\\,\\frac{m v_{\\min}^2}{l} = 4mg \\implies \\frac{m v_{\\min}^2}{l} = 2mg$$\nStąd dla prędkości maksymalnej:\n$$\\frac{m v_{\\max}^2}{l} = 3 \\cdot (2mg) = 6mg$$\nObliczamy wartości sił reakcji nici:\n$$F_{n,\\max} = mg + 6mg = 7mg$$\n$$F_{n,\\min} = 2mg - mg = mg$$\nIloraz poszukiwanych sił wynosi:\n$$\\frac{F_{n,\\max}}{F_{n,\\min}} = \\frac{7mg}{mg} = 7$$"
                    }
                  ],
                  "answer": "2.1: Konstrukcja prostych prostopadłych, $l = 10\\text{ długości kratek}$;\n2.2: Poprawny rysunek B ($F_n > F_g$);\n2.3: Iloraz wynosi $\\frac{F_{n,\\max}}{F_{n,\\min}} = 7$.",
                  "trap": "W najwyższym punkcie toru siła ciężkości działa w tym samym zwrocie co siła naciągu nici (w dół, w stronę środka okręgu), dlatego $F_{n,\\min} = \\frac{mv_{\\min}^2}{l} - mg$, a nie ze znakiem plus!"
                }
              },
              {
                "id": "matura-cke-2026-styczen-zad-1",
                "number": 202601,
                "title": "Matura próbna styczeń 2026 zad. 1 nowa formuła",
                "year": "2026 styczeń próbna",
                "difficulty": 3,
                "source": "Matura próbna CKE 2026 (Styczeń)",
                "link": "https://arkusze.pl/maturalne/fizyka-2026-styczen-probna-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Dynamika",
                  "Zasady dynamiki Newtona",
                  "Pęd",
                  "Siła wypadkowa"
                ],
                "image": "img/cke_2026_styczen_zad1_wykres1.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1.</h4>\n<p>Ciało $\\mathcal{C}$ o masie $m = 4{,}0\\text{ kg}$ porusza się wzdłuż osi $x$ w inercjalnym układzie odniesienia. Na poniższym wykresie przedstawiono zależność współrzędnej $p_x$ pędu ciała $\\mathcal{C}$ od czasu $t$ w tym ruchu.</p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2026_styczen_zad1_wykres1.png\" alt=\"Wykres p_x(t) od t=0 do t=12 s\" class=\"theory-img\" style=\"max-height: 360px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<p>Od chwili $t = 0\\text{ s}$ do chwili $t = 8\\text{ s}$ na ciało $\\mathcal{C}$ działa siła wypadkowa $\\vec{F}_{W1}$.</p>\n<p>Od chwili $t = 8\\text{ s}$ do chwili $t = 12\\text{ s}$ na ciało $\\mathcal{C}$ działa siła wypadkowa $\\vec{F}_{W2}$.</p>\n<p>Siła $\\vec{F}_{W2}$ jest wypadkową sił $\\vec{F}_3$ i $\\vec{F}_4$ skierowanych wzdłuż osi $x$. Siła $\\vec{F}_3$ ma wartość $F_3 = 20\\text{ N}$ i zwrot <u>zgodny</u> ze zwrotem osi $x$, natomiast siła $\\vec{F}_4$ ma zwrot <u>przeciwny</u> do zwrotu osi $x$.</p>\n\n<h4>Zadanie 1.1. (0–1)</h4>\n<p><strong>Dokończ zdanie. Wybierz właściwą odpowiedź spośród podanych.</strong></p>\n<p>Przyśpieszenie ciała $\\mathcal{C}$ podczas ruchu od chwili $t = 0\\text{ s}$ do chwili $t = 8\\text{ s}$ ma wartość</p>\n<ol type=\"A\">\n<li>$a = 1{,}25\\text{ m/s}^2$</li>\n<li>$a = 2{,}19\\text{ m/s}^2$</li>\n<li>$a = 5{,}0\\text{ m/s}^2$</li>\n<li>$a = 8{,}75\\text{ m/s}^2$</li>\n</ol>\n\n<h4>Zadanie 1.2. (0–1)</h4>\n<p><strong>Dokończ zdanie. Wybierz odpowiedź A albo B oraz odpowiedź 1. albo 2.</strong></p>\n<p>Siła wypadkowa $\\vec{F}_{w2}$ ma zwrot</p>\n<table class=\"cke-table\" style=\"width: 100%; border-collapse: collapse; margin: 15px 0;\">\n  <tbody>\n    <tr>\n      <td style=\"width: 5%; text-align: center; font-weight: bold;\">A.</td>\n      <td style=\"width: 32%;\">zgodny ze zwrotem prędkości ciała $\\mathcal{C}$,</td>\n      <td rowspan=\"2\" style=\"width: 26%; text-align: center; vertical-align: middle; background: #ffffff;\">a wartość tej siły jest</td>\n      <td style=\"width: 5%; text-align: center; font-weight: bold;\">1.</td>\n      <td style=\"width: 32%;\">większa od wartości siły $\\vec{F}_{w1}$.</td>\n    </tr>\n    <tr>\n      <td style=\"text-align: center; font-weight: bold;\">B.</td>\n      <td>przeciwny do zwrotu prędkości ciała $\\mathcal{C}$,</td>\n      <td style=\"text-align: center; font-weight: bold;\">2.</td>\n      <td>mniejsza od wartości siły $\\vec{F}_{w1}$.</td>\n    </tr>\n  </tbody>\n</table>\n\n<h4>Zadanie 1.3. (0–3)</h4>\n<p><strong>Oblicz wartość siły $\\vec{F}_4$. Zapisz obliczenia.</strong></p>\n\n<h4>Zadanie 1.4. (0–2)</h4>\n<p><strong>Oblicz drogę, jaką przebyło ciało $\\mathcal{C}$ od chwili $t_0 = 0\\text{ s}$ do chwili $t = 12\\text{ s}$. Zapisz obliczenia.</strong></p>\n</div>",
                "solution": {
                  "intuition": "Z uogólnionej II zasady dynamiki Newtona siła wypadkowa jest równa pochodnej pędu po czasie (nachyleniu wykresu $p(t)$): $F_W = \\frac{\\Delta p}{\\Delta t}$. Przyśpieszenie ciała to $a = F_W / m$.",
                  "givens": "$m = 4{,}0\\text{ kg}$, $p_x(0) = 30\\text{ kg}\\cdot\\text{m/s}$, $p_x(8) = 70\\text{ kg}\\cdot\\text{m/s}$, $p_x(12) = 10\\text{ kg}\\cdot\\text{m/s}$, $F_3 = 20\\text{ N}$",
                  "steps": [
                    {
                      "title": "Zadanie 1.1",
                      "content": "W przedziale $[0, 8\\text{ s}]$ zmiana pędu wynosi $\\Delta p = 70 - 30 = 40\\text{ kg}\\cdot\\text{m/s}$. Wartość siły wypadkowej: $F_{W1} = \\frac{\\Delta p}{\\Delta t} = \\frac{40\\text{ kg}\\cdot\\text{m/s}}{8\\text{ s}} = 5\\text{ N}$. Zatem przyśpieszenie ciała wynosi $a = \\frac{F_{W1}}{m} = \\frac{5\\text{ N}}{4{,}0\\text{ kg}} = 1{,}25\\text{ m/s}^2$. Prawidłowa odpowiedź: **A**."
                    },
                    {
                      "title": "Zadanie 1.2",
                      "content": "W przedziale $[8, 12\\text{ s}]$ pęd $p_x$ jest dodatni (zgodny ze zwrotem osi $x$), ale maleje z $70$ do $10\\text{ kg}\\cdot\\text{m/s}$, więc ciało porusza się ruchem opóźnionym – siła wypadkowa $\\vec{F}_{W2}$ ma zwrot przeciwny do prędkości ciała (odpowiedź **B**). Wartość siły wypadkowej wynosi $F_{W2} = \\left|\\frac{10 - 70}{12 - 8}\\right| = \\left|\\frac{-60}{4}\\right| = 15\\text{ N}$. Ponieważ $F_{W2} = 15\\text{ N} > F_{W1} = 5\\text{ N}$, wartość ta jest większa od wartości siły $F_{W1}$ (odpowiedź **1**). Prawidłowa para: **B 1**."
                    },
                    {
                      "title": "Zadanie 1.3",
                      "content": "Wektorowo: $\\vec{F}_{W2} = \\vec{F}_3 + \\vec{F}_4$. Na osi $x$: $F_{W2x} = F_{3x} + F_{4x}$. Wiemy, że siła wypadkowa ma zwrot przeciwny do osi $x$, więc $F_{W2x} = -15\\text{ N}$. Siła $F_3$ ma zwrot zgodny z osią ($F_{3x} = +20\\text{ N}$), a $F_4$ przeciwny ($F_{4x} = -F_4$). Zatem: $-15 = 20 - F_4 \\implies F_4 = 20 + 15 = 35\\text{ N}$."
                    },
                    {
                      "title": "Zadanie 1.4",
                      "content": "Ponieważ pęd ciała w całym przedziale czasu jest dodatni ($p_x > 0$), ciało nie zawróciło. Droga jest równa polu pod wykresem $v(t)$, gdzie $v(t) = \\frac{p_x(t)}{m}$:\\n$v(0) = \\frac{30}{4} = 7{,}5\\text{ m/s}$, $v(8) = \\frac{70}{4} = 17{,}5\\text{ m/s}$, $v(12) = \\frac{10}{4} = 2{,}5\\text{ m/s}$.\\nDroga w pierwszym etapie (trapez): $s_1 = \\frac{7{,}5 + 17{,}5}{2} \\cdot 8 = 12{,}5 \\cdot 8 = 100\\text{ m}$.\\nDroga w drugim etapie (trapez): $s_2 = \\frac{17{,}5 + 2{,}5}{2} \\cdot 4 = 10 \\cdot 4 = 40\\text{ m}$.\\nCałkowita droga: $s = s_1 + s_2 = 100\\text{ m} + 40\\text{ m} = 140\\text{ m}$."
                    }
                  ],
                  "numerical": "1.1: A; 1.2: B 1; 1.3: $F_4 = 35\\text{ N}$; 1.4: $s = 140\\text{ m}$",
                  "answer": "1.1: A; 1.2: B 1; 1.3: $F_4 = 35\\text{ N}$; 1.4: $s = 140\\text{ m}$",
                  "trap": "Pamiętaj, że $F_{W2}$ ma zwrot przeciwny do osi $x$, więc jej współrzędna wynosi $-15\\text{ N}$, co daje $F_4 = 35\\text{ N}$, a nie $20-15=5\\text{ N}$."
                }
              },
              {
                "id": "matura-cke-2025-czerwiec-zad-2",
                "number": 202506,
                "title": "Matura czerwiec 2025 zad. 2 nowa formuła",
                "year": "2025 czerwiec",
                "difficulty": 3,
                "source": "Matura CKE 2025 (Czerwiec - Termin dodatkowy)",
                "link": "https://arkusze.pl/maturalne/fizyka-2025-czerwiec-matura-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Dynamika",
                  "Równia pochyła",
                  "Siła nacisku",
                  "Tarcie statyczne"
                ],
                "image": "img/cke_2025_czerwiec_zad2_rys1.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 2.</h4>\n<p>Uczniowie wykonywali doświadczenie z wagą. Zakładamy, że waga wskazuje wartość siły nacisku <u>działającej na wagę prostopadle</u> do jej powierzchni, podzielonej przez wartość $g$ przyśpieszenia grawitacyjnego.</p>\n<p>Uczniowie ustawili wagę na poziomej ławce i położyli na niej klocek. Waga wskazała wartość $m_1$ (zobacz rysunek 1.). Następnie uczniowie nachylili ławkę pod kątem $\\alpha$ do poziomu i ponownie położyli na wadze ten sam klocek. Waga wskazała wartość $m_2$ (zobacz rysunek 2.).</p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2025_czerwiec_zad2_rys1.png\" alt=\"Rysunek 1 i Rysunek 2 - doświadczenie z wagą\" class=\"theory-img\" style=\"max-height: 280px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<p>Waga oraz klocek <u>pozostały nieruchome</u>.</p>\n<p>Na ten klocek działają trzy siły w układzie inercjalnym:</p>\n<ul>\n<li>$\\vec{F}_t$ – siła tarcia statycznego pomiędzy wagą a klockiem, działająca na klocek przy nachylonej ławce,</li>\n<li>$\\vec{F}_g$ – siła grawitacji działająca na klocek,</li>\n<li>$\\vec{F}_r$ – siła reakcji wagi działająca na klocek (siła nacisku wagi na klocek).</li>\n</ul>\n\n<h4>Zadanie 2.1. (0–2)</h4>\n<p>Przyjmij, że punkt $S$ na diagramie jest reprezentacją klocka. Widok nachylonej ławki i klocka pozostawiono dla kontekstu. Długość boku kratki na diagramie odpowiada umownej jednostce siły.</p>\n<p>Oznaczono siłę grawitacji $\\vec{F}_g$.</p>\n<p><strong>Na diagramie narysuj i oznacz siłę tarcia $\\vec{F}_t$ oraz siłę reakcji wagi $\\vec{F}_r$, działające na klocek (przyłożone w punkcie $S$).</strong></p>\n<p><strong>Zachowaj odpowiednie kierunki, zwroty oraz <u>dokładne długości</u> wektorów, odpowiadające wartościom tych sił.</strong></p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2025_czerwiec_zad2_rys2.png\" alt=\"Diagram z wektorem Fg na siatce\" class=\"theory-img\" style=\"max-height: 420px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<h4>Zadanie 2.2. (0–1)</h4>\n<p><strong>Dokończ zdanie. Zaznacz odpowiedź A, B albo C i jej uzasadnienie 1., 2. albo 3.</strong></p>\n<p>Wskazania wagi $m_1$ oraz $m_2$ – opisane w zadaniu 2. – spełniają relację</p>\n<table class=\"cke-table\" style=\"width: 100%; border-collapse: collapse; margin: 15px 0;\">\n  <tbody>\n    <tr>\n      <td style=\"width: 5%; text-align: center; font-weight: bold;\">A.</td>\n      <td style=\"width: 25%;\">$m_1 > m_2$,</td>\n      <td rowspan=\"3\" style=\"width: 40%; text-align: center; vertical-align: middle; background: #ffffff;\">ponieważ po nachyleniu ławki wartość siły nacisku klocka na wagę</td>\n      <td style=\"width: 5%; text-align: center; font-weight: bold;\">1.</td>\n      <td style=\"width: 25%;\">zwiększyła się.</td>\n    </tr>\n    <tr>\n      <td style=\"text-align: center; font-weight: bold;\">B.</td>\n      <td>$m_1 = m_2$,</td>\n      <td style=\"text-align: center; font-weight: bold;\">2.</td>\n      <td>nie zmieniła się.</td>\n    </tr>\n    <tr>\n      <td style=\"text-align: center; font-weight: bold;\">C.</td>\n      <td>$m_1 < m_2$,</td>\n      <td style=\"text-align: center; font-weight: bold;\">3.</td>\n      <td>zmniejszyła się.</td>\n    </tr>\n  </tbody>\n</table>\n\n<h4>Zadanie 2.3. (0–1)</h4>\n<p><strong>Oceń prawdziwość poniższych stwierdzeń. Zaznacz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p>\n<p>Gdy kąt nachylenia $\\alpha$ ławki do poziomu rośnie, a waga oraz klocek o masie $m$ nie poruszają się względem ławki, to</p>\n<table class=\"pf-table\">\n<tbody>\n<tr>\n<td class=\"pf-num\">1.</td>\n<td class=\"pf-text\">wartość siły tarcia statycznego między wagą a klockiem wyraża się wzorem $F_t = mg \\sin\\alpha$.</td>\n<td class=\"pf-box\">P</td>\n<td class=\"pf-box\">F</td>\n</tr>\n<tr>\n<td class=\"pf-num\">2.</td>\n<td class=\"pf-text\">wartość siły tarcia statycznego pomiędzy wagą a klockiem maleje.</td>\n<td class=\"pf-box\">P</td>\n<td class=\"pf-box\">F</td>\n</tr>\n</tbody>\n</table>\n</div>",
                "solution": {
                  "intuition": "Klocek jest w spoczynku, więc wypadkowa sił wynosi zero: $\\vec{F}_g + \\vec{F}_r + \\vec{F}_t = \\vec{0}$. W układzie związanym z równią siła reakcji równoważy składową prostopadłą $mg\\cos\\alpha$, a siła tarcia statycznego równoważy składową ściągającą $mg\\sin\\alpha$.",
                  "givens": "Klocek w spoczynku; $\\vec{F}_g$ pionowo w dół o długości 8 kratek wzdłuż pionu.",
                  "steps": [
                    {
                      "title": "Zadanie 2.1",
                      "content": "Należy rozłożyć siłę ciężkości $\\vec{F}_g$ na składowe na obróconej siatce (zorientowanej wzdłuż powierzchni równi). Składowa prostopadła do powierzchni wynosi $F_{g\\perp} = F_g \\cos\\alpha$, więc siła reakcji podłoża $\\vec{F}_r$ ma kierunek prostopadły do powierzchni wagi, zwrot w górę (od powierzchni) i długość równą składowej prostopadłej. Siła tarcia statycznego $\\vec{F}_t$ ma kierunek równoległy do powierzchni równi, zwrot w górę równi i długość równą składowej równoległej $F_{g\\parallel} = F_g \\sin\\alpha$."
                    },
                    {
                      "title": "Zadanie 2.2",
                      "content": "Wskazanie wagi to $m = N / g$. Na poziomej powierzchni $N_1 = mg \\implies m_1 = m$. Na równi pochyłej $N_2 = mg \\cos\\alpha < mg$ (dla $\\alpha > 0$), więc $m_2 = m \\cos\\alpha < m_1$. Siła nacisku zmalała, dlatego $m_1 > m_2$. Prawidłowa odpowiedź: **A 3**."
                    },
                    {
                      "title": "Zadanie 2.3",
                      "content": "1. Klocek spoczywa, zatem z I zasady dynamiki wzdłuż równi: $F_t - mg\\sin\\alpha = 0 \\implies F_t = mg\\sin\\alpha$. Zdanie 1 jest **prawdziwe (P)**.\\n2. Wraz ze wzrostem kąta $\\alpha \\in (0^\\circ, 90^\\circ)$ funkcja $\\sin\\alpha$ rośnie, więc siła tarcia statycznego $F_t = mg\\sin\\alpha$ rośnie, a nie maleje. Zdanie 2 jest **fałszywe (F)**."
                    }
                  ],
                  "numerical": "2.2: A 3; 2.3: 1-P, 2-F",
                  "answer": "2.1: Wektory Fr prostopadle w górę, Ft równolegle w górę równi; 2.2: A 3; 2.3: 1-P, 2-F",
                  "trap": "Nie myl siły tarcia statycznego (która wynosi dokładnie $mg\\sin\\alpha$) z maksymalną siłą tarcia statycznego ($T_{max} = \\mu mg\\cos\\alpha$)."
                }
              },
              {
                "id": "matura-cke-2024-grudzien-zad-2",
                "number": 202412,
                "title": "Matura próbna grudzień 2024 zad. 2 nowa formuła",
                "year": "2024 grudzień próbna",
                "difficulty": 3,
                "source": "Test diagnostyczny CKE – grudzień 2024",
                "link": "https://arkusze.pl/maturalne/fizyka-2024-grudzien-probna-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Dynamika",
                  "Równowaga sił",
                  "Siła wyporu"
                ],
                "image": "img/cke_2024_grudzien_zad2_woda.png",
                "problem": "<div class=\"task-matura\"><h4>Zadanie 2.</h4>\n<p>Ciała $\\mathcal{C}_1$ i $\\mathcal{C}_2$ mają różne masy i są bryłami w kształcie prostopadłościanów o takich samych wymiarach. Po włożeniu tych ciał do naczynia z wodą zaobserwowano, że:</p>\n<ul><li>ciało $\\mathcal{C}_1$ pozostaje nieruchomo, przy czym $\\frac34$ objętości tego ciała jest zanurzone w wodzie</li><li>ciało $\\mathcal{C}_2$ pozostaje nieruchomo całkowicie zanurzone w wodzie (i nie dotyka dna).</li></ul>\n<p>Przyjmij, że obserwację wykonano w układzie inercjalnym, w jednorodnym, ziemskim polu grawitacyjnym. Opisaną sytuację przedstawiono na poniższym rysunku.</p>\n<div class=\"chart-container-svg\"><img src=\"img/cke_2024_grudzien_zad2_woda.png\" alt=\"Dwa ciała zanurzone w wodzie\" class=\"theory-img\" style=\"max-height: 250px; display: block; margin: 15px auto;\"></div>\n<h4>Zadanie 2.1. (0–3)</h4><p>Punkty $C_1$ i $C_2$ na poniższych diagramach 1. i 2. odpowiadają ciałom $\\mathcal{C}_1$ i $\\mathcal{C}_2$. Długość boku kratki na każdym diagramie odpowiada umownej jednostce siły.</p>\n<p>Na diagramie 1. narysowano siłę wyporu $\\vec{F}_{w1}$, działającą na ciało $\\mathcal{C}_1$.</p>\n<p><strong>Na diagramie 1. narysuj i oznacz siłę grawitacji $\\vec{F}_{g1}$, działającą na $\\mathcal{C}_1$.</strong></p>\n<p><strong>Na diagramie 2. narysuj i oznacz siły grawitacji $\\vec{F}_{g2}$ oraz wyporu $\\vec{F}_{w2}$, działające na $\\mathcal{C}_2$.</strong></p>\n<p><strong>Zachowaj odpowiednie kierunki, zwroty oraz <u>dokładne długości wszystkich</u> wektorów, odpowiadające wartościom tych sił.</strong></p>\n<div class=\"chart-container-svg\"><img src=\"img/cke_2024_grudzien_zad2_diagramy.png\" alt=\"Diagramy 1 i 2 – siatki do narysowania wektorów sił\" class=\"theory-img\" style=\"max-height: 440px; display: block; margin: 15px auto;\"></div>\n<h4>Zadanie 2.2. (0–3)</h4><p>Ciało $\\mathcal{C}_1$ wyjęto z wody i włożono do naczynia z pewną cieczą X.</p>\n<p>Zaobserwowano, że ciało $\\mathcal{C}_1$ pływa tak, że $\\frac23$ jego objętości jest zanurzone w tej cieczy (zobacz rysunek obok).</p>\n<div class=\"chart-container-svg\"><img src=\"img/cke_2024_grudzien_zad2_ciecz.png\" alt=\"Ciało pływające w cieczy X\" class=\"theory-img\" style=\"max-height: 200px; display: block; margin: 15px auto;\"></div>\n<p>Przyjmij do obliczeń gęstość wody $\\rho_w=1\\text{ g/cm}^3$. Gęstość cieczy X oznaczymy jako $\\rho_X$.</p>\n<p><strong>Oblicz $\\rho_X$. Zapisz obliczenia.</strong></p></div>",
                "solution": {
                  "intuition": "Ciała spoczywają, więc ciężar równoważy siłę wyporu. Wypór jest proporcjonalny do objętości wypartej cieczy.",
                  "givens": "Jednakowe objętości ciał $V$; zanurzenie $3V/4$ i $V$ w wodzie oraz $2V/3$ w cieczy X.",
                  "steps": [
                    {
                      "title": "Zadanie 2.1",
                      "content": "Dla pierwszego ciała $F_{g1}=F_{w1}$: od $C_1$ narysuj pionowo w dół wektor o długości 6 kratek.\nDla drugiego ciała $F_{w2}=\\rho_w gV=\\frac43F_{w1}$. Od $C_2$ narysuj $\\vec F_{w2}$ w górę i $\\vec F_{g2}$ w dół, oba o długości 8 kratek."
                    },
                    {
                      "title": "Zadanie 2.2",
                      "content": "Ciężar pierwszego ciała nie zmienia się. Z równowagi sił w obu cieczach: $\\rho_wg\\frac34V=mg=\\rho_Xg\\frac23V$.\nPo skróceniu $gV$: $\\rho_X=\\frac{3/4}{2/3}\\rho_w=\\frac98\\rho_w=1{,}125\\text{ g/cm}^3=1125\\text{ kg/m}^3$."
                    }
                  ],
                  "answer": "2.1: $F_{g1}$ – 6 kratek w dół; $F_{g2}$ – 8 w dół; $F_{w2}$ – 8 w górę. 2.2: $\\rho_X=1{,}125\\text{ g/cm}^3$.",
                  "numerical": "2.1: $F_{g1}$ – 6 kratek w dół; $F_{g2}$ – 8 w dół; $F_{w2}$ – 8 w górę. 2.2: $\\rho_X=1{,}125\\text{ g/cm}^3$.",
                  "trap": "We wzorze na wypór używamy objętości zanurzonej części ciała, a nie zawsze całej objętości."
                }
              },
              {
                "id": "matura-cke-2024-czerwiec-zad-1",
                "number": 202406,
                "title": "Matura czerwiec 2024 zad. 1 nowa formuła",
                "year": "2024 czerwiec",
                "difficulty": 3,
                "source": "Matura CKE 2024 (Czerwiec - Termin dodatkowy)",
                "link": "https://arkusze.pl/maturalne/fizyka-2024-czerwiec-matura-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Dynamika",
                  "Ruch po okręgu",
                  "Siła dośrodkowa",
                  "Tarcie",
                  "Droga hamowania"
                ],
                "image": "img/cke_2024_czerwiec_zad1_rysunek.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1.</h4>\n<p>Deseczka z wycięciami, w których umieszczono trzy jednakowe monety: M1, M2, M3, obraca się ze stałą prędkością kątową $\\omega$ po poziomej powierzchni blatu stołu wokół osi obrotu, przechodzącej przez punkt $O$. W wyniku tego obrotu torami ruchów środków tych monet są okręgi o wspólnym środku $O$.</p>\n<p>Masy monet są jednakowe i równe $m$:</p>\n<p style=\"text-align:center;\">$m_1 = m_2 = m_3 = m$</p>\n<p>Odległości środków monet M1, M2, M3 od osi obrotu oznaczymy – odpowiednio – jako: $r_1, r_2, r_3$ (zobacz rysunek). Stosunki tych odległości wynoszą $r_1 : r_2 : r_3 = 1 : 2 : 3$, to znaczy:</p>\n<p style=\"text-align:center;\">$\\frac{r_1}{r_2} = \\frac{1}{2} \\qquad \\text{oraz} \\qquad \\frac{r_1}{r_3} = \\frac{1}{3} \\qquad \\text{oraz} \\qquad \\frac{r_2}{r_3} = \\frac{2}{3}$</p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2024_czerwiec_zad1_rysunek.png\" alt=\"Rysunek deseczki z monetami\" class=\"theory-img\" style=\"max-height: 250px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<p>Ruch deseczki i monet rozpatrujemy w inercjalnym układzie odniesienia związanym z ziemią, w jednorodnym, ziemskim polu grawitacyjnym.</p>\n\n<h4>Zadanie 1.1. (0–2)</h4>\n<p>Rozważamy sytuację, gdy deseczka z monetami <u>obraca się ze stałą prędkością kątową $\\omega$</u>.</p>\n<p><strong>Oceń prawdziwość poniższych stwierdzeń. Zaznacz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p>\n<table class=\"pf-table\">\n<tbody>\n<tr>\n<td class=\"pf-num\">1.</td>\n<td class=\"pf-text\">Wektory przyśpieszeń w ruchu postępowym monet są skierowane do osi obrotu $O$.</td>\n<td class=\"pf-box\">P</td>\n<td class=\"pf-box\">F</td>\n</tr>\n<tr>\n<td class=\"pf-num\">2.</td>\n<td class=\"pf-text\">Siła wypadkowa działająca na monetę M3 ma <u>trzy razy większą</u> wartość od wartości siły wypadkowej działającej na monetę M1.</td>\n<td class=\"pf-box\">P</td>\n<td class=\"pf-box\">F</td>\n</tr>\n<tr>\n<td class=\"pf-num\">3.</td>\n<td class=\"pf-text\">Prędkości liniowe (prędkości w ruchu postępowym) monet M1, M2 i M3 mają te same wartości.</td>\n<td class=\"pf-box\">P</td>\n<td class=\"pf-box\">F</td>\n</tr>\n</tbody>\n</table>\n\n<h4>Zadanie 1.2. (0–4)</h4>\n<p>Obracająca się deseczka została nagle zatrzymana, wskutek czego monety wypadły z wycięć i poruszały się dalej po stole wzdłuż linii prostych. Rozważamy ruch postępowy monet od chwili zatrzymania się deseczki do chwili zatrzymania się ostatniej monety na stole. W tym czasie monety M1, M2 i M3 przebyły drogi równe odpowiednio: $s_1, s_2$ i $s_3$.</p>\n<p>Przyjmij, że współczynnik tarcia kinetycznego o stół jest <u>taki sam</u> dla wszystkich monet oraz że monety <u>nie obracały</u> się podczas tego ruchu.</p>\n<p><strong>Oblicz $s_1 : s_2 : s_3$. Zapisz obliczenia.</strong></p>\n</div>",
                "solution": {
                  "intuition": "W ruchu jednostajnym po okręgu jedynym przyspieszeniem jest przyspieszenie dośrodkowe $a_d = \\omega^2 r$. Po wypadnięciu monety zwalniają pod wpływem stałej siły tarcia, a droga hamowania jest proporcjonalna do kwadratu prędkości początkowej: $s = v_0^2 / (2a)$.",
                  "givens": "$m_1 = m_2 = m_3 = m$, $r_1 : r_2 : r_3 = 1 : 2 : 3$, $\\omega = \\text{const}$, współczynnik tarcia $\\mu = \\text{const}$",
                  "steps": [
                    {
                      "title": "Zadanie 1.1",
                      "content": "1. Ruch monet po okręgu ze stałą prędkością kątową to ruch jednostajny po okręgu, w którym przyspieszenie jest wyłącznie dośrodkowe, a więc skierowane do środka okręgu (osi obrotu $O$). Zdanie 1 jest **prawdziwe (P)**.\\n2. Siła wypadkowa pełni rolę siły dośrodkowej: $F_w = F_{dośr} = m \\omega^2 r$. Stąd $F_{w3} = m \\omega^2 r_3 = m \\omega^2 (3r_1) = 3(m \\omega^2 r_1) = 3 F_{w1}$. Zdanie 2 jest **prawdziwe (P)**.\\n3. Prędkość liniowa wyraża się wzorem $v = \\omega r$. Ponieważ promienie są różne ($r_1 < r_2 < r_3$), prędkości liniowe monet są różne ($v_1 < v_2 < v_3$). Zdanie 3 jest **fałszywe (F)**."
                    },
                    {
                      "title": "Zadanie 1.2",
                      "content": "1. Prędkości początkowe monet w chwili wypadnięcia:\\n$v_1 = \\omega r_1$, $v_2 = \\omega r_2 = 2\\omega r_1$, $v_3 = \\omega r_3 = 3\\omega r_1$.\\n2. Podczas ślizgania się po stole jedyną siłą poziomą jest siła tarcia kinetycznego: $T = \\mu m g$.\\nZ II zasady dynamiki opóźnienie ruchu wynosi: $a = \\frac{T}{m} = \\mu g = \\text{const}$ dla wszystkich monet.\\n3. Droga hamowania do zatrzymania ($v_k = 0$) ze wzoru kinematycznego $v_k^2 - v_0^2 = -2as$:\\n$s = \\frac{v_0^2}{2a} = \\frac{v_0^2}{2\\mu g}$.\\nZatem droga jest wprost proporcjonalna do kwadratu prędkości poczatkowej:\\n$s_1 : s_2 : s_3 = v_1^2 : v_2^2 : v_3^2 = (\\omega r_1)^2 : (2\\omega r_1)^2 : (3\\omega r_1)^2 = 1 : 4 : 9$."
                    }
                  ],
                  "numerical": "1.1: 1-P, 2-P, 3-F; 1.2: $s_1 : s_2 : s_3 = 1 : 4 : 9$",
                  "answer": "1.1: 1-P, 2-P, 3-F; 1.2: $s_1 : s_2 : s_3 = 1 : 4 : 9$",
                  "trap": "Pamiętaj, że droga hamowania zależy od kwadratu prędkości początkowej ($s \\propto v^2$), a nie liniowo od prędkości.",
                  "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2024-czerwiec-matura-rozszerzona-odpowiedzi.pdf#page=3\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 3–6</a>."
                },
                "solutionSource": {
                  "publisher": "Centralna Komisja Egzaminacyjna",
                  "url": "https://arkusze.pl/maturalne/fizyka-2024-czerwiec-matura-rozszerzona-odpowiedzi.pdf",
                  "localFile": "data/arkusze_cke/2024/fizyka-2024-czerwiec-matura-rozszerzona-odpowiedzi.pdf",
                  "pages": [
                    3,
                    6
                  ]
                }
              },
              {
                "id": "matura-cke-2024-maj-zad-1",
                "number": 202405,
                "title": "Matura maj 2024 zad. 1 nowa formuła",
                "year": "2024 maj",
                "difficulty": 3,
                "source": "Matura CKE 2024 (Maj)",
                "link": "https://arkusze.pl/maturalne/fizyka-2024-maj-matura-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Dynamika",
                  "Opór powietrza",
                  "Prędkość graniczna",
                  "Siły"
                ],
                "image": "img/cke_2024_maj_zad1_wykres.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1.</h4>\n<p>Kropla wody oderwała się od dachu budynku w chwili $t_A$ i następnie opadała pionowo w powietrzu. Na poniższym wykresie przedstawiono zależność wartości $v$ prędkości kropli od czasu $t$ od chwili $t_A = 0\\text{ s}$ do chwili $t_F = 4\\text{ s}$, w której kropla uderzyła o podłoże.</p>\n<p>Na wykresie oznaczono wybrane punkty: $A, B, C, D, E, F$. Ruch kropli opisujemy w układzie odniesienia związanym z ziemią i zakładamy, że jest to układ inercjalny.</p>\n<p>Do analizy zagadnienia przyjmij uproszczony model zjawiska, w którym:</p>\n<ul>\n<li>podczas opadania kropli działają na nią dwie siły: siła oporu powietrza $\\vec{F}_o$ oraz siła grawitacji $\\vec{F}_g$ (pomijamy siłę wyporu aerostatycznego)</li>\n<li>kropla jest kulą o promieniu $R$, a jej masa się nie zmienia</li>\n<li>wartość siły oporu działającej na kroplę wyraża się wzorem:\n<p style=\"text-align:center;\">$F_o = k\\rho_p S v^2$</p>\ngdzie $k$ jest pewnym współczynnikiem, $\\rho_p$ jest gęstością powietrza, $S$ jest polem przekroju poprzecznego przez środek kropli, $v$ jest wartością prędkości kropli</li>\n<li>ruch kropli od chwili $t_D$ traktujemy jako <u>jednostajny prostoliniowy</u>, czyli przyjmij, że część $DF$ wykresu jest poziomym odcinkiem.</li>\n</ul>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2024_maj_zad1_wykres.png\" alt=\"Wykres prędkości v(t) opadającej kropli wody\" class=\"theory-img\" style=\"max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<h4>Zadanie 1.1. (0–1)</h4>\n<p><strong>Dokończ zdanie. Zaznacz odpowiedź A, B albo C i jej uzasadnienie 1., 2. albo 3.</strong></p>\n<p>Od chwili $t_A$ do chwili $t_D$ wartość przyśpieszenia kropli</p>\n<table class=\"cke-table\" style=\"width: 100%; border-collapse: collapse; margin: 15px 0;\">\n  <tbody>\n    <tr>\n      <td style=\"width: 5%; text-align: center; font-weight: bold;\">A.</td>\n      <td style=\"width: 25%;\">się zwiększa,</td>\n      <td rowspan=\"3\" style=\"width: 40%; text-align: center; vertical-align: middle; background: #ffffff;\">ponieważ wartość siły wypadkowej działającej w tym czasie na kroplę</td>\n      <td style=\"width: 5%; text-align: center; font-weight: bold;\">1.</td>\n      <td style=\"width: 25%;\">się zwiększa.</td>\n    </tr>\n    <tr>\n      <td style=\"text-align: center; font-weight: bold;\">B.</td>\n      <td>się zmniejsza,</td>\n      <td style=\"text-align: center; font-weight: bold;\">2.</td>\n      <td>się zmniejsza.</td>\n    </tr>\n    <tr>\n      <td style=\"text-align: center; font-weight: bold;\">C.</td>\n      <td>pozostaje stała,</td>\n      <td style=\"text-align: center; font-weight: bold;\">3.</td>\n      <td>pozostaje stała.</td>\n    </tr>\n  </tbody>\n</table>\n\n<h4>Zadanie 1.2. (0–3)</h4>\n<p>Punkt $K$ na diagramach 1.–2. reprezentuje kroplę. Długość boku kratki na każdym diagramie odpowiada umownej jednostce siły. Na diagramach 1.–2. narysowano siłę grawitacji działającą na kroplę, natomiast nie narysowano siły oporu $\\vec{F}_o$.</p>\n<p><strong>Na diagramie 1. narysuj i oznacz siłę oporu $\\vec{F}_{oE}$ przyłożoną w punkcie $K$, działającą na kroplę w chwili $t_E = 3{,}6\\text{ s}$. Na diagramie 2. narysuj i oznacz siłę oporu $\\vec{F}_{oB}$ przyłożoną w punkcie $K$, działającą na kroplę w chwili $t_B = 0{,}4\\text{ s}$.</strong></p>\n<p><strong>Zachowaj odpowiednie kierunki, zwroty oraz <u>dokładne długości</u> wektorów, odpowiadające wartościom tych sił. Wykorzystaj fakt, że wartość siły oporu jest wprost proporcjonalna do kwadratu wartości prędkości kropli: $F_o \\propto v^2$.</strong></p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_2024_maj_zad1_diagramy.png\" alt=\"Diagram 1 i 2 - siatki do narysowania wektorów sił\" class=\"theory-img\" style=\"max-height: 420px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<h4>Zadanie 1.3. (0–4)</h4>\n<p><strong>Wyprowadź wzór pozwalający wyznaczyć $v_E$ – wartość prędkości, z jaką kropla opada w powietrzu ruchem jednostajnym prostoliniowym – w zależności od: promienia kropli $R$, gęstości powietrza $\\rho_p$, gęstości wody $\\rho_w$, wartości przyśpieszenia ziemskiego $g$ oraz współczynnika $k$.</strong></p>\n<p><strong>Zapisz odpowiednie równania i przekształcenia oraz podaj postać tego wzoru.</strong></p>\n<p><i>Wskazówka: Objętość kuli o promieniu $R$ wyraża się wzorem $V = \\frac{4}{3}\\pi R^3$.</i></p>\n</div>",
                "solution": {
                  "intuition": "W miarę jak kropla przyspiesza, rośnie siła oporu powietrza $F_o \\propto v^2$. Siła wypadkowa $F_w = F_g - F_o$ maleje, aż wreszcie $F_o = F_g$ i kropla porusza się ze stałą prędkością graniczną.",
                  "givens": "$F_o = k\\rho_p S v^2$, $S = \\pi R^2$, $m = \\rho_w V = \\rho_w \\frac{4}{3}\\pi R^3$, $F_g = mg$",
                  "steps": [
                    {
                      "title": "Zadanie 1.1",
                      "content": "W miarę wzrostu prędkości $v$ kropli wartość siły oporu $F_o$ rośnie. Siła wypadkowa skierowana w dół wynosi $F_w = F_g - F_o$, więc maleje. Z II zasady dynamiki $a = F_w / m$, więc przyspieszenie kropli zmniejsza się. Prawidłowa odpowiedź: **B 2**."
                    },
                    {
                      "title": "Zadanie 1.2",
                      "content": "Na diagramach wektor $\\vec{F}_g$ ma długość 8 kratek pionowo w dół.\\n1. W chwili $t_E = 3{,}6\\text{ s}$ ruch jest jednostajny ($v = 7\\text{ m/s} = \\text{const}$), więc siły się równoważą: $F_{oE} = F_g$. Wektor $\\vec{F}_{oE}$ ma długość dokładnie **8 kratek** pionowo w górę.\\n2. W chwili $t_B = 0{,}4\\text{ s}$ z wykresu odczytujemy $v_B = 3{,}5\\text{ m/s}$.\\nStosunek prędkości: $\\frac{v_B}{v_E} = \\frac{3{,}5}{7{,}0} = \\frac{1}{2}$.\\nPonieważ siła oporu zależy od kwadratu prędkości ($F_o \\propto v^2$):\\n$\\frac{F_{oB}}{F_{oE}} = \\left(\\frac{v_B}{v_E}\\right)^2 = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.\\nZatem długość wektora $\\vec{F}_{oB}$ wynosi $\\frac{1}{4} \\cdot 8\\text{ kratek} = \\mathbf{2\\text{ kratki}}$ pionowo w górę."
                    },
                    {
                      "title": "Zadanie 1.3",
                      "content": "Dla ruchu jednostajnego z prędkością graniczną $v_E$ zachodzi równowaga sił:\\n$ F_g = F_o $\\n$ m g = k \\rho_p S v_E^2 $\\nPodstawiamy masę kropli $m = \\rho_w V = \\rho_w \\frac{4}{3}\\pi R^3$ oraz pole przekroju $S = \\pi R^2$:\\n$ \\rho_w \\frac{4}{3}\\pi R^3 g = k \\rho_p (\\pi R^2) v_E^2 $\\nDzielimy obustronnie przez $\\pi R^2$:\\n$ \\frac{4}{3} \\rho_w R g = k \\rho_p v_E^2 $\\nWyznaczamy $v_E^2$ i pierwiastkujemy:\\n$ v_E^2 = \\frac{4 \\rho_w R g}{3 k \\rho_p} \\implies v_E = \\sqrt{\\frac{4 \\rho_w R g}{3 k \\rho_p}} = 2\\sqrt{\\frac{\\rho_w R g}{3 k \\rho_p}} $"
                    }
                  ],
                  "numerical": "1.1: B 2; 1.2: Diagram 1: 8 kratek w górę, Diagram 2: 2 kratki w górę; 1.3: $v_E = \\sqrt{\\frac{4\\rho_w R g}{3k\\rho_p}}$",
                  "answer": "1.1: B 2; 1.2: Diagram 1: 8 kratek w górę, Diagram 2: 2 kratki w górę; 1.3: $v_E = \\sqrt{\\frac{4\\rho_w R g}{3k\\rho_p}}$",
                  "trap": "W zadaniu 1.2 pamiętaj o kwadracie stosunku prędkości ($1/2$ do kwadratu to $1/4$, czyli 2 kratki, a nie 4 kratki!)."
                }
              },
              {
                "id": "matura-cke-informator-2025-zad-1",
                "number": 2025001,
                "title": "Informator CKE 2025 zad. 1 nowa formuła",
                "year": "Informator 2025",
                "difficulty": 3,
                "source": "Informator CKE od roku szkolnego 2024/2025",
                "link": "https://bip.cke.gov.pl/attachments/download/10000",
                "tags": [
                  "Matura CKE",
                  "Dynamika",
                  "Popęd siły",
                  "Pęd",
                  "II zasada dynamiki"
                ],
                "image": "img/cke_informator_2025_zad1_tor.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1. Impulsowe działanie siły</h4>\n<p>Na rysunku poniżej przedstawiono ruch ciała o masie $m = 0{,}5\\text{ kg}$ w inercjalnym układzie odniesienia, we współrzędnych $(x, y)$. Początkowo ciało poruszało się swobodnie ruchem jednostajnym z prędkością $\\vec{v}_k$ wzdłuż prostej $k$. W punkcie $A_4$ na ciało zadziałała siła $\\vec{F}$, przy czym czas jej działania był bardzo krótki i wynosił $\\Delta\\tau = 0{,}02\\text{ s}$. Gdy siła przestała działać, ciało poruszało się dalej ruchem jednostajnym z prędkością $\\vec{v}_l$ wzdłuż prostej $l$.</p>\n<p>Na wykresie toru narysowano i oznaczono położenia ciała w pierwszym etapie ruchu ($A_1$–$A_4$) i w drugim etapie ruchu ($A_4$–$A_7$). Czas ruchu wzdłuż każdego z odcinków: $A_1 A_2, A_2 A_3, \\dots, A_6 A_7$ był taki sam i wynosił $\\Delta t = 1\\text{ s}$.</p>\n\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_informator_2025_zad1_tor.png\" alt=\"Wykres toru ruchu we współrzędnych (x, y)\" class=\"theory-img\" style=\"max-height: 280px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<p>Przyjmij model zjawiska, w którym zakładamy, że siła $\\vec{F}$ była stała. Na rysunkach pominięto bardzo krótki paraboliczny fragment toru, gdy na ciało działała siła $\\vec{F}$.</p>\n<h4>Zadanie 1.1. (0–1)</h4>\n<p><strong>Na którym diagramie (spośród A–D) prawidłowo przedstawiono kierunek i zwrot siły $\\vec{F}$? Zaznacz właściwą odpowiedź spośród podanych.</strong></p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_informator_2025_zad1_opcje.png\" alt=\"Diagramy A, B, C, D do Zadania 1.1\" class=\"theory-img\" style=\"max-height: 320px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<h4>Zadanie 1.2. (0–3)</h4>\n<p><strong>Oblicz wartość siły $\\vec{F}$. Zapisz obliczenia.</strong></p>\n</div>",
                "solution": {
                  "intuition": "Z uogólnionej II zasady dynamiki Newtona $\\vec{F} = \\frac{\\Delta \\vec{p}}{\\Delta \\tau} = m \\frac{\\vec{v}_l - \\vec{v}_k}{\\Delta \\tau}$. Zmiana wektora prędkości $\\Delta \\vec{v}$ ma kierunek i zwrot zgodny z wektorem działającej siły.",
                  "givens": "$m = 0{,}5\\text{ kg}$, $\\Delta\\tau = 0{,}02\\text{ s}$, $\\Delta t = 1\\text{ s}$",
                  "steps": [
                    {
                      "title": "Zadanie 1.1",
                      "content": "Zgodnie z drugą zasadą dynamiki kierunek i zwrot siły $\\vec{F}$ jest taki sam jak kierunek i zwrot wektora zmiany pędu $\\Delta \\vec{p} = m \\Delta \\vec{v} = m (\\vec{v}_l - \\vec{v}_k)$.\\nOdejmowanie wektorów wykonujemy geometrycznie: $\\Delta \\vec{v} = \\vec{v}_l + (-\\vec{v}_k)$. Ponieważ $\\vec{v}_k$ jest skierowany poziomo w prawo, wektor $-\\vec{v}_k$ jest skierowany poziomo w lewo. Po dodaniu do wektora $\\vec{v}_l$ otrzymujemy wektor skierowany w prawo i w dół o składowych $[+1\\text{ m/s}; -2\\text{ m/s}]$.\\nPrawidłowy diagram to **C**."
                    },
                    {
                      "title": "Zadanie 1.2",
                      "content": "1. Wyznaczamy wektory prędkości przed i po zadziałaniu siły z położeń na wykresie (czas każdego odcinka $\\Delta t = 1\\text{ s}$):\\n$\\vec{v}_k = \\frac{\\vec{A_3 A_4}}{\\Delta t} = [4\\text{ m/s}; 0\\text{ m/s}]$\\n$\\vec{v}_l = \\frac{\\vec{A_4 A_5}}{\\Delta t} = [19\\text{ m} - 14\\text{ m}; 6\\text{ m} - 8\\text{ m}] = [5\\text{ m/s}; -2\\text{ m/s}]$\\n2. Wektor zmiany prędkości:\\n$\\Delta \\vec{v} = \\vec{v}_l - \\vec{v}_k = [5 - 4; -2 - 0] = [1\\text{ m/s}; -2\\text{ m/s}]$\\n3. Wartość zmiany prędkości:\\n$|\\Delta \\vec{v}| = \\sqrt{1^2 + (-2)^2} = \\sqrt{5}\\text{ m/s} \\approx 2{,}236\\text{ m/s}$\\n4. Wartość siły z II zasady dynamiki:\\n$F = \\frac{m |\\Delta \\vec{v}|}{\\Delta \\tau} = \\frac{0{,}5\\text{ kg} \\cdot \\sqrt{5}\\text{ m/s}}{0{,}02\\text{ s}} = 25\\sqrt{5}\\text{ N} \\approx 56\\text{ N}$"
                    }
                  ],
                  "numerical": "1.1: C; 1.2: $F = 25\\sqrt{5}\\text{ N} \\approx 56\\text{ N}$",
                  "answer": "1.1: C; 1.2: $F \\approx 56\\text{ N}$ (lub $25\\sqrt{5}\\text{ N}$)",
                  "trap": "Uwaga! Nie wolno odejmować wartości prędkości skalarne (|vl| - |vk|), trzeba odjąć wektory we współrzędnych i dopiero potem obliczyć długość wektora różnicy!"
                }
              },
              {
                "id": "matura-cke-informator-2023-zad-1",
                "number": 2023001,
                "title": "Informator CKE zad. 1 nowa formuła",
                "year": "Informator 2023",
                "difficulty": 3,
                "source": "Informator Maturalny CKE (Formuła 2023)",
                "link": "https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2023/Informatory/Informator_EM2023_fizyka.pdf",
                "tags": [
                  "Matura CKE",
                  "Dynamika",
                  "Popęd siły",
                  "Pęd",
                  "II zasada dynamiki"
                ],
                "image": "img/cke_informator_zad1_tor.png",
                "problem": "<div class=\"task-matura\">\n<h4>Zadanie 1. Impulsowe działanie siły</h4>\n<p>Na rysunku poniżej przedstawiono ruch ciała o masie $m = 0{,}5\\text{ kg}$ w inercjalnym układzie odniesienia, we współrzędnych $(x, y)$. Początkowo ciało poruszało się swobodnie ruchem jednostajnym z prędkością $\\vec{v}_k$ wzdłuż prostej $k$. W punkcie $A_4$ na ciało zadziałała siła $\\vec{F}$, przy czym czas jej działania był bardzo krótki i wynosił $\\Delta\\tau = 0{,}02\\text{ s}$. Gdy siła przestała działać, ciało poruszało się dalej ruchem jednostajnym z prędkością $\\vec{v}_l$ wzdłuż prostej $l$.</p>\n<p>Na wykresie toru narysowano i oznaczono położenia ciała w pierwszym etapie ruchu ($A_1$–$A_4$) i w drugim etapie ruchu ($A_4$–$A_7$). Czas ruchu wzdłuż każdego z odcinków: $A_1 A_2, A_2 A_3, \\dots, A_6 A_7$ był taki sam i wynosił $\\Delta t = 1\\text{ s}$.</p>\n<p>Przyjmij model zjawiska, w którym zakładamy, że siła $\\vec{F}$ była stała. Na rysunkach pominięto bardzo krótki paraboliczny fragment toru, gdy na ciało działała siła $\\vec{F}$.</p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_informator_zad1_tor.png\" alt=\"Wykres toru ruchu we współrzędnych (x, y)\" class=\"theory-img\" style=\"max-height: 280px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<h4>Zadanie 1.1. (0–1)</h4>\n<p><strong>Na którym diagramie prawidłowo przedstawiono kierunek i zwrot siły $\\vec{F}$? Zaznacz właściwą odpowiedź spośród podanych.</strong></p>\n\n<div class=\"chart-container-svg\">\n<img src=\"img/cke_informator_zad1_opcje.png\" alt=\"Diagramy A, B, C, D do Zadania 1.1\" class=\"theory-img\" style=\"max-height: 320px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;\">\n</div>\n\n<h4>Zadanie 1.2. (0–3)</h4>\n<p><strong>Oblicz wartość siły $\\vec{F}$.</strong></p>\n</div>",
                "solution": {
                  "intuition": "Z uogólnionej II zasady dynamiki Newtona $\\vec{F} = \\frac{\\Delta \\vec{p}}{\\Delta \\tau} = m \\frac{\\vec{v}_l - \\vec{v}_k}{\\Delta \\tau}$. Zmiana wektora prędkości $\\Delta \\vec{v}$ ma kierunek i zwrot zgodny z wektorem działającej siły.",
                  "givens": "$m = 0{,}5\\text{ kg}$, $\\Delta\\tau = 0{,}02\\text{ s}$, $\\Delta t = 1\\text{ s}$",
                  "steps": [
                    {
                      "title": "Zadanie 1.1",
                      "content": "Zgodnie z drugą zasadą dynamiki kierunek i zwrot siły $\\vec{F}$ jest taki sam jak kierunek i zwrot wektora zmiany pędu $\\Delta \\vec{p} = m \\Delta \\vec{v} = m (\\vec{v}_l - \\vec{v}_k)$.\\nOdejmowanie wektorów wykonujemy geometrycznie: $\\Delta \\vec{v} = \\vec{v}_l + (-\\vec{v}_k)$. Ponieważ $\\vec{v}_k$ jest skierowany poziomo w prawo, wektor $-\\vec{v}_k$ jest skierowany poziomo w lewo. Po dodaniu do wektora $\\vec{v}_l$ otrzymujemy wektor skierowany w prawo i w dół o składowych $[+1\\text{ m/s}; -2\\text{ m/s}]$.\\nPrawidłowy diagram to **C**."
                    },
                    {
                      "title": "Zadanie 1.2",
                      "content": "1. Wyznaczamy wektory prędkości przed i po zadziałaniu siły z położeń na wykresie (czas każdego odcinka $\\Delta t = 1\\text{ s}$):\\n$\\vec{v}_k = \\frac{\\vec{A_3 A_4}}{\\Delta t} = [4\\text{ m/s}; 0\\text{ m/s}]$\\n$\\vec{v}_l = \\frac{\\vec{A_4 A_5}}{\\Delta t} = [19\\text{ m} - 14\\text{ m}; 6\\text{ m} - 8\\text{ m}] = [5\\text{ m/s}; -2\\text{ m/s}]$\\n2. Wektor zmiany prędkości:\\n$\\Delta \\vec{v} = \\vec{v}_l - \\vec{v}_k = [5 - 4; -2 - 0] = [1\\text{ m/s}; -2\\text{ m/s}]$\\n3. Wartość zmiany prędkości:\\n$|\\Delta \\vec{v}| = \\sqrt{1^2 + (-2)^2} = \\sqrt{5}\\text{ m/s} \\approx 2{,}236\\text{ m/s}$\\n4. Wartość siły z II zasady dynamiki:\\n$F = \\frac{m |\\Delta \\vec{v}|}{\\Delta \\tau} = \\frac{0{,}5\\text{ kg} \\cdot \\sqrt{5}\\text{ m/s}}{0{,}02\\text{ s}} = 25\\sqrt{5}\\text{ N} \\approx 56\\text{ N}$"
                    }
                  ],
                  "numerical": "1.1: C; 1.2: $F = 25\\sqrt{5}\\text{ N} \\approx 56\\text{ N}$",
                  "answer": "1.1: C; 1.2: $F \\approx 56\\text{ N}$ (lub $25\\sqrt{5}\\text{ N}$)",
                  "trap": "Uwaga! Nie wolno odejmować wartości prędkości skalarne (|vl| - |vk|), trzeba odjąć wektory we współrzędnych i dopiero potem obliczyć długość wektora różnicy!"
                }
              }
            ]
          }
        ]
      },
      {
        "id": "m-praca",
        "title": "Dział 3: Praca, Moc i Energia",
        "icon": "⚡",
        "badge": "4 Etapy Wprowadzające + Matura CKE",
        "isComingSoon": false,
        "desc": "Praca, moc, sprawność, energia kinetyczna i potencjalna, zasada zachowania energii oraz zderzenia sprężyste i niesprężyste.",
        "subchapters": [
          {
            "id": "sub-praca-moc",
            "number": 1,
            "icon": "⚡",
            "title": "1. Praca i moc",
            "shortTitle": "Praca i moc",
            "desc": "Praca siły stałej i tarcia, pola pod wykresami F(s) oraz P(t), moc chwilowa, średnia i sprawność urządzeń.",
            "theory": "<div class=\"theory-section\">\n  <div class=\"theory-subtitle\">1. Praca jako miara przekazywania energii ($W$)</div>\n  <p>Praca siły stałej $\\vec{F}$ na prostoliniowym przemieszczeniu $\\vec{s}$ jest iloczynem skalarnym:</p>\n  <div style=\"text-align:center;margin:6px 0;\">$$W = \\vec{F} \\cdot \\vec{s} = F \\cdot s \\cdot \\cos\\alpha$$</div>\n  <ul class=\"theory-list\">\n    <li><strong>$F$</strong> – wartość siły $[\\text{N}]$, <strong>$s$</strong> – przemieszczenie $[\\text{m}]$, <strong>$\\alpha$</strong> – kąt między wektorem siły a wektorem przemieszczenia.</li>\n    <li>Jednostka pracy i energii w układzie SI: $1\\text{ J} = 1\\text{ N} \\cdot 1\\text{ m} = 1\\text{ kg} \\cdot \\text{m}^2/\\text{s}^2$.</li>\n    <li><strong>Twierdzenie o pracy i energii:</strong> praca siły wypadkowej jest równa zmianie energii kinetycznej ciała: $W_{\\text{wyp}} = \\Delta E_k$.</li>\n  </ul>\n\n<figure class=\"theory-figure\">\n  <img class=\"theory-diagram\" src=\"img/theory/energy/work-angle-custom.png\" alt=\"Klocek przesuwa się w prawo, a siła F działa pod kątem alfa. Zaznaczono składową F cos alfa równoległą do przemieszczenia.\" loading=\"eager\" decoding=\"async\">\n</figure>\n\n  <div class=\"theory-subtitle\">2. Znaki pracy i siły bez pracy</div>\n  <ul class=\"theory-list\">\n    <li><strong>Praca dodatnia ($W > 0$):</strong> gdy $\\alpha < 90^\\circ$ ($\\cos\\alpha > 0$) – siła wspomaga ruch, zwiększając energię kinetyczną.</li>\n    <li><strong>Praca równa zero ($W = 0$):</strong> gdy siła działa <u>prostopadle</u> do kierunku ruchu ($\\alpha = 90^\\circ \\implies \\cos 90^\\circ = 0$).<br>\n    <em>Ważne:</em> Ciężar ciała ($W_g = 0$) oraz siła sprężystości/reakcji podłoża ($W_{F_n} = 0$, gdzie $F_n$ to siła reakcji/nacisku) <strong>nie wykonują pracy</strong> przy poziomym przemieszczeniu! Podobnie siła dośrodkowa w ruchu po okręgu nie wykonuje pracy ($W_{doś} = 0$).</li>\n    <li><strong>Praca ujemna ($W < 0$):</strong> gdy $\\alpha > 90^\\circ$ ($\\cos\\alpha < 0$) – siła hamuje ruch, odbierając ciału energię mechaniczną.<br>\n    Dla siły tarcia zwrot jest zawsze przeciwny do przemieszczenia ($\\alpha = 180^\\circ \\implies \\cos 180^\\circ = -1$):\n    <div style=\"text-align:center;margin:4px 0;\">$W_T = -T \\cdot s = -\\mu F_n s$</div>\n    gdzie: $T$ – wartość siły tarcia, $\\mu$ – współczynnik tarcia, $F_n$ – siła nacisku na podłoże, $s$ – przemieszczenie (droga).</li>\n  </ul>\n\n<figure class=\"theory-figure\">\n  <img class=\"theory-diagram\" src=\"img/theory/energy/work-signs-custom.png\" alt=\"Trzy schematy: siła zgodna z ruchem wykonuje pracę dodatnią, prostopadła pracę zerową, a przeciwna pracę ujemną.\" loading=\"eager\" decoding=\"async\">\n</figure>\n\n  <div class=\"theory-subtitle\">3. Interpretacja geometryczna – pole pod wykresem $F(s)$</div>\n  <p>Dla dowolnej siły (stałej lub zmiennej) praca jest równa <strong>polu powierzchni pod wykresem $F(s)$</strong>:</p>\n  <ul class=\"theory-list\">\n    <li>Dla siły stałej: pole prostokąta $W = F \\cdot s$.</li>\n    <li>Dla siły sprężystej $F(x) = kx$: pole trójkąta pod wykresem $W = \\frac{1}{2} k x^2$ (równa energii potencjalnej sprężystości).</li>\n  </ul>\n\n<figure class=\"theory-figure\">\n  <img class=\"theory-diagram\" src=\"img/theory/energy/work-graph-custom.png\" alt=\"Wykresy siły od drogi dla siły stałej oraz siły sprężystości (zmiennej).\" loading=\"eager\" decoding=\"async\">\n</figure>\n\n  <div class=\"theory-subtitle\">4. Moc ($P$) i sprawność ($\\eta$)</div>\n  <ul class=\"theory-list\">\n    <li><strong>Moc średnia ($P$):</strong> szybkość przekazywania energii (wykonywania pracy):\n    <div style=\"text-align:center;margin:6px 0;\">$$P = \\frac{W}{t}$$</div>\n    gdzie: $W$ – praca $[\\text{J}]$, $t$ – czas $[\\text{s}]$. Jednostka w SI: wat $[1\\text{ W} = 1\\text{ J}/\\text{s}]$.</li>\n    <li><strong>Wyprowadzenie wzoru na moc ze stałą prędkością ($P = F \\cdot v$):</strong><br>Wychodzimy bezpośrednio z definicji pracy siły stałej $W = F \\cdot s$ wzdłuż toru ruchu i podstawiamy do definicji mocy:\n    <div style=\"text-align:center;margin:6px 0;\">$$P = \\frac{W}{t} = \\frac{F \\cdot s}{t} = F \\cdot \\left(\\frac{s}{t}\\right) = F \\cdot v$$</div>\n    gdzie: $F$ – wartość siły, $v = \\frac{s}{t}$ – stała prędkość ciała. Wzór ten łączy dynamikę z kinematyką.</li>\n    <li><strong>Sprawność ($\\eta$):</strong> stosunek energii użytecznej do całkowicie dostarczonej:\n    <div style=\"text-align:center;margin:6px 0;\">$$\\eta = \\frac{W_u}{W_c} = \\frac{P_u}{P_c} \\le 1 \\quad (\\text{lub } \\eta \\cdot 100\\%)$$</div>\n    gdzie: $W_u, P_u$ – praca i moc użyteczna, $W_c, P_c$ – praca i moc całkowita (dostarczona). Ze względu na straty (tarcia, opory, ciepło) sprawność jest zawsze mniejsza od $1$ ($100\\%$).</li>\n  </ul></div>",
            "formulaCheat": "W = F \\cdot s \\cdot \\cos\\alpha, \\quad P = \\frac{W}{t} = F \\cdot v, \\quad \\eta = \\frac{P_u}{P_c}",
            "tasks": [
              {
                "id": "p-zad-1",
                "number": 1,
                "title": "Zadanie 1. Praca siły w kierunku ruchu",
                "difficulty": 1,
                "source": "Zbiór autorski Matura 2027 • Praca i moc",
                "tags": [
                  "Praca siły",
                  "Wzór W = F·s"
                ],
                "problem": "<p class=\"problem-paragraph\">Siła $20\\text{ N}$ przesuwa klocek o $3\\text{ m}$ w tym samym kierunku. Oblicz pracę tej siły.</p>",
                "solution": {
                  "givens": "$F = 20\\text{ N}$, $s = 3\\text{ m}$, zwrot siły zgodny ze zwrotem przemieszczenia ($\\alpha = 0^\\circ$).",
                  "steps": [
                    {
                      "title": "Zastosowanie definicji pracy siły stałej",
                      "content": "Kierunek i zwrot siły pokrywają się z kierunkiem ruchu, więc $\\cos 0^\\circ = 1$:\n$$W = F \\cdot s = 20\\text{ N} \\cdot 3\\text{ m} = 60\\text{ J}$$"
                    }
                  ],
                  "answer": "Praca wykonana przez tę siłę wynosi $60\\text{ J}$."
                }
              },
              {
                "id": "p-zad-2",
                "number": 2,
                "title": "Zadanie 2. Praca siły pod kątem 60°",
                "difficulty": 1,
                "source": "Zbiór autorski Matura 2027 • Praca i moc",
                "tags": [
                  "Praca siły",
                  "Kąt nachylenia"
                ],
                "problem": "<p class=\"problem-paragraph\">Siła $10\\text{ N}$ działa na wózek poruszający się poziomo o $4\\text{ m}$. Kierunek siły tworzy z przemieszczeniem kąt $60^\\circ$. Oblicz pracę.</p>",
                "solution": {
                  "givens": "$F = 10\\text{ N}$, $s = 4\\text{ m}$, $\\alpha = 60^\\circ$, $\\cos 60^\\circ = 0{,}5$.",
                  "steps": [
                    {
                      "title": "Obliczenie pracy ze składowej równoległej do przemieszczenia",
                      "content": "Pracę wykonuje wyłącznie składowa siły równoległa do toru ruchu:\n$$W = F \\cdot s \\cdot \\cos\\alpha = 10\\text{ N} \\cdot 4\\text{ m} \\cdot \\cos 60^\\circ = 40 \\cdot 0{,}5 = 20\\text{ J}$$"
                    }
                  ],
                  "answer": "Praca siły wynosi $20\\text{ J}$."
                }
              },
              {
                "id": "p-zad-3",
                "number": 3,
                "title": "Zadanie 3. Praca ciężaru i reakcji stołu",
                "difficulty": 1,
                "source": "Zbiór autorski Matura 2027 • Praca i moc",
                "tags": [
                  "Praca siły",
                  "Zadanie zamknięte",
                  "Siły prostopadłe"
                ],
                "correctOption": "A",
                "problem": "<p class=\"problem-paragraph\">Książkę o masie $2\\text{ kg}$ przesunięto po poziomym stole o $5\\text{ m}$. Wskaż pracę ciężaru i reakcji stołu.</p>\n<div class=\"problem-options-list\" data-correct=\"A\">\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">$W_g = 0\\text{ i }W_N = 0$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">$W_g = +100\\text{ J}\\text{ i }W_N = 0$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">$W_g = -100\\text{ J}\\text{ i }W_N = 0$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">$W_g = 0\\text{ i }W_N = +100\\text{ J}$</span></div>\n</div>",
                "solution": {
                  "givens": "$m = 2\\text{ kg}$, $s = 5\\text{ m}$ (ruch w poziomie).",
                  "steps": [
                    {
                      "title": "Analiza kąta między wektorami sił a przemieszczeniem",
                      "content": "Siła grawitacji $\\vec{F}_g$ działa pionowo w dół, a siła reakcji podłoża $\\vec{F}_N$ pionowo w górę. Obie siły tworzą z poziomym wektorem przemieszczenia kąt prosty $\\alpha = 90^\\circ$.\nPonieważ $\\cos 90^\\circ = 0$:\n$$W_g = F_g \\cdot s \\cdot \\cos 90^\\circ = 0$$\n$$W_N = F_N \\cdot s \\cdot \\cos 90^\\circ = 0$$"
                    }
                  ],
                  "answer": "Poprawna odpowiedź: A ($W_g = 0\\text{ i }W_N = 0$).",
                  "trap": "Siły prostopadłe do toru ruchu nigdy nie wykonują pracy mechanicznej, bez względu na wartość siły czy przebytą drogę!"
                }
              },
              {
                "id": "p-zad-4",
                "number": 4,
                "title": "Zadanie 4. Praca siły tarcia",
                "difficulty": 1,
                "source": "Zbiór autorski Matura 2027 • Praca i moc",
                "tags": [
                  "Praca siły",
                  "Siła tarcia"
                ],
                "problem": "<p class=\"problem-paragraph\">Klocek przesuwa się w prawo o $4\\text{ m}$. Tarcie ma stałą wartość $3\\text{ N}$. Oblicz pracę tarcia.</p>",
                "solution": {
                  "givens": "$s = 4\\text{ m}$ (w prawo), $T = 3\\text{ N}$ (w lewo), zwrot tarcia przeciwny do ruchu ($\\alpha = 180^\\circ$).",
                  "steps": [
                    {
                      "title": "Wyznaczenie pracy siły tarcia",
                      "content": "Kąt między wektorem siły tarcia a wektorem przemieszczenia wynosi $180^\\circ$, a $\\cos 180^\\circ = -1$:\n$$W_t = -T \\cdot s = -3\\text{ N} \\cdot 4\\text{ m} = -12\\text{ J}$$"
                    }
                  ],
                  "answer": "Praca tarcia wynosi $-12\\text{ J}$.",
                  "trap": "Ujemny znak pracy oznacza rozpraszanie energii mechanicznej — zamianę jej w energię termiczną (ciepło)."
                }
              },
              {
                "id": "p-zad-5",
                "number": 5,
                "title": "Zadanie 5. Podnoszenie pionowe ładunku",
                "difficulty": 1,
                "source": "Zbiór autorski Matura 2027 • Praca i moc",
                "tags": [
                  "Praca siły",
                  "Ruch jednostajny",
                  "Grawitacja"
                ],
                "problem": "<p class=\"problem-paragraph\">Ładunek $10\\text{ kg}$ podnoszony jest pionowo ruchem jednostajnym na wysokość $2\\text{ m}$. Oblicz pracę siły podnoszącej oraz pracę ciężaru.</p>",
                "solution": {
                  "givens": "$m = 10\\text{ kg}$, $h = 2\\text{ m}$, $g = 10\\text{ m/s}^2$, ruch jednostajny ($v = \\text{const}$).",
                  "steps": [
                    {
                      "title": "Praca siły podnoszącej",
                      "content": "W ruchu jednostajnym siła wypadkowa wynosi zero, zatem siła podnosząca ma wartość równą ciężarowi: $F_p = mg = 10 \\cdot 10 = 100\\text{ N}$.\nSiła podnosząca ma zwrot w górę, zgodny z ruchem:\n$$W_p = F_p \\cdot h = mgh = 100\\text{ N} \\cdot 2\\text{ m} = +200\\text{ J}$$"
                    },
                    {
                      "title": "Praca siły ciężkości",
                      "content": "Siła ciężkości ma zwrot w dół, przeciwny do kierunku podnoszenia ($\\alpha = 180^\\circ$):\n$$W_g = -mg \\cdot h = -100\\text{ N} \\cdot 2\\text{ m} = -200\\text{ J}$$"
                    }
                  ],
                  "answer": "Praca siły podnoszącej wynosi $+200\\text{ J}$, a praca siły ciężkości wynosi $-200\\text{ J}$ (praca wypadkowa $W_w = 0$).",
                  "trap": "W ruchu jednostajnym praca wypadkowa wszystkich sił wynosi zero, ponieważ energia kinetyczna ciała się nie zmienia (ΔEk = 0)."
                }
              },
              {
                "id": "p-zad-6",
                "number": 6,
                "title": "Zadanie 6. Praca dwóch przeciwstawnych sił",
                "difficulty": 1,
                "source": "Zbiór autorski Matura 2027 • Praca i moc",
                "tags": [
                  "Praca siły",
                  "Praca wypadkowa"
                ],
                "problem": "<p class=\"problem-paragraph\">Na ciało działają równolegle do przemieszczenia siły $12\\text{ N}$ w prawo i $5\\text{ N}$ w lewo. Ciało przemieszcza się o $3\\text{ m}$ w prawo. Oblicz pracę każdej siły i pracę wypadkową.</p>",
                "solution": {
                  "givens": "$F_1 = 12\\text{ N}$ (w prawo), $F_2 = 5\\text{ N}$ (w lewo), $s = 3\\text{ m}$ (w prawo).",
                  "steps": [
                    {
                      "title": "Obliczenie pracy każdej siły z osobna",
                      "content": "$$W_1 = F_1 \\cdot s = 12\\text{ N} \\cdot 3\\text{ m} = +36\\text{ J}$$\n$$W_2 = -F_2 \\cdot s = -5\\text{ N} \\cdot 3\\text{ m} = -15\\text{ J}$$"
                    },
                    {
                      "title": "Obliczenie pracy wypadkowej",
                      "content": "Praca wypadkowa to suma prac składowych (lub praca siły wypadkowej $F_w = 12 - 5 = 7\\text{ N}$):\n$$W_w = W_1 + W_2 = 36\\text{ J} + (-15\\text{ J}) = 21\\text{ J}$$\n$$(W_w = F_w \\cdot s = 7\\text{ N} \\cdot 3\\text{ m} = 21\\text{ J})$$"
                    }
                  ],
                  "answer": "$W_1 = 36\\text{ J}$, $W_2 = -15\\text{ J}$, a praca wypadkowa wynosi $W_w = 21\\text{ J}$."
                }
              },
              {
                "id": "p-zad-7",
                "number": 7,
                "title": "Zadanie 7. Praca jako pole pod wykresem F(s)",
                "difficulty": 2,
                "source": "Zbiór autorski Matura 2027 • Praca i moc",
                "tags": [
                  "Praca siły",
                  "Pole pod wykresem",
                  "Wykres F(s)"
                ],
                "problem": "<p class=\"problem-paragraph\">Wartość poziomej siły działającej wzdłuż ruchu zależy od drogi zgodnie z wykresem. Oblicz pracę na odcinku $0 \\le s \\le 4\\text{ m}$.</p>",
                "chartSvg": "<svg viewBox=\"0 0 380 230\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:380px; width:100%; height:auto; font-family:system-ui,-apple-system,sans-serif;\">\n  <defs>\n    <marker id=\"arrow-p7\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#1e293b\"/>\n    </marker>\n  </defs>\n  <polygon points=\"60,180 160,70 260,70 260,180\" fill=\"rgba(37,99,235,0.08)\"/>\n  <line x1=\"50\" y1=\"180\" x2=\"340\" y2=\"180\" stroke=\"#1e293b\" stroke-width=\"2\" marker-end=\"url(#arrow-p7)\"/>\n  <line x1=\"60\" y1=\"190\" x2=\"60\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\" marker-end=\"url(#arrow-p7)\"/>\n  <text x=\"345\" y=\"185\" font-size=\"14\" font-weight=\"600\" fill=\"#1e293b\" font-style=\"italic\">s [m]</text>\n  <text x=\"60\" y=\"22\" font-size=\"14\" font-weight=\"600\" fill=\"#1e293b\" font-style=\"italic\" text-anchor=\"middle\">F [N]</text>\n  <line x1=\"160\" y1=\"70\" x2=\"160\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <line x1=\"260\" y1=\"70\" x2=\"260\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <line x1=\"60\" y1=\"70\" x2=\"160\" y2=\"70\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <polyline points=\"60,180 160,70 260,70\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <circle cx=\"60\" cy=\"180\" r=\"3.5\" fill=\"#2563eb\"/>\n  <circle cx=\"160\" cy=\"70\" r=\"3.5\" fill=\"#2563eb\"/>\n  <circle cx=\"260\" cy=\"70\" r=\"3.5\" fill=\"#2563eb\"/>\n  <line x1=\"160\" y1=\"177\" x2=\"160\" y2=\"183\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n  <text x=\"160\" y=\"202\" font-size=\"13\" font-weight=\"500\" fill=\"#334155\" text-anchor=\"middle\">2</text>\n  <line x1=\"260\" y1=\"177\" x2=\"260\" y2=\"183\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n  <text x=\"260\" y=\"202\" font-size=\"13\" font-weight=\"500\" fill=\"#334155\" text-anchor=\"middle\">4</text>\n  <line x1=\"57\" y1=\"70\" x2=\"63\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n  <text x=\"50\" y=\"75\" font-size=\"13\" font-weight=\"500\" fill=\"#334155\" text-anchor=\"end\">6</text>\n  <text x=\"50\" y=\"195\" font-size=\"12\" fill=\"#64748b\" text-anchor=\"end\">0</text>\n</svg>",
                "solution": {
                  "givens": "Wykres $F(s)$: od $s=0$ do $s=2\\text{ m}$ siła rośnie liniowo do $6\\text{ N}$, od $s=2\\text{ m}$ do $s=4\\text{ m}$ siła ma stałą wartość $6\\text{ N}$.",
                  "steps": [
                    {
                      "title": "Podział pola pod wykresem na figury elementarne",
                      "content": "Praca zmiennej siły jest geometrycznie równa polu powierzchni pod wykresem $F(s)$. Dzielimy obszar na trójkąt ($0 \\le s \\le 2$) oraz prostokąt ($2 \\le s \\le 4$)."
                    },
                    {
                      "title": "Obliczenie pól składowych",
                      "content": "Pole trójkąta:\n$$W_1 = \\frac{1}{2} \\cdot \\text{podstawa} \\cdot \\text{wysokość} = \\frac{1}{2} \\cdot 2\\text{ m} \\cdot 6\\text{ N} = 6\\text{ J}$$\nPole prostokąta:\n$$W_2 = (4 - 2)\\text{ m} \\cdot 6\\text{ N} = 2\\text{ m} \\cdot 6\\text{ N} = 12\\text{ J}$$"
                    },
                    {
                      "title": "Wyznaczenie całkowitej pracy",
                      "content": "$$W = W_1 + W_2 = 6\\text{ J} + 12\\text{ J} = 18\\text{ J}$$"
                    }
                  ],
                  "answer": "Praca na odcinku $0 \\le s \\le 4\\text{ m}$ wynosi $18\\text{ J}$."
                }
              },
              {
                "id": "p-zad-8",
                "number": 8,
                "title": "Zadanie 8. Praca siły malejącej liniowo",
                "difficulty": 1,
                "source": "Zbiór autorski Matura 2027 • Praca i moc",
                "tags": [
                  "Praca siły",
                  "Zadanie zamknięte",
                  "Pole pod wykresem"
                ],
                "correctOption": "C",
                "problem": "<p class=\"problem-paragraph\">Siła wzdłuż ruchu maleje liniowo od $8\\text{ N}$ przy $s = 0$ do zera przy $s = 4\\text{ m}$. Wskaż pracę tej siły, nie wyprowadzając wzoru $F(s)$.</p>\n<div class=\"problem-options-list\" data-correct=\"C\">\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">$8\\text{ J}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">$12\\text{ J}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">$16\\text{ J}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">$32\\text{ J}$</span></div>\n</div>",
                "solution": {
                  "givens": "$F(0) = 8\\text{ N}$, $F(4) = 0\\text{ N}$, spadek liniowy na drodze $s = 4\\text{ m}$.",
                  "steps": [
                    {
                      "title": "Interpretacja geometryczna (pole trójkąta prostokątnego)",
                      "content": "Wykres zależności $F(s)$ tworzy trójkąt prostokątny o podstawie $s = 4\\text{ m}$ i wysokości $F_0 = 8\\text{ N}$:\n$$W = \\frac{1}{2} \\cdot s \\cdot F_0 = \\frac{1}{2} \\cdot 4\\text{ m} \\cdot 8\\text{ N} = 16\\text{ J}$$"
                    }
                  ],
                  "answer": "Poprawna odpowiedź: C ($16\\text{ J}$)."
                }
              },
              {
                "id": "p-zad-9",
                "number": 9,
                "title": "Zadanie 9. Moc średnia użyteczna dźwigu",
                "difficulty": 1,
                "source": "Zbiór autorski Matura 2027 • Praca i moc",
                "tags": [
                  "Moc",
                  "Moc średnia"
                ],
                "problem": "<p class=\"problem-paragraph\">Dźwig podnosi pionowo ładunek $200\\text{ kg}$ na wysokość $6\\text{ m}$ w czasie $10\\text{ s}$. Oblicz moc średnią użyteczną.</p>",
                "solution": {
                  "givens": "$m = 200\\text{ kg}$, $h = 6\\text{ m}$, $t = 10\\text{ s}$, $g = 10\\text{ m/s}^2$.",
                  "steps": [
                    {
                      "title": "Praca użyteczna podnoszenia",
                      "content": "$$W = mgh = 200\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 6\\text{ m} = 12\\,000\\text{ J}$$"
                    },
                    {
                      "title": "Obliczenie mocy średniej",
                      "content": "$$P_{\\text{śr}} = \\frac{W}{t} = \\frac{12\\,000\\text{ J}}{10\\text{ s}} = 1200\\text{ W} = 1{,}2\\text{ kW}$$"
                    }
                  ],
                  "answer": "Moc średnia użyteczna dźwigu wynosi $1200\\text{ W} = 1{,}2\\text{ kW}$."
                }
              },
              {
                "id": "p-zad-10",
                "number": 10,
                "title": "Zadanie 10. Moc chwilowa samochodu",
                "difficulty": 1,
                "source": "Zbiór autorski Matura 2027 • Praca i moc",
                "tags": [
                  "Moc",
                  "Moc chwilowa P = F·v",
                  "Zadanie zamknięte"
                ],
                "correctOption": "B",
                "problem": "<p class=\"problem-paragraph\">Samochód jedzie po poziomej drodze ze stałą prędkością $20\\text{ m/s}$. Siła napędowa ma wartość $1{,}5\\text{ kN}$ i jest równoległa do prędkości. Wskaż moc chwilową silnika przekazywaną samochodowi.</p>\n<div class=\"problem-options-list\" data-correct=\"B\">\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">$3\\text{ kW}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">$30\\text{ kW}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">$75\\text{ kW}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">$300\\text{ kW}$</span></div>\n</div>",
                "solution": {
                  "givens": "$v = 20\\text{ m/s}$, $F = 1{,}5\\text{ kN} = 1500\\text{ N}$, siła równoległa do prędkości.",
                  "steps": [
                    {
                      "title": "Zastosowanie wzoru na moc chwilową",
                      "content": "$$P = F \\cdot v = 1500\\text{ N} \\cdot 20\\text{ m/s} = 30\\,000\\text{ W} = 30\\text{ kW}$$"
                    }
                  ],
                  "answer": "Poprawna odpowiedź: B ($30\\text{ kW}$). Dla stałej prędkości jest to jednocześnie moc niezbędna do zrównoważenia oporów ruchu."
                }
              },
              {
                "id": "p-zad-11",
                "number": 11,
                "title": "Zadanie 11. Sprawność i pobrana energia urządzenia",
                "difficulty": 2,
                "source": "Zbiór autorski Matura 2027 • Praca i moc",
                "tags": [
                  "Sprawność",
                  "Energia pobrana",
                  "Moc"
                ],
                "problem": "<p class=\"problem-paragraph\">Moc użyteczna urządzenia wynosi $800\\text{ W}$, a moc pobierana $1{,}0\\text{ kW}$. Oblicz sprawność. Ile energii urządzenie pobierze w ciągu $5\\text{ min}$?</p>",
                "solution": {
                  "givens": "$P_u = 800\\text{ W}$, $P_c = 1{,}0\\text{ kW} = 1000\\text{ W}$, $t = 5\\text{ min} = 300\\text{ s}$.",
                  "steps": [
                    {
                      "title": "Obliczenie sprawności",
                      "content": "$$\\eta = \\frac{P_u}{P_c} = \\frac{800\\text{ W}}{1000\\text{ W}} = 0{,}80 = 80\\%$$"
                    },
                    {
                      "title": "Obliczenie pobranej energii",
                      "content": "$$E = P_c \\cdot t = 1000\\text{ W} \\cdot 300\\text{ s} = 3{,}0 \\cdot 10^5\\text{ J} = 300\\text{ kJ}$$"
                    }
                  ],
                  "answer": "Sprawność urządzenia wynosi $\\eta = 80\\%$, a pobrana energia w czasie $5\\text{ min}$ to $300\\text{ kJ}$ ($3{,}0 \\cdot 10^5\\text{ J}$)."
                }
              },
              {
                "id": "p-zad-12",
                "number": 12,
                "title": "Zadanie 12. Praca rozruchu z wykresu mocy P(t)",
                "difficulty": 2,
                "source": "Zbiór autorski Matura 2027 • Praca i moc",
                "tags": [
                  "Moc",
                  "Wykres P(t)",
                  "Zadanie maturalne"
                ],
                "problem": "<p class=\"problem-paragraph\">Moc silnika podczas rozruchu wózka jest przedstawiona na wykresie. Wózek otrzymuje całą tę energię jako energię mechaniczną. Oblicz pracę wykonaną przez silnik w czasie $0 \\le t \\le 4\\text{ s}$.</p>\n",
                "chartSvg": "<svg viewBox=\"0 0 380 230\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:380px; width:100%; height:auto; font-family:system-ui,-apple-system,sans-serif;\">\n  <defs>\n    <marker id=\"arrow-p12\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#1e293b\"/>\n    </marker>\n  </defs>\n  <polygon points=\"60,180 160,70 260,70 260,180\" fill=\"rgba(37,99,235,0.08)\"/>\n  <line x1=\"50\" y1=\"180\" x2=\"340\" y2=\"180\" stroke=\"#1e293b\" stroke-width=\"2\" marker-end=\"url(#arrow-p12)\"/>\n  <line x1=\"60\" y1=\"190\" x2=\"60\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\" marker-end=\"url(#arrow-p12)\"/>\n  <text x=\"345\" y=\"185\" font-size=\"14\" font-weight=\"600\" fill=\"#1e293b\" font-style=\"italic\">t [s]</text>\n  <text x=\"60\" y=\"22\" font-size=\"14\" font-weight=\"600\" fill=\"#1e293b\" font-style=\"italic\" text-anchor=\"middle\">P [W]</text>\n  <line x1=\"160\" y1=\"70\" x2=\"160\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <line x1=\"260\" y1=\"70\" x2=\"260\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <line x1=\"60\" y1=\"70\" x2=\"160\" y2=\"70\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <polyline points=\"60,180 160,70 260,70\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <circle cx=\"60\" cy=\"180\" r=\"3.5\" fill=\"#2563eb\"/>\n  <circle cx=\"160\" cy=\"70\" r=\"3.5\" fill=\"#2563eb\"/>\n  <circle cx=\"260\" cy=\"70\" r=\"3.5\" fill=\"#2563eb\"/>\n  <line x1=\"160\" y1=\"177\" x2=\"160\" y2=\"183\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n  <text x=\"160\" y=\"202\" font-size=\"13\" font-weight=\"500\" fill=\"#334155\" text-anchor=\"middle\">2</text>\n  <line x1=\"260\" y1=\"177\" x2=\"260\" y2=\"183\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n  <text x=\"260\" y=\"202\" font-size=\"13\" font-weight=\"500\" fill=\"#334155\" text-anchor=\"middle\">4</text>\n  <line x1=\"57\" y1=\"70\" x2=\"63\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n  <text x=\"50\" y=\"75\" font-size=\"13\" font-weight=\"500\" fill=\"#334155\" text-anchor=\"end\">60</text>\n  <text x=\"50\" y=\"195\" font-size=\"12\" fill=\"#64748b\" text-anchor=\"end\">0</text>\n</svg>",
                "solution": {
                  "givens": "Wykres $P(t)$: wzrost od 0 do $60\\text{ W}$ w czasie pierwszych $2\\text{ s}$, potem stała moc $60\\text{ W}$ od $t = 2\\text{ s}$ do $t = 4\\text{ s}$.",
                  "steps": [
                    {
                      "title": "Interpretacja pracy jako pola pod wykresem P(t)",
                      "content": "Ponieważ $P = \\frac{dW}{dt}$, pole pod wykresem mocy w czasie odpowiada wykonanej pracy mechanicznej $W$. Dzielimy pole na trójkąt i prostokąt."
                    },
                    {
                      "title": "Obliczenie pól składowych",
                      "content": "Pole trójkąta ($0 \\le t \\le 2\\text{ s}$):\n$$W_1 = \\frac{1}{2} \\cdot 2\\text{ s} \\cdot 60\\text{ W} = 60\\text{ J}$$\nPole prostokąta ($2 \\le t \\le 4\\text{ s}$):\n$$W_2 = (4 - 2)\\text{ s} \\cdot 60\\text{ W} = 2\\text{ s} \\cdot 60\\text{ W} = 120\\text{ J}$$"
                    },
                    {
                      "title": "Suma prac",
                      "content": "$$W = W_1 + W_2 = 60\\text{ J} + 120\\text{ J} = 180\\text{ J}$$"
                    }
                  ],
                  "answer": "Praca wykonana przez silnik wynosi $180\\text{ J}$."
                }
              }
            ]
          },
          {
            "id": "sub-energie-zachowanie",
            "number": 2,
            "icon": "🔄",
            "title": "2. Rodzaje energii i zasada zachowania energii",
            "shortTitle": "Rodzaje energii",
            "desc": "Energia kinetyczna, potencjalna grawitacji i sprężystości, twierdzenie o pracy i energii oraz bilans energii mechanicznej z pracą tarcia.",
            "theory": "<div class=\"theory-section\">\n  <div class=\"theory-subtitle\">1. Formy energii mechanicznej</div>\n  <ul class=\"theory-list\">\n    <li><strong>Energia kinetyczna ($E_k$):</strong> energia ciała w ruchu o masie $m$ i szybkości $v$:\n    <div style=\"text-align:center;margin:4px 0;\">$$E_k = \\frac{m v^2}{2}$$</div></li>\n    <li><strong>Energia potencjalna grawitacji ($E_p$):</strong> energia ciała uniesionego na wysokość $h$:\n    <div style=\"text-align:center;margin:4px 0;\">$$E_p = mgh$$</div></li>\n    <li><strong>Energia potencjalna sprężystości ($E_s$):</strong> energia sprężyny odkształconej o $x$:\n    <div style=\"text-align:center;margin:4px 0;\">$$E_s = \\frac{1}{2} k x^2$$</div></li>\n  </ul>\n\n  <div class=\"theory-subtitle\">2. Zasada Zachowania Energii Mechanicznej</div>\n  <p>Gdy w układzie nie ma oporów ani tarcia, suma energii kinetycznej i potencjalnej jest stała w każdej chwili ruchu:</p>\n  <div style=\"text-align:center;margin:6px 0;\">$$E_{\\text{mech}} = E_k + E_p = \\text{const} \\iff E_{k1} + E_{p1} = E_{k2} + E_{p2}$$</div>\n  <p>Energia nie znika, lecz zamienia się jedna w drugą – ile energii potencjalnej ubywa, dokładnie tyle energii kinetycznej przybywa ($\\Delta E_k = -\\Delta E_p$).</p>\n\n<figure class=\"theory-figure\">\n  <img class=\"theory-diagram\" src=\"img/theory/energy/energy-conservation-custom.png\" alt=\"Zasada zachowania energii mechanicznej: Ek + Ep = const. Ciało zsuwa się bez tarcia z góry na dół, zamieniając energię potencjalną w kinetyczną.\" loading=\"eager\" decoding=\"async\">\n</figure>\n\n  <div class=\"theory-subtitle\">4. Bilans energii z uwzględnieniem tarcia i oporów</div>\n  <p>Siły niezachowawcze (tarcie, opór powietrza) rozpraszają energię mechaniczną, zamieniając ją w ciepło ($Q = |W_T|$):</p>\n  <div style=\"text-align:center;margin:6px 0;\">$$E_{\\text{mech},\\text{pocz}} = E_{\\text{mech},\\text{końc}} + Q$$</div>\n  <p>Chociaż maleje energia mechaniczna, całkowita energia układu wraz z otoczeniem jest zawsze zachowana.</p>\n\n<figure class=\"theory-figure\">\n  <img class=\"theory-diagram\" src=\"img/theory/energy/friction-heat-custom.png\" alt=\"Bilans energii z uwzględnieniem tarcia i oporów: Emech,pocz = Emech,końc + Q. Energia mechaniczna początkowa przechodzi w energię mechaniczną końcową oraz wydzielone ciepło Q.\" loading=\"eager\" decoding=\"async\">\n</figure>\n</div>",
            "formulaCheat": "E_k = \\frac{m v^2}{2}, \\quad E_p = mgh, \\quad E_s = \\frac{k x^2}{2}, \\quad W_w = \\Delta E_k, \\quad W_t = \\Delta E_{\\text{mech}}",
            "tasks": [
              {
                "id": "p-zad-13",
                "number": 13,
                "title": "Zadanie 13. Zależność energii kinetycznej od prędkości",
                "difficulty": 1,
                "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
                "tags": [
                  "Energia kinetyczna",
                  "Zadanie zamknięte"
                ],
                "correctOption": "C",
                "problem": "<p class=\"problem-paragraph\">Dwa ciała mają jednakowe masy. Drugie porusza się trzy razy szybciej od pierwszego. Ile razy większa jest jego energia kinetyczna?</p>\n<div class=\"problem-options-list\" data-correct=\"C\">\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">3 razy</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">6 razy</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">9 razy</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">12 razy</span></div>\n</div>",
                "solution": {
                  "givens": "$m_1 = m_2 = m$, $v_2 = 3v_1$.",
                  "steps": [
                    {
                      "title": "Zależność kwadratowa energii kinetycznej od prędkości",
                      "content": "Energia kinetyczna zależy od kwadratu szybkości ($E_k \\propto v^2$):\n$$E_{k1} = \\frac{1}{2}m v_1^2$$\n$$E_{k2} = \\frac{1}{2}m (3v_1)^2 = 9 \\cdot \\left(\\frac{1}{2}m v_1^2\\right) = 9 E_{k1}$$"
                    }
                  ],
                  "answer": "Poprawna odpowiedź: C ($9\\text{ razy}$)."
                }
              },
              {
                "id": "p-zad-14",
                "number": 14,
                "title": "Zadanie 14. Energia potencjalna a poziom odniesienia",
                "difficulty": 1,
                "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
                "tags": [
                  "Energia potencjalna",
                  "Poziom odniesienia"
                ],
                "problem": "<p class=\"problem-paragraph\">Ciało o masie $3\\text{ kg}$ znajduje się $4\\text{ m}$ nad wybranym poziomem odniesienia. Oblicz jego energię potencjalną grawitacji. Jak zmieni się wynik po wybraniu poziomu odniesienia $2\\text{ m}$ wyżej?</p>",
                "solution": {
                  "givens": "$m = 3\\text{ kg}$, $h_1 = 4\\text{ m}$, nowy poziom odniesienia przesunięty w górę o $\\Delta h = 2\\text{ m}$, $g = 10\\text{ m/s}^2$.",
                  "steps": [
                    {
                      "title": "Energia dla początkowego poziomu",
                      "content": "$$E_{p1} = mgh_1 = 3\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 4\\text{ m} = 120\\text{ J}$$"
                    },
                    {
                      "title": "Wpływ zmiany poziomu odniesienia",
                      "content": "Po przesunięciu poziomu zerowego o $2\\text{ m}$ w górę nowa wysokość wynosi $h_2 = 4\\text{ m} - 2\\text{ m} = 2\\text{ m}$:\n$$E_{p2} = mgh_2 = 3 \\cdot 10 \\cdot 2 = 60\\text{ J}$$\nWynik zmniejszy się o $60\\text{ J}$."
                    }
                  ],
                  "answer": "Początkowa energia wynosi $120\\text{ J}$. Po wybraniu poziomu $2\\text{ m}$ wyżej energia wynosi $60\\text{ J}$ (zmaleje o $60\\text{ J}$). Wartość bezwzględna energii zależy od poziomu zerowego, ale zmiana energii $\\Delta E_p$ między dwoma fizycznymi punktami toru jest niezmiennikiem."
                }
              },
              {
                "id": "p-zad-15",
                "number": 15,
                "title": "Zadanie 15. Energia potencjalna sprężystości",
                "difficulty": 1,
                "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
                "tags": [
                  "Energia sprężystości",
                  "Wzór Es = 1/2 kx²"
                ],
                "problem": "<p class=\"problem-paragraph\">Sprężynę o sztywności $200\\text{ N/m}$ ściśnięto o $0{,}10\\text{ m}$. Oblicz energię potencjalną sprężystości.</p>",
                "solution": {
                  "givens": "$k = 200\\text{ N/m}$, $x = 0{,}10\\text{ m}$.",
                  "steps": [
                    {
                      "title": "Zastosowanie wzoru na energię sprężystości",
                      "content": "$$E_s = \\frac{1}{2} k x^2 = \\frac{1}{2} \\cdot 200\\text{ N/m} \\cdot (0{,}10\\text{ m})^2 = 100 \\cdot 0{,}01 = 1\\text{ J}$$"
                    }
                  ],
                  "answer": "Energia potencjalna sprężystości wynosi $1\\text{ J}$."
                }
              },
              {
                "id": "p-zad-16",
                "number": 16,
                "title": "Zadanie 16. Praca wypadkowa i zmiana szybkości",
                "difficulty": 1,
                "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
                "tags": [
                  "Twierdzenie o pracy i energii",
                  "Zadanie zamknięte"
                ],
                "correctOption": "B",
                "problem": "<p class=\"problem-paragraph\">Klocek $2\\text{ kg}$ zwiększa szybkość na poziomym torze z $2\\text{ m/s}$ do $6\\text{ m/s}$. Wskaż pracę wypadkową.</p>\n<div class=\"problem-options-list\" data-correct=\"B\">\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">$16\\text{ J}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">$32\\text{ J}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">$36\\text{ J}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">$64\\text{ J}$</span></div>\n</div>",
                "solution": {
                  "givens": "$m = 2\\text{ kg}$, $v_1 = 2\\text{ m/s}$, $v_2 = 6\\text{ m/s}$.",
                  "steps": [
                    {
                      "title": "Zastosowanie twierdzenia o pracy i energii kinetycznej",
                      "content": "Praca wypadkowa sił równa się zmianie energii kinetycznej ciała ($W_w = \\Delta E_k$):\n$$W_w = \\frac{1}{2}m (v_2^2 - v_1^2) = \\frac{1}{2} \\cdot 2\\text{ kg} \\cdot (6^2 - 2^2)\\text{ m}^2/\\text{s}^2 = 36 - 4 = 32\\text{ J}$$"
                    }
                  ],
                  "answer": "Poprawna odpowiedź: B ($32\\text{ J}$)."
                }
              },
              {
                "id": "p-zad-17",
                "number": 17,
                "title": "Zadanie 17. Droga do zatrzymania z twierdzenia o energii",
                "difficulty": 2,
                "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
                "tags": [
                  "Praca tarcia",
                  "Droga hamowania",
                  "Twierdzenie o energii"
                ],
                "problem": "<p class=\"problem-paragraph\">Klocek $4\\text{ kg}$ ślizga się po poziomej powierzchni z szybkością $5\\text{ m/s}$. Działa na niego tylko tarcie o wartości $10\\text{ N}$. Oblicz drogę do zatrzymania, używając twierdzenia o pracy i energii kinetycznej.</p>",
                "solution": {
                  "givens": "$m = 4\\text{ kg}$, $v_1 = 5\\text{ m/s}$, $v_2 = 0\\text{ m/s}$, $T = 10\\text{ N}$.",
                  "steps": [
                    {
                      "title": "Początkowa energia kinetyczna",
                      "content": "$$E_{k1} = \\frac{1}{2}m v_1^2 = \\frac{1}{2} \\cdot 4\\text{ kg} \\cdot 5^2\\text{ m}^2/\\text{s}^2 = 50\\text{ J}$$"
                    },
                    {
                      "title": "Zastosowanie twierdzenia W = ΔEk",
                      "content": "Praca tarcia wynosi $W_t = -T \\cdot s = -10s$. Końcowa energia $E_{k2} = 0$:\n$$W_t = E_{k2} - E_{k1} \\implies -10s = 0 - 50\\text{ J} \\implies 10s = 50 \\implies s = 5\\text{ m}$$"
                    }
                  ],
                  "answer": "Droga klocka do zatrzymania wynosi $5\\text{ m}$."
                }
              },
              {
                "id": "p-zad-18",
                "number": 18,
                "title": "Zadanie 18. Szybkość swobodnego spadku",
                "difficulty": 1,
                "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
                "tags": [
                  "Swobodny spadek",
                  "Zachowanie energii",
                  "Zadanie zamknięte"
                ],
                "correctOption": "C",
                "problem": "<p class=\"problem-paragraph\">Kulkę puszczono ze spoczynku z wysokości $5\\text{ m}$. Pomijamy opory. Wskaż szybkość tuż nad podłożem.</p>\n<div class=\"problem-options-list\" data-correct=\"C\">\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">$5\\text{ m/s}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">$7{,}1\\text{ m/s}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">$10\\text{ m/s}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">$50\\text{ m/s}$</span></div>\n</div>",
                "solution": {
                  "givens": "$h = 5\\text{ m}$, $v_0 = 0$, $g = 10\\text{ m/s}^2$, opory pomijalne.",
                  "steps": [
                    {
                      "title": "Zasada zachowania energii mechanicznej",
                      "content": "Cała energia potencjalna na szczycie zamienia się w energię kinetyczną tuż nad ziemią:\n$$mgh = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2gh} = \\sqrt{2 \\cdot 10 \\cdot 5} = \\sqrt{100} = 10\\text{ m/s}$$"
                    }
                  ],
                  "answer": "Poprawna odpowiedź: C ($10\\text{ m/s}$). Masa kuli ulega skróceniu."
                }
              },
              {
                "id": "p-zad-19",
                "number": 19,
                "title": "Zadanie 19. Zmiana wysokości a prędkość bez tarcia",
                "difficulty": 2,
                "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
                "tags": [
                  "Zachowanie energii",
                  "Ruch bez tarcia"
                ],
                "problem": "<p class=\"problem-paragraph\">Klocek przesuwa się bez tarcia z wysokości $3\\text{ m}$ na wysokość $1\\text{ m}$. Początkowo ma szybkość $2\\text{ m/s}$. Oblicz jego szybkość w punkcie końcowym.</p>",
                "solution": {
                  "givens": "$h_1 = 3\\text{ m}$, $h_2 = 1\\text{ m}$, $v_1 = 2\\text{ m/s}$, $g = 10\\text{ m/s}^2$.",
                  "steps": [
                    {
                      "title": "Bilans całkowitej energii mechanicznej",
                      "content": "$$\\frac{1}{2}mv_1^2 + mgh_1 = \\frac{1}{2}mv_2^2 + mgh_2$$\nDzieląc obustronnie przez masę $m$:\n$$v_2^2 = v_1^2 + 2g(h_1 - h_2)$$"
                    },
                    {
                      "title": "Obliczenie wartości liczbowej",
                      "content": "$$v_2^2 = 2^2 + 2 \\cdot 10 \\cdot (3 - 1) = 4 + 40 = 44$$\n$$v_2 = \\sqrt{44} \\approx 6{,}63\\text{ m/s}$$"
                    }
                  ],
                  "answer": "Szybkość w punkcie końcowym wynosi około $6{,}63\\text{ m/s}$ (dokładnie $\\sqrt{44}\\text{ m/s} = 2\\sqrt{11}\\text{ m/s}$)."
                }
              },
              {
                "id": "p-zad-20",
                "number": 20,
                "title": "Zadanie 20. Maksymalne ściśnięcie sprężyny",
                "difficulty": 2,
                "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
                "tags": [
                  "Energia sprężystości",
                  "Zachowanie energii",
                  "Wózek"
                ],
                "problem": "<p class=\"problem-paragraph\">Wózek $1\\text{ kg}$ porusza się po poziomym gładkim torze z szybkością $4\\text{ m/s}$ i ściska sprężynę o sztywności $200\\text{ N/m}$. Oblicz maksymalne ściśnięcie sprężyny.</p>",
                "solution": {
                  "givens": "$m = 1\\text{ kg}$, $v = 4\\text{ m/s}$, $k = 200\\text{ N/m}$, tor gładki (brak tarcia).",
                  "steps": [
                    {
                      "title": "Zasada zachowania energii",
                      "content": "W chwili maksymalnego odkształcenia wózek chwilowo się zatrzymuje ($v = 0$), a cała jego energia kinetyczna przekształca się w energię potencjalną sprężystości:\n$$\\frac{1}{2}mv^2 = \\frac{1}{2}kx^2 \\implies mv^2 = kx^2$$"
                    },
                    {
                      "title": "Wyznaczenie ugięcia x",
                      "content": "$$1 \\cdot 4^2 = 200 \\cdot x^2 \\implies 16 = 200x^2 \\implies x^2 = \\frac{16}{200} = 0{,}08$$\n$$x = \\sqrt{0{,}08} \\approx 0{,}40\\text{ m}$$"
                    }
                  ],
                  "answer": "Maksymalne ściśnięcie sprężyny wynosi $0{,}40\\text{ m} = 40\\text{ cm}$."
                }
              },
              {
                "id": "p-zad-21",
                "number": 21,
                "title": "Zadanie 21. Zsuwanie się z równi z tarciem",
                "difficulty": 2,
                "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
                "tags": [
                  "Równia pochyła",
                  "Praca tarcia",
                  "Zachowanie energii"
                ],
                "problem": "<p class=\"problem-paragraph\">Klocek $2\\text{ kg}$ zsuwa się ze spoczynku po równi o wysokości $2\\text{ m}$. Podczas ruchu tarcie wykonuje pracę $-8\\text{ J}$. Oblicz szybkość klocka na dole.</p>",
                "solution": {
                  "givens": "$m = 2\\text{ kg}$, $h = 2\\text{ m}$, $W_t = -8\\text{ J}$, $v_0 = 0$, $g = 10\\text{ m/s}^2$.",
                  "steps": [
                    {
                      "title": "Początkowa energia na szczycie równi",
                      "content": "$$E_1 = mgh = 2\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 2\\text{ m} = 40\\text{ J}$$"
                    },
                    {
                      "title": "Bilans energii z uwzględnieniem pracy tarcia",
                      "content": "Praca siły tarcia zmniejsza energię mechaniczną klocka:\n$$E_2 = E_1 + W_t = 40\\text{ J} + (-8\\text{ J}) = 32\\text{ J}$$"
                    },
                    {
                      "title": "Wyznaczenie szybkości końcowej",
                      "content": "Na dole równi $E_p = 0$, cała pozostała energia to energia kinetyczna:\n$$E_k = \\frac{1}{2}mv^2 \\implies \\frac{1}{2} \\cdot 2 \\cdot v^2 = 32 \\implies v^2 = 32 \\implies v = \\sqrt{32} \\approx 5{,}66\\text{ m/s}$$"
                    }
                  ],
                  "answer": "Szybkość klocka u podstawy równi wynosi około $5{,}66\\text{ m/s}$ (dokładnie $\\sqrt{32}\\text{ m/s} = 4\\sqrt{2}\\text{ m/s}$)."
                }
              },
              {
                "id": "p-zad-22",
                "number": 22,
                "title": "Zadanie 22. Ruch sanek ciągniętych siłą z tarciem",
                "difficulty": 2,
                "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
                "tags": [
                  "Sanki",
                  "Siła ciągu",
                  "Praca wypadkowa",
                  "Energia kinetyczna"
                ],
                "problem": "<p class=\"problem-paragraph\">Sanki o masie $10\\text{ kg}$ są ciągnięte po poziomej drodze stałą siłą $40\\text{ N}$ równoległą do ruchu. Tarcie ma wartość $10\\text{ N}$. Sanki przebywają $5\\text{ m}$, startując ze spoczynku. Oblicz szybkość końcową metodą energii.</p>",
                "solution": {
                  "givens": "$m = 10\\text{ kg}$, $F = 40\\text{ N}$, $T = 10\\text{ N}$, $s = 5\\text{ m}$, $v_0 = 0$.",
                  "steps": [
                    {
                      "title": "Praca siły wypadkowej",
                      "content": "Wypadkowa siła w kierunku ruchu: $F_w = F - T = 40\\text{ N} - 10\\text{ N} = 30\\text{ N}$.\n$$W_w = F_w \\cdot s = 30\\text{ N} \\cdot 5\\text{ m} = 150\\text{ J}$$"
                    },
                    {
                      "title": "Obliczenie szybkości z przyrostu energii kinetycznej",
                      "content": "Start ze spoczynku oznacza $E_{k0} = 0$, więc $\\Delta E_k = W_w$:\n$$\\frac{1}{2}mv^2 = 150\\text{ J} \\implies \\frac{1}{2} \\cdot 10 \\cdot v^2 = 150 \\implies 5v^2 = 150 \\implies v^2 = 30$$\n$$v = \\sqrt{30} \\approx 5{,}48\\text{ m/s}$$"
                    }
                  ],
                  "answer": "Szybkość końcowa sanek wynosi około $5{,}48\\text{ m/s}$ (dokładnie $\\sqrt{30}\\text{ m/s}$)."
                }
              },
              {
                "id": "p-zad-23",
                "number": 23,
                "title": "Zadanie 23. Analiza wykresu Ep(h) i praca siły ciężkości",
                "difficulty": 2,
                "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
                "tags": [
                  "Energia potencjalna",
                  "Wykres Ep(h)",
                  "Praca ciężaru",
                  "Zadanie maturalne"
                ],
                "problem": "<p class=\"problem-paragraph\">Wykres pokazuje energię potencjalną grawitacji $E_p$ ciała o masie $2\\text{ kg}$ w funkcji wysokości $h$. Oblicz wartość $g$ przyjętą przy sporządzaniu wykresu oraz pracę ciężaru podczas spadku z $h = 3\\text{ m}$ do $h = 1\\text{ m}$.</p>\n",
                "chartSvg": "<svg viewBox=\"0 0 380 230\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:380px; width:100%; height:auto; font-family:system-ui,-apple-system,sans-serif;\">\n  <defs>\n    <marker id=\"arrow-p23\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#1e293b\"/>\n    </marker>\n  </defs>\n  <line x1=\"50\" y1=\"180\" x2=\"340\" y2=\"180\" stroke=\"#1e293b\" stroke-width=\"2\" marker-end=\"url(#arrow-p23)\"/>\n  <line x1=\"60\" y1=\"190\" x2=\"60\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\" marker-end=\"url(#arrow-p23)\"/>\n  <text x=\"345\" y=\"185\" font-size=\"14\" font-weight=\"600\" fill=\"#1e293b\" font-style=\"italic\">h [m]</text>\n  <text x=\"60\" y=\"22\" font-size=\"14\" font-weight=\"600\" fill=\"#1e293b\" font-style=\"italic\" text-anchor=\"middle\"><tspan>E</tspan><tspan font-size=\"10\" dy=\"3\">p</tspan><tspan font-size=\"14\" dy=\"-3\"> [J]</tspan></text>\n  <line x1=\"220\" y1=\"70\" x2=\"220\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <line x1=\"60\" y1=\"70\" x2=\"220\" y2=\"70\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <line x1=\"60\" y1=\"180\" x2=\"220\" y2=\"70\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <circle cx=\"60\" cy=\"180\" r=\"3.5\" fill=\"#2563eb\"/>\n  <circle cx=\"220\" cy=\"70\" r=\"3.5\" fill=\"#2563eb\"/>\n  <line x1=\"220\" y1=\"177\" x2=\"220\" y2=\"183\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n  <text x=\"220\" y=\"202\" font-size=\"13\" font-weight=\"500\" fill=\"#334155\" text-anchor=\"middle\">3</text>\n  <line x1=\"57\" y1=\"70\" x2=\"63\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n  <text x=\"50\" y=\"75\" font-size=\"13\" font-weight=\"500\" fill=\"#334155\" text-anchor=\"end\">60</text>\n  <text x=\"50\" y=\"195\" font-size=\"12\" fill=\"#64748b\" text-anchor=\"end\">0</text>\n</svg>",
                "solution": {
                  "givens": "$m = 2\\text{ kg}$, z wykresu $E_p(3\\text{ m}) = 60\\text{ J}$, spadek od $h_1 = 3\\text{ m}$ do $h_2 = 1\\text{ m}$.",
                  "steps": [
                    {
                      "title": "Obliczenie przyspieszenia grawitacyjnego g",
                      "content": "Ze wzoru $E_p = mgh$ odczytujemy punkt $(h=3\\text{ m}, E_p=60\\text{ J})$:\n$$g = \\frac{E_p}{mh} = \\frac{60\\text{ J}}{2\\text{ kg} \\cdot 3\\text{ m}} = \\frac{60}{6} = 10\\text{ m/s}^2$$"
                    },
                    {
                      "title": "Obliczenie pracy siły ciężkości podczas spadku",
                      "content": "Na wysokości $h_2 = 1\\text{ m}$ energia potencjalna wynosi:\n$$E_p(1) = 2\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 1\\text{ m} = 20\\text{ J}$$\nZmiana energii potencjalnej: $\\Delta E_p = 20\\text{ J} - 60\\text{ J} = -40\\text{ J}$.\nPraca ciężaru jest równa ubytkowi energii potencjalnej ($W_g = -\\Delta E_p$):\n$$W_g = -(-40\\text{ J}) = +40\\text{ J}$$"
                    }
                  ],
                  "answer": "Przyjęta wartość wynosi $g = 10\\text{ m/s}^2$, a praca siły ciężkości podczas opadania z $3\\text{ m}$ do $1\\text{ m}$ wynosi $+40\\text{ J}$."
                }
              },
              {
                "id": "p-zad-24",
                "number": 24,
                "title": "Zadanie 24. Oscylator na sprężynie – energia całkowita i amplituda",
                "difficulty": 2,
                "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
                "tags": [
                  "Oscylator",
                  "Sprężyna",
                  "Amplituda",
                  "Energia całkowita"
                ],
                "problem": "<p class=\"problem-paragraph\">Klocek $0{,}50\\text{ kg}$ na gładkim poziomym torze jest przymocowany do sprężyny o $k = 100\\text{ N/m}$. W chwili, gdy sprężyna jest rozciągnięta o $0{,}20\\text{ m}$, klocek ma szybkość $2\\text{ m/s}$. Oblicz całkowitą energię mechaniczną układu oraz maksymalne wychylenie.</p>",
                "solution": {
                  "givens": "$m = 0{,}50\\text{ kg}$, $k = 100\\text{ N/m}$, $x = 0{,}20\\text{ m}$, $v = 2\\text{ m/s}$.",
                  "steps": [
                    {
                      "title": "Całkowita energia mechaniczna układu",
                      "content": "$$E = E_k + E_s = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2$$\n$$E = \\frac{1}{2} \\cdot 0{,}50 \\cdot 2^2 + \\frac{1}{2} \\cdot 100 \\cdot (0{,}20)^2 = 1\\text{ J} + 2\\text{ J} = 3\\text{ J}$$"
                    },
                    {
                      "title": "Wyznaczenie maksymalnego wychylenia (amplitudy)",
                      "content": "W punktach skrajnych prędkość klocka spada do zera ($v = 0$), więc cała energia układu ma postać energii sprężystości:\n$$\\frac{1}{2}k x_{\\max}^2 = E \\implies \\frac{1}{2} \\cdot 100 \\cdot x_{\\max}^2 = 3 \\implies 50 x_{\\max}^2 = 3$$\n$$x_{\\max} = \\sqrt{\\frac{3}{50}} = \\sqrt{\\frac{6}{100}} = \\frac{\\sqrt{6}}{10} \\approx 0{,}245\\text{ m}$$"
                    }
                  ],
                  "answer": "Całkowita energia mechaniczna układu wynosi $3\\text{ J}$, a maksymalne wychylenie sprężyny to około $0{,}245\\text{ m} = 24{,}5\\text{ cm}$."
                }
              },
              {
                "id": "p-zad-25",
                "number": 25,
                "title": "Zadanie 25. Zjazd z gładkiej równi i hamowanie tarciem",
                "difficulty": 3,
                "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
                "tags": [
                  "Zachowanie energii",
                  "Praca tarcia",
                  "Zadanie maturalne"
                ],
                "problem": "<p class=\"problem-paragraph\">Ciało $2\\text{ kg}$ zjeżdża ze spoczynku z wysokości $4\\text{ m}$ i po gładkim odcinku poziomym wjeżdża na szorstką drogę. Tarcie na drodze poziomej ma wartość $8\\text{ N}$. Oblicz drogę na tej drodze do zatrzymania. Następnie podaj, jaka część początkowej energii mechanicznej została rozproszona podczas zjazdu.</p>\n",
                "solution": {
                  "givens": "$m = 2\\text{ kg}$, $h = 4\\text{ m}$, $T = 8\\text{ N}$ (na drodze poziomej), równia i odcinek początkowy są idealnie gładkie, $g = 10\\text{ m/s}^2$.",
                  "steps": [
                    {
                      "title": "Energia początkowa ciała",
                      "content": "Początkowa energia mechaniczna na szczycie równi:\n$$E = mgh = 2\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 4\\text{ m} = 80\\text{ J}$$\nZjazd ze stoku i odcinek płaski są gładkie (brak sił tarcia), więc ciało wjeżdża na odcinek szorstki z pełną energią $E_k = 80\\text{ J}$."
                    },
                    {
                      "title": "Droga do zatrzymania na drodze szorstkiej",
                      "content": "Cała energia kinetyczna ciała zostaje zniwelowana przez pracę siły tarcia:\n$$W_t = -T \\cdot s \\implies -8s = -80 \\implies s = 10\\text{ m}$$"
                    },
                    {
                      "title": "Część energii rozproszona podczas samego zjazdu",
                      "content": "Podczas samego zjazdu z równi nie działały żadne siły oporu ani tarcie. Zatem podczas zjazdu rozproszono dokładnie $0\\%$ energii początkowej (całe rozproszenie następuje dopiero na drodze poziomej)."
                    }
                  ],
                  "answer": "Droga do zatrzymania na szorstkiej nawierzchni wynosi $10\\text{ m}$. Podczas samego zjazdu z równi rozproszono $0\\%$ początkowej energii."
                }
              }
            ]
          },
          {
            "id": "sub-zderzenia-niesprezyste",
            "number": 3,
            "icon": "💥",
            "title": "3. Zderzenia niesprężyste",
            "shortTitle": "Zderzenia niesprężyste",
            "desc": "Zasada zachowania pędu, sczepianie ciał i ubytek energii kinetycznej w zderzeniu.",
            "theory": "<div class=\"theory-section\">\n  <div class=\"theory-subtitle\">1. Definicja pędu ciała</div>\n  <p>Pęd ($\\vec{p}$) opisuje stan ruchu ciała – jest miarą tego, jak trudno jest ciało rozpędzić lub zatrzymać:</p>\n  <div style=\"text-align:center;margin:6px 0;\">$\\vec{p} = m \\vec{v}$</div>\n  <ul class=\"theory-list\">\n    <li>Wektor $\\vec{p}$ ma zawsze ten sam kierunek i zwrot co wektor prędkości $\\vec{v}$.</li>\n    <li>Jednostka w SI: $[p] = \\text{kg} \\cdot \\frac{\\text{m}}{\\text{s}} = \\text{N} \\cdot \\text{s}$.</li>\n  </ul>\n\n<figure class=\"theory-figure\">\n  <img class=\"theory-diagram\" src=\"img/theory/energy/momentum-definition-custom.png\" alt=\"Definicja pędu: ciało o masie m porusza się z prędkością v, wektor pędu p = mv ma ten sam kierunek i zwrot\" loading=\"eager\" decoding=\"async\">\n</figure>\n\n  <div class=\"theory-subtitle\">2. Zasada Zachowania Pędu (ZZP)</div>\n  <p>Dla izolowanego układu ciał (brak zewnętrznych sił wypadkowych) całkowity pęd jest stały:</p>\n  <div style=\"text-align:center;margin:6px 0;\">$\\sum \\vec{p}_{\\text{pocz}} = \\sum \\vec{p}_{\\text{końc}} \\implies m_1 \\vec{v}_1 + m_2 \\vec{v}_2 = \\text{const}$</div>\n\n  <div class=\"theory-subtitle\">3. Zderzenie doskonale niesprężyste (sczepianie ciał)</div>\n  <p>Ciała łączą się i poruszają z jedną, wspólną prędkością $\\vec{v}$:</p>\n  <div style=\"text-align:center;margin:6px 0;\">$m_1 \\vec{v}_1 + m_2 \\vec{v}_2 = (m_1 + m_2) \\vec{v} \\implies \\vec{v} = \\frac{m_1 \\vec{v}_1 + m_2 \\vec{v}_2}{m_1 + m_2}$</div>\n  <ul class=\"theory-list\">\n    <li>Ruch naprzeciwko siebie po jednej prostej (uwzględniamy zwroty):\n    <div style=\"text-align:center;margin:4px 0;\">$m_1 v_1 - m_2 v_2 = (m_1 + m_2) v$</div>\n    Znak prędkości $v$ wyznacza kierunek ruchu sczepionych ciał.</li>\n  </ul>\n\n<figure class=\"theory-figure\">\n  <img class=\"theory-diagram\" src=\"img/theory/energy/collision-inelastic-custom.png\" alt=\"Zderzenie niesprężyste dwóch klocków: przed zderzeniem klocki m1 i m2 poruszają się naprzeciwko siebie z prędkościami v1 i v2, po zderzeniu klocki sczepiają się i poruszają razem ze wspólną prędkością v.\" loading=\"eager\" decoding=\"async\">\n</figure>\n\n  <div class=\"theory-subtitle\">4. Bilans energii – ubytek energii kinetycznej na ciepło</div>\n  <p>W zderzeniu niesprężystym pęd jest zachowany, lecz energia kinetyczna maleje – część energii mechanicznej zamienia się w ciepło ($Q$) i pracę odkształceń:</p>\n  <div style=\"text-align:center;margin:6px 0;\">$Q = \\Delta E_k = E_{k,\\text{pocz}} - E_{k,\\text{końc}} > 0$</div>\n</div>",
            "formulaCheat": "m_1 \\vec{v}_1 + m_2 \\vec{v}_2 = (m_1 + m_2)\\vec{v}, \\quad \\Delta E_k = E_{k,\text{pocz}} - E_{k,\text{końc}}",
            "tasks": [
              {
                "id": "p-zad-26",
                "number": 26,
                "title": "Zadanie 26. Proste zderzenie niesprężyste wózków",
                "difficulty": 1,
                "source": "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
                "tags": [
                  "Zderzenie niesprężyste",
                  "Zachowanie pędu",
                  "Zadanie zamknięte"
                ],
                "correctOption": "B",
                "problem": "<p class=\"problem-paragraph\">Wózek $2\\text{ kg}$ jedzie w prawo z szybkością $3\\text{ m/s}$ i zderza się z nieruchomym wózkiem $1\\text{ kg}$. Wózki po zderzeniu sczepiają się. Wskaż wspólną prędkość.</p>\n<div class=\"problem-options-list\" data-correct=\"B\">\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">$1\\text{ m/s}$ w prawo</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">$2\\text{ m/s}$ w prawo</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">$3\\text{ m/s}$ w prawo</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">$6\\text{ m/s}$ w prawo</span></div>\n</div>",
                "solution": {
                  "givens": "$m_1 = 2\\text{ kg}$, $v_1 = 3\\text{ m/s}$, $m_2 = 1\\text{ kg}$, $v_2 = 0$.",
                  "steps": [
                    {
                      "title": "Zastosowanie zasady zachowania pędu",
                      "content": "Zderzenie jest niesprężyste, więc wózki poruszają się z jedną wspólną prędkością $v$:\n$$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v$$\n$$2\\text{ kg} \\cdot 3\\text{ m/s} + 1\\text{ kg} \\cdot 0 = (2\\text{ kg} + 1\\text{ kg}) v \\implies 6 = 3v \\implies v = 2\\text{ m/s}$$"
                    }
                  ],
                  "answer": "Poprawna odpowiedź: B ($2\\text{ m/s}$ w prawo)."
                }
              },
              {
                "id": "p-zad-27",
                "number": 27,
                "title": "Zadanie 27. Zderzenie czołowe niesprężyste",
                "difficulty": 1,
                "source": "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
                "tags": [
                  "Zderzenie niesprężyste",
                  "Wektory pędu",
                  "Ruch naprzeciw"
                ],
                "problem": "<p class=\"problem-paragraph\">Wózek $1\\text{ kg}$ porusza się w prawo z $6\\text{ m/s}$, a wózek $2\\text{ kg}$ w lewo z $2\\text{ m/s}$. Zderzają się niesprężyście i poruszają dalej razem. Oblicz wartość i zwrot wspólnej prędkości.</p>",
                "solution": {
                  "givens": "$m_1 = 1\\text{ kg}$, $v_1 = +6\\text{ m/s}$ (w prawo), $m_2 = 2\\text{ kg}$, $v_2 = -2\\text{ m/s}$ (w lewo).",
                  "steps": [
                    {
                      "title": "Zastosowanie zasady zachowania pędu ze zwrotami",
                      "content": "Przyjmując zwrot w prawo jako dodatni:\n$$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v$$\n$$1\\text{ kg} \\cdot 6\\text{ m/s} + 2\\text{ kg} \\cdot (-2\\text{ m/s}) = (1\\text{ kg} + 2\\text{ kg}) v$$\n$$6 - 4 = 3v \\implies 2 = 3v \\implies v = \\frac{2}{3}\\text{ m/s} \\approx 0{,}67\\text{ m/s}$$"
                    },
                    {
                      "title": "Interpretacja zwrotu prędkości",
                      "content": "Dodatni znak wyniku ($v > 0$) oznacza, że sczepione wózki kontynuują ruch w prawo (zgodnie ze zwrotem początkowym pierwszego wózka)."
                    }
                  ],
                  "answer": "Wspólna prędkość wynosi $\\frac{2}{3}\\text{ m/s} \\approx 0{,}67\\text{ m/s}$ ze zwrotem w prawo."
                }
              },
              {
                "id": "p-zad-28",
                "number": 28,
                "title": "Zadanie 28. Wyrzucenie ładunku z łodzi (zasada zachowania pędu)",
                "difficulty": 2,
                "source": "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
                "tags": [
                  "Zachowanie pędu",
                  "Układ izolowany"
                ],
                "problem": "<p class=\"problem-paragraph\">Nieruchoma łódź z osobą ma masę $80\\text{ kg}$. Osoba wyrzuca poziomo plecak o masie $4\\text{ kg}$ z prędkością $5\\text{ m/s}$ w prawo. Oblicz prędkość łodzi z osobą po wyrzuceniu plecaka. Pomijamy opory wody.</p>",
                "solution": {
                  "givens": "$M = 80\\text{ kg}$, $m_p = 4\\text{ kg}$, $v_p = +5\\text{ m/s}$ (w prawo), $p_{\\text{pocz}} = 0$.",
                  "steps": [
                    {
                      "title": "Zasada zachowania pędu w układzie izolowanym",
                      "content": "Układ początkowo spoczywał, więc całkowity pęd początkowy wynosi zero ($p_{\\text{pocz}} = 0$):\n$$p_{\\text{pocz}} = p_{\\text{końc}} \\implies 0 = M v_Ł + m_p v_p$$\n$$0 = 80\\text{ kg} \\cdot v_Ł + 4\\text{ kg} \\cdot 5\\text{ m/s} \\implies 80 v_Ł = -20 \\implies v_Ł = -\\frac{20}{80} = -0{,}25\\text{ m/s}$$"
                    },
                    {
                      "title": "Interpretacja znaku i wartości prędkości",
                      "content": "Znak minus oznacza, że łódź porusza się w lewo (przeciwnie do zwrotu wyrzuconego plecaka) z szybkością $0{,}25\\text{ m/s}$."
                    }
                  ],
                  "answer": "Łódź z osobą porusza się z szybkością $0{,}25\\text{ m/s}$ w lewo."
                }
              },
              {
                "id": "p-zad-29",
                "number": 29,
                "title": "Zadanie 29. Dwuwymiarowe zderzenie niesprężyste wózków",
                "difficulty": 2,
                "source": "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
                "tags": [
                  "Zderzenie 2D",
                  "Pęd wektorowy",
                  "Składowe pędu"
                ],
                "problem": "<p class=\"problem-paragraph\">Dwa wózki po zderzeniu sczepiają się. Pierwszy ma masę $2\\text{ kg}$ i prędkość $3\\text{ m/s}$ na wschód, drugi ma masę $1\\text{ kg}$ i prędkość $4\\text{ m/s}$ na północ. Wyznacz składowe oraz wartość wspólnej prędkości po zderzeniu.</p>",
                "solution": {
                  "givens": "$m_1 = 2\\text{ kg}$, $\\vec{v}_1 = [3, 0]\\text{ m/s}$ (wschód), $m_2 = 1\\text{ kg}$, $\\vec{v}_2 = [0, 4]\\text{ m/s}$ (północ).",
                  "steps": [
                    {
                      "title": "Zasada zachowania pędu dla poszczególnych osi",
                      "content": "Łączna masa po sczepieniu: $M = m_1 + m_2 = 2\\text{ kg} + 1\\text{ kg} = 3\\text{ kg}$.\nDla osi $x$ (kierunek wschód):\n$$(m_1 + m_2) v_x = m_1 v_{1x} \\implies 3\\text{ kg} \\cdot v_x = 2\\text{ kg} \\cdot 3\\text{ m/s} \\implies v_x = 2\\text{ m/s}$$\nDla osi $y$ (kierunek północ):\n$$(m_1 + m_2) v_y = m_2 v_{2y} \\implies 3\\text{ kg} \\cdot v_y = 1\\text{ kg} \\cdot 4\\text{ m/s} \\implies v_y = \\frac{4}{3}\\text{ m/s} \\approx 1{,}33\\text{ m/s}$$"
                    },
                    {
                      "title": "Wyznaczenie wartości prędkości wypadkowej",
                      "content": "Z twierdzenia Pitagorasa:\n$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{2^2 + \\left(\\frac{4}{3}\\right)^2} = \\sqrt{4 + \\frac{16}{9}} = \\sqrt{\\frac{52}{9}} = \\frac{\\sqrt{52}}{3} \\approx 2{,}40\\text{ m/s}$$"
                    }
                  ],
                  "answer": "Składowe prędkości wynoszą $v_x = 2\\text{ m/s}$ oraz $v_y = \\frac{4}{3}\\text{ m/s}$, a wartość prędkości wypadkowej wynosi około $2{,}40\\text{ m/s}$."
                }
              },
              {
                "id": "p-zad-30",
                "number": 30,
                "title": "Zadanie 30. Względny ubytek energii w zderzeniu niesprężystym",
                "difficulty": 2,
                "source": "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
                "tags": [
                  "Zderzenie niesprężyste",
                  "Ubytek energii",
                  "Zadanie zamknięte"
                ],
                "correctOption": "C",
                "problem": "<p class=\"problem-paragraph\">Wózek $2\\text{ kg}$ o szybkości $4\\text{ m/s}$ uderza w nieruchomy wózek $2\\text{ kg}$ i sczepia się z nim. Jaka część początkowej energii kinetycznej układu została utracona w zderzeniu?</p>\n<div class=\"problem-options-list\" data-correct=\"C\">\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">$0\\%$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">$25\\%$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">$50\\%$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">$75\\%$</span></div>\n</div>",
                "solution": {
                  "givens": "$m_1 = 2\\text{ kg}$, $v_1 = 4\\text{ m/s}$, $m_2 = 2\\text{ kg}$, $v_2 = 0$.",
                  "steps": [
                    {
                      "title": "Wspólna prędkość z zasady zachowania pędu",
                      "content": "$$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v$$\n$$2\\text{ kg} \\cdot 4\\text{ m/s} + 0 = (2\\text{ kg} + 2\\text{ kg}) v \\implies 8 = 4v \\implies v = 2\\text{ m/s}$$"
                    },
                    {
                      "title": "Porównanie energii kinetycznych przed i po zderzeniu",
                      "content": "Energia kinetyczna początkowa:\n$$E_{k,\\text{pocz}} = \\frac{1}{2}m_1 v_1^2 = \\frac{1}{2} \\cdot 2\\text{ kg} \\cdot (4\\text{ m/s})^2 = 16\\text{ J}$$\nEnergia kinetyczna końcowa po sczepieniu:\n$$E_{k,\\text{końc}} = \\frac{1}{2}(m_1 + m_2) v^2 = \\frac{1}{2} \\cdot 4\\text{ kg} \\cdot (2\\text{ m/s})^2 = 8\\text{ J}$$"
                    },
                    {
                      "title": "Wyznaczenie względnego ubytku energii",
                      "content": "$$\\frac{\\Delta E_k}{E_{k,\\text{pocz}}} = \\frac{E_{k,\\text{pocz}} - E_{k,\\text{końc}}}{E_{k,\\text{pocz}}} = \\frac{16\\text{ J} - 8\\text{ J}}{16\\text{ J}} = \\frac{8}{16} = 0{,}50 = 50\\%$$"
                    }
                  ],
                  "answer": "Poprawna odpowiedź: C ($50\\%$). W zderzeniu niesprężystym ciał o jednakowej masie utracie ulega dokładnie $50\\%$ energii kinetycznej."
                }
              },
              {
                "id": "p-zad-31",
                "number": 31,
                "title": "Zadanie 31. Uderzenie plasteliny w klocek",
                "difficulty": 2,
                "source": "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
                "tags": [
                  "Zderzenie niesprężyste",
                  "Bilans energii",
                  "Ubytek energii"
                ],
                "problem": "<p class=\"problem-paragraph\">Kula plasteliny $0{,}10\\text{ kg}$ leci poziomo z szybkością $20\\text{ m/s}$ i przykleja się do nieruchomego klocka $0{,}90\\text{ kg}$ na gładkim stole. Oblicz wspólną szybkość oraz określ, jaka część początkowej energii kinetycznej została utracona.</p>",
                "solution": {
                  "givens": "$m_1 = 0{,}10\\text{ kg}$, $v_1 = 20\\text{ m/s}$, $m_2 = 0{,}90\\text{ kg}$, $v_2 = 0$.",
                  "steps": [
                    {
                      "title": "Wyznaczenie wspólnej szybkości z zasady zachowania pędu",
                      "content": "$$m_1 v_1 = (m_1 + m_2) v \\implies v = \\frac{m_1 v_1}{m_1 + m_2} = \\frac{0{,}10\\text{ kg} \\cdot 20\\text{ m/s}}{0{,}10\\text{ kg} + 0{,}90\\text{ kg}} = \\frac{2}{1{,}0} = 2\\text{ m/s}$$"
                    },
                    {
                      "title": "Bilans energii kinetycznej i ubytek względny",
                      "content": "Energia początkowa:\n$$E_{k,\\text{pocz}} = \\frac{1}{2}m_1 v_1^2 = \\frac{1}{2} \\cdot 0{,}10\\text{ kg} \\cdot (20\\text{ m/s})^2 = 20\\text{ J}$$\nEnergia końcowa:\n$$E_{k,\\text{końc}} = \\frac{1}{2}(m_1 + m_2) v^2 = \\frac{1}{2} \\cdot 1{,}0\\text{ kg} \\cdot (2\\text{ m/s})^2 = 2\\text{ J}$$\nUbytek energii wynosi $\\Delta E_k = 20\\text{ J} - 2\\text{ J} = 18\\text{ J}$, co stanowi:\n$$\\frac{\\Delta E_k}{E_{k,\\text{pocz}}} = \\frac{18\\text{ J}}{20\\text{ J}} = 0{,}90 = 90\\%$$"
                    }
                  ],
                  "answer": "Wspólna szybkość wynosi $2\\text{ m/s}$. Układ utracił $18\\text{ J}$ energii kinetycznej, co stanowi $90\\%$ energii początkowej."
                }
              },
              {
                "id": "p-zad-32",
                "number": 32,
                "title": "Zadanie 32. Zderzenie niesprężyste i hamowanie tarciem",
                "difficulty": 2,
                "source": "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
                "tags": [
                  "Zderzenie niesprężyste",
                  "Praca tarcia",
                  "Droga hamowania"
                ],
                "problem": "<p class=\"problem-paragraph\">Wózek $1\\text{ kg}$ jedzie z $8\\text{ m/s}$ i zderza się niesprężyście z nieruchomym wózkiem $3\\text{ kg}$. Po zderzeniu oba wózki poruszają się po szorstkim torze, na którym siła tarcia ma wartość $4\\text{ N}$. Oblicz drogę do zatrzymania układu.</p>",
                "solution": {
                  "givens": "$m_1 = 1\\text{ kg}$, $v_1 = 8\\text{ m/s}$, $m_2 = 3\\text{ kg}$, $v_2 = 0$, $T = 4\\text{ N}$.",
                  "steps": [
                    {
                      "title": "Wyznaczenie prędkości po zderzeniu z zasady zachowania pędu",
                      "content": "$$m_1 v_1 = (m_1 + m_2) v \\implies v = \\frac{m_1 v_1}{m_1 + m_2} = \\frac{1\\text{ kg} \\cdot 8\\text{ m/s}}{1\\text{ kg} + 3\\text{ kg}} = \\frac{8}{4} = 2\\text{ m/s}$$"
                    },
                    {
                      "title": "Energia kinetyczna sczepionych ciał tuż po zderzeniu",
                      "content": "$$E_{k,\\text{końc}} = \\frac{1}{2}(m_1 + m_2) v^2 = \\frac{1}{2} \\cdot 4\\text{ kg} \\cdot (2\\text{ m/s})^2 = 8\\text{ J}$$"
                    },
                    {
                      "title": "Wyznaczenie drogi hamowania z twierdzenia o pracy i energii",
                      "content": "Praca siły tarcia niweczy energię kinetyczną układu ($W_t = -E_{k,\\text{końc}}$):\n$$-T \\cdot s = -E_{k,\\text{końc}} \\implies s = \\frac{E_{k,\\text{końc}}}{T} = \\frac{8\\text{ J}}{4\\text{ N}} = 2\\text{ m}$$"
                    }
                  ],
                  "answer": "Droga do zatrzymania układu wynosi $2\\text{ m}$.",
                  "trap": "Nie wolno brać energii sprzed zderzenia ($E_{k,\\text{pocz}} = 32\\text{ J}$), ponieważ aż $24\\text{ J}$ zostało bezpowrotnie zamienione na ciepło w samym akcie zderzenia!"
                }
              },
              {
                "id": "p-zad-33",
                "number": 33,
                "title": "Zadanie 33. Zjazd ze stoku, zderzenie niesprężyste i ubytek energii",
                "difficulty": 3,
                "source": "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
                "tags": [
                  "Zjazd z równi",
                  "Zderzenie niesprężyste",
                  "Bilans energii"
                ],
                "problem": "<p class=\"problem-paragraph\">Klocek $m_1 = 0{,}50\\text{ kg}$ zsuwa się bez tarcia z wysokości $1{,}8\\text{ m}$ i na poziomym torze zderza się niesprężyście z nieruchomym klockiem $m_2 = 1{,}0\\text{ kg}$. Po zderzeniu klocki poruszają się razem. Oblicz szybkość pierwszego klocka tuż przed zderzeniem, wspólną szybkość tuż po zderzeniu i ubytek energii kinetycznej w samym zderzeniu.</p>",
                "solution": {
                  "givens": "$m_1 = 0{,}50\\text{ kg}$, $h = 1{,}8\\text{ m}$, $m_2 = 1{,}0\\text{ kg}$, $g = 10\\text{ m/s}^2$.",
                  "steps": [
                    {
                      "title": "Szybkość pierwszego klocka przed zderzeniem (z ZZE)",
                      "content": "$$m_1 gh = \\frac{1}{2}m_1 v_1^2 \\implies v_1 = \\sqrt{2gh} = \\sqrt{2 \\cdot 10\\text{ m/s}^2 \\cdot 1{,}8\\text{ m}} = \\sqrt{36} = 6\\text{ m/s}$$"
                    },
                    {
                      "title": "Wspólna szybkość po zderzeniu (z ZZP)",
                      "content": "$$m_1 v_1 = (m_1 + m_2) v \\implies v = \\frac{m_1 v_1}{m_1 + m_2} = \\frac{0{,}50\\text{ kg} \\cdot 6\\text{ m/s}}{0{,}50\\text{ kg} + 1{,}0\\text{ kg}} = \\frac{3}{1{,}5} = 2\\text{ m/s}$$"
                    },
                    {
                      "title": "Wyznaczenie ubytku energii kinetycznej w zderzeniu",
                      "content": "Energia tuż przed zderzeniem:\n$$E_{k,\\text{pocz}} = \\frac{1}{2}m_1 v_1^2 = \\frac{1}{2} \\cdot 0{,}50\\text{ kg} \\cdot (6\\text{ m/s})^2 = 9\\text{ J}$$\nEnergia tuż po zderzeniu:\n$$E_{k,\\text{końc}} = \\frac{1}{2}(m_1 + m_2) v^2 = \\frac{1}{2} \\cdot 1{,}50\\text{ kg} \\cdot (2\\text{ m/s})^2 = 3\\text{ J}$$\nUbytek energii kinetycznej zamienionej na ciepło:\n$$\\Delta E_k = E_{k,\\text{pocz}} - E_{k,\\text{końc}} = 9\\text{ J} - 3\\text{ J} = 6\\text{ J}$$"
                    }
                  ],
                  "answer": "Szybkość przed zderzeniem: $6\\text{ m/s}$, wspólna szybkość po zderzeniu: $2\\text{ m/s}$, ubytek energii kinetycznej: $6\\text{ J}$."
                }
              }
            ]
          },
          {
            "id": "sub-zderzenia-sprezyste",
            "number": 4,
            "icon": "⚪",
            "title": "4. Zderzenia sprężyste",
            "shortTitle": "Zderzenia sprężyste",
            "desc": "Zderzenia doskonale sprężyste: jednoczesne zachowanie pędu i energii kinetycznej, wymiana prędkości dla równych mas i zderzenia 2D.",
            "formulaCheat": "\\sum \\vec{p}_{\\text{pocz}} = \\sum \\vec{p}_{\\text{końc}}, \\quad \\sum E_{k,\\text{pocz}} = \\sum E_{k,\\text{końc}}",
            "theory": "<div class=\"theory-section\">\n  <div class=\"theory-subtitle\">1. Definicja i fundamentalny układ równań</div>\n  <p>Zderzenie doskonale sprężyste to proces, w którym <strong>nie występują straty energii kinetycznej na ciepło ani odkształcenia trwałe</strong> ($\\Delta E_k = 0$). Układ izolowany spełnia jednocześnie <strong>dwa prawa zachowania</strong>:</p>\n  <div style=\"text-align:center;margin:8px 0;\">\n  $$\\begin{cases} m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2' & \\text{(ZZP)} \\\\ \\frac{1}{2}m_1 v_1^2 + \\frac{1}{2}m_2 v_2^2 = \\frac{1}{2}m_1 (v_1')^2 + \\frac{1}{2}m_2 (v_2')^2 & \\text{(ZZE)} \\end{cases}$$\n  </div>\n  <ul class=\"theory-list\">\n    <li><strong>$v_1, v_2$</strong> – prędkości ciał przed zderzeniem.</li>\n    <li><strong>$v_1', v_2'$</strong> – prędkości ciał po zderzeniu.</li>\n    <li>Warunek sprężystości: $\\Delta E_k = 0$ (energia kinetyczna układu zostaje w $100\\%$ zachowana).</li>\n  </ul>\n\n  <div class=\"theory-subtitle\">2. Kluczowa zależność prędkości względnych w zderzeniu sprężystym (1D)</div>\n  <p>Z powyższego układu równań (ZZP i ZZE) wynika bezpośrednio fundamentalna zależność:</p>\n  <ul class=\"theory-list\">\n    <li><strong>Krok 1 (pogrupowanie mas):</strong>\n    <div style=\"text-align:center;margin:4px 0;\">$$m_1(v_1 - v_1') = m_2(v_2' - v_2) \\quad \\text{(z ZZP)}$$</div>\n    <div style=\"text-align:center;margin:4px 0;\">$$m_1(v_1^2 - (v_1')^2) = m_2((v_2')^2 - v_2^2) \\quad \\text{(z ZZE)}$$</div></li>\n    <li><strong>Krok 2 (różnica kwadratów):</strong> rozpisujemy $a^2 - b^2 = (a - b)(a + b)$ w równaniu energii:\n    <div style=\"text-align:center;margin:4px 0;\">$$m_1(v_1 - v_1')(v_1 + v_1') = m_2(v_2' - v_2)(v_2' + v_2)$$</div></li>\n    <li><strong>Krok 3 (podzielenie równań stronami):</strong> otrzymujemy relację sum prędkości:\n    <div style=\"text-align:center;margin:4px 0;\">$$v_1 + v_1' = v_2' + v_2$$</div></li>\n  </ul>\n  <div class=\"theory-callout-rule\">\n    <strong>Fundamentalna reguła prędkości względnych:</strong>\n    <div style=\"text-align:center;margin:6px 0;font-size:1.15em;\">$$v_1 - v_2 = -(v_1' - v_2')$$</div>\n    <strong>Sens fizyczny:</strong> Prędkość względna ciał po zderzeniu sprężystym ma dokładnie <strong>taką samą wartość, lecz przeciwny zwrot</strong> niż przed zderzeniem (ciała oddalają się od siebie z taką samą szybkością względną, z jaką się zbliżały).\n  </div>\n\n<figure class=\"theory-figure\">\n  <img class=\"theory-diagram\" src=\"img/theory/energy/collision-elastic-custom.png\" alt=\"Zderzenie sprężyste 1D: przed zderzeniem prędkość zbliżania v1 - v2, po zderzeniu prędkość oddalania -(v1' - v2')\" loading=\"eager\" decoding=\"async\">\n</figure>\n\n  <div class=\"theory-subtitle\">3. Zderzenia sprężyste pod kątem (2D)</div>\n  <p>Gdy zderzenie nie zachodzi wzdłuż jednej prostej (ruch w płaszczyźnie $xy$):</p>\n  <ul class=\"theory-list\">\n    <li><strong>Zasada Zachowania Pędu (dla każdej osi osobno):</strong>\n    <div style=\"text-align:center;margin:6px 0;\">\n    $$\\begin{cases} m_1 v_{1x} + m_2 v_{2x} = m_1 v_{1x}' + m_2 v_{2x}' \\\\ m_1 v_{1y} + m_2 v_{2y} = m_1 v_{1y}' + m_2 v_{2y}' \\end{cases}$$\n    </div></li>\n    <li><strong>Zasada Zachowania Energii (wielkość skalarna):</strong>\n    <div style=\"text-align:center;margin:6px 0;\">$$\\frac{1}{2}m_1 v_1^2 + \\frac{1}{2}m_2 v_2^2 = \\frac{1}{2}m_1 (v_1')^2 + \\frac{1}{2}m_2 (v_2')^2$$</div>\n    gdzie kwadrat prędkości wyznaczamy z twierdzenia Pitagorasa: $v^2 = v_x^2 + v_y^2$.</li>\n  </ul>\n\n<figure class=\"theory-figure\">\n  <img class=\"theory-diagram\" src=\"img/theory/energy/collision-2d-custom.png\" alt=\"Zderzenie sprężyste 2D pod kątem: przed zderzeniem kula 1 porusza się wzdłuż osi x, kula 2 spoczywa; po zderzeniu kule rozpraszają się pod kątami alfa i beta, a ich pędy w pionie się równoważą.\" loading=\"eager\" decoding=\"async\">\n</figure>\n</div>",
            "tasks": [
              {
                "id": "p-zad-34",
                "number": 34,
                "title": "Zadanie 34. Warunek zderzenia doskonale sprężystego",
                "difficulty": 1,
                "source": "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
                "tags": [
                  "Zderzenie sprężyste",
                  "Prawa zachowania",
                  "Zadanie zamknięte"
                ],
                "correctOption": "C",
                "problem": "<p class=\"problem-paragraph\">Wskaż wielkości, które są zachowane w izolowanym zderzeniu doskonale sprężystym dwóch ciał.</p>\n<div class=\"problem-options-list\" data-correct=\"C\">\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">Tylko pęd</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">Tylko energia kinetyczna</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">Pęd i energia kinetyczna</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">Pęd i prędkości obu ciał</span></div>\n</div>",
                "solution": {
                  "givens": "Układ izolowany, zderzenie doskonale sprężyste.",
                  "steps": [
                    {
                      "title": "Zasady zachowania w zderzeniu sprężystym",
                      "content": "W każdym zderzeniu w układzie izolowanym zachowany jest pęd ($\\sum \\vec{p}_{\\text{pocz}} = \\sum \\vec{p}_{\\text{końc}}$). Zderzenie jest doskonale sprężyste wtedy i tylko wtedy, gdy nie występują straty energii na ciepło ani odkształcenia trwałe, czyli zachowana jest również całkowita energia kinetyczna ($\\sum E_{k,\\text{pocz}} = \\sum E_{k,\\text{końc}}$)."
                    }
                  ],
                  "answer": "Poprawna odpowiedź: C (pęd i energia kinetyczna)."
                }
              },
              {
                "id": "p-zad-35",
                "number": 35,
                "title": "Zadanie 35. Zderzenie centralne sprężyste ciał o równych masach",
                "difficulty": 1,
                "source": "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
                "tags": [
                  "Zderzenie sprężyste",
                  "Równe masy",
                  "Zadanie zamknięte"
                ],
                "correctOption": "A",
                "problem": "<p class=\"problem-paragraph\">Kula o masie $1\\text{ kg}$ porusza się w prawo z szybkością $4\\text{ m/s}$ i uderza sprężyście w nieruchomą kulę o tej samej masie. Wskaż prędkości kul po zderzeniu.</p>\n<div class=\"problem-options-list\" data-correct=\"A\">\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">$v_1' = 0,\\ v_2' = 4\\text{ m/s}$ w prawo</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">$v_1' = -2\\text{ m/s},\\ v_2' = +2\\text{ m/s}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">$v_1' = +2\\text{ m/s},\\ v_2' = +2\\text{ m/s}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">$v_1' = -4\\text{ m/s},\\ v_2' = 0$</span></div>\n</div>",
                "solution": {
                  "givens": "$m_1 = m_2 = 1\\text{ kg}$, $v_1 = 4\\text{ m/s}$ (w prawo), $v_2 = 0$.",
                  "steps": [
                    {
                      "title": "Zastosowanie układu równań pędu i prędkości względnych",
                      "content": "Dla zderzenia sprężystego ciał o jednakowej masie ($m_1 = m_2$):\n$$\\begin{cases} v_1 + v_2 = v_1' + v_2' \\\\\\\\ v_1 - v_2 = -(v_1' - v_2') \\end{cases}$$\nPodstawiając $v_1 = 4\\text{ m/s}$ oraz $v_2 = 0$:\n$$\\begin{cases} v_1' + v_2' = 4 \\\\\\\\ -v_1' + v_2' = 4 \\end{cases} \\implies v_1' = 0, \\quad v_2' = 4\\text{ m/s}$$\nCiała o jednakowych masach w centralnym zderzeniu sprężystym wymieniają się prędkościami."
                    }
                  ],
                  "answer": "Poprawna odpowiedź: A ($v_1' = 0,\\ v_2' = 4\\text{ m/s}$ w prawo). Kula uderzająca zatrzymuje się, a kula uderzana przejmuje całą jej prędkość i energię."
                }
              },
              {
                "id": "p-zad-36",
                "number": 36,
                "title": "Zadanie 36. Zderzenie sprężyste kuli z dwukrotnie cięższą kulą",
                "difficulty": 2,
                "source": "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
                "tags": [
                  "Zderzenie sprężyste",
                  "Układ równań",
                  "Prędkości względne"
                ],
                "problem": "<p class=\"problem-paragraph\">Kula o masie $1\\text{ kg}$ porusza się w prawo z szybkością $6\\text{ m/s}$ i zderza się centralnie i sprężyście z nieruchomą kulą o masie $2\\text{ kg}$. Oblicz prędkości obu kul po zderzeniu.</p>",
                "solution": {
                  "givens": "$m_1 = 1\\text{ kg}$, $v_1 = +6\\text{ m/s}$, $m_2 = 2\\text{ kg}$, $v_2 = 0$.",
                  "steps": [
                    {
                      "title": "Układ równań pędu i prędkości względnych",
                      "content": "Zasada zachowania pędu:\n$$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2' \\implies 1 \\cdot 6 + 2 \\cdot 0 = v_1' + 2v_2' \\implies v_1' + 2v_2' = 6$$\nRelacja prędkości względnych w zderzeniu sprężystym:\n$$v_1 - v_2 = -(v_1' - v_2') \\implies 6 - 0 = -v_1' + v_2' \\implies -v_1' + v_2' = 6$$"
                    },
                    {
                      "title": "Rozwiązanie układu równań liniowych",
                      "content": "Dodając oba równania stronami, eliminujemy $v_1'$:\n$$3v_2' = 12 \\implies v_2' = 4\\text{ m/s}$$\nPodstawiając do drugiego równania:\n$$v_1' = v_2' - 6 = 4 - 6 = -2\\text{ m/s}$$\nZnak minus oznacza, że lżejsza kula odbija się i zawraca w lewo."
                    }
                  ],
                  "answer": "Prędkości po zderzeniu wynoszą: $v_1' = -2\\text{ m/s}$ (w lewo) oraz $v_2' = 4\\text{ m/s}$ (w prawo)."
                }
              },
              {
                "id": "p-zad-37",
                "number": 37,
                "title": "Zadanie 37. Czołowe zderzenie sprężyste przy zerowym pędzie całkowitym",
                "difficulty": 2,
                "source": "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
                "tags": [
                  "Zderzenie sprężyste",
                  "Zerowy pęd",
                  "Układ równań"
                ],
                "problem": "<p class=\"problem-paragraph\">Dwie kule o masach $m_1 = 2\\text{ kg}$ i $m_2 = 1\\text{ kg}$ poruszają się naprzeciwko siebie z szybkościami odpowiednio $v_1 = 2\\text{ m/s}$ (w prawo) oraz $v_2 = 4\\text{ m/s}$ (w lewo). Zderzenie jest centralne i doskonale sprężyste. Wyznacz prędkości kul po zderzeniu.</p>",
                "solution": {
                  "givens": "$m_1 = 2\\text{ kg}$, $v_1 = +2\\text{ m/s}$ (w prawo), $m_2 = 1\\text{ kg}$, $v_2 = -4\\text{ m/s}$ (w lewo).",
                  "steps": [
                    {
                      "title": "Układ równań zachowania pędu i prędkości względnych",
                      "content": "Całkowity pęd początkowy układu wynosi:\n$$p_{\\text{pocz}} = m_1 v_1 + m_2 v_2 = 2 \\cdot 2 + 1 \\cdot (-4) = 4 - 4 = 0$$\nZasada zachowania pędu po zderzeniu:\n$$m_1 v_1' + m_2 v_2' = 0 \\implies 2v_1' + v_2' = 0 \\implies v_2' = -2v_1'$$\nRelacja prędkości względnych w zderzeniu sprężystym:\n$$v_1 - v_2 = -(v_1' - v_2') \\implies 2 - (-4) = -v_1' + v_2' \\implies -v_1' + v_2' = 6$$"
                    },
                    {
                      "title": "Wyznaczenie prędkości końcowych",
                      "content": "Podstawiając $v_2' = -2v_1'$ do równania prędkości względnych:\n$$-v_1' + (-2v_1') = 6 \\implies -3v_1' = 6 \\implies v_1' = -2\\text{ m/s}$$\n$$v_2' = -2v_1' = -2 \\cdot (-2) = +4\\text{ m/s}$$\nGdy całkowity pęd układu wynosi zero, ciała po zderzeniu sprężystym odwracają zwroty swoich prędkości, zachowując ich wartości."
                    }
                  ],
                  "answer": "Prędkości po zderzeniu wynoszą: $v_1' = -2\\text{ m/s}$ (w lewo) oraz $v_2' = +4\\text{ m/s}$ (w prawo)."
                }
              },
              {
                "id": "p-zad-38",
                "number": 38,
                "title": "Zadanie 38. Weryfikacja sprężystości zderzenia wózków",
                "difficulty": 2,
                "source": "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
                "tags": [
                  "Zderzenie sprężyste",
                  "Bilans energii",
                  "Zachowanie pędu"
                ],
                "problem": "<p class=\"problem-paragraph\">Wózek o masie $m_1 = 1\\text{ kg}$ jadący z prędkością $+5\\text{ m/s}$ uderza w spoczywający wózek o masie $m_2 = 4\\text{ kg}$. Po zderzeniu pierwszy wózek cofa się z prędkością $v_1' = -3\\text{ m/s}$. Ustal, czy to zderzenie mogło być doskonale sprężyste.</p>",
                "solution": {
                  "givens": "$m_1 = 1\\text{ kg}$, $v_1 = +5\\text{ m/s}$, $m_2 = 4\\text{ kg}$, $v_2 = 0$, $v_1' = -3\\text{ m/s}$.",
                  "steps": [
                    {
                      "title": "Wyznaczenie prędkości drugiego wózka z zasady zachowania pędu",
                      "content": "$$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$$\n$$1 \\cdot 5 + 4 \\cdot 0 = 1 \\cdot (-3) + 4 \\cdot v_2' \\implies 5 = -3 + 4v_2' \\implies 4v_2' = 8 \\implies v_2' = 2\\text{ m/s}$$"
                    },
                    {
                      "title": "Porównanie energii kinetycznych przed i po zderzeniu",
                      "content": "Energia kinetyczna przed zderzeniem:\n$$E_{k,\\text{pocz}} = \\frac{1}{2}m_1 v_1^2 = \\frac{1}{2} \\cdot 1\\text{ kg} \\cdot (5\\text{ m/s})^2 = 12{,}5\\text{ J}$$\nEnergia kinetyczna po zderzeniu:\n$$E_{k,\\text{końc}} = \\frac{1}{2}m_1 (v_1')^2 + \\frac{1}{2}m_2 (v_2')^2 = \\frac{1}{2} \\cdot 1 \\cdot (-3)^2 + \\frac{1}{2} \\cdot 4 \\cdot 2^2 = 4{,}5\\text{ J} + 8\\text{ J} = 12{,}5\\text{ J}$$\nPonieważ $E_{k,\\text{końc}} = E_{k,\\text{pocz}} = 12{,}5\\text{ J}$, energia kinetyczna została w $100\\%$ zachowana."
                    }
                  ],
                  "answer": "Tak, zderzenie mogło być doskonale sprężyste, ponieważ energia kinetyczna układu została w pełni zachowana ($E_{k,\\text{końc}} = E_{k,\\text{pocz}} = 12{,}5\\text{ J}$)."
                }
              },
              {
                "id": "p-zad-39",
                "number": 39,
                "title": "Zadanie 39. Dwuwymiarowe zderzenie sprężyste jednakowych kul",
                "difficulty": 3,
                "source": "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
                "tags": [
                  "Zderzenie 2D",
                  "Zachowanie energii",
                  "Wektory pędu"
                ],
                "problem": "<p class=\"problem-paragraph\">Dwie jednakowe kule poruszają się początkowo: A z szybkością $5\\text{ m/s}$, B spoczywa. Po sprężystym zderzeniu w płaszczyźnie kula A ma szybkość $3\\text{ m/s}$. Oblicz szybkość kuli B i wykaż, że wektory prędkości kul po zderzeniu są prostopadłe.</p>",
                "solution": {
                  "givens": "$m_A = m_B = m$, $v_0 = 5\\text{ m/s}$, $v_B = 0$, $v_A' = 3\\text{ m/s}$.",
                  "steps": [
                    {
                      "title": "Obliczenie szybkości kuli B z zasady zachowania energii",
                      "content": "Dla jednakowych mas masa $m$ upraszcza się w równaniu energii:\n$$\\frac{1}{2}m v_0^2 = \\frac{1}{2}m (v_A')^2 + \\frac{1}{2}m (v_B')^2 \\implies v_0^2 = (v_A')^2 + (v_B')^2$$\n$$5^2 = 3^2 + (v_B')^2 \\implies 25 = 9 + (v_B')^2 \\implies (v_B')^2 = 16 \\implies v_B' = 4\\text{ m/s}$$"
                    },
                    {
                      "title": "Wyznaczenie kąta między wektorami prędkości z wektorowej ZZP",
                      "content": "Z zasady zachowania pędu: $\\vec{v}_0 = \\vec{v}_A' + \\vec{v}_B'.$\nPodnosząc to równanie skalarnie do kwadratu:\n$$v_0^2 = (\\vec{v}_A' + \\vec{v}_B')^2 = (v_A')^2 + (v_B')^2 + 2\\vec{v}_A' \\cdot \\vec{v}_B'$$\nPorównując z równaniem energii ($v_0^2 = (v_A')^2 + (v_B')^2$), otrzymujemy:\n$$2\\vec{v}_A' \\cdot \\vec{v}_B' = 0 \\implies \\vec{v}_A' \\perp \\vec{v}_B' \\implies \\alpha = 90^\\circ$$"
                    }
                  ],
                  "answer": "Szybkość kuli B wynosi $4\\text{ m/s}$, a kąt między wektorami prędkości obu kul po zderzeniu wynosi $90^\\circ$."
                }
              },
              {
                "id": "p-zad-40",
                "number": 40,
                "title": "Zadanie 40. Zderzenie sprężyste 2D pod kątem",
                "difficulty": 3,
                "source": "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
                "tags": [
                  "Zderzenie 2D",
                  "Symetria",
                  "Rozproszenie pod kątem"
                ],
                "problem": "<p class=\"problem-paragraph\">Kula o masie $0{,}20\\text{ kg}$ porusza się z szybkością $10\\text{ m/s}$ i zderza się sprężyście z nieruchomą kulą o tej samej masie. Po zderzeniu kula 1 odchyla się pod kątem $45^\\circ$ względem pierwotnego kierunku ruchu. Wyznacz szybkości obu kul po zderzeniu oraz kąt odchylenia kuli 2.</p>",
                "solution": {
                  "givens": "$m_1 = m_2 = 0{,}20\\text{ kg}$, $v_0 = 10\\text{ m/s}$, $v_2 = 0$, kąt odchylenia kuli 1: $\\alpha = 45^\\circ$.",
                  "steps": [
                    {
                      "title": "Wyznaczenie kierunku ruchu kuli 2 z prostopadłości wektorów",
                      "content": "Dla zderzenia sprężystego kul o jednakowej masie z kulą spoczywającą kąt między wektorami prędkości po zderzeniu wynosi $90^\\circ$ ($\\vec{v}_1' \\perp \\vec{v}_2'$).\nSkoro kula 1 odchyliła się o $45^\\circ$ w jedną stronę, to kula 2 musi odchylić się o kąt $90^\\circ - 45^\\circ = 45^\\circ$ w drugą stronę."
                    },
                    {
                      "title": "Wyznaczenie wartości prędkości z symetrii i zachowania energii",
                      "content": "Z równości kątów i zachowania pędu w osi pionowej wynika symetria szybkości: $v_1' = v_2'.$\nZ zasady zachowania energii kinetycznej:\n$$v_0^2 = (v_1')^2 + (v_2')^2 = 2(v_1')^2$$\n$$10^2 = 2(v_1')^2 \\implies (v_1')^2 = 50 \\implies v_1' = v_2' = \\sqrt{50} = 5\\sqrt{2}\\text{ m/s} \\approx 7{,}07\\text{ m/s}$$"
                    }
                  ],
                  "answer": "Szybkości obu kul po zderzeniu są równe i wynoszą $5\\sqrt{2}\\text{ m/s} \\approx 7{,}07\\text{ m/s}$. Kula 2 odchyla się o kąt $45^\\circ$ w przeciwną stronę niż kula 1."
                }
              },
              {
                "id": "p-zad-41",
                "number": 41,
                "title": "Zadanie 41. Zderzenie sprężyste ciał o różnych masach i prędkościach",
                "difficulty": 3,
                "source": "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
                "tags": [
                  "Zderzenie sprężyste",
                  "Układ równań liniowych",
                  "Prędkości względne"
                ],
                "problem": "<p class=\"problem-paragraph\">Kula $m_1 = 1\\text{ kg}$ porusza się w prawo z szybkością $8\\text{ m/s}$ i dogania kulę $m_2 = 3\\text{ kg}$ poruszającą się w prawo z szybkością $2\\text{ m/s}$. Zderzenie jest centralne i doskonale sprężyste. Wyznacz prędkości obu kul po zderzeniu.</p>",
                "solution": {
                  "givens": "$m_1 = 1\\text{ kg}$, $v_1 = +8\\text{ m/s}$, $m_2 = 3\\text{ kg}$, $v_2 = +2\\text{ m/s}$.",
                  "steps": [
                    {
                      "title": "Układ równań pędu i prędkości względnych",
                      "content": "Zasada zachowania pędu:\n$$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$$\n$$1 \\cdot 8 + 3 \\cdot 2 = 1 \\cdot v_1' + 3 \\cdot v_2' \\implies 8 + 6 = v_1' + 3v_2' \\implies v_1' + 3v_2' = 14$$\nRelacja prędkości względnych w zderzeniu sprężystym:\n$$v_1 - v_2 = -(v_1' - v_2') \\implies 8 - 2 = -v_1' + v_2' \\implies -v_1' + v_2' = 6$$"
                    },
                    {
                      "title": "Rozwiązanie układu równań liniowych",
                      "content": "Dodając oba równania stronami, eliminujemy $v_1'$:\n$$(v_1' + 3v_2') + (-v_1' + v_2') = 14 + 6 \\implies 4v_2' = 20 \\implies v_2' = 5\\text{ m/s}$$\nPodstawiając do drugiego równania:\n$$v_1' = v_2' - 6 = 5 - 6 = -1\\text{ m/s}$$\nZnak minus oznacza, że kula 1 odbija się i zawraca w lewo z szybkością $1\\text{ m/s}$."
                    }
                  ],
                  "answer": "Prędkości po zderzeniu wynoszą: $v_1' = -1\\text{ m/s}$ (w lewo) oraz $v_2' = 5\\text{ m/s}$ (w prawo)."
                }
              },
              {
                "id": "p-zad-42",
                "number": 42,
                "title": "Zadanie 42. Sprężyste zderzenie wózków m i 3m na torze",
                "difficulty": 3,
                "source": "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
                "tags": [
                  "Zadanie wieloetapowe",
                  "Układ równań",
                  "Bilans energii"
                ],
                "problem": "<p class=\"problem-paragraph\">Na gładkim poziomym torze wózek A o masie $m$ porusza się w prawo z szybkością $v$. Wózek B o masie $3m$ spoczywa. Zderzenie jest centralne i doskonale sprężyste.</p>\n<div class=\"problem-subquestion-item\">\n  <strong class=\"problem-subquestion-letter\">(a)</strong>\n  <span class=\"problem-subquestion-text\">Wyprowadź prędkości obu wózków po zderzeniu w zależności od $v$.</span>\n</div>\n<div class=\"problem-subquestion-item\">\n  <strong class=\"problem-subquestion-letter\">(b)</strong>\n  <span class=\"problem-subquestion-text\">Sprawdź zachowanie pędu i energii kinetycznej.</span>\n</div>\n<div class=\"problem-subquestion-item\">\n  <strong class=\"problem-subquestion-letter\">(c)</strong>\n  <span class=\"problem-subquestion-text\">Ustal, jaka część początkowej energii kinetycznej wózka A pozostanie przy nim po zderzeniu.</span>\n</div>",
                "solution": {
                  "givens": "$m_A = m$, $v_A = v$, $m_B = 3m$, $v_B = 0$.",
                  "steps": [
                    {
                      "title": "(a) Wyprowadzenie prędkości po zderzeniu z układu równań",
                      "content": "Zasada zachowania pędu:\n$$m v_A + 3m v_B = m v_A' + 3m v_B' \\implies m v = m(v_A' + 3v_B') \\implies v_A' + 3v_B' = v$$\nRelacja prędkości względnych w zderzeniu sprężystym:\n$$v_A - v_B = -(v_A' - v_B') \\implies v - 0 = -v_A' + v_B' \\implies -v_A' + v_B' = v$$\nDodając równania stronami:\n$$4v_B' = 2v \\implies v_B' = \\frac{v}{2}$$\nPodstawiając do drugiego równania:\n$$v_A' = v_B' - v = \\frac{v}{2} - v = -\\frac{v}{2}$$\nWózek A odbija się i porusza w lewo z szybkością $\\frac{v}{2}$, a wózek B porusza się w prawo z szybkością $\\frac{v}{2}$."
                    },
                    {
                      "title": "(b) Kontrola zachowania pędu i energii kinetycznej",
                      "content": "Pęd po zderzeniu:\n$$p_{\\text{końc}} = m v_A' + 3m v_B' = m\\left(-\\frac{v}{2}\\right) + 3m\\left(\\frac{v}{2}\\right) = -\\frac{1}{2}mv + \\frac{3}{2}mv = mv = p_{\\text{pocz}}$$\nEnergia kinetyczna po zderzeniu:\n$$E_{k,\\text{końc}} = \\frac{1}{2}m(v_A')^2 + \\frac{1}{2}(3m)(v_B')^2 = \\frac{1}{2}m\\left(-\\frac{v}{2}\\right)^2 + \\frac{3}{2}m\\left(\\frac{v}{2}\\right)^2 = \\frac{1}{8}mv^2 + \\frac{3}{8}mv^2 = \\frac{1}{2}mv^2 = E_{k,\\text{pocz}}$$\nObie wielkości są ściśle zachowane."
                    },
                    {
                      "title": "(c) Ułamek energii kinetycznej wózka A",
                      "content": "Energia kinetyczna wózka A po zderzeniu:\n$$E_{kA}' = \\frac{1}{2}m(v_A')^2 = \\frac{1}{2}m\\left(-\\frac{v}{2}\\right)^2 = \\frac{1}{8}mv^2$$\nStosunek do początkowej energii $E_{kA} = \\frac{1}{2}mv^2$:\n$$\\frac{E_{kA}'}{E_{kA}} = \\frac{\\frac{1}{8}mv^2}{\\frac{1}{2}mv^2} = \\frac{1}{4} = 25\\%$$"
                    }
                  ],
                  "answer": "(a) $v_A' = -\\frac{v}{2}$ (wózek A odbija się w lewo z szybkością $v/2$), $v_B' = \\frac{v}{2}$ (wózek B porusza się w prawo z szybkością $v/2$). (b) Pęd wynosi $mv$, energia kinetyczna $\\frac{1}{2}mv^2$ — obie wielkości są zachowane. (c) Przy wózku A pozostaje $\\frac{1}{4}$ ($25\\%$) początkowej energii kinetycznej."
                }
              }
            ]
          },
          {
            "id": "sub-praca-matura",
            "title": "5. Zadania maturalne CKE",
            "shortTitle": "Matura CKE",
            "number": 5,
            "icon": "🎓",
            "desc": "Formuła 2023: autentyczne zadania maturalne CKE z lat 2023–2026 i informatorów maturalnych z pełnymi rozwiązaniami krok po kroku.",
            "formulaCheat": "",
            "tasks": [
              {
                "id": "matura-cke-praca-2026-czerwiec-zad-3",
                "number": 202606,
                "title": "Matura czerwiec 2026 zad. 3 nowa formuła",
                "year": "2026 czerwiec",
                "difficulty": 3,
                "source": "Matura CKE 2026 (Czerwiec – termin dodatkowy)",
                "link": "https://naukagryzie.pl/arkusze/matura-rozszerzona/fizyka/czerwiec-2026-formula-2023-cke/arkusz.pdf",
                "tags": [
                  "Matura CKE",
                  "Praca, moc i energia",
                  "Zderzenia sprężyste i niesprężyste",
                  "Energia kinetyczna"
                ],
                "problem": "<div class=\"task-matura energy-statements\"><h4>Zadanie 3.</h4>\n<p>Klocek A porusza się ze stałą prędkością $\\vec{v}_1$ w stronę nieruchomego klocka B (zobacz rysunek 1.). Do klocka B jest przymocowana sprężyna o współczynniku sprężystości $k$. W pewnym momencie dochodzi do zderzenia klocków. Podczas tego zderzenia sprężyna najpierw jest ściskana, a następnie się rozpręża, w wyniku czego klocek A hamuje, a klocek B przyśpiesza (zobacz rysunki 1.–3.).</p>\n<p>Przyjmij następujące dane i założenia:</p><ul><li>gdy sprężyna jest maksymalnie ściśnięta, to jej odkształcenie względem długości swobodnej oznaczymy jako $\\Delta x_{max}$</li><li>gdy sprężyna jest maksymalnie ściśnięta, to wartości prędkości obu klocków są sobie równe i wynoszą $v_2$</li><li>masy klocków są sobie równe: $m_A=m_B=m$</li></ul>\n<p>oraz</p><ul><li>pomijamy tarcie obu klocków o podłoże oraz opory powietrza</li><li>pomijamy masę sprężyny</li><li>wartość siły sprężystości, z jaką sprężyna działa na klocek, jest wprost proporcjonalna do zmiany długości sprężyny względem jej długości swobodnej</li><li>zderzenie klocków jest idealnie sprężyste.</li></ul>\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-czerwiec-z3-rysunki.png\" alt=\"Rysunki 1.–3. – zderzenie klocków ze sprężyną\" class=\"theory-img\" style=\"max-height:400px;display:block;margin:15px auto;\"></div>\n<h4>Zadanie 3.1. (0–1)</h4><p><strong>Oceń prawdziwość poniższych stwierdzeń. Wybierz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p><table class=\"cke-table\" style=\"width:100%;border-collapse:collapse;margin:15px 0\"><tbody><tr data-correct=\"P\"><td>Gdy sprężyna jest maksymalnie ściśnięta, to wartość siły, z jaką sprężyna działa na klocek A, jest równa wartości siły, z jaką sprężyna działa na klocek B.</td><td class=\"pf-box\" data-pf=\"P\">P</td><td class=\"pf-box\" data-pf=\"F\">F</td></tr><tr data-correct=\"P\"><td>Gdy sprężyna jest maksymalnie ściśnięta, to prędkość względna klocków A i B wynosi zero.</td><td class=\"pf-box\" data-pf=\"P\">P</td><td class=\"pf-box\" data-pf=\"F\">F</td></tr></tbody></table>\n<h4>Zadanie 3.2. (0–4)</h4><p><strong>Wyznacz $\\boldsymbol{\\Delta x_{max}}$ w zależności <u>tylko</u> od: $\\boldsymbol{k}$, $\\boldsymbol{m}$ oraz $\\boldsymbol{v_1}$.</strong></p><p><strong>Zapisz odpowiednie równania i przekształcenia oraz podaj postać wzoru na $\\boldsymbol{\\Delta x_{max}}$.</strong></p></div>",
                "originalTaskId": "matura-cke-2026-czerwiec-zad-3",
                "sourcePages": [
                  8,
                  9
                ],
                "formula": "2023",
                "solution": {
                  "givens": "$m_A = m_B = m$, prędkość początkowa klocka A: $v_1$, klocek B początkowo spoczywa ($v_{B,\\text{pocz}} = 0$), sprężyna o współczynniku sprężystości $k$, brak oporów ruchu i tarcia.",
                  "steps": [
                    {
                      "title": "Zadanie 3.1 – Analiza prawdziwości stwierdzeń (III zasada dynamiki i ruch względny)",
                      "content": "1. Zgodnie z **III zasadą dynamiki Newtona** oraz założeniem o pomijalnej masie sprężyny, siła wywierana przez sprężynę na klocek A ma w każdej chwili dokładnie taką samą wartość jak siła wywierana na klocek B:\n$$F_{s\\to A} = F_{s\\to B} = k\\Delta x$$\nStwierdzenie 1. jest **prawdziwe (P)**.\n\n2. Maksymalne ściśnięcie sprężyny następuje w punkcie zwrotnym odkształcenia – klocki przestają się zbliżać, a jeszcze nie zaczynają oddalać. W tym ułamku sekundy poruszają się z tą samą prędkością chwilową ($v_A = v_B = v_2$), zatem ich prędkość względna wynosi:\n$$v_{\\text{wzgl}} = v_A - v_B = 0$$\nStwierdzenie 2. jest **prawdziwe (P)**."
                    },
                    {
                      "title": "Zadanie 3.2 – Prędkość chwilowa klocków z zasady zachowania pędu",
                      "content": "W płaszczyźnie poziomej na układ nie działają żadne siły zewnętrzne, więc całkowity pęd układu jest zachowany w każdej chwili ruchu:\n$$p_{\\text{pocz}} = p_{\\text{końc}}$$\n$$m v_1 + 0 = (m + m) v_2 = 2m v_2$$\nDzieląc obustronnie przez $2m$, otrzymujemy prędkość obu klocków przy maksymalnym ściśnięciu sprężyny:\n$$v_2 = \\frac{v_1}{2}$$"
                    },
                    {
                      "title": "Zadanie 3.2 – Bilans energii mechanicznej i wyznaczenie odkształcenia $\\Delta x_{\\max}$",
                      "content": "Układ jest izolowany, a ruch odbywa się bez tarcia, więc całkowita energia mechaniczna układu jest zachowana:\n$$E_{\\text{pocz}} = E_{\\text{końc}}$$\nPoczątkowo układ posiada wyłącznie energię kinetyczną klocka A. W chwili maksymalnego odkształcenia sprężyny posiada energię kinetyczną obu klocków oraz energię potencjalną sprężystości sprężyny:\n$$\\frac{1}{2}m v_1^2 = \\frac{1}{2}(2m) v_2^2 + \\frac{1}{2}k(\\Delta x_{\\max})^2$$\nPodstawiamy wyznaczoną prędkość $v_2 = \\frac{v_1}{2}$:\n$$\\frac{1}{2}m v_1^2 = m \\left(\\frac{v_1}{2}\\right)^2 + \\frac{1}{2}k(\\Delta x_{\\max})^2$$\n$$\\frac{1}{2}m v_1^2 = \\frac{1}{4}m v_1^2 + \\frac{1}{2}k(\\Delta x_{\\max})^2$$\nOdejmujemy $\\frac{1}{4}m v_1^2$ od obu stron równania:\n$$\\frac{1}{4}m v_1^2 = \\frac{1}{2}k(\\Delta x_{\\max})^2$$\nMnożymy obustronnie przez 2 i dzielimy przez współczynnik $k$:\n$$(\\Delta x_{\\max})^2 = \\frac{m v_1^2}{2k}$$\nWyciągamy pierwiastek kwadratowy:\n$$\\Delta x_{\\max} = v_1 \\sqrt{\\frac{m}{2k}} \\qquad \\left(\\text{lub } \\sqrt{\\frac{m v_1^2}{2k}}\\right)$$"
                    }
                  ],
                  "answer": "3.1: 1 – Prawda (P), 2 – Prawda (P);\n3.2: $\\Delta x_{\\max} = v_1 \\sqrt{\\frac{m}{2k}}$ (lub $\\sqrt{\\frac{m v_1^2}{2k}}$).",
                  "trap": "W chwili maksymalnego ściśnięcia sprężyny klocki nie zatrzymują się w układzie odniesienia podłoża! Układ porusza się dalej z prędkością środka masy $v_1/2$, więc część energii początkowej pozostaje w energii kinetycznej ruchu postępowego obu klocków.",
                  "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://naukagryzie.pl/arkusze/matura-rozszerzona/fizyka/czerwiec-2026-formula-2023-cke/odpowiedzi.pdf#page=8\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 8–11</a>."
                },
                "solutionSource": {
                  "publisher": "Centralna Komisja Egzaminacyjna",
                  "url": "https://naukagryzie.pl/arkusze/matura-rozszerzona/fizyka/czerwiec-2026-formula-2023-cke/odpowiedzi.pdf",
                  "localFile": "data/arkusze_cke/2026/fizyka-2026-czerwiec-matura-rozszerzona-odpowiedzi.pdf",
                  "pages": [
                    8,
                    11
                  ]
                }
              },
              {
                "id": "matura-cke-praca-2026-maj-zad-2",
                "number": 202605,
                "title": "Matura maj 2026 zad. 2 nowa formuła",
                "year": "2026 maj",
                "difficulty": 3,
                "source": "Matura CKE 2026 (Maj)",
                "link": "https://egzaminy.gov.pl/pliki/5948/697b5fd85d09a542f44987a9a4da5def56779e3dcf2fadd8834faea04277d0ab",
                "tags": [
                  "Matura CKE",
                  "Praca, moc i energia",
                  "Zasada zachowania energii mechanicznej"
                ],
                "problem": "<div class=\"task-matura energy-statements\"><h4>Zadanie 2.</h4>\n<p>Do jednego z końców nierozciągliwej nici o długości $l$ zamocowano niewielkie ciało $\\mathcal{B}$ o masie $m$. Drugi koniec nici jest unieruchomiony w punkcie $S$. Następnie ciało $\\mathcal{B}$ wprawiono w ruch po okręgu o środku w punkcie $S$ <u>w płaszczyźnie pionowej</u>.</p>\n<p>Przyjmij model zjawiska, w którym:</p><ul>\n<li>na ciało $\\mathcal{B}$ podczas ruchu działają dwie siły:<br>$\\vec{F}_g$ – siła grawitacji oraz $\\vec{F}_n$ – siła reakcji nici</li>\n<li>pomijamy wszelkie opory ruchu, masę nici, a ciało $\\mathcal{B}$ traktujemy jako punkt materialny</li>\n<li>ciało $\\mathcal{B}$ porusza się w inercjalnym układzie odniesienia, w jednorodnym, ziemskim polu grawitacyjnym.</li></ul>\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-maj-z2-ruch.png\" alt=\"Ciało na nici w płaszczyźnie pionowej\" class=\"theory-img\" style=\"max-height:260px;display:block;margin:15px auto;\"></div>\n<p>Sytuację ilustruje rysunek powyżej, na którym oznaczono przyśpieszenie ziemskie $\\vec{g}$.</p>\n<h4>Zadanie 2.1. (0–2)</h4><p>Na poniższym rysunku przedstawiono wektory prędkości ciała $\\mathcal{B}$ w dwóch różnych chwilach czasu podczas opisanego ruchu tego ciała po okręgu.</p><p>Długość boku kratki odpowiada umownej jednostce odległości.</p>\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-maj-z2-siatka.png\" alt=\"Rysunek – wektory prędkości na siatce\" class=\"theory-img\" style=\"max-height:400px;display:block;margin:15px auto;\"></div>\n<p><strong>Na rysunku powyżej wyznacz konstrukcyjnie środek okręgu, po którym porusza się ciało $\\boldsymbol{\\mathcal{B}}$. Podpisz środek tego okręgu jako $\\boldsymbol{S}$.</strong></p>\n<p><strong>Zapisz w wykropkowanym miejscu poniżej długość $\\boldsymbol{l}$ promienia tego okręgu. Wyraź tę długość w umownych jednostkach odległości.</strong></p>\n<p>$l =$ ........... długości boku kratki</p><p><em>Uwaga! W tym przykładzie środek $S$ okręgu leży w punkcie kratowym.</em></p>\n<h4>Zadanie 2.2. (0–1)</h4><p><strong>Na którym rysunku (spośród A–D) prawidłowo przedstawiono siły – grawitacji $\\boldsymbol{\\vec{F}_g}$ oraz reakcji nici $\\boldsymbol{\\vec{F}_n}$ – działające na ciało $\\boldsymbol{\\mathcal{B}}$ podczas ruchu po okręgu, gdy przechodzi ono przez najniższe położenie? Wybierz właściwą odpowiedź spośród podanych.</strong></p>\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-maj-z2-opcje.png\" alt=\"Rysunki A–D – siły w najniższym położeniu\" class=\"theory-img\" style=\"max-height:640px;display:block;margin:15px auto;\"></div>\n<div class=\"problem-options-list\" data-correct=\"B\">\n  <div class=\"problem-option-item\" data-option=\"A\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">Rysunek A</span></div>\n  <div class=\"problem-option-item\" data-option=\"B\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">Rysunek B</span></div>\n  <div class=\"problem-option-item\" data-option=\"C\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">Rysunek C</span></div>\n  <div class=\"problem-option-item\" data-option=\"D\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">Rysunek D</span></div>\n</div>\n<h4>Zadanie 2.3. (0–4)</h4><p>Siła $\\vec{F}_n$, z jaką nić działa na ciało $\\mathcal{B}$ podczas jego ruchu po okręgu, zmienia swoją wartość. Największą wartość tej siły oznaczymy jako $F_{n\\,max}$, a najmniejszą – jako $F_{n\\,min}$.</p>\n<p>Dany jest iloraz największej i najmniejszej wartości prędkości ciała $\\mathcal{B}$ podczas jego ruchu po okręgu:</p><p style=\"text-align:center\">$\\frac{v_{max}}{v_{min}}=\\sqrt{3}$</p>\n<p><strong>Oblicz iloraz $\\boldsymbol{\\frac{F_{n\\,max}}{F_{n\\,min}}}$. Zapisz obliczenia.</strong></p></div>",
                "originalTaskId": "matura-cke-2026-maj-zad-2",
                "sourcePages": [
                  6,
                  7,
                  8
                ],
                "formula": "2023",
                "solution": {
                  "givens": "Długość nici (promień okręgu): $l$, masa ciała: $m$, stosunek prędkości skrajnych: $\\frac{v_{\\max}}{v_{\\min}} = \\sqrt{3}$, ruch po okręgu w płaszczyźnie pionowej, brak oporów ruchu.",
                  "steps": [
                    {
                      "title": "Zadanie 2.1 – Konstrukcja środka okręgu i odczyt promienia",
                      "content": "Wektor prędkości w ruchu po okręgu jest w każdej chwili styczny do toru, co oznacza, że promień łączący ciało ze środkiem okręgu $S$ jest zawsze prostopadły do wektora prędkości $\\vec{v}$:\n1. Prowadzimy prostą prostopadłą do wektora prędkości $\\vec{v}_1$ w punkcie jego przyłożenia (pionowo w dół).\n2. Prowadzimy prostą prostopadłą do wektora prędkości $\\vec{v}_2$ w punkcie jego przyłożenia.\n3. Punkt przecięcia obu prostych jednoznacznie wyznacza środek okręgu $S$.\n\nOdliczając kratki pionowo od środka $S$ do punktu zaczepienia wektora $\\vec{v}_1$, odczytujemy promień okręgu:\n$$l = 10\\text{ długości kratek}$$\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-maj-z2-konstrukcja-rozwiazanie.png\" alt=\"Konstrukcja środka i promienia okręgu według klucza CKE\" class=\"theory-img\" style=\"max-height:440px;display:block;margin:15px auto;\"></div>"
                    },
                    {
                      "title": "Zadanie 2.2 – Wybór sił działających w najniższym położeniu",
                      "content": "W najniższym położeniu na ciało działają dwie pionowe siły:\n- siła grawitacji $\\vec{F}_g = m\\vec{g}$ skierowana pionowo w dół,\n- siła reakcji (naciągu) nici $\\vec{F}_n$ skierowana pionowo w górę (w stronę środka okręgu $S$).\n\nAby ciało poruszało się po okręgu, siła wypadkowa musi być skierowana do środka okręgu (w górę) i pełnić rolę siły dośrodkowej:\n$$F_{\\text{doś}} = F_n - F_g = \\frac{m v_{\\max}^2}{l} > 0 \\implies F_n > F_g$$\nWektor siły reakcji nici $\\vec{F}_n$ musi mieć zatem większą długość niż wektor ciężaru $\\vec{F}_g$. Warunek ten spełnia wyłącznie **rysunek B**."
                    },
                    {
                      "title": "Zadanie 2.3 – Równania dynamiki w skrajnych punktach toru",
                      "content": "Zapisujemy II zasadę dynamiki dla składowych sił wzdłuż promienia okręgu w punktach o prędkości maksymalnej i minimalnej:\n- **W najniższym punkcie (prędkość maksymalna $v_{\\max}$):**\n$$F_{n,\\max} - mg = \\frac{m v_{\\max}^2}{l} \\implies F_{n,\\max} = mg + \\frac{m v_{\\max}^2}{l}$$\n- **W najwyższym punkcie (prędkość minimalna $v_{\\min}$):**\nZarówno siła reakcji nici, jak i siła grawitacji działają w dół (w stronę środka $S$):\n$$F_{n,\\min} + mg = \\frac{m v_{\\min}^2}{l} \\implies F_{n,\\min} = \\frac{m v_{\\min}^2}{l} - mg$$"
                    },
                    {
                      "title": "Zadanie 2.3 – Zastosowanie zasady zachowania energii i obliczenie ilorazu sił",
                      "content": "Różnica wysokości między najniższym a najwyższym punktem toru wynosi $h = 2l$. Z zasady zachowania energii mechanicznej:\n$$\\frac{1}{2}m v_{\\max}^2 = \\frac{1}{2}m v_{\\min}^2 + mg(2l)$$\nMnożymy obustronnie przez $\\frac{2}{l}$:\n$$\\frac{m v_{\\max}^2}{l} = \\frac{m v_{\\min}^2}{l} + 4mg$$\nZ treści zadania wiemy, że $v_{\\max} = \\sqrt{3}\\,v_{\\min}$, co oznacza $v_{\\max}^2 = 3v_{\\min}^2$. Podstawiamy:\n$$3\\,\\frac{m v_{\\min}^2}{l} = \\frac{m v_{\\min}^2}{l} + 4mg \\implies 2\\,\\frac{m v_{\\min}^2}{l} = 4mg \\implies \\frac{m v_{\\min}^2}{l} = 2mg$$\nStąd dla prędkości maksymalnej:\n$$\\frac{m v_{\\max}^2}{l} = 3 \\cdot (2mg) = 6mg$$\nObliczamy wartości sił reakcji nici:\n$$F_{n,\\max} = mg + 6mg = 7mg$$\n$$F_{n,\\min} = 2mg - mg = mg$$\nIloraz poszukiwanych sił wynosi:\n$$\\frac{F_{n,\\max}}{F_{n,\\min}} = \\frac{7mg}{mg} = 7$$"
                    }
                  ],
                  "answer": "2.1: Konstrukcja prostych prostopadłych, $l = 10\\text{ długości kratek}$;\n2.2: Poprawny rysunek B ($F_n > F_g$);\n2.3: Iloraz wynosi $\\frac{F_{n,\\max}}{F_{n,\\min}} = 7$.",
                  "trap": "W najwyższym punkcie toru siła ciężkości działa w tym samym zwrocie co siła naciągu nici (w dół, w stronę środka okręgu), dlatego $F_{n,\\min} = \\frac{mv_{\\min}^2}{l} - mg$, a nie ze znakiem plus!",
                  "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2026-maj-matura-rozszerzona-odpowiedzi.pdf#page=10\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 10–14</a>."
                },
                "solutionSource": {
                  "publisher": "Centralna Komisja Egzaminacyjna",
                  "url": "https://arkusze.pl/maturalne/fizyka-2026-maj-matura-rozszerzona-odpowiedzi.pdf",
                  "localFile": "data/arkusze_cke/2026/fizyka-2026-maj-matura-rozszerzona-odpowiedzi.pdf",
                  "pages": [
                    10,
                    14
                  ]
                }
              },
              {
                "id": "matura-cke-praca-2026-styczen-zad-2",
                "number": 202601,
                "title": "Matura próbna styczeń 2026 zad. 2 nowa formuła",
                "year": "2026 styczeń próbna",
                "difficulty": 3,
                "source": "Matura próbna CKE 2026 (Styczeń)",
                "link": "https://arkusze.pl/maturalne/fizyka-2026-styczen-probna-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Praca, moc i energia",
                  "Zderzenia sprężyste i niesprężyste",
                  "Energia kinetyczna"
                ],
                "problem": "<div class=\"task-matura energy-statements\">\n<h4>Zadanie 2.</h4>\n<p>Kula K1 o masie $m_1$ porusza się z prędkością $\\vec{v}_1$ a kula K2 o masie $m_2$ spoczywa. Wektor $\\vec{v}_1$ jest skierowany w stronę środka kuli K2. Sytuację ilustruje rysunek 1.</p>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-styczen-z2-rys1.png\" alt=\"Rysunek 1. – kule K1 i K2\" class=\"theory-img\" style=\"max-height:170px;display:block;margin:15px auto;\"></div>\n\n<p>W pewnej chwili kula K1 uderzyła w kulę K2. W wyniku tego obie kule uzyskały prędkości o przeciwnych zwrotach i <u>o tych samych wartościach</u>. Sytuację ilustruje rysunek 2.</p>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-styczen-z2-rys2.png\" alt=\"Rysunek 2. – kule K1 i K2\" class=\"theory-img\" style=\"max-height:170px;display:block;margin:15px auto;\"></div>\n\n<p>Przyjmujemy model zjawiska, w którym:</p>\n<ul>\n<li>opisany ruch kul odbywa się w inercjalnym układzie odniesienia</li>\n<li>przed zderzeniem i po zderzeniu kule poruszają się ruchem jednostajnym prostoliniowym</li>\n<li>zderzenie kul jest idealnie sprężyste</li>\n<li>kule oddziałują ze sobą tylko podczas zderzenia</li>\n<li>kule się nie obracają.</li>\n</ul>\n\n<h4>Zadanie 2.1. (0–1)</h4>\n<p><strong>Na rysunku 3. poniżej narysuj parę sił wzajemnego oddziaływania między kulami podczas ich zderzenia. Każdą z sił przyłóż – odpowiednio – w środku kuli K1 lub środku kuli K2. Zachowaj odpowiednie kierunki i zwroty tych sił oraz relację (większy, równy, mniejszy) między ich wartościami.</strong></p>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-styczen-z2-rys3.png\" alt=\"Rysunek 3. – kule K1 i K2\" class=\"theory-img\" style=\"max-height:330px;display:block;margin:15px auto;\"></div>\n\n<h4>Zadanie 2.2. (0–4)</h4>\n<p><strong>Oblicz iloraz $\\boldsymbol{\\frac{m_2}{m_1}}$ mas tych kul. Zapisz obliczenia. W rozwiązaniu zapisz równania wynikające z zasad zachowania odpowiednich wielkości.</strong></p>\n</div>",
                "originalTaskId": "matura-cke-2026-styczen-zad-2",
                "sourcePages": [
                  6,
                  7
                ],
                "formula": "2023",
                "solution": {
                  "givens": "Kula K1 o masie $m_1$ z prędkością początkową $v_1$, kula K2 o masie $m_2$ początkowo spoczywa ($v_{2,\\text{pocz}} = 0$). Zderzenie sprężyste centralne. Po zderzeniu obie kule mają tę samą wartość prędkości $v_2$, lecz przeciwne zwroty ($v_1' = -v_2$, $v_2' = +v_2$).",
                  "steps": [
                    {
                      "title": "Zadanie 2.1 – Wektory sił wzajemnego oddziaływania kul (III zasada dynamiki)",
                      "content": "W chwili zderzenia kule oddziałują na siebie siłami sprężystości:\n- Siła $\\vec{F}_{21}$ (wywierana na kulę K1 przez kulę K2) jest zaczepiona w środku kuli K1 i skierowana poziomo w lewo (wyhamowuje kulę K1).\n- Siła $\\vec{F}_{12}$ (wywierana na kulę K2 przez kulę K1) jest zaczepiona w środku kuli K2 i skierowana poziomo w prawo (rozpędza kulę K2).\n\nZgodnie z **III zasadą dynamiki Newtona** siły te tworzą parę akcja–reakcja: leżą na prostej łączącej środki kul, mają przeciwne zwroty oraz **dokładnie równe wartości** ($|\\vec{F}_{21}| = |\\vec{F}_{12}|$), bez względu na relację między masami kul!\nOba wektory rysujemy zaczepione w środkach kul z zachowaniem identycznej długości (np. 5 kratek w kluczu CKE):\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-styczen-z2-sily-rozwiazanie.png\" alt=\"Rysunek wektorów sił według klucza CKE\" class=\"theory-img\" style=\"max-height:280px;display:block;margin:15px auto;\"></div>"
                    },
                    {
                      "title": "Zadanie 2.2 – Zasada zachowania pędu i zderzenie sprężyste",
                      "content": "Przyjmujemy oś $x$ skierowaną w prawo.\n1. **Zasada zachowania pędu:**\n$$p_{\\text{pocz}} = p_{\\text{końc}}$$\n$$m_1 v_1 + 0 = -m_1 v_2 + m_2 v_2$$\nGrupujemy wyrazy z masą $m_1$:\n$$m_1 (v_1 + v_2) = m_2 v_2 \\implies \\frac{m_2}{m_1} = \\frac{v_1 + v_2}{v_2} = \\frac{v_1}{v_2} + 1 \\quad \\text{(Równanie 1)}$$\n\n2. **Zasada zachowania energii kinetycznej (zderzenie sprężyste):**\n$$E_{k,\\text{pocz}} = E_{k,\\text{końc}}$$\n$$\\frac{1}{2}m_1 v_1^2 + 0 = \\frac{1}{2}m_1 v_2^2 + \\frac{1}{2}m_2 v_2^2$$\nMnożymy obustronnie przez 2 i przenosimy wyrazy z $m_1$ na lewą stronę:\n$$m_1 (v_1^2 - v_2^2) = m_2 v_2^2 \\implies \\frac{m_2}{m_1} = \\frac{v_1^2 - v_2^2}{v_2^2} = \\left(\\frac{v_1}{v_2}\\right)^2 - 1 \\quad \\text{(Równanie 2)}$$"
                    },
                    {
                      "title": "Zadanie 2.2 – Wyznaczenie ilorazu mas $\\frac{m_2}{m_1}$",
                      "content": "Przyrównujemy prawe strony Równania 1 i Równania 2:\n$$\\frac{v_1}{v_2} + 1 = \\left(\\frac{v_1}{v_2}\\right)^2 - 1$$\nRozpisujemy prawą stronę ze wzoru skróconego mnożenia na różnicę kwadratów: $\\left(\\frac{v_1}{v_2}\\right)^2 - 1 = \\left(\\frac{v_1}{v_2} - 1\\right)\\left(\\frac{v_1}{v_2} + 1\\right)$:\n$$\\frac{v_1}{v_2} + 1 = \\left(\\frac{v_1}{v_2} - 1\\right)\\left(\\frac{v_1}{v_2} + 1\\right)$$\nPonieważ $v_1 + v_2 > 0$, możemy podzielić obie strony przez $\\left(\\frac{v_1}{v_2} + 1\\right)$:\n$$1 = \\frac{v_1}{v_2} - 1 \\implies \\frac{v_1}{v_2} = 2$$\nPodstawiamy obliczony stosunek $\\frac{v_1}{v_2} = 2$ do Równania 1:\n$$\\frac{m_2}{m_1} = \\frac{v_1}{v_2} + 1 = 2 + 1 = 3$$"
                    }
                  ],
                  "answer": "2.1: Wektory sił $\\vec{F}_{21}$ i $\\vec{F}_{12}$ zaczepione w środkach kul, o jednakowych długościach i przeciwnych zwrotach;\n2.2: Iloraz mas wynosi $\\frac{m_2}{m_1} = 3$.",
                  "trap": "Częsty błąd na maturze to rysowanie dłuższego wektora siły dla kuli o większej masie. III zasada dynamiki Newtona gwarantuje bezwzględną równość wartości sił akcji i reakcji ($|\\vec{F}_{21}| = |\\vec{F}_{12}|$)!",
                  "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2026-styczen-probna-rozszerzona-odpowiedzi.pdf#page=8\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 8–12</a>."
                },
                "solutionSource": {
                  "publisher": "Centralna Komisja Egzaminacyjna",
                  "url": "https://arkusze.pl/maturalne/fizyka-2026-styczen-probna-rozszerzona-odpowiedzi.pdf",
                  "localFile": "data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona-odpowiedzi.pdf",
                  "pages": [
                    8,
                    12
                  ]
                }
              },
              {
                "id": "matura-cke-praca-2023-czerwiec-zad-2",
                "number": 202306,
                "title": "Matura czerwiec 2023 zad. 2 nowa formuła",
                "year": "2023 czerwiec",
                "difficulty": 3,
                "source": "Matura CKE 2023 (Czerwiec - Termin dodatkowy)",
                "link": "https://arkusze.pl/maturalne/fizyka-2023-czerwiec-matura-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Praca, moc i energia",
                  "Zderzenia sprężyste i niesprężyste",
                  "Energia kinetyczna"
                ],
                "problem": "<div class=\"task-matura energy-statements\">\n<h4>Zadanie 2.</h4>\n<p>Dwie identyczne kule K1 i K2, każda o masie $m$, poruszają się naprzeciwko siebie w inercjalnym układzie odniesienia $\\mathcal{U}$ z prędkościami $\\vec{v}_1$ (kula K1) oraz $\\vec{v}_2$ (kula K2). Środki kul poruszają się wzdłuż prostej $l$. Wartości prędkości tych kul przed zderzeniem spełniają równanie:</p>\n<p style=\"text-align:center;\">$v_1 = 2v_2$</p>\n<p>Sytuację przed zderzeniem kul ilustruje rysunek poniżej.</p>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/2023-czerwiec-z2-rys1.png\" alt=\"Kule K1 i K2 przed zderzeniem\" class=\"theory-img\" style=\"max-height:105px;display:block;margin:15px auto;\"></div>\n\n<h4>Zadanie 2.1. (0–1)</h4>\n<p>Załóżmy, że zderzenie kul K1 i K2 było <u>doskonale sprężyste</u>. Pomijamy siły tarcia.</p>\n<p><strong>Na którym rysunku (A–D) prawidłowo narysowano i oznaczono wektory prędkości kul bezpośrednio po zderzeniu w układzie odniesienia $\\boldsymbol{\\mathcal{U}}$? Zaznacz właściwą odpowiedź spośród podanych.</strong></p>\n<p><em>Wskazówka! Długości wektorów odpowiadają wartościom prędkości kul.</em> W zadaniu nie trzeba <em>wykonywać obliczeń – wystarczy sprawdzić, czy spełnione są zasady zachowania</em> odpowiednich <em>wielkości fizycznych.</em></p>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/2023-czerwiec-z2-opcje.png\" alt=\"Odpowiedzi A–D – wektory prędkości po zderzeniu\" class=\"theory-img\" style=\"max-height:450px;display:block;margin:15px auto;\"></div>\n<div class=\"problem-options-list\" data-correct=\"B\">\n  <div class=\"problem-option-item\" data-option=\"A\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">Rysunek A</span></div>\n  <div class=\"problem-option-item\" data-option=\"B\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">Rysunek B</span></div>\n  <div class=\"problem-option-item\" data-option=\"C\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">Rysunek C</span></div>\n  <div class=\"problem-option-item\" data-option=\"D\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">Rysunek D</span></div>\n</div>\n\n<h4>Zadanie 2.2. (0–4)</h4>\n<p>Załóżmy, że w wyniku innej realizacji tego zderzenia obie kule <u>połączyły się trwale</u>.</p>\n<p><strong>Oblicz, jaką część początkowej (przed zderzeniem) łącznej energii kinetycznej ruchu postępowego <u>utracił</u> układ kul w wyniku takiego zderzenia.</strong></p>\n</div>",
                "originalTaskId": "matura-cke-2023-czerwiec-zad-2",
                "sourcePages": [
                  7,
                  8
                ],
                "formula": "2023",
                "solution": {
                  "givens": "Masy kul: $m_1 = m_2 = m$, prędkości początkowe: $\\vec{v}_1$ o wartości $2v_2$ (skierowana w prawo), $\\vec{v}_2$ o wartości $v_2$ (skierowana w lewo, czyli $v_1 = 2v_2$).",
                  "steps": [
                    {
                      "title": "Zadanie 2.1 – Centralne zderzenie sprężyste ciał o jednakowych masach",
                      "content": "Dla centralnego zderzenia idealnie sprężystego ciał o identycznych masach ($m_1 = m_2$) z zasad zachowania pędu i energii wynika reguła wymiany prędkości wraz ze zwrotami:\n$$\\vec{v}_1' = \\vec{v}_2 \\qquad \\text{oraz} \\qquad \\vec{v}_2' = \\vec{v}_1$$\nOznacza to, że po zderzeniu:\n- kula K1 przejmuje wektor prędkości kuli K2: porusza się w lewo z szybkością $v_2$,\n- kula K2 przejmuje wektor prędkości kuli K1: porusza się w prawo z szybkością $2v_2$.\n\nRelację tę poprawnie przedstawia **rysunek B**."
                    },
                    {
                      "title": "Zadanie 2.2 – Wyznaczenie prędkości po sczepieniu z zasady zachowania pędu",
                      "content": "W zderzeniu niesprężystym (kule trwale się łączą) całkowity pęd układu jest ściśle zachowany. Przyjmując oś $x$ skierowaną w prawo:\n$$p_{\\text{pocz}} = p_{\\text{końc}}$$\n$$m v_1 - m v_2 = (m + m) u$$\nPodstawiamy $v_1 = 2v_2$:\n$$m(2v_2) - m v_2 = 2m u \\implies m v_2 = 2m u \\implies u = \\frac{v_2}{2} = 0{,}5\\,v_2$$\nPołączone kule poruszają się w prawo ze wspólną prędkością $u = \\frac{v_2}{2}$."
                    },
                    {
                      "title": "Zadanie 2.2 – Obliczenie utraconej części energii kinetycznej",
                      "content": "1. Obliczamy całkowitą początkową energię kinetyczną obu kul:\n$$E_{k,\\text{pocz}} = \\frac{1}{2}m v_1^2 + \\frac{1}{2}m v_2^2 = \\frac{1}{2}m(2v_2)^2 + \\frac{1}{2}m v_2^2 = \\frac{4}{2}m v_2^2 + \\frac{1}{2}m v_2^2 = \\frac{5}{2}m v_2^2 = 2{,}5\\,m v_2^2$$\n2. Obliczamy energię kinetyczną połączonego układu po zderzeniu:\n$$E_{k,\\text{końc}} = \\frac{1}{2}(2m) u^2 = m u^2 = m \\left(\\frac{v_2}{2}\\right)^2 = \\frac{1}{4}m v_2^2 = 0{,}25\\,m v_2^2$$\n3. Obliczamy ubytek energii kinetycznej:\n$$\\Delta E_k = E_{k,\\text{pocz}} - E_{k,\\text{końc}} = 2{,}5\\,m v_2^2 - 0{,}25\\,m v_2^2 = 2{,}25\\,m v_2^2 = \\frac{9}{4}m v_2^2$$\n4. Wyznaczamy stosunek utraconej energii do energii początkowej:\n$$\\frac{\\Delta E_k}{E_{k,\\text{pocz}}} = \\frac{2{,}25\\,m v_2^2}{2{,}5\\,m v_2^2} = \\frac{2{,}25}{2{,}5} = \\frac{9}{10} = 0{,}90 = 90\\%$$"
                    }
                  ],
                  "answer": "2.1: Poprawny rysunek B;\n2.2: Układ utracił $\\frac{9}{10}$ (czyli $0{,}90$ lub $90\\%$) początkowej energii kinetycznej.",
                  "trap": "Nie wolno dodawać prędkości skalarnie przy wyznaczaniu pędu – kule poruszają się naprzeciwko siebie, więc pędy mają przeciwne zwroty: $p_{\\text{pocz}} = m(2v_2) - mv_2 = mv_2$, a nie $3mv_2$!",
                  "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2023-czerwiec-matura-rozszerzona-odpowiedzi.pdf#page=7\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 7–10</a>."
                },
                "solutionSource": {
                  "publisher": "Centralna Komisja Egzaminacyjna",
                  "url": "https://arkusze.pl/maturalne/fizyka-2023-czerwiec-matura-rozszerzona-odpowiedzi.pdf",
                  "localFile": "data/arkusze_cke/2023/fizyka-2023-czerwiec-matura-rozszerzona-odpowiedzi.pdf",
                  "pages": [
                    7,
                    10
                  ]
                }
              },
              {
                "id": "matura-cke-praca-2023-maj-zad-2",
                "number": 202305,
                "title": "Matura maj 2023 zad. 2 nowa formuła",
                "year": "2023 maj",
                "difficulty": 3,
                "source": "Matura CKE 2023 (Maj)",
                "link": "https://arkusze.pl/maturalne/fizyka-2023-maj-matura-rozszerzona.pdf",
                "tags": [
                  "Matura CKE",
                  "Praca, moc i energia",
                  "Zderzenia sprężyste i niesprężyste",
                  "Energia kinetyczna"
                ],
                "problem": "<div class=\"task-matura energy-statements\">\n<h4>Zadanie 2.</h4>\n<p>Krążek K1 porusza się w inercjalnym układzie odniesienia $\\mathcal{U}$ ze stałą prędkością $\\vec{v}$, a krążek K2 spoczywa. Środek krążka K2 leży poza prostą wyznaczającą kierunek ruchu krążka K1. W pewnej chwili krążek K1 uderza w krążek K2.</p>\n<p>Na rysunku 1. w kartezjańskim układzie współrzędnych $(x, y)$ przedstawiono poruszający się krążek K1 i spoczywający krążek K2. Oznaczono prędkość $\\vec{v}$ krążka K1 i składowe $\\vec{v}_x, \\vec{v}_y$ tej prędkości. Na rysunku 2. przedstawiono moment zderzenia się obu krążków.</p>\n<p>Krążki są jednorodne, a ich masy <u>są sobie równe.</u> Pomijamy tarcie między krążkami K1 i K2 oraz między krążkami a podłożem.</p>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/2023-maj-z2-rys1.png\" alt=\"Rysunek 1. – krążki K1 i K2\" class=\"theory-img\" style=\"max-height:360px;display:block;margin:15px auto;\"></div>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/2023-maj-z2-rys2.png\" alt=\"Rysunek 2. – krążki K1 i K2\" class=\"theory-img\" style=\"max-height:360px;display:block;margin:15px auto;\"></div>\n<h4>Zadanie 2.1. (0–1)</h4>\n<p><strong>Na rysunku 2. powyżej narysuj parę sił wzajemnego oddziaływania pomiędzy krążkami podczas ich zderzenia. Każdą z sił przyłóż – odpowiednio – w punkcie środka masy krążka K1 lub krążka K2. Zachowaj odpowiednie kierunki i zwroty tych sił oraz relację (większy, równy, mniejszy) między ich wartościami.</strong></p>\n\n\n\n<h4>Zadanie 2.2. (0–1)</h4>\n<p>Załóżmy, że zderzenie krążków K1 i K2 było <u>doskonale sprężyste</u>.</p>\n<p><strong>Na którym rysunku (spośród A–D) prawidłowo narysowano i opisano wektory prędkości krążków bezpośrednio po zderzeniu w układzie odniesienia $\\boldsymbol{\\mathcal{U}}$? Zaznacz właściwą odpowiedź spośród podanych.</strong></p>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/2023-maj-z2-opcje.png\" alt=\"Rysunki A–D – wektory prędkości po zderzeniu\" class=\"theory-img\" style=\"max-height:720px;display:block;margin:15px auto;\"></div>\n<div class=\"problem-options-list\" data-correct=\"C\">\n  <div class=\"problem-option-item\" data-option=\"A\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">Rysunek A</span></div>\n  <div class=\"problem-option-item\" data-option=\"B\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">Rysunek B</span></div>\n  <div class=\"problem-option-item\" data-option=\"C\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">Rysunek C</span></div>\n  <div class=\"problem-option-item\" data-option=\"D\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">Rysunek D</span></div>\n</div>\n</div>",
                "originalTaskId": "matura-cke-2023-maj-zad-2",
                "sourcePages": [
                  6,
                  7
                ],
                "formula": "2023",
                "solution": {
                  "givens": "Jednakowe masy krążków: $m_1 = m_2 = m$, krążek K2 początkowo spoczywa w początku układu współrzędnych, brak oporów i tarcia, zderzenie idealnie sprężyste. Linia środków w chwili zderzenia równoległa do osi $x$.",
                  "steps": [
                    {
                      "title": "Zadanie 2.1 – Wektory sił wzajemnego oddziaływania krążków",
                      "content": "W chwili zderzenia brak tarcia sprawia, że siły kontaktowe działają ściśle w kierunku normalnym (prostopadłym do powierzchni styku), czyli wzdłuż prostej łączącej środki obu krążków (kierunek osi $x$):\n- Siła $\\vec{F}_{12}$ (działająca na krążek K1 od krążka K2): zaczepiona w środku krążka K1 i skierowana poziomo w lewo (wzdłuż osi $x$).\n- Siła $\\vec{F}_{21}$ (działająca na krążek K2 od krążka K1): zaczepiona w środku krążka K2 i skierowana poziomo w prawo (wzdłuż osi $x$).\n\nZgodnie z **III zasadą dynamiki Newtona** siły te leżą na jednej prostej, mają przeciwne zwroty oraz **równe wartości** ($|\\vec{F}_{12}| = |\\vec{F}_{21}|$). Wektory rysujemy poziomo o jednakowej długości (4 kratki według klucza CKE):\n<div class=\"chart-container-svg\"><img src=\"img/energy/2023-maj-z2-sily-rozwiazanie.png\" alt=\"Siły działające podczas zderzenia krążków według klucza CKE\" class=\"theory-img\" style=\"max-height:340px;display:block;margin:15px auto;\"></div>"
                    },
                    {
                      "title": "Zadanie 2.2 – Rozkład ruchu na osie i wektory prędkości po zderzeniu",
                      "content": "Rozkładamy ruch na kierunek prostopadły do powierzchni styku (oś $x$ – kierunek normalny) oraz kierunek styczny (oś $y$):\n1. **Wzdłuż osi $y$ (stycznej):** Nie działa żadna siła ($F_y = 0$). Zatem krążek K2 nie uzyskuje składowej prędkości pionowej ($v_{2y}' = 0$), a składowa pionowa prędkości krążka K1 pozostaje całkowicie niezmieniona:\n$$\\vec{v}_{1y}' = \\vec{v}_{1y} = -v_y$$\n2. **Wzdłuż osi $x$ (normalnej):** Zachodzi sprężyste zderzenie centralne ciał o identycznych masach. Ciała wymieniają się prędkościami w tej osi:\n- krążek K1 wyhamowuje do zera w osi $x$: $v_{1x}' = 0$,\n- spoczywający początkowo krążek K2 przejmuje całą składową prędkości poziomej: $v_{2x}' = v_x$.\n\n3. **Podsumowanie wektorów po zderzeniu:**\n- Krążek K1 ma wyłącznie prędkość pionową w dół: $\\vec{v}_1' = [0; -v_y]$,\n- Krążek K2 ma wyłącznie prędkość poziomą w prawo: $\\vec{v}_2' = [v_x; 0]$.\n\nWarunek ten idealnie spełnia **rysunek C**."
                    }
                  ],
                  "answer": "2.1: Wektory sił $\\vec{F}_{12}$ i $\\vec{F}_{21}$ leżą na linii środków krążków (oś $x$), mają jednakowe długości i przeciwne zwroty;\n2.2: Poprawny rysunek C.",
                  "trap": "Uderzany krążek K2 może uzyskać prędkość wyłącznie w kierunku działającej na niego siły normalnej (w prawo wzdłuż linii środków). Przy braku tarcia nie ma możliwości przekazania żadnego pędu w osi pionowej (stycznej)!",
                  "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2023-maj-matura-rozszerzona-odpowiedzi.pdf#page=8\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 8–9</a>."
                },
                "solutionSource": {
                  "publisher": "Centralna Komisja Egzaminacyjna",
                  "url": "https://arkusze.pl/maturalne/fizyka-2023-maj-matura-rozszerzona-odpowiedzi.pdf",
                  "localFile": "data/arkusze_cke/2023/fizyka-2023-maj-matura-rozszerzona-odpowiedzi.pdf",
                  "pages": [
                    8,
                    9
                  ]
                }
              },
              {
                "id": "matura-cke-praca-informator-2025-zad-2",
                "number": 202501,
                "title": "Informator CKE 2025 zad. 2 nowa formuła",
                "year": "Informator 2025",
                "difficulty": 3,
                "source": "Informator CKE od roku szkolnego 2024/2025",
                "link": "https://bip.cke.gov.pl/attachments/download/10000",
                "tags": [
                  "Matura CKE",
                  "Praca, moc i energia",
                  "Zderzenia sprężyste i niesprężyste",
                  "Energia kinetyczna"
                ],
                "problem": "<div class=\"task-matura energy-statements\"><h4>Zadanie 2. Spadająca kulka</h4>\n<p>Pionowo w dół rzucono metalową kulkę o masie $m=0{,}250\\text{ kg}$. Na wysokości $h=1{,}80\\text{ m}$ ponad podłożem, w chwili $t_0=0\\text{ s}$, kulka osiągnęła prędkość o wartości $v_0=3{,}20\\text{ m/s}$. Licząc od wysokości $h$, aż do podłoża, kulka spadała swobodnie i się nie obracała. Po upadku na twarde podłoże kulka odbiła się od niego, a czas oddziaływania (zderzenia) kulki z podłożem był równy $\\Delta t=5{,}00\\cdot10^{-3}\\text{ s}$. Podczas pierwszego zderzenia z podłożem kulka straciła 25% swojej energii mechanicznej.</p>\n<p>Do analizy zjawiska przyjmij jego uproszczony model, w którym:</p><ul><li>pomiń opory powietrza podczas ruchu kulki;</li><li>załóż, że siła $\\vec{F}_R$ reakcji podłoża działająca na kulkę podczas zderzenia była stała;</li><li>przyjmij do obliczeń wartość przyśpieszenia ziemskiego równą $g=9{,}81\\text{ m/s}^2$.</li></ul>\n<h4>Zadanie 2.1. (0–2)</h4><p><strong>Na podstawie danych przedstawionych w opisie zadania 2. oblicz czas trwania ruchu kulki od chwili $\\boldsymbol{t_0=0\\text{ s}}$ do chwili pierwszego uderzenia w podłoże. Zapisz obliczenia.</strong></p>\n<h4>Zadanie 2.2. (0–2)</h4><p><strong>Wykaż, że wartość prędkości uzyskanej przez kulkę tuż przed pierwszym uderzeniem w podłoże wynosi $\\boldsymbol{v_1\\approx6{,}75\\text{ m/s}}$.</strong></p>\n<h4>Zadanie 2.3. (0–3)</h4><p><strong>Oblicz wartość siły <u>reakcji podłoża</u> działającej na kulkę podczas zderzenia kulki z podłożem. Zapisz obliczenia.</strong></p>\n<p>Wskazówka: możesz skorzystać z faktu, że wartość prędkości uzyskana przez kulkę tuż przed uderzeniem w podłoże wynosi $v_1\\approx6{,}75\\text{ m/s}$.</p></div>",
                "originalTaskId": "matura-cke-informator-2025-zad-2",
                "sourcePages": [
                  15,
                  16,
                  18
                ],
                "formula": "2023",
                "solution": {
                  "givens": "Masa kulki: $m = 0{,}250\\text{ kg}$, wysokość początkowa: $h = 1{,}80\\text{ m}$, prędkość początkowa: $v_0 = 3{,}20\\text{ m/s}$ (skierowana pionowo w dół), czas zderzenia z podłożem: $\\Delta t = 5{,}00 \\cdot 10^{-3}\\text{ s}$, przyśpieszenie ziemskie: $g = 9{,}81\\text{ m/s}^2$, strata energii mechanicznej przy odbiciu: $25\\%$.",
                  "steps": [
                    {
                      "title": "Zadanie 2.1 – Obliczenie czasu spadania kulki",
                      "content": "Kierujemy oś pionową w dół z początkiem na wysokości wyrzutu. Równanie drogi w ruchu jednostajnie przyspieszonym z prędkością początkową $v_0$:\n$$h = v_0 t + \\frac{1}{2}gt^2 \\implies \\frac{1}{2}gt^2 + v_0 t - h = 0$$\nPodstawiamy wartości liczbowe w jednostkach SI:\n$$4{,}905\\,t^2 + 3{,}20\\,t - 1{,}80 = 0$$\nObliczamy wyróżnik trójmianu kwadratowego $\\Delta$:\n$$\\Delta = (3{,}20)^2 - 4 \\cdot 4{,}905 \\cdot (-1{,}80) = 10{,}24 + 35{,}316 = 45{,}556$$\n$$\\sqrt{\\Delta} \\approx 6{,}7495$$\nWybieramy pierwiastek dodatni (czas $t > 0$):\n$$t = \\frac{-3{,}20 + 6{,}7495}{2 \\cdot 4{,}905} = \\frac{3{,}5495}{9{,}81} \\approx 0{,}362\\text{ s} \\approx 0{,}36\\text{ s}$$"
                    },
                    {
                      "title": "Zadanie 2.2 – Wykazanie prędkości tuż przed uderzeniem z zasady zachowania energii",
                      "content": "Przyjmując poziom zerowy energii potencjalnej na powierzchni podłoża ($h = 0$), całkowita energia mechaniczna kulki jest zachowana (brak oporów powietrza):\n$$E_{\\text{mech},\\text{góra}} = E_{\\text{mech},\\text{dół}}$$\n$$\\frac{1}{2}m v_0^2 + mgh = \\frac{1}{2}m v_1^2$$\nDzielimy obustronnie przez masę $m$ i mnożymy przez 2:\n$$v_1^2 = v_0^2 + 2gh \\implies v_1 = \\sqrt{v_0^2 + 2gh}$$\nPodstawiamy dane liczbowe:\n$$v_1 = \\sqrt{(3{,}20\\text{ m/s})^2 + 2 \\cdot 9{,}81\\text{ m/s}^2 \\cdot 1{,}80\\text{ m}} = \\sqrt{10{,}24 + 35{,}316} = \\sqrt{45{,}556} \\approx 6{,}7495\\text{ m/s} \\approx 6{,}75\\text{ m/s}$$\n*(co należało wykazać).*"
                    },
                    {
                      "title": "Zadanie 2.3 – Prędkość po odbiciu i siła reakcji podłoża z II zasady dynamiki",
                      "content": "1. **Prędkość kulki tuż po odbiciu $v_2$:**\nKulka straciła $25\\%$ energii kinetycznej, więc po odbiciu zachowała $75\\%$ energii początkowej:\n$$E_{k2} = 0{,}75\\,E_{k1} \\implies \\frac{1}{2}m v_2^2 = 0{,}75 \\cdot \\left(\\frac{1}{2}m v_1^2\\right) \\implies v_2 = \\sqrt{0{,}75}\\,v_1$$\n$$v_2 = \\sqrt{0{,}75} \\cdot 6{,}7495\\text{ m/s} \\approx 0{,}8660 \\cdot 6{,}7495\\text{ m/s} \\approx 5{,}845\\text{ m/s}$$\n\n2. **Dynamika zderzenia kulki z podłożem:**\nPodczas kontaktu z podłożem na kulkę działają dwie siły: siła reakcji podłoża $\\vec{F}_R$ (skierowana pionowo w górę) oraz grawitacja $m\\vec{g}$ (w dół). Siła wypadkowa wynosi:\n$$F_{\\text{wyp}} = F_R - mg$$\nZ II zasady dynamiki Newtona w postaci pędowej (twierdzenie o impulsie siły i zmianie pędu):\n$$F_{\\text{wyp}} \\cdot \\Delta t = \\Delta p = m v_2 - (-m v_1) = m(v_1 + v_2)$$\n$$(F_R - mg) \\cdot \\Delta t = m(v_1 + v_2) \\implies F_R = mg + \\frac{m(v_1 + v_2)}{\\Delta t}$$\nPodstawiamy wartości liczbowe:\n$$mg = 0{,}250\\text{ kg} \\cdot 9{,}81\\text{ m/s}^2 = 2{,}4525\\text{ N}$$\n$$\\frac{m(v_1 + v_2)}{\\Delta t} = \\frac{0{,}250\\text{ kg} \\cdot (6{,}7495\\text{ m/s} + 5{,}845\\text{ m/s})}{0{,}005\\text{ s}} = 50 \\cdot 12{,}5945\\text{ N} \\approx 629{,}7\\text{ N}$$\n$$F_R = 2{,}45\\text{ N} + 629{,}7\\text{ N} \\approx 632{,}2\\text{ N} \\approx 632\\text{ N}$$"
                    }
                  ],
                  "answer": "2.1: Czas spadania wynosi $t \\approx 0{,}36\\text{ s}$ (dokładnie $0{,}362\\text{ s}$);\n2.2: Wykazano $v_1 = \\sqrt{v_0^2 + 2gh} \\approx 6{,}75\\text{ m/s}$;\n2.3: Siła reakcji podłoża wynosi $F_R \\approx 632\\text{ N}$.",
                  "trap": "Siła reakcji podłoża $F_R$ to nie jest sama siła wypadkowa! Podłoże musi nie tylko wyhamować kulkę i odbić ją w górę, ale również zrównoważyć stale działający ciężar kulki: $F_R = mg + \\frac{m(v_1 + v_2)}{\\Delta t}$.",
                  "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://bip.cke.gov.pl/attachments/download/10000#page=15\" target=\"_blank\" rel=\"noopener noreferrer\">Informator CKE – rozwiązania, s. 15–19</a>."
                },
                "solutionSource": {
                  "publisher": "Centralna Komisja Egzaminacyjna",
                  "url": "https://bip.cke.gov.pl/attachments/download/10000",
                  "localFile": "data/arkusze_cke/informatory/informator-maturalny-fizyka-2025.pdf",
                  "pages": [
                    15,
                    19
                  ]
                }
              },
              {
                "id": "matura-cke-praca-informator-2025-zad-3",
                "number": 202501,
                "title": "Informator CKE 2025 zad. 3 nowa formuła",
                "year": "Informator 2025",
                "difficulty": 3,
                "source": "Informator CKE od roku szkolnego 2024/2025",
                "link": "https://bip.cke.gov.pl/attachments/download/10000",
                "tags": [
                  "Matura CKE",
                  "Praca, moc i energia",
                  "Zderzenia sprężyste i niesprężyste",
                  "Energia kinetyczna"
                ],
                "problem": "<div class=\"task-matura energy-statements\">\n<h4>Zadanie 3. Zderzenie ciał</h4>\n<p>Ciało A o masie $200\\text{ g}$ poruszało się na poduszce powietrznej bez oporów ruchu i następnie zderzyło się z początkowo nieruchomym ciałem B. Po zderzeniu oba ciała dalej poruszały się bez oporów ruchu. Ruch ciał przed zderzeniem i po zderzeniu odbywał się w płaszczyźnie poziomej.</p>\n<p>Opisany ruch fotografowano z góry, a zdjęcia nałożono na siebie i uzyskano poniższy diagram. Kolejne zdjęcia wykonywano w jednakowych odstępach czasu i oznaczono numerami 1–6. Położenia ciała A w chwilach 1–6 oznaczono A<sub>1</sub>–A<sub>6</sub>, analogiczne położenia ciała B oznaczono B<sub>1</sub>–B<sub>6</sub>. (Zapis na diagramie B<sub>1</sub>–B<sub>3</sub> oznacza, że te położenia się pokrywały).</p>\n<p>Przyjmij, że ruch przedstawiony na diagramie odbywa się w układzie inercjalnym w płaszczyźnie poziomej, na której narysowano układ współrzędnych $(x, y)$.</p>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/informator-2025-z3-diagram.png\" alt=\"Diagram – kolejne położenia ciał A i B\" class=\"theory-img\" style=\"max-height:510px;display:block;margin:15px auto;\"></div>\n\n<h4>Zadanie 3.1. (0–3)</h4>\n<p><strong>Wykaż, że masa ciała B wynosi $\\boldsymbol{250\\text{ g}}$. Wykonaj niezbędne pomiary na diagramie, a następnie przeprowadź obliczenia.</strong></p>\n\n<h4>Zadanie 3.2. (0–3)</h4>\n<p><strong>Ustal i zapisz, czy zderzenie było doskonale sprężyste. Uzasadnij swoje stwierdzenie. W uzasadnieniu powołaj się na odpowiednie prawa lub zależności fizyczne i wykonaj niezbędne obliczenia.</strong></p>\n<p>Przyjmij do obliczeń masę ciała B równą $250\\text{ g}$.</p>\n</div>",
                "originalTaskId": "matura-cke-informator-2025-zad-3",
                "sourcePages": [
                  20,
                  22
                ],
                "formula": "2023",
                "solution": {
                  "givens": "Masa ciała A: $m_A = 200\\text{ g} = 0{,}20\\text{ kg}$, ciało B początkowo spoczywa ($B_1 - B_3$), równe odstępy czasu $\\Delta t$, ruch w płaszczyźnie poziomej bez oporów ruchu.",
                  "steps": [
                    {
                      "title": "Zadanie 3.1 – Odczyt wektorów przesunięć z diagramu stroboskopowego",
                      "content": "Ponieważ kolejne zdjęcia wykonywano w jednakowych odstępach czasu $\\Delta t$, przesunięcie wektora położenia na siatce między kolejnymi błyskami stroboskopu jest wprost proporcjonalne do wektora prędkości ciała. Przyjmujemy jednostkę umowną: 1 kratka na jeden odstęp czasu $\\Delta t$ ($[\\text{kr}/\\Delta t]$):\n- **Przed zderzeniem (punkty 1–3):**\nCiało A przemieszcza się poziomo w prawo o 18,5 kratki na krok: $\\vec{v}_A = [18{,}5;\\; 0]$.\nCiało B spoczywa w miejscu: $\\vec{v}_B = [0;\\; 0]$.\n- **Po zderzeniu (punkty 4–6):**\nCiało A przesuwa się o 8,5 kratki w prawo i 7,5 kratki w dół: $\\vec{v}_A' = [8{,}5;\\; -7{,}5]$.\nCiało B przesuwa się o 8,0 kratek w prawo i 6,0 kratek w górę: $\\vec{v}_B' = [8{,}0;\\; +6{,}0]$."
                    },
                    {
                      "title": "Zadanie 3.1 – Wyznaczenie masy ciała B z zasady zachowania pędu w osi Y",
                      "content": "Układ jest izolowany, więc całkowity pęd jest zachowany niezależnie w osi $x$ oraz w osi $y$.\nPrzed zderzeniem pęd w osi pionowej $y$ wynosił zero ($p_{y,\\text{pocz}} = 0$). Z zasady zachowania pędu dla osi $y$:\n$$p_{y,\\text{pocz}} = p_{y,\\text{końc}}$$\n$$0 = m_A \\cdot v_{Ay}' + m_B \\cdot v_{By}'$$\nPodstawiamy wartości składowych:\n$$0 = 0{,}20\\text{ kg} \\cdot (-7{,}5) + m_B \\cdot (+6{,}0)$$\n$$6{,}0 \\cdot m_B = 0{,}20 \\cdot 7{,}5 = 1{,}50 \\implies m_B = \\frac{1{,}50}{6{,}0} = 0{,}250\\text{ kg} = 250\\text{ g}$$\n\n*(Sprawdzenie w osi $x$: $p_{x,\\text{pocz}} = 0{,}20 \\cdot 18{,}5 = 3{,}70$; $p_{x,\\text{końc}} = 0{,}20 \\cdot 8{,}5 + 0{,}25 \\cdot 8{,}0 = 1{,}70 + 2{,}00 = 3{,}70$ – zasada zachowania pędu w osi poziomej jest spełniona tożsamościowo).*"
                    },
                    {
                      "title": "Zadanie 3.2 – Ocena sprężystości zderzenia (bilans energii kinetycznej)",
                      "content": "Zderzenie jest doskonale sprężyste wtedy i tylko wtedy, gdy całkowita energia kinetyczna układu po zderzeniu jest równa energii kinetycznej przed zderzeniem ($E_{k,\\text{końc}} = E_{k,\\text{pocz}}$).\n1. **Kwadraty wartości prędkości ciał (z twierdzenia Pitagorasa):**\n$$v_A^2 = (18{,}5)^2 = 342{,}25$$\n$$(v_A')^2 = (v_{Ax}')^2 + (v_{Ay}')^2 = (8{,}5)^2 + (-7{,}5)^2 = 72{,}25 + 56{,}25 = 128{,}5$$\n$$(v_B')^2 = (v_{Bx}')^2 + (v_{By}')^2 = (8{,}0)^2 + (6{,}0)^2 = 64{,}0 + 36{,}0 = 100{,}0$$\n2. **Energia kinetyczna przed zderzeniem (w jednostkach umownych):**\n$$E_{k,\\text{pocz}} = \\frac{1}{2} m_A v_A^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot 342{,}25 = 34{,}225$$\n3. **Energia kinetyczna po zderzeniu:**\n$$E_{k,\\text{końc}} = \\frac{1}{2} m_A (v_A')^2 + \\frac{1}{2} m_B (v_B')^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot 128{,}5 + \\frac{1}{2} \\cdot 0{,}25 \\cdot 100{,}0$$\n$$E_{k,\\text{końc}} = 12{,}85 + 12{,}50 = 25{,}35$$\n4. **Wniosek:**\nPonieważ $E_{k,\\text{końc}} = 25{,}35 < E_{k,\\text{pocz}} = 34{,}225$, układ utracił około $26\\%$ początkowej energii kinetycznej (stosunek energii wynosi $\\frac{E_{k,\\text{końc}}}{E_{k,\\text{pocz}}} \\approx 0{,}74$).\nZderzenie **nie było doskonale sprężyste** (było zderzeniem niesprężystym ze stratami energii mechanicznej)."
                    }
                  ],
                  "answer": "3.1: Masa ciała B wynosi $m_B = 250\\text{ g}$ ($0{,}250\\text{ kg}$);\n3.2: Zderzenie nie było doskonale sprężyste (część energii kinetycznej została rozproszona, energia po zderzeniu wynosi ok. $74\\%$ energii początkowej).",
                  "trap": "Obliczając wartość prędkości pod kątem, należy pamiętać o zsumowaniu kwadratów obu składowych: $v^2 = v_x^2 + v_y^2$. Nie wolno porównywać samych pojedynczych współrzędnych!",
                  "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://bip.cke.gov.pl/attachments/download/10000#page=21\" target=\"_blank\" rel=\"noopener noreferrer\">Informator CKE – rozwiązania, s. 21–23</a>."
                },
                "solutionSource": {
                  "publisher": "Centralna Komisja Egzaminacyjna",
                  "url": "https://bip.cke.gov.pl/attachments/download/10000",
                  "localFile": "data/arkusze_cke/informatory/informator-maturalny-fizyka-2025.pdf",
                  "pages": [
                    21,
                    23
                  ]
                }
              },
              {
                "id": "matura-cke-praca-informator-2023-zad-2",
                "number": 202301,
                "title": "Informator CKE 2023 zad. 2 nowa formuła",
                "year": "Informator 2023",
                "difficulty": 3,
                "source": "Informator CKE od roku szkolnego 2022/2023",
                "link": "https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2023/Informatory/Informator_EM2023_fizyka.pdf",
                "tags": [
                  "Matura CKE",
                  "Praca, moc i energia",
                  "Zderzenia sprężyste i niesprężyste",
                  "Energia kinetyczna"
                ],
                "problem": "<div class=\"task-matura energy-statements\"><h4>Zadanie 2. Spadająca kulka</h4>\n<p>Pionowo w dół rzucono metalową kulkę o masie $m=0{,}250\\text{ kg}$. Na wysokości $h=1{,}80\\text{ m}$ ponad podłożem, w chwili $t_0=0$, kulka osiągnęła prędkość o wartości $v_0=3{,}20\\text{ m/s}$. Licząc od wysokości $h$, aż do podłoża, kulka spadała swobodnie i się nie obracała. Po upadku na twarde podłoże kulka odbiła się od niego, a czas oddziaływania (zderzenia) kulki z podłożem był równy $\\Delta t=0{,}005\\text{ s}$. Podczas pierwszego zderzenia z podłożem kulka straciła 25% swojej energii mechanicznej.</p>\n<p>Do analizy zjawiska przyjmij jego uproszczony model, w którym:</p><ul><li>pomiń opory powietrza podczas ruchu kulki;</li><li>załóż, że siła $\\vec{F}_R$ reakcji podłoża działająca na kulkę podczas zderzenia była stała;</li><li>przyjmij do obliczeń wartość przyśpieszenia ziemskiego równą $9{,}81\\text{ m/s}^2$.</li></ul>\n<h4>Zadanie 2.1. (0–2)</h4><p><strong>Na podstawie danych przedstawionych w opisie zadania 2. oblicz czas trwania ruchu kulki od chwili $\\boldsymbol{t_0=0}$ do chwili pierwszego uderzenia w podłoże.</strong></p>\n<h4>Zadanie 2.2. (0–2)</h4><p><strong>Wykaż, że wartość prędkości uzyskana przez kulkę tuż przed pierwszym uderzeniem w podłoże wynosi $\\boldsymbol{v_1\\approx6{,}75\\text{ m/s}}$.</strong></p>\n<h4>Zadanie 2.3. (0–3)</h4><p><strong>Oblicz wartość siły <u>reakcji podłoża</u> działającej na kulkę podczas zderzenia kulki z podłożem.</strong></p>\n<p>Wskazówka: możesz skorzystać z faktu, że wartość prędkości uzyskana przez kulkę tuż przed uderzeniem w podłoże wynosi $v_1\\approx6{,}75\\text{ m/s}$.</p></div>",
                "originalTaskId": "matura-cke-informator-2023-zad-2",
                "sourcePages": [
                  15,
                  16,
                  18
                ],
                "formula": "2023",
                "solution": {
                  "givens": "Masa kulki: $m = 0{,}250\\text{ kg}$, wysokość początkowa: $h = 1{,}80\\text{ m}$, prędkość początkowa: $v_0 = 3{,}20\\text{ m/s}$ (skierowana pionowo w dół), czas zderzenia z podłożem: $\\Delta t = 5{,}00 \\cdot 10^{-3}\\text{ s}$, przyśpieszenie ziemskie: $g = 9{,}81\\text{ m/s}^2$, strata energii mechanicznej przy odbiciu: $25\\%$.",
                  "steps": [
                    {
                      "title": "Zadanie 2.1 – Obliczenie czasu spadania kulki",
                      "content": "Kierujemy oś pionową w dół z początkiem na wysokości wyrzutu. Równanie drogi w ruchu jednostajnie przyspieszonym z prędkością początkową $v_0$:\n$$h = v_0 t + \\frac{1}{2}gt^2 \\implies \\frac{1}{2}gt^2 + v_0 t - h = 0$$\nPodstawiamy wartości liczbowe w jednostkach SI:\n$$4{,}905\\,t^2 + 3{,}20\\,t - 1{,}80 = 0$$\nObliczamy wyróżnik trójmianu kwadratowego $\\Delta$:\n$$\\Delta = (3{,}20)^2 - 4 \\cdot 4{,}905 \\cdot (-1{,}80) = 10{,}24 + 35{,}316 = 45{,}556$$\n$$\\sqrt{\\Delta} \\approx 6{,}7495$$\nWybieramy pierwiastek dodatni (czas $t > 0$):\n$$t = \\frac{-3{,}20 + 6{,}7495}{2 \\cdot 4{,}905} = \\frac{3{,}5495}{9{,}81} \\approx 0{,}362\\text{ s} \\approx 0{,}36\\text{ s}$$"
                    },
                    {
                      "title": "Zadanie 2.2 – Wykazanie prędkości tuż przed uderzeniem z zasady zachowania energii",
                      "content": "Przyjmując poziom zerowy energii potencjalnej na powierzchni podłoża ($h = 0$), całkowita energia mechaniczna kulki jest zachowana (brak oporów powietrza):\n$$E_{\\text{mech},\\text{góra}} = E_{\\text{mech},\\text{dół}}$$\n$$\\frac{1}{2}m v_0^2 + mgh = \\frac{1}{2}m v_1^2$$\nDzielimy obustronnie przez masę $m$ i mnożymy przez 2:\n$$v_1^2 = v_0^2 + 2gh \\implies v_1 = \\sqrt{v_0^2 + 2gh}$$\nPodstawiamy dane liczbowe:\n$$v_1 = \\sqrt{(3{,}20\\text{ m/s})^2 + 2 \\cdot 9{,}81\\text{ m/s}^2 \\cdot 1{,}80\\text{ m}} = \\sqrt{10{,}24 + 35{,}316} = \\sqrt{45{,}556} \\approx 6{,}7495\\text{ m/s} \\approx 6{,}75\\text{ m/s}$$\n*(co należało wykazać).*"
                    },
                    {
                      "title": "Zadanie 2.3 – Prędkość po odbiciu i siła reakcji podłoża z II zasady dynamiki",
                      "content": "1. **Prędkość kulki tuż po odbiciu $v_2$:**\nKulka straciła $25\\%$ energii kinetycznej, więc po odbiciu zachowała $75\\%$ energii początkowej:\n$$E_{k2} = 0{,}75\\,E_{k1} \\implies \\frac{1}{2}m v_2^2 = 0{,}75 \\cdot \\left(\\frac{1}{2}m v_1^2\\right) \\implies v_2 = \\sqrt{0{,}75}\\,v_1$$\n$$v_2 = \\sqrt{0{,}75} \\cdot 6{,}7495\\text{ m/s} \\approx 0{,}8660 \\cdot 6{,}7495\\text{ m/s} \\approx 5{,}845\\text{ m/s}$$\n\n2. **Dynamika zderzenia kulki z podłożem:**\nPodczas kontaktu z podłożem na kulkę działają dwie siły: siła reakcji podłoża $\\vec{F}_R$ (skierowana pionowo w górę) oraz grawitacja $m\\vec{g}$ (w dół). Siła wypadkowa wynosi:\n$$F_{\\text{wyp}} = F_R - mg$$\nZ II zasady dynamiki Newtona w postaci pędowej (twierdzenie o impulsie siły i zmianie pędu):\n$$F_{\\text{wyp}} \\cdot \\Delta t = \\Delta p = m v_2 - (-m v_1) = m(v_1 + v_2)$$\n$$(F_R - mg) \\cdot \\Delta t = m(v_1 + v_2) \\implies F_R = mg + \\frac{m(v_1 + v_2)}{\\Delta t}$$\nPodstawiamy wartości liczbowe:\n$$mg = 0{,}250\\text{ kg} \\cdot 9{,}81\\text{ m/s}^2 = 2{,}4525\\text{ N}$$\n$$\\frac{m(v_1 + v_2)}{\\Delta t} = \\frac{0{,}250\\text{ kg} \\cdot (6{,}7495\\text{ m/s} + 5{,}845\\text{ m/s})}{0{,}005\\text{ s}} = 50 \\cdot 12{,}5945\\text{ N} \\approx 629{,}7\\text{ N}$$\n$$F_R = 2{,}45\\text{ N} + 629{,}7\\text{ N} \\approx 632{,}2\\text{ N} \\approx 632\\text{ N}$$"
                    }
                  ],
                  "answer": "2.1: Czas spadania wynosi $t \\approx 0{,}36\\text{ s}$ (dokładnie $0{,}362\\text{ s}$);\n2.2: Wykazano $v_1 = \\sqrt{v_0^2 + 2gh} \\approx 6{,}75\\text{ m/s}$;\n2.3: Siła reakcji podłoża wynosi $F_R \\approx 632\\text{ N}$.",
                  "trap": "Siła reakcji podłoża $F_R$ to nie jest sama siła wypadkowa! Podłoże musi nie tylko wyhamować kulkę i odbić ją w górę, ale również zrównoważyć stale działający ciężar kulki: $F_R = mg + \\frac{m(v_1 + v_2)}{\\Delta t}$.",
                  "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2023/Informatory/Informator_EM2023_fizyka.pdf#page=15\" target=\"_blank\" rel=\"noopener noreferrer\">Informator CKE – rozwiązania, s. 15–19</a>."
                },
                "solutionSource": {
                  "publisher": "Centralna Komisja Egzaminacyjna",
                  "url": "https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2023/Informatory/Informator_EM2023_fizyka.pdf",
                  "localFile": "data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf",
                  "pages": [
                    15,
                    19
                  ]
                }
              },
              {
                "id": "matura-cke-praca-informator-2023-zad-3",
                "number": 202301,
                "title": "Informator CKE zad. 3 nowa formuła",
                "year": "Informator 2023",
                "difficulty": 3,
                "source": "Informator Maturalny CKE (Formuła 2023)",
                "link": "https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2023/Informatory/Informator_EM2023_fizyka.pdf",
                "tags": [
                  "Matura CKE",
                  "Praca, moc i energia",
                  "Zderzenia sprężyste i niesprężyste",
                  "Energia kinetyczna"
                ],
                "problem": "<div class=\"task-matura energy-statements\">\n<h4>Zadanie 3. Zderzenie ciał</h4>\n<p>Ciało A o masie $200\\text{ g}$ poruszało się na poduszce powietrznej bez oporów ruchu i następnie zderzyło się z początkowo nieruchomym ciałem B. Po zderzeniu oba ciała dalej poruszały się bez oporów ruchu. Ruch ciał przed zderzeniem i po zderzeniu odbywał się w płaszczyźnie poziomej.</p>\n<p>Opisany ruch fotografowano z góry, a zdjęcia nałożono na siebie i uzyskano poniższy diagram. Kolejne zdjęcia wykonywano w jednakowych odstępach czasu i oznaczono numerami 1–6. Położenia ciała A w chwilach 1–6 oznaczono A<sub>1</sub>–A<sub>6</sub>, analogiczne położenia ciała B oznaczono B<sub>1</sub>–B<sub>6</sub>. (Zapis na diagramie B<sub>1</sub>–B<sub>3</sub> oznacza, że te położenia się pokrywały).</p>\n<p>Przyjmij, że ruch przedstawiony na diagramie odbywa się w układzie inercjalnym w płaszczyźnie poziomej, na której narysowano układ współrzędnych $(x, y)$.</p>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/informator-2023-z3-diagram.png\" alt=\"Diagram – kolejne położenia ciał A i B\" class=\"theory-img\" style=\"max-height:510px;display:block;margin:15px auto;\"></div>\n\n<h4>Zadanie 3.1. (0–3)</h4>\n<p><strong>Wykaż, że masa ciała B wynosi $\\boldsymbol{250\\text{ g}}$. Wykonaj niezbędne pomiary na diagramie, a następnie przeprowadź obliczenia.</strong></p>\n\n<h4>Zadanie 3.2. (0–3)</h4>\n<p><strong>Ustal i zapisz, czy zderzenie było doskonale sprężyste. Powołaj się na odpowiednie prawa lub zależności fizyczne i wykonaj niezbędne obliczenia, uzasadniające twoje stwierdzenie.</strong></p>\n<p>Przyjmij do obliczeń masę ciała B równą $250\\text{ g}$.</p>\n</div>",
                "originalTaskId": "matura-cke-informator-2023-zad-3",
                "sourcePages": [
                  20,
                  22
                ],
                "formula": "2023",
                "solution": {
                  "givens": "Masa ciała A: $m_A = 200\\text{ g} = 0{,}20\\text{ kg}$, ciało B początkowo spoczywa ($B_1 - B_3$), równe odstępy czasu $\\Delta t$, ruch w płaszczyźnie poziomej bez oporów ruchu.",
                  "steps": [
                    {
                      "title": "Zadanie 3.1 – Odczyt wektorów przesunięć z diagramu stroboskopowego",
                      "content": "Ponieważ kolejne zdjęcia wykonywano w jednakowych odstępach czasu $\\Delta t$, przesunięcie wektora położenia na siatce między kolejnymi błyskami stroboskopu jest wprost proporcjonalne do wektora prędkości ciała. Przyjmujemy jednostkę umowną: 1 kratka na jeden odstęp czasu $\\Delta t$ ($[\\text{kr}/\\Delta t]$):\n- **Przed zderzeniem (punkty 1–3):**\nCiało A przemieszcza się poziomo w prawo o 18,5 kratki na krok: $\\vec{v}_A = [18{,}5;\\; 0]$.\nCiało B spoczywa w miejscu: $\\vec{v}_B = [0;\\; 0]$.\n- **Po zderzeniu (punkty 4–6):**\nCiało A przesuwa się o 8,5 kratki w prawo i 7,5 kratki w dół: $\\vec{v}_A' = [8{,}5;\\; -7{,}5]$.\nCiało B przesuwa się o 8,0 kratek w prawo i 6,0 kratek w górę: $\\vec{v}_B' = [8{,}0;\\; +6{,}0]$."
                    },
                    {
                      "title": "Zadanie 3.1 – Wyznaczenie masy ciała B z zasady zachowania pędu w osi Y",
                      "content": "Układ jest izolowany, więc całkowity pęd jest zachowany niezależnie w osi $x$ oraz w osi $y$.\nPrzed zderzeniem pęd w osi pionowej $y$ wynosił zero ($p_{y,\\text{pocz}} = 0$). Z zasady zachowania pędu dla osi $y$:\n$$p_{y,\\text{pocz}} = p_{y,\\text{końc}}$$\n$$0 = m_A \\cdot v_{Ay}' + m_B \\cdot v_{By}'$$\nPodstawiamy wartości składowych:\n$$0 = 0{,}20\\text{ kg} \\cdot (-7{,}5) + m_B \\cdot (+6{,}0)$$\n$$6{,}0 \\cdot m_B = 0{,}20 \\cdot 7{,}5 = 1{,}50 \\implies m_B = \\frac{1{,}50}{6{,}0} = 0{,}250\\text{ kg} = 250\\text{ g}$$\n\n*(Sprawdzenie w osi $x$: $p_{x,\\text{pocz}} = 0{,}20 \\cdot 18{,}5 = 3{,}70$; $p_{x,\\text{końc}} = 0{,}20 \\cdot 8{,}5 + 0{,}25 \\cdot 8{,}0 = 1{,}70 + 2{,}00 = 3{,}70$ – zasada zachowania pędu w osi poziomej jest spełniona tożsamościowo).*"
                    },
                    {
                      "title": "Zadanie 3.2 – Ocena sprężystości zderzenia (bilans energii kinetycznej)",
                      "content": "Zderzenie jest doskonale sprężyste wtedy i tylko wtedy, gdy całkowita energia kinetyczna układu po zderzeniu jest równa energii kinetycznej przed zderzeniem ($E_{k,\\text{końc}} = E_{k,\\text{pocz}}$).\n1. **Kwadraty wartości prędkości ciał (z twierdzenia Pitagorasa):**\n$$v_A^2 = (18{,}5)^2 = 342{,}25$$\n$$(v_A')^2 = (v_{Ax}')^2 + (v_{Ay}')^2 = (8{,}5)^2 + (-7{,}5)^2 = 72{,}25 + 56{,}25 = 128{,}5$$\n$$(v_B')^2 = (v_{Bx}')^2 + (v_{By}')^2 = (8{,}0)^2 + (6{,}0)^2 = 64{,}0 + 36{,}0 = 100{,}0$$\n2. **Energia kinetyczna przed zderzeniem (w jednostkach umownych):**\n$$E_{k,\\text{pocz}} = \\frac{1}{2} m_A v_A^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot 342{,}25 = 34{,}225$$\n3. **Energia kinetyczna po zderzeniu:**\n$$E_{k,\\text{końc}} = \\frac{1}{2} m_A (v_A')^2 + \\frac{1}{2} m_B (v_B')^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot 128{,}5 + \\frac{1}{2} \\cdot 0{,}25 \\cdot 100{,}0$$\n$$E_{k,\\text{końc}} = 12{,}85 + 12{,}50 = 25{,}35$$\n4. **Wniosek:**\nPonieważ $E_{k,\\text{końc}} = 25{,}35 < E_{k,\\text{pocz}} = 34{,}225$, układ utracił około $26\\%$ początkowej energii kinetycznej (stosunek energii wynosi $\\frac{E_{k,\\text{końc}}}{E_{k,\\text{pocz}}} \\approx 0{,}74$).\nZderzenie **nie było doskonale sprężyste** (było zderzeniem niesprężystym ze stratami energii mechanicznej)."
                    }
                  ],
                  "answer": "3.1: Masa ciała B wynosi $m_B = 250\\text{ g}$ ($0{,}250\\text{ kg}$);\n3.2: Zderzenie nie było doskonale sprężyste (część energii kinetycznej została rozproszona, energia po zderzeniu wynosi ok. $74\\%$ energii początkowej).",
                  "trap": "Obliczając wartość prędkości pod kątem, należy pamiętać o zsumowaniu kwadratów obu składowych: $v^2 = v_x^2 + v_y^2$. Nie wolno porównywać samych pojedynczych współrzędnych!",
                  "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2023/Informatory/Informator_EM2023_fizyka.pdf#page=21\" target=\"_blank\" rel=\"noopener noreferrer\">Informator CKE – rozwiązania, s. 21–23</a>."
                },
                "solutionSource": {
                  "publisher": "Centralna Komisja Egzaminacyjna",
                  "url": "https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2023/Informatory/Informator_EM2023_fizyka.pdf",
                  "localFile": "data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf",
                  "pages": [
                    21,
                    23
                  ]
                }
              }
            ]
          }
        ],
        "tasks": [
          {
            "id": "p-zad-1",
            "number": 1,
            "title": "Zadanie 1. Praca siły w kierunku ruchu",
            "difficulty": 1,
            "source": "Zbiór autorski Matura 2027 • Praca i moc",
            "tags": [
              "Praca siły",
              "Wzór W = F·s"
            ],
            "problem": "<p class=\"problem-paragraph\">Siła $20\\text{ N}$ przesuwa klocek o $3\\text{ m}$ w tym samym kierunku. Oblicz pracę tej siły.</p>",
            "solution": {
              "givens": "$F = 20\\text{ N}$, $s = 3\\text{ m}$, zwrot siły zgodny ze zwrotem przemieszczenia ($\\alpha = 0^\\circ$).",
              "steps": [
                {
                  "title": "Zastosowanie definicji pracy siły stałej",
                  "content": "Kierunek i zwrot siły pokrywają się z kierunkiem ruchu, więc $\\cos 0^\\circ = 1$:\n$$W = F \\cdot s = 20\\text{ N} \\cdot 3\\text{ m} = 60\\text{ J}$$"
                }
              ],
              "answer": "Praca wykonana przez tę siłę wynosi $60\\text{ J}$."
            }
          },
          {
            "id": "p-zad-2",
            "number": 2,
            "title": "Zadanie 2. Praca siły pod kątem 60°",
            "difficulty": 1,
            "source": "Zbiór autorski Matura 2027 • Praca i moc",
            "tags": [
              "Praca siły",
              "Kąt nachylenia"
            ],
            "problem": "<p class=\"problem-paragraph\">Siła $10\\text{ N}$ działa na wózek poruszający się poziomo o $4\\text{ m}$. Kierunek siły tworzy z przemieszczeniem kąt $60^\\circ$. Oblicz pracę.</p>",
            "solution": {
              "givens": "$F = 10\\text{ N}$, $s = 4\\text{ m}$, $\\alpha = 60^\\circ$, $\\cos 60^\\circ = 0{,}5$.",
              "steps": [
                {
                  "title": "Obliczenie pracy ze składowej równoległej do przemieszczenia",
                  "content": "Pracę wykonuje wyłącznie składowa siły równoległa do toru ruchu:\n$$W = F \\cdot s \\cdot \\cos\\alpha = 10\\text{ N} \\cdot 4\\text{ m} \\cdot \\cos 60^\\circ = 40 \\cdot 0{,}5 = 20\\text{ J}$$"
                }
              ],
              "answer": "Praca siły wynosi $20\\text{ J}$."
            }
          },
          {
            "id": "p-zad-3",
            "number": 3,
            "title": "Zadanie 3. Praca ciężaru i reakcji stołu",
            "difficulty": 1,
            "source": "Zbiór autorski Matura 2027 • Praca i moc",
            "tags": [
              "Praca siły",
              "Zadanie zamknięte",
              "Siły prostopadłe"
            ],
            "correctOption": "A",
            "problem": "<p class=\"problem-paragraph\">Książkę o masie $2\\text{ kg}$ przesunięto po poziomym stole o $5\\text{ m}$. Wskaż pracę ciężaru i reakcji stołu.</p>\n<div class=\"problem-options-list\" data-correct=\"A\">\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">$W_g = 0\\text{ i }W_N = 0$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">$W_g = +100\\text{ J}\\text{ i }W_N = 0$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">$W_g = -100\\text{ J}\\text{ i }W_N = 0$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">$W_g = 0\\text{ i }W_N = +100\\text{ J}$</span></div>\n</div>",
            "solution": {
              "givens": "$m = 2\\text{ kg}$, $s = 5\\text{ m}$ (ruch w poziomie).",
              "steps": [
                {
                  "title": "Analiza kąta między wektorami sił a przemieszczeniem",
                  "content": "Siła grawitacji $\\vec{F}_g$ działa pionowo w dół, a siła reakcji podłoża $\\vec{F}_N$ pionowo w górę. Obie siły tworzą z poziomym wektorem przemieszczenia kąt prosty $\\alpha = 90^\\circ$.\nPonieważ $\\cos 90^\\circ = 0$:\n$$W_g = F_g \\cdot s \\cdot \\cos 90^\\circ = 0$$\n$$W_N = F_N \\cdot s \\cdot \\cos 90^\\circ = 0$$"
                }
              ],
              "answer": "Poprawna odpowiedź: A ($W_g = 0\\text{ i }W_N = 0$).",
              "trap": "Siły prostopadłe do toru ruchu nigdy nie wykonują pracy mechanicznej, bez względu na wartość siły czy przebytą drogę!"
            }
          },
          {
            "id": "p-zad-4",
            "number": 4,
            "title": "Zadanie 4. Praca siły tarcia",
            "difficulty": 1,
            "source": "Zbiór autorski Matura 2027 • Praca i moc",
            "tags": [
              "Praca siły",
              "Siła tarcia"
            ],
            "problem": "<p class=\"problem-paragraph\">Klocek przesuwa się w prawo o $4\\text{ m}$. Tarcie ma stałą wartość $3\\text{ N}$. Oblicz pracę tarcia.</p>",
            "solution": {
              "givens": "$s = 4\\text{ m}$ (w prawo), $T = 3\\text{ N}$ (w lewo), zwrot tarcia przeciwny do ruchu ($\\alpha = 180^\\circ$).",
              "steps": [
                {
                  "title": "Wyznaczenie pracy siły tarcia",
                  "content": "Kąt między wektorem siły tarcia a wektorem przemieszczenia wynosi $180^\\circ$, a $\\cos 180^\\circ = -1$:\n$$W_t = -T \\cdot s = -3\\text{ N} \\cdot 4\\text{ m} = -12\\text{ J}$$"
                }
              ],
              "answer": "Praca tarcia wynosi $-12\\text{ J}$.",
              "trap": "Ujemny znak pracy oznacza rozpraszanie energii mechanicznej — zamianę jej w energię termiczną (ciepło)."
            }
          },
          {
            "id": "p-zad-5",
            "number": 5,
            "title": "Zadanie 5. Podnoszenie pionowe ładunku",
            "difficulty": 1,
            "source": "Zbiór autorski Matura 2027 • Praca i moc",
            "tags": [
              "Praca siły",
              "Ruch jednostajny",
              "Grawitacja"
            ],
            "problem": "<p class=\"problem-paragraph\">Ładunek $10\\text{ kg}$ podnoszony jest pionowo ruchem jednostajnym na wysokość $2\\text{ m}$. Oblicz pracę siły podnoszącej oraz pracę ciężaru.</p>",
            "solution": {
              "givens": "$m = 10\\text{ kg}$, $h = 2\\text{ m}$, $g = 10\\text{ m/s}^2$, ruch jednostajny ($v = \\text{const}$).",
              "steps": [
                {
                  "title": "Praca siły podnoszącej",
                  "content": "W ruchu jednostajnym siła wypadkowa wynosi zero, zatem siła podnosząca ma wartość równą ciężarowi: $F_p = mg = 10 \\cdot 10 = 100\\text{ N}$.\nSiła podnosząca ma zwrot w górę, zgodny z ruchem:\n$$W_p = F_p \\cdot h = mgh = 100\\text{ N} \\cdot 2\\text{ m} = +200\\text{ J}$$"
                },
                {
                  "title": "Praca siły ciężkości",
                  "content": "Siła ciężkości ma zwrot w dół, przeciwny do kierunku podnoszenia ($\\alpha = 180^\\circ$):\n$$W_g = -mg \\cdot h = -100\\text{ N} \\cdot 2\\text{ m} = -200\\text{ J}$$"
                }
              ],
              "answer": "Praca siły podnoszącej wynosi $+200\\text{ J}$, a praca siły ciężkości wynosi $-200\\text{ J}$ (praca wypadkowa $W_w = 0$).",
              "trap": "W ruchu jednostajnym praca wypadkowa wszystkich sił wynosi zero, ponieważ energia kinetyczna ciała się nie zmienia (ΔEk = 0)."
            }
          },
          {
            "id": "p-zad-6",
            "number": 6,
            "title": "Zadanie 6. Praca dwóch przeciwstawnych sił",
            "difficulty": 1,
            "source": "Zbiór autorski Matura 2027 • Praca i moc",
            "tags": [
              "Praca siły",
              "Praca wypadkowa"
            ],
            "problem": "<p class=\"problem-paragraph\">Na ciało działają równolegle do przemieszczenia siły $12\\text{ N}$ w prawo i $5\\text{ N}$ w lewo. Ciało przemieszcza się o $3\\text{ m}$ w prawo. Oblicz pracę każdej siły i pracę wypadkową.</p>",
            "solution": {
              "givens": "$F_1 = 12\\text{ N}$ (w prawo), $F_2 = 5\\text{ N}$ (w lewo), $s = 3\\text{ m}$ (w prawo).",
              "steps": [
                {
                  "title": "Obliczenie pracy każdej siły z osobna",
                  "content": "$$W_1 = F_1 \\cdot s = 12\\text{ N} \\cdot 3\\text{ m} = +36\\text{ J}$$\n$$W_2 = -F_2 \\cdot s = -5\\text{ N} \\cdot 3\\text{ m} = -15\\text{ J}$$"
                },
                {
                  "title": "Obliczenie pracy wypadkowej",
                  "content": "Praca wypadkowa to suma prac składowych (lub praca siły wypadkowej $F_w = 12 - 5 = 7\\text{ N}$):\n$$W_w = W_1 + W_2 = 36\\text{ J} + (-15\\text{ J}) = 21\\text{ J}$$\n$$(W_w = F_w \\cdot s = 7\\text{ N} \\cdot 3\\text{ m} = 21\\text{ J})$$"
                }
              ],
              "answer": "$W_1 = 36\\text{ J}$, $W_2 = -15\\text{ J}$, a praca wypadkowa wynosi $W_w = 21\\text{ J}$."
            }
          },
          {
            "id": "p-zad-7",
            "number": 7,
            "title": "Zadanie 7. Praca jako pole pod wykresem F(s)",
            "difficulty": 2,
            "source": "Zbiór autorski Matura 2027 • Praca i moc",
            "tags": [
              "Praca siły",
              "Pole pod wykresem",
              "Wykres F(s)"
            ],
            "problem": "<p class=\"problem-paragraph\">Wartość poziomej siły działającej wzdłuż ruchu zależy od drogi zgodnie z wykresem. Oblicz pracę na odcinku $0 \\le s \\le 4\\text{ m}$.</p>",
            "chartSvg": "<svg viewBox=\"0 0 380 230\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:380px; width:100%; height:auto; font-family:system-ui,-apple-system,sans-serif;\">\n  <defs>\n    <marker id=\"arrow-p7\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#1e293b\"/>\n    </marker>\n  </defs>\n  <polygon points=\"60,180 160,70 260,70 260,180\" fill=\"rgba(37,99,235,0.08)\"/>\n  <line x1=\"50\" y1=\"180\" x2=\"340\" y2=\"180\" stroke=\"#1e293b\" stroke-width=\"2\" marker-end=\"url(#arrow-p7)\"/>\n  <line x1=\"60\" y1=\"190\" x2=\"60\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\" marker-end=\"url(#arrow-p7)\"/>\n  <text x=\"345\" y=\"185\" font-size=\"14\" font-weight=\"600\" fill=\"#1e293b\" font-style=\"italic\">s [m]</text>\n  <text x=\"60\" y=\"22\" font-size=\"14\" font-weight=\"600\" fill=\"#1e293b\" font-style=\"italic\" text-anchor=\"middle\">F [N]</text>\n  <line x1=\"160\" y1=\"70\" x2=\"160\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <line x1=\"260\" y1=\"70\" x2=\"260\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <line x1=\"60\" y1=\"70\" x2=\"160\" y2=\"70\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <polyline points=\"60,180 160,70 260,70\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <circle cx=\"60\" cy=\"180\" r=\"3.5\" fill=\"#2563eb\"/>\n  <circle cx=\"160\" cy=\"70\" r=\"3.5\" fill=\"#2563eb\"/>\n  <circle cx=\"260\" cy=\"70\" r=\"3.5\" fill=\"#2563eb\"/>\n  <line x1=\"160\" y1=\"177\" x2=\"160\" y2=\"183\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n  <text x=\"160\" y=\"202\" font-size=\"13\" font-weight=\"500\" fill=\"#334155\" text-anchor=\"middle\">2</text>\n  <line x1=\"260\" y1=\"177\" x2=\"260\" y2=\"183\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n  <text x=\"260\" y=\"202\" font-size=\"13\" font-weight=\"500\" fill=\"#334155\" text-anchor=\"middle\">4</text>\n  <line x1=\"57\" y1=\"70\" x2=\"63\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n  <text x=\"50\" y=\"75\" font-size=\"13\" font-weight=\"500\" fill=\"#334155\" text-anchor=\"end\">6</text>\n  <text x=\"50\" y=\"195\" font-size=\"12\" fill=\"#64748b\" text-anchor=\"end\">0</text>\n</svg>",
            "solution": {
              "givens": "Wykres $F(s)$: od $s=0$ do $s=2\\text{ m}$ siła rośnie liniowo do $6\\text{ N}$, od $s=2\\text{ m}$ do $s=4\\text{ m}$ siła ma stałą wartość $6\\text{ N}$.",
              "steps": [
                {
                  "title": "Podział pola pod wykresem na figury elementarne",
                  "content": "Praca zmiennej siły jest geometrycznie równa polu powierzchni pod wykresem $F(s)$. Dzielimy obszar na trójkąt ($0 \\le s \\le 2$) oraz prostokąt ($2 \\le s \\le 4$)."
                },
                {
                  "title": "Obliczenie pól składowych",
                  "content": "Pole trójkąta:\n$$W_1 = \\frac{1}{2} \\cdot \\text{podstawa} \\cdot \\text{wysokość} = \\frac{1}{2} \\cdot 2\\text{ m} \\cdot 6\\text{ N} = 6\\text{ J}$$\nPole prostokąta:\n$$W_2 = (4 - 2)\\text{ m} \\cdot 6\\text{ N} = 2\\text{ m} \\cdot 6\\text{ N} = 12\\text{ J}$$"
                },
                {
                  "title": "Wyznaczenie całkowitej pracy",
                  "content": "$$W = W_1 + W_2 = 6\\text{ J} + 12\\text{ J} = 18\\text{ J}$$"
                }
              ],
              "answer": "Praca na odcinku $0 \\le s \\le 4\\text{ m}$ wynosi $18\\text{ J}$."
            }
          },
          {
            "id": "p-zad-8",
            "number": 8,
            "title": "Zadanie 8. Praca siły malejącej liniowo",
            "difficulty": 1,
            "source": "Zbiór autorski Matura 2027 • Praca i moc",
            "tags": [
              "Praca siły",
              "Zadanie zamknięte",
              "Pole pod wykresem"
            ],
            "correctOption": "C",
            "problem": "<p class=\"problem-paragraph\">Siła wzdłuż ruchu maleje liniowo od $8\\text{ N}$ przy $s = 0$ do zera przy $s = 4\\text{ m}$. Wskaż pracę tej siły, nie wyprowadzając wzoru $F(s)$.</p>\n<div class=\"problem-options-list\" data-correct=\"C\">\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">$8\\text{ J}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">$12\\text{ J}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">$16\\text{ J}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">$32\\text{ J}$</span></div>\n</div>",
            "solution": {
              "givens": "$F(0) = 8\\text{ N}$, $F(4) = 0\\text{ N}$, spadek liniowy na drodze $s = 4\\text{ m}$.",
              "steps": [
                {
                  "title": "Interpretacja geometryczna (pole trójkąta prostokątnego)",
                  "content": "Wykres zależności $F(s)$ tworzy trójkąt prostokątny o podstawie $s = 4\\text{ m}$ i wysokości $F_0 = 8\\text{ N}$:\n$$W = \\frac{1}{2} \\cdot s \\cdot F_0 = \\frac{1}{2} \\cdot 4\\text{ m} \\cdot 8\\text{ N} = 16\\text{ J}$$"
                }
              ],
              "answer": "Poprawna odpowiedź: C ($16\\text{ J}$)."
            }
          },
          {
            "id": "p-zad-9",
            "number": 9,
            "title": "Zadanie 9. Moc średnia użyteczna dźwigu",
            "difficulty": 1,
            "source": "Zbiór autorski Matura 2027 • Praca i moc",
            "tags": [
              "Moc",
              "Moc średnia"
            ],
            "problem": "<p class=\"problem-paragraph\">Dźwig podnosi pionowo ładunek $200\\text{ kg}$ na wysokość $6\\text{ m}$ w czasie $10\\text{ s}$. Oblicz moc średnią użyteczną.</p>",
            "solution": {
              "givens": "$m = 200\\text{ kg}$, $h = 6\\text{ m}$, $t = 10\\text{ s}$, $g = 10\\text{ m/s}^2$.",
              "steps": [
                {
                  "title": "Praca użyteczna podnoszenia",
                  "content": "$$W = mgh = 200\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 6\\text{ m} = 12\\,000\\text{ J}$$"
                },
                {
                  "title": "Obliczenie mocy średniej",
                  "content": "$$P_{\\text{śr}} = \\frac{W}{t} = \\frac{12\\,000\\text{ J}}{10\\text{ s}} = 1200\\text{ W} = 1{,}2\\text{ kW}$$"
                }
              ],
              "answer": "Moc średnia użyteczna dźwigu wynosi $1200\\text{ W} = 1{,}2\\text{ kW}$."
            }
          },
          {
            "id": "p-zad-10",
            "number": 10,
            "title": "Zadanie 10. Moc chwilowa samochodu",
            "difficulty": 1,
            "source": "Zbiór autorski Matura 2027 • Praca i moc",
            "tags": [
              "Moc",
              "Moc chwilowa P = F·v",
              "Zadanie zamknięte"
            ],
            "correctOption": "B",
            "problem": "<p class=\"problem-paragraph\">Samochód jedzie po poziomej drodze ze stałą prędkością $20\\text{ m/s}$. Siła napędowa ma wartość $1{,}5\\text{ kN}$ i jest równoległa do prędkości. Wskaż moc chwilową silnika przekazywaną samochodowi.</p>\n<div class=\"problem-options-list\" data-correct=\"B\">\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">$3\\text{ kW}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">$30\\text{ kW}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">$75\\text{ kW}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">$300\\text{ kW}$</span></div>\n</div>",
            "solution": {
              "givens": "$v = 20\\text{ m/s}$, $F = 1{,}5\\text{ kN} = 1500\\text{ N}$, siła równoległa do prędkości.",
              "steps": [
                {
                  "title": "Zastosowanie wzoru na moc chwilową",
                  "content": "$$P = F \\cdot v = 1500\\text{ N} \\cdot 20\\text{ m/s} = 30\\,000\\text{ W} = 30\\text{ kW}$$"
                }
              ],
              "answer": "Poprawna odpowiedź: B ($30\\text{ kW}$). Dla stałej prędkości jest to jednocześnie moc niezbędna do zrównoważenia oporów ruchu."
            }
          },
          {
            "id": "p-zad-11",
            "number": 11,
            "title": "Zadanie 11. Sprawność i pobrana energia urządzenia",
            "difficulty": 2,
            "source": "Zbiór autorski Matura 2027 • Praca i moc",
            "tags": [
              "Sprawność",
              "Energia pobrana",
              "Moc"
            ],
            "problem": "<p class=\"problem-paragraph\">Moc użyteczna urządzenia wynosi $800\\text{ W}$, a moc pobierana $1{,}0\\text{ kW}$. Oblicz sprawność. Ile energii urządzenie pobierze w ciągu $5\\text{ min}$?</p>",
            "solution": {
              "givens": "$P_u = 800\\text{ W}$, $P_c = 1{,}0\\text{ kW} = 1000\\text{ W}$, $t = 5\\text{ min} = 300\\text{ s}$.",
              "steps": [
                {
                  "title": "Obliczenie sprawności",
                  "content": "$$\\eta = \\frac{P_u}{P_c} = \\frac{800\\text{ W}}{1000\\text{ W}} = 0{,}80 = 80\\%$$"
                },
                {
                  "title": "Obliczenie pobranej energii",
                  "content": "$$E = P_c \\cdot t = 1000\\text{ W} \\cdot 300\\text{ s} = 3{,}0 \\cdot 10^5\\text{ J} = 300\\text{ kJ}$$"
                }
              ],
              "answer": "Sprawność urządzenia wynosi $\\eta = 80\\%$, a pobrana energia w czasie $5\\text{ min}$ to $300\\text{ kJ}$ ($3{,}0 \\cdot 10^5\\text{ J}$)."
            }
          },
          {
            "id": "p-zad-12",
            "number": 12,
            "title": "Zadanie 12. Praca rozruchu z wykresu mocy P(t)",
            "difficulty": 2,
            "source": "Zbiór autorski Matura 2027 • Praca i moc",
            "tags": [
              "Moc",
              "Wykres P(t)",
              "Zadanie maturalne"
            ],
            "problem": "<p class=\"problem-paragraph\">Moc silnika podczas rozruchu wózka jest przedstawiona na wykresie. Wózek otrzymuje całą tę energię jako energię mechaniczną. Oblicz pracę wykonaną przez silnik w czasie $0 \\le t \\le 4\\text{ s}$.</p>\n",
            "chartSvg": "<svg viewBox=\"0 0 380 230\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:380px; width:100%; height:auto; font-family:system-ui,-apple-system,sans-serif;\">\n  <defs>\n    <marker id=\"arrow-p12\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#1e293b\"/>\n    </marker>\n  </defs>\n  <polygon points=\"60,180 160,70 260,70 260,180\" fill=\"rgba(37,99,235,0.08)\"/>\n  <line x1=\"50\" y1=\"180\" x2=\"340\" y2=\"180\" stroke=\"#1e293b\" stroke-width=\"2\" marker-end=\"url(#arrow-p12)\"/>\n  <line x1=\"60\" y1=\"190\" x2=\"60\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\" marker-end=\"url(#arrow-p12)\"/>\n  <text x=\"345\" y=\"185\" font-size=\"14\" font-weight=\"600\" fill=\"#1e293b\" font-style=\"italic\">t [s]</text>\n  <text x=\"60\" y=\"22\" font-size=\"14\" font-weight=\"600\" fill=\"#1e293b\" font-style=\"italic\" text-anchor=\"middle\">P [W]</text>\n  <line x1=\"160\" y1=\"70\" x2=\"160\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <line x1=\"260\" y1=\"70\" x2=\"260\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <line x1=\"60\" y1=\"70\" x2=\"160\" y2=\"70\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <polyline points=\"60,180 160,70 260,70\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <circle cx=\"60\" cy=\"180\" r=\"3.5\" fill=\"#2563eb\"/>\n  <circle cx=\"160\" cy=\"70\" r=\"3.5\" fill=\"#2563eb\"/>\n  <circle cx=\"260\" cy=\"70\" r=\"3.5\" fill=\"#2563eb\"/>\n  <line x1=\"160\" y1=\"177\" x2=\"160\" y2=\"183\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n  <text x=\"160\" y=\"202\" font-size=\"13\" font-weight=\"500\" fill=\"#334155\" text-anchor=\"middle\">2</text>\n  <line x1=\"260\" y1=\"177\" x2=\"260\" y2=\"183\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n  <text x=\"260\" y=\"202\" font-size=\"13\" font-weight=\"500\" fill=\"#334155\" text-anchor=\"middle\">4</text>\n  <line x1=\"57\" y1=\"70\" x2=\"63\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n  <text x=\"50\" y=\"75\" font-size=\"13\" font-weight=\"500\" fill=\"#334155\" text-anchor=\"end\">60</text>\n  <text x=\"50\" y=\"195\" font-size=\"12\" fill=\"#64748b\" text-anchor=\"end\">0</text>\n</svg>",
            "solution": {
              "givens": "Wykres $P(t)$: wzrost od 0 do $60\\text{ W}$ w czasie pierwszych $2\\text{ s}$, potem stała moc $60\\text{ W}$ od $t = 2\\text{ s}$ do $t = 4\\text{ s}$.",
              "steps": [
                {
                  "title": "Interpretacja pracy jako pola pod wykresem P(t)",
                  "content": "Ponieważ $P = \\frac{dW}{dt}$, pole pod wykresem mocy w czasie odpowiada wykonanej pracy mechanicznej $W$. Dzielimy pole na trójkąt i prostokąt."
                },
                {
                  "title": "Obliczenie pól składowych",
                  "content": "Pole trójkąta ($0 \\le t \\le 2\\text{ s}$):\n$$W_1 = \\frac{1}{2} \\cdot 2\\text{ s} \\cdot 60\\text{ W} = 60\\text{ J}$$\nPole prostokąta ($2 \\le t \\le 4\\text{ s}$):\n$$W_2 = (4 - 2)\\text{ s} \\cdot 60\\text{ W} = 2\\text{ s} \\cdot 60\\text{ W} = 120\\text{ J}$$"
                },
                {
                  "title": "Suma prac",
                  "content": "$$W = W_1 + W_2 = 60\\text{ J} + 120\\text{ J} = 180\\text{ J}$$"
                }
              ],
              "answer": "Praca wykonana przez silnik wynosi $180\\text{ J}$."
            }
          },
          {
            "id": "p-zad-13",
            "number": 13,
            "title": "Zadanie 13. Zależność energii kinetycznej od prędkości",
            "difficulty": 1,
            "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
            "tags": [
              "Energia kinetyczna",
              "Zadanie zamknięte"
            ],
            "correctOption": "C",
            "problem": "<p class=\"problem-paragraph\">Dwa ciała mają jednakowe masy. Drugie porusza się trzy razy szybciej od pierwszego. Ile razy większa jest jego energia kinetyczna?</p>\n<div class=\"problem-options-list\" data-correct=\"C\">\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">3 razy</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">6 razy</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">9 razy</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">12 razy</span></div>\n</div>",
            "solution": {
              "givens": "$m_1 = m_2 = m$, $v_2 = 3v_1$.",
              "steps": [
                {
                  "title": "Zależność kwadratowa energii kinetycznej od prędkości",
                  "content": "Energia kinetyczna zależy od kwadratu szybkości ($E_k \\propto v^2$):\n$$E_{k1} = \\frac{1}{2}m v_1^2$$\n$$E_{k2} = \\frac{1}{2}m (3v_1)^2 = 9 \\cdot \\left(\\frac{1}{2}m v_1^2\\right) = 9 E_{k1}$$"
                }
              ],
              "answer": "Poprawna odpowiedź: C ($9\\text{ razy}$)."
            }
          },
          {
            "id": "p-zad-14",
            "number": 14,
            "title": "Zadanie 14. Energia potencjalna a poziom odniesienia",
            "difficulty": 1,
            "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
            "tags": [
              "Energia potencjalna",
              "Poziom odniesienia"
            ],
            "problem": "<p class=\"problem-paragraph\">Ciało o masie $3\\text{ kg}$ znajduje się $4\\text{ m}$ nad wybranym poziomem odniesienia. Oblicz jego energię potencjalną grawitacji. Jak zmieni się wynik po wybraniu poziomu odniesienia $2\\text{ m}$ wyżej?</p>",
            "solution": {
              "givens": "$m = 3\\text{ kg}$, $h_1 = 4\\text{ m}$, nowy poziom odniesienia przesunięty w górę o $\\Delta h = 2\\text{ m}$, $g = 10\\text{ m/s}^2$.",
              "steps": [
                {
                  "title": "Energia dla początkowego poziomu",
                  "content": "$$E_{p1} = mgh_1 = 3\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 4\\text{ m} = 120\\text{ J}$$"
                },
                {
                  "title": "Wpływ zmiany poziomu odniesienia",
                  "content": "Po przesunięciu poziomu zerowego o $2\\text{ m}$ w górę nowa wysokość wynosi $h_2 = 4\\text{ m} - 2\\text{ m} = 2\\text{ m}$:\n$$E_{p2} = mgh_2 = 3 \\cdot 10 \\cdot 2 = 60\\text{ J}$$\nWynik zmniejszy się o $60\\text{ J}$."
                }
              ],
              "answer": "Początkowa energia wynosi $120\\text{ J}$. Po wybraniu poziomu $2\\text{ m}$ wyżej energia wynosi $60\\text{ J}$ (zmaleje o $60\\text{ J}$). Wartość bezwzględna energii zależy od poziomu zerowego, ale zmiana energii $\\Delta E_p$ między dwoma fizycznymi punktami toru jest niezmiennikiem."
            }
          },
          {
            "id": "p-zad-15",
            "number": 15,
            "title": "Zadanie 15. Energia potencjalna sprężystości",
            "difficulty": 1,
            "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
            "tags": [
              "Energia sprężystości",
              "Wzór Es = 1/2 kx²"
            ],
            "problem": "<p class=\"problem-paragraph\">Sprężynę o sztywności $200\\text{ N/m}$ ściśnięto o $0{,}10\\text{ m}$. Oblicz energię potencjalną sprężystości.</p>",
            "solution": {
              "givens": "$k = 200\\text{ N/m}$, $x = 0{,}10\\text{ m}$.",
              "steps": [
                {
                  "title": "Zastosowanie wzoru na energię sprężystości",
                  "content": "$$E_s = \\frac{1}{2} k x^2 = \\frac{1}{2} \\cdot 200\\text{ N/m} \\cdot (0{,}10\\text{ m})^2 = 100 \\cdot 0{,}01 = 1\\text{ J}$$"
                }
              ],
              "answer": "Energia potencjalna sprężystości wynosi $1\\text{ J}$."
            }
          },
          {
            "id": "p-zad-16",
            "number": 16,
            "title": "Zadanie 16. Praca wypadkowa i zmiana szybkości",
            "difficulty": 1,
            "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
            "tags": [
              "Twierdzenie o pracy i energii",
              "Zadanie zamknięte"
            ],
            "correctOption": "B",
            "problem": "<p class=\"problem-paragraph\">Klocek $2\\text{ kg}$ zwiększa szybkość na poziomym torze z $2\\text{ m/s}$ do $6\\text{ m/s}$. Wskaż pracę wypadkową.</p>\n<div class=\"problem-options-list\" data-correct=\"B\">\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">$16\\text{ J}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">$32\\text{ J}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">$36\\text{ J}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">$64\\text{ J}$</span></div>\n</div>",
            "solution": {
              "givens": "$m = 2\\text{ kg}$, $v_1 = 2\\text{ m/s}$, $v_2 = 6\\text{ m/s}$.",
              "steps": [
                {
                  "title": "Zastosowanie twierdzenia o pracy i energii kinetycznej",
                  "content": "Praca wypadkowa sił równa się zmianie energii kinetycznej ciała ($W_w = \\Delta E_k$):\n$$W_w = \\frac{1}{2}m (v_2^2 - v_1^2) = \\frac{1}{2} \\cdot 2\\text{ kg} \\cdot (6^2 - 2^2)\\text{ m}^2/\\text{s}^2 = 36 - 4 = 32\\text{ J}$$"
                }
              ],
              "answer": "Poprawna odpowiedź: B ($32\\text{ J}$)."
            }
          },
          {
            "id": "p-zad-17",
            "number": 17,
            "title": "Zadanie 17. Droga do zatrzymania z twierdzenia o energii",
            "difficulty": 2,
            "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
            "tags": [
              "Praca tarcia",
              "Droga hamowania",
              "Twierdzenie o energii"
            ],
            "problem": "<p class=\"problem-paragraph\">Klocek $4\\text{ kg}$ ślizga się po poziomej powierzchni z szybkością $5\\text{ m/s}$. Działa na niego tylko tarcie o wartości $10\\text{ N}$. Oblicz drogę do zatrzymania, używając twierdzenia o pracy i energii kinetycznej.</p>",
            "solution": {
              "givens": "$m = 4\\text{ kg}$, $v_1 = 5\\text{ m/s}$, $v_2 = 0\\text{ m/s}$, $T = 10\\text{ N}$.",
              "steps": [
                {
                  "title": "Początkowa energia kinetyczna",
                  "content": "$$E_{k1} = \\frac{1}{2}m v_1^2 = \\frac{1}{2} \\cdot 4\\text{ kg} \\cdot 5^2\\text{ m}^2/\\text{s}^2 = 50\\text{ J}$$"
                },
                {
                  "title": "Zastosowanie twierdzenia W = ΔEk",
                  "content": "Praca tarcia wynosi $W_t = -T \\cdot s = -10s$. Końcowa energia $E_{k2} = 0$:\n$$W_t = E_{k2} - E_{k1} \\implies -10s = 0 - 50\\text{ J} \\implies 10s = 50 \\implies s = 5\\text{ m}$$"
                }
              ],
              "answer": "Droga klocka do zatrzymania wynosi $5\\text{ m}$."
            }
          },
          {
            "id": "p-zad-18",
            "number": 18,
            "title": "Zadanie 18. Szybkość swobodnego spadku",
            "difficulty": 1,
            "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
            "tags": [
              "Swobodny spadek",
              "Zachowanie energii",
              "Zadanie zamknięte"
            ],
            "correctOption": "C",
            "problem": "<p class=\"problem-paragraph\">Kulkę puszczono ze spoczynku z wysokości $5\\text{ m}$. Pomijamy opory. Wskaż szybkość tuż nad podłożem.</p>\n<div class=\"problem-options-list\" data-correct=\"C\">\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">$5\\text{ m/s}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">$7{,}1\\text{ m/s}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">$10\\text{ m/s}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">$50\\text{ m/s}$</span></div>\n</div>",
            "solution": {
              "givens": "$h = 5\\text{ m}$, $v_0 = 0$, $g = 10\\text{ m/s}^2$, opory pomijalne.",
              "steps": [
                {
                  "title": "Zasada zachowania energii mechanicznej",
                  "content": "Cała energia potencjalna na szczycie zamienia się w energię kinetyczną tuż nad ziemią:\n$$mgh = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2gh} = \\sqrt{2 \\cdot 10 \\cdot 5} = \\sqrt{100} = 10\\text{ m/s}$$"
                }
              ],
              "answer": "Poprawna odpowiedź: C ($10\\text{ m/s}$). Masa kuli ulega skróceniu."
            }
          },
          {
            "id": "p-zad-19",
            "number": 19,
            "title": "Zadanie 19. Zmiana wysokości a prędkość bez tarcia",
            "difficulty": 2,
            "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
            "tags": [
              "Zachowanie energii",
              "Ruch bez tarcia"
            ],
            "problem": "<p class=\"problem-paragraph\">Klocek przesuwa się bez tarcia z wysokości $3\\text{ m}$ na wysokość $1\\text{ m}$. Początkowo ma szybkość $2\\text{ m/s}$. Oblicz jego szybkość w punkcie końcowym.</p>",
            "solution": {
              "givens": "$h_1 = 3\\text{ m}$, $h_2 = 1\\text{ m}$, $v_1 = 2\\text{ m/s}$, $g = 10\\text{ m/s}^2$.",
              "steps": [
                {
                  "title": "Bilans całkowitej energii mechanicznej",
                  "content": "$$\\frac{1}{2}mv_1^2 + mgh_1 = \\frac{1}{2}mv_2^2 + mgh_2$$\nDzieląc obustronnie przez masę $m$:\n$$v_2^2 = v_1^2 + 2g(h_1 - h_2)$$"
                },
                {
                  "title": "Obliczenie wartości liczbowej",
                  "content": "$$v_2^2 = 2^2 + 2 \\cdot 10 \\cdot (3 - 1) = 4 + 40 = 44$$\n$$v_2 = \\sqrt{44} \\approx 6{,}63\\text{ m/s}$$"
                }
              ],
              "answer": "Szybkość w punkcie końcowym wynosi około $6{,}63\\text{ m/s}$ (dokładnie $\\sqrt{44}\\text{ m/s} = 2\\sqrt{11}\\text{ m/s}$)."
            }
          },
          {
            "id": "p-zad-20",
            "number": 20,
            "title": "Zadanie 20. Maksymalne ściśnięcie sprężyny",
            "difficulty": 2,
            "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
            "tags": [
              "Energia sprężystości",
              "Zachowanie energii",
              "Wózek"
            ],
            "problem": "<p class=\"problem-paragraph\">Wózek $1\\text{ kg}$ porusza się po poziomym gładkim torze z szybkością $4\\text{ m/s}$ i ściska sprężynę o sztywności $200\\text{ N/m}$. Oblicz maksymalne ściśnięcie sprężyny.</p>",
            "solution": {
              "givens": "$m = 1\\text{ kg}$, $v = 4\\text{ m/s}$, $k = 200\\text{ N/m}$, tor gładki (brak tarcia).",
              "steps": [
                {
                  "title": "Zasada zachowania energii",
                  "content": "W chwili maksymalnego odkształcenia wózek chwilowo się zatrzymuje ($v = 0$), a cała jego energia kinetyczna przekształca się w energię potencjalną sprężystości:\n$$\\frac{1}{2}mv^2 = \\frac{1}{2}kx^2 \\implies mv^2 = kx^2$$"
                },
                {
                  "title": "Wyznaczenie ugięcia x",
                  "content": "$$1 \\cdot 4^2 = 200 \\cdot x^2 \\implies 16 = 200x^2 \\implies x^2 = \\frac{16}{200} = 0{,}08$$\n$$x = \\sqrt{0{,}08} \\approx 0{,}40\\text{ m}$$"
                }
              ],
              "answer": "Maksymalne ściśnięcie sprężyny wynosi $0{,}40\\text{ m} = 40\\text{ cm}$."
            }
          },
          {
            "id": "p-zad-21",
            "number": 21,
            "title": "Zadanie 21. Zsuwanie się z równi z tarciem",
            "difficulty": 2,
            "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
            "tags": [
              "Równia pochyła",
              "Praca tarcia",
              "Zachowanie energii"
            ],
            "problem": "<p class=\"problem-paragraph\">Klocek $2\\text{ kg}$ zsuwa się ze spoczynku po równi o wysokości $2\\text{ m}$. Podczas ruchu tarcie wykonuje pracę $-8\\text{ J}$. Oblicz szybkość klocka na dole.</p>",
            "solution": {
              "givens": "$m = 2\\text{ kg}$, $h = 2\\text{ m}$, $W_t = -8\\text{ J}$, $v_0 = 0$, $g = 10\\text{ m/s}^2$.",
              "steps": [
                {
                  "title": "Początkowa energia na szczycie równi",
                  "content": "$$E_1 = mgh = 2\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 2\\text{ m} = 40\\text{ J}$$"
                },
                {
                  "title": "Bilans energii z uwzględnieniem pracy tarcia",
                  "content": "Praca siły tarcia zmniejsza energię mechaniczną klocka:\n$$E_2 = E_1 + W_t = 40\\text{ J} + (-8\\text{ J}) = 32\\text{ J}$$"
                },
                {
                  "title": "Wyznaczenie szybkości końcowej",
                  "content": "Na dole równi $E_p = 0$, cała pozostała energia to energia kinetyczna:\n$$E_k = \\frac{1}{2}mv^2 \\implies \\frac{1}{2} \\cdot 2 \\cdot v^2 = 32 \\implies v^2 = 32 \\implies v = \\sqrt{32} \\approx 5{,}66\\text{ m/s}$$"
                }
              ],
              "answer": "Szybkość klocka u podstawy równi wynosi około $5{,}66\\text{ m/s}$ (dokładnie $\\sqrt{32}\\text{ m/s} = 4\\sqrt{2}\\text{ m/s}$)."
            }
          },
          {
            "id": "p-zad-22",
            "number": 22,
            "title": "Zadanie 22. Ruch sanek ciągniętych siłą z tarciem",
            "difficulty": 2,
            "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
            "tags": [
              "Sanki",
              "Siła ciągu",
              "Praca wypadkowa",
              "Energia kinetyczna"
            ],
            "problem": "<p class=\"problem-paragraph\">Sanki o masie $10\\text{ kg}$ są ciągnięte po poziomej drodze stałą siłą $40\\text{ N}$ równoległą do ruchu. Tarcie ma wartość $10\\text{ N}$. Sanki przebywają $5\\text{ m}$, startując ze spoczynku. Oblicz szybkość końcową metodą energii.</p>",
            "solution": {
              "givens": "$m = 10\\text{ kg}$, $F = 40\\text{ N}$, $T = 10\\text{ N}$, $s = 5\\text{ m}$, $v_0 = 0$.",
              "steps": [
                {
                  "title": "Praca siły wypadkowej",
                  "content": "Wypadkowa siła w kierunku ruchu: $F_w = F - T = 40\\text{ N} - 10\\text{ N} = 30\\text{ N}$.\n$$W_w = F_w \\cdot s = 30\\text{ N} \\cdot 5\\text{ m} = 150\\text{ J}$$"
                },
                {
                  "title": "Obliczenie szybkości z przyrostu energii kinetycznej",
                  "content": "Start ze spoczynku oznacza $E_{k0} = 0$, więc $\\Delta E_k = W_w$:\n$$\\frac{1}{2}mv^2 = 150\\text{ J} \\implies \\frac{1}{2} \\cdot 10 \\cdot v^2 = 150 \\implies 5v^2 = 150 \\implies v^2 = 30$$\n$$v = \\sqrt{30} \\approx 5{,}48\\text{ m/s}$$"
                }
              ],
              "answer": "Szybkość końcowa sanek wynosi około $5{,}48\\text{ m/s}$ (dokładnie $\\sqrt{30}\\text{ m/s}$)."
            }
          },
          {
            "id": "p-zad-23",
            "number": 23,
            "title": "Zadanie 23. Analiza wykresu Ep(h) i praca siły ciężkości",
            "difficulty": 2,
            "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
            "tags": [
              "Energia potencjalna",
              "Wykres Ep(h)",
              "Praca ciężaru",
              "Zadanie maturalne"
            ],
            "problem": "<p class=\"problem-paragraph\">Wykres pokazuje energię potencjalną grawitacji $E_p$ ciała o masie $2\\text{ kg}$ w funkcji wysokości $h$. Oblicz wartość $g$ przyjętą przy sporządzaniu wykresu oraz pracę ciężaru podczas spadku z $h = 3\\text{ m}$ do $h = 1\\text{ m}$.</p>\n",
            "chartSvg": "<svg viewBox=\"0 0 380 230\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:380px; width:100%; height:auto; font-family:system-ui,-apple-system,sans-serif;\">\n  <defs>\n    <marker id=\"arrow-p23\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#1e293b\"/>\n    </marker>\n  </defs>\n  <line x1=\"50\" y1=\"180\" x2=\"340\" y2=\"180\" stroke=\"#1e293b\" stroke-width=\"2\" marker-end=\"url(#arrow-p23)\"/>\n  <line x1=\"60\" y1=\"190\" x2=\"60\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2\" marker-end=\"url(#arrow-p23)\"/>\n  <text x=\"345\" y=\"185\" font-size=\"14\" font-weight=\"600\" fill=\"#1e293b\" font-style=\"italic\">h [m]</text>\n  <text x=\"60\" y=\"22\" font-size=\"14\" font-weight=\"600\" fill=\"#1e293b\" font-style=\"italic\" text-anchor=\"middle\"><tspan>E</tspan><tspan font-size=\"10\" dy=\"3\">p</tspan><tspan font-size=\"14\" dy=\"-3\"> [J]</tspan></text>\n  <line x1=\"220\" y1=\"70\" x2=\"220\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <line x1=\"60\" y1=\"70\" x2=\"220\" y2=\"70\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <line x1=\"60\" y1=\"180\" x2=\"220\" y2=\"70\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <circle cx=\"60\" cy=\"180\" r=\"3.5\" fill=\"#2563eb\"/>\n  <circle cx=\"220\" cy=\"70\" r=\"3.5\" fill=\"#2563eb\"/>\n  <line x1=\"220\" y1=\"177\" x2=\"220\" y2=\"183\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n  <text x=\"220\" y=\"202\" font-size=\"13\" font-weight=\"500\" fill=\"#334155\" text-anchor=\"middle\">3</text>\n  <line x1=\"57\" y1=\"70\" x2=\"63\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n  <text x=\"50\" y=\"75\" font-size=\"13\" font-weight=\"500\" fill=\"#334155\" text-anchor=\"end\">60</text>\n  <text x=\"50\" y=\"195\" font-size=\"12\" fill=\"#64748b\" text-anchor=\"end\">0</text>\n</svg>",
            "solution": {
              "givens": "$m = 2\\text{ kg}$, z wykresu $E_p(3\\text{ m}) = 60\\text{ J}$, spadek od $h_1 = 3\\text{ m}$ do $h_2 = 1\\text{ m}$.",
              "steps": [
                {
                  "title": "Obliczenie przyspieszenia grawitacyjnego g",
                  "content": "Ze wzoru $E_p = mgh$ odczytujemy punkt $(h=3\\text{ m}, E_p=60\\text{ J})$:\n$$g = \\frac{E_p}{mh} = \\frac{60\\text{ J}}{2\\text{ kg} \\cdot 3\\text{ m}} = \\frac{60}{6} = 10\\text{ m/s}^2$$"
                },
                {
                  "title": "Obliczenie pracy siły ciężkości podczas spadku",
                  "content": "Na wysokości $h_2 = 1\\text{ m}$ energia potencjalna wynosi:\n$$E_p(1) = 2\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 1\\text{ m} = 20\\text{ J}$$\nZmiana energii potencjalnej: $\\Delta E_p = 20\\text{ J} - 60\\text{ J} = -40\\text{ J}$.\nPraca ciężaru jest równa ubytkowi energii potencjalnej ($W_g = -\\Delta E_p$):\n$$W_g = -(-40\\text{ J}) = +40\\text{ J}$$"
                }
              ],
              "answer": "Przyjęta wartość wynosi $g = 10\\text{ m/s}^2$, a praca siły ciężkości podczas opadania z $3\\text{ m}$ do $1\\text{ m}$ wynosi $+40\\text{ J}$."
            }
          },
          {
            "id": "p-zad-24",
            "number": 24,
            "title": "Zadanie 24. Oscylator na sprężynie – energia całkowita i amplituda",
            "difficulty": 2,
            "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
            "tags": [
              "Oscylator",
              "Sprężyna",
              "Amplituda",
              "Energia całkowita"
            ],
            "problem": "<p class=\"problem-paragraph\">Klocek $0{,}50\\text{ kg}$ na gładkim poziomym torze jest przymocowany do sprężyny o $k = 100\\text{ N/m}$. W chwili, gdy sprężyna jest rozciągnięta o $0{,}20\\text{ m}$, klocek ma szybkość $2\\text{ m/s}$. Oblicz całkowitą energię mechaniczną układu oraz maksymalne wychylenie.</p>",
            "solution": {
              "givens": "$m = 0{,}50\\text{ kg}$, $k = 100\\text{ N/m}$, $x = 0{,}20\\text{ m}$, $v = 2\\text{ m/s}$.",
              "steps": [
                {
                  "title": "Całkowita energia mechaniczna układu",
                  "content": "$$E = E_k + E_s = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2$$\n$$E = \\frac{1}{2} \\cdot 0{,}50 \\cdot 2^2 + \\frac{1}{2} \\cdot 100 \\cdot (0{,}20)^2 = 1\\text{ J} + 2\\text{ J} = 3\\text{ J}$$"
                },
                {
                  "title": "Wyznaczenie maksymalnego wychylenia (amplitudy)",
                  "content": "W punktach skrajnych prędkość klocka spada do zera ($v = 0$), więc cała energia układu ma postać energii sprężystości:\n$$\\frac{1}{2}k x_{\\max}^2 = E \\implies \\frac{1}{2} \\cdot 100 \\cdot x_{\\max}^2 = 3 \\implies 50 x_{\\max}^2 = 3$$\n$$x_{\\max} = \\sqrt{\\frac{3}{50}} = \\sqrt{\\frac{6}{100}} = \\frac{\\sqrt{6}}{10} \\approx 0{,}245\\text{ m}$$"
                }
              ],
              "answer": "Całkowita energia mechaniczna układu wynosi $3\\text{ J}$, a maksymalne wychylenie sprężyny to około $0{,}245\\text{ m} = 24{,}5\\text{ cm}$."
            }
          },
          {
            "id": "p-zad-25",
            "number": 25,
            "title": "Zadanie 25. Zjazd z gładkiej równi i hamowanie tarciem",
            "difficulty": 3,
            "source": "Zbiór autorski Matura 2027 • Rodzaje energii",
            "tags": [
              "Zachowanie energii",
              "Praca tarcia",
              "Zadanie maturalne"
            ],
            "problem": "<p class=\"problem-paragraph\">Ciało $2\\text{ kg}$ zjeżdża ze spoczynku z wysokości $4\\text{ m}$ i po gładkim odcinku poziomym wjeżdża na szorstką drogę. Tarcie na drodze poziomej ma wartość $8\\text{ N}$. Oblicz drogę na tej drodze do zatrzymania. Następnie podaj, jaka część początkowej energii mechanicznej została rozproszona podczas zjazdu.</p>\n",
            "solution": {
              "givens": "$m = 2\\text{ kg}$, $h = 4\\text{ m}$, $T = 8\\text{ N}$ (na drodze poziomej), równia i odcinek początkowy są idealnie gładkie, $g = 10\\text{ m/s}^2$.",
              "steps": [
                {
                  "title": "Energia początkowa ciała",
                  "content": "Początkowa energia mechaniczna na szczycie równi:\n$$E = mgh = 2\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 4\\text{ m} = 80\\text{ J}$$\nZjazd ze stoku i odcinek płaski są gładkie (brak sił tarcia), więc ciało wjeżdża na odcinek szorstki z pełną energią $E_k = 80\\text{ J}$."
                },
                {
                  "title": "Droga do zatrzymania na drodze szorstkiej",
                  "content": "Cała energia kinetyczna ciała zostaje zniwelowana przez pracę siły tarcia:\n$$W_t = -T \\cdot s \\implies -8s = -80 \\implies s = 10\\text{ m}$$"
                },
                {
                  "title": "Część energii rozproszona podczas samego zjazdu",
                  "content": "Podczas samego zjazdu z równi nie działały żadne siły oporu ani tarcie. Zatem podczas zjazdu rozproszono dokładnie $0\\%$ energii początkowej (całe rozproszenie następuje dopiero na drodze poziomej)."
                }
              ],
              "answer": "Droga do zatrzymania na szorstkiej nawierzchni wynosi $10\\text{ m}$. Podczas samego zjazdu z równi rozproszono $0\\%$ początkowej energii."
            }
          },
          {
            "id": "p-zad-26",
            "number": 26,
            "title": "Zadanie 26. Proste zderzenie niesprężyste wózków",
            "difficulty": 1,
            "source": "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
            "tags": [
              "Zderzenie niesprężyste",
              "Zachowanie pędu",
              "Zadanie zamknięte"
            ],
            "correctOption": "B",
            "problem": "<p class=\"problem-paragraph\">Wózek $2\\text{ kg}$ jedzie w prawo z szybkością $3\\text{ m/s}$ i zderza się z nieruchomym wózkiem $1\\text{ kg}$. Wózki po zderzeniu sczepiają się. Wskaż wspólną prędkość.</p>\n<div class=\"problem-options-list\" data-correct=\"B\">\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">$1\\text{ m/s}$ w prawo</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">$2\\text{ m/s}$ w prawo</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">$3\\text{ m/s}$ w prawo</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">$6\\text{ m/s}$ w prawo</span></div>\n</div>",
            "solution": {
              "givens": "$m_1 = 2\\text{ kg}$, $v_1 = 3\\text{ m/s}$, $m_2 = 1\\text{ kg}$, $v_2 = 0$.",
              "steps": [
                {
                  "title": "Zastosowanie zasady zachowania pędu",
                  "content": "Zderzenie jest niesprężyste, więc wózki poruszają się z jedną wspólną prędkością $v$:\n$$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v$$\n$$2\\text{ kg} \\cdot 3\\text{ m/s} + 1\\text{ kg} \\cdot 0 = (2\\text{ kg} + 1\\text{ kg}) v \\implies 6 = 3v \\implies v = 2\\text{ m/s}$$"
                }
              ],
              "answer": "Poprawna odpowiedź: B ($2\\text{ m/s}$ w prawo)."
            }
          },
          {
            "id": "p-zad-27",
            "number": 27,
            "title": "Zadanie 27. Zderzenie czołowe niesprężyste",
            "difficulty": 1,
            "source": "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
            "tags": [
              "Zderzenie niesprężyste",
              "Wektory pędu",
              "Ruch naprzeciw"
            ],
            "problem": "<p class=\"problem-paragraph\">Wózek $1\\text{ kg}$ porusza się w prawo z $6\\text{ m/s}$, a wózek $2\\text{ kg}$ w lewo z $2\\text{ m/s}$. Zderzają się niesprężyście i poruszają dalej razem. Oblicz wartość i zwrot wspólnej prędkości.</p>",
            "solution": {
              "givens": "$m_1 = 1\\text{ kg}$, $v_1 = +6\\text{ m/s}$ (w prawo), $m_2 = 2\\text{ kg}$, $v_2 = -2\\text{ m/s}$ (w lewo).",
              "steps": [
                {
                  "title": "Zastosowanie zasady zachowania pędu ze zwrotami",
                  "content": "Przyjmując zwrot w prawo jako dodatni:\n$$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v$$\n$$1\\text{ kg} \\cdot 6\\text{ m/s} + 2\\text{ kg} \\cdot (-2\\text{ m/s}) = (1\\text{ kg} + 2\\text{ kg}) v$$\n$$6 - 4 = 3v \\implies 2 = 3v \\implies v = \\frac{2}{3}\\text{ m/s} \\approx 0{,}67\\text{ m/s}$$"
                },
                {
                  "title": "Interpretacja zwrotu prędkości",
                  "content": "Dodatni znak wyniku ($v > 0$) oznacza, że sczepione wózki kontynuują ruch w prawo (zgodnie ze zwrotem początkowym pierwszego wózka)."
                }
              ],
              "answer": "Wspólna prędkość wynosi $\\frac{2}{3}\\text{ m/s} \\approx 0{,}67\\text{ m/s}$ ze zwrotem w prawo."
            }
          },
          {
            "id": "p-zad-28",
            "number": 28,
            "title": "Zadanie 28. Wyrzucenie ładunku z łodzi (zasada zachowania pędu)",
            "difficulty": 2,
            "source": "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
            "tags": [
              "Zachowanie pędu",
              "Układ izolowany"
            ],
            "problem": "<p class=\"problem-paragraph\">Nieruchoma łódź z osobą ma masę $80\\text{ kg}$. Osoba wyrzuca poziomo plecak o masie $4\\text{ kg}$ z prędkością $5\\text{ m/s}$ w prawo. Oblicz prędkość łodzi z osobą po wyrzuceniu plecaka. Pomijamy opory wody.</p>",
            "solution": {
              "givens": "$M = 80\\text{ kg}$, $m_p = 4\\text{ kg}$, $v_p = +5\\text{ m/s}$ (w prawo), $p_{\\text{pocz}} = 0$.",
              "steps": [
                {
                  "title": "Zasada zachowania pędu w układzie izolowanym",
                  "content": "Układ początkowo spoczywał, więc całkowity pęd początkowy wynosi zero ($p_{\\text{pocz}} = 0$):\n$$p_{\\text{pocz}} = p_{\\text{końc}} \\implies 0 = M v_Ł + m_p v_p$$\n$$0 = 80\\text{ kg} \\cdot v_Ł + 4\\text{ kg} \\cdot 5\\text{ m/s} \\implies 80 v_Ł = -20 \\implies v_Ł = -\\frac{20}{80} = -0{,}25\\text{ m/s}$$"
                },
                {
                  "title": "Interpretacja znaku i wartości prędkości",
                  "content": "Znak minus oznacza, że łódź porusza się w lewo (przeciwnie do zwrotu wyrzuconego plecaka) z szybkością $0{,}25\\text{ m/s}$."
                }
              ],
              "answer": "Łódź z osobą porusza się z szybkością $0{,}25\\text{ m/s}$ w lewo."
            }
          },
          {
            "id": "p-zad-29",
            "number": 29,
            "title": "Zadanie 29. Dwuwymiarowe zderzenie niesprężyste wózków",
            "difficulty": 2,
            "source": "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
            "tags": [
              "Zderzenie 2D",
              "Pęd wektorowy",
              "Składowe pędu"
            ],
            "problem": "<p class=\"problem-paragraph\">Dwa wózki po zderzeniu sczepiają się. Pierwszy ma masę $2\\text{ kg}$ i prędkość $3\\text{ m/s}$ na wschód, drugi ma masę $1\\text{ kg}$ i prędkość $4\\text{ m/s}$ na północ. Wyznacz składowe oraz wartość wspólnej prędkości po zderzeniu.</p>",
            "solution": {
              "givens": "$m_1 = 2\\text{ kg}$, $\\vec{v}_1 = [3, 0]\\text{ m/s}$ (wschód), $m_2 = 1\\text{ kg}$, $\\vec{v}_2 = [0, 4]\\text{ m/s}$ (północ).",
              "steps": [
                {
                  "title": "Zasada zachowania pędu dla poszczególnych osi",
                  "content": "Łączna masa po sczepieniu: $M = m_1 + m_2 = 2\\text{ kg} + 1\\text{ kg} = 3\\text{ kg}$.\nDla osi $x$ (kierunek wschód):\n$$(m_1 + m_2) v_x = m_1 v_{1x} \\implies 3\\text{ kg} \\cdot v_x = 2\\text{ kg} \\cdot 3\\text{ m/s} \\implies v_x = 2\\text{ m/s}$$\nDla osi $y$ (kierunek północ):\n$$(m_1 + m_2) v_y = m_2 v_{2y} \\implies 3\\text{ kg} \\cdot v_y = 1\\text{ kg} \\cdot 4\\text{ m/s} \\implies v_y = \\frac{4}{3}\\text{ m/s} \\approx 1{,}33\\text{ m/s}$$"
                },
                {
                  "title": "Wyznaczenie wartości prędkości wypadkowej",
                  "content": "Z twierdzenia Pitagorasa:\n$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{2^2 + \\left(\\frac{4}{3}\\right)^2} = \\sqrt{4 + \\frac{16}{9}} = \\sqrt{\\frac{52}{9}} = \\frac{\\sqrt{52}}{3} \\approx 2{,}40\\text{ m/s}$$"
                }
              ],
              "answer": "Składowe prędkości wynoszą $v_x = 2\\text{ m/s}$ oraz $v_y = \\frac{4}{3}\\text{ m/s}$, a wartość prędkości wypadkowej wynosi około $2{,}40\\text{ m/s}$."
            }
          },
          {
            "id": "p-zad-30",
            "number": 30,
            "title": "Zadanie 30. Względny ubytek energii w zderzeniu niesprężystym",
            "difficulty": 2,
            "source": "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
            "tags": [
              "Zderzenie niesprężyste",
              "Ubytek energii",
              "Zadanie zamknięte"
            ],
            "correctOption": "C",
            "problem": "<p class=\"problem-paragraph\">Wózek $2\\text{ kg}$ o szybkości $4\\text{ m/s}$ uderza w nieruchomy wózek $2\\text{ kg}$ i sczepia się z nim. Jaka część początkowej energii kinetycznej układu została utracona w zderzeniu?</p>\n<div class=\"problem-options-list\" data-correct=\"C\">\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">$0\\%$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">$25\\%$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">$50\\%$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">$75\\%$</span></div>\n</div>",
            "solution": {
              "givens": "$m_1 = 2\\text{ kg}$, $v_1 = 4\\text{ m/s}$, $m_2 = 2\\text{ kg}$, $v_2 = 0$.",
              "steps": [
                {
                  "title": "Wspólna prędkość z zasady zachowania pędu",
                  "content": "$$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v$$\n$$2\\text{ kg} \\cdot 4\\text{ m/s} + 0 = (2\\text{ kg} + 2\\text{ kg}) v \\implies 8 = 4v \\implies v = 2\\text{ m/s}$$"
                },
                {
                  "title": "Porównanie energii kinetycznych przed i po zderzeniu",
                  "content": "Energia kinetyczna początkowa:\n$$E_{k,\\text{pocz}} = \\frac{1}{2}m_1 v_1^2 = \\frac{1}{2} \\cdot 2\\text{ kg} \\cdot (4\\text{ m/s})^2 = 16\\text{ J}$$\nEnergia kinetyczna końcowa po sczepieniu:\n$$E_{k,\\text{końc}} = \\frac{1}{2}(m_1 + m_2) v^2 = \\frac{1}{2} \\cdot 4\\text{ kg} \\cdot (2\\text{ m/s})^2 = 8\\text{ J}$$"
                },
                {
                  "title": "Wyznaczenie względnego ubytku energii",
                  "content": "$$\\frac{\\Delta E_k}{E_{k,\\text{pocz}}} = \\frac{E_{k,\\text{pocz}} - E_{k,\\text{końc}}}{E_{k,\\text{pocz}}} = \\frac{16\\text{ J} - 8\\text{ J}}{16\\text{ J}} = \\frac{8}{16} = 0{,}50 = 50\\%$$"
                }
              ],
              "answer": "Poprawna odpowiedź: C ($50\\%$). W zderzeniu niesprężystym ciał o jednakowej masie utracie ulega dokładnie $50\\%$ energii kinetycznej."
            }
          },
          {
            "id": "p-zad-31",
            "number": 31,
            "title": "Zadanie 31. Uderzenie plasteliny w klocek",
            "difficulty": 2,
            "source": "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
            "tags": [
              "Zderzenie niesprężyste",
              "Bilans energii",
              "Ubytek energii"
            ],
            "problem": "<p class=\"problem-paragraph\">Kula plasteliny $0{,}10\\text{ kg}$ leci poziomo z szybkością $20\\text{ m/s}$ i przykleja się do nieruchomego klocka $0{,}90\\text{ kg}$ na gładkim stole. Oblicz wspólną szybkość oraz określ, jaka część początkowej energii kinetycznej została utracona.</p>",
            "solution": {
              "givens": "$m_1 = 0{,}10\\text{ kg}$, $v_1 = 20\\text{ m/s}$, $m_2 = 0{,}90\\text{ kg}$, $v_2 = 0$.",
              "steps": [
                {
                  "title": "Wyznaczenie wspólnej szybkości z zasady zachowania pędu",
                  "content": "$$m_1 v_1 = (m_1 + m_2) v \\implies v = \\frac{m_1 v_1}{m_1 + m_2} = \\frac{0{,}10\\text{ kg} \\cdot 20\\text{ m/s}}{0{,}10\\text{ kg} + 0{,}90\\text{ kg}} = \\frac{2}{1{,}0} = 2\\text{ m/s}$$"
                },
                {
                  "title": "Bilans energii kinetycznej i ubytek względny",
                  "content": "Energia początkowa:\n$$E_{k,\\text{pocz}} = \\frac{1}{2}m_1 v_1^2 = \\frac{1}{2} \\cdot 0{,}10\\text{ kg} \\cdot (20\\text{ m/s})^2 = 20\\text{ J}$$\nEnergia końcowa:\n$$E_{k,\\text{końc}} = \\frac{1}{2}(m_1 + m_2) v^2 = \\frac{1}{2} \\cdot 1{,}0\\text{ kg} \\cdot (2\\text{ m/s})^2 = 2\\text{ J}$$\nUbytek energii wynosi $\\Delta E_k = 20\\text{ J} - 2\\text{ J} = 18\\text{ J}$, co stanowi:\n$$\\frac{\\Delta E_k}{E_{k,\\text{pocz}}} = \\frac{18\\text{ J}}{20\\text{ J}} = 0{,}90 = 90\\%$$"
                }
              ],
              "answer": "Wspólna szybkość wynosi $2\\text{ m/s}$. Układ utracił $18\\text{ J}$ energii kinetycznej, co stanowi $90\\%$ energii początkowej."
            }
          },
          {
            "id": "p-zad-32",
            "number": 32,
            "title": "Zadanie 32. Zderzenie niesprężyste i hamowanie tarciem",
            "difficulty": 2,
            "source": "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
            "tags": [
              "Zderzenie niesprężyste",
              "Praca tarcia",
              "Droga hamowania"
            ],
            "problem": "<p class=\"problem-paragraph\">Wózek $1\\text{ kg}$ jedzie z $8\\text{ m/s}$ i zderza się niesprężyście z nieruchomym wózkiem $3\\text{ kg}$. Po zderzeniu oba wózki poruszają się po szorstkim torze, na którym siła tarcia ma wartość $4\\text{ N}$. Oblicz drogę do zatrzymania układu.</p>",
            "solution": {
              "givens": "$m_1 = 1\\text{ kg}$, $v_1 = 8\\text{ m/s}$, $m_2 = 3\\text{ kg}$, $v_2 = 0$, $T = 4\\text{ N}$.",
              "steps": [
                {
                  "title": "Wyznaczenie prędkości po zderzeniu z zasady zachowania pędu",
                  "content": "$$m_1 v_1 = (m_1 + m_2) v \\implies v = \\frac{m_1 v_1}{m_1 + m_2} = \\frac{1\\text{ kg} \\cdot 8\\text{ m/s}}{1\\text{ kg} + 3\\text{ kg}} = \\frac{8}{4} = 2\\text{ m/s}$$"
                },
                {
                  "title": "Energia kinetyczna sczepionych ciał tuż po zderzeniu",
                  "content": "$$E_{k,\\text{końc}} = \\frac{1}{2}(m_1 + m_2) v^2 = \\frac{1}{2} \\cdot 4\\text{ kg} \\cdot (2\\text{ m/s})^2 = 8\\text{ J}$$"
                },
                {
                  "title": "Wyznaczenie drogi hamowania z twierdzenia o pracy i energii",
                  "content": "Praca siły tarcia niweczy energię kinetyczną układu ($W_t = -E_{k,\\text{końc}}$):\n$$-T \\cdot s = -E_{k,\\text{końc}} \\implies s = \\frac{E_{k,\\text{końc}}}{T} = \\frac{8\\text{ J}}{4\\text{ N}} = 2\\text{ m}$$"
                }
              ],
              "answer": "Droga do zatrzymania układu wynosi $2\\text{ m}$.",
              "trap": "Nie wolno brać energii sprzed zderzenia ($E_{k,\\text{pocz}} = 32\\text{ J}$), ponieważ aż $24\\text{ J}$ zostało bezpowrotnie zamienione na ciepło w samym akcie zderzenia!"
            }
          },
          {
            "id": "p-zad-33",
            "number": 33,
            "title": "Zadanie 33. Zjazd ze stoku, zderzenie niesprężyste i ubytek energii",
            "difficulty": 3,
            "source": "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
            "tags": [
              "Zjazd z równi",
              "Zderzenie niesprężyste",
              "Bilans energii"
            ],
            "problem": "<p class=\"problem-paragraph\">Klocek $m_1 = 0{,}50\\text{ kg}$ zsuwa się bez tarcia z wysokości $1{,}8\\text{ m}$ i na poziomym torze zderza się niesprężyście z nieruchomym klockiem $m_2 = 1{,}0\\text{ kg}$. Po zderzeniu klocki poruszają się razem. Oblicz szybkość pierwszego klocka tuż przed zderzeniem, wspólną szybkość tuż po zderzeniu i ubytek energii kinetycznej w samym zderzeniu.</p>",
            "solution": {
              "givens": "$m_1 = 0{,}50\\text{ kg}$, $h = 1{,}8\\text{ m}$, $m_2 = 1{,}0\\text{ kg}$, $g = 10\\text{ m/s}^2$.",
              "steps": [
                {
                  "title": "Szybkość pierwszego klocka przed zderzeniem (z ZZE)",
                  "content": "$$m_1 gh = \\frac{1}{2}m_1 v_1^2 \\implies v_1 = \\sqrt{2gh} = \\sqrt{2 \\cdot 10\\text{ m/s}^2 \\cdot 1{,}8\\text{ m}} = \\sqrt{36} = 6\\text{ m/s}$$"
                },
                {
                  "title": "Wspólna szybkość po zderzeniu (z ZZP)",
                  "content": "$$m_1 v_1 = (m_1 + m_2) v \\implies v = \\frac{m_1 v_1}{m_1 + m_2} = \\frac{0{,}50\\text{ kg} \\cdot 6\\text{ m/s}}{0{,}50\\text{ kg} + 1{,}0\\text{ kg}} = \\frac{3}{1{,}5} = 2\\text{ m/s}$$"
                },
                {
                  "title": "Wyznaczenie ubytku energii kinetycznej w zderzeniu",
                  "content": "Energia tuż przed zderzeniem:\n$$E_{k,\\text{pocz}} = \\frac{1}{2}m_1 v_1^2 = \\frac{1}{2} \\cdot 0{,}50\\text{ kg} \\cdot (6\\text{ m/s})^2 = 9\\text{ J}$$\nEnergia tuż po zderzeniu:\n$$E_{k,\\text{końc}} = \\frac{1}{2}(m_1 + m_2) v^2 = \\frac{1}{2} \\cdot 1{,}50\\text{ kg} \\cdot (2\\text{ m/s})^2 = 3\\text{ J}$$\nUbytek energii kinetycznej zamienionej na ciepło:\n$$\\Delta E_k = E_{k,\\text{pocz}} - E_{k,\\text{końc}} = 9\\text{ J} - 3\\text{ J} = 6\\text{ J}$$"
                }
              ],
              "answer": "Szybkość przed zderzeniem: $6\\text{ m/s}$, wspólna szybkość po zderzeniu: $2\\text{ m/s}$, ubytek energii kinetycznej: $6\\text{ J}$."
            }
          },
          {
            "id": "p-zad-34",
            "number": 34,
            "title": "Zadanie 34. Warunek zderzenia doskonale sprężystego",
            "difficulty": 1,
            "source": "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
            "tags": [
              "Zderzenie sprężyste",
              "Prawa zachowania",
              "Zadanie zamknięte"
            ],
            "correctOption": "C",
            "problem": "<p class=\"problem-paragraph\">Wskaż wielkości, które są zachowane w izolowanym zderzeniu doskonale sprężystym dwóch ciał.</p>\n<div class=\"problem-options-list\" data-correct=\"C\">\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">Tylko pęd</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">Tylko energia kinetyczna</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">Pęd i energia kinetyczna</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">Pęd i prędkości obu ciał</span></div>\n</div>",
            "solution": {
              "givens": "Układ izolowany, zderzenie doskonale sprężyste.",
              "steps": [
                {
                  "title": "Zasady zachowania w zderzeniu sprężystym",
                  "content": "W każdym zderzeniu w układzie izolowanym zachowany jest pęd ($\\sum \\vec{p}_{\\text{pocz}} = \\sum \\vec{p}_{\\text{końc}}$). Zderzenie jest doskonale sprężyste wtedy i tylko wtedy, gdy nie występują straty energii na ciepło ani odkształcenia trwałe, czyli zachowana jest również całkowita energia kinetyczna ($\\sum E_{k,\\text{pocz}} = \\sum E_{k,\\text{końc}}$)."
                }
              ],
              "answer": "Poprawna odpowiedź: C (pęd i energia kinetyczna)."
            }
          },
          {
            "id": "p-zad-35",
            "number": 35,
            "title": "Zadanie 35. Zderzenie centralne sprężyste ciał o równych masach",
            "difficulty": 1,
            "source": "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
            "tags": [
              "Zderzenie sprężyste",
              "Równe masy",
              "Zadanie zamknięte"
            ],
            "correctOption": "A",
            "problem": "<p class=\"problem-paragraph\">Kula o masie $1\\text{ kg}$ porusza się w prawo z szybkością $4\\text{ m/s}$ i uderza sprężyście w nieruchomą kulę o tej samej masie. Wskaż prędkości kul po zderzeniu.</p>\n<div class=\"problem-options-list\" data-correct=\"A\">\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">$v_1' = 0,\\ v_2' = 4\\text{ m/s}$ w prawo</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">$v_1' = -2\\text{ m/s},\\ v_2' = +2\\text{ m/s}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">$v_1' = +2\\text{ m/s},\\ v_2' = +2\\text{ m/s}$</span></div>\n  <div class=\"problem-option-item\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">$v_1' = -4\\text{ m/s},\\ v_2' = 0$</span></div>\n</div>",
            "solution": {
              "givens": "$m_1 = m_2 = 1\\text{ kg}$, $v_1 = 4\\text{ m/s}$ (w prawo), $v_2 = 0$.",
              "steps": [
                {
                  "title": "Zastosowanie układu równań pędu i prędkości względnych",
                  "content": "Dla zderzenia sprężystego ciał o jednakowej masie ($m_1 = m_2$):\n$$\\begin{cases} v_1 + v_2 = v_1' + v_2' \\\\\\\\ v_1 - v_2 = -(v_1' - v_2') \\end{cases}$$\nPodstawiając $v_1 = 4\\text{ m/s}$ oraz $v_2 = 0$:\n$$\\begin{cases} v_1' + v_2' = 4 \\\\\\\\ -v_1' + v_2' = 4 \\end{cases} \\implies v_1' = 0, \\quad v_2' = 4\\text{ m/s}$$\nCiała o jednakowych masach w centralnym zderzeniu sprężystym wymieniają się prędkościami."
                }
              ],
              "answer": "Poprawna odpowiedź: A ($v_1' = 0,\\ v_2' = 4\\text{ m/s}$ w prawo). Kula uderzająca zatrzymuje się, a kula uderzana przejmuje całą jej prędkość i energię."
            }
          },
          {
            "id": "p-zad-36",
            "number": 36,
            "title": "Zadanie 36. Zderzenie sprężyste kuli z dwukrotnie cięższą kulą",
            "difficulty": 2,
            "source": "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
            "tags": [
              "Zderzenie sprężyste",
              "Układ równań",
              "Prędkości względne"
            ],
            "problem": "<p class=\"problem-paragraph\">Kula o masie $1\\text{ kg}$ porusza się w prawo z szybkością $6\\text{ m/s}$ i zderza się centralnie i sprężyście z nieruchomą kulą o masie $2\\text{ kg}$. Oblicz prędkości obu kul po zderzeniu.</p>",
            "solution": {
              "givens": "$m_1 = 1\\text{ kg}$, $v_1 = +6\\text{ m/s}$, $m_2 = 2\\text{ kg}$, $v_2 = 0$.",
              "steps": [
                {
                  "title": "Układ równań pędu i prędkości względnych",
                  "content": "Zasada zachowania pędu:\n$$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2' \\implies 1 \\cdot 6 + 2 \\cdot 0 = v_1' + 2v_2' \\implies v_1' + 2v_2' = 6$$\nRelacja prędkości względnych w zderzeniu sprężystym:\n$$v_1 - v_2 = -(v_1' - v_2') \\implies 6 - 0 = -v_1' + v_2' \\implies -v_1' + v_2' = 6$$"
                },
                {
                  "title": "Rozwiązanie układu równań liniowych",
                  "content": "Dodając oba równania stronami, eliminujemy $v_1'$:\n$$3v_2' = 12 \\implies v_2' = 4\\text{ m/s}$$\nPodstawiając do drugiego równania:\n$$v_1' = v_2' - 6 = 4 - 6 = -2\\text{ m/s}$$\nZnak minus oznacza, że lżejsza kula odbija się i zawraca w lewo."
                }
              ],
              "answer": "Prędkości po zderzeniu wynoszą: $v_1' = -2\\text{ m/s}$ (w lewo) oraz $v_2' = 4\\text{ m/s}$ (w prawo)."
            }
          },
          {
            "id": "p-zad-37",
            "number": 37,
            "title": "Zadanie 37. Czołowe zderzenie sprężyste przy zerowym pędzie całkowitym",
            "difficulty": 2,
            "source": "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
            "tags": [
              "Zderzenie sprężyste",
              "Zerowy pęd",
              "Układ równań"
            ],
            "problem": "<p class=\"problem-paragraph\">Dwie kule o masach $m_1 = 2\\text{ kg}$ i $m_2 = 1\\text{ kg}$ poruszają się naprzeciwko siebie z szybkościami odpowiednio $v_1 = 2\\text{ m/s}$ (w prawo) oraz $v_2 = 4\\text{ m/s}$ (w lewo). Zderzenie jest centralne i doskonale sprężyste. Wyznacz prędkości kul po zderzeniu.</p>",
            "solution": {
              "givens": "$m_1 = 2\\text{ kg}$, $v_1 = +2\\text{ m/s}$ (w prawo), $m_2 = 1\\text{ kg}$, $v_2 = -4\\text{ m/s}$ (w lewo).",
              "steps": [
                {
                  "title": "Układ równań zachowania pędu i prędkości względnych",
                  "content": "Całkowity pęd początkowy układu wynosi:\n$$p_{\\text{pocz}} = m_1 v_1 + m_2 v_2 = 2 \\cdot 2 + 1 \\cdot (-4) = 4 - 4 = 0$$\nZasada zachowania pędu po zderzeniu:\n$$m_1 v_1' + m_2 v_2' = 0 \\implies 2v_1' + v_2' = 0 \\implies v_2' = -2v_1'$$\nRelacja prędkości względnych w zderzeniu sprężystym:\n$$v_1 - v_2 = -(v_1' - v_2') \\implies 2 - (-4) = -v_1' + v_2' \\implies -v_1' + v_2' = 6$$"
                },
                {
                  "title": "Wyznaczenie prędkości końcowych",
                  "content": "Podstawiając $v_2' = -2v_1'$ do równania prędkości względnych:\n$$-v_1' + (-2v_1') = 6 \\implies -3v_1' = 6 \\implies v_1' = -2\\text{ m/s}$$\n$$v_2' = -2v_1' = -2 \\cdot (-2) = +4\\text{ m/s}$$\nGdy całkowity pęd układu wynosi zero, ciała po zderzeniu sprężystym odwracają zwroty swoich prędkości, zachowując ich wartości."
                }
              ],
              "answer": "Prędkości po zderzeniu wynoszą: $v_1' = -2\\text{ m/s}$ (w lewo) oraz $v_2' = +4\\text{ m/s}$ (w prawo)."
            }
          },
          {
            "id": "p-zad-38",
            "number": 38,
            "title": "Zadanie 38. Weryfikacja sprężystości zderzenia wózków",
            "difficulty": 2,
            "source": "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
            "tags": [
              "Zderzenie sprężyste",
              "Bilans energii",
              "Zachowanie pędu"
            ],
            "problem": "<p class=\"problem-paragraph\">Wózek o masie $m_1 = 1\\text{ kg}$ jadący z prędkością $+5\\text{ m/s}$ uderza w spoczywający wózek o masie $m_2 = 4\\text{ kg}$. Po zderzeniu pierwszy wózek cofa się z prędkością $v_1' = -3\\text{ m/s}$. Ustal, czy to zderzenie mogło być doskonale sprężyste.</p>",
            "solution": {
              "givens": "$m_1 = 1\\text{ kg}$, $v_1 = +5\\text{ m/s}$, $m_2 = 4\\text{ kg}$, $v_2 = 0$, $v_1' = -3\\text{ m/s}$.",
              "steps": [
                {
                  "title": "Wyznaczenie prędkości drugiego wózka z zasady zachowania pędu",
                  "content": "$$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$$\n$$1 \\cdot 5 + 4 \\cdot 0 = 1 \\cdot (-3) + 4 \\cdot v_2' \\implies 5 = -3 + 4v_2' \\implies 4v_2' = 8 \\implies v_2' = 2\\text{ m/s}$$"
                },
                {
                  "title": "Porównanie energii kinetycznych przed i po zderzeniu",
                  "content": "Energia kinetyczna przed zderzeniem:\n$$E_{k,\\text{pocz}} = \\frac{1}{2}m_1 v_1^2 = \\frac{1}{2} \\cdot 1\\text{ kg} \\cdot (5\\text{ m/s})^2 = 12{,}5\\text{ J}$$\nEnergia kinetyczna po zderzeniu:\n$$E_{k,\\text{końc}} = \\frac{1}{2}m_1 (v_1')^2 + \\frac{1}{2}m_2 (v_2')^2 = \\frac{1}{2} \\cdot 1 \\cdot (-3)^2 + \\frac{1}{2} \\cdot 4 \\cdot 2^2 = 4{,}5\\text{ J} + 8\\text{ J} = 12{,}5\\text{ J}$$\nPonieważ $E_{k,\\text{końc}} = E_{k,\\text{pocz}} = 12{,}5\\text{ J}$, energia kinetyczna została w $100\\%$ zachowana."
                }
              ],
              "answer": "Tak, zderzenie mogło być doskonale sprężyste, ponieważ energia kinetyczna układu została w pełni zachowana ($E_{k,\\text{końc}} = E_{k,\\text{pocz}} = 12{,}5\\text{ J}$)."
            }
          },
          {
            "id": "p-zad-39",
            "number": 39,
            "title": "Zadanie 39. Dwuwymiarowe zderzenie sprężyste jednakowych kul",
            "difficulty": 3,
            "source": "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
            "tags": [
              "Zderzenie 2D",
              "Zachowanie energii",
              "Wektory pędu"
            ],
            "problem": "<p class=\"problem-paragraph\">Dwie jednakowe kule poruszają się początkowo: A z szybkością $5\\text{ m/s}$, B spoczywa. Po sprężystym zderzeniu w płaszczyźnie kula A ma szybkość $3\\text{ m/s}$. Oblicz szybkość kuli B i wykaż, że wektory prędkości kul po zderzeniu są prostopadłe.</p>",
            "solution": {
              "givens": "$m_A = m_B = m$, $v_0 = 5\\text{ m/s}$, $v_B = 0$, $v_A' = 3\\text{ m/s}$.",
              "steps": [
                {
                  "title": "Obliczenie szybkości kuli B z zasady zachowania energii",
                  "content": "Dla jednakowych mas masa $m$ upraszcza się w równaniu energii:\n$$\\frac{1}{2}m v_0^2 = \\frac{1}{2}m (v_A')^2 + \\frac{1}{2}m (v_B')^2 \\implies v_0^2 = (v_A')^2 + (v_B')^2$$\n$$5^2 = 3^2 + (v_B')^2 \\implies 25 = 9 + (v_B')^2 \\implies (v_B')^2 = 16 \\implies v_B' = 4\\text{ m/s}$$"
                },
                {
                  "title": "Wyznaczenie kąta między wektorami prędkości z wektorowej ZZP",
                  "content": "Z zasady zachowania pędu: $\\vec{v}_0 = \\vec{v}_A' + \\vec{v}_B'.$\nPodnosząc to równanie skalarnie do kwadratu:\n$$v_0^2 = (\\vec{v}_A' + \\vec{v}_B')^2 = (v_A')^2 + (v_B')^2 + 2\\vec{v}_A' \\cdot \\vec{v}_B'$$\nPorównując z równaniem energii ($v_0^2 = (v_A')^2 + (v_B')^2$), otrzymujemy:\n$$2\\vec{v}_A' \\cdot \\vec{v}_B' = 0 \\implies \\vec{v}_A' \\perp \\vec{v}_B' \\implies \\alpha = 90^\\circ$$"
                }
              ],
              "answer": "Szybkość kuli B wynosi $4\\text{ m/s}$, a kąt między wektorami prędkości obu kul po zderzeniu wynosi $90^\\circ$."
            }
          },
          {
            "id": "p-zad-40",
            "number": 40,
            "title": "Zadanie 40. Zderzenie sprężyste 2D pod kątem",
            "difficulty": 3,
            "source": "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
            "tags": [
              "Zderzenie 2D",
              "Symetria",
              "Rozproszenie pod kątem"
            ],
            "problem": "<p class=\"problem-paragraph\">Kula o masie $0{,}20\\text{ kg}$ porusza się z szybkością $10\\text{ m/s}$ i zderza się sprężyście z nieruchomą kulą o tej samej masie. Po zderzeniu kula 1 odchyla się pod kątem $45^\\circ$ względem pierwotnego kierunku ruchu. Wyznacz szybkości obu kul po zderzeniu oraz kąt odchylenia kuli 2.</p>",
            "solution": {
              "givens": "$m_1 = m_2 = 0{,}20\\text{ kg}$, $v_0 = 10\\text{ m/s}$, $v_2 = 0$, kąt odchylenia kuli 1: $\\alpha = 45^\\circ$.",
              "steps": [
                {
                  "title": "Wyznaczenie kierunku ruchu kuli 2 z prostopadłości wektorów",
                  "content": "Dla zderzenia sprężystego kul o jednakowej masie z kulą spoczywającą kąt między wektorami prędkości po zderzeniu wynosi $90^\\circ$ ($\\vec{v}_1' \\perp \\vec{v}_2'$).\nSkoro kula 1 odchyliła się o $45^\\circ$ w jedną stronę, to kula 2 musi odchylić się o kąt $90^\\circ - 45^\\circ = 45^\\circ$ w drugą stronę."
                },
                {
                  "title": "Wyznaczenie wartości prędkości z symetrii i zachowania energii",
                  "content": "Z równości kątów i zachowania pędu w osi pionowej wynika symetria szybkości: $v_1' = v_2'.$\nZ zasady zachowania energii kinetycznej:\n$$v_0^2 = (v_1')^2 + (v_2')^2 = 2(v_1')^2$$\n$$10^2 = 2(v_1')^2 \\implies (v_1')^2 = 50 \\implies v_1' = v_2' = \\sqrt{50} = 5\\sqrt{2}\\text{ m/s} \\approx 7{,}07\\text{ m/s}$$"
                }
              ],
              "answer": "Szybkości obu kul po zderzeniu są równe i wynoszą $5\\sqrt{2}\\text{ m/s} \\approx 7{,}07\\text{ m/s}$. Kula 2 odchyla się o kąt $45^\\circ$ w przeciwną stronę niż kula 1."
            }
          },
          {
            "id": "p-zad-41",
            "number": 41,
            "title": "Zadanie 41. Zderzenie sprężyste ciał o różnych masach i prędkościach",
            "difficulty": 3,
            "source": "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
            "tags": [
              "Zderzenie sprężyste",
              "Układ równań liniowych",
              "Prędkości względne"
            ],
            "problem": "<p class=\"problem-paragraph\">Kula $m_1 = 1\\text{ kg}$ porusza się w prawo z szybkością $8\\text{ m/s}$ i dogania kulę $m_2 = 3\\text{ kg}$ poruszającą się w prawo z szybkością $2\\text{ m/s}$. Zderzenie jest centralne i doskonale sprężyste. Wyznacz prędkości obu kul po zderzeniu.</p>",
            "solution": {
              "givens": "$m_1 = 1\\text{ kg}$, $v_1 = +8\\text{ m/s}$, $m_2 = 3\\text{ kg}$, $v_2 = +2\\text{ m/s}$.",
              "steps": [
                {
                  "title": "Układ równań pędu i prędkości względnych",
                  "content": "Zasada zachowania pędu:\n$$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$$\n$$1 \\cdot 8 + 3 \\cdot 2 = 1 \\cdot v_1' + 3 \\cdot v_2' \\implies 8 + 6 = v_1' + 3v_2' \\implies v_1' + 3v_2' = 14$$\nRelacja prędkości względnych w zderzeniu sprężystym:\n$$v_1 - v_2 = -(v_1' - v_2') \\implies 8 - 2 = -v_1' + v_2' \\implies -v_1' + v_2' = 6$$"
                },
                {
                  "title": "Rozwiązanie układu równań liniowych",
                  "content": "Dodając oba równania stronami, eliminujemy $v_1'$:\n$$(v_1' + 3v_2') + (-v_1' + v_2') = 14 + 6 \\implies 4v_2' = 20 \\implies v_2' = 5\\text{ m/s}$$\nPodstawiając do drugiego równania:\n$$v_1' = v_2' - 6 = 5 - 6 = -1\\text{ m/s}$$\nZnak minus oznacza, że kula 1 odbija się i zawraca w lewo z szybkością $1\\text{ m/s}$."
                }
              ],
              "answer": "Prędkości po zderzeniu wynoszą: $v_1' = -1\\text{ m/s}$ (w lewo) oraz $v_2' = 5\\text{ m/s}$ (w prawo)."
            }
          },
          {
            "id": "p-zad-42",
            "number": 42,
            "title": "Zadanie 42. Sprężyste zderzenie wózków m i 3m na torze",
            "difficulty": 3,
            "source": "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
            "tags": [
              "Zadanie wieloetapowe",
              "Układ równań",
              "Bilans energii"
            ],
            "problem": "<p class=\"problem-paragraph\">Na gładkim poziomym torze wózek A o masie $m$ porusza się w prawo z szybkością $v$. Wózek B o masie $3m$ spoczywa. Zderzenie jest centralne i doskonale sprężyste.</p>\n<div class=\"problem-subquestion-item\">\n  <strong class=\"problem-subquestion-letter\">(a)</strong>\n  <span class=\"problem-subquestion-text\">Wyprowadź prędkości obu wózków po zderzeniu w zależności od $v$.</span>\n</div>\n<div class=\"problem-subquestion-item\">\n  <strong class=\"problem-subquestion-letter\">(b)</strong>\n  <span class=\"problem-subquestion-text\">Sprawdź zachowanie pędu i energii kinetycznej.</span>\n</div>\n<div class=\"problem-subquestion-item\">\n  <strong class=\"problem-subquestion-letter\">(c)</strong>\n  <span class=\"problem-subquestion-text\">Ustal, jaka część początkowej energii kinetycznej wózka A pozostanie przy nim po zderzeniu.</span>\n</div>",
            "solution": {
              "givens": "$m_A = m$, $v_A = v$, $m_B = 3m$, $v_B = 0$.",
              "steps": [
                {
                  "title": "(a) Wyprowadzenie prędkości po zderzeniu z układu równań",
                  "content": "Zasada zachowania pędu:\n$$m v_A + 3m v_B = m v_A' + 3m v_B' \\implies m v = m(v_A' + 3v_B') \\implies v_A' + 3v_B' = v$$\nRelacja prędkości względnych w zderzeniu sprężystym:\n$$v_A - v_B = -(v_A' - v_B') \\implies v - 0 = -v_A' + v_B' \\implies -v_A' + v_B' = v$$\nDodając równania stronami:\n$$4v_B' = 2v \\implies v_B' = \\frac{v}{2}$$\nPodstawiając do drugiego równania:\n$$v_A' = v_B' - v = \\frac{v}{2} - v = -\\frac{v}{2}$$\nWózek A odbija się i porusza w lewo z szybkością $\\frac{v}{2}$, a wózek B porusza się w prawo z szybkością $\\frac{v}{2}$."
                },
                {
                  "title": "(b) Kontrola zachowania pędu i energii kinetycznej",
                  "content": "Pęd po zderzeniu:\n$$p_{\\text{końc}} = m v_A' + 3m v_B' = m\\left(-\\frac{v}{2}\\right) + 3m\\left(\\frac{v}{2}\\right) = -\\frac{1}{2}mv + \\frac{3}{2}mv = mv = p_{\\text{pocz}}$$\nEnergia kinetyczna po zderzeniu:\n$$E_{k,\\text{końc}} = \\frac{1}{2}m(v_A')^2 + \\frac{1}{2}(3m)(v_B')^2 = \\frac{1}{2}m\\left(-\\frac{v}{2}\\right)^2 + \\frac{3}{2}m\\left(\\frac{v}{2}\\right)^2 = \\frac{1}{8}mv^2 + \\frac{3}{8}mv^2 = \\frac{1}{2}mv^2 = E_{k,\\text{pocz}}$$\nObie wielkości są ściśle zachowane."
                },
                {
                  "title": "(c) Ułamek energii kinetycznej wózka A",
                  "content": "Energia kinetyczna wózka A po zderzeniu:\n$$E_{kA}' = \\frac{1}{2}m(v_A')^2 = \\frac{1}{2}m\\left(-\\frac{v}{2}\\right)^2 = \\frac{1}{8}mv^2$$\nStosunek do początkowej energii $E_{kA} = \\frac{1}{2}mv^2$:\n$$\\frac{E_{kA}'}{E_{kA}} = \\frac{\\frac{1}{8}mv^2}{\\frac{1}{2}mv^2} = \\frac{1}{4} = 25\\%$$"
                }
              ],
              "answer": "(a) $v_A' = -\\frac{v}{2}$ (wózek A odbija się w lewo z szybkością $v/2$), $v_B' = \\frac{v}{2}$ (wózek B porusza się w prawo z szybkością $v/2$). (b) Pęd wynosi $mv$, energia kinetyczna $\\frac{1}{2}mv^2$ — obie wielkości są zachowane. (c) Przy wózku A pozostaje $\\frac{1}{4}$ ($25\\%$) początkowej energii kinetycznej."
            }
          },
          {
            "id": "matura-cke-praca-2026-czerwiec-zad-3",
            "number": 202606,
            "title": "Matura czerwiec 2026 zad. 3 nowa formuła",
            "year": "2026 czerwiec",
            "difficulty": 3,
            "source": "Matura CKE 2026 (Czerwiec – termin dodatkowy)",
            "link": "https://naukagryzie.pl/arkusze/matura-rozszerzona/fizyka/czerwiec-2026-formula-2023-cke/arkusz.pdf",
            "tags": [
              "Matura CKE",
              "Praca, moc i energia",
              "Zderzenia sprężyste i niesprężyste",
              "Energia kinetyczna"
            ],
            "problem": "<div class=\"task-matura energy-statements\"><h4>Zadanie 3.</h4>\n<p>Klocek A porusza się ze stałą prędkością $\\vec{v}_1$ w stronę nieruchomego klocka B (zobacz rysunek 1.). Do klocka B jest przymocowana sprężyna o współczynniku sprężystości $k$. W pewnym momencie dochodzi do zderzenia klocków. Podczas tego zderzenia sprężyna najpierw jest ściskana, a następnie się rozpręża, w wyniku czego klocek A hamuje, a klocek B przyśpiesza (zobacz rysunki 1.–3.).</p>\n<p>Przyjmij następujące dane i założenia:</p><ul><li>gdy sprężyna jest maksymalnie ściśnięta, to jej odkształcenie względem długości swobodnej oznaczymy jako $\\Delta x_{max}$</li><li>gdy sprężyna jest maksymalnie ściśnięta, to wartości prędkości obu klocków są sobie równe i wynoszą $v_2$</li><li>masy klocków są sobie równe: $m_A=m_B=m$</li></ul>\n<p>oraz</p><ul><li>pomijamy tarcie obu klocków o podłoże oraz opory powietrza</li><li>pomijamy masę sprężyny</li><li>wartość siły sprężystości, z jaką sprężyna działa na klocek, jest wprost proporcjonalna do zmiany długości sprężyny względem jej długości swobodnej</li><li>zderzenie klocków jest idealnie sprężyste.</li></ul>\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-czerwiec-z3-rysunki.png\" alt=\"Rysunki 1.–3. – zderzenie klocków ze sprężyną\" class=\"theory-img\" style=\"max-height:400px;display:block;margin:15px auto;\"></div>\n<h4>Zadanie 3.1. (0–1)</h4><p><strong>Oceń prawdziwość poniższych stwierdzeń. Wybierz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p><table class=\"cke-table\" style=\"width:100%;border-collapse:collapse;margin:15px 0\"><tbody><tr data-correct=\"P\"><td>Gdy sprężyna jest maksymalnie ściśnięta, to wartość siły, z jaką sprężyna działa na klocek A, jest równa wartości siły, z jaką sprężyna działa na klocek B.</td><td class=\"pf-box\" data-pf=\"P\">P</td><td class=\"pf-box\" data-pf=\"F\">F</td></tr><tr data-correct=\"P\"><td>Gdy sprężyna jest maksymalnie ściśnięta, to prędkość względna klocków A i B wynosi zero.</td><td class=\"pf-box\" data-pf=\"P\">P</td><td class=\"pf-box\" data-pf=\"F\">F</td></tr></tbody></table>\n<h4>Zadanie 3.2. (0–4)</h4><p><strong>Wyznacz $\\boldsymbol{\\Delta x_{max}}$ w zależności <u>tylko</u> od: $\\boldsymbol{k}$, $\\boldsymbol{m}$ oraz $\\boldsymbol{v_1}$.</strong></p><p><strong>Zapisz odpowiednie równania i przekształcenia oraz podaj postać wzoru na $\\boldsymbol{\\Delta x_{max}}$.</strong></p></div>",
            "originalTaskId": "matura-cke-2026-czerwiec-zad-3",
            "sourcePages": [
              8,
              9
            ],
            "formula": "2023",
            "solution": {
              "givens": "$m_A = m_B = m$, prędkość początkowa klocka A: $v_1$, klocek B początkowo spoczywa ($v_{B,\\text{pocz}} = 0$), sprężyna o współczynniku sprężystości $k$, brak oporów ruchu i tarcia.",
              "steps": [
                {
                  "title": "Zadanie 3.1 – Analiza prawdziwości stwierdzeń (III zasada dynamiki i ruch względny)",
                  "content": "1. Zgodnie z **III zasadą dynamiki Newtona** oraz założeniem o pomijalnej masie sprężyny, siła wywierana przez sprężynę na klocek A ma w każdej chwili dokładnie taką samą wartość jak siła wywierana na klocek B:\n$$F_{s\\to A} = F_{s\\to B} = k\\Delta x$$\nStwierdzenie 1. jest **prawdziwe (P)**.\n\n2. Maksymalne ściśnięcie sprężyny następuje w punkcie zwrotnym odkształcenia – klocki przestają się zbliżać, a jeszcze nie zaczynają oddalać. W tym ułamku sekundy poruszają się z tą samą prędkością chwilową ($v_A = v_B = v_2$), zatem ich prędkość względna wynosi:\n$$v_{\\text{wzgl}} = v_A - v_B = 0$$\nStwierdzenie 2. jest **prawdziwe (P)**."
                },
                {
                  "title": "Zadanie 3.2 – Prędkość chwilowa klocków z zasady zachowania pędu",
                  "content": "W płaszczyźnie poziomej na układ nie działają żadne siły zewnętrzne, więc całkowity pęd układu jest zachowany w każdej chwili ruchu:\n$$p_{\\text{pocz}} = p_{\\text{końc}}$$\n$$m v_1 + 0 = (m + m) v_2 = 2m v_2$$\nDzieląc obustronnie przez $2m$, otrzymujemy prędkość obu klocków przy maksymalnym ściśnięciu sprężyny:\n$$v_2 = \\frac{v_1}{2}$$"
                },
                {
                  "title": "Zadanie 3.2 – Bilans energii mechanicznej i wyznaczenie odkształcenia $\\Delta x_{\\max}$",
                  "content": "Układ jest izolowany, a ruch odbywa się bez tarcia, więc całkowita energia mechaniczna układu jest zachowana:\n$$E_{\\text{pocz}} = E_{\\text{końc}}$$\nPoczątkowo układ posiada wyłącznie energię kinetyczną klocka A. W chwili maksymalnego odkształcenia sprężyny posiada energię kinetyczną obu klocków oraz energię potencjalną sprężystości sprężyny:\n$$\\frac{1}{2}m v_1^2 = \\frac{1}{2}(2m) v_2^2 + \\frac{1}{2}k(\\Delta x_{\\max})^2$$\nPodstawiamy wyznaczoną prędkość $v_2 = \\frac{v_1}{2}$:\n$$\\frac{1}{2}m v_1^2 = m \\left(\\frac{v_1}{2}\\right)^2 + \\frac{1}{2}k(\\Delta x_{\\max})^2$$\n$$\\frac{1}{2}m v_1^2 = \\frac{1}{4}m v_1^2 + \\frac{1}{2}k(\\Delta x_{\\max})^2$$\nOdejmujemy $\\frac{1}{4}m v_1^2$ od obu stron równania:\n$$\\frac{1}{4}m v_1^2 = \\frac{1}{2}k(\\Delta x_{\\max})^2$$\nMnożymy obustronnie przez 2 i dzielimy przez współczynnik $k$:\n$$(\\Delta x_{\\max})^2 = \\frac{m v_1^2}{2k}$$\nWyciągamy pierwiastek kwadratowy:\n$$\\Delta x_{\\max} = v_1 \\sqrt{\\frac{m}{2k}} \\qquad \\left(\\text{lub } \\sqrt{\\frac{m v_1^2}{2k}}\\right)$$"
                }
              ],
              "answer": "3.1: 1 – Prawda (P), 2 – Prawda (P);\n3.2: $\\Delta x_{\\max} = v_1 \\sqrt{\\frac{m}{2k}}$ (lub $\\sqrt{\\frac{m v_1^2}{2k}}$).",
              "trap": "W chwili maksymalnego ściśnięcia sprężyny klocki nie zatrzymują się w układzie odniesienia podłoża! Układ porusza się dalej z prędkością środka masy $v_1/2$, więc część energii początkowej pozostaje w energii kinetycznej ruchu postępowego obu klocków.",
              "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://naukagryzie.pl/arkusze/matura-rozszerzona/fizyka/czerwiec-2026-formula-2023-cke/odpowiedzi.pdf#page=8\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 8–11</a>."
            },
            "solutionSource": {
              "publisher": "Centralna Komisja Egzaminacyjna",
              "url": "https://naukagryzie.pl/arkusze/matura-rozszerzona/fizyka/czerwiec-2026-formula-2023-cke/odpowiedzi.pdf",
              "localFile": "data/arkusze_cke/2026/fizyka-2026-czerwiec-matura-rozszerzona-odpowiedzi.pdf",
              "pages": [
                8,
                11
              ]
            }
          },
          {
            "id": "matura-cke-praca-2026-maj-zad-2",
            "number": 202605,
            "title": "Matura maj 2026 zad. 2 nowa formuła",
            "year": "2026 maj",
            "difficulty": 3,
            "source": "Matura CKE 2026 (Maj)",
            "link": "https://egzaminy.gov.pl/pliki/5948/697b5fd85d09a542f44987a9a4da5def56779e3dcf2fadd8834faea04277d0ab",
            "tags": [
              "Matura CKE",
              "Praca, moc i energia",
              "Zasada zachowania energii mechanicznej"
            ],
            "problem": "<div class=\"task-matura energy-statements\"><h4>Zadanie 2.</h4>\n<p>Do jednego z końców nierozciągliwej nici o długości $l$ zamocowano niewielkie ciało $\\mathcal{B}$ o masie $m$. Drugi koniec nici jest unieruchomiony w punkcie $S$. Następnie ciało $\\mathcal{B}$ wprawiono w ruch po okręgu o środku w punkcie $S$ <u>w płaszczyźnie pionowej</u>.</p>\n<p>Przyjmij model zjawiska, w którym:</p><ul>\n<li>na ciało $\\mathcal{B}$ podczas ruchu działają dwie siły:<br>$\\vec{F}_g$ – siła grawitacji oraz $\\vec{F}_n$ – siła reakcji nici</li>\n<li>pomijamy wszelkie opory ruchu, masę nici, a ciało $\\mathcal{B}$ traktujemy jako punkt materialny</li>\n<li>ciało $\\mathcal{B}$ porusza się w inercjalnym układzie odniesienia, w jednorodnym, ziemskim polu grawitacyjnym.</li></ul>\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-maj-z2-ruch.png\" alt=\"Ciało na nici w płaszczyźnie pionowej\" class=\"theory-img\" style=\"max-height:260px;display:block;margin:15px auto;\"></div>\n<p>Sytuację ilustruje rysunek powyżej, na którym oznaczono przyśpieszenie ziemskie $\\vec{g}$.</p>\n<h4>Zadanie 2.1. (0–2)</h4><p>Na poniższym rysunku przedstawiono wektory prędkości ciała $\\mathcal{B}$ w dwóch różnych chwilach czasu podczas opisanego ruchu tego ciała po okręgu.</p><p>Długość boku kratki odpowiada umownej jednostce odległości.</p>\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-maj-z2-siatka.png\" alt=\"Rysunek – wektory prędkości na siatce\" class=\"theory-img\" style=\"max-height:400px;display:block;margin:15px auto;\"></div>\n<p><strong>Na rysunku powyżej wyznacz konstrukcyjnie środek okręgu, po którym porusza się ciało $\\boldsymbol{\\mathcal{B}}$. Podpisz środek tego okręgu jako $\\boldsymbol{S}$.</strong></p>\n<p><strong>Zapisz w wykropkowanym miejscu poniżej długość $\\boldsymbol{l}$ promienia tego okręgu. Wyraź tę długość w umownych jednostkach odległości.</strong></p>\n<p>$l =$ ........... długości boku kratki</p><p><em>Uwaga! W tym przykładzie środek $S$ okręgu leży w punkcie kratowym.</em></p>\n<h4>Zadanie 2.2. (0–1)</h4><p><strong>Na którym rysunku (spośród A–D) prawidłowo przedstawiono siły – grawitacji $\\boldsymbol{\\vec{F}_g}$ oraz reakcji nici $\\boldsymbol{\\vec{F}_n}$ – działające na ciało $\\boldsymbol{\\mathcal{B}}$ podczas ruchu po okręgu, gdy przechodzi ono przez najniższe położenie? Wybierz właściwą odpowiedź spośród podanych.</strong></p>\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-maj-z2-opcje.png\" alt=\"Rysunki A–D – siły w najniższym położeniu\" class=\"theory-img\" style=\"max-height:640px;display:block;margin:15px auto;\"></div>\n<div class=\"problem-options-list\" data-correct=\"B\">\n  <div class=\"problem-option-item\" data-option=\"A\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">Rysunek A</span></div>\n  <div class=\"problem-option-item\" data-option=\"B\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">Rysunek B</span></div>\n  <div class=\"problem-option-item\" data-option=\"C\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">Rysunek C</span></div>\n  <div class=\"problem-option-item\" data-option=\"D\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">Rysunek D</span></div>\n</div>\n<h4>Zadanie 2.3. (0–4)</h4><p>Siła $\\vec{F}_n$, z jaką nić działa na ciało $\\mathcal{B}$ podczas jego ruchu po okręgu, zmienia swoją wartość. Największą wartość tej siły oznaczymy jako $F_{n\\,max}$, a najmniejszą – jako $F_{n\\,min}$.</p>\n<p>Dany jest iloraz największej i najmniejszej wartości prędkości ciała $\\mathcal{B}$ podczas jego ruchu po okręgu:</p><p style=\"text-align:center\">$\\frac{v_{max}}{v_{min}}=\\sqrt{3}$</p>\n<p><strong>Oblicz iloraz $\\boldsymbol{\\frac{F_{n\\,max}}{F_{n\\,min}}}$. Zapisz obliczenia.</strong></p></div>",
            "originalTaskId": "matura-cke-2026-maj-zad-2",
            "sourcePages": [
              6,
              7,
              8
            ],
            "formula": "2023",
            "solution": {
              "givens": "Długość nici (promień okręgu): $l$, masa ciała: $m$, stosunek prędkości skrajnych: $\\frac{v_{\\max}}{v_{\\min}} = \\sqrt{3}$, ruch po okręgu w płaszczyźnie pionowej, brak oporów ruchu.",
              "steps": [
                {
                  "title": "Zadanie 2.1 – Konstrukcja środka okręgu i odczyt promienia",
                  "content": "Wektor prędkości w ruchu po okręgu jest w każdej chwili styczny do toru, co oznacza, że promień łączący ciało ze środkiem okręgu $S$ jest zawsze prostopadły do wektora prędkości $\\vec{v}$:\n1. Prowadzimy prostą prostopadłą do wektora prędkości $\\vec{v}_1$ w punkcie jego przyłożenia (pionowo w dół).\n2. Prowadzimy prostą prostopadłą do wektora prędkości $\\vec{v}_2$ w punkcie jego przyłożenia.\n3. Punkt przecięcia obu prostych jednoznacznie wyznacza środek okręgu $S$.\n\nOdliczając kratki pionowo od środka $S$ do punktu zaczepienia wektora $\\vec{v}_1$, odczytujemy promień okręgu:\n$$l = 10\\text{ długości kratek}$$\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-maj-z2-konstrukcja-rozwiazanie.png\" alt=\"Konstrukcja środka i promienia okręgu według klucza CKE\" class=\"theory-img\" style=\"max-height:440px;display:block;margin:15px auto;\"></div>"
                },
                {
                  "title": "Zadanie 2.2 – Wybór sił działających w najniższym położeniu",
                  "content": "W najniższym położeniu na ciało działają dwie pionowe siły:\n- siła grawitacji $\\vec{F}_g = m\\vec{g}$ skierowana pionowo w dół,\n- siła reakcji (naciągu) nici $\\vec{F}_n$ skierowana pionowo w górę (w stronę środka okręgu $S$).\n\nAby ciało poruszało się po okręgu, siła wypadkowa musi być skierowana do środka okręgu (w górę) i pełnić rolę siły dośrodkowej:\n$$F_{\\text{doś}} = F_n - F_g = \\frac{m v_{\\max}^2}{l} > 0 \\implies F_n > F_g$$\nWektor siły reakcji nici $\\vec{F}_n$ musi mieć zatem większą długość niż wektor ciężaru $\\vec{F}_g$. Warunek ten spełnia wyłącznie **rysunek B**."
                },
                {
                  "title": "Zadanie 2.3 – Równania dynamiki w skrajnych punktach toru",
                  "content": "Zapisujemy II zasadę dynamiki dla składowych sił wzdłuż promienia okręgu w punktach o prędkości maksymalnej i minimalnej:\n- **W najniższym punkcie (prędkość maksymalna $v_{\\max}$):**\n$$F_{n,\\max} - mg = \\frac{m v_{\\max}^2}{l} \\implies F_{n,\\max} = mg + \\frac{m v_{\\max}^2}{l}$$\n- **W najwyższym punkcie (prędkość minimalna $v_{\\min}$):**\nZarówno siła reakcji nici, jak i siła grawitacji działają w dół (w stronę środka $S$):\n$$F_{n,\\min} + mg = \\frac{m v_{\\min}^2}{l} \\implies F_{n,\\min} = \\frac{m v_{\\min}^2}{l} - mg$$"
                },
                {
                  "title": "Zadanie 2.3 – Zastosowanie zasady zachowania energii i obliczenie ilorazu sił",
                  "content": "Różnica wysokości między najniższym a najwyższym punktem toru wynosi $h = 2l$. Z zasady zachowania energii mechanicznej:\n$$\\frac{1}{2}m v_{\\max}^2 = \\frac{1}{2}m v_{\\min}^2 + mg(2l)$$\nMnożymy obustronnie przez $\\frac{2}{l}$:\n$$\\frac{m v_{\\max}^2}{l} = \\frac{m v_{\\min}^2}{l} + 4mg$$\nZ treści zadania wiemy, że $v_{\\max} = \\sqrt{3}\\,v_{\\min}$, co oznacza $v_{\\max}^2 = 3v_{\\min}^2$. Podstawiamy:\n$$3\\,\\frac{m v_{\\min}^2}{l} = \\frac{m v_{\\min}^2}{l} + 4mg \\implies 2\\,\\frac{m v_{\\min}^2}{l} = 4mg \\implies \\frac{m v_{\\min}^2}{l} = 2mg$$\nStąd dla prędkości maksymalnej:\n$$\\frac{m v_{\\max}^2}{l} = 3 \\cdot (2mg) = 6mg$$\nObliczamy wartości sił reakcji nici:\n$$F_{n,\\max} = mg + 6mg = 7mg$$\n$$F_{n,\\min} = 2mg - mg = mg$$\nIloraz poszukiwanych sił wynosi:\n$$\\frac{F_{n,\\max}}{F_{n,\\min}} = \\frac{7mg}{mg} = 7$$"
                }
              ],
              "answer": "2.1: Konstrukcja prostych prostopadłych, $l = 10\\text{ długości kratek}$;\n2.2: Poprawny rysunek B ($F_n > F_g$);\n2.3: Iloraz wynosi $\\frac{F_{n,\\max}}{F_{n,\\min}} = 7$.",
              "trap": "W najwyższym punkcie toru siła ciężkości działa w tym samym zwrocie co siła naciągu nici (w dół, w stronę środka okręgu), dlatego $F_{n,\\min} = \\frac{mv_{\\min}^2}{l} - mg$, a nie ze znakiem plus!",
              "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2026-maj-matura-rozszerzona-odpowiedzi.pdf#page=10\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 10–14</a>."
            },
            "solutionSource": {
              "publisher": "Centralna Komisja Egzaminacyjna",
              "url": "https://arkusze.pl/maturalne/fizyka-2026-maj-matura-rozszerzona-odpowiedzi.pdf",
              "localFile": "data/arkusze_cke/2026/fizyka-2026-maj-matura-rozszerzona-odpowiedzi.pdf",
              "pages": [
                10,
                14
              ]
            }
          },
          {
            "id": "matura-cke-praca-2026-styczen-zad-2",
            "number": 202601,
            "title": "Matura próbna styczeń 2026 zad. 2 nowa formuła",
            "year": "2026 styczeń próbna",
            "difficulty": 3,
            "source": "Matura próbna CKE 2026 (Styczeń)",
            "link": "https://arkusze.pl/maturalne/fizyka-2026-styczen-probna-rozszerzona.pdf",
            "tags": [
              "Matura CKE",
              "Praca, moc i energia",
              "Zderzenia sprężyste i niesprężyste",
              "Energia kinetyczna"
            ],
            "problem": "<div class=\"task-matura energy-statements\">\n<h4>Zadanie 2.</h4>\n<p>Kula K1 o masie $m_1$ porusza się z prędkością $\\vec{v}_1$ a kula K2 o masie $m_2$ spoczywa. Wektor $\\vec{v}_1$ jest skierowany w stronę środka kuli K2. Sytuację ilustruje rysunek 1.</p>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-styczen-z2-rys1.png\" alt=\"Rysunek 1. – kule K1 i K2\" class=\"theory-img\" style=\"max-height:170px;display:block;margin:15px auto;\"></div>\n\n<p>W pewnej chwili kula K1 uderzyła w kulę K2. W wyniku tego obie kule uzyskały prędkości o przeciwnych zwrotach i <u>o tych samych wartościach</u>. Sytuację ilustruje rysunek 2.</p>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-styczen-z2-rys2.png\" alt=\"Rysunek 2. – kule K1 i K2\" class=\"theory-img\" style=\"max-height:170px;display:block;margin:15px auto;\"></div>\n\n<p>Przyjmujemy model zjawiska, w którym:</p>\n<ul>\n<li>opisany ruch kul odbywa się w inercjalnym układzie odniesienia</li>\n<li>przed zderzeniem i po zderzeniu kule poruszają się ruchem jednostajnym prostoliniowym</li>\n<li>zderzenie kul jest idealnie sprężyste</li>\n<li>kule oddziałują ze sobą tylko podczas zderzenia</li>\n<li>kule się nie obracają.</li>\n</ul>\n\n<h4>Zadanie 2.1. (0–1)</h4>\n<p><strong>Na rysunku 3. poniżej narysuj parę sił wzajemnego oddziaływania między kulami podczas ich zderzenia. Każdą z sił przyłóż – odpowiednio – w środku kuli K1 lub środku kuli K2. Zachowaj odpowiednie kierunki i zwroty tych sił oraz relację (większy, równy, mniejszy) między ich wartościami.</strong></p>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-styczen-z2-rys3.png\" alt=\"Rysunek 3. – kule K1 i K2\" class=\"theory-img\" style=\"max-height:330px;display:block;margin:15px auto;\"></div>\n\n<h4>Zadanie 2.2. (0–4)</h4>\n<p><strong>Oblicz iloraz $\\boldsymbol{\\frac{m_2}{m_1}}$ mas tych kul. Zapisz obliczenia. W rozwiązaniu zapisz równania wynikające z zasad zachowania odpowiednich wielkości.</strong></p>\n</div>",
            "originalTaskId": "matura-cke-2026-styczen-zad-2",
            "sourcePages": [
              6,
              7
            ],
            "formula": "2023",
            "solution": {
              "givens": "Kula K1 o masie $m_1$ z prędkością początkową $v_1$, kula K2 o masie $m_2$ początkowo spoczywa ($v_{2,\\text{pocz}} = 0$). Zderzenie sprężyste centralne. Po zderzeniu obie kule mają tę samą wartość prędkości $v_2$, lecz przeciwne zwroty ($v_1' = -v_2$, $v_2' = +v_2$).",
              "steps": [
                {
                  "title": "Zadanie 2.1 – Wektory sił wzajemnego oddziaływania kul (III zasada dynamiki)",
                  "content": "W chwili zderzenia kule oddziałują na siebie siłami sprężystości:\n- Siła $\\vec{F}_{21}$ (wywierana na kulę K1 przez kulę K2) jest zaczepiona w środku kuli K1 i skierowana poziomo w lewo (wyhamowuje kulę K1).\n- Siła $\\vec{F}_{12}$ (wywierana na kulę K2 przez kulę K1) jest zaczepiona w środku kuli K2 i skierowana poziomo w prawo (rozpędza kulę K2).\n\nZgodnie z **III zasadą dynamiki Newtona** siły te tworzą parę akcja–reakcja: leżą na prostej łączącej środki kul, mają przeciwne zwroty oraz **dokładnie równe wartości** ($|\\vec{F}_{21}| = |\\vec{F}_{12}|$), bez względu na relację między masami kul!\nOba wektory rysujemy zaczepione w środkach kul z zachowaniem identycznej długości (np. 5 kratek w kluczu CKE):\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-styczen-z2-sily-rozwiazanie.png\" alt=\"Rysunek wektorów sił według klucza CKE\" class=\"theory-img\" style=\"max-height:280px;display:block;margin:15px auto;\"></div>"
                },
                {
                  "title": "Zadanie 2.2 – Zasada zachowania pędu i zderzenie sprężyste",
                  "content": "Przyjmujemy oś $x$ skierowaną w prawo.\n1. **Zasada zachowania pędu:**\n$$p_{\\text{pocz}} = p_{\\text{końc}}$$\n$$m_1 v_1 + 0 = -m_1 v_2 + m_2 v_2$$\nGrupujemy wyrazy z masą $m_1$:\n$$m_1 (v_1 + v_2) = m_2 v_2 \\implies \\frac{m_2}{m_1} = \\frac{v_1 + v_2}{v_2} = \\frac{v_1}{v_2} + 1 \\quad \\text{(Równanie 1)}$$\n\n2. **Zasada zachowania energii kinetycznej (zderzenie sprężyste):**\n$$E_{k,\\text{pocz}} = E_{k,\\text{końc}}$$\n$$\\frac{1}{2}m_1 v_1^2 + 0 = \\frac{1}{2}m_1 v_2^2 + \\frac{1}{2}m_2 v_2^2$$\nMnożymy obustronnie przez 2 i przenosimy wyrazy z $m_1$ na lewą stronę:\n$$m_1 (v_1^2 - v_2^2) = m_2 v_2^2 \\implies \\frac{m_2}{m_1} = \\frac{v_1^2 - v_2^2}{v_2^2} = \\left(\\frac{v_1}{v_2}\\right)^2 - 1 \\quad \\text{(Równanie 2)}$$"
                },
                {
                  "title": "Zadanie 2.2 – Wyznaczenie ilorazu mas $\\frac{m_2}{m_1}$",
                  "content": "Przyrównujemy prawe strony Równania 1 i Równania 2:\n$$\\frac{v_1}{v_2} + 1 = \\left(\\frac{v_1}{v_2}\\right)^2 - 1$$\nRozpisujemy prawą stronę ze wzoru skróconego mnożenia na różnicę kwadratów: $\\left(\\frac{v_1}{v_2}\\right)^2 - 1 = \\left(\\frac{v_1}{v_2} - 1\\right)\\left(\\frac{v_1}{v_2} + 1\\right)$:\n$$\\frac{v_1}{v_2} + 1 = \\left(\\frac{v_1}{v_2} - 1\\right)\\left(\\frac{v_1}{v_2} + 1\\right)$$\nPonieważ $v_1 + v_2 > 0$, możemy podzielić obie strony przez $\\left(\\frac{v_1}{v_2} + 1\\right)$:\n$$1 = \\frac{v_1}{v_2} - 1 \\implies \\frac{v_1}{v_2} = 2$$\nPodstawiamy obliczony stosunek $\\frac{v_1}{v_2} = 2$ do Równania 1:\n$$\\frac{m_2}{m_1} = \\frac{v_1}{v_2} + 1 = 2 + 1 = 3$$"
                }
              ],
              "answer": "2.1: Wektory sił $\\vec{F}_{21}$ i $\\vec{F}_{12}$ zaczepione w środkach kul, o jednakowych długościach i przeciwnych zwrotach;\n2.2: Iloraz mas wynosi $\\frac{m_2}{m_1} = 3$.",
              "trap": "Częsty błąd na maturze to rysowanie dłuższego wektora siły dla kuli o większej masie. III zasada dynamiki Newtona gwarantuje bezwzględną równość wartości sił akcji i reakcji ($|\\vec{F}_{21}| = |\\vec{F}_{12}|$)!",
              "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2026-styczen-probna-rozszerzona-odpowiedzi.pdf#page=8\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 8–12</a>."
            },
            "solutionSource": {
              "publisher": "Centralna Komisja Egzaminacyjna",
              "url": "https://arkusze.pl/maturalne/fizyka-2026-styczen-probna-rozszerzona-odpowiedzi.pdf",
              "localFile": "data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona-odpowiedzi.pdf",
              "pages": [
                8,
                12
              ]
            }
          },
          {
            "id": "matura-cke-praca-2023-czerwiec-zad-2",
            "number": 202306,
            "title": "Matura czerwiec 2023 zad. 2 nowa formuła",
            "year": "2023 czerwiec",
            "difficulty": 3,
            "source": "Matura CKE 2023 (Czerwiec - Termin dodatkowy)",
            "link": "https://arkusze.pl/maturalne/fizyka-2023-czerwiec-matura-rozszerzona.pdf",
            "tags": [
              "Matura CKE",
              "Praca, moc i energia",
              "Zderzenia sprężyste i niesprężyste",
              "Energia kinetyczna"
            ],
            "problem": "<div class=\"task-matura energy-statements\">\n<h4>Zadanie 2.</h4>\n<p>Dwie identyczne kule K1 i K2, każda o masie $m$, poruszają się naprzeciwko siebie w inercjalnym układzie odniesienia $\\mathcal{U}$ z prędkościami $\\vec{v}_1$ (kula K1) oraz $\\vec{v}_2$ (kula K2). Środki kul poruszają się wzdłuż prostej $l$. Wartości prędkości tych kul przed zderzeniem spełniają równanie:</p>\n<p style=\"text-align:center;\">$v_1 = 2v_2$</p>\n<p>Sytuację przed zderzeniem kul ilustruje rysunek poniżej.</p>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/2023-czerwiec-z2-rys1.png\" alt=\"Kule K1 i K2 przed zderzeniem\" class=\"theory-img\" style=\"max-height:105px;display:block;margin:15px auto;\"></div>\n\n<h4>Zadanie 2.1. (0–1)</h4>\n<p>Załóżmy, że zderzenie kul K1 i K2 było <u>doskonale sprężyste</u>. Pomijamy siły tarcia.</p>\n<p><strong>Na którym rysunku (A–D) prawidłowo narysowano i oznaczono wektory prędkości kul bezpośrednio po zderzeniu w układzie odniesienia $\\boldsymbol{\\mathcal{U}}$? Zaznacz właściwą odpowiedź spośród podanych.</strong></p>\n<p><em>Wskazówka! Długości wektorów odpowiadają wartościom prędkości kul.</em> W zadaniu nie trzeba <em>wykonywać obliczeń – wystarczy sprawdzić, czy spełnione są zasady zachowania</em> odpowiednich <em>wielkości fizycznych.</em></p>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/2023-czerwiec-z2-opcje.png\" alt=\"Odpowiedzi A–D – wektory prędkości po zderzeniu\" class=\"theory-img\" style=\"max-height:450px;display:block;margin:15px auto;\"></div>\n<div class=\"problem-options-list\" data-correct=\"B\">\n  <div class=\"problem-option-item\" data-option=\"A\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">Rysunek A</span></div>\n  <div class=\"problem-option-item\" data-option=\"B\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">Rysunek B</span></div>\n  <div class=\"problem-option-item\" data-option=\"C\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">Rysunek C</span></div>\n  <div class=\"problem-option-item\" data-option=\"D\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">Rysunek D</span></div>\n</div>\n\n<h4>Zadanie 2.2. (0–4)</h4>\n<p>Załóżmy, że w wyniku innej realizacji tego zderzenia obie kule <u>połączyły się trwale</u>.</p>\n<p><strong>Oblicz, jaką część początkowej (przed zderzeniem) łącznej energii kinetycznej ruchu postępowego <u>utracił</u> układ kul w wyniku takiego zderzenia.</strong></p>\n</div>",
            "originalTaskId": "matura-cke-2023-czerwiec-zad-2",
            "sourcePages": [
              7,
              8
            ],
            "formula": "2023",
            "solution": {
              "givens": "Masy kul: $m_1 = m_2 = m$, prędkości początkowe: $\\vec{v}_1$ o wartości $2v_2$ (skierowana w prawo), $\\vec{v}_2$ o wartości $v_2$ (skierowana w lewo, czyli $v_1 = 2v_2$).",
              "steps": [
                {
                  "title": "Zadanie 2.1 – Centralne zderzenie sprężyste ciał o jednakowych masach",
                  "content": "Dla centralnego zderzenia idealnie sprężystego ciał o identycznych masach ($m_1 = m_2$) z zasad zachowania pędu i energii wynika reguła wymiany prędkości wraz ze zwrotami:\n$$\\vec{v}_1' = \\vec{v}_2 \\qquad \\text{oraz} \\qquad \\vec{v}_2' = \\vec{v}_1$$\nOznacza to, że po zderzeniu:\n- kula K1 przejmuje wektor prędkości kuli K2: porusza się w lewo z szybkością $v_2$,\n- kula K2 przejmuje wektor prędkości kuli K1: porusza się w prawo z szybkością $2v_2$.\n\nRelację tę poprawnie przedstawia **rysunek B**."
                },
                {
                  "title": "Zadanie 2.2 – Wyznaczenie prędkości po sczepieniu z zasady zachowania pędu",
                  "content": "W zderzeniu niesprężystym (kule trwale się łączą) całkowity pęd układu jest ściśle zachowany. Przyjmując oś $x$ skierowaną w prawo:\n$$p_{\\text{pocz}} = p_{\\text{końc}}$$\n$$m v_1 - m v_2 = (m + m) u$$\nPodstawiamy $v_1 = 2v_2$:\n$$m(2v_2) - m v_2 = 2m u \\implies m v_2 = 2m u \\implies u = \\frac{v_2}{2} = 0{,}5\\,v_2$$\nPołączone kule poruszają się w prawo ze wspólną prędkością $u = \\frac{v_2}{2}$."
                },
                {
                  "title": "Zadanie 2.2 – Obliczenie utraconej części energii kinetycznej",
                  "content": "1. Obliczamy całkowitą początkową energię kinetyczną obu kul:\n$$E_{k,\\text{pocz}} = \\frac{1}{2}m v_1^2 + \\frac{1}{2}m v_2^2 = \\frac{1}{2}m(2v_2)^2 + \\frac{1}{2}m v_2^2 = \\frac{4}{2}m v_2^2 + \\frac{1}{2}m v_2^2 = \\frac{5}{2}m v_2^2 = 2{,}5\\,m v_2^2$$\n2. Obliczamy energię kinetyczną połączonego układu po zderzeniu:\n$$E_{k,\\text{końc}} = \\frac{1}{2}(2m) u^2 = m u^2 = m \\left(\\frac{v_2}{2}\\right)^2 = \\frac{1}{4}m v_2^2 = 0{,}25\\,m v_2^2$$\n3. Obliczamy ubytek energii kinetycznej:\n$$\\Delta E_k = E_{k,\\text{pocz}} - E_{k,\\text{końc}} = 2{,}5\\,m v_2^2 - 0{,}25\\,m v_2^2 = 2{,}25\\,m v_2^2 = \\frac{9}{4}m v_2^2$$\n4. Wyznaczamy stosunek utraconej energii do energii początkowej:\n$$\\frac{\\Delta E_k}{E_{k,\\text{pocz}}} = \\frac{2{,}25\\,m v_2^2}{2{,}5\\,m v_2^2} = \\frac{2{,}25}{2{,}5} = \\frac{9}{10} = 0{,}90 = 90\\%$$"
                }
              ],
              "answer": "2.1: Poprawny rysunek B;\n2.2: Układ utracił $\\frac{9}{10}$ (czyli $0{,}90$ lub $90\\%$) początkowej energii kinetycznej.",
              "trap": "Nie wolno dodawać prędkości skalarnie przy wyznaczaniu pędu – kule poruszają się naprzeciwko siebie, więc pędy mają przeciwne zwroty: $p_{\\text{pocz}} = m(2v_2) - mv_2 = mv_2$, a nie $3mv_2$!",
              "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2023-czerwiec-matura-rozszerzona-odpowiedzi.pdf#page=7\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 7–10</a>."
            },
            "solutionSource": {
              "publisher": "Centralna Komisja Egzaminacyjna",
              "url": "https://arkusze.pl/maturalne/fizyka-2023-czerwiec-matura-rozszerzona-odpowiedzi.pdf",
              "localFile": "data/arkusze_cke/2023/fizyka-2023-czerwiec-matura-rozszerzona-odpowiedzi.pdf",
              "pages": [
                7,
                10
              ]
            }
          },
          {
            "id": "matura-cke-praca-2023-maj-zad-2",
            "number": 202305,
            "title": "Matura maj 2023 zad. 2 nowa formuła",
            "year": "2023 maj",
            "difficulty": 3,
            "source": "Matura CKE 2023 (Maj)",
            "link": "https://arkusze.pl/maturalne/fizyka-2023-maj-matura-rozszerzona.pdf",
            "tags": [
              "Matura CKE",
              "Praca, moc i energia",
              "Zderzenia sprężyste i niesprężyste",
              "Energia kinetyczna"
            ],
            "problem": "<div class=\"task-matura energy-statements\">\n<h4>Zadanie 2.</h4>\n<p>Krążek K1 porusza się w inercjalnym układzie odniesienia $\\mathcal{U}$ ze stałą prędkością $\\vec{v}$, a krążek K2 spoczywa. Środek krążka K2 leży poza prostą wyznaczającą kierunek ruchu krążka K1. W pewnej chwili krążek K1 uderza w krążek K2.</p>\n<p>Na rysunku 1. w kartezjańskim układzie współrzędnych $(x, y)$ przedstawiono poruszający się krążek K1 i spoczywający krążek K2. Oznaczono prędkość $\\vec{v}$ krążka K1 i składowe $\\vec{v}_x, \\vec{v}_y$ tej prędkości. Na rysunku 2. przedstawiono moment zderzenia się obu krążków.</p>\n<p>Krążki są jednorodne, a ich masy <u>są sobie równe.</u> Pomijamy tarcie między krążkami K1 i K2 oraz między krążkami a podłożem.</p>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/2023-maj-z2-rys1.png\" alt=\"Rysunek 1. – krążki K1 i K2\" class=\"theory-img\" style=\"max-height:360px;display:block;margin:15px auto;\"></div>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/2023-maj-z2-rys2.png\" alt=\"Rysunek 2. – krążki K1 i K2\" class=\"theory-img\" style=\"max-height:360px;display:block;margin:15px auto;\"></div>\n<h4>Zadanie 2.1. (0–1)</h4>\n<p><strong>Na rysunku 2. powyżej narysuj parę sił wzajemnego oddziaływania pomiędzy krążkami podczas ich zderzenia. Każdą z sił przyłóż – odpowiednio – w punkcie środka masy krążka K1 lub krążka K2. Zachowaj odpowiednie kierunki i zwroty tych sił oraz relację (większy, równy, mniejszy) między ich wartościami.</strong></p>\n\n\n\n<h4>Zadanie 2.2. (0–1)</h4>\n<p>Załóżmy, że zderzenie krążków K1 i K2 było <u>doskonale sprężyste</u>.</p>\n<p><strong>Na którym rysunku (spośród A–D) prawidłowo narysowano i opisano wektory prędkości krążków bezpośrednio po zderzeniu w układzie odniesienia $\\boldsymbol{\\mathcal{U}}$? Zaznacz właściwą odpowiedź spośród podanych.</strong></p>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/2023-maj-z2-opcje.png\" alt=\"Rysunki A–D – wektory prędkości po zderzeniu\" class=\"theory-img\" style=\"max-height:720px;display:block;margin:15px auto;\"></div>\n<div class=\"problem-options-list\" data-correct=\"C\">\n  <div class=\"problem-option-item\" data-option=\"A\"><span class=\"problem-option-letter\">A</span><span class=\"problem-option-text\">Rysunek A</span></div>\n  <div class=\"problem-option-item\" data-option=\"B\"><span class=\"problem-option-letter\">B</span><span class=\"problem-option-text\">Rysunek B</span></div>\n  <div class=\"problem-option-item\" data-option=\"C\"><span class=\"problem-option-letter\">C</span><span class=\"problem-option-text\">Rysunek C</span></div>\n  <div class=\"problem-option-item\" data-option=\"D\"><span class=\"problem-option-letter\">D</span><span class=\"problem-option-text\">Rysunek D</span></div>\n</div>\n</div>",
            "originalTaskId": "matura-cke-2023-maj-zad-2",
            "sourcePages": [
              6,
              7
            ],
            "formula": "2023",
            "solution": {
              "givens": "Jednakowe masy krążków: $m_1 = m_2 = m$, krążek K2 początkowo spoczywa w początku układu współrzędnych, brak oporów i tarcia, zderzenie idealnie sprężyste. Linia środków w chwili zderzenia równoległa do osi $x$.",
              "steps": [
                {
                  "title": "Zadanie 2.1 – Wektory sił wzajemnego oddziaływania krążków",
                  "content": "W chwili zderzenia brak tarcia sprawia, że siły kontaktowe działają ściśle w kierunku normalnym (prostopadłym do powierzchni styku), czyli wzdłuż prostej łączącej środki obu krążków (kierunek osi $x$):\n- Siła $\\vec{F}_{12}$ (działająca na krążek K1 od krążka K2): zaczepiona w środku krążka K1 i skierowana poziomo w lewo (wzdłuż osi $x$).\n- Siła $\\vec{F}_{21}$ (działająca na krążek K2 od krążka K1): zaczepiona w środku krążka K2 i skierowana poziomo w prawo (wzdłuż osi $x$).\n\nZgodnie z **III zasadą dynamiki Newtona** siły te leżą na jednej prostej, mają przeciwne zwroty oraz **równe wartości** ($|\\vec{F}_{12}| = |\\vec{F}_{21}|$). Wektory rysujemy poziomo o jednakowej długości (4 kratki według klucza CKE):\n<div class=\"chart-container-svg\"><img src=\"img/energy/2023-maj-z2-sily-rozwiazanie.png\" alt=\"Siły działające podczas zderzenia krążków według klucza CKE\" class=\"theory-img\" style=\"max-height:340px;display:block;margin:15px auto;\"></div>"
                },
                {
                  "title": "Zadanie 2.2 – Rozkład ruchu na osie i wektory prędkości po zderzeniu",
                  "content": "Rozkładamy ruch na kierunek prostopadły do powierzchni styku (oś $x$ – kierunek normalny) oraz kierunek styczny (oś $y$):\n1. **Wzdłuż osi $y$ (stycznej):** Nie działa żadna siła ($F_y = 0$). Zatem krążek K2 nie uzyskuje składowej prędkości pionowej ($v_{2y}' = 0$), a składowa pionowa prędkości krążka K1 pozostaje całkowicie niezmieniona:\n$$\\vec{v}_{1y}' = \\vec{v}_{1y} = -v_y$$\n2. **Wzdłuż osi $x$ (normalnej):** Zachodzi sprężyste zderzenie centralne ciał o identycznych masach. Ciała wymieniają się prędkościami w tej osi:\n- krążek K1 wyhamowuje do zera w osi $x$: $v_{1x}' = 0$,\n- spoczywający początkowo krążek K2 przejmuje całą składową prędkości poziomej: $v_{2x}' = v_x$.\n\n3. **Podsumowanie wektorów po zderzeniu:**\n- Krążek K1 ma wyłącznie prędkość pionową w dół: $\\vec{v}_1' = [0; -v_y]$,\n- Krążek K2 ma wyłącznie prędkość poziomą w prawo: $\\vec{v}_2' = [v_x; 0]$.\n\nWarunek ten idealnie spełnia **rysunek C**."
                }
              ],
              "answer": "2.1: Wektory sił $\\vec{F}_{12}$ i $\\vec{F}_{21}$ leżą na linii środków krążków (oś $x$), mają jednakowe długości i przeciwne zwroty;\n2.2: Poprawny rysunek C.",
              "trap": "Uderzany krążek K2 może uzyskać prędkość wyłącznie w kierunku działającej na niego siły normalnej (w prawo wzdłuż linii środków). Przy braku tarcia nie ma możliwości przekazania żadnego pędu w osi pionowej (stycznej)!",
              "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2023-maj-matura-rozszerzona-odpowiedzi.pdf#page=8\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 8–9</a>."
            },
            "solutionSource": {
              "publisher": "Centralna Komisja Egzaminacyjna",
              "url": "https://arkusze.pl/maturalne/fizyka-2023-maj-matura-rozszerzona-odpowiedzi.pdf",
              "localFile": "data/arkusze_cke/2023/fizyka-2023-maj-matura-rozszerzona-odpowiedzi.pdf",
              "pages": [
                8,
                9
              ]
            }
          },
          {
            "id": "matura-cke-praca-informator-2025-zad-2",
            "number": 202501,
            "title": "Informator CKE 2025 zad. 2 nowa formuła",
            "year": "Informator 2025",
            "difficulty": 3,
            "source": "Informator CKE od roku szkolnego 2024/2025",
            "link": "https://bip.cke.gov.pl/attachments/download/10000",
            "tags": [
              "Matura CKE",
              "Praca, moc i energia",
              "Zderzenia sprężyste i niesprężyste",
              "Energia kinetyczna"
            ],
            "problem": "<div class=\"task-matura energy-statements\"><h4>Zadanie 2. Spadająca kulka</h4>\n<p>Pionowo w dół rzucono metalową kulkę o masie $m=0{,}250\\text{ kg}$. Na wysokości $h=1{,}80\\text{ m}$ ponad podłożem, w chwili $t_0=0\\text{ s}$, kulka osiągnęła prędkość o wartości $v_0=3{,}20\\text{ m/s}$. Licząc od wysokości $h$, aż do podłoża, kulka spadała swobodnie i się nie obracała. Po upadku na twarde podłoże kulka odbiła się od niego, a czas oddziaływania (zderzenia) kulki z podłożem był równy $\\Delta t=5{,}00\\cdot10^{-3}\\text{ s}$. Podczas pierwszego zderzenia z podłożem kulka straciła 25% swojej energii mechanicznej.</p>\n<p>Do analizy zjawiska przyjmij jego uproszczony model, w którym:</p><ul><li>pomiń opory powietrza podczas ruchu kulki;</li><li>załóż, że siła $\\vec{F}_R$ reakcji podłoża działająca na kulkę podczas zderzenia była stała;</li><li>przyjmij do obliczeń wartość przyśpieszenia ziemskiego równą $g=9{,}81\\text{ m/s}^2$.</li></ul>\n<h4>Zadanie 2.1. (0–2)</h4><p><strong>Na podstawie danych przedstawionych w opisie zadania 2. oblicz czas trwania ruchu kulki od chwili $\\boldsymbol{t_0=0\\text{ s}}$ do chwili pierwszego uderzenia w podłoże. Zapisz obliczenia.</strong></p>\n<h4>Zadanie 2.2. (0–2)</h4><p><strong>Wykaż, że wartość prędkości uzyskanej przez kulkę tuż przed pierwszym uderzeniem w podłoże wynosi $\\boldsymbol{v_1\\approx6{,}75\\text{ m/s}}$.</strong></p>\n<h4>Zadanie 2.3. (0–3)</h4><p><strong>Oblicz wartość siły <u>reakcji podłoża</u> działającej na kulkę podczas zderzenia kulki z podłożem. Zapisz obliczenia.</strong></p>\n<p>Wskazówka: możesz skorzystać z faktu, że wartość prędkości uzyskana przez kulkę tuż przed uderzeniem w podłoże wynosi $v_1\\approx6{,}75\\text{ m/s}$.</p></div>",
            "originalTaskId": "matura-cke-informator-2025-zad-2",
            "sourcePages": [
              15,
              16,
              18
            ],
            "formula": "2023",
            "solution": {
              "givens": "Masa kulki: $m = 0{,}250\\text{ kg}$, wysokość początkowa: $h = 1{,}80\\text{ m}$, prędkość początkowa: $v_0 = 3{,}20\\text{ m/s}$ (skierowana pionowo w dół), czas zderzenia z podłożem: $\\Delta t = 5{,}00 \\cdot 10^{-3}\\text{ s}$, przyśpieszenie ziemskie: $g = 9{,}81\\text{ m/s}^2$, strata energii mechanicznej przy odbiciu: $25\\%$.",
              "steps": [
                {
                  "title": "Zadanie 2.1 – Obliczenie czasu spadania kulki",
                  "content": "Kierujemy oś pionową w dół z początkiem na wysokości wyrzutu. Równanie drogi w ruchu jednostajnie przyspieszonym z prędkością początkową $v_0$:\n$$h = v_0 t + \\frac{1}{2}gt^2 \\implies \\frac{1}{2}gt^2 + v_0 t - h = 0$$\nPodstawiamy wartości liczbowe w jednostkach SI:\n$$4{,}905\\,t^2 + 3{,}20\\,t - 1{,}80 = 0$$\nObliczamy wyróżnik trójmianu kwadratowego $\\Delta$:\n$$\\Delta = (3{,}20)^2 - 4 \\cdot 4{,}905 \\cdot (-1{,}80) = 10{,}24 + 35{,}316 = 45{,}556$$\n$$\\sqrt{\\Delta} \\approx 6{,}7495$$\nWybieramy pierwiastek dodatni (czas $t > 0$):\n$$t = \\frac{-3{,}20 + 6{,}7495}{2 \\cdot 4{,}905} = \\frac{3{,}5495}{9{,}81} \\approx 0{,}362\\text{ s} \\approx 0{,}36\\text{ s}$$"
                },
                {
                  "title": "Zadanie 2.2 – Wykazanie prędkości tuż przed uderzeniem z zasady zachowania energii",
                  "content": "Przyjmując poziom zerowy energii potencjalnej na powierzchni podłoża ($h = 0$), całkowita energia mechaniczna kulki jest zachowana (brak oporów powietrza):\n$$E_{\\text{mech},\\text{góra}} = E_{\\text{mech},\\text{dół}}$$\n$$\\frac{1}{2}m v_0^2 + mgh = \\frac{1}{2}m v_1^2$$\nDzielimy obustronnie przez masę $m$ i mnożymy przez 2:\n$$v_1^2 = v_0^2 + 2gh \\implies v_1 = \\sqrt{v_0^2 + 2gh}$$\nPodstawiamy dane liczbowe:\n$$v_1 = \\sqrt{(3{,}20\\text{ m/s})^2 + 2 \\cdot 9{,}81\\text{ m/s}^2 \\cdot 1{,}80\\text{ m}} = \\sqrt{10{,}24 + 35{,}316} = \\sqrt{45{,}556} \\approx 6{,}7495\\text{ m/s} \\approx 6{,}75\\text{ m/s}$$\n*(co należało wykazać).*"
                },
                {
                  "title": "Zadanie 2.3 – Prędkość po odbiciu i siła reakcji podłoża z II zasady dynamiki",
                  "content": "1. **Prędkość kulki tuż po odbiciu $v_2$:**\nKulka straciła $25\\%$ energii kinetycznej, więc po odbiciu zachowała $75\\%$ energii początkowej:\n$$E_{k2} = 0{,}75\\,E_{k1} \\implies \\frac{1}{2}m v_2^2 = 0{,}75 \\cdot \\left(\\frac{1}{2}m v_1^2\\right) \\implies v_2 = \\sqrt{0{,}75}\\,v_1$$\n$$v_2 = \\sqrt{0{,}75} \\cdot 6{,}7495\\text{ m/s} \\approx 0{,}8660 \\cdot 6{,}7495\\text{ m/s} \\approx 5{,}845\\text{ m/s}$$\n\n2. **Dynamika zderzenia kulki z podłożem:**\nPodczas kontaktu z podłożem na kulkę działają dwie siły: siła reakcji podłoża $\\vec{F}_R$ (skierowana pionowo w górę) oraz grawitacja $m\\vec{g}$ (w dół). Siła wypadkowa wynosi:\n$$F_{\\text{wyp}} = F_R - mg$$\nZ II zasady dynamiki Newtona w postaci pędowej (twierdzenie o impulsie siły i zmianie pędu):\n$$F_{\\text{wyp}} \\cdot \\Delta t = \\Delta p = m v_2 - (-m v_1) = m(v_1 + v_2)$$\n$$(F_R - mg) \\cdot \\Delta t = m(v_1 + v_2) \\implies F_R = mg + \\frac{m(v_1 + v_2)}{\\Delta t}$$\nPodstawiamy wartości liczbowe:\n$$mg = 0{,}250\\text{ kg} \\cdot 9{,}81\\text{ m/s}^2 = 2{,}4525\\text{ N}$$\n$$\\frac{m(v_1 + v_2)}{\\Delta t} = \\frac{0{,}250\\text{ kg} \\cdot (6{,}7495\\text{ m/s} + 5{,}845\\text{ m/s})}{0{,}005\\text{ s}} = 50 \\cdot 12{,}5945\\text{ N} \\approx 629{,}7\\text{ N}$$\n$$F_R = 2{,}45\\text{ N} + 629{,}7\\text{ N} \\approx 632{,}2\\text{ N} \\approx 632\\text{ N}$$"
                }
              ],
              "answer": "2.1: Czas spadania wynosi $t \\approx 0{,}36\\text{ s}$ (dokładnie $0{,}362\\text{ s}$);\n2.2: Wykazano $v_1 = \\sqrt{v_0^2 + 2gh} \\approx 6{,}75\\text{ m/s}$;\n2.3: Siła reakcji podłoża wynosi $F_R \\approx 632\\text{ N}$.",
              "trap": "Siła reakcji podłoża $F_R$ to nie jest sama siła wypadkowa! Podłoże musi nie tylko wyhamować kulkę i odbić ją w górę, ale również zrównoważyć stale działający ciężar kulki: $F_R = mg + \\frac{m(v_1 + v_2)}{\\Delta t}$.",
              "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://bip.cke.gov.pl/attachments/download/10000#page=15\" target=\"_blank\" rel=\"noopener noreferrer\">Informator CKE – rozwiązania, s. 15–19</a>."
            },
            "solutionSource": {
              "publisher": "Centralna Komisja Egzaminacyjna",
              "url": "https://bip.cke.gov.pl/attachments/download/10000",
              "localFile": "data/arkusze_cke/informatory/informator-maturalny-fizyka-2025.pdf",
              "pages": [
                15,
                19
              ]
            }
          },
          {
            "id": "matura-cke-praca-informator-2025-zad-3",
            "number": 202501,
            "title": "Informator CKE 2025 zad. 3 nowa formuła",
            "year": "Informator 2025",
            "difficulty": 3,
            "source": "Informator CKE od roku szkolnego 2024/2025",
            "link": "https://bip.cke.gov.pl/attachments/download/10000",
            "tags": [
              "Matura CKE",
              "Praca, moc i energia",
              "Zderzenia sprężyste i niesprężyste",
              "Energia kinetyczna"
            ],
            "problem": "<div class=\"task-matura energy-statements\">\n<h4>Zadanie 3. Zderzenie ciał</h4>\n<p>Ciało A o masie $200\\text{ g}$ poruszało się na poduszce powietrznej bez oporów ruchu i następnie zderzyło się z początkowo nieruchomym ciałem B. Po zderzeniu oba ciała dalej poruszały się bez oporów ruchu. Ruch ciał przed zderzeniem i po zderzeniu odbywał się w płaszczyźnie poziomej.</p>\n<p>Opisany ruch fotografowano z góry, a zdjęcia nałożono na siebie i uzyskano poniższy diagram. Kolejne zdjęcia wykonywano w jednakowych odstępach czasu i oznaczono numerami 1–6. Położenia ciała A w chwilach 1–6 oznaczono A<sub>1</sub>–A<sub>6</sub>, analogiczne położenia ciała B oznaczono B<sub>1</sub>–B<sub>6</sub>. (Zapis na diagramie B<sub>1</sub>–B<sub>3</sub> oznacza, że te położenia się pokrywały).</p>\n<p>Przyjmij, że ruch przedstawiony na diagramie odbywa się w układzie inercjalnym w płaszczyźnie poziomej, na której narysowano układ współrzędnych $(x, y)$.</p>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/informator-2025-z3-diagram.png\" alt=\"Diagram – kolejne położenia ciał A i B\" class=\"theory-img\" style=\"max-height:510px;display:block;margin:15px auto;\"></div>\n\n<h4>Zadanie 3.1. (0–3)</h4>\n<p><strong>Wykaż, że masa ciała B wynosi $\\boldsymbol{250\\text{ g}}$. Wykonaj niezbędne pomiary na diagramie, a następnie przeprowadź obliczenia.</strong></p>\n\n<h4>Zadanie 3.2. (0–3)</h4>\n<p><strong>Ustal i zapisz, czy zderzenie było doskonale sprężyste. Uzasadnij swoje stwierdzenie. W uzasadnieniu powołaj się na odpowiednie prawa lub zależności fizyczne i wykonaj niezbędne obliczenia.</strong></p>\n<p>Przyjmij do obliczeń masę ciała B równą $250\\text{ g}$.</p>\n</div>",
            "originalTaskId": "matura-cke-informator-2025-zad-3",
            "sourcePages": [
              20,
              22
            ],
            "formula": "2023",
            "solution": {
              "givens": "Masa ciała A: $m_A = 200\\text{ g} = 0{,}20\\text{ kg}$, ciało B początkowo spoczywa ($B_1 - B_3$), równe odstępy czasu $\\Delta t$, ruch w płaszczyźnie poziomej bez oporów ruchu.",
              "steps": [
                {
                  "title": "Zadanie 3.1 – Odczyt wektorów przesunięć z diagramu stroboskopowego",
                  "content": "Ponieważ kolejne zdjęcia wykonywano w jednakowych odstępach czasu $\\Delta t$, przesunięcie wektora położenia na siatce między kolejnymi błyskami stroboskopu jest wprost proporcjonalne do wektora prędkości ciała. Przyjmujemy jednostkę umowną: 1 kratka na jeden odstęp czasu $\\Delta t$ ($[\\text{kr}/\\Delta t]$):\n- **Przed zderzeniem (punkty 1–3):**\nCiało A przemieszcza się poziomo w prawo o 18,5 kratki na krok: $\\vec{v}_A = [18{,}5;\\; 0]$.\nCiało B spoczywa w miejscu: $\\vec{v}_B = [0;\\; 0]$.\n- **Po zderzeniu (punkty 4–6):**\nCiało A przesuwa się o 8,5 kratki w prawo i 7,5 kratki w dół: $\\vec{v}_A' = [8{,}5;\\; -7{,}5]$.\nCiało B przesuwa się o 8,0 kratek w prawo i 6,0 kratek w górę: $\\vec{v}_B' = [8{,}0;\\; +6{,}0]$."
                },
                {
                  "title": "Zadanie 3.1 – Wyznaczenie masy ciała B z zasady zachowania pędu w osi Y",
                  "content": "Układ jest izolowany, więc całkowity pęd jest zachowany niezależnie w osi $x$ oraz w osi $y$.\nPrzed zderzeniem pęd w osi pionowej $y$ wynosił zero ($p_{y,\\text{pocz}} = 0$). Z zasady zachowania pędu dla osi $y$:\n$$p_{y,\\text{pocz}} = p_{y,\\text{końc}}$$\n$$0 = m_A \\cdot v_{Ay}' + m_B \\cdot v_{By}'$$\nPodstawiamy wartości składowych:\n$$0 = 0{,}20\\text{ kg} \\cdot (-7{,}5) + m_B \\cdot (+6{,}0)$$\n$$6{,}0 \\cdot m_B = 0{,}20 \\cdot 7{,}5 = 1{,}50 \\implies m_B = \\frac{1{,}50}{6{,}0} = 0{,}250\\text{ kg} = 250\\text{ g}$$\n\n*(Sprawdzenie w osi $x$: $p_{x,\\text{pocz}} = 0{,}20 \\cdot 18{,}5 = 3{,}70$; $p_{x,\\text{końc}} = 0{,}20 \\cdot 8{,}5 + 0{,}25 \\cdot 8{,}0 = 1{,}70 + 2{,}00 = 3{,}70$ – zasada zachowania pędu w osi poziomej jest spełniona tożsamościowo).*"
                },
                {
                  "title": "Zadanie 3.2 – Ocena sprężystości zderzenia (bilans energii kinetycznej)",
                  "content": "Zderzenie jest doskonale sprężyste wtedy i tylko wtedy, gdy całkowita energia kinetyczna układu po zderzeniu jest równa energii kinetycznej przed zderzeniem ($E_{k,\\text{końc}} = E_{k,\\text{pocz}}$).\n1. **Kwadraty wartości prędkości ciał (z twierdzenia Pitagorasa):**\n$$v_A^2 = (18{,}5)^2 = 342{,}25$$\n$$(v_A')^2 = (v_{Ax}')^2 + (v_{Ay}')^2 = (8{,}5)^2 + (-7{,}5)^2 = 72{,}25 + 56{,}25 = 128{,}5$$\n$$(v_B')^2 = (v_{Bx}')^2 + (v_{By}')^2 = (8{,}0)^2 + (6{,}0)^2 = 64{,}0 + 36{,}0 = 100{,}0$$\n2. **Energia kinetyczna przed zderzeniem (w jednostkach umownych):**\n$$E_{k,\\text{pocz}} = \\frac{1}{2} m_A v_A^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot 342{,}25 = 34{,}225$$\n3. **Energia kinetyczna po zderzeniu:**\n$$E_{k,\\text{końc}} = \\frac{1}{2} m_A (v_A')^2 + \\frac{1}{2} m_B (v_B')^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot 128{,}5 + \\frac{1}{2} \\cdot 0{,}25 \\cdot 100{,}0$$\n$$E_{k,\\text{końc}} = 12{,}85 + 12{,}50 = 25{,}35$$\n4. **Wniosek:**\nPonieważ $E_{k,\\text{końc}} = 25{,}35 < E_{k,\\text{pocz}} = 34{,}225$, układ utracił około $26\\%$ początkowej energii kinetycznej (stosunek energii wynosi $\\frac{E_{k,\\text{końc}}}{E_{k,\\text{pocz}}} \\approx 0{,}74$).\nZderzenie **nie było doskonale sprężyste** (było zderzeniem niesprężystym ze stratami energii mechanicznej)."
                }
              ],
              "answer": "3.1: Masa ciała B wynosi $m_B = 250\\text{ g}$ ($0{,}250\\text{ kg}$);\n3.2: Zderzenie nie było doskonale sprężyste (część energii kinetycznej została rozproszona, energia po zderzeniu wynosi ok. $74\\%$ energii początkowej).",
              "trap": "Obliczając wartość prędkości pod kątem, należy pamiętać o zsumowaniu kwadratów obu składowych: $v^2 = v_x^2 + v_y^2$. Nie wolno porównywać samych pojedynczych współrzędnych!",
              "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://bip.cke.gov.pl/attachments/download/10000#page=21\" target=\"_blank\" rel=\"noopener noreferrer\">Informator CKE – rozwiązania, s. 21–23</a>."
            },
            "solutionSource": {
              "publisher": "Centralna Komisja Egzaminacyjna",
              "url": "https://bip.cke.gov.pl/attachments/download/10000",
              "localFile": "data/arkusze_cke/informatory/informator-maturalny-fizyka-2025.pdf",
              "pages": [
                21,
                23
              ]
            }
          },
          {
            "id": "matura-cke-praca-informator-2023-zad-2",
            "number": 202301,
            "title": "Informator CKE 2023 zad. 2 nowa formuła",
            "year": "Informator 2023",
            "difficulty": 3,
            "source": "Informator CKE od roku szkolnego 2022/2023",
            "link": "https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2023/Informatory/Informator_EM2023_fizyka.pdf",
            "tags": [
              "Matura CKE",
              "Praca, moc i energia",
              "Zderzenia sprężyste i niesprężyste",
              "Energia kinetyczna"
            ],
            "problem": "<div class=\"task-matura energy-statements\"><h4>Zadanie 2. Spadająca kulka</h4>\n<p>Pionowo w dół rzucono metalową kulkę o masie $m=0{,}250\\text{ kg}$. Na wysokości $h=1{,}80\\text{ m}$ ponad podłożem, w chwili $t_0=0$, kulka osiągnęła prędkość o wartości $v_0=3{,}20\\text{ m/s}$. Licząc od wysokości $h$, aż do podłoża, kulka spadała swobodnie i się nie obracała. Po upadku na twarde podłoże kulka odbiła się od niego, a czas oddziaływania (zderzenia) kulki z podłożem był równy $\\Delta t=0{,}005\\text{ s}$. Podczas pierwszego zderzenia z podłożem kulka straciła 25% swojej energii mechanicznej.</p>\n<p>Do analizy zjawiska przyjmij jego uproszczony model, w którym:</p><ul><li>pomiń opory powietrza podczas ruchu kulki;</li><li>załóż, że siła $\\vec{F}_R$ reakcji podłoża działająca na kulkę podczas zderzenia była stała;</li><li>przyjmij do obliczeń wartość przyśpieszenia ziemskiego równą $9{,}81\\text{ m/s}^2$.</li></ul>\n<h4>Zadanie 2.1. (0–2)</h4><p><strong>Na podstawie danych przedstawionych w opisie zadania 2. oblicz czas trwania ruchu kulki od chwili $\\boldsymbol{t_0=0}$ do chwili pierwszego uderzenia w podłoże.</strong></p>\n<h4>Zadanie 2.2. (0–2)</h4><p><strong>Wykaż, że wartość prędkości uzyskana przez kulkę tuż przed pierwszym uderzeniem w podłoże wynosi $\\boldsymbol{v_1\\approx6{,}75\\text{ m/s}}$.</strong></p>\n<h4>Zadanie 2.3. (0–3)</h4><p><strong>Oblicz wartość siły <u>reakcji podłoża</u> działającej na kulkę podczas zderzenia kulki z podłożem.</strong></p>\n<p>Wskazówka: możesz skorzystać z faktu, że wartość prędkości uzyskana przez kulkę tuż przed uderzeniem w podłoże wynosi $v_1\\approx6{,}75\\text{ m/s}$.</p></div>",
            "originalTaskId": "matura-cke-informator-2023-zad-2",
            "sourcePages": [
              15,
              16,
              18
            ],
            "formula": "2023",
            "solution": {
              "givens": "Masa kulki: $m = 0{,}250\\text{ kg}$, wysokość początkowa: $h = 1{,}80\\text{ m}$, prędkość początkowa: $v_0 = 3{,}20\\text{ m/s}$ (skierowana pionowo w dół), czas zderzenia z podłożem: $\\Delta t = 5{,}00 \\cdot 10^{-3}\\text{ s}$, przyśpieszenie ziemskie: $g = 9{,}81\\text{ m/s}^2$, strata energii mechanicznej przy odbiciu: $25\\%$.",
              "steps": [
                {
                  "title": "Zadanie 2.1 – Obliczenie czasu spadania kulki",
                  "content": "Kierujemy oś pionową w dół z początkiem na wysokości wyrzutu. Równanie drogi w ruchu jednostajnie przyspieszonym z prędkością początkową $v_0$:\n$$h = v_0 t + \\frac{1}{2}gt^2 \\implies \\frac{1}{2}gt^2 + v_0 t - h = 0$$\nPodstawiamy wartości liczbowe w jednostkach SI:\n$$4{,}905\\,t^2 + 3{,}20\\,t - 1{,}80 = 0$$\nObliczamy wyróżnik trójmianu kwadratowego $\\Delta$:\n$$\\Delta = (3{,}20)^2 - 4 \\cdot 4{,}905 \\cdot (-1{,}80) = 10{,}24 + 35{,}316 = 45{,}556$$\n$$\\sqrt{\\Delta} \\approx 6{,}7495$$\nWybieramy pierwiastek dodatni (czas $t > 0$):\n$$t = \\frac{-3{,}20 + 6{,}7495}{2 \\cdot 4{,}905} = \\frac{3{,}5495}{9{,}81} \\approx 0{,}362\\text{ s} \\approx 0{,}36\\text{ s}$$"
                },
                {
                  "title": "Zadanie 2.2 – Wykazanie prędkości tuż przed uderzeniem z zasady zachowania energii",
                  "content": "Przyjmując poziom zerowy energii potencjalnej na powierzchni podłoża ($h = 0$), całkowita energia mechaniczna kulki jest zachowana (brak oporów powietrza):\n$$E_{\\text{mech},\\text{góra}} = E_{\\text{mech},\\text{dół}}$$\n$$\\frac{1}{2}m v_0^2 + mgh = \\frac{1}{2}m v_1^2$$\nDzielimy obustronnie przez masę $m$ i mnożymy przez 2:\n$$v_1^2 = v_0^2 + 2gh \\implies v_1 = \\sqrt{v_0^2 + 2gh}$$\nPodstawiamy dane liczbowe:\n$$v_1 = \\sqrt{(3{,}20\\text{ m/s})^2 + 2 \\cdot 9{,}81\\text{ m/s}^2 \\cdot 1{,}80\\text{ m}} = \\sqrt{10{,}24 + 35{,}316} = \\sqrt{45{,}556} \\approx 6{,}7495\\text{ m/s} \\approx 6{,}75\\text{ m/s}$$\n*(co należało wykazać).*"
                },
                {
                  "title": "Zadanie 2.3 – Prędkość po odbiciu i siła reakcji podłoża z II zasady dynamiki",
                  "content": "1. **Prędkość kulki tuż po odbiciu $v_2$:**\nKulka straciła $25\\%$ energii kinetycznej, więc po odbiciu zachowała $75\\%$ energii początkowej:\n$$E_{k2} = 0{,}75\\,E_{k1} \\implies \\frac{1}{2}m v_2^2 = 0{,}75 \\cdot \\left(\\frac{1}{2}m v_1^2\\right) \\implies v_2 = \\sqrt{0{,}75}\\,v_1$$\n$$v_2 = \\sqrt{0{,}75} \\cdot 6{,}7495\\text{ m/s} \\approx 0{,}8660 \\cdot 6{,}7495\\text{ m/s} \\approx 5{,}845\\text{ m/s}$$\n\n2. **Dynamika zderzenia kulki z podłożem:**\nPodczas kontaktu z podłożem na kulkę działają dwie siły: siła reakcji podłoża $\\vec{F}_R$ (skierowana pionowo w górę) oraz grawitacja $m\\vec{g}$ (w dół). Siła wypadkowa wynosi:\n$$F_{\\text{wyp}} = F_R - mg$$\nZ II zasady dynamiki Newtona w postaci pędowej (twierdzenie o impulsie siły i zmianie pędu):\n$$F_{\\text{wyp}} \\cdot \\Delta t = \\Delta p = m v_2 - (-m v_1) = m(v_1 + v_2)$$\n$$(F_R - mg) \\cdot \\Delta t = m(v_1 + v_2) \\implies F_R = mg + \\frac{m(v_1 + v_2)}{\\Delta t}$$\nPodstawiamy wartości liczbowe:\n$$mg = 0{,}250\\text{ kg} \\cdot 9{,}81\\text{ m/s}^2 = 2{,}4525\\text{ N}$$\n$$\\frac{m(v_1 + v_2)}{\\Delta t} = \\frac{0{,}250\\text{ kg} \\cdot (6{,}7495\\text{ m/s} + 5{,}845\\text{ m/s})}{0{,}005\\text{ s}} = 50 \\cdot 12{,}5945\\text{ N} \\approx 629{,}7\\text{ N}$$\n$$F_R = 2{,}45\\text{ N} + 629{,}7\\text{ N} \\approx 632{,}2\\text{ N} \\approx 632\\text{ N}$$"
                }
              ],
              "answer": "2.1: Czas spadania wynosi $t \\approx 0{,}36\\text{ s}$ (dokładnie $0{,}362\\text{ s}$);\n2.2: Wykazano $v_1 = \\sqrt{v_0^2 + 2gh} \\approx 6{,}75\\text{ m/s}$;\n2.3: Siła reakcji podłoża wynosi $F_R \\approx 632\\text{ N}$.",
              "trap": "Siła reakcji podłoża $F_R$ to nie jest sama siła wypadkowa! Podłoże musi nie tylko wyhamować kulkę i odbić ją w górę, ale również zrównoważyć stale działający ciężar kulki: $F_R = mg + \\frac{m(v_1 + v_2)}{\\Delta t}$.",
              "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2023/Informatory/Informator_EM2023_fizyka.pdf#page=15\" target=\"_blank\" rel=\"noopener noreferrer\">Informator CKE – rozwiązania, s. 15–19</a>."
            },
            "solutionSource": {
              "publisher": "Centralna Komisja Egzaminacyjna",
              "url": "https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2023/Informatory/Informator_EM2023_fizyka.pdf",
              "localFile": "data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf",
              "pages": [
                15,
                19
              ]
            }
          },
          {
            "id": "matura-cke-praca-informator-2023-zad-3",
            "number": 202301,
            "title": "Informator CKE zad. 3 nowa formuła",
            "year": "Informator 2023",
            "difficulty": 3,
            "source": "Informator Maturalny CKE (Formuła 2023)",
            "link": "https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2023/Informatory/Informator_EM2023_fizyka.pdf",
            "tags": [
              "Matura CKE",
              "Praca, moc i energia",
              "Zderzenia sprężyste i niesprężyste",
              "Energia kinetyczna"
            ],
            "problem": "<div class=\"task-matura energy-statements\">\n<h4>Zadanie 3. Zderzenie ciał</h4>\n<p>Ciało A o masie $200\\text{ g}$ poruszało się na poduszce powietrznej bez oporów ruchu i następnie zderzyło się z początkowo nieruchomym ciałem B. Po zderzeniu oba ciała dalej poruszały się bez oporów ruchu. Ruch ciał przed zderzeniem i po zderzeniu odbywał się w płaszczyźnie poziomej.</p>\n<p>Opisany ruch fotografowano z góry, a zdjęcia nałożono na siebie i uzyskano poniższy diagram. Kolejne zdjęcia wykonywano w jednakowych odstępach czasu i oznaczono numerami 1–6. Położenia ciała A w chwilach 1–6 oznaczono A<sub>1</sub>–A<sub>6</sub>, analogiczne położenia ciała B oznaczono B<sub>1</sub>–B<sub>6</sub>. (Zapis na diagramie B<sub>1</sub>–B<sub>3</sub> oznacza, że te położenia się pokrywały).</p>\n<p>Przyjmij, że ruch przedstawiony na diagramie odbywa się w układzie inercjalnym w płaszczyźnie poziomej, na której narysowano układ współrzędnych $(x, y)$.</p>\n\n<div class=\"chart-container-svg\"><img src=\"img/energy/informator-2023-z3-diagram.png\" alt=\"Diagram – kolejne położenia ciał A i B\" class=\"theory-img\" style=\"max-height:510px;display:block;margin:15px auto;\"></div>\n\n<h4>Zadanie 3.1. (0–3)</h4>\n<p><strong>Wykaż, że masa ciała B wynosi $\\boldsymbol{250\\text{ g}}$. Wykonaj niezbędne pomiary na diagramie, a następnie przeprowadź obliczenia.</strong></p>\n\n<h4>Zadanie 3.2. (0–3)</h4>\n<p><strong>Ustal i zapisz, czy zderzenie było doskonale sprężyste. Powołaj się na odpowiednie prawa lub zależności fizyczne i wykonaj niezbędne obliczenia, uzasadniające twoje stwierdzenie.</strong></p>\n<p>Przyjmij do obliczeń masę ciała B równą $250\\text{ g}$.</p>\n</div>",
            "originalTaskId": "matura-cke-informator-2023-zad-3",
            "sourcePages": [
              20,
              22
            ],
            "formula": "2023",
            "solution": {
              "givens": "Masa ciała A: $m_A = 200\\text{ g} = 0{,}20\\text{ kg}$, ciało B początkowo spoczywa ($B_1 - B_3$), równe odstępy czasu $\\Delta t$, ruch w płaszczyźnie poziomej bez oporów ruchu.",
              "steps": [
                {
                  "title": "Zadanie 3.1 – Odczyt wektorów przesunięć z diagramu stroboskopowego",
                  "content": "Ponieważ kolejne zdjęcia wykonywano w jednakowych odstępach czasu $\\Delta t$, przesunięcie wektora położenia na siatce między kolejnymi błyskami stroboskopu jest wprost proporcjonalne do wektora prędkości ciała. Przyjmujemy jednostkę umowną: 1 kratka na jeden odstęp czasu $\\Delta t$ ($[\\text{kr}/\\Delta t]$):\n- **Przed zderzeniem (punkty 1–3):**\nCiało A przemieszcza się poziomo w prawo o 18,5 kratki na krok: $\\vec{v}_A = [18{,}5;\\; 0]$.\nCiało B spoczywa w miejscu: $\\vec{v}_B = [0;\\; 0]$.\n- **Po zderzeniu (punkty 4–6):**\nCiało A przesuwa się o 8,5 kratki w prawo i 7,5 kratki w dół: $\\vec{v}_A' = [8{,}5;\\; -7{,}5]$.\nCiało B przesuwa się o 8,0 kratek w prawo i 6,0 kratek w górę: $\\vec{v}_B' = [8{,}0;\\; +6{,}0]$."
                },
                {
                  "title": "Zadanie 3.1 – Wyznaczenie masy ciała B z zasady zachowania pędu w osi Y",
                  "content": "Układ jest izolowany, więc całkowity pęd jest zachowany niezależnie w osi $x$ oraz w osi $y$.\nPrzed zderzeniem pęd w osi pionowej $y$ wynosił zero ($p_{y,\\text{pocz}} = 0$). Z zasady zachowania pędu dla osi $y$:\n$$p_{y,\\text{pocz}} = p_{y,\\text{końc}}$$\n$$0 = m_A \\cdot v_{Ay}' + m_B \\cdot v_{By}'$$\nPodstawiamy wartości składowych:\n$$0 = 0{,}20\\text{ kg} \\cdot (-7{,}5) + m_B \\cdot (+6{,}0)$$\n$$6{,}0 \\cdot m_B = 0{,}20 \\cdot 7{,}5 = 1{,}50 \\implies m_B = \\frac{1{,}50}{6{,}0} = 0{,}250\\text{ kg} = 250\\text{ g}$$\n\n*(Sprawdzenie w osi $x$: $p_{x,\\text{pocz}} = 0{,}20 \\cdot 18{,}5 = 3{,}70$; $p_{x,\\text{końc}} = 0{,}20 \\cdot 8{,}5 + 0{,}25 \\cdot 8{,}0 = 1{,}70 + 2{,}00 = 3{,}70$ – zasada zachowania pędu w osi poziomej jest spełniona tożsamościowo).*"
                },
                {
                  "title": "Zadanie 3.2 – Ocena sprężystości zderzenia (bilans energii kinetycznej)",
                  "content": "Zderzenie jest doskonale sprężyste wtedy i tylko wtedy, gdy całkowita energia kinetyczna układu po zderzeniu jest równa energii kinetycznej przed zderzeniem ($E_{k,\\text{końc}} = E_{k,\\text{pocz}}$).\n1. **Kwadraty wartości prędkości ciał (z twierdzenia Pitagorasa):**\n$$v_A^2 = (18{,}5)^2 = 342{,}25$$\n$$(v_A')^2 = (v_{Ax}')^2 + (v_{Ay}')^2 = (8{,}5)^2 + (-7{,}5)^2 = 72{,}25 + 56{,}25 = 128{,}5$$\n$$(v_B')^2 = (v_{Bx}')^2 + (v_{By}')^2 = (8{,}0)^2 + (6{,}0)^2 = 64{,}0 + 36{,}0 = 100{,}0$$\n2. **Energia kinetyczna przed zderzeniem (w jednostkach umownych):**\n$$E_{k,\\text{pocz}} = \\frac{1}{2} m_A v_A^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot 342{,}25 = 34{,}225$$\n3. **Energia kinetyczna po zderzeniu:**\n$$E_{k,\\text{końc}} = \\frac{1}{2} m_A (v_A')^2 + \\frac{1}{2} m_B (v_B')^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot 128{,}5 + \\frac{1}{2} \\cdot 0{,}25 \\cdot 100{,}0$$\n$$E_{k,\\text{końc}} = 12{,}85 + 12{,}50 = 25{,}35$$\n4. **Wniosek:**\nPonieważ $E_{k,\\text{końc}} = 25{,}35 < E_{k,\\text{pocz}} = 34{,}225$, układ utracił około $26\\%$ początkowej energii kinetycznej (stosunek energii wynosi $\\frac{E_{k,\\text{końc}}}{E_{k,\\text{pocz}}} \\approx 0{,}74$).\nZderzenie **nie było doskonale sprężyste** (było zderzeniem niesprężystym ze stratami energii mechanicznej)."
                }
              ],
              "answer": "3.1: Masa ciała B wynosi $m_B = 250\\text{ g}$ ($0{,}250\\text{ kg}$);\n3.2: Zderzenie nie było doskonale sprężyste (część energii kinetycznej została rozproszona, energia po zderzeniu wynosi ok. $74\\%$ energii początkowej).",
              "trap": "Obliczając wartość prędkości pod kątem, należy pamiętać o zsumowaniu kwadratów obu składowych: $v^2 = v_x^2 + v_y^2$. Nie wolno porównywać samych pojedynczych współrzędnych!",
              "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2023/Informatory/Informator_EM2023_fizyka.pdf#page=21\" target=\"_blank\" rel=\"noopener noreferrer\">Informator CKE – rozwiązania, s. 21–23</a>."
            },
            "solutionSource": {
              "publisher": "Centralna Komisja Egzaminacyjna",
              "url": "https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2023/Informatory/Informator_EM2023_fizyka.pdf",
              "localFile": "data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf",
              "pages": [
                21,
                23
              ]
            }
          }
        ]
      },
      {
        "id": "m-bryla",
        "title": "Dział 4: Bryła Sztywna i Ruch Obrotowy",
        "icon": "⚙️",
        "badge": "W przygotowaniu",
        "isComingSoon": true,
        "desc": "Ruch obrotowy bryły sztywnej, moment siły, moment bezwładności, toczenie bez poślizgu i zasada zachowania momentu pędu.",
        "subchapters": [
          {
            "id": "sub-bryla-matura",
            "title": "Zadania maturalne CKE (Bryła Sztywna)",
            "shortTitle": "Matura CKE",
            "number": 1,
            "icon": "🔄",
            "desc": "Zadania maturalne CKE dotyczące ruchu obrotowego bryły sztywnej, momentu siły, momentu bezwładności i toczenia.",
            "formulaCheat": "M = I \\epsilon \\qquad I = \\sum m_i r_i^2 \\qquad L = I \\omega \\qquad E_{obr} = \\frac{I \\omega^2}{2} \\qquad v = \\omega R",
            "tasks": [
              {
                "id": "matura-cke-bryla-2026-czerwiec-zad-4",
                "originalTaskId": "matura-cke-2026-czerwiec-zad-4",
                "number": 202606,
                "title": "Matura czerwiec 2026 zad. 4 nowa formuła",
                "year": "2026 czerwiec",
                "difficulty": 3,
                "source": "Matura CKE 2026 (Czerwiec – termin dodatkowy)",
                "link": "https://naukagryzie.pl/arkusze/matura-rozszerzona/fizyka/czerwiec-2026-formula-2023-cke/arkusz.pdf",
                "formula": "2023",
                "sourcePages": [
                  10,
                  11,
                  12,
                  13
                ],
                "tags": [
                  "Matura CKE",
                  "Bryła sztywna",
                  "Ruch obrotowy",
                  "Moment bezwładności",
                  "Twierdzenie Steinera"
                ],
                "problem": "<div class=\"task-matura energy-statements\"><h4>Zadanie 4.</h4><p>Bryła sztywna $\\mathcal B$ składa się z cienkiej obręczy o masie $M$ i o promieniu $R$ oraz z dwóch jednakowych, cienkich prętów: każdy o długości $l_{pręt}=2R$ i o masie $m_{pręt}=\\frac M2$ (zobacz rysunek poniżej).</p><p>Początkowo bryła $\\mathcal B$ toczy się po poziomym odcinku $XY$ drogi tak, że prędkość środka masy $O$ bryły jest stała, a jej wartość jest równa $v_{\\mathcal B}=1{,}4\\text{ m/s}$.</p><p>Od punktu $Y$ bryła $\\mathcal B$ zaczyna wtaczać się na odcinek drogi nachylony do poziomu, a wartość prędkości środka masy $O$ bryły zaczyna maleć.</p><p>Przyjmij, że:</p><ul><li>bryła toczy się cały czas <u>bez poślizgu</u></li><li>obręcz i pręty są jednorodne</li><li>punkty $P_1$ i $P_2$ na rysunku to punkty bryły, które w danej chwili stykają się z podłożem</li><li>poziomy odcinek drogi $XY$ łączy się łukiem z odcinkiem równi pochyłej (zobacz rysunek)</li><li>przyśpieszenie ziemskie ma wartość $g=9{,}8\\text{ m/s}^2$</li><li>opory powietrza nie występują.</li></ul><p>Na poniższym rysunku przedstawiono położenia bryły w dwóch wybranych chwilach ruchu.</p><div class=\"chart-container-svg\"><img src=\"img/energy/2026-czerwiec-z4-rysunek.png\" alt=\"Bryła B tocząca się po poziomie i równi\" class=\"theory-img\" style=\"max-height:500px;display:block;margin:15px auto;\"></div><p>W tabeli poniżej podano wzory na momenty bezwładności niektórych brył względem opisanych osi obrotu.</p><div class=\"energy-table-scroll\"><table class=\"energy-data-table\"><thead><tr><th>Bryła</th><th>Oś</th><th>Moment bezwładności</th></tr></thead><tbody><tr><td>Pręt o długości $l_{pręt}$ i o masie $m_{pręt}$</td><td>Oś prostopadła do pręta, przechodząca przez jego środek</td><td>$I_{0\\ pręt}=\\frac1{12}m_{pręt}l_{pręt}^2$</td></tr><tr><td>Obręcz o promieniu $R$ i o masie $M$</td><td>Oś prostopadła do płaszczyzny obręczy, przechodząca przez jej środek</td><td>$I_{0\\ obręcz}=MR^2$</td></tr><tr><td>Bryła $\\mathcal B$ (złożona z obręczy i prętów)</td><td>Oś prostopadła do bryły (czyli do płaszczyzny obręczy), przechodząca przez jej środek masy $O$ (oś $O$)</td><td>$I_{0\\mathcal B}=\\frac43MR^2$</td></tr></tbody></table></div><h4>Zadanie 4.1. (0–1)</h4><p><strong>Dokończ zdanie. Wybierz właściwą odpowiedź spośród podanych.</strong></p><p>W punkcie $P_1$ siła tarcia</p><p><strong>A.</strong> nie działa.</p><p><strong>B.</strong> zależy od prędkości.</p><p><strong>C.</strong> jest zwrócona w lewo (←).</p><p><strong>D.</strong> jest zwrócona w prawo (→).</p><h4>Zadanie 4.2. (0–1)</h4><p><strong>Dokończ zdanie. Wybierz właściwą odpowiedź spośród podanych.</strong></p><p>W punkcie $P_2$ siła tarcia</p><p><strong>A.</strong> nie działa.</p><p><strong>B.</strong> zależy od prędkości.</p><p><strong>C.</strong> jest zwrócona w lewo wzdłuż równi pochyłej (←).</p><p><strong>D.</strong> jest zwrócona w prawo wzdłuż równi pochyłej (→).</p><h4>Zadanie 4.3. (0–1)</h4><p><strong>Oceń prawdziwość poniższych stwierdzeń. Wybierz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p><table class=\"pf-table\"><tbody><tr><td>Moment siły ciężkości bryły $\\mathcal B$ względem punktu $P_2$ jest równy zero.</td><td class=\"pf-box\">P</td><td class=\"pf-box\">F</td></tr><tr><td>Moment pędu bryły $\\mathcal B$ względem środka jej masy $O$ jest zachowany podczas ruchu bryły wzdłuż równi pochyłej.</td><td class=\"pf-box\">P</td><td class=\"pf-box\">F</td></tr></tbody></table><h4>Zadanie 4.4. (0–2)</h4><p><strong>Wyprowadź wzór na moment bezwładności bryły $\\boldsymbol{\\mathcal B}$ względem osi $\\boldsymbol{O}$ – wzór, który jest podany w tabeli (strona 10).</strong></p><p><strong>Zapisz odpowiednie zależności i przekształcenia, które prowadzą do uzyskania wzoru na moment bezwładności bryły $\\boldsymbol{\\mathcal B}$ względem osi $\\boldsymbol{O}$.</strong></p><h4>Zadanie 4.5. (0–3)</h4><p><strong>Oblicz $\\boldsymbol{\\Delta h_{max}}$ – maksymalną wysokość, na jaką wzniósł się środek masy bryły $\\boldsymbol{\\mathcal B}$ względem swojego początkowego położenia. Zapisz obliczenia.</strong></p></div>",
                "solution": {
                  "intuition": "Przy toczeniu bez poślizgu cała początkowa energia kinetyczna bryły zamienia się w energię potencjalną jej środka masy.",
                  "givens": "Masa całej bryły: $m_{\\mathcal B}=2M$.\n$I_{0\\mathcal B}=\\frac43MR^2$, $v_{\\mathcal B}=1{,}4\\text{ m/s}$, $g=9{,}8\\text{ m/s}^2$.",
                  "steps": [
                    {
                      "title": "Zadanie 4.1",
                      "content": "Na poziomym odcinku ruch postępowy i obrotowy jest jednostajny. Brak przyśpieszenia poziomego wymaga zerowej siły tarcia. Odpowiedź A."
                    },
                    {
                      "title": "Zadanie 4.2",
                      "content": "Podczas wtaczania bryła zwalnia również w ruchu obrotowym. Tarcie musi dawać moment przeciwny do kierunku obrotu, czyli jest skierowane w górę równi, w prawo. Odpowiedź D."
                    },
                    {
                      "title": "Zadanie 4.3",
                      "content": "1. F: linia działania ciężaru nie przechodzi przez punkt $P_2$, więc jego moment względem $P_2$ jest niezerowy.\n2. F: tarcie ma niezerowy moment względem środka masy; prędkość kątowa maleje, a wraz z nią moment pędu $I_{0\\mathcal B}\\omega$."
                    },
                    {
                      "title": "Zadanie 4.4",
                      "content": "Momenty bezwładności części względem wspólnej osi dodają się.\nKażdy pręt ma moment $I_{pręt}=\\frac1{12}\\frac M2(2R)^2=\\frac16MR^2$.\nObręcz ma moment $I_{obręcz}=MR^2$.\n$I_{0\\mathcal B}=MR^2+2\\cdot\\frac16MR^2$.\n$I_{0\\mathcal B}=\\frac43MR^2$."
                    },
                    {
                      "title": "Zadanie 4.5",
                      "content": "W najwyższym położeniu $v=0$ i, dzięki toczeniu bez poślizgu, $\\omega=0$.\nZ zasady zachowania energii:\n$\\frac12(2M)v_{\\mathcal B}^2+\\frac12I_{0\\mathcal B}\\omega^2=2Mg\\Delta h_{max}$.\nPo podstawieniu $\\omega=v_{\\mathcal B}/R$:\n$Mv_{\\mathcal B}^2+\\frac23Mv_{\\mathcal B}^2=2Mg\\Delta h_{max}$.\n$\\Delta h_{max}=\\frac{5v_{\\mathcal B}^2}{6g}$.\n$\\Delta h_{max}=\\frac{5\\cdot1{,}4^2}{6\\cdot9{,}8}\\text{ m}\\approx0{,}167\\text{ m}$."
                    }
                  ],
                  "answer": "4.1: A. 4.2: D. 4.3: F, F.\n4.4: $I_{0\\mathcal B}=\\frac43MR^2$.\n4.5: $\\Delta h_{max}\\approx0{,}17\\text{ m}$.",
                  "trap": "M oznacza masę samej obręczy. Masa całej bryły wynosi 2M.",
                  "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://naukagryzie.pl/arkusze/matura-rozszerzona/fizyka/czerwiec-2026-formula-2023-cke/odpowiedzi.pdf#page=11\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 11–14</a>."
                },
                "solutionSource": {
                  "publisher": "Centralna Komisja Egzaminacyjna",
                  "url": "https://naukagryzie.pl/arkusze/matura-rozszerzona/fizyka/czerwiec-2026-formula-2023-cke/odpowiedzi.pdf",
                  "localFile": "data/arkusze_cke/2026/fizyka-2026-czerwiec-matura-rozszerzona-odpowiedzi.pdf",
                  "pages": [
                    11,
                    14
                  ]
                }
              },
              {
                "id": "matura-cke-bryla-2026-maj-zad-3",
                "originalTaskId": "matura-cke-2026-maj-zad-3",
                "number": 202605,
                "title": "Matura maj 2026 zad. 3 nowa formuła",
                "year": "2026 maj",
                "difficulty": 3,
                "source": "Matura CKE 2026 (Maj)",
                "link": "https://arkusze.pl/maturalne/fizyka-2026-maj-matura-rozszerzona.pdf",
                "formula": "2023",
                "sourcePages": [
                  10,
                  11
                ],
                "tags": [
                  "Matura CKE",
                  "Bryła sztywna",
                  "Ruch obrotowy",
                  "Moment bezwładności",
                  "Bloczek"
                ],
                "problem": "<div class=\"task-matura energy-statements\"><h4>Zadanie 3.</h4><p>Bloczek $\\mathcal W$, który jest jednorodnym walcem, podwieszono do sufitu. Przez ten bloczek przerzucono linę. Do jednego końca liny przymocowano ciężarek $\\mathcal C$, a do drugiego końca liny przyłożono zewnętrzną siłę $\\vec F$. Siła $\\vec F$ oraz drugi koniec liny są skierowane pod kątem $\\alpha$ do poziomu (zobacz rysunek obok).</p><div class=\"chart-container-svg\"><img src=\"img/energy/2026-maj-z3-rysunek.png\" alt=\"Bloczek, ciężarek i siła F\" class=\"theory-img\" style=\"max-height:350px;display:block;margin:15px auto;\"></div><p>Przyjmij model zjawiska, w którym:</p><ul><li>masę walca (bloczka $\\mathcal W$) oznaczymy jako $m_w$</li><li>promień walca (bloczka $\\mathcal W$) oznaczymy jako $R$</li><li>masę ciężarka oznaczymy jako $m_c$</li><li>moment bezwładności walca (bloczka $\\mathcal W$) względem jego osi wyraża się wzorem:<p>$I_0=\\frac12m_wR^2$</p></li><li>lina jest nierozciągliwa i <u>nie ślizga</u> się po bloczku</li><li>masę liny pomijamy</li><li>bloczek może obracać się wokół swojej osi bez tarcia</li><li>ruch układu rozpatrujemy w inercjalnym układzie odniesienia, w jednorodnym, ziemskim polu grawitacyjnym. Przyśpieszenie ziemskie oznaczymy jako $\\vec g$.</li></ul><h4>Zadanie 3.1. (0–1)</h4><p>Rozważamy taką sytuację 1., w której ciężarek oraz bloczek się nie poruszają.</p><p><strong>Dokończ zdanie. Wybierz właściwą odpowiedź spośród podanych.</strong></p><p>Wartość $F$ siły $\\vec F$ w opisanej sytuacji 1. wyraża się wzorem</p><p><strong>A.</strong> $F=m_cg$</p><p><strong>B.</strong> $F=(m_c+m_w)g$</p><p><strong>C.</strong> $F=m_cg\\cdot\\cos\\alpha$</p><p><strong>D.</strong> $F=m_cg\\cdot\\sin\\alpha$</p><h4>Zadanie 3.2. (0–4)</h4><p>Rozważamy taką sytuację 2., w której bloczek się obraca, a ciężarek porusza się pionowo <u>w dół</u> z przyśpieszeniem $\\vec a$ (skierowanym w dół) o wartości:</p><p>$a=\\frac12g$</p><p><strong>Wyznacz $\\boldsymbol{F}$ – wartość siły $\\boldsymbol{\\vec F}$ w opisanej sytuacji 2. – w zależności <u>tylko</u> od wartości przyśpieszenia ziemskiego $\\boldsymbol{g}$ oraz od masy ciężarka $\\boldsymbol{m_c}$ i masy walca $\\boldsymbol{m_w}$.</strong></p><p><strong>Zapisz odpowiednie równania i przekształcenia oraz podaj postać wzoru na $\\boldsymbol{F}$.</strong></p></div>",
                "solution": {
                  "intuition": "Siła F wykonuje ujemną pracę, gdy ciężarek opada. Energia pozostała po tej pracy zwiększa ruch ciężarka i obrót bloczka.",
                  "givens": "$I_0=\\frac12m_wR^2$, $a=\\frac12g$, $v=\\omega R$.",
                  "steps": [
                    {
                      "title": "Zadanie 3.1",
                      "content": "Ciężarek spoczywa, więc napięcie liny po jego stronie jest równe $m_cg$. Bloczek pozostaje w równowadze obrotowej: momenty obu napięć względem osi są równe. Ramiona obu sił są równe $R$, zatem $F=m_cg$. Odpowiedź A."
                    },
                    {
                      "title": "Zadanie 3.2",
                      "content": "Dla opadnięcia ciężarka o $h$ koniec liny przesuwa się o tę samą drogę przeciwnie do siły $\\vec F$, więc $W_F=-Fh$.\nTwierdzenie o zmianie energii mechanicznej:\n$-m_cgh+\\frac12m_c\\Delta(v^2)+\\frac12I_0\\Delta(\\omega^2)=-Fh$.\nZ $\\omega=v/R$ i $I_0=\\frac12m_wR^2$:\n$-m_cgh+(\\frac12m_c+\\frac14m_w)\\Delta(v^2)=-Fh$.\nRuch ma stałe przyśpieszenie: $\\Delta(v^2)=2ah$.\nPo podzieleniu przez $h$:\n$F=m_cg-(m_c+\\frac12m_w)a$.\nDla $a=g/2$ otrzymujemy:\n$F=\\frac12g(m_c-\\frac12m_w)$."
                    }
                  ],
                  "answer": "3.1: A.\n3.2: $F=\\frac12g(m_c-\\frac12m_w)$.",
                  "trap": "Siła działa wzdłuż liny. W jej momencie względem osi bloczka ramieniem jest R, bez dodatkowego sinusa lub cosinusa kąta α.",
                  "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2026-maj-matura-rozszerzona-odpowiedzi.pdf#page=15\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 15–19</a>."
                },
                "solutionSource": {
                  "publisher": "Centralna Komisja Egzaminacyjna",
                  "url": "https://arkusze.pl/maturalne/fizyka-2026-maj-matura-rozszerzona-odpowiedzi.pdf",
                  "localFile": "data/arkusze_cke/2026/fizyka-2026-maj-matura-rozszerzona-odpowiedzi.pdf",
                  "pages": [
                    15,
                    19
                  ]
                }
              },
              {
                "id": "matura-cke-bryla-2025-czerwiec-zad-3",
                "originalTaskId": "matura-cke-2025-czerwiec-zad-3",
                "number": 202506,
                "title": "Matura czerwiec 2025 zad. 3 nowa formuła",
                "year": "2025 czerwiec",
                "difficulty": 3,
                "source": "Matura CKE 2025 (Czerwiec – termin dodatkowy)",
                "link": "https://arkusze.pl/maturalne/fizyka-2025-czerwiec-matura-rozszerzona.pdf",
                "formula": "2023",
                "sourcePages": [
                  8,
                  9
                ],
                "tags": [
                  "Matura CKE",
                  "Bryła sztywna",
                  "Toczenie bez poślizgu",
                  "Ruch obrotowy"
                ],
                "problem": "<div class=\"task-matura energy-statements\"><h4>Zadanie 3.</h4><p>Walec $\\mathcal W$ o promieniu $R$ i masie $m$ toczy się bez poślizgu ze stałą prędkością o wartości $v$ po poziomym, płaskim podłożu.</p><p>Na rysunku poniżej przedstawiono położenia walca w chwili $t_0=0\\text{ s}$ oraz w chwili $t_1=0{,}2\\text{ s}$. W czasie od chwili $t_0$ do chwili $t_1$ walec wykonał <u>pół obrotu</u> względem swojej osi.</p><p>Położenia wybranych punktów $A$ i $B$, leżących na brzegu walca wzdłuż średnicy, w chwilach $t_0$ oraz $t_1$ oznaczymy – odpowiednio – jako $A_0$, $B_0$ oraz $A_1$, $B_1$. Punkty $B_0$ i $A_1$ dotykają podłoża.</p><div class=\"chart-container-svg\"><img src=\"img/energy/2025-czerwiec-z3-rysunek.png\" alt=\"Rysunek – walec przed i po połowie obrotu\" class=\"theory-img\" style=\"max-height:500px;display:block;margin:15px auto;\"></div><h4>Zadanie 3.1. (0–1)</h4><p><strong>Dokończ zdanie. Zaznacz właściwą odpowiedź spośród podanych.</strong></p><p>Prędkość kątowa w ruchu obrotowym walca $\\mathcal W$ względem jego osi ma wartość</p><p><strong>A.</strong> $\\omega=2\\pi\\frac{\\mathrm{rad}}{\\mathrm s}$</p><p><strong>B.</strong> $\\omega=4\\pi\\frac{\\mathrm{rad}}{\\mathrm s}$</p><p><strong>C.</strong> $\\omega=5\\pi\\frac{\\mathrm{rad}}{\\mathrm s}$</p><p><strong>D.</strong> $\\omega=10\\pi\\frac{\\mathrm{rad}}{\\mathrm s}$</p><h4>Zadanie 3.2. (0–2)</h4><p>Wartość przemieszczenia punktu $A$ od chwili $t_0$ do chwili $t_1$ oznaczymy jako $|A_0A_1|$.</p><p><strong>Oblicz iloraz $\\boldsymbol{\\frac{|A_0A_1|}{R}}$. Wynik podaj w postaci <u>liczby niewymiernej</u>. Zapisz obliczenia.</strong></p><h4>Zadanie 3.3. (0–2)</h4><p>Walec $\\mathcal W$ jest wewnątrz częściowo pusty i symetryczny względem osi przechodzącej przez jego środek. Moment bezwładności walca $\\mathcal W$ względem jego osi wyraża się wzorem:</p><p>$I_0=\\frac45mR^2$</p><p>Całkowitą energię kinetyczną toczącego się walca $\\mathcal W$ oznaczymy jako $E_{kin\\ calk}$. Ta energia wyraża się wzorem:</p><p>$E_{kin\\ calk}=k\\cdot mv^2$ &nbsp; dla pewnego współczynnika liczbowego $k$.</p><p><strong>Oblicz $\\boldsymbol{k}$. Zapisz obliczenia.</strong></p></div>",
                "solution": {
                  "intuition": "Warunek toczenia wiąże obrót walca z przesunięciem jego środka. Energia całkowita zawiera dwa składniki.",
                  "givens": "Pół obrotu w $\\Delta t=0{,}2\\text{ s}$.\n$I_0=\\frac45mR^2$, $v=\\omega R$.",
                  "steps": [
                    {
                      "title": "Zadanie 3.1",
                      "content": "Pół obrotu odpowiada kątowi $\\pi$ rad. Zatem $\\omega=\\pi/(0{,}2\\text{ s})=5\\pi\\text{ rad/s}$. Odpowiedź C."
                    },
                    {
                      "title": "Zadanie 3.2",
                      "content": "Środek walca przesunął się poziomo o $s=R\\pi$. Punkt $A$ przeszedł z góry walca na dół, więc jego pionowe przemieszczenie ma wartość $2R$.\nZ twierdzenia Pitagorasa:\n$|A_0A_1|=\\sqrt{(\\pi R)^2+(2R)^2}$.\nStąd $\\frac{|A_0A_1|}{R}=\\sqrt{\\pi^2+4}$."
                    },
                    {
                      "title": "Zadanie 3.3",
                      "content": "$E_{kin\\ calk}=\\frac12mv^2+\\frac12I_0\\omega^2$.\nPo podstawieniu danych i $\\omega=v/R$:\n$E_{kin\\ calk}=\\frac12mv^2+\\frac25mv^2=\\frac9{10}mv^2$.\nPorównanie ze wzorem w zadaniu daje $k=\\frac9{10}=0{,}9$."
                    }
                  ],
                  "answer": "3.1: C.\n3.2: $\\sqrt{\\pi^2+4}$.\n3.3: $k=\\frac9{10}$.",
                  "trap": "Przemieszczenie punktu A jest odcinkiem łączącym położenie początkowe i końcowe; nie jest długością jego toru.",
                  "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2025-czerwiec-matura-rozszerzona-odpowiedzi.pdf#page=8\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 8–9</a>."
                },
                "solutionSource": {
                  "publisher": "Centralna Komisja Egzaminacyjna",
                  "url": "https://arkusze.pl/maturalne/fizyka-2025-czerwiec-matura-rozszerzona-odpowiedzi.pdf",
                  "localFile": "data/arkusze_cke/2025/fizyka-2025-czerwiec-matura-rozszerzona-odpowiedzi.pdf",
                  "pages": [
                    8,
                    9
                  ]
                }
              },
              {
                "id": "matura-cke-bryla-2025-maj-zad-2",
                "originalTaskId": "matura-cke-2025-maj-zad-2",
                "number": 202505,
                "title": "Matura maj 2025 zad. 2 nowa formuła",
                "year": "2025 maj",
                "difficulty": 3,
                "source": "Matura CKE 2025 (Maj)",
                "link": "https://arkusze.pl/maturalne/fizyka-2025-maj-matura-rozszerzona.pdf",
                "formula": "2023",
                "sourcePages": [
                  6,
                  7
                ],
                "tags": [
                  "Matura CKE",
                  "Bryła sztywna",
                  "Ruch obrotowy",
                  "Staczanie z równi",
                  "Moment bezwładności"
                ],
                "problem": "<div class=\"task-matura energy-statements\"><h4>Zadanie 2.</h4><p>Dany jest jednorodny pełny walec W1 oraz wydrążony częściowo (i osiowosymetrycznie) jednorodny walec W2. Walec W1 położono na równi pochyłej i puszczono swobodnie. Następnie <u>na tej samej wysokości</u> na tej równi położono walec W2 i także puszczono swobodnie (zobacz rysunek poniżej). Prędkości początkowe obu walców były równe zero. Walce W1 oraz W2 staczały się z równi bez poślizgu. Kąt nachylenia równi do poziomego podłoża wynosi $\\beta$.</p><p>Przyjmij następujące dane:</p><ul><li>promienie walców są sobie równe: $R_1=R_2=R$</li><li>masy walców są sobie równe: $m_1=m_2=m$ (walce wykonano z różnych materiałów)</li><li>momenty bezwładności walców W1 i W2 względem osi każdego z nich wyrażają się – odpowiednio – wzorami:<p>$I_1=k_1mR^2$ &nbsp; oraz &nbsp; $I_2=k_2mR^2$</p><p>gdzie $k_1$ i $k_2$ są pewnymi współczynnikami oraz $k_1\\ne k_2$.</p></li></ul><div class=\"chart-container-svg\"><img src=\"img/energy/2025-maj-z2-rysunek.png\" alt=\"Rysunek – dwa walce na równi pochyłej\" class=\"theory-img\" style=\"max-height:500px;display:block;margin:15px auto;\"></div><p>Uwzględnij następujące założenia i warunki:</p><ul><li>siły tarcia statycznego pomiędzy każdym z walców a powierzchnią równi <u>nie osiągnęły</u> wartości maksymalnych</li><li>pomijamy inne (tzn. oprócz tarcia statycznego) opory ruchu</li><li>ruch walców rozpatrujemy w inercjalnym układzie odniesienia związanym z ziemią, w jednorodnym, ziemskim polu grawitacyjnym.</li></ul><h4>Zadanie 2.1. (0–2)</h4><p><strong>Oceń prawdziwość poniższych stwierdzeń. Zaznacz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p><table class=\"pf-table\"><tbody><tr><td class=\"pf-num\">1.</td><td>$k_2>k_1$</td><td class=\"pf-box\">P</td><td class=\"pf-box\">F</td></tr><tr><td class=\"pf-num\">2.</td><td>U podnóża równi całkowite energie kinetyczne walców W1 i W2 są sobie równe.</td><td class=\"pf-box\">P</td><td class=\"pf-box\">F</td></tr><tr><td class=\"pf-num\">3.</td><td>U podnóża równi wartość prędkości ruchu postępowego walca W1 jest mniejsza od wartości prędkości ruchu postępowego walca W2.</td><td class=\"pf-box\">P</td><td class=\"pf-box\">F</td></tr></tbody></table><h4>Zadanie 2.2. (0–4)</h4><p><strong>Wyznacz $\\boldsymbol{a}$ – wartość przyśpieszenia liniowego walca W2 – w zależności <u>tylko</u> od wartości przyśpieszenia ziemskiego $\\boldsymbol{g}$, od kąta $\\boldsymbol{\\beta}$ oraz od współczynnika $\\boldsymbol{k_2}$.</strong></p><p><strong>Zapisz odpowiednie równania i przekształcenia oraz podaj postać wzoru na $\\boldsymbol{a}$.</strong></p></div>",
                "solution": {
                  "intuition": "Jednakowa początkowa energia potencjalna daje jednakową całkowitą energię kinetyczną, lecz inny podział na ruch postępowy i obrót.",
                  "givens": "$m_1=m_2=m$, $R_1=R_2=R$, $I_i=k_imR^2$, $v_i=\\omega_iR$.",
                  "steps": [
                    {
                      "title": "Zadanie 2.1",
                      "content": "1. P: w walcu wydrążonym większa część masy leży dalej od osi, więc $k_2>k_1$.\n2. P: z zachowania energii każdy walec u podnóża ma całkowitą energię kinetyczną $mgh$.\n3. F: $mgh=\\frac12m(1+k_i)v_i^2$, zatem $v_i^2=2gh/(1+k_i)$. Większe $k_2$ oznacza mniejsze $v_2$, czyli $v_1>v_2$."
                    },
                    {
                      "title": "Zadanie 2.2",
                      "content": "Po przebyciu drogi $s$ wzdłuż równi walec obniża się o $h=s\\sin\\beta$.\n$mgs\\sin\\beta=\\frac12mv^2+\\frac12I_2\\omega^2$.\nPo podstawieniu $I_2=k_2mR^2$ i $\\omega=v/R$:\n$mgs\\sin\\beta=\\frac12m(1+k_2)v^2$.\nRuch rozpoczyna się od spoczynku, więc $v^2=2as$.\n$g\\sin\\beta=(1+k_2)a$.\nOstatecznie $a=\\frac{g\\sin\\beta}{1+k_2}$."
                    }
                  ],
                  "answer": "2.1: P, P, F.\n2.2: $a=\\frac{g\\sin\\beta}{1+k_2}$.",
                  "trap": "Równe całkowite energie kinetyczne nie oznaczają równych prędkości postępowych.",
                  "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2025-maj-matura-rozszerzona-odpowiedzi.pdf#page=11\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 11–16</a>."
                },
                "solutionSource": {
                  "publisher": "Centralna Komisja Egzaminacyjna",
                  "url": "https://arkusze.pl/maturalne/fizyka-2025-maj-matura-rozszerzona-odpowiedzi.pdf",
                  "localFile": "data/arkusze_cke/2025/fizyka-2025-maj-matura-rozszerzona-odpowiedzi.pdf",
                  "pages": [
                    11,
                    16
                  ]
                }
              },
              {
                "id": "matura-cke-bryla-2024-maj-zad-2",
                "originalTaskId": "matura-cke-2024-maj-zad-2",
                "number": 202405,
                "title": "Matura maj 2024 zad. 2 nowa formuła",
                "year": "2024 maj",
                "difficulty": 3,
                "source": "Matura CKE 2024 (Maj)",
                "link": "https://arkusze.pl/maturalne/fizyka-2024-maj-matura-rozszerzona.pdf",
                "formula": "2023",
                "sourcePages": [
                  7,
                  8,
                  9
                ],
                "tags": [
                  "Matura CKE",
                  "Bryła sztywna",
                  "Ruch obrotowy",
                  "Toczenie bez poślizgu",
                  "Siła tarcia"
                ],
                "problem": "<div class=\"task-matura energy-statements\"><h4>Zadanie 2.</h4><p>Jednorodny walec o masie $m=10\\text{ kg}$ i promieniu $R$ był ciągnięty siłą o wartości $F=30\\text{ N}$ po płaskiej poziomej powierzchni. Siła $\\vec F$ była przyłożona poziomo do uchwytu i prostopadle do osi obrotu walca (zobacz rysunki 1.–3.).</p><p>Do analizy zagadnienia przyjmij model zjawiska, w którym:</p><ul><li>walec toczył się bez poślizgu</li><li>w kierunku poziomym na walec działały tylko: stała siła tarcia statycznego $\\vec T$ oraz siła $\\vec F$</li><li>siła tarcia $\\vec T$ między walcem a powierzchnią <u>nie osiągnęła</u> wartości maksymalnej</li><li>pomijamy inne (tzn. oprócz tarcia statycznego) opory ruchu</li><li>moment bezwładności walca względem jego osi obrotu – będącej osią symetrii walca – wyraża się wzorem: $I_0=\\frac12mR^2$</li><li>ruch walca rozpatrujemy w inercjalnym układzie odniesienia związanym z ziemią, w jednorodnym, ziemskim polu grawitacyjnym</li><li>pomijamy masę osi obrotu walca i masę jej uchwytu.</li></ul><div class=\"chart-container-svg\"><img src=\"img/energy/2024-maj-z2-rys1.png\" alt=\"Rysunek 1. – widok z perspektywy\" class=\"theory-img\" style=\"max-height:500px;display:block;margin:15px auto;\"></div><div class=\"chart-container-svg\"><img src=\"img/energy/2024-maj-z2-rys23.png\" alt=\"Rysunki 2. i 3. – widok z boku i z góry\" class=\"theory-img\" style=\"max-height:500px;display:block;margin:15px auto;\"></div><h4>Zadanie 2.1. (0–3)</h4><p>Całkowitą energię kinetyczną walca w pewnej chwili $t$ ruchu oznaczymy jako $E_{kin\\ calk}$, a energię kinetyczną ruchu postępowego walca w tej samej chwili $t$ oznaczymy jako $E_{kin\\ post}$.</p><p><strong>Oblicz iloraz $\\boldsymbol{\\frac{E_{kin\\ post}}{E_{kin\\ calk}}}$. Zapisz obliczenia.</strong></p><p><strong>Wynik podaj w postaci <u>ułamka zwykłego</u>.</strong></p><h4>Zadanie 2.2. (0–3)</h4><p><strong>Oblicz wartość przyśpieszenia (liniowego) środka masy walca. Zapisz obliczenia.</strong></p></div>",
                "solution": {
                  "intuition": "Praca przyłożonej siły zwiększa sumę energii ruchu postępowego i obrotowego walca.",
                  "givens": "$m=10\\text{ kg}$, $F=30\\text{ N}$, $I_0=\\frac12mR^2$, $v=\\omega R$.",
                  "steps": [
                    {
                      "title": "Zadanie 2.1",
                      "content": "$E_{kin\\ calk}=\\frac12mv^2+\\frac12I_0\\omega^2$.\nPo podstawieniu momentu bezwładności i warunku toczenia:\n$E_{kin\\ calk}=\\frac12mv^2+\\frac14mv^2=\\frac34mv^2$.\nZatem $\\frac{E_{kin\\ post}}{E_{kin\\ calk}}=\\frac{1/2}{3/4}=\\frac23$."
                    },
                    {
                      "title": "Zadanie 2.2",
                      "content": "Tarcie statyczne przy toczeniu bez poślizgu po nieruchomym podłożu nie zmienia całkowitej energii kinetycznej. Ciężar i reakcja podłoża także nie wykonują pracy.\n$Fs=\\Delta E_{kin\\ calk}=\\frac34m(v^2-v_0^2)$.\nPonieważ $v^2-v_0^2=2as$, otrzymujemy $Fs=\\frac32mas$.\nStąd $a=\\frac{2F}{3m}$.\n$a=\\frac{2\\cdot30}{3\\cdot10}\\text{ m/s}^2=2\\text{ m/s}^2$."
                    }
                  ],
                  "answer": "2.1: $\\frac23$.\n2.2: $a=2\\text{ m/s}^2$.",
                  "trap": "Całkowita energia walca obejmuje również obrót.",
                  "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2024-maj-matura-rozszerzona-odpowiedzi.pdf#page=7\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 7–12</a>."
                },
                "solutionSource": {
                  "publisher": "Centralna Komisja Egzaminacyjna",
                  "url": "https://arkusze.pl/maturalne/fizyka-2024-maj-matura-rozszerzona-odpowiedzi.pdf",
                  "localFile": "data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona-odpowiedzi.pdf",
                  "pages": [
                    7,
                    12
                  ]
                }
              },
              {
                "id": "matura-cke-bryla-2023-maj-zad-3",
                "originalTaskId": "matura-cke-2023-maj-zad-3",
                "number": 202305,
                "title": "Matura maj 2023 zad. 3 nowa formuła",
                "year": "2023 maj",
                "difficulty": 3,
                "source": "Matura CKE 2023 (Maj)",
                "link": "https://arkusze.pl/maturalne/fizyka-2023-maj-matura-rozszerzona.pdf",
                "formula": "2023",
                "sourcePages": [
                  8,
                  9
                ],
                "tags": [
                  "Matura CKE",
                  "Bryła sztywna",
                  "Ruch obrotowy",
                  "Moment siły",
                  "Moment pędu"
                ],
                "problem": "<div class=\"task-matura energy-statements\"><h4>Zadanie 3.</h4><p>Wzdłuż osi jednorodnego walca o masie $m$ i promieniu $R$ przechodzi cienki pręt, wokół którego walec może się obracać. Do tego pręta przymocowano cienką nierozciągliwą linkę, którą przewieszono przez bloczek. Na końcu linki zawieszono ciężarek o masie $m$ (równej masie walca). Początkowo walec był unieruchomiony i spoczywał na stole. W pewnej chwili walec – ciągnięty przez linkę – rozpoczął ruch i toczył się dalej <u>bez poślizgu</u> po poziomej powierzchni stołu. Opisaną sytuację ilustrują rysunki 1. i 2.</p><p>Do analizy zagadnienia przyjmij model zjawiska, w którym:</p><ul><li>moment bezwładności walca względem jego osi symetrii jest równy $I=\\frac12mR^2$</li><li>pomijamy masę linki, masę bloczka oraz masę pręta na osi symetrii walca</li><li>zakładamy, że ruch walca i ciężarka odbywa się w układzie inercjalnym</li><li>siła tarcia statycznego $\\vec T$ między walcem a powierzchnią stołu <u>nie osiągnęła</u> wartości maksymalnej</li><li>pomijamy inne (tzn. oprócz tarcia statycznego) opory ruchu układu.</li></ul><div class=\"chart-container-svg\"><img src=\"img/energy/2023-maj-z3-rysunki.png\" alt=\"Rysunki 1. i 2. – walec i ciężarek\" class=\"theory-img\" style=\"max-height:500px;display:block;margin:15px auto;\"></div><h4>Zadanie 3.1. (0–2)</h4><p><strong>Oceń prawdziwość poniższych stwierdzeń. Zaznacz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p><table class=\"pf-table\"><tbody><tr><td class=\"pf-num\">1.</td><td>Gdy walec toczy się bez poślizgu, to w czasie jednego obrotu przebywa drogę o długości $2\\pi R$.</td><td class=\"pf-box\">P</td><td class=\"pf-box\">F</td></tr><tr><td class=\"pf-num\">2.</td><td>Energia kinetyczna ruchu postępowego walca jest większa od energii kinetycznej ruchu obrotowego walca względem jego osi.</td><td class=\"pf-box\">P</td><td class=\"pf-box\">F</td></tr><tr><td class=\"pf-num\">3.</td><td>Energia potencjalna opadającego ciężarka zamienia się w całości na energię kinetyczną ruchu postępowego walca i ruchu obrotowego walca.</td><td class=\"pf-box\">P</td><td class=\"pf-box\">F</td></tr></tbody></table><h4>Zadanie 3.2. (0–4)</h4><p><strong>Wyprowadź wzór pozwalający wyznaczyć wartość $\\boldsymbol{a}$ przyśpieszenia ciężarka w zależności tylko od wartości $\\boldsymbol{g}$ przyśpieszenia ziemskiego. Zapisz odpowiednie równania i przekształcenia oraz podaj (w ramce na dole strony) postać tego wzoru.</strong></p><p><em>Wskazówka: Skorzystaj z zasady zachowania energii mechanicznej układu</em> lub skorzystaj <em>z drugiej zasady dynamiki dla ruchu postępowego walca,</em> dla ruchu obrotowego walca i dla <em>ruchu postępowego ciężarka.</em></p><p>$a=$ …………………………</p></div>",
                "solution": {
                  "intuition": "Ubytek energii potencjalnej ciężarka zasila ruch ciężarka oraz ruch postępowy i obrotowy walca.",
                  "givens": "Obie masy są równe $m$. $I=\\frac12mR^2$, $v=\\omega R$.",
                  "steps": [
                    {
                      "title": "Zadanie 3.1",
                      "content": "1. P: bez poślizgu $s=R\\varphi$, a dla pełnego obrotu $s=2\\pi R$.\n2. P: $E_{post}=\\frac12mv^2$, natomiast $E_{obr}=\\frac12I\\omega^2=\\frac14mv^2$. Energia postępowa jest dwa razy większa.\n3. F: część energii uzyskuje również opadający ciężarek."
                    },
                    {
                      "title": "Zadanie 3.2",
                      "content": "Ciężarek opada o $h$, a walec przesuwa się o taką samą drogę. Oba ciała mają prędkość o wartości $v$.\nZasada zachowania energii:\n$mgh=\\frac12mv^2+\\frac12mv^2+\\frac12I\\omega^2$.\nPo podstawieniu $I=\\frac12mR^2$ i $\\omega=v/R$:\n$mgh=\\frac54mv^2$.\nZ ruchu jednostajnie przyśpieszonego od spoczynku: $v^2=2ah$.\nStąd $gh=\\frac52ah$, czyli $a=\\frac25g$."
                    }
                  ],
                  "answer": "3.1: P, P, F.\n3.2: $a=\\frac25g$.",
                  "trap": "Nie pomijaj energii kinetycznej opadającego ciężarka.",
                  "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2023-maj-matura-rozszerzona-odpowiedzi.pdf#page=9\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 9–12</a>."
                },
                "solutionSource": {
                  "publisher": "Centralna Komisja Egzaminacyjna",
                  "url": "https://arkusze.pl/maturalne/fizyka-2023-maj-matura-rozszerzona-odpowiedzi.pdf",
                  "localFile": "data/arkusze_cke/2023/fizyka-2023-maj-matura-rozszerzona-odpowiedzi.pdf",
                  "pages": [
                    9,
                    12
                  ]
                }
              }
            ]
          }
        ],
        "tasks": []
      },
      {
        "id": "m-grawitacja",
        "title": "Dział 5: Grawitacja i Ruch Planet",
        "icon": "🪐",
        "badge": "Wkrótce",
        "isComingSoon": true,
        "desc": "Prawo powszechnego ciążenia, prędkości kosmiczne i prawa Keplera.",
        "subchapters": [],
        "tasks": []
      },
      {
        "id": "m-harmoniczny",
        "title": "Dział 6: Ruch Harmoniczny",
        "icon": "〰️",
        "badge": "W przygotowaniu",
        "isComingSoon": true,
        "desc": "Drgania harmoniczne, oscylator sprężynowy i wahadło, siła sprężystości oraz bilans energii w ruchu drgającym.",
        "subchapters": [
          {
            "id": "sub-harmoniczny-matura",
            "title": "Zadania maturalne CKE (Ruch Harmoniczny)",
            "shortTitle": "Matura CKE",
            "number": 1,
            "icon": "〰️",
            "desc": "Zadania maturalne CKE sprawdzające ruch drgający, równania harmoniczne i przemiany energii.",
            "formulaCheat": "x(t) = A\\cos(\\omega t + \\varphi) \\qquad T = 2\\pi\\sqrt{\\frac{m}{k}} \\qquad \\omega = \\frac{2\\pi}{T} = 2\\pi f \\qquad E_c = \\frac{1}{2} k A^2",
            "tasks": [
              {
                "id": "matura-cke-harmoniczny-2024-maj-zad-3",
                "originalTaskId": "matura-cke-2024-maj-zad-3",
                "number": 202405,
                "title": "Matura maj 2024 zad. 3 nowa formuła",
                "year": "2024 maj",
                "difficulty": 3,
                "source": "Matura CKE 2024 (Maj)",
                "link": "https://arkusze.pl/maturalne/fizyka-2024-maj-matura-rozszerzona.pdf",
                "formula": "2023",
                "sourcePages": [
                  10,
                  11,
                  12
                ],
                "tags": [
                  "Matura CKE",
                  "Ruch harmoniczny",
                  "Oscylator sprężynowy",
                  "Energia w ruchu drgającym",
                  "Siła sprężystości"
                ],
                "problem": "<div class=\"task-matura energy-statements\"><h4>Zadanie 3.</h4><p>Ciężarek o masie $m=100{,}0\\text{ g}$ jest zawieszony na sprężynie i wykonuje drgania harmoniczne w kierunku pionowym, w jednorodnym, ziemskim polu grawitacyjnym.</p><p>Przyjmujemy, że ciężarek drga wzdłuż osi $y$ skierowanej pionowo w górę. Na poniższym wykresie przedstawiono zależność współrzędnej prędkości $v_y$ ciężarka od czasu $t$. Dodatnia wartość współrzędnej prędkości $v_y$ oznacza, że zwrot wektora prędkości ciężarka jest w górę, a ujemna wartość – że zwrot wektora prędkości jest w dół. Prędkość ciężarka określamy w układzie odniesienia związanym z ziemią.</p><div class=\"chart-container-svg\"><img src=\"img/energy/2024-maj-z3-wykres.png\" alt=\"Wykres współrzędnej prędkości ciężarka od czasu\" class=\"theory-img\" style=\"max-height:500px;display:block;margin:15px auto;\"></div><p>Przyjmij uproszczony model zjawiska, w którym:</p><ul><li>na ciężarek działają tylko siła sprężystości $\\vec F_s$ sprężyny i siła grawitacji $\\vec F_g$</li><li>wartość siły sprężystości, z jaką sprężyna działa na ciężarek, jest wprost proporcjonalna do wydłużenia sprężyny ponad jej długość swobodną (gdy jest nierozciągnięta)</li><li>układ odniesienia związany z ziemią traktujemy jako układ inercjalny</li><li>pomijamy opory ruchu</li><li>pomijamy masę sprężyny</li><li>przyśpieszenie grawitacyjne ziemskie ma wartość $g=9{,}81\\text{ m/s}^2$.</li></ul><h4>Zadanie 3.1. (0–2)</h4><p><strong>Oceń prawdziwość poniższych stwierdzeń. Zaznacz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p><table class=\"pf-table\"><tbody><tr><td class=\"pf-num\">1.</td><td>W chwili $t=0{,}2\\text{ s}$ siły działające na ciężarek się równoważą.</td><td class=\"pf-box\">P</td><td class=\"pf-box\">F</td></tr><tr><td class=\"pf-num\">2.</td><td>Energia kinetyczna ciężarka w chwili $t=0{,}1\\text{ s}$ jest równa energii kinetycznej ciężarka w chwili $t=0{,}3\\text{ s}$.</td><td class=\"pf-box\">P</td><td class=\"pf-box\">F</td></tr><tr><td class=\"pf-num\">3.</td><td>Wartość przyśpieszenia ciężarka w chwili $t=0{,}4\\text{ s}$ jest większa od wartości przyśpieszenia ciężarka w chwili $t=0{,}5\\text{ s}$.</td><td class=\"pf-box\">P</td><td class=\"pf-box\">F</td></tr></tbody></table><h4>Zadanie 3.2. (0–2)</h4><p>Siły działające na ciężarek się równoważą, gdy ciężarek znajduje się w punkcie o współrzędnej $y=0$, natomiast najwyższe i najniższe położenia ciężarka znajdują się – odpowiednio – w punktach o współrzędnych: $y=A$ oraz $y=-A$. W pewnej chwili ruchu drgającego ciężarek znalazł się w punkcie $P$ (zobacz schematyczny rysunek poniżej).</p><div class=\"chart-container-svg\"><img src=\"img/energy/2024-maj-z3-os.png\" alt=\"Położenie punktu P na osi y\" class=\"theory-img\" style=\"max-height:450px;display:block;margin:15px auto;\"></div><p><strong>Na rysunku powyżej <u>narysuj</u> i <u>podpisz</u> siłę sprężystości $\\boldsymbol{\\vec F_s}$ i siłę grawitacji $\\boldsymbol{\\vec F_g}$ działające na ciężarek w punkcie $\\boldsymbol{P}$. Zachowaj relację (większy, równy, mniejszy) między wartościami tych sił i zapisz tę relację – wpisz w wykropkowane miejsce poniżej odpowiedni znak wybrany spośród: $\\boldsymbol{>}$, $\\boldsymbol{=}$, $\\boldsymbol{<}$.</strong></p><p>$F_s$ ........... $F_g$</p><h4>Zadanie 3.3. (0–4)</h4><p><strong>Oblicz wartość siły sprężystości działającej na ciężarek w chwili, gdy znajduje się on w najniższym położeniu podczas ruchu drgającego. Zapisz obliczenia.</strong></p></div>",
                "solution": {
                  "intuition": "Z wykresu odczytujemy okres i prędkość maksymalną. Bilans energii wyznacza amplitudę, a następnie maksymalną siłę sprężystości.",
                  "givens": "$m=0{,}1000\\text{ kg}$, $g=9{,}81\\text{ m/s}^2$.\nZ wykresu: $T=0{,}4\\text{ s}$, $v_{max}=0{,}6\\text{ m/s}$.",
                  "steps": [
                    {
                      "title": "Zadanie 3.1",
                      "content": "1. F: w $t=0{,}2\\text{ s}$ prędkość jest zerowa, ale nachylenie wykresu $v_y(t)$ jest niezerowe. Przyśpieszenie i siła wypadkowa nie są zerowe.\n2. P: w $0{,}1\\text{ s}$ i $0{,}3\\text{ s}$ prędkości mają przeciwne zwroty, lecz jednakową wartość $0{,}6\\text{ m/s}$. Energie $\\frac12mv^2$ są równe.\n3. P: w $0{,}4\\text{ s}$ wartość przyśpieszenia jest maksymalna, a w $0{,}5\\text{ s}$ wynosi zero."
                    },
                    {
                      "title": "Zadanie 3.2",
                      "content": "Punkt $P$ leży poniżej położenia równowagi. Przyśpieszenie jest skierowane w górę, zatem $F_s>F_g$. Obie siły zaczepiamy w $P$: dłuższy wektor siły sprężystości w górę, krótszy wektor ciężaru w dół.<div class=\"chart-container-svg\"><img src=\"img/energy/2024-maj-z3-sily-rozwiazanie.png\" alt=\"Wektory siły sprężystości i ciężaru według klucza CKE\" class=\"theory-img\" style=\"max-height:400px;display:block;margin:15px auto;\"></div>"
                    },
                    {
                      "title": "Zadanie 3.3",
                      "content": "Niech $x_0$ oznacza wydłużenie sprężyny w równowadze. Wtedy $kx_0=mg$.\nPorównujemy energię w równowadze (prędkość $v_{max}$) i w najniższym położeniu (prędkość zero). Poziom energii grawitacji przyjmujemy w równowadze:\n$\\frac12mv_{max}^2+\\frac12kx_0^2$\n$=\\frac12k(x_0+A)^2-mgA$.\nPo rozwinięciu kwadratu i użyciu $kx_0=mg$ pozostaje $mv_{max}^2=kA^2$.\nZ okresu drgań: $k=m(2\\pi/T)^2$. Stąd $A=v_{max}T/(2\\pi)$.\nW najniższym położeniu:\n$F_{s\\,max}=k(x_0+A)=mg+kA$.\n$F_{s\\,max}=mg+\\frac{2\\pi m v_{max}}T$.\n$F_{s\\,max}=0{,}981\\text{ N}+0{,}9425\\text{ N}$.\n$F_{s\\,max}\\approx1{,}92\\text{ N}$."
                    }
                  ],
                  "answer": "3.1: F, P, P.\n3.2: $F_s>F_g$; zwroty jak na rysunku.\n3.3: $F_{s\\,max}\\approx1{,}92\\text{ N}$.",
                  "trap": "W skrajnym położeniu prędkość jest zerowa, ale przyśpieszenie ma największą wartość.",
                  "source": "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2024-maj-matura-rozszerzona-odpowiedzi.pdf#page=13\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 13–22</a>."
                },
                "solutionSource": {
                  "publisher": "Centralna Komisja Egzaminacyjna",
                  "url": "https://arkusze.pl/maturalne/fizyka-2024-maj-matura-rozszerzona-odpowiedzi.pdf",
                  "localFile": "data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona-odpowiedzi.pdf",
                  "pages": [
                    13,
                    22
                  ]
                }
              }
            ]
          }
        ],
        "tasks": []
      }
    ]
  }
};
