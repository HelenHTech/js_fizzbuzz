function Fizzbuzz() {  
}

Fizzbuzz.prototype.divide = function(number) {
  if (this._isDivisibleBy(15, number)) {
    return 'FizzBuzz';
  } else if (this._isDivisibleBy(5, number)) {
    return 'Buzz';
  } else if (this._isDivisibleBy(3, number)) {
    return 'Fizz';
  } else {
    return number;
  };
};

Fizzbuzz.prototype._isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}

var fizzbuzz = new Fizzbuzz();

for (var i = 1; i <= 100; i++) {
  console.log(fizzbuzz.play(i));
}