var reverse = function (x) {
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  console.log(INT_MAX, "show int max");
  console.log(INT_MIN, "show int min");

  let reversed = 0;
  while (x !== 0) {
    const digit = x % 10;
    x = (x / 10) | 0; // Remove the last digit (integer division)

    // Check for overflow before it happens
    if (
      reversed > Math.floor(INT_MAX / 10) ||
      (reversed === Math.floor(INT_MAX / 10) && digit > 7)
    ) {
      return 0;
    }
    if (
      reversed < Math.ceil(INT_MIN / 10) ||
      (reversed === Math.ceil(INT_MIN / 10) && digit < -8)
    ) {
      return 0;
    }

    reversed = reversed * 10 + digit;
  }

  return reversed;
};
const x = 120;

const result = reverse(x);
console.log(result);
