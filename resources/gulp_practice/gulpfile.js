var gulp = require('gulp');


gulp.task("hello", function(){
    return console.log("hello");
});

gulp.task("gulp",["hello"] ,function(){
    return console.log("gulp");
});

gulp.task("world",["gulp"] ,function(){
    return console.log("world");
});

gulp.task("default", ["world"]);
