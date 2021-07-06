class Virus extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 15;
        this.multiply = 0
    }
    getNewCoordinates() {
        super.getNewCoordinates()
    }
    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character)
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
    infect() {
        var emptyCells = this.chooseCell(1)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        var emptyCells1 = this.chooseCell(2)
        var newCell1 = emptyCells1[Math.floor(Math.random() * emptyCells1.length)]
        var emptyCells2 = this.chooseCell(3)
        var newCell2 = emptyCells2[Math.floor(Math.random() * emptyCells2.length)]
        var emptyCells3 = this.chooseCell(4)
        var newCell3 = emptyCells3[Math.floor(Math.random() * emptyCells3.length)]

        if (newCell1) {
            var newX = newCell1[0]
            var newY = newCell1[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break
                }
            }

        }
        else if (newCell2) {
            this.energy++
            var newX = newCell2[0]
            var newY = newCell2[1]
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
        else if (newCell3) {
            var newX = newCell3[0]
            var newY = newCell3[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in darkwizardArr) {
                if (newX == darkwizardArr[i].x && newY == darkwizardArr[i].y) {
                    darkwizardArr.splice(i, 1)
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
        if (this.energy == 0) {
            for (var i in virusArr) {
                if (this.x == virusArr[i].x && this.y == virusArr[i].y) {
                    virusArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}