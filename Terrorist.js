let LivingCreature = require("./class.js")
module.exports = class Terrorist extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.multiply = 0
        this.powder = 0
        this.energy = 30
    }
    move() {
        this.energy--
        var emptyCells = this.chooseCell(0)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell && this.energy >= 0) {

            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY


        }
        else {
            if (this.energy < 0) {
                this.die()
            }
        }


    }

    blowUp() {

        let target =
            [
                [this.x - 1, this.y - 1],
                [this.x, this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x - 1, this.y],
                [this.x + 1, this.y],
                [this.x - 1, this.y + 1],
                [this.x, this.y + 1],
                [this.x + 1, this.y + 1]
            ]

        for (i in target) {
            let x = target[i][0]
            let y = target[i][0]


            if (matrix[y][x] == 1) {
                matrix[this.y][this.x] = 0;
                for (var i in grassArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }
            matrix[y][x] == 2
            if (matrix[y][x] == 2) {
                matrix[this.y][this.x] = 0;
                for (var i in grassEaterArr) {
                    if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }
            }
            matrix[y][x] == 3
            if (matrix[y][x] == 3) {
                matrix[this.y][this.x] = 0;
                for (var i in predatorArr) {
                    if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                        predatorArr.splice(i, 1);
                        break;
                    }
                }
            }
            matrix[y][x] == 4
            if (matrix[y][x] == 4) {
                matrix[this.y][this.x] = 0;
                for (var i in darkwizardArr) {
                    if (this.x == darkwizardArr[i].x && this.y == darkwizardArr[i].y) {
                        darkwizardArr.splice(i, 1);
                        break;
                    }
                }
            }
            matrix[y][x] == 6
            if (matrix[y][x] == 6) {
                matrix[this.y][this.x] = 0;
                for (var i in cactusArr) {
                    if (this.x == cactusArr[i].x && this.y == cactusArr[i].y) {
                        cactusArr.splice(i, 1);
                        break;

                    }
                }
            }
            else {
                this.move()
            }



        }
    }

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]


        if (newCell && this.multiply >= 15) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 8;

            var ter = new Terrorist(newX, newY);
            terroristArr.push(ter);
            this.multiply = 0;
        }
    }
    grab() {
        var emptyCells = this.chooseCell(10)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            this.powder++
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in gunpoArr) {
                if (newX == gunpoArr[i].x && newY == gunpoArr[i].y) {
                    gunpoArr.splice(i, 1)
                    this.powder++
                    break
                }
            }
        }
        else {
            
                this.move()
        }
    }


    die() {
        matrix[this.y][this.x] = 0;
        for (var i in terroristArr) {
            if (this.x == terroristArr[i].x && this.y == terroristArr[i].y) {
                terroristArr.splice(i, 1);
                break;
            }
        }
    }

}




