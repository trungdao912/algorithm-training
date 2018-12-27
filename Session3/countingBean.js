function countBs(str) {
    let count = 0;

    for (i of str) {
        if ( i === 'B' ) {
            count++;
        }
    }

    return count;
}

function countChar(str, char) {
    let count = 0;

    for (i of str) {
        if ( i === char) {
            count++
        }
    }

    return count;
}
