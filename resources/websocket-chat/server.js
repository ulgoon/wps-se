var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', process.env.PORT || 3030);
app.set('views', __dirname +'/views');

app.set('view engines', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req,res){
    res.render('index.html');
});

app.get('/chat', function(req,res){
    res.render('chat.html');
});

io.on('connection', function(socket){
    console.log("New user connected!");
    socket.on('chat message', function(msg){
        console.log("chat message: " + msg);
    });
    socket.on('disconnect', function(){
        console.log("user disconnected");
    });
});

http.listen(app.get('port'), function(){
    console.log("Express server is working on.. http://localhost:" + app.get('port'));
});
