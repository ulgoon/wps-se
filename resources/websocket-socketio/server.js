var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', process.env.PORT || 3030);
app.set('view engines', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');


app.get('/', function(req, res){
    //res.send("First Express works!");
    res.render('index.html');
});

app.get('/chat', function(req, res){
    res.render('chat.html');
});

io.on('connection', function(socket){
    console.log("Get ready for the new challenger!");
});

http.listen(app.get('port'), function(){
    console.log("Express server is listening on " + app.get('port'));
});
