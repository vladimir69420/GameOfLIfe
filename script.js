var socket = io()





Weather = "Spring"

socket.on("Send Weather", function (data){
    console.log(data);
    
    Weather = data
})


side = 20;

function setup() {
    createCanvas(30 * side, 30 * side);
    background("#353836");
}

function nkaritch(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[y][x];

            if (obj == 1) {
                
                
                
                if (Weather == "Spring") {
                fill("green");
                rect(x * side, y * side, side, side);
                }
                else if (Weather == "Summer") {
                    fill("#C4F013")
                    rect(x * side, y * side, side , side)

                }
                else if (Weather == "Autumn") {
                    fill("#FDB615")
                    rect(x * side, y * side, side, side)
                }
                else if (Weather == "Winter") {
                    fill(231, 231, 231)
                    rect(x * side, y * side, side, side)
                }

            }
            else if (obj == 0) {
                fill("#353836");
                rect(x * side, y * side, side, side);
            }
            else if (obj == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (obj == 3) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (obj == 4) {
                fill("fuchsia")
                rect(x * side, y * side, side, side);
            }
            else if (obj == 5) {
                fill("indigo")
                rect(x * side, y * side, side, side)
            }
            else if (obj == 6) {
                fill(29, 178, 44)
                rect(x * side, y * side, side, side)
            }
            else if (obj == 7) {
                fill("red")
                rect(x * side, y * side, side, side)
            }
            else if (obj == 8) {
                fill("white")
                rect(x * side, y * side, side, side)
            }
            else if (obj == 9) {
                fill("grey")
                rect(x * side, y * side, side, side)
            }
            else if (obj == 10) {
                fill(74, 77, 76)
                rect(x * side, y * side, side, side)
            }



        }
    }

}
   


    socket.on("send matrix" , nkaritch)


    function kill() {
        socket.emit("kill")
    }
    function addGrass() {
        socket.emit("add grass")
    }
    function addGrassEater() {
        socket.emit("add grassEater")
    }








