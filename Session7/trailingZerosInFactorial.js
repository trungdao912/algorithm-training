function trailingZeroInFactorial(num) {
    let result = 0;
    for (i = 5; num / i > 1; i *= 5) {
        result = result + num / i;
    }
    return Math.floor(result);
}

console.log(trailingZeroInFactorial(120))