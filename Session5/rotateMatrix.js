function rotateMatrix(array) {
    let rowStart = 0;
    let rowEnd = array.length - 1;
    let colStart = 0;
    let colEnd = array.length - 1;

    while (rowStart <= rowEnd && colStart <= colEnd) {
        let temp;
        for (let i = colStart; i < colEnd; i++) {
            temp = array[rowStart][i];
            array[rowStart][i] = array[i][colEnd];
            array[i][colEnd] = temp;

            temp = array[rowStart][i];
            array[rowStart][i] = array[colEnd][colEnd - i];
            array[colEnd][colEnd - i] = temp;

            temp = array[rowStart][i];
            array[rowStart][i] = array[colEnd - i][i];
            array[colEnd - i][i] = temp;
        }
        rowStart++;
        colEnd--;
    }

    return array;
}

console.log(rotateMatrix( [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))
