var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3030);

app.get('/', function(req, res){
    res.send("First Express works!");
});

app.listen(app.get('port'), function(){
    console.log("Express server is listening on " + app.get('port'));
});
