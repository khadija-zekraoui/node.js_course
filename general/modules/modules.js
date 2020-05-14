var square = function (number) {
  return `Square of ${number} is ${number * number}`;
};

var factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

var fruit = "mango";
var num = 4;

module.exports = {
  square: square,
  factorial: factorial,
  fruit: fruit,
  num: num,
};
