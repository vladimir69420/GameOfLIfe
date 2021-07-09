class Terrorist extends LivingCreature {
    constructor(x, y){
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
    
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);


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