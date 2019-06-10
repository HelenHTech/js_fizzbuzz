describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  it("Returns Fizz when divisible by 3", function() {
    expect(fizzbuzz.divide(3)).toEqual("Fizz");
  });

  it("Returns Fizz when divisible by 5", function() {
    expect(fizzbuzz.divide(5)).toEqual("Buzz");
  });

  it("Returns Fizz when divisible by 15", function() {
    expect(fizzbuzz.divide(15)).toEqual("FizzBuzz");
  });
});
