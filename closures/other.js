function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}


function reduce(combine, base, array) {
  forEach(array, function (element) {
    base = combine(base, element);
  });
  return base;
}

function add(a, b) {
  return a + b;
}

function sum(numbers) {
  return reduce(add, 0, numbers);
}

function map(func, array) {
  var result = [];
  forEach(array, function (element) {
    result.push(func(element));
  });
  return result;
}

if (Object.prototype.toString.call(options) === "[object Object]") {
    // It's a plain object
}