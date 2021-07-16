let LivingCreature = require("./class.js")
module.exports = class Darkwizard extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 20;
        this.multiply = 0
    }
    getNewCoordinates() {
        super.getNewCoordinates()
    }
    chooseCell(character) {
        this.getNewCoordinates()

        return super.chooseCell(character)
    }

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]


        if (newCell && this.multiply >= 15) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            var wiz = new Darkwizard(newX, newY);
            darkwizardArr.push(wiz);
            this.multiply = 0;
        }
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
    kill() {
        var emptyCells = this.chooseCell(3)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            this.energy++
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1)
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
        for (var i in darkwizardArr) {
            if (this.x == darkwizardArr[i].x && this.y == darkwizardArr[i].y) {
                darkwizardArr.splice(i, 1);
                break;
            }
        }

    }
}

