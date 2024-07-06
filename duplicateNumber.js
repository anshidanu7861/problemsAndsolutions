let arr = [3, 2, 1, 0, 4, 3, 9, 1, 0];

function findDuplicate(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        newArr.push(arr[j]);
      }
    }
  }

  return newArr;
}

const result = findDuplicate(arr);
console.log("duplicate numbers :", result);
