const fs = require('fs');

let code = fs.readFileSync('js/data-courses.js', 'utf8');

// For m-kinematyka make sure isComingSoon is false
code = code.replace(
  /("id":\s*"m-kinematyka"[^}]+?"badge":\s*"[^"]+")/,
  '$1,\n        "isComingSoon": false'
);

// For m-praca set badge to "Wkrótce" and isComingSoon to true
code = code.replace(
  /("id":\s*"m-praca"[\s\S]*?"badge":\s*)"[^"]+"([\s\S]*?"isComingSoon":\s*)(false|true)/,
  '$1"Wkrótce"$2true'
);

// For m-bryla set badge to "Wkrótce" and isComingSoon to true
code = code.replace(
  /("id":\s*"m-bryla"[\s\S]*?"badge":\s*)"[^"]+"([\s\S]*?"isComingSoon":\s*)(false|true)/,
  '$1"Wkrótce"$2true'
);

fs.writeFileSync('js/data-courses.js', code, 'utf8');
console.log('Successfully updated isComingSoon in js/data-courses.js');
