var express = require('express');
var app = express();

var http = require('http').Server(app);

app.set("port", process.env.PORT || 8080);

app.get('/', function(req,res){
    res.send("Chat start");
});

http.listen(app.get("port"), function(){
    console.log("Websocket Server is listening on localhost");
});
