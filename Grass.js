let LivingCreature = require("./class.js")
module.exports = class Grass extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.multiply = 0
    }

    getNewCoordinates() {
        super.getNewCoordinates()
    }


    chooseCell(character) {
        return super.chooseCell(character)

    }

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]


        if (newCell && this.multiply >= 15) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var gr = new Grass(newX, newY);
            grassArr.push(gr);
            this.multiply = 0;
        }
    }
}