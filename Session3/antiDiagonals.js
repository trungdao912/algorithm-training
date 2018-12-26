function antiDiagonals(array) {
    
    let result = [];
    let count = 0;

    let numberOfRow = array.length * 2 - 1;

    while (count < numberOfRow) {
        let dummy = [];
        for (let j = 0; j < array.length; j++) {
            for (let k = 0; k < array.length; k++) {
                if ((j + k) === count) {
                    dummy.push(array[j][k]);
                }
                if (j + k > count) {
                    continue;
                }
            }
        }
        result.push(dummy);
        count++;
    }
    return result;
}

console.log(antiDiagonals([ [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
 ]));
