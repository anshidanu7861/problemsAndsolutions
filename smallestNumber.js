let arr = [5, 3, 2, 7, 0, 1];

function findSmallestNumber(arr) {
  let small = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      small = arr[i];
    }
  }

  return small;
}

let small = findSmallestNumber(arr);

console.log("smallest number is : ", small);
