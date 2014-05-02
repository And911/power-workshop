function test5() {
  var x = true;
  if (x) {
    var foo = 'bar';
    console.log('es5 first: ' + foo);
  } else {
    var foo = 'something else';
    console.log('es5 second: ' + foo);
  }
  console.log('end test5: ' + foo);
}
test5();
function test6() {
  var x = true;
  if (x) {
    try {
      throw undefined;
    } catch (foo) {
      foo = 'bar';
      console.log('es6 first: ' + foo);
    }
  } else {
    try {
      throw undefined;
    } catch (foo) {
      foo = 'something else';
      console.log('es6 second: ' + foo);
    }
  }
  console.log('end test6: ' + foo);
}
test6();
