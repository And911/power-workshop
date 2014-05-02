
// compile to ES5 with traceur
// ../traceur/traceur --out ready.js --script index.js --experimental

// ecmascript 5
function test5() {
  var x = true;

  if (x) {
    var foo = 'bar';
    console.log('es5 first: ' + foo);
  } else {
    var foo = 'something else';
    console.log('es5 second: ' + foo);
  }

  console.log('end test5: ' + foo);  // end test5: bar
}

test5();

// ecmascript 6
function test6() {
  var x = true;

  if (x) {
    let foo = 'bar';
    console.log('es6 first: ' + foo);
  } else {
    let foo = 'something else';
    console.log('es6 second: ' + foo);
  }

  console.log('end test6: ' + foo);  // ReferenceError: foo is not defined
}

test6();
