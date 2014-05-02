
// compile to ES5 with traceur
// ../traceur/traceur --out ready.js --script ../traceur/bin/traceur.js index.js sum.js

import {sum, pi} from 'sum';

console.log(pi);
console.log(sum(10, 20));
