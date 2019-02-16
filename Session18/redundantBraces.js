function redundantBraces(str) {
    let arr = [];
    let temp;
    let count = 0;

    debugger;

    for (let i of str) {
        if (i === '(' || i === '+' || i === '-' || i === '*' || i === '/') {
            arr.push(i);
        }

        if (i === ')') {
            while (arr[arr.length - 1] !== '(') {
                arr.pop();
                count++;
            }
            if (count === 0) {
                return false;
            }

            count = 0;
            arr.pop();
        }
    }

    return true;
}

console.log(redundantBraces('(a) + b'))