class Group {
    constructor() {
        this.numbers = [];
    }

    add(num) {
        this.numbers.push(num);
    }

    has(num) {
        return this.numbers.includes(num);
    }

    delete(num) {
        this.numbers.splice(this.numbers.indexOf(num), 1);
    }

    static from(array) {
        let group = new Group();
        for (let i of array) {
            group.add(i);
        }
        return group;
    }
}

