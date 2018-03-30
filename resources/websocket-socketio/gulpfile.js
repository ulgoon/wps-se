var gulp = require('gulp');


gulp.task("hello", function(){
    return console.log("Gulp works!");
});

gulp.task("default", ["hello"]);
