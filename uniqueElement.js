// Write a program to print all unique elements in an array.

function uniqueEelement(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

const arr = [3, 2, 5, 3, 7, 5, 1];

const result = uniqueEelement(arr);
console.log(result);
