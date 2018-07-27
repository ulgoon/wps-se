var express = require('express');


var app = express();


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

app.listen(app.get('port'), function(){
    console.log('Express Server is running on localhost:' + app.get('port'));
});
