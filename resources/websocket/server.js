var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);




app.set('port', process.env.PORT || 8888);
app.set('view engines', 'ejs');
app.engine('html', require('ejs').renderFile);

app.set('views', __dirname + '/views');


app.get('/', function(req,res){
    //res.send('Express server works!');
    res.render('index.html');
});

app.get('/chat', function(req,res){
    res.render('chat.html');
});

io.on('connection', function(socket){
    console.log('A user connected');

    socket.on("chat message", function(msg){
        console.log("message: " + msg);
        io.emit("chat message", msg);
    });

    socket.on('disconnect', function(){
        console.log('User Disconnected');
    });
});


http.listen(app.get('port'), function(){
    console.log('Express Server is running on localhost:' + app.get('port'));
});
