const addOne = (arr) => {
    let str = "";
    let result = "";
    for (i of arr) {
        str = str + i;
    }
    str = (Number(str) + 1)
    str = (String(str).split(''));
    for (j of str) {
        result = result + j;
    }
    return Number(result);
}
