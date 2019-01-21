// function arraySearch(array, num) {
//     if (array.includes(num)) {
//         return array.indexOf(num);
//     }
//     for (let i of array) {
//         if (i > num) {
//             return array.indexOf(i);
//         }
//     }
//     return array.length;
// }

// console.log(arraySearch([1,3,5], 5));

function arraySearch(array, start, end, num) {
    let mid = Math.floor((start + end) / 2);
    debugger;
    while (start <= end) {
        if (array[mid] == num) {
            return mid;
        }
    
        if (array[mid] > num) {
            return arraySearch(array, 0, mid - 1, num);
        }
        
        if (array[mid] < num) {
            return arraySearch(array, mid + 1, end, num);
        }
    }

    if (end < start) {
        return mid + 1;
    }
}

console.log(arraySearch([1,3,5,6], 0, 3, 0))