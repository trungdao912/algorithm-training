function mergeSort(arr) {
    let left = [];
    let right = [];
    let mid;
    debugger;
    if (arr.length < 2) {
        return arr[0];
    }
    mid = Math.floor(arr.length / 2)
    
    for (let i = 0; i < mid; i ++) {
        left.push(arr[i]);
    }

    for (let j = mid; j < arr.length; j++) {
        right.push(arr[j]);
    }
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
    return arr;
}

function merge(left, right, arr) {
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            arr[k] = left[i];
            k++;
            i++;
        }
        if (right[j] < left[i]) {
            arr[k] = right[j];
            k++;
            j++; 
        }
    }

    while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
    }

    while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
    }
    return arr;
}
