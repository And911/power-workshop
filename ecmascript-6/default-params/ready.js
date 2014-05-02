function sum(x) {
  var y = arguments[1] !== (void 0) ? arguments[1] : 10;
  return x + y;
}
console.log(sum(5));
console.log(sum(5, 20));
