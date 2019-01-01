function largestNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = String(arr[i]);
    }
    for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length; k++) {
            if (!compare(arr[j], arr[k])) {
                swap(arr, j, k);
            }

        }
    }
    return Number(arr.join(''));
    // return arr;
}

function swap(arr, pos1, pos2) {
    let temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
    return;
}

function compare(str1, str2) {
    if (str1.length === str2.length) {
        if (Number(str2) > Number(str1)) {
            return true;
        }
        return false;
    }
    if (str1.length > str2.length) {
        for (j = 0; j <str1.length; j++) {
            if (str2[j] == undefined) {
                if (Number(str1[str1.length]) > Number(str2[j - 1])) {
                    return false;
                }
                if (Number(str1[str1.length]) == Number(str2[j - 1])) {
                    return false;
                }
                return true;
            }
            if (Number(str1[j]) == Number(str2[j])) {
                continue;
            }
            if (Number(str1[j]) < Number(str2[j])) {
                return true;
            }
            if (Number(str1[j]) > Number(str2[j])) {
                return false;
            }
        }
    }
    for (j = 0; j <str2.length; j++) {  
        if (str1[j] == undefined) {
            if (Number(str2[str2.length]) < Number(str1[j - 1])) {
                return false;
            }
            if (Number(str2[str2.length]) == Number(str1[j - 1])) {
                return false;
            }
            return true;
        }
        if (Number(str2[j]) == Number(str1[j])) {
            continue;
        }
        if (Number(str2[j]) < Number(str1[j])) {
            return false;
        }
        if (Number(str2[j]) > Number(str1[j])) {
            return true;
        }  
    }
}
