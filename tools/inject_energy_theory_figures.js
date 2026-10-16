const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'js', 'data-courses.js');
let source = fs.readFileSync(dataPath, 'utf8');

const encodeForJsString = (value) => value
  .replace(/\\/g, '\\\\')
  .replace(/"/g, '\\"')
  .replace(/\r?\n/g, '\\n');

const figure = (file, alt, caption) => `<figure class="theory-figure">
  <img class="theory-diagram" src="img/theory/energy/${file}" alt="${alt}" loading="eager" decoding="async">
  <figcaption>${caption}</figcaption>
</figure>`;

function insertBeforeSubtitle(sectionMarker, subtitleMarker, html) {
  const assetPath = html.match(/src="([^"]+)"/)?.[1];
  if (assetPath && source.includes(`src=\\"${assetPath}\\"`)) return false;

  const sectionIndex = source.indexOf(sectionMarker);
  if (sectionIndex === -1) throw new Error(`Nie znaleziono początku sekcji: ${sectionMarker}`);

  const subtitleIndex = source.indexOf(subtitleMarker, sectionIndex);
  if (subtitleIndex === -1) throw new Error(`Nie znaleziono śródtytułu: ${subtitleMarker}`);

  const tagIndex = source.lastIndexOf('  <div class=\\"theory-subtitle\\">', subtitleIndex);
  if (tagIndex < sectionIndex) throw new Error(`Nie znaleziono znacznika dla: ${subtitleMarker}`);

  source = `${source.slice(0, tagIndex)}${encodeForJsString(`${html}\n\n  `)}${source.slice(tagIndex)}`;
  return true;
}

function insertAtTheoryEnd(sectionMarker, html) {
  const assetPath = html.match(/src="([^"]+)"/)?.[1];
  if (assetPath && source.includes(`src=\\"${assetPath}\\"`)) return false;

  const sectionIndex = source.indexOf(sectionMarker);
  if (sectionIndex === -1) throw new Error(`Nie znaleziono początku sekcji: ${sectionMarker}`);

  const formulaIndex = source.indexOf('\n            "formulaCheat":', sectionIndex);
  const tasksIndex = source.indexOf('\n            "tasks":', sectionIndex);
  const propertyIndexes = [formulaIndex, tasksIndex].filter((index) => index !== -1);
  const nextPropertyIndex = Math.min(...propertyIndexes);
  const endIndex = source.lastIndexOf('\\n</div>"', nextPropertyIndex);
  if (!Number.isFinite(nextPropertyIndex) || endIndex < sectionIndex) {
    throw new Error(`Nie znaleziono końca teorii dla: ${sectionMarker}`);
  }

  source = `${source.slice(0, endIndex)}${encodeForJsString(`\n\n  ${html}`)}${source.slice(endIndex)}`;
  return true;
}

let inserted = 0;
const before = (...args) => { if (insertBeforeSubtitle(...args)) inserted += 1; };
const atEnd = (...args) => { if (insertAtTheoryEnd(...args)) inserted += 1; };

before(
  '📌 1. Praca jako miara przekazywania energii',
  '⚖️ 2. Znaki pracy',
  figure('work-angle.svg', 'Klocek przesuwa się w prawo, a siła F działa pod kątem alfa. Zaznaczono składową F cos alfa równoległą do przemieszczenia.', '<strong>Pracę wykonuje składowa siły równoległa do ruchu.</strong> Im mniejszy kąt α, tym większa praca tej samej siły.')
);
before(
  '📌 1. Praca jako miara przekazywania energii',
  '📊 3. Interpretacja geometryczna',
  figure('work-signs.svg', 'Trzy schematy: siła zgodna z ruchem wykonuje pracę dodatnią, prostopadła pracę zerową, a przeciwna pracę ujemną.', 'O znaku pracy decyduje <strong>kąt między siłą a przemieszczeniem</strong>, a nie sam zwrot ruchu ciała.')
);
before(
  '📌 1. Praca jako miara przekazywania energii',
  '⚡ 4. Moc',
  figure('work-graph.svg', 'Wykresy siły od drogi. Pole prostokąta odpowiada pracy stałej siły, a pole trójkąta pracy siły sprężystości.', '<strong>Pole pod wykresem F(s) jest pracą.</strong> Obszar pod osią oznaczałby pracę ujemną.')
);
atEnd(
  '📌 1. Praca jako miara przekazywania energii',
  figure('power-efficiency.svg', 'Schemat przepływu energii przez urządzenie: energia pobrana dzieli się na użyteczną i straty. Pokazano wzory na moc i sprawność.', 'Moc opisuje <strong>szybkość przekazywania energii</strong>, a sprawność mówi, jaka jej część została użytecznie wykorzystana.')
);

