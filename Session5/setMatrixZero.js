function setMatrixZero(arr) {
    let rows = [];
    let cols = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] === 0) {
                rows.push(i);
                cols.push(j);
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (rows.includes(i) || cols.includes(j)) {
                arr[i][j] = 0;
            }
        }
    }
    return arr;
}
