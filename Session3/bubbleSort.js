function bubbleSort(array) {
    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                // swap position
                swap(array, j, i);
            } else {
                continue
            }
        }
    }
    return array;
}

function swap(array, pos1, pos2) {
    let a = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = a;
    return;
}
