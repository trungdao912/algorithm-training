// arrayToList
function arrayToList(array) {
    let num = array.shift();

    if (num == undefined) {
        return null;
    }
    let res = new Object({
        value: num,
        rest: arrayToList(array)
    })
    return res;
}
console.log(arrayToList([10,20,30]))
// listToArray
let result = [];
function listToArray(aList) {
    result.push(aList.value);
    if (aList.rest == null) {
        return;
    } else {
        listToArray(aList.rest);
    }
    return result;
}

// console.log(listToArray(arrayToList([1, 2, 3])))

// prepend
function prepend(num, obj) {
    if (obj == null || typeof(obj) != "object") {
        return new Object({
            value: num,
            rest: null
        })
    }
    return rest = {
        value: num,
        rest: obj
    }
}

// console.log(prepend(10, prepend(20, null)));