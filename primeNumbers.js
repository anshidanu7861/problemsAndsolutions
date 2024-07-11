// Write a program to print all prime numbers in an array.

function primeNumbers(arr) {
  let prime = [];

  for (let i = 0; i < arr.length; i++) {
    let isPrime = true;
    if (arr[i] <= 1) {
      isPrime = false;
    } else {
      for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
        if (arr[i] % j === 0) {
          isPrime = false;
          break;
        }
      }
    }

    if (isPrime) {
      prime.push(arr[i]);
    }
  }

  return prime;
}

const arr = [1, 3, 2, 4, 6, 5, 8, 7];
console.log(primeNumbers(arr));
