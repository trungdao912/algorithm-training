let numbers = {

};

let numbers2 = {

};

function* genNum() {
    let i = 0;
    while (true) {
        i++;
        yield i;
    }
}

let gen = genNum();

numbers[Symbol.iterator] = () => {
    return {
        next: () => {
            let num = gen.next().value;
            let check = false;
            if (num > 100) {
                check = true;
            }
            return {value: num, done: check};            
        }
    }
}



