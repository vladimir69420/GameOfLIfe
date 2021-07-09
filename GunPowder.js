class GunPowder extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.multiply = 0

    }
    mul() {
        this.multiplay++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);


        if (newCell && this.multiplay >= 7) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 10;

            var newGunpo = new GunPowder(newX, newY, 1);
            gunpoArr.push(newGunpo);
            this.multiplay = 0;
        }
    }
}