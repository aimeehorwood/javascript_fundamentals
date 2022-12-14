const fizzBuzz = require("./fizzbuzz");

  describe('fizzBuzz', () => {
    it('returns Fizz when a multiple of 3', () => {
      expect(fizzBuzz(3)).toBe('Fizz');
      expect(fizzBuzz(18)).toBe('Fizz');
    });
    it('returns Buzz when a multiple of 5', () => {
      expect(fizzBuzz(5)).toBe('Buzz');
      expect(fizzBuzz(20)).toBe('Buzz');
    });
    it('returns FizzBuzz when a multiple of 3 and 5', () => {
      expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
    it('returns number when number is not a multiple of 3 or 5', () => {
      expect(fizzBuzz(8)).toBe(8);
    });
  });