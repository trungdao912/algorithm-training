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