const spiralOrder = (n) => {
    
    let result = [];
    let rowStart = 0;
    let rowEnd = n - 1;
    let colStart = 0;
    let colEnd = n - 1;
    let value = 1;

    for (let i = 0; i < n; i++) {
        let inner = new Array(n);
        inner.fill(0);
        result.push(inner);
    }
    
    while (rowStart <= rowEnd && colStart <= colEnd) {
        for (let i = colStart; i <= colEnd; i++) {
            result[rowStart][i] = value;
            value++;
        }
        rowStart++;
        for (let i = rowStart; i <= rowEnd; i++) {
            result[i][colEnd] = value;
            value++;
        }
        colEnd--;
        for (let i = colEnd; i >= colStart; i--) {
            result[rowEnd][i] = value;
            value++
        }
        rowEnd--;
        for (let i = rowEnd; i >= rowStart; i--) {
            result[i][colStart] = value;
            value++;
        }
        colStart++;
    }
    return result;
}

console.log(spiralOrder(5));