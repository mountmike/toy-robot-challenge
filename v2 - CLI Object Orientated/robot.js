export class Robot {
    constructor() {
        this.facing = null;
        this.row = null;
        this.col = null;
    }

    place(x, y, direction) {
        this.row = x;
        this.col = y
        this.facing = direction
    }
}