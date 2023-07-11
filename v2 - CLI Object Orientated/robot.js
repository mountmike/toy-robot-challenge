export class Robot {
    constructor() {
        this.facing = null;
        this.row = null;
        this.col = null;
    };

    place(x, y, direction) {
        this.row = x;
        this.col = y
        this.facing = direction
    };

    move() {
        if (this.facing == "NORTH") {
            if (this.row > 3) {
                console.log("\n" + "The robot can't go any further or he will fall off the table top")
                return
            }
            this.row += 1;
        } else if (this.facing == "EAST") {
            if (this.col > 3) {
                console.log("\n" + "The robot can't go any further or he will fall off the table top")
                return
            }
            this.col += 1;
        } else if (this.facing == "SOUTH") {
            if (this.row < 1) {
                console.log("\n" + "The robot can't go any further or he will fall off the table top")
                return
            }
            this.row -= 1;
        } else if (this.facing == "WEST") {
            if (this.col < 1) {
                console.log("\n" + "The robot can't go any further or he will fall off the table top")
                return
            }
            this.col -= 1;
        } 
    };

    rotate(direction) {
        const compass = ["NORTH", "EAST", "SOUTH", "WEST"]
        const currentIndex = compass.indexOf(this.facing) 

        if (direction == "right") {
            if (currentIndex >= 3) {
                this.facing = compass[0]
            } else {
                this.facing = compass[currentIndex + 1]
            }
            return
        }

        if (direction == "left") {
            if (currentIndex < 1) {
                this.facing = compass[3]
            } else {
                this.facing = compass[currentIndex - 1]
            }
            return
        }

    };

    report() {
        console.log(
            "\n" +
            `The robot is currently at position ${this.row}, ${this.col} (marked with an 'X') and facing ${this.facing}` +
            "\n"
        );
    };
};