
// compile to ES5 with traceur
// ../traceur/traceur --out ready.js --script ../traceur/bin/traceur.js index.js

function *fibonacci(){
  var i = 0;
  yield i++;
  yield i++;
  yield i++;
  yield i++;
  yield i++;
  yield i++;
}

var sequence = fibonacci();
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
