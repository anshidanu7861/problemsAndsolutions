// find the largest number an array

let arr = [1, 5, 3, 7, 6, 8, 4, 9];

function LargeNumber(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

let largestNumber = LargeNumber(arr);

console.log("Largest Number is : ", largestNumber);
