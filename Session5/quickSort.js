function quickSort(arr, start, end) {
    let index;
    if (start >= end) {
        return;
    }
    debugger;
    index = divide(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
    return arr;
}   

function divide(arr, start, end) {
    let pivot = arr[end - 1];
    let index = start;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, index, end - 1);
    return index;
}

function swap(arr, pos1, pos2) {
    let temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
}

console.log(quickSort([7,2,3,5,9,6,4], 0, 7))
