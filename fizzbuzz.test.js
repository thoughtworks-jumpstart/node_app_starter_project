const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz function", () => {
  it("should return Fizz when the input is a multiple of 3", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });
  it("should return Buzz when the input is a multiple of 5", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
  });

  it("should return FizzBuzz when the input is a multiple of 15", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });

  it("should return the exact number in other situations", () => {
    expect(fizzbuzz(1)).toBe("1");
  });
});
