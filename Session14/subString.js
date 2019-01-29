function subString(str, subString) {
    let arr = lpr(subString);
    let j = 0;
    let i = 0;
    for (i = 0; i < str.length; i++) {
        if (subString.length === j) {
            return i - j;
        }
        while (j > 0 && str[i] !== subString[j]) {
            j = arr[j - 1];
        }
        if (str[i] === subString[j]) {
            j++;
        }
    }
    if (j === 0) {
        return -1;
    };
    return i - j;
}

function lpr(str) {
  let arr = new Array(str.length);
  arr[0] = 0;
  let j = 0;
  for (i = 1; i < str.length; i++) {
    while (j > 0 && str[i] !== str[j]) {
      j = arr[j - 1];
      arr[i] = j;
    }
    if (str[i] === str[j]) {
      j++;
      arr[i] = j;
    }
    arr[i] = j;
  }

  return arr;
}

console.log(subString("a", "aba"));
