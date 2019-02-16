function numberOf1Bits(num) {
    let binaryForm = binaryConversion(num);
    let binaryRepresent = binary32(binaryForm).split('');
    let count = 0;

    for (let i of binaryRepresent) {
        if (i === '1') {
            count++;
        }
    }

    return count;
}

function binaryConversion(num) {
    
    let newNum = Math.floor(num / 2);

    if (num == 1) {
        return "1";
    }
    return binaryConversion(newNum) + (num % 2);
}

function binary32(str) {
    while (str.length < 32) {
        str = '0' + str;
    }
    
    return str;
}