// find the second largest number an array

let arr = [1, 2, 8, 3, 0, 9, 19, 10];

function findSecondLargestNumber(arr) {
  let largest = arr[0];
  let second = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (largest > arr[i] && second < arr[i]) {
      second = arr[i];
    }
  }

  return second;
}

const secondLargest = findSecondLargestNumber(arr);

console.log("the second largest number is : ", secondLargest);
