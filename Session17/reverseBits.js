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

function reverseBits(num) {
    let binaryForm = binaryConversion(num);
    let binaryRepresent = binary32(binaryForm);
    let reverseBinary = String(binaryRepresent).split('').reverse().join('');
    let newNum = 0;

    if (num === 0) {
        return 0;
    }

    for (let i = 0; i < reverseBinary.length; i++) {
        if (reverseBinary[i] === '1') {
            reverseBinary = reverseBinary.split('').slice(i, reverseBinary.length).join('');
            break;
        }
    }

    for (let i of reverseBinary) {
        newNum = newNum * 2 + Number(i);
    }

    return newNum;
}

console.log(reverseBits(3));
