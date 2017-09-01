var express = require('express');
var app = express();


//app.set("port", "3030");

app.get('/', function(req, res){
    res.send("hello gulpworld!!");
});

app.listen("3030", function(){
    console.log("Express server is listening at localhost:3030");
});
