var socket = io()



side = 60;

function setup() {
    createCanvas(15 * side, 13 * side);
    background("#acacac");
}

function nkaritch(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[y][x];

            if (obj == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (obj == 0) {
                fill("#acacac");
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
   

setInterval(
    function () {
        socket.on("send matrix" , nkaritch)
    }, 1000)



