const triangle = (n) => {
    let result = [];
    let start = 2;
    for (let i = 1; i <= n; i++) {
        let inner = new Array(i);
        inner.fill(0);
        inner[0] = 1;
        inner[i-1] = 1;
        result.push(inner);
    }
    while (start < n) {
        let before = 0;
        let after = 1;
        for (let j = 1; j < result[start].length - 1; j++) {
            result[start][j] = result[start - 1][before] + result[start - 1][after];
            before++;
            after++;
        }
        start++;
    }
}


