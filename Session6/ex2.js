// Ex 2.1
function identify(args) {
    return args;
}
// Ex 2.2
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

// Ex 2.3
function identifyf(args) {
    return args => args
}

// Ex 2.4
function addf(num1) {
    return num2 => num1 + num2;
}

// Ex 2.5
function lift(fn) {
    return a => b => fn(a, b);
}

// Ex 2.6
function curry(fn, num) {
    return num2 => fn(num ,num2);
}

// Ex 2.7
// 1st
let inc = curry(add, 1);
// 2nd
let inc2 = addf(1);
// 3rd
let inc3 = lift(add)(1);

// Ex 2.8

function twice(fn) {
    return function(a) {
        return fn(a, a);
    }
}


// Ex 2.9
function reverse(fn) {
    return (num1,num2) => fn(num2, num1); 
}

// Ex 2.10

function composeu(fn1, fn2) {
    return num => fn2(fn1(num));
}

// Ex 2.11
function composeb(fn1, fn2) {
    return (num1, num2, num3) => fn2(fn1(num1, num2), num3)
}

// Ex 2.12
let limitVal;
function limit(fn, num) {
    limitVal = num;
    return (num1, num2) => {
        if (limitVal <= num) {
            limitVal++;
            return fn(num1, num2);
        } 
        return undefined;
    }
}

// Ex 2.13
let a;
function from(num) {
    a = num
    return () => {
        return a++;
    }
}

// Ex 2.14
function to(fn, endVal) {
    let count = fn();
    return () => {
        count++;
        if (count > endVal) {
            return undefined;
        }
        return fn() - 1;
    };
}

// Ex 2.15
function fromTo(num1, num2) {
    return () => {
        if (num1 < num2) {
            return num1++;
        } else {
            return undefined;
        }
    }
}

// Ex 2.16
function element(arr, fn) {
    return () => {
        return arr[fn() + 1];
    }
}

// Ex 2.17
let count17 = 0;
function element2(arr, fn) {
    if (fn !== undefined) {
        return () => {
            return arr[fn() + 1];
        }
    } else {
        return () => {
            count17++;
            return arr[count17 - 1];
        }
    }
}

// Ex 2.18
let result18 = [];
function collect(fn, array) {
    return () => {
        let val = fn();
        array.push(val);
        return val;
    }
}

// Ex 2.19
let val;
function filter(fn1, fn2) {
    return () => {
        let val = fn1();
        if (fn2(val)) {
            return val;
        } else {
            val = fn1()
            return val;
        }
    }
}

// Ex 2.20
function concat(fn1, fn2) {
    
    return () => {
        let res = fn1();    
        if (res !== undefined) {
            return res;
        } else {
            res = fn2();
            return res;
        }
    }
}

// Ex 2.21

let val21 = 1
function gensymf(symbol) {
    return () => {
        val21++;
        return symbol + (val21 - 1);
    }
}

// Ex 2.22
function gensymff(fn, num) {
    val21 = fn(num);
    return (symbol) => {
        return () => {
            val21++;
            return symbol + (val21 - 1);
        }
    }
}

// Ex 2.23
function fibonacci(num1, num2) {

    return () => {
        num1++;
        return fibGen(num1);

    }
}

function fibGen(num) {
    if (num == 1) {
        return 0;
    }
    if (num <= 3) {
        return 1;
    }
    return fibGen(num - 1) + fibGen(num - 2);
}

// Ex 2.24
function counter(num) {
    return {
        up: () => {
            return () => {
                return ++num;
            };
        },
        down: () => {
            return () => {
                return --num;
            }
        }
    }
}

// Ex 2.25
function revocable(fn) {
    return {
        invoke: () => {
            return fn;
        },
        revoke: () => {
            return () => {
                return undefined;
            }
        }
    }
}

// Ex 2.26
function exp(arr) {
    if (typeof(arr) == "number") {
        return arr;
    }
    return arr[0](arr[1], arr[2]);
}

// Ex 2.27


// Ex 2.28
function addg(num1) {
    if (num1 == undefined) {
        return undefined
    }

    return (num2) => {
        if (num2 == undefined) {
            return add(num1, 0);
        }
        res = num1 + num2;
        return addg(res);
    }
}

// Ex 2.29
function liftg(fn) {
    return callback;

    function callback(num1) {
        if (num1 == undefined) {
            return undefined;
        }
        return (num2) => {

            if (num2 == undefined) {
                return fn(num1, 1);
            }

            return callback(num2)
            
        }
    }
}



console.log(liftg(mul)(3)(4)(5)())

// Ex 2.30
const result = []
function arrayg(num) {
    if (num == undefined) {
        return result;
    }
    return (num2) => {
        result.push(num);
        return arrayg(num2);
    }
}





















