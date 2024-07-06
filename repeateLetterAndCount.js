// find repeate letter and count

function test(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let count = 1;

    if (str[i] === str[i + 1]) {
      count++;
    }

    if (!result.includes(str[i])) {
      result += str[i] + count;
    }
  }

  return result;
}

let str = "aaabbccdd";
let result = test(str);

console.log(result, "final result");
