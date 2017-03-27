var express = require('express'),
    http = require('http'),
    path = require('path'),
    ioServer = require('socket.io'),
    app = express(),
    port = process.env.PORT || 80;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

var server = http.createServer(app).listen(port, function () {
    console.log("Express server listening on port " + port);
});

var io = ioServer.listen(server);
io.sockets.on('connection', function (socket) {
    socket.emit("message", "Welcome to Kennybll");
});
