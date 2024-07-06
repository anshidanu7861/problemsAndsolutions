// find unique number an array

const singleNumber = function (arr) {
  let newArr = [];
  for (let i = 1; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] !== arr[j]) {
        newArr.push(arr[j]);
        break;
      }
    }
  }

  return newArr;
};

let arr = [2, 1, 2, 4, 3];

let result = singleNumber(arr);

console.log("the result is : ", result);
