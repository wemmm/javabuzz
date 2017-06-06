var Javabuzz = function(){};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return (number % 3 === 0);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return (number % 5 === 0);
};

Javabuzz.prototype.isDivisibleByFiveAndThree = function(number) {
  return (number % 5 === 0) && (number % 3 === 0);
};

Javabuzz.prototype.says = function(number) {
  if (this.isDivisibleByFiveAndThree(number)) {
    return "Fizzbuzz";
  }
  if (this.isDivisibleByThree(number)) {
    return "Fizz";
  }
  if (this.isDivisibleByFive(number)) {
    return "Buzz";
  }
  return number;
};
