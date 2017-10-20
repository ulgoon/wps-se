var gulp = require('gulp');
var pump = require('pump');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var cleancss = require('gulp-clean-css');


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

gulp.task("concat", ["uglify"], function(){
    pump([ 
        gulp.src([publicPath.dest + 'pretty.js', publicPath.dest + 'pretty1.js']),
        concat('concatenated.js'),
        gulp.dest(publicPath.dest)
    ]);
});

gulp.task("imagemin", function(){
    pump([
        gulp.src(publicPath.src + "*.jpg"),
        imagemin(),
        gulp.dest(publicPath.dest)
    ]);
});

gulp.task("cleancss", function(){
    pump([
        gulp.src(publicPath.src + "*.css"),
        cleancss(),
        gulp.dest(publicPath.dest)
    ]);
});

gulp.task("default", ["concat"]);















