function stringPalindromic(str) {
    let count = 0;
    let tempStr = '';
    let newStr = '';
    debugger;
    if (checkEqual(str)) {
        return 0;
    };
    
    for (let i = str.length - 1; i >= 0; i--) { 
        tempStr = tempStr + str[i];
        newStr = tempStr + str;
        count++;
        if (checkEqual(newStr)) {
            return count;
        }
    }
}

function checkEqual(str) {
    let arr1 = str.split('');
    let arr2 = str.split('').reverse();
    let count = 0;

    arr1.forEach((el, index) => {
        if (el === arr2[index]) {
            count++;
        }
    });

    if (count === arr2.length) {
        return true;
    };

    return false;
}

console.log(stringPalindromic("ABCDE"))