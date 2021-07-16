class Stone {
    mul() {
        this.multiplay++;
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]


        if (newCell && this.multiplay >= 7) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 9;

            var newCactus = new Cactus(newX, newY, 1);
            cactusArr.push(newCactus);
            this.multiplay = 0;
        }
    }
}