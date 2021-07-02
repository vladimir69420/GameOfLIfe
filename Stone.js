
class Stone {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 67238456237527468572635467234574256247564;
        this.multiply = 0
    }

    mul() {
        this.multiplay++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);


        if (newCell && this.multiplay >= 7) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 6;

            var newStone = new Stone(newX, newY, 1);
            stoneArr.push(newStone);
            this.multiplay = 0;
        }
    }
}