before(
  '🔄 1. Formy energii mechanicznej',
  '🔥 3. Bilans energii',
  figure('energy-conversion.svg', 'Kulka zsuwa się z wysokości h bez tarcia. Na górze dominuje energia potencjalna, na dole kinetyczna.', 'Bez tarcia energia nie znika: <strong>energia potencjalna zamienia się w kinetyczną</strong>, a ich suma pozostaje stała.')
);
before(
  '🔄 1. Formy energii mechanicznej',
  '🎡 4. Ruch po okręgu',
  figure('friction-energy.svg', 'Klocek porusza się w prawo, tarcie działa w lewo, a część energii mechanicznej zamienia się w ciepło.', 'Przy tarciu maleje energia mechaniczna, lecz całkowita energia układu nadal jest zachowana — pojawia się <strong>energia wewnętrzna</strong>.')
);
atEnd(
  '🔄 1. Formy energii mechanicznej',
  figure('pendulum-energy.svg', 'Wahadło w położeniu skrajnym i najniższym. W skrajnym dominuje energia potencjalna, w najniższym kinetyczna.', 'Wahadło cyklicznie zamienia <strong>Eₚ w Eₖ</strong>. Największą prędkość ma w najniższym punkcie toru.')
);

before(
  '💥 1. Zasada Zachowania Pędu',
  '🔥 3. Bilans energii –',
  figure('collision-inelastic.svg', 'Przed zderzeniem dwa ciała poruszają się osobno, a po zderzeniu są sczepione i mają wspólną prędkość.', 'Po sczepieniu ciała mają <strong>wspólną prędkość</strong>. Pęd jest zachowany, lecz część energii kinetycznej przechodzi w ciepło i odkształcenia.')
);
before(
  '💥 1. Zasada Zachowania Pędu',
  '🚀 5. Zjawisko odrzutu',
  figure('ballistic-pendulum.svg', 'Dwa etapy wahadła balistycznego: pocisk wbija się w klocek, a następnie połączone ciała wznoszą się na wysokość h.', 'Rozdziel proces na etapy: podczas krótkiego zderzenia stosuj <strong>zachowanie pędu</strong>, a podczas wznoszenia <strong>zachowanie energii</strong>.')
);

before(
  '⚪ 1. Definicja zderzenia doskonale sprężystego',
  '🌀 3. Zderzenie za pośrednictwem sprężyny',
  figure('collision-elastic.svg', 'Sprężyste zderzenie dwóch jednakowych mas. Pierwsza poruszająca się kula zatrzymuje się, a druga przejmuje jej prędkość.', 'Przy równych masach i centralnym zderzeniu sprężystym ciała <strong>wymieniają się prędkościami</strong>.')
);
before(
  '⚪ 1. Definicja zderzenia doskonale sprężystego',
  '🧱 4. Odbicie sprężyste od ściany',
  figure('spring-collision.svg', 'Dwa klocki zderzają się przez sprężynę. Przy maksymalnym ściśnięciu poruszają się z tą samą prędkością.', 'Przy maksymalnym ściśnięciu prędkość względna wynosi zero, a sprężyna przechowuje <strong>maksymalną energię sprężystości</strong>.')
);
atEnd(
  '⚪ 1. Definicja zderzenia doskonale sprężystego',
  figure('wall-bounce.svg', 'Ciało odbija się sprężyście od nieruchomej ściany. Szybkość pozostaje taka sama, a zwrot prędkości się odwraca.', 'Po odbiciu szybkość jest taka sama, lecz zwrot przeciwny: <strong>v′ = −v</strong>, dlatego |Δp| = 2mv.')
);

fs.writeFileSync(dataPath, source, 'utf8');
console.log(`Dodano ${inserted} nowych schematów do teorii.`);
