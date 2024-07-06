// find the second smallest number an array

let arr = [9, 3, 1, 0, 4, 5];

function FindSecondSmallestNumber(arr) {
  let small = arr[0];
  let second = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      small = arr[i];
    }
  }

  for (let j = 0; j < arr.length; j++) {
    console.log(small);
    if (arr[j] < second && arr[j] > small) {
      second = arr[j];
    }
  }

  return second;
}

let secondSmall = FindSecondSmallestNumber(arr);

console.log("The second smallest number is : ", secondSmall);
