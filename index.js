var express = require('express'),
    http = require('http'),
    path = require('path'),
    ioServer = require('socket.io'),
    app = express(),
    port = process.env.PORT || 80;


//app.configure(function () {
//    app.use(express.static(path.join(__dirname, 'public')));
//});
app.get('/', function (req, res) {
    res.send("Come back soon");
});

var server = http.createServer(app).listen(port, function () {
    console.log("Express server listening on port " + port);
});

var io = ioServer.listen(server);
io.sockets.on('connection', function (socket) {
    socket.emit("message", "Welcome to Kennybll");
});
