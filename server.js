var express = require("express")
var app = express();
var server = require('http').Server(app);

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
})

server.listen(3000);