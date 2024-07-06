function reverseArray(arr) {
    const len = arr.length;

    for (let i = 0; i < len / 2; i++) {
        for (let j = len - 1 ; j > i; j--) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
        }
    }

    return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));
