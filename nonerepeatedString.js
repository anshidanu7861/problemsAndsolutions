// find non repeated letter for string

function test(str) {
  let output;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] !== str[j]) {
        output = str[i];
      }
    }
  }

  return output;
}

let str = "aabbccdde";

let a = test(str);

console.log(a, "final result");
