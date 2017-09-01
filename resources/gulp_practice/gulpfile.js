var gulp = require('gulp');
var pump = require('pump');
var uglify = require('gulp-uglify');


var publicPath = {
    src:'./public/src/', 
    dest:'./public/dist/'
};

gulp.task("hello", function(){
    return console.log("hello");
});

gulp.task("gulp",["hello"] ,function(){
    return console.log("gulp");
});

gulp.task("world",["gulp"] ,function(){
    return console.log("world");
});

gulp.task("uglify", function(){
    pump([ 
        gulp.src(publicPath.src + '*.js'),
        uglify(),
        gulp.dest(publicPath.dest)
    ]);
});

gulp.task("default", ["uglify"]);
