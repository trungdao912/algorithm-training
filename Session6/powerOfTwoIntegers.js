function powerOfTwoInteger(num) {
    let n = 2;

    while (n <= 32) {
        let temp = 1 / n;
        if (Math.pow(Math.floor(Math.pow(num, temp)), n) == num) {
            return true;
        };
        n++;
    }
    return false;
}