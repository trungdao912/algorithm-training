function range(num1, num2, steps) {
    let result = []
    if (steps === undefined) {
        if (num1 < num2) {
            for (let i = num1; i <= num2; i++) {
                result.push(i);
            }
        }
        if (num1 > num2) {
            for (let i = num1; i >= num2; i--) {
                result.push(i);
            }
        }
    } else {
        if (num1 < num2 && steps > 0) {
            for (let i = num1; i <= num2; i = i + steps) {
                result.push(i);
            }
        }

        if (num1 > num2 && steps < 0) {
            for (let i = num1; i >= num2; i = i + steps) {
                result.push(i);
            }
        }

        else {
            console.log('invalid input');
        }
    }
    return result;
}

function sum(arr) {
    let sum = 0;
    for (i of arr) {
        sum = sum + i;
    }
    return sum;
}

console.log(sum([1,2,3]));