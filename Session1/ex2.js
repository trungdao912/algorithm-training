const merge = (arr, mergeArr) => {
    let first = [];
    let last = [];
    for (i of arr) {
        if (i[1] < mergeArr[0]) {
            first.push(i);
        }
        else if (i[0] > mergeArr[1]) {
            last.push(i);
        }
        else if (i[0] < mergeArr[0] && i[1] < mergeArr[1]) {
            mergeArr = [i[0], mergeArr[1]];
        }
        else if (i[0] < mergeArr[1] && i[1] > mergeArr[1]) {
            mergeArr = [mergeArr[0], i[1]];
        }
        else if (i[0] > mergeArr[0] && i[1] < mergeArr[1]) {
            continue;
        }
        else if (merge[0] > i[0] && merge[1] < i[1]) {
            mergeArr = [i[0], i[1]];
        }
    }
    if (first[0] && last[0]) {
        return [...first, mergeArr, ...last];
    } else if (first[0]) {
        return [...first, mergeArr];
    } else {
        return [mergeArr, ...last];
    }
}

console.log(merge([[3, 5], [6, 8]] , [1,9]));