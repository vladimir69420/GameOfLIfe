var express = require("express");
var app = express();
var server = require('http').Server(app);
app.use(express.static("."));
let io = require("socket.io")(server);
var fs = require("fs");

app.get('/', function (req, res) {
    res.redirect('index.html')
})

server.listen(3000);

matrix = [];

function generator(matLen, gr, grEat, pred, darkwiz, vir, cactus, berserk, ter, gun) {

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


    io.sockets.emit("send matrix", matrix)
    return matrix;
}

matrix = generator(30, 80, 20, 30, 10, 6, 10, 15, 10, 10);

grassArr = []
grassEaterArr = []
predatorArr = []
darkwizardArr = []
virusArr = []
cactusArr = []
berserkArr = []
stoneArr = []
terroristArr = []
gunpoArr = []

Grass = require("./Grass")
GrassEater = require("./GrassEater")
Predator = require("./Predator")
Darkwizard = require("./DarkWizard")
Virus = require("./Virus")
Cactus = require("./Cactus")
Berserk = require("./Berserk")
Terrorist = require("./Terrorist")
Stone = require("./Stone")
GunPowder = require("./GunPowder")

function createObject(matrix) {
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
                var gunpo = new GunPowder(x, y)
                gunpoArr.push(gunpo)
            }
        }
    }

    io.sockets.emit("send matrix", matrix)

}

function game() {
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
    console.log(matrix[0]);
    io.sockets.emit("send matrix", matrix)

}

setInterval(game, 1000)

// ######################################################

io.on("connection", function (socket) {
    createObject(matrix)
    socket.on("kill", kill);
    socket.on("add grass", addGrass);
    socket.on("add grassEater", addGrassEater);
 })

// ######################################################



var statistics = {}

setInterval(function () {
    statistics.Grass = grassArr.length
    statistics.GrassEater = grassEaterArr.length
    statistics.Predator = predatorArr.length
    statistics.Darkwizard = darkwizardArr.length
    statistics.Virus = virusArr.length
    statistics.Cactus = cactusArr.length
    statistics.Berserk = berserkArr.length
    statistics.Terrorist = terroristArr.length
    statistics.GunPowder = gunpoArr.length


    fs.writeFileSync("statistics.json",
        JSON.stringify(statistics))

}, 1000)

// ######################################################

function kill() {
    grassArr = [];
    grassEaterArr = []
    predatorArr = []
    darkwizardArr = []
    virusArr = []
    berserkArr = []
    cactusArr = []
    terroristArr = []
    gunpoArr = []
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
    io.sockets.emit("send matrix", matrix);
}


function addGrass() {
    for (var i = 0; i < 7; i++) {
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
            var gr = new Grass(x, y, 1)
            grassArr.push(gr)
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function addGrassEater() {
    for (var i = 0; i < 7; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
            grassEaterArr.push(new GrassEater(x, y, 2))
        }
    }
    io.sockets.emit("send matrix", matrix);
}

// ######################################################




Weather = "Spring"
function chWeather() {
    console.log(Weather);
    
    if (Weather == "Spring") {
        Weather = "Summer"
    }
    else if (Weather == "Summer") {
        Weather = "Autumn"
    }
    else if (Weather == "Autumn") {
        Weather = "Winter"
    }
    else if (Weather == "Winter") {
        Weather = "Spring"
    }
    io.sockets.emit("Send Weather", Weather)
}

setInterval(chWeather, 8000)





    









