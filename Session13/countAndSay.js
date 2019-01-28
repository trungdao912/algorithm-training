function countAndSay(num) {
    let result = "1";
    let n = 2;
    let count;
    
    while (n <= num) {
        let temp = "";
        count = 1;
        for (let i = 0; i < result.length; i++) {
            if (result[i] === result[i + 1]) {
                count++;
                continue;
            } else {
                temp = temp + count + String(result[i]);
                count = 1;
            }
        }
        result = temp;
        n++;
    }
    return result;
}


