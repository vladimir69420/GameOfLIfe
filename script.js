function generator(matLen, gr, grEat, pred, darkwiz, vir, cactus, berserk, ter, gun) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pred; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < darkwiz; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < vir; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }
    for (let i = 0; i < cactus; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 6;
        }
    }
    for (let i = 0; i < berserk; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 7;
        }
    

    }
    for (let i = 0; i < ter; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 8;
        }
    

    }
    for (let i = 0; i < gun; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 10;
        }
    

    }


    
    return matrix;
}

let side = 20;
let matrix = generator(15, 30, 15, 3, 1, 1, 3, 1, 2, 1, 2);

var grassArr = []
var grassEaterArr = []
var predatorArr = []
var darkwizardArr = []
var virusArr = []
var cactusArr = []
var berserkArr = []
var stoneArr = []
var terroristArr = []
var gunpoArr = []

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            }
            else if (matrix[y][x] == 3) {
                var predat = new Predator(x, y)
                predatorArr.push(predat)
            }
            else if (matrix[y][x] == 4) {
                var darkwiz = new Darkwizard(x, y)
                darkwizardArr.push(darkwiz)
            }
            else if (matrix[y][x] == 5) {
                var vir = new Virus(x, y)
                virusArr.push(vir)
            }
            else if (matrix[y][x] == 6) {
                var cactus = new Cactus(x, y)
                cactusArr.push(cactus)
            }
            else if (matrix[y][x] == 7) {
                var berserk = new Berserk(x, y)
                berserkArr.push(berserk)
            }
            else if (matrix[y][x] == 8) {
                var ter = new Terrorist(x, y)
                terroristArr.push(ter)
            }
            else if (matrix[y][x] == 9) {
                var stone = new Stone(x, y)
                stoneArr.push(stone)
            }
            else if (matrix[y][x] == 10) {
                var gunpo = new GunPowder(x,y)
                gunpoArr.push(gunpo)
            }
        }
    }

}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("fuchsia")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("indigo")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 6) {
                fill(29, 178, 44)
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 7) {
                fill("red")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 8){
                fill("white")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 9){
                fill("grey")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 10){
                fill(74, 77, 76)
                rect(x * side, y * side, side, side)
            }



        }
    }


    for (var i in grassArr) {
        grassArr[i].mul();

    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].mul();
        grassEaterArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].mul();
        predatorArr[i].eat();

    }
    for (var i in darkwizardArr) {
        darkwizardArr[i].mul();
        darkwizardArr[i].kill();
    }
    for (var i in virusArr) {
        virusArr[i].infect();
    }
    for (var i in cactusArr) {

    }
    for (var i in berserkArr) {
        berserkArr[i].kill();
    }
    for (var i in terroristArr) {
        terroristArr[i].grab()
    }
    for (var i in stoneArr) {

    }
    for (var i in gunpoArr) {

    }
}



