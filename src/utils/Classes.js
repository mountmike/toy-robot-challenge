export class TableTop {
    constructor() {
        this.grid = [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false]
        ]
    }
    placeRobot(x, y) {
        return this.grid.map(row => {
            row.map(el => true)
        })
        console.log(this.grid);
    }
}

export class Robot {
    constructor() {
        this.location = null
    }

    place() {
        this.location = [2, 2]
    }
}