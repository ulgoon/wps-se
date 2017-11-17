var gulp = require('gulp');

var publicPath = {
    src: "./public/src/",
    dest: "./public/dist/"
}

gulp.task("hello", function(){
    return console.log("Hello");
});

gulp.task("gulp", ["hello"], function(){
    return console.log("gulp");
});

gulp.task("world", ["gulp"], function(){
    return console.log("world");
});

gulp.task("default", ["world"]);
