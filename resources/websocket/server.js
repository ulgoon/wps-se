var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.set("port", process.env.PORT || 8080);
app.get('/', function(req,res){
    //res.send("Chat start");
    res.sendFile(__dirname + '/views/index.html');
});

io.on("connection", function(socket){
    console.log("A user connected");
    socket.on("chat message", function(msg){
        console.log("message: ", msg);
    });
    socket.on("disconnect", function(){
        console.log("User disconnected");
    });
});

http.listen(app.get("port"), function(){
    console.log("Websocket Server is listening on localhost");
});
