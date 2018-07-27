var express = require('express');

var app = express();


app.set('port', process.env.PORT || 8888);

app.get('/', function(req,res){
    res.send('Express server works!');
});

app.listen(app.get('port'), function(){
    console.log('Express Server is running on localhost:' + app.get('port'));
});
