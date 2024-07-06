// sort an array for using buble sort algorithum

const bubleSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
};

let arr = [2, 1, 4, 6, 5, 7];
console.log(bubleSort(arr));
