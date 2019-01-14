class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.length = Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    getCordinator() {
        return {x: this.x, y: this.y};
    }

    plus(Vec) {
        return {x: this.x + Vec.x, y: this.y + Vec.y}
    }
    minus(Vec) {
        return {x: this.x - Vec.x, y: this.y - Vec.y}
    }    
}
