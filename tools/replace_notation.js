const fs = require('fs');

let content = fs.readFileSync('js/data-courses.js', 'utf8');

// 1. formulaCheat
content = content.replace(
  '\\\\Delta E_k = E_{k,i} - E_{k,f}',
  '\\\\Delta E_k = E_{k,\\\\text{pocz}} - E_{k,\\\\text{końc}}'
);

// 2. Zadanie 30: E_{ki} -> E_{k,\text{pocz}}, E_{kf} -> E_{k,\text{końc}}
content = content.replaceAll('$$E_{ki} =', '$$E_{k,\\\\text{pocz}} =');
content = content.replaceAll('$$E_{kf} =', '$$E_{k,\\\\text{końc}} =');
content = content.replaceAll('\\\\frac{\\\\Delta E}{E_{ki}}', '\\\\frac{\\\\Delta E}{E_{k,\\\\text{pocz}}}');

// 3. Zadanie 31: E_i -> E_{k,\text{pocz}}, E_f -> E_{k,\text{końc}}
content = content.replaceAll('$$E_i = \\\\frac{1}{2}m_1 v_1^2', '$$E_{k,\\\\text{pocz}} = \\\\frac{1}{2}m_1 v_1^2');
content = content.replaceAll('$$E_f = \\\\frac{1}{2}M v^2', '$$E_{k,\\\\text{końc}} = \\\\frac{1}{2}M v^2');
content = content.replaceAll('\\\\frac{\\\\Delta E}{E_i}', '\\\\frac{\\\\Delta E}{E_{k,\\\\text{pocz}}}');

// 4. Zadanie 32: E_{kf} -> E_{k,\text{końc}}, E_i -> E_{k,\text{pocz}}
content = content.replaceAll('energię $E_{kf}$:', 'energię $E_{k,\\\\text{końc}}$:');
content = content.replaceAll('($E_i = 32\\\\text{ J}$)', '($E_{k,\\\\text{pocz}} = 32\\\\text{ J}$)');

// 5. Zadanie 33: E_i -> E_{k,\text{pocz}}, E_f -> E_{k,\text{końc}}, Delta E = E_i - E_f
content = content.replaceAll('$$E_f = \\\\frac{1}{2}(m_1 + m_2) v^2', '$$E_{k,\\\\text{końc}} = \\\\frac{1}{2}(m_1 + m_2) v^2');
content = content.replaceAll(
  '\\\\Delta E = E_i - E_f = 9\\\\text{ J} - 3\\\\text{ J} = 6\\\\text{ J}',
  '\\\\Delta E = E_{k,\\\\text{pocz}} - E_{k,\\\\text{końc}} = 9\\\\text{ J} - 3\\\\text{ J} = 6\\\\text{ J}'
);

// 6. Zadanie 38: E_i -> E_{k,\text{pocz}}, E_f -> E_{k,\text{końc}}
content = content.replaceAll(
  '$$E_f = \\\\frac{1}{2}m_1 (v_1\')^2 + \\\\frac{1}{2}m_2 (v_2\')^2',
  '$$E_{k,\\\\text{końc}} = \\\\frac{1}{2}m_1 (v_1\')^2 + \\\\frac{1}{2}m_2 (v_2\')^2'
);
content = content.replaceAll(
  '($E_f = E_i = 12{,}5\\\\text{ J}$)',
  '($E_{k,\\\\text{końc}} = E_{k,\\\\text{pocz}} = 12{,}5\\\\text{ J}$)'
);

// 7. Zadanie 40: p_f -> p_{\text{końc}}, p_i -> p_{\text{pocz}}, E_f -> E_{k,\text{końc}}, E_i -> E_{k,\text{pocz}}
content = content.replaceAll('$$p_f = m u_A + 3m u_B', '$$p_{\\\\text{końc}} = m u_A + 3m u_B');
content = content.replaceAll('= mv = p_i$$', '= mv = p_{\\\\text{pocz}}$$');
content = content.replaceAll(
  '$$E_f = \\\\frac{1}{2}m\\\\left(-\\\\frac{v}{2}\\\\right)^2',
  '$$E_{k,\\\\text{końc}} = \\\\frac{1}{2}m\\\\left(-\\\\frac{v}{2}\\\\right)^2'
);
content = content.replaceAll('= \\\\frac{1}{2}mv^2 = E_i$$', '= \\\\frac{1}{2}mv^2 = E_{k,\\\\text{pocz}}$$');

fs.writeFileSync('js/data-courses.js', content, 'utf8');
console.log('Replacement finished!');
