function rotateMatrix(array) {
    let num = array.length;
    let value = 1;
    
    let rowStart = 0;
    let rowEnd = num - 1;

    let colStart = num - 1;
    let colEnd = 0;

    while (rowStart <= rowEnd && colEnd <= colStart) {
        for (i = rowStart; i <= rowEnd; i++) {
            array[i][colStart] = value;
            value++
        }
        colStart--;
    }

    return array;
}

console.log(rotateMatrix( [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))
