const fs = require('fs');
const path = require('path');

const dataCoursesPath = path.join(__dirname, '..', 'js', 'data-courses.js');
let content = fs.readFileSync(dataCoursesPath, 'utf8');

// 1. In formulaCheat of sub-bryla-ruch: replace a_t with a_s
const oldFormulaCheat = `"formulaCheat": "\\\\omega = 2\\\\pi f = \\\\frac{2\\\\pi}{T}, \\\\quad v = \\\\omega r, \\\\quad a_t = \\\\varepsilon r, \\\\quad a_d = \\\\omega^2 r, \\\\quad v_{\\\\text{cm}} = \\\\omega R"`;
const newFormulaCheat = `"formulaCheat": "\\\\omega = 2\\\\pi f = \\\\frac{2\\\\pi}{T}, \\\\quad v = \\\\omega r, \\\\quad a_s = \\\\varepsilon r, \\\\quad a_d = \\\\omega^2 r, \\\\quad v_{\\\\text{cm}} = \\\\omega R"`;

if (content.includes(oldFormulaCheat)) {
  content = content.replace(oldFormulaCheat, newFormulaCheat);
  console.log('Successfully replaced formulaCheat');
} else {
  console.warn('oldFormulaCheat not found, checking if already a_s');
}

// 2. In theory text: replace a_t with a_s
const oldTheoryAt1 = `<li><strong>Przyspieszenie styczne ($a_t$):</strong> zmienia wartość prędkości liniowej:\\n    <div style="text-align:center;margin:4px 0;">$$a_t = \\\\varepsilon \\\\cdot r$$</div></li>`;
const newTheoryAt1 = `<li><strong>Przyspieszenie styczne ($a_s$):</strong> zmienia wartość prędkości liniowej:\\n    <div style="text-align:center;margin:4px 0;">$$a_s = \\\\varepsilon \\\\cdot r$$</div></li>`;

if (content.includes(oldTheoryAt1)) {
  content = content.replace(oldTheoryAt1, newTheoryAt1);
  console.log('Successfully replaced oldTheoryAt1');
} else {
  console.warn('oldTheoryAt1 not found');
}

const oldTheoryAt2 = `<li><strong>Całkowite przyspieszenie liniowe ($a$):</strong> wektorowa suma prostopadłych składowych:\\n    <div style="text-align:center;margin:4px 0;">$$a = \\\\sqrt{a_t^2 + a_d^2}$$</div></li>`;
const newTheoryAt2 = `<li><strong>Całkowite przyspieszenie liniowe ($a$):</strong> wektorowa suma prostopadłych składowych:\\n    <div style="text-align:center;margin:4px 0;">$$a = \\\\sqrt{a_s^2 + a_d^2}$$</div></li>`;

if (content.includes(oldTheoryAt2)) {
  content = content.replace(oldTheoryAt2, newTheoryAt2);
  console.log('Successfully replaced oldTheoryAt2');
} else {
  console.warn('oldTheoryAt2 not found');
}

// 3. Replace Placeholder 1 with Figure 1 (rotation kinematics)
const oldPh1 = `<div class="theory-placeholder">\\n  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>\\n  <p class="theory-placeholder-desc">Ruch obrotowy tarczy wokół osi O: tarcza o promieniu R obracająca się z prędkością kątową omega i przyspieszeniem kątowym epsilon. Na brzegu tarczy w odległości r od osi zaznaczony punkt ze składowymi wektorów: prędkość liniowa v = omega * r (styczna do toru), przyspieszenie styczne a_t = epsilon * r (styczne do toru) oraz przyspieszenie dośrodkowe a_d = omega^2 * r (skierowane wzdłuż promienia do środka obrotu O). Obok wektorowa suma a = sqrt(a_t^2 + a_d^2).</p>\\n  <div class="theory-placeholder-caption">Wszystkie punkty bryły mają jednakowe omega i epsilon, natomiast wielkości liniowe (v, a_t, a_d) rosną proporcjonalnie do odległości r od osi.</div>\\n</div>`;

const newFigure1 = `<figure class="theory-figure">\\n  <img class="theory-diagram" src="img/theory/rigid/rigid-rotation-kinematics.png" alt="Ruch obrotowy tarczy wokół osi O: punkt P na brzegu tarczy z wektorem prędkości v oraz składowymi przyspieszenia: przyspieszenie styczne as i przyspieszenie dośrodkowe ad." loading="eager" decoding="async">\\n</figure>`;

if (content.includes(oldPh1)) {
  content = content.replace(oldPh1, newFigure1);
  console.log('Successfully replaced placeholder 1 with rigid-rotation-kinematics.png');
} else {
  console.error('Could not find oldPh1 in content!');
}

// 4. Replace Placeholder 2 with Figure 2 (rolling wheel)
const oldPh2 = `<div class="theory-placeholder">\\n  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>\\n  <p class="theory-placeholder-desc">Rozkład prędkości w toczącym się kole bez poślizgu: koło o promieniu R toczy się po poziomej powierzchni z prędkością środka masy v. Zaznaczone wektory prędkości w czterech kluczowych punktach: w punkcie styku z podłożem C prędkość wynosi v_C = 0 (chwilowy środek obrotu – punkt styku chwilowo spoczywa); w środku masy O prędkość wynosi v_O = v; na szczycie koła A prędkość wynosi v_A = 2v (skierowana poziomo w prawo); w skrajnym prawym punkcie B prędkość wypadkowa v_B = v * sqrt(2) skierowana pod kątem 45 stopni w dół.</p>\\n  <div class="theory-placeholder-caption">Toczenie bez poślizgu to złożenie ruchu postępowego i obrotowego: punkt styku z podłożem ma prędkość zero (chwilowy środek obrotu), a szczyt koła porusza się z prędkością 2v.</div>\\n</div>`;

const newFigure2 = `<figure class="theory-figure">\\n  <img class="theory-diagram" src="img/theory/rigid/rigid-rolling-wheel.png" alt="Rozkład wektorów prędkości w toczącym się kole bez poślizgu: punkt styku C spoczywa (v_C = 0), środek O ma prędkość v, punkt A na szczycie 2v, punkt B na skraju sqrt(2) v." loading="eager" decoding="async">\\n</figure>`;

if (content.includes(oldPh2)) {
  content = content.replace(oldPh2, newFigure2);
  console.log('Successfully replaced placeholder 2 with rigid-rolling-wheel.png');
} else {
  console.error('Could not find oldPh2 in content!');
}

fs.writeFileSync(dataCoursesPath, content, 'utf8');
console.log('Finished updating data-courses.js!');
