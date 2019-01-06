/* Read File */
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json', 'utf-8'));

/* Exercise 1 */
const arr1 = []
data.forEach((data) => {
    let result = `${data.first_name} ${data.last_name}`;
    arr1.push(result);
})

/* Exercise 2 */
const arr2 = [];
data.filter((data) => {
    if (data.age < 40) {
        arr2.push(data);
    }
})

/* Exercise 3 */
const res = data.map((data) => {
    return `${data.first_name} ${data.last_name}`
})

/* Exercise 4*/
// data.map((data) => {
//     data["firstName"] = data["first_name"]
//     delete data["first_name"]
// })
// console.log(data);

/* Exercise 5 */

// let result = (data.reduce((a, data) => {
//     a = (a + data.age)
//     return a
// }, 0)) / data.length

// console.log(result)

/* Exercise 6 */
// Ex1
let result2 = data.reduce((a, data) => {
    let temp = `${data.first_name} ${data.last_name}`
    return a.concat(temp);
}, [])
// Ex2
let result3 = data.reduce((a, data) => {
    let temp;
    if (data.age < 40) {
        temp = data;
        a = a.concat(temp);
    }
    return a;
}, [])

// Ex4


/* Exercise 7 */
function map(arr, transform) {
    let result = [];
    for (i of arr) {
        result.push(transform(i));
    }
    return result;
}

/* Exercise 8 */
function filter(arr, transform) {
    let result = [];
    for (i of arr) {
        if (transform(i)) {
            result.push(i);
        }
    }
    return result;
}

/* Exercise 9 */
function reduce(arr, callback, defaultValue) {
    let result = (defaultValue || arr[0]);
    let count;

    result == arr[0] ? count = 1 : count = 0;
    if (typeof(result) !== "object") {
        for (count; count < arr.length; count++) {
            result = callback(result, arr[count]);
        }
    } else {
        for (count; count < arr.length; count++) {
            let temp;
            temp = callback(arr[count]);
            if (typeof(callback(arr[count])) == "boolean") {
                if (callback(arr[count])) {
                    result.push(arr[count]);
                }
                continue;
            } else {
                result.push(temp);
            }
            
        }
    }

    return result;
}

/* Exercise 10 */
// map
function map(arr, callback) {
    return reduce(arr, callback, []);
}

// console.log(map([1,2,3,4], (a) => {
//     return a + 1;
// }))

// filter
function filter(arr, callback) {
    return reduce(arr, callback, []);
}
console.log(filter([1,2,3,4,5], (a) => {
    return a > 3;
}));

/* Exercise 11 */
// sum
function sum(arr) {
    const result = arr.reduce((accumulator, currentVal) => {
        return accumulator + currentVal;
    }, 0)
    return result;
}

// reverse
function reverse(arr) {
    const result = arr.reduce((accumulator, currentVal) => {
            accumulator.unshift(currentVal);
            return accumulator;
    }, [])
    return result;
}

