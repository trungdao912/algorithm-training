var nonSortedArray = ["b", "d", "a", "c"];
var reverseSortedArray = nonSortedArray.sort(function (a, b) {
      return a.localeCompare(b);
    });
console.log(reverseSortedArray); // ["yo", "whatup", "lol", "hi", "bye"]
