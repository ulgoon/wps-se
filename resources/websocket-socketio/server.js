var express = require('express');
var app = express();

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

app.listen(app.get('port'), function(){
    console.log("Express server is listening on " + app.get('port'));
});
