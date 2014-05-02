
// run with mocha
// mocha test.js --reporter spec

var should = require('should');
var sum = require('./sum.js');

describe('sum', function() {

  it('should add two numbers', function(done) {
    sum(10,20).should.equal(30);
    done();
  });

  it('should work with negative numbers', function(done) {
    sum(-10,20).should.equal(10);
    done();
  });

  it('should concatenate strings', function(done) {
    sum('a','b').should.equal('ab');
    done();
  });

});
