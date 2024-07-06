const lengthOfLastWord = function (str) {
  str = str.trim();

  let word = str.split(" ");

  let len = word.length - 1;

  for (let i = 0; i < word.length; i++) {
    if (i === len) {
      return word[i].length;
    }
  }
};

let str = "luffy is still joyboy";
const result = lengthOfLastWord(str);
console.log(result);
