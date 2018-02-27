module.exports = function fizzbuzz(input) {
  var output = "";
  if (input % 3 == 0) {
    output += "Fizz";
  }
  if (input % 5 == 0) {
    output += "Buzz";
  }

  if (input % 3 != 0 && input % 5 != 0) {
    output = String(input);
  }
  return output;
};
