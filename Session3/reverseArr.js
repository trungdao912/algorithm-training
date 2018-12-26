function reverseArr(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

function reverseArrInPlace(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (i + j === (arr.length - 1)) {
                swap(arr, i, j);
            }
        }
    }
    return arr;
}

function swap(array, pos1, pos2) {
    let a = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = a;
    return;
}
