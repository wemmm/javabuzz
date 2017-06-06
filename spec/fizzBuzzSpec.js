describe('Javabuzz', function() {

  var javabuzz;

  describe('knows when a number is', function(){

    it('divisible by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 5 and 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFiveAndThree(15)).toBe(true);
    });

  });

  describe('knows when a number is not', function(){

    it('divisible by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFive(2)).toBe(false);
    });

    it('divisible by 5 and 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFiveAndThree(1)).toBe(false);
    });

  });

});

describe('when playing, says', function() {

  it('"Fizz" when a number is divisible by 3', function() {
    javabuzz = new Javabuzz();
    expect(javabuzz.says(3)).toEqual("Fizz");
  });

  it('"Buzz" when a number is divisible by 5', function() {
    javabuzz = new Javabuzz();
    expect(javabuzz.says(5)).toEqual("Buzz");
  });

  it('"Fizzbuzz" when a number is divisible by 5 and 3', function() {
    javabuzz = new Javabuzz();
    expect(javabuzz.says(15)).toEqual("Fizzbuzz");
  });

});
