
// compile to ES5 with traceur
// ../traceur/traceur --out ready.js --script index.js

function sum(x, y=10) {
  return x+y;
}

console.log(sum(5));
console.log(sum(5, 20));
