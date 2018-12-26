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

