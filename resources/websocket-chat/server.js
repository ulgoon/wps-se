var express = require('express');
var app = express();

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

app.listen(app.get('port'), function(){
    console.log("Express server is working on.. http://localhost:" + app.get('port'));
});
