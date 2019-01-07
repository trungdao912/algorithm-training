function excelColumnNumber(string) {
    let num = string.length;
    let res = 0;
    for (let i = 0; i < num; i++) {
        res *= 26
        res += (string.charCodeAt(string[i]) - 64);
    }
    return res;
}

console.log(excelColumnNumber("ZA"));