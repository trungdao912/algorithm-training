function zigZagString(str, row) {
    let distance = (row - 2) * 2 + 2;
    let result = '';
    let i = 0;

    while (i <= row - 1) {
        if (i === (row - 1)) {
            distance = (row - 2) * 2 + 2;
        }
        for (j = i; j < str.length; j = j + distance) {
            result = result + str[j];
        }
        distance = distance - 2;
        i++;
    }
    return result;
}
