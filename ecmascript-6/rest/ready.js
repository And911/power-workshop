function print() {
  for (var names = [],
      $__0 = 0; $__0 < arguments.length; $__0++)
    names[$__0] = arguments[$__0];
  names.forEach(function(name) {
    console.log(name);
  });
}
print('mirco', 'georg');
console.log('++++++++');
print('mirco', 'georg', 'john', 'jim', 'jack', 'steve');
