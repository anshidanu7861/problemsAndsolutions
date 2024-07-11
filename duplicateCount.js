// Write a program to count the total number of duplicate elements in an array.
function duplicateCount(arr) {
  const frequency = {};
  let duplicates = 0;

  // Count the frequency of each element in the array
  for (let i = 0; i < arr.length; i++) {
    frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
  }

  // Count the number of elements that appear more than once
  for (let key in frequency) {
    if (frequency[key] > 1) {
      duplicates++;
    }
  }

  return duplicates;
}

const arr = [4, 3, 2, 4, 3, 7, 5, 9, 5, 3];

const result = duplicateCount(arr);

console.log(result); // Output: 3
