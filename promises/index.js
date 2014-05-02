
var Promise = require('bluebird');

function first() {
  return new Promise(function(resolve){

    setTimeout(function() {
      console.log('first');
      resolve();
    }, 1000);

  });
}

function second() {
  return new Promise(function(resolve){

    setTimeout(function() {
      console.log('second');
      resolve();
    }, 1000);

  });
}

function third() {
  return new Promise(function(resolve){

    setTimeout(function() {
      console.log('third');
      resolve();
    }, 1000);

  });
}

// first()
// .then(function() {
//   return second();
// })
// .then(function() {
//   return third();
// })
// .then(function() {
//   console.log('done');
// });

// same with callbacks

function firstCb(cb) {
  setTimeout(function() {
    console.log('first');
    cb();
  }, 1000);
}

function secondCb(cb) {
  setTimeout(function() {
    console.log('second');
    cb();
  }, 1000);
}

function thirdCb(cb) {
  setTimeout(function() {
    console.log('third');
    cb();
  }, 1000);
}

// firstCb(function() {
//   secondCb(function() {
//     thirdCb(function() {
//       console.log('done');
//     });
//   });
// });

// problem: start all at the same time and do something when they are all done

Promise.all([
  first(),
  second(),
  third()
]).then(function() {
  console.log('all done');
});
