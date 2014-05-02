var name = 'world!';

function egal() {
  if (typeof name === 'undefined') {
    name = 'Mr. Bond';
    console.log('Goodbye, ' + name);
  } else {
    console.log('Hello, ' + name);
  }
}

egal();


// a: Hello, world!
// b: Goodbye, Mr. Bond
// c: Hello,
// d: Hello, undefined
// e: Error
// f: It varies
// g: None of the above
