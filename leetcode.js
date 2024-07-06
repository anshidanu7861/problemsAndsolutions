// find the repeated number for an array

function removeEle(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        for (let k = j; k < nums.length - 1; k++) {
          nums[k] = nums[k + 1];
        }
        nums.length--;
        j--;
      }
    }
  }

  return nums;
}

let nums = [1, 1, 2, 1, 2, 1];
let res = removeEle(nums);

console.log(res, "final result");
