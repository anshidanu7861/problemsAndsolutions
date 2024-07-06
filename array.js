const array = ["flower", "float", "flirt"];

let sortedArr = array.sort();
console.log(sortedArr);

let lastStr = sortedArr[sortedArr.length - 1];
let str = '';
for (let i = 0; i < (sortedArr[0].length < lastStr.length ? sortedArr[0].length: lastStr.length); i++) {
  if (sortedArr[0][i] === lastStr[i]) {
    str += lastStr[i];
  } else {
    break;
  }
}

console.log(str);