/**
 * FizyKorek – Oficjalna Karta Wzorów i Stałych Fizycznych CKE (Formuła 2023)
 * Źródło: wybrane_wzory_stale_fizykochemiczne_EM2023.pdf (s. 16–20)
 */

window.FIZYKOREK_FORMULAS = {
    "constants": [
        {
            "name": "Prędkość światła w próżni",
            "symbol": "c",
            "value": "299\\,792\\,458\\text{ m/s}",
            "desc": "Wartość dokładna"
        },
        {
            "name": "Stała Plancka",
            "symbol": "h",
            "value": "6{,}626\\,070\\,15 \\cdot 10^{-34}\\text{ J}\\cdot\\text{s}",
            "desc": "Wartość dokładna"
        },
        {
            "name": "Ładunek elementarny",
            "symbol": "e",
            "value": "1{,}602\\,176\\,634 \\cdot 10^{-19}\\text{ C}",
            "desc": "Wartość dokładna"
        },
        {
            "name": "Stała Boltzmanna",
            "symbol": "k_B",
            "value": "1{,}380\\,649 \\cdot 10^{-23}\\text{ J/K}",
            "desc": "Wartość dokładna"
        },
        {
            "name": "Stała Avogadro",
            "symbol": "N_A",
            "value": "6{,}022\\,140\\,76 \\cdot 10^{23}\\text{ mol}^{-1}",
            "desc": "Wartość dokładna"
        },
        {
            "name": "Uniwersalna stała gazowa",
            "symbol": "R",
            "value": "8{,}314\\,462\\,618\\,2\\text{ J/(K}\\cdot\\text{mol)}",
            "desc": "Wartość dokładna"
        },
        {
            "name": "Stała grawitacji",
            "symbol": "G",
            "value": "6{,}674 \\cdot 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2",
            "desc": "Wartość z oficjalnej karty CKE"
        },
        {
            "name": "Przenikalność magnetyczna próżni",
            "symbol": "\\mu_0",
            "value": "4\\pi \\cdot 10^{-7}\\text{ N/A}^2",
            "desc": "Wartość z oficjalnej karty CKE"
        },
        {
            "name": "Przenikalność elektryczna próżni",
            "symbol": "\\varepsilon_0",
            "value": "8{,}854\\,187\\,81 \\cdot 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)",
            "desc": "Stała elektryczna"
        },
        {
            "name": "Stała w prawie Coulomba",
            "symbol": "k = \\frac{1}{4\\pi\\varepsilon_0}",
            "value": "8{,}987\\,551\\,8 \\cdot 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2",
            "desc": "k = 1/(4\\pi\\varepsilon_0)"
        },
        {
            "name": "Związek między c, \\mu_0, \\varepsilon_0",
            "symbol": "c^2",
            "value": "\\frac{1}{\\varepsilon_0 \\mu_0}",
            "desc": "Relacja elektrodynamiczna"
        },
        {
            "name": "Masa elektronu",
            "symbol": "m_e",
            "value": "9{,}109\\,383\\,7 \\cdot 10^{-31}\\text{ kg}",
            "desc": "Masa spoczynkowa elektronu"
        },
        {
            "name": "Masa protonu",
            "symbol": "m_p",
            "value": "1{,}672\\,621\\,92 \\cdot 10^{-27}\\text{ kg}",
            "desc": "Masa spoczynkowa protonu"
        },
        {
            "name": "Masa neutronu",
            "symbol": "m_n",
            "value": "1{,}674\\,927\\,49 \\cdot 10^{-27}\\text{ kg}",
            "desc": "Masa spoczynkowa neutronu"
        },
        {
            "name": "Jednostka masy atomowej",
            "symbol": "1\\text{ u}",
            "value": "1{,}660\\,539\\,066 \\cdot 10^{-27}\\text{ kg}",
            "desc": "Jednostka zunifikowana u"
        },
        {
            "name": "Przyśpieszenie ziemskie (standardowe)",
            "symbol": "g",
            "value": "9{,}806\\,65\\text{ m/s}^2",
            "desc": "Na szerokości ok. 45° na poziomie morza"
        },
        {
            "name": "Stała Wiena",
            "symbol": "b",
            "value": "2{,}897\\,771\\,955\\dots \\cdot 10^{-3}\\text{ m}\\cdot\\text{K}",
            "desc": "Wartość dokładna"
        },
        {
            "name": "Stała Stefana-Boltzmanna",
            "symbol": "\\sigma",
            "value": "5{,}670\\,374\\,419\\dots \\cdot 10^{-8}\\text{ W/(m}^2\\cdot\\text{K}^4)",
            "desc": "Wartość dokładna"
        }
    ],
    "categories": [
        {
            "id": "kinematyka",
            "name": "Kinematyka",
            "formulas": [
                {
                    "title": "Prędkość",
                    "latex": "\\vec{v} = \\frac{\\Delta\\vec{r}}{\\Delta t}",
                    "meaning": "Definicja wektora prędkości średniej",
                    "tags": [
                        "predkosc",
                        "wektor",
                        "przemieszczenie",
                        "czas"
                    ]
                },
                {
                    "title": "Przyśpieszenie",
                    "latex": "\\vec{a} = \\frac{\\Delta\\vec{v}}{\\Delta t}",
                    "meaning": "Definicja wektora przyśpieszenia średniego",
                    "tags": [
                        "przyspieszenie",
                        "wektor",
                        "predkosc",
                        "czas"
                    ]
                },
                {
                    "title": "Prędkość kątowa",
                    "latex": "\\omega = \\frac{\\Delta\\alpha}{\\Delta t}",
                    "meaning": "Wartość prędkości kątowej w ruchu obrotowym",
                    "tags": [
                        "predkosc katowa",
                        "kat",
                        "czas"
                    ]
                },
                {
                    "title": "Związek między wartościami prędkości kątowej i liniowej",
                    "latex": "v = \\omega r",
                    "meaning": "Związek między prędkością liniową a kątową na promieniu r",
                    "tags": [
                        "predkosc liniowa",
                        "predkosc katowa",
                        "promien"
                    ]
                },
                {
                    "title": "Związki w ruchu jednostajnym po okręgu",
                    "latex": "\\omega = \\frac{2\\pi}{T}, \\quad T = \\frac{1}{f}",
                    "meaning": "Okres obiegu T i częstotliwość f",
                    "tags": [
                        "ruch po okregu",
                        "okres",
                        "czestotliwosc"
                    ]
                },
                {
                    "title": "Przyśpieszenie dośrodkowe",
                    "latex": "a_{do} = \\frac{v^2}{r} = v\\omega = \\omega^2 r",
                    "meaning": "Wartość przyśpieszenia dośrodkowego w ruchu po okręgu",
                    "tags": [
                        "przyspieszenie dosrodkowe",
                        "okrag",
                        "promien"
                    ]
                },
                {
                    "title": "Przyśpieszenie kątowe",
                    "latex": "\\varepsilon = \\frac{\\Delta\\omega}{\\Delta t}",
                    "meaning": "Definicja przyśpieszenia kątowego",
                    "tags": [
                        "przyspieszenie katowe",
                        "predkosc katowa",
                        "czas"
                    ]
                },
                {
                    "title": "Przyśpieszenie styczne",
                    "latex": "a_{st} = \\varepsilon r",
                    "meaning": "Związek przyśpieszenia stycznego z kątowym",
                    "tags": [
                        "przyspieszenie styczne",
                        "promien"
                    ]
                },
                {
                    "title": "Prędkość w ruchu jednostajnie zmiennym prostoliniowym",
                    "latex": "\\vec{v} = \\vec{v}_0 + \\vec{a}t",
                    "meaning": "Wektor prędkości jako funkcja czasu",
                    "tags": [
                        "ruch jednostajnie zmienny",
                        "predkosc poczatkowa",
                        "przyspieszenie"
                    ]
                },
                {
                    "title": "Droga w ruchu jednostajnie zmiennym prostoliniowym",
                    "latex": "s = v_0 t + \\frac{1}{2}at^2",
                    "meaning": "Droga przebyta w czasie t przy stałym przyśpieszeniu",
                    "tags": [
                        "droga",
                        "ruch jednostajnie zmienny",
                        "czas"
                    ]
                }
            ]
        },
        {
            "id": "dynamika",
            "name": "Dynamika",
            "formulas": [
                {
                    "title": "Pęd",
                    "latex": "\\vec{p} = m\\vec{v}",
                    "meaning": "Definicja wektora pędu ciała o masie m",
                    "tags": [
                        "ped",
                        "masa",
                        "predkosc"
                    ]
                },
                {
                    "title": "II zasada dynamiki (w układzie inercjalnym)",
                    "latex": "m\\vec{a} = \\vec{F}, \\quad \\frac{\\Delta\\vec{p}}{\\Delta t} = \\vec{F}",
                    "meaning": "Związek siły wypadkowej z przyśpieszeniem i zmianą pędu",
                    "tags": [
                        "ii zasada",
                        "newton",
                        "sila",
                        "ped"
                    ]
                },
                {
                    "title": "Wartość momentu pędu punktu materialnego",
                    "latex": "L = rp \\sin\\sphericalangle(\\vec{r}, \\vec{p})",
                    "meaning": "Moment pędu względem punktu odniesienia",
                    "tags": [
                        "moment pedu",
                        "punkt materialny",
                        "kat"
                    ]
                },
                {
                    "title": "Wartość momentu siły",
                    "latex": "M = rF \\sin\\sphericalangle(\\vec{r}, \\vec{F})",
                    "meaning": "Moment siły względem osi/punktu obrotu",
                    "tags": [
                        "moment sily",
                        "ramie",
                        "sila"
                    ]
                },
                {
                    "title": "Moment bezwładności",
                    "latex": "I = \\sum_{i=1}^n m_i r_i^2",
                    "meaning": "Definicja momentu bezwładności układu punktów",
                    "tags": [
                        "moment bezwladnosci",
                        "masa",
                        "promien"
                    ]
                },
                {
                    "title": "Związek między wartościami prędkości kątowej i momentu pędu bryły sztywnej",
                    "latex": "L = I\\omega",
                    "meaning": "Moment pędu bryły obracającej się wokół osi",
                    "tags": [
                        "moment pedu",
                        "bryla sztywna",
                        "predkosc katowa"
                    ]
                },
                {
                    "title": "II zasada dynamiki ruchu obrotowego (zapis skalarny)",
                    "latex": "I\\varepsilon = M",
                    "meaning": "Równanie ruchu obrotowego bryły sztywnej",
                    "tags": [
                        "ruch obrotowy",
                        "ii zasada",
                        "przyspieszenie katowe"
                    ]
                },
                {
                    "title": "Praca siły, praca momentu siły",
                    "latex": "W_F = F\\Delta r \\cos\\sphericalangle(\\vec{F}, \\Delta\\vec{r}), \\quad W_M = M\\Delta\\alpha",
                    "meaning": "Praca siły w ruchu postępowym oraz praca momentu siły w obrotowym",
                    "tags": [
                        "praca sily",
                        "praca momentu sily",
                        "kat"
                    ]
                },
                {
                    "title": "Moc",
                    "latex": "P = \\frac{W}{\\Delta t}",
                    "meaning": "Szybkość wykonywania pracy",
                    "tags": [
                        "moc",
                        "praca",
                        "czas"
                    ]
                },
                {
                    "title": "Energia kinetyczna ruchu postępowego",
                    "latex": "E_{kin} = \\frac{1}{2}mv^2",
                    "meaning": "Energia kinetyczna ciała o masie m poruszającego się z prędkością v",
                    "tags": [
                        "energia kinetyczna",
                        "ruch postepowy"
                    ]
                },
                {
                    "title": "Energia kinetyczna ruchu obrotowego",
                    "latex": "E_{kin} = \\frac{1}{2}I\\omega^2",
                    "meaning": "Energia kinetyczna bryły o momencie bezwładności I",
                    "tags": [
                        "energia kinetyczna",
                        "ruch obrotowy"
                    ]
                }
            ]
        },
        {
            "id": "tarcie-sprezystosc",
            "name": "Siły tarcia i siła sprężystości",
            "formulas": [
                {
                    "title": "Siła tarcia kinetycznego",
                    "latex": "T_k = \\mu_k F_N",
                    "meaning": "\\mu_k – współczynnik tarcia kinetycznego, F_N – siła nacisku",
                    "tags": [
                        "tarcie kinetyczne",
                        "wspolczynnik tarcia",
                        "nacisk"
                    ]
                },
                {
                    "title": "Siła tarcia statycznego",
                    "latex": "T_s \\le \\mu_s F_N",
                    "meaning": "\\mu_s – współczynnik tarcia statycznego, maksymalna siła tarcia spoczynkowego",
                    "tags": [
                        "tarcie statyczne",
                        "nacisk"
                    ]
                },
                {
                    "title": "Siła sprężystości",
                    "latex": "F_s = -kx",
                    "meaning": "Prawo Hooke’a: k – współczynnik sprężystości, x – odkształcenie",
                    "tags": [
                        "sila sprezystosci",
                        "hooke",
                        "sprezyna"
                    ]
                },
                {
                    "title": "Energia potencjalna sprężystości",
                    "latex": "E_{pot} = \\frac{1}{2}kx^2",
                    "meaning": "Energia zmagazynowana w odkształconej sprężynie",
                    "tags": [
                        "energia potencjalna sprezystosci",
                        "sprezyna"
                    ]
                }
            ]
        },
        {
            "id": "grawitacja",
            "name": "Grawitacja i elementy astronomii",
            "formulas": [
                {
                    "title": "Prawo powszechnego ciążenia",
                    "latex": "F_g = G\\frac{m_1 m_2}{r^2}",
                    "meaning": "Siła wzajemnego przyciągania grawitacyjnego mas m_1, m_2",
                    "tags": [
                        "prawo powszechnego ciazenia",
                        "newton",
                        "grawitacja"
                    ]
                },
                {
                    "title": "Natężenie pola grawitacyjnego, przyśpieszenie grawitacyjne",
                    "latex": "\\vec{\\gamma} = \\frac{\\vec{F}_g}{m}, \\quad \\vec{a}_g = \\vec{\\gamma}",
                    "meaning": "Definicja natężenia pola grawitacyjnego i przyspieszenia swobodnego spadku",
                    "tags": [
                        "natezenie pola grawitacyjnego",
                        "przyspieszenie grawitacyjne"
                    ]
                },
                {
                    "title": "Energia potencjalna grawitacji",
                    "latex": "E_{pot} = -G\\frac{m_1 m_2}{r}",
                    "meaning": "Energia potencjalna w centralnym polu grawitacyjnym (E_{pot}=0 w nieskończoności)",
                    "tags": [
                        "energia potencjalna grawitacji",
                        "pole centralne"
                    ]
                },
                {
                    "title": "Zmiana energii potencjalnej przy powierzchni Ziemi",
                    "latex": "\\Delta E_p = mg\\Delta h",
                    "meaning": "Zmiana energii potencjalnej w jednorodnym polu grawitacyjnym",
                    "tags": [
                        "energia potencjalna",
                        "wysokosc",
                        "ziemia"
                    ]
                },
                {
                    "title": "Prędkość na orbicie kołowej",
                    "latex": "v_{or} = \\sqrt{\\frac{GM}{r}}",
                    "meaning": "I prędkość kosmiczna na orbicie o promieniu r",
                    "tags": [
                        "orbita kolowa",
                        "predkosc orbitalna",
                        "i predkosc kosmiczna"
                    ]
                },
                {
                    "title": "Prędkość ucieczki",
                    "latex": "v_u = \\sqrt{\\frac{2GM}{r}}",
                    "meaning": "II prędkość kosmiczna dla ciała na odległości r",
                    "tags": [
                        "predkosc ucieczki",
                        "ii predkosc kosmiczna"
                    ]
                },
                {
                    "title": "II prawo Keplera i zachowanie momentu pędu na orbicie",
                    "latex": "\\frac{\\Delta S}{\\Delta t} = \\text{const}, \\quad \\vec{L} = \\text{const}",
                    "meaning": "Stała prędkość polowa promienia wodzącego oraz zachowanie momentu pędu",
                    "tags": [
                        "ii prawo keplera",
                        "predkosc polowa",
                        "moment pedu"
                    ]
                },
                {
                    "title": "III prawo Keplera",
                    "latex": "\\frac{T_1^2}{a_1^3} = \\frac{T_2^2}{a_2^3} = \\text{const}",
                    "meaning": "a – promień orbity kołowej lub półoś wielka elipsy",
                    "tags": [
                        "iii prawo keplera",
                        "okres",
                        "polos wielka"
                    ]
                },
                {
                    "title": "Prawo Hubble’a",
                    "latex": "v = Hd",
                    "meaning": "H – stała Hubble’a, d – odległość do galaktyki",
                    "tags": [
                        "prawo hubblea",
                        "kosmologia",
                        "galaktyki"
                    ]
                }
            ]
        },
        {
            "id": "drgania-fale",
            "name": "Drgania, fale mechaniczne i świetlne",
            "formulas": [
                {
                    "title": "Równania ruchu harmonicznego",
                    "latex": "x(t) = A\\sin(\\omega t + \\varphi_0), \\quad v(t) = A\\omega\\cos(\\omega t + \\varphi_0), \\quad a(t) = -A\\omega^2\\sin(\\omega t + \\varphi_0)",
                    "meaning": "Wychylenie, prędkość i przyśpieszenie w drganiach harmonicznych (x_{max}=A, v_{max}=A\\omega, a_{max}=A\\omega^2)",
                    "tags": [
                        "ruch harmoniczny",
                        "amplituda",
                        "faza",
                        "czestosc kolowa"
                    ]
                },
                {
                    "title": "Siła harmoniczna",
                    "latex": "F_h = -m\\omega^2 x",
                    "meaning": "Siła zwrotna proporcjonalna do wychylenia",
                    "tags": [
                        "sila harmoniczna",
                        "drgania"
                    ]
                },
                {
                    "title": "Częstość kołowa małych drgań masy na sprężynie i wahadła matematycznego",
                    "latex": "\\omega = \\sqrt{\\frac{k}{m}}, \\quad \\omega = \\sqrt{\\frac{g}{l}}",
                    "meaning": "Częstości drgań własnych oscylatora sprężynowego oraz wahadła o długości l",
                    "tags": [
                        "sprezyna",
                        "wahadlo matematyczne",
                        "czestosc kolowa"
                    ]
                },
                {
                    "title": "Całkowita energia mechaniczna oscylatora",
                    "latex": "E = E_k + E_p = \\frac{1}{2}mA^2\\omega^2",
                    "meaning": "Suma energii kinetycznej i potencjalnej w oscylatorze harmonicznym",
                    "tags": [
                        "energia mechaniczna",
                        "oscylator",
                        "amplituda"
                    ]
                },
                {
                    "title": "Związki między parametrami ruchu fali",
                    "latex": "v = \\frac{\\lambda}{T} = \\lambda f, \\quad T = \\frac{1}{f}",
                    "meaning": "Prędkość fali, długość fali \\lambda, okres T i częstotliwość f",
                    "tags": [
                        "fala",
                        "dlugosc fali",
                        "okres",
                        "czestotliwosc"
                    ]
                },
                {
                    "title": "Faza fali w punkcie x i chwili t",
                    "latex": "\\varphi(t) = \\frac{2\\pi}{T}t - \\frac{2\\pi}{\\lambda}x + \\varphi_0",
                    "meaning": "Równanie fazy fali bieżącej jednowymiarowej",
                    "tags": [
                        "faza fali",
                        "fala biezaca"
                    ]
                },
                {
                    "title": "Warunki maksymalnego wzmocnienia i osłabienia fali w punkcie",
                    "latex": "\\varphi_2 - \\varphi_1 = 2\\pi n \\quad \\text{(wzmocnienie)}, \\quad \\varphi_2 - \\varphi_1 = 2\\pi\\left(n + \\frac{1}{2}\\right) \\quad \\text{(osłabienie)}",
                    "meaning": "Interferencja dwóch fal spójnych dla n całkowitego",
                    "tags": [
                        "interferencja",
                        "wzmocnienie",
                        "oslabienie"
                    ]
                },
                {
                    "title": "Natężenie fali, jego związek z energią E i amplitudą A fali",
                    "latex": "I = \\frac{E}{S\\Delta t}, \\quad I \\sim A^2",
                    "meaning": "Strumień energii fali przez jednostkę powierzchni",
                    "tags": [
                        "natezenie fali",
                        "amplituda",
                        "energia"
                    ]
                },
                {
                    "title": "Zależność natężenia fali kulistej od odległości",
                    "latex": "I \\sim \\frac{1}{r^2}",
                    "meaning": "Prawo odwrotnych kwadratów odległości dla fali kulistej",
                    "tags": [
                        "fala kulista",
                        "natezenie",
                        "odleglosc"
                    ]
                },
                {
                    "title": "Załamanie fali na granicy ośrodków 1 i 2",
                    "latex": "\\frac{\\sin\\alpha_1}{\\sin\\alpha_2} = \\frac{v_1}{v_2} = \\frac{n_2}{n_1}",
                    "meaning": "Prawo załamania fal (prawo Snella)",
                    "tags": [
                        "zalamanie fali",
                        "snell",
                        "predkosc fali",
                        "wspolczynnik zalamania"
                    ]
                },
                {
                    "title": "Wzory przybliżone na efekt Dopplera dla fali dźwiękowej i świetlnej",
                    "latex": "f_{ob} \\approx f_{zr}\\left(1 \\mp \\frac{|v_{zr}-v_{ob}|}{v_d}\\right) \\quad \\text{(dźwięk)}, \\quad f_{ob} \\approx f_{zr}\\left(1 \\mp \\frac{v_{zr}}{c}\\right) \\quad \\text{(światło)}",
                    "meaning": "Dla v_{zr} << v_d oraz v_{zr} << c (górny znak: oddalanie, dolny: zbliżanie)",
                    "tags": [
                        "efekt dopplera",
                        "dźwięk",
                        "swiatlo"
                    ]
                },
                {
                    "title": "Wzory ścisłe na efekt Dopplera dla fali dźwiękowej i świetlnej",
                    "latex": "f_{ob} = f_{zr}\\frac{v_d \\mp v_{ob}}{v_d \\pm v_{zr}} \\quad \\text{(dźwięk)}, \\quad f_{ob} = f_{zr}\\sqrt{\\frac{c \\mp v_{zr}}{c \\pm v_{zr}}} \\quad \\text{(światło)}",
                    "meaning": "Dokładne wzory Dopplera w kierunku prędkości źródła",
                    "tags": [
                        "efekt dopplera",
                        "relatywistyczny doppler"
                    ]
                },
                {
                    "title": "Siatka dyfrakcyjna",
                    "latex": "d\\sin\\alpha_n = n\\lambda",
                    "meaning": "d – stała siatki, \\alpha_n – kąt ugięcia dla prążka rzędu n",
                    "tags": [
                        "siatka dyfrakcyjna",
                        "dyfrakcja",
                        "dlugosc fali"
                    ]
                }
            ]
        },
        {
            "id": "optyka",
            "name": "Optyka geometryczna",
            "formulas": [
                {
                    "title": "Kąt graniczny dla przejścia światła z ośrodka 2 do 1",
                    "latex": "\\sin\\alpha_{2\\,gr} = \\frac{n_1}{n_2}",
                    "meaning": "Warunek całkowitego wewnętrznego odbicia (n_2 > n_1)",
                    "tags": [
                        "kat graniczny",
                        "calkowite wewnetrzne odbicie"
                    ]
                },
                {
                    "title": "Warunek polaryzacji światła przy odbiciu (kąt Brewstera)",
                    "latex": "\\alpha_{pad\\,1} + \\alpha_{zal\\,2} = 90^\\circ",
                    "meaning": "Światło odbite jest całkowicie spolaryzowane liniowo",
                    "tags": [
                        "polaryzacja",
                        "brewster",
                        "odbicie"
                    ]
                },
                {
                    "title": "Równanie soczewki i zwierciadła",
                    "latex": "\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{f}",
                    "meaning": "x>0 (przedmiot), y>0 (obraz rzeczywisty), y<0 (pozorny), f>0 (skupiająca), f<0 (rozpraszająca)",
                    "tags": [
                        "rownanie soczewki",
                        "zwierciadlo",
                        "ogniskowa"
                    ]
                },
                {
                    "title": "Wzór na ogniskową soczewki",
                    "latex": "\\frac{1}{f} = \\left(\\frac{n_{socz}}{n_{otocz}} - 1\\right)\\left(\\pm\\frac{1}{R_1} \\pm \\frac{1}{R_2}\\right)",
                    "meaning": "(+) dla powierzchni wypukłej, (-) dla powierzchni wklęsłej",
                    "tags": [
                        "wzor na ogniskowa",
                        "soczewka",
                        "promienie krzywizny"
                    ]
                }
            ]
        },
        {
            "id": "hydro-aero",
            "name": "Hydrostatyka i aerostatyka",
            "formulas": [
                {
                    "title": "Siła parcia i ciśnienie",
                    "latex": "F = p\\Delta S, \\quad \\vec{F} \\perp \\Delta S",
                    "meaning": "Związek między siłą parcia, ciśnieniem a powierzchnią",
                    "tags": [
                        "cisnienie",
                        "sila parcia",
                        "powierzchnia"
                    ]
                },
                {
                    "title": "Zmiana ciśnienia hydro- i aerostatycznego",
                    "latex": "\\Delta p = \\rho g \\Delta h",
                    "meaning": "Ciśnienie słupa cieczy lub gazu o gęstości \\rho",
                    "tags": [
                        "cisnienie hydrostatyczne",
                        "wysokosc",
                        "gestosc"
                    ]
                },
                {
                    "title": "Siła wyporu",
                    "latex": "F_{wyp} = \\rho V_{zan} g",
                    "meaning": "Prawo Archimedesa: \\rho – gęstość płynu, V_{zan} – objętość zanurzonej części ciała",
                    "tags": [
                        "sila wyporu",
                        "archimedes",
                        "gestosc"
                    ]
                }
            ]
        },
        {
            "id": "termodynamika",
            "name": "Termodynamika",
            "formulas": [
                {
                    "title": "I zasada termodynamiki",
                    "latex": "\\Delta U = Q + W",
                    "meaning": "Zmiana energii wewnętrznej układu przez ciepło Q i pracę W",
                    "tags": [
                        "i zasada termodynamiki",
                        "energia wewnetrzna",
                        "cieplo",
                        "praca"
                    ]
                },
                {
                    "title": "Praca siły parcia (gdy p = const)",
                    "latex": "|W| = p|\\Delta V|",
                    "meaning": "Praca w przemianie izobarycznej",
                    "tags": [
                        "praca sily parcia",
                        "izobaryczna",
                        "objetosc"
                    ]
                },
                {
                    "title": "Ciepło właściwe",
                    "latex": "c_w = \\frac{Q}{m\\Delta T}",
                    "meaning": "Ciepło potrzebne do ogrzania jednostki masy o jednostkę temperatury",
                    "tags": [
                        "cieplo wlasciwe",
                        "temperatura",
                        "cieplo"
                    ]
                },
                {
                    "title": "Ciepło molowe",
                    "latex": "C = \\frac{Q}{n\\Delta T}",
                    "meaning": "Ciepło odniesione do liczby moli n",
                    "tags": [
                        "cieplo molowe",
                        "mole"
                    ]
                },
                {
                    "title": "Ciepło przemiany fazowej",
                    "latex": "L = \\frac{Q}{m}",
                    "meaning": "Ciepło topnienia, parowania itp. przypadające na jednostkę masy",
                    "tags": [
                        "cieplo przemiany fazowej",
                        "topnienie",
                        "parowanie"
                    ]
                },
                {
                    "title": "Średnia energia ruchu cząsteczki gazu doskonałego",
                    "latex": "E_{sr} = \\frac{s}{2}k_B T",
                    "meaning": "s – liczba współrzędnych opisujących położenie cząsteczki w przestrzeni (stopnie swobody), k_B – stała Boltzmanna",
                    "tags": [
                        "srednia energia",
                        "stopnie swobody",
                        "temperatura"
                    ]
                },
                {
                    "title": "Równanie stanu gazu doskonałego (Clapeyrona)",
                    "latex": "pV = nRT",
                    "meaning": "Równanie stanu gazu doskonałego: n – liczba moli, R – stała gazowa",
                    "tags": [
                        "clapeyron",
                        "gaz doskonaly",
                        "cisnienie",
                        "objetosc"
                    ]
                },
                {
                    "title": "Związek między ciepłami molowymi gazu doskonałego (wzór Mayera)",
                    "latex": "C_p = C_V + R",
                    "meaning": "Relacja między ciepłem molowym przy stałym ciśnieniu i stałej objętości",
                    "tags": [
                        "mayer",
                        "cieplo molowe",
                        "stala gazowa"
                    ]
                },
                {
                    "title": "Praca i ciepło w cyklu silnika i pompy cieplnej",
                    "latex": "0 = Q_{calk} + W_{calk}",
                    "meaning": "Bilans energii w cyklu termodynamicznym (Q_{calk} – ciepło wymienione, W_{calk} – praca)",
                    "tags": [
                        "cykl",
                        "silnik cieplny",
                        "pompa ciepla"
                    ]
                },
                {
                    "title": "Sprawność silnika cieplnego",
                    "latex": "\\eta = \\frac{|W_{calk}|}{|Q_{pob}|} = \\frac{|Q_{pob}| - |Q_{odd}|}{|Q_{pob}|}",
                    "meaning": "Stosunek wykonanej pracy do ciepła pobranego ze źródła gorącego",
                    "tags": [
                        "sprawnosc silnika",
                        "cieplo pobrane",
                        "cieplo oddane"
                    ]
                }
            ]
        },
        {
            "id": "elektrostatyka",
            "name": "Elektrostatyka",
            "formulas": [
                {
                    "title": "Prawo Coulomba",
                    "latex": "F_e = k\\frac{q_1 q_2}{r^2}, \\quad k = \\frac{1}{4\\pi\\varepsilon_0}",
                    "meaning": "Siła wzajemnego oddziaływania ładunków punktowych q_1, q_2",
                    "tags": [
                        "prawo coulomba",
                        "ladunek",
                        "sila elektrostatyczna"
                    ]
                },
                {
                    "title": "Natężenie pola elektrycznego",
                    "latex": "\\vec{E} = \\frac{\\vec{F}_e}{q}",
                    "meaning": "Definicja wektora natężenia pola elektrycznego",
                    "tags": [
                        "natezenie pola elektrycznego",
                        "ladunek probny"
                    ]
                },
                {
                    "title": "Wartość natężenia pola na zewnątrz sferycznego rozkładu ładunku",
                    "latex": "E = k\\frac{Q}{r^2}",
                    "meaning": "Pole elektryczne kuli naładowanej ładunkiem Q w odległości r",
                    "tags": [
                        "pole sferyczne",
                        "kula",
                        "ladunek"
                    ]
                },
                {
                    "title": "Napięcie pomiędzy punktami A i B pola elektrycznego",
                    "latex": "U_{AB} = \\frac{W_{AB}}{q}",
                    "meaning": "W_{AB} – praca przeciw sile elektrycznej przy przesunięciu ładunku q",
                    "tags": [
                        "napiecie",
                        "praca",
                        "pole elektryczne"
                    ]
                },
                {
                    "title": "Związek napięcia z potencjałami elektrycznymi",
                    "latex": "U_{AB} = V_B - V_A",
                    "meaning": "Różnica potencjałów elektrycznych między punktami B i A",
                    "tags": [
                        "potencjal elektryczny",
                        "napiecie"
                    ]
                },
                {
                    "title": "Energia potencjalna elektryczna układu ładunków",
                    "latex": "E_{pot} = k\\frac{q_1 q_2}{r}",
                    "meaning": "Energia oddziaływania dwóch ładunków w odległości r",
                    "tags": [
                        "energia potencjalna elektryczna",
                        "ladunki"
                    ]
                },
                {
                    "title": "Związek napięcia z natężeniem w polu jednorodnym",
                    "latex": "U = Ed",
                    "meaning": "Napięcie między powierzchniami ekwipotencjalnymi odległymi o d",
                    "tags": [
                        "pole jednorodne",
                        "napiecie",
                        "odleglosc"
                    ]
                },
                {
                    "title": "Natężenie pola między płytami naładowanymi różnoimiennie",
                    "latex": "E = \\frac{\\sigma}{\\varepsilon_0}, \\quad \\sigma = \\frac{Q}{\\Delta S} = \\text{const}",
                    "meaning": "\\sigma – gęstość powierzchniowa ładunku na okładkach",
                    "tags": [
                        "gestosc powierzchniowa",
                        "okladki",
                        "kondensator"
                    ]
                },
                {
                    "title": "Natężenie pola elektrycznego wewnątrz dielektryka",
                    "latex": "\\vec{E} = \\frac{\\vec{E}_0}{\\varepsilon_r}",
                    "meaning": "Osłabienie zewnętrznego pola \\vec{E}_0 przez względną przenikalność \\varepsilon_r",
                    "tags": [
                        "dielektryk",
                        "wzgledna przenikalnosc"
                    ]
                },
                {
                    "title": "Pojemność kondensatora",
                    "latex": "C = \\frac{Q}{U}",
                    "meaning": "Definicja pojemności elektrycznej układu przewodników",
                    "tags": [
                        "pojemnosc",
                        "ladunek",
                        "napiecie"
                    ]
                },
                {
                    "title": "Pojemność kondensatora płaskiego z dielektrykiem",
                    "latex": "C = \\varepsilon_r \\varepsilon_0 \\frac{S}{d}",
                    "meaning": "S – pole powierzchni okładek, d – odległość między nimi",
                    "tags": [
                        "kondensator plaski",
                        "pojemnosc",
                        "dielektryk"
                    ]
                },
                {
                    "title": "Energia elektryczna kondensatora",
                    "latex": "W = \\frac{Q^2}{2C} = \\frac{1}{2}QU = \\frac{1}{2}U^2 C",
                    "meaning": "Energia zgromadzona w naładowanym kondensatorze",
                    "tags": [
                        "energia kondensatora",
                        "praca naladowania"
                    ]
                },
                {
                    "title": "Własności pola wewnątrz i na powierzchni bryły przewodnika",
                    "latex": "\\vec{E}_{wew} = 0, \\quad \\vec{E}_{pow} \\perp \\Delta S",
                    "meaning": "Pole wewnątrz naładowanego przewodnika zanika, a na powierzchni jest prostopadłe",
                    "tags": [
                        "przewodnik",
                        "klatka faradaya",
                        "pole wewnatrz"
                    ]
                }
            ]
        },
        {
            "id": "prad-elektryczny",
            "name": "Prąd elektryczny",
            "formulas": [
                {
                    "title": "Natężenie prądu",
                    "latex": "I = \\frac{\\Delta Q}{\\Delta t}",
                    "meaning": "Definicja natężenia prądu elektrycznego",
                    "tags": [
                        "natezenie pradu",
                        "ladunek",
                        "czas"
                    ]
                },
                {
                    "title": "Definicja oporu elektrycznego przewodnika",
                    "latex": "R = \\frac{U}{I}",
                    "meaning": "Stosunek napięcia do natężenia prądu",
                    "tags": [
                        "opor elektryczny",
                        "rezystancja",
                        "napiecie",
                        "prad"
                    ]
                },
                {
                    "title": "Prawo Ohma (dla stałej temperatury przewodnika)",
                    "latex": "\\frac{U}{I} = \\text{const}",
                    "meaning": "Liniowa zależność między napięciem a natężeniem",
                    "tags": [
                        "prawo ohma",
                        "przewodnik"
                    ]
                },
                {
                    "title": "Opór przewodnika z drutu",
                    "latex": "R = \\rho\\frac{l}{S}",
                    "meaning": "\\rho – opór właściwy (rezystywność), l – długość, S – pole przekroju",
                    "tags": [
                        "opor wlasciwy",
                        "rezystywnosc",
                        "przekroj"
                    ]
                },
                {
                    "title": "Moc prądu stałego wydzielona na oporniku",
                    "latex": "P = UI = I^2 R = \\frac{U^2}{R}",
                    "meaning": "Prawo Joule’a-Lenza: moc cieplna wydzielana na oporze",
                    "tags": [
                        "moc pradu",
                        "joule",
                        "wydzielone cieplo"
                    ]
                },
                {
                    "title": "Zależność oporu metali od temperatury",
                    "latex": "R(T) = R(T_0)(1 + \\alpha\\Delta T), \\quad \\Delta T = T - T_0",
                    "meaning": "\\alpha – temperaturowy współczynnik oporu",
                    "tags": [
                        "temperatura",
                        "wspolczynnik oporu",
                        "metal"
                    ]
                },
                {
                    "title": "Dodawanie napięć pomiędzy punktami przewodnika",
                    "latex": "U_{AC} = U_{AB} + U_{BC}",
                    "meaning": "Zasada addytywności napięć wzdłuż obwodu",
                    "tags": [
                        "napiecie",
                        "obwod"
                    ]
                },
                {
                    "title": "II prawo Kirchhoffa dla obwodu (lub oczka)",
                    "latex": "\\sum_{i=1}^k (\\pm \\mathcal{E}_i) - \\sum_{j=1}^n (\\pm U_j) = 0",
                    "meaning": "Bilans sił elektromotorycznych i spadków napięć w oczku",
                    "tags": [
                        "ii prawo kirchhoffa",
                        "oczko",
                        "sem"
                    ]
                },
                {
                    "title": "Związek siły elektromotorycznej z napięciem na baterii",
                    "latex": "\\mathcal{E} = U + I R_w",
                    "meaning": "R_w – opór wewnętrzny źródła napięcia",
                    "tags": [
                        "sem",
                        "opor wewnetrzny",
                        "bateria"
                    ]
                },
                {
                    "title": "Opór zastępczy oporników połączonych szeregowo",
                    "latex": "R_z = \\sum_{i=1}^n R_i",
                    "meaning": "Suma oporów przy połączeniu szeregowym",
                    "tags": [
                        "polaczenie szeregowe",
                        "opor zastepczy"
                    ]
                },
                {
                    "title": "Opór zastępczy oporników połączonych równolegle",
                    "latex": "\\frac{1}{R_z} = \\sum_{i=1}^n \\frac{1}{R_i}",
                    "meaning": "Suma odwrotności oporów przy połączeniu równoległym",
                    "tags": [
                        "polaczenie rownolegle",
                        "opor zastepczy"
                    ]
                }
            ]
        },
        {
            "id": "magnetyzm",
            "name": "Magnetyzm",
            "formulas": [
                {
                    "title": "Siła Lorentza, wektor indukcji magnetycznej",
                    "latex": "F = qvB\\sin\\alpha, \\quad \\alpha = \\sphericalangle(\\vec{v}, \\vec{B}), \\quad \\vec{F} \\perp \\vec{v}, \\quad \\vec{F} \\perp \\vec{B}",
                    "meaning": "Siła działająca na poruszający się ładunek w polu magnetycznym",
                    "tags": [
                        "sila lorentza",
                        "indukcja magnetyczna",
                        "ladunek"
                    ]
                },
                {
                    "title": "Siła elektrodynamiczna",
                    "latex": "F = I\\Delta l B\\sin\\sphericalangle(\\Delta\\vec{l}, \\vec{B})",
                    "meaning": "Siła działająca na przewodnik z prądem w polu magnetycznym",
                    "tags": [
                        "sila elektrodynamiczna",
                        "prad",
                        "indukcja"
                    ]
                },
                {
                    "title": "Pole w próżni dookoła długiego, prostoliniowego przewodnika",
                    "latex": "B = \\frac{\\mu_0 I}{2\\pi r}",
                    "meaning": "Indukcja pola magnetycznego w odległości r od prostoliniowego przewodnika",
                    "tags": [
                        "prostoliniowy przewodnik",
                        "indukcja",
                        "prad"
                    ]
                },
                {
                    "title": "Pole w próżni wewnątrz długiej, gęsto nawiniętej zwojnicy",
                    "latex": "B = \\frac{\\mu_0 N I}{l}",
                    "meaning": "Pole magnetyczne wewnątrz solenoidu o N zwojach i długości l",
                    "tags": [
                        "zwojnica",
                        "solenoid",
                        "indukcja"
                    ]
                },
                {
                    "title": "Wartość momentu siły działającego na pętlę z prądem w polu magnetycznym",
                    "latex": "M = ISB\\sin\\sphericalangle(\\vec{S}, \\vec{B})",
                    "meaning": "Moment obrotowy ramki z prądem o powierzchni S",
                    "tags": [
                        "moment sily",
                        "petla z pradem",
                        "ramka"
                    ]
                },
                {
                    "title": "Strumień pola magnetycznego przez powierzchnię",
                    "latex": "\\Phi_B = BS\\cos\\sphericalangle(\\vec{S}, \\vec{B})",
                    "meaning": "Strumień indukcji magnetycznej przez powierzchnię S",
                    "tags": [
                        "strumien magnetyczny",
                        "indukcja",
                        "powierzchnia"
                    ]
                },
                {
                    "title": "Siła elektromotoryczna indukcji",
                    "latex": "\\mathcal{E} = -\\frac{\\Delta\\Phi_B}{\\Delta t}",
                    "meaning": "Prawo Faradaya; minus wynika z reguły Lenza",
                    "tags": [
                        "prawo faradaya",
                        "sem indukcji",
                        "lenz"
                    ]
                },
                {
                    "title": "Siła elektromotoryczna prądnicy",
                    "latex": "\\mathcal{E} = NB S\\omega\\sin(\\omega t + \\varphi_0)",
                    "meaning": "SEM indukowana w obracającej się zwojnicy o N zwojach",
                    "tags": [
                        "pradnica",
                        "sem",
                        "obrot"
                    ]
                },
                {
                    "title": "Praca prądu sinusoidalnego w czasie okresu",
                    "latex": "W = \\frac{1}{2}U_0 I_0 T",
                    "meaning": "Praca wykonana przez prąd zmienny o amplitudach U_0, I_0 w jednym okresie T",
                    "tags": [
                        "prad przemienny",
                        "okres",
                        "praca pradu"
                    ]
                },
                {
                    "title": "Napięcie i natężenie skuteczne przebiegu sinusoidalnego",
                    "latex": "I_{sk} = \\frac{I_0}{\\sqrt{2}}, \\quad U_{sk} = \\frac{U_0}{\\sqrt{2}}",
                    "meaning": "Wartości skuteczne prądu i napięcia sinusoidalnego",
                    "tags": [
                        "wartosc skuteczna",
                        "prad sinusoidalny"
                    ]
                },
                {
                    "title": "Uproszczony model transformatora",
                    "latex": "I_1 U_1 = I_2 U_2, \\quad \\frac{U_1}{U_2} = \\frac{N_1}{N_2}",
                    "meaning": "Przekładnia transformatora idealnego bez strat mocy",
                    "tags": [
                        "transformator",
                        "przekladnia",
                        "zwoje"
                    ]
                }
            ]
        },
        {
            "id": "relatywistyka",
            "name": "Elementy mechaniki relatywistycznej",
            "formulas": [
                {
                    "title": "Energia całkowita ciała poruszającego się w układzie inercjalnym",
                    "latex": "E = \\frac{mc^2}{\\sqrt{1 - \\frac{v^2}{c^2}}}, \\quad v = \\frac{\\Delta x}{\\Delta t}",
                    "meaning": "Całkowita energia relatywistyczna cząstki",
                    "tags": [
                        "energia calkowita",
                        "einstein",
                        "relatywistyka"
                    ]
                },
                {
                    "title": "Równoważność masy i energii spoczynkowej",
                    "latex": "E_0 = mc^2",
                    "meaning": "Energia spoczynkowa ciała o masie m",
                    "tags": [
                        "energia spoczynkowa",
                        "rownowaznosc masy i energii"
                    ]
                },
                {
                    "title": "Związek między zmianą masy układu a energią pochłoniętą / emitowaną przez układ",
                    "latex": "\\Delta E = \\Delta m c^2",
                    "meaning": "Deficyt masy w reakcjach jądrowych i procesach energetycznych",
                    "tags": [
                        "deficyt masy",
                        "energia wiazania",
                        "zmiana masy"
                    ]
                },
                {
                    "title": "Pęd relatywistyczny",
                    "latex": "p = \\frac{mv}{\\sqrt{1 - \\frac{v^2}{c^2}}}",
                    "meaning": "Wartość pędu w mechanice relatywistycznej",
                    "tags": [
                        "ped relatywistyczny",
                        "predkosc"
                    ]
                },
                {
                    "title": "Niezmiennik relatywistyczny (dynamiczny)",
                    "latex": "E_0^2 = E^2 - (cp)^2",
                    "meaning": "Związek między energią spoczynkową, całkowitą a pędem cząstki",
                    "tags": [
                        "niezmiennik relatywistyczny",
                        "czterowektor"
                    ]
                },
                {
                    "title": "Energia kinetyczna poruszającego się ciała",
                    "latex": "E_{kin} = E - E_0",
                    "meaning": "Różnica energii całkowitej i energii spoczynkowej",
                    "tags": [
                        "energia kinetyczna",
                        "relatywistyka"
                    ]
                }
            ]
        },
        {
            "id": "fizyka-atomowa-jadrowa",
            "name": "Elementy fizyki atomowej i jądrowej",
            "formulas": [
                {
                    "title": "Prawo Wiena (b – stała Wiena)",
                    "latex": "\\lambda_{max} T = b",
                    "meaning": "Długość fali maksimum promieniowania ciała doskonale czarnego",
                    "tags": [
                        "prawo wiena",
                        "promieniowanie ciala doskonale czarnego",
                        "temperatura"
                    ]
                },
                {
                    "title": "Prawo Stefana-Boltzmanna (moc wypromieniowana z jednostki powierzchni)",
                    "latex": "I = \\sigma T^4, \\quad [I] = \\frac{\\text{W}}{\\text{m}^2}",
                    "meaning": "Całkowita emitancja promieniowania ciała doskonale czarnego",
                    "tags": [
                        "prawo stefana boltzmanna",
                        "promieniowanie"
                    ]
                },
                {
                    "title": "Energia i pęd fotonu",
                    "latex": "E_f = hf = \\frac{hc}{\\lambda}, \\quad p_f = \\frac{h}{\\lambda}",
                    "meaning": "Kwantowa natura światła: energia fotonu i pęd fotonu",
                    "tags": [
                        "foton",
                        "energia fotonu",
                        "ped fotonu",
                        "planck"
                    ]
                },
                {
                    "title": "Zjawisko fotoelektryczne",
                    "latex": "E_f = W_{el} + E_{kin\\,el\\,max}",
                    "meaning": "Równanie Einsteina-Millikana: W_{el} – praca wyjścia, E_{kin\\,el\\,max} – maksymalna energia kinetyczna fotoelektronów",
                    "tags": [
                        "zjawisko fotoelektryczne",
                        "praca wyjscia",
                        "fotoelektrony"
                    ]
                },
                {
                    "title": "Emisja lub absorpcja fotonu przez atom",
                    "latex": "E_m - E_n = hf_{mn} + E_{odrzutu} \\quad (m > n)",
                    "meaning": "E_m, E_n – energie elektronu w atomie",
                    "tags": [
                        "emisja fotonu",
                        "absorpcja fotonu",
                        "przejscie kwantowe"
                    ]
                },
                {
                    "title": "Poziomy energetyczne atomu wodoru",
                    "latex": "E_n = -\\frac{13{,}606\\text{ eV}}{n^2}",
                    "meaning": "Model Bohra atomu wodoru dla głównej liczby kwantowej n",
                    "tags": [
                        "atom wodoru",
                        "poziomy energetyczne",
                        "bohr"
                    ]
                },
                {
                    "title": "Długość fali de Broglie’a cząstki swobodnej",
                    "latex": "\\lambda = \\frac{h}{p}",
                    "meaning": "Korpuskularno-falowy dualizm materii dla cząstki o pędzie p",
                    "tags": [
                        "fala de brogliea",
                        "dualizm",
                        "ped"
                    ]
                },
                {
                    "title": "Statystyczne prawo rozpadu promieniotwórczego",
                    "latex": "N(t) = N_0\\left(\\frac{1}{2}\\right)^{\\frac{t}{T}}",
                    "meaning": "T – czas połowicznego rozpadu, N_0 – początkowa liczba jąder",
                    "tags": [
                        "rozpad promieniotworczy",
                        "czas polowicznego rozpadu"
                    ]
                }
            ]
        },
        {
            "id": "wybrane-zaleznosci",
            "name": "Wybrane zależności i metody geometryczne",
            "formulas": [
                {
                    "title": "Środek masy układu n punktów materialnych",
                    "latex": "\\vec{r}_{SM} = \\frac{\\sum_{i=1}^n m_i \\vec{r}_i}{\\sum_{i=1}^n m_i}",
                    "meaning": "Położenie środka masy układu dyskretnego",
                    "tags": [
                        "srodek masy",
                        "punkty materialne"
                    ]
                },
                {
                    "title": "Związek drogi z polem pod wykresem v(t)",
                    "latex": "s_{AB} = \\text{Pole pod } AB",
                    "meaning": "Droga przebyta w ruchu jako pole pod krzywą prędkości od czasu",
                    "tags": [
                        "wykres",
                        "pole pod wykresem",
                        "droga"
                    ]
                },
                {
                    "title": "Związek pracy z polem pod wykresem F(s)",
                    "latex": "|W_{AB}| = \\text{Pole pod } AB",
                    "meaning": "Praca siły jako pole pod wykresem zależności siły od drogi",
                    "tags": [
                        "wykres",
                        "praca",
                        "sila od drogi"
                    ]
                },
                {
                    "title": "Związek pracy z polem pod wykresem P(t)",
                    "latex": "|W_{AB}| = \\text{Pole pod } AB",
                    "meaning": "Praca jako pole pod wykresem zależności mocy od czasu",
                    "tags": [
                        "wykres",
                        "praca",
                        "moc od czasu"
                    ]
                }
            ]
        }
    ]
};
