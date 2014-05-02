
// compile to ES5 with traceur
// ../traceur/traceur --out ready.js --script index.js

function print(...names) {
  names.forEach(function(name) {
    console.log(name);
  });
}

print('mirco', 'georg');
console.log('++++++++');
print('mirco', 'georg', 'john', 'jim', 'jack', 'steve');
