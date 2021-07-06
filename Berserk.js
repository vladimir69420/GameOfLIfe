class Berserk extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.multiply = 0
        this.energy = 30

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
        var newCell = random(emptyCells);


        if (newCell && this.multiply >= 15) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 7;

            var berserk = new Berserk(newX, newY);
            berserkArr.push(berserk);
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
        for (var i in berserkArr) {
            if (this.x == berserkArr[i].x && this.y == berserkArr[i].y) {
                berserkArr.splice(i, 1);
                break;
            }
        }
    }
}
