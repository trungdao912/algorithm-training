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


// Ex 2.9
function reverse(fn) {
    return (num1,num2) => fn(num2, num1); 
}

// Ex 2.10

function composeu(fn1, fn2) {
    return num => fn2(fn1(num));
}
