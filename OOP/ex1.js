class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.length = Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    plus(Vector) {
        return {x: Vector.x + this.x, y: Vector.y + this.y};
    }

    minus() {
        return {x: Vector.x - this.x, y: Vector.y - this.y};
    }
}

