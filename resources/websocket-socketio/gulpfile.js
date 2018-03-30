var gulp = require('gulp');


gulp.task("hello", function(){
    return console.log("Gulp works!");
});

gulp.task("gulpworld", ["hello"], function(){
    return console.log("Hello gulpworld!")
});

gulp.task("default", ["gulpworld"]);
