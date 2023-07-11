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

    showGrid(robot) {
        console.log("\n");

        const output = this.grid.map((row, rowIndex) => {
            return row.map((col, colIndex) => {
                if (rowIndex == robot.row && colIndex == robot.col) {
                    return "[X]"
                } else {
                    return "[ ]"
                }
            })
        })

        output.reverse().map(row => {
            console.log(row.join(""));
        })
        
        console.log("\n");
    }
}
