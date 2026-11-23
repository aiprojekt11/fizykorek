const fs = require('fs');
const path = require('path');

const out = path.join(__dirname, '..', 'img', 'rigid');
const C = { ink:'#182c40', body:'#64778a', fill:'#f5f8fb', fill2:'#dce5ed', blue:'#1261a0', orange:'#b65512', green:'#14736b', guide:'#a7b4c0' };

function frame(title, desc, body, height=520) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="${height}" viewBox="0 0 1200 ${height}" role="img" aria-labelledby="title desc">
<title id="title">${title}</title><desc id="desc">${desc}</desc>
<defs>
  <marker id="blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" orient="auto-start-reverse" markerUnits="userSpaceOnUse"><path d="M0 0L10 5L0 10Z" fill="${C.blue}"/></marker>
  <marker id="green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" orient="auto-start-reverse" markerUnits="userSpaceOnUse"><path d="M0 0L10 5L0 10Z" fill="${C.green}"/></marker>
  <marker id="orange" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" orient="auto-start-reverse" markerUnits="userSpaceOnUse"><path d="M0 0L10 5L0 10Z" fill="${C.orange}"/></marker>
  <style>.txt{font-family:'Latin Modern Roman','Times New Roman',serif;fill:${C.ink};font-size:27px}.math{font-family:'Latin Modern Math','Cambria Math','Times New Roman',serif;font-style:italic;fill:${C.ink};font-size:29px}.small{font-size:23px}.beam{stroke:${C.body};stroke-width:12;stroke-linecap:round}.thin{stroke:${C.body};stroke-width:2;fill:none}.guide{stroke:${C.guide};stroke-width:1.5;stroke-dasharray:7 7;fill:none}.string{stroke:${C.ink};stroke-width:2.5;fill:none}.dim{stroke:${C.green};stroke-width:2;fill:none;marker-start:url(#green);marker-end:url(#green)}.vec{stroke:${C.blue};stroke-width:3;fill:none;marker-end:url(#blue)}.force{stroke:${C.orange};stroke-width:3;fill:none;marker-end:url(#orange)}.mass{fill:${C.fill};stroke:${C.body};stroke-width:2}.pulley{fill:${C.fill};stroke:${C.body};stroke-width:2}</style>
</defs><rect width="1200" height="${height}" fill="#fff"/>${body}</svg>`;
}

function mass(x,y,w,h,label){return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" class="mass"/><text x="${x+w/2}" y="${y+h/2+8}" text-anchor="middle" class="math small">${label}</text>`}
function support(x,y){return `<path d="M${x} ${y}l-34 50h68Z" fill="${C.fill2}" stroke="${C.body}" stroke-width="2"/><path d="M${x-46} ${y+53}h92" class="thin"/><circle cx="${x}" cy="${y}" r="6" fill="${C.ink}"/>`}
function dimension(x1,x2,y,label){return `<path d="M${x1} ${y}H${x2}" class="dim"/><path d="M${x1} ${y-14}v28M${x2} ${y-14}v28" class="thin"/><text x="${(x1+x2)/2}" y="${y-15}" text-anchor="middle" class="math small">${label}</text>`}

let b = `<path d="M170 225H1030" class="beam"/>${support(620,231)}
<path d="M260 231V330M860 231V330" class="string"/>${mass(205,330,110,78,'m₁ = 3 kg')}${mass(805,330,110,78,'m₂')}
${dimension(260,620,135,'0,60 m')}${dimension(620,860,135,'0,40 m')}
<text x="620" y="315" text-anchor="middle" class="math">O</text>`;
fs.writeFileSync(path.join(out,'task15-beam-equilibrium.svg'), frame('Równowaga nieważkiej belki', 'Nieważka belka z osią O, masą m1 po lewej i m2 po prawej oraz podanymi ramionami sił.', b));
fs.writeFileSync(path.join(out,'task15-beam-equilibrium-solution.svg'), frame('Siły działające w układzie z nieważką belką', 'Ciężary obu klocków działają w dół, a reakcja osi O działa pionowo w górę.', b + `
<path d="M245 235V305" class="force"/><text x="165" y="285" class="math small">m₁g</text>
<path d="M845 235V305" class="force"/><text x="885" y="285" class="math small">m₂g</text>
<path d="M620 225V155" class="vec"/><text x="645" y="170" class="math small">F<tspan baseline-shift="sub" font-size="17">O</tspan></text>`));

b = `<path d="M150 225H1050" class="beam"/>${support(500,231)}
<circle cx="600" cy="225" r="7" fill="${C.ink}"/><text x="600" y="205" text-anchor="middle" class="math">S</text><text x="500" y="315" text-anchor="middle" class="math">P</text>
<path d="M180 231V330M1020 231V330" class="string"/>${mass(125,330,110,78,'m₁ = 5 kg')}${mass(965,330,110,78,'m₂ = 2 kg')}
${dimension(500,600,125,'x')}${dimension(180,600,80,'2,0 m')}${dimension(600,1020,80,'2,0 m')}
<text x="600" y="470" text-anchor="middle" class="txt small">belka jednorodna: L = 4,0 m, M = 10 kg</text>`;
fs.writeFileSync(path.join(out,'task16-support-position.svg'), frame('Położenie podpory jednorodnej belki', 'Belka długości czterech metrów z masami na końcach, środkiem masy S i podporą P przesuniętą o x w stronę cięższej masy.', b));
fs.writeFileSync(path.join(out,'task16-support-position-solution.svg'), frame('Siły działające na belkę z przesuniętą podporą', 'Ciężary klocków i belki działają w dół, a reakcja podpory P pionowo w górę.', b + `
<path d="M165 235V310" class="force"/><text x="85" y="290" class="math small">m₁g</text>
<path d="M600 225V325" class="force"/><text x="625" y="310" class="math small">Mg</text>
<path d="M1005 235V310" class="force"/><text x="1035" y="290" class="math small">m₂g</text>
<path d="M500 225V155" class="vec"/><text x="525" y="170" class="math small">F<tspan baseline-shift="sub" font-size="17">P</tspan></text>`));

b = `<path d="M130 250H1070" class="beam"/>
<circle cx="250" cy="250" r="7" fill="${C.ink}"/><circle cx="600" cy="250" r="7" fill="${C.ink}"/><circle cx="740" cy="250" r="7" fill="${C.ink}"/>
<text x="250" y="225" text-anchor="middle" class="math">A</text><text x="600" y="225" text-anchor="middle" class="math">B</text><text x="740" y="225" text-anchor="middle" class="math">C</text>
<path d="M250 250v125M600 250v125" class="guide"/><path d="M215 375h70M565 375h70" class="thin"/>
${dimension(250,600,125,'1,0 m')}${dimension(250,740,75,'1,4 m')}
<text x="425" y="455" text-anchor="middle" class="txt small">połączenia pionowe w A i B</text><text x="870" y="455" text-anchor="middle" class="txt small">m = 60 kg</text>`;
fs.writeFileSync(path.join(out,'task17-beam-reactions.svg'), frame('Belka ze zwisającym końcem', 'Jednorodna belka połączona pionowo w punktach A i B; środek masy C leży na prawo od obu połączeń.', b));
fs.writeFileSync(path.join(out,'task17-beam-reactions-solution.svg'), frame('Siły działające na belkę ze zwisającym końcem', 'Siła FA działa w dół, siła FB w górę, a ciężar belki w dół w środku masy C.', b + `
<path d="M250 250V345" class="force"/><text x="205" y="330" class="math small">F<tspan baseline-shift="sub" font-size="17">A</tspan></text>
<path d="M600 250V155" class="vec"/><text x="625" y="175" class="math small">F<tspan baseline-shift="sub" font-size="17">B</tspan></text>
<path d="M740 250V365" class="force"/><text x="770" y="345" class="math small">mg</text>`));

b = `<circle cx="600" cy="205" r="165" class="pulley"/><circle cx="600" cy="205" r="82" fill="#fff" stroke="${C.body}" stroke-width="2"/><circle cx="600" cy="205" r="7" fill="${C.ink}"/>
<path d="M518 205V370M765 205V370" class="string"/>${mass(463,370,110,80,'m₁ = 4 kg')}${mass(710,370,110,80,'m₂ = 1 kg')}
<path d="M600 205H518" class="dim"/><text x="535" y="160" text-anchor="middle" class="math small">r₁ = 0,10 m</text>
<path d="M600 205H765" class="dim"/><text x="690" y="275" text-anchor="middle" class="math small">r₂ = 0,20 m</text>
<text x="600" y="30" text-anchor="middle" class="txt small">bębny współosiowe połączone na sztywno</text>`;
fs.writeFileSync(path.join(out,'task21-coaxial-drums.svg'), frame('Układ dwóch współosiowych bębnów', 'Dwa sztywno połączone bębny o promieniach r1 i r2, z nićmi rozwijającymi się po przeciwnych stronach i zawieszonymi masami.', b));
fs.writeFileSync(path.join(out,'task21-coaxial-drums-solution.svg'), frame('Siły działające na klocki przy współosiowych bębnach', 'Na każdy klocek działa ciężar w dół i naprężenie nici w górę; większy moment ciężaru m1 powoduje jego ruch w dół.', b + `
<path d="M485 385V315" stroke="${C.green}" stroke-width="3" marker-end="url(#green)"/><text x="430" y="325" class="math small">F<tspan baseline-shift="sub" font-size="16">n1</tspan></text>
<path d="M550 435V500" class="force"/><text x="565" y="490" class="math small">m₁g</text>
<path d="M735 385V315" stroke="${C.green}" stroke-width="3" marker-end="url(#green)"/><text x="680" y="325" class="math small">F<tspan baseline-shift="sub" font-size="16">n2</tspan></text>
<path d="M800 435V500" class="force"/><text x="815" y="490" class="math small">m₂g</text>
<path d="M415 380V475" class="vec"/><text x="370" y="465" class="math small">a₁</text>
<path d="M865 475V380" class="vec"/><text x="880" y="400" class="math small">a₂</text>`));

b = `<path d="M90 195H785" class="thin"/><path d="M300 150H860A75 75 0 0 1 935 225V320" class="string"/><circle cx="860" cy="225" r="75" class="pulley"/><circle cx="860" cy="225" r="6" fill="${C.ink}"/>
${mass(180,105,120,90,'m₁ = 2 kg')}${mass(880,320,110,90,'m₂ = 1 kg')}
<text x="860" y="110" text-anchor="middle" class="math">M = 2 kg</text><text x="375" y="240" class="math small">μ = 0,20</text>
`;
fs.writeFileSync(path.join(out,'task22-massive-pulley.svg'), frame('Klocek na stole i masywny krążek', 'Klocek m1 na szorstkim stole połączony nicią przez masywny krążek M z wiszącym klockiem m2; oznaczono różne siły naciągu.', b));
fs.writeFileSync(path.join(out,'task22-massive-pulley-solution.svg'), frame('Siły w układzie z masywnym krążkiem', 'Na klocek m1 działają siła naciągu Fn1, siła tarcia FT, ciężar i reakcja podłoża FN, a na m2 ciężar i siła naciągu Fn2; Fn2 jest większe od Fn1.', b + `
<path d="M300 150H395" stroke="${C.green}" stroke-width="3" marker-end="url(#green)"/><text x="348" y="135" class="math small">F<tspan baseline-shift="sub" font-size="16">n1</tspan></text>
<path d="M180 175H95" class="force"/><text x="108" y="160" class="math small">F<tspan baseline-shift="sub" font-size="16">T</tspan></text>
<path d="M240 105V40" class="vec"/><text x="255" y="65" class="math small">F<tspan baseline-shift="sub" font-size="16">N</tspan></text>
<path d="M240 195V275" class="force"/><text x="255" y="260" class="math small">m₁g</text>
<path d="M935 335V260" stroke="${C.green}" stroke-width="3" marker-end="url(#green)"/><text x="955" y="280" class="math small">F<tspan baseline-shift="sub" font-size="16">n2</tspan></text>
<path d="M935 410V490" class="force"/><text x="955" y="480" class="math small">m₂g</text>`));

b = `<path d="M80 335H1000" class="thin"/><circle cx="340" cy="225" r="110" class="pulley"/><circle cx="340" cy="225" r="7" fill="${C.ink}"/><text x="315" y="215" text-anchor="end" class="math">O</text>
<circle cx="850" cy="280" r="55" class="pulley"/><circle cx="850" cy="280" r="5" fill="${C.ink}"/>
<path d="M340 225H850A55 55 0 0 1 905 280V345" class="string"/>${mass(850,345,110,90,'m')}
<path d="M280 135A110 110 0 0 1 430 180" fill="none" stroke="${C.green}" stroke-width="3" marker-end="url(#green)"/><text x="355" y="105" text-anchor="middle" class="math">toczenie bez poślizgu</text>
<text x="340" y="445" text-anchor="middle" class="txt small">walec jednorodny, m = 1 kg</text><text x="905" y="470" text-anchor="middle" class="txt small">m = 1 kg</text>`;
fs.writeFileSync(path.join(out,'task23-rolling-cylinder.svg'), frame('Walec połączony z wiszącym klockiem', 'Nić jest przymocowana do osi jednorodnego walca i przełożona przez nieważki bloczek; zaznaczono siłę naciągu oraz miejsce ustalenia zwrotu tarcia.', b, 500));
fs.writeFileSync(path.join(out,'task23-rolling-cylinder-solution.svg'), frame('Siły działające na walec i wiszący klocek', 'Siła naciągu Fn działa na walec w prawo, siła tarcia FT w lewo, ciężar w dół i reakcja podłoża FN w górę; na wiszący klocek działają ciężar i siła naciągu Fn.', b + `
<path d="M340 225H480" stroke="${C.green}" stroke-width="3" marker-end="url(#green)"/><text x="450" y="205" class="math small">F<tspan baseline-shift="sub" font-size="16">n</tspan></text>
<path d="M340 335H225" class="force"/><text x="235" y="315" class="math small">F<tspan baseline-shift="sub" font-size="16">T</tspan></text>
<path d="M340 225V145" class="vec"/><text x="355" y="170" class="math small">F<tspan baseline-shift="sub" font-size="16">N</tspan></text>
<path d="M340 225V305" class="force"/><text x="355" y="300" class="math small">mg</text>
<path d="M905 355V295" stroke="${C.green}" stroke-width="3" marker-end="url(#green)"/><text x="925" y="315" class="math small">F<tspan baseline-shift="sub" font-size="16">n</tspan></text>
<path d="M905 435V490" class="force"/><text x="925" y="485" class="math small">mg</text>`, 500));

console.log('Generated 6 task SVGs in', out);
