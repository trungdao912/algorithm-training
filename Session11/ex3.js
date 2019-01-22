function foo(...a) {
    let res = a.filter((num) => {
        if (num < 4 || num > 6) {
            return num;
        }
    })
    
    return res;
}

function bar() {
  var a1 = [2, 4];
  var a2 = [6, 8, 10, 12];

  return foo(...a1, ...a2);
}

// DO NOT MODIFY BELOW CODE
console.log(bar().join('') === '281012');
// // true


