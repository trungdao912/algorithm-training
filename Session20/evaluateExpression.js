function evaluateExpress(array) {
    let stack = [];
    let result = 0;
    debugger;

    for (let i of array) {
        if (i == '+') {
            if (stack.length === 1) {
                result = result + Number(stack.pop());
                break;
            }
            result = result + Number(stack.pop()) + Number(stack.pop());

        }
        if (i == '-') {
            if (stack.length === 1) {
                result = result - Number(stack.pop());
                break;
            }
            result = result + Number(stack.pop()) - Number(stack.pop() || 0);

        }
        if (i == '*') {
            if (stack.length === 1) {
                result = result * Number(stack.pop());
                break;
            }
            result = result + Number(stack.pop()) * Number(stack.pop() || 1);

        }
        if (i == '/') {
            if (stack.length === 1) {
                result = result / Number(stack.pop());
                break;
            }
            result = result + (1 / Number(stack.pop())) * Number(stack.pop() || 1);
 
        }
        if (i !== '+' && i !== '-' && i !== '*' && i !== '/') {
            stack.push(i);
        }
    }

    return Math.floor(result);
}
console.log( evaluateExpress(     ["4", "13", "5", "/", "+"]  ))