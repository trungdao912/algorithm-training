function antiDiagonals(array) {
    
    let result = [];
    let count = 0;

    let numberOfRow = array.length * 2 - 1;

    while (count < numberOfRow) {
        let dummy = [];
        for (let j = 0; j < array.length; j++) {
            for (let k = 0; k < array.length; k++) {
                if ((j + k) === count) {
                    dummy.push(array[k][j]);
                }
                if (j + k > count) {
                    continue;
                }
            }
        }
        // revert the dummy
        dummy = revert(dummy);
        result.push(dummy);
        count++;
    }
    return result;
}

function revert(array) {
    let revertedArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        revertedArr.push(array[i])
    }
    return revertedArr;
}
