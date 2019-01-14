function f1() {
    var a = 1;
    return function f2() {
        return a;
    }
    
}

const b = f1();
console.log(b());
