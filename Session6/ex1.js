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
// data.map((data) => {
//     data["firstName"] = data["first_name"]
//     delete data["first_name"]
// })
// console.log(data);

/* Exercise 4 */
let count = 1;
let result = data.reduce((a, data, b) => {
    a = a + data.age
    a = a / (b + 1)
    return a
}, 0)

console.log(result)