var gulp = require('gulp');
var pump = require('pump');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');

var publicPath = {
    src: "./public/src/",
    dest: "./public/dist/"
}

gulp.task("uglify", function(){
    pump([
        gulp.src(publicPath.src + "js/*"),
        uglify(),
        gulp.dest(publicPath.dest + "js/")
    ]);
});

gulp.task("concat", function(){
    pump([
        gulp.src([publicPath.src + "js/concat1.js", publicPath.src + "js/concat2.js", publicPath.src + "js/concat3.js"]),
        concat('concatenated.js'),
        gulp.dest(publicPath.dest + "js/")
    ]);
});

gulp.task("imagemin", function(){
    pump([
        gulp.src(publicPath.src + "img/*.jpg"),
        imagemin(),
        gulp.dest(publicPath.dest + "img/")
    ]);
});

gulp.task("default", ["uglify"]);

/*
gulp.task("hello", function(){
    return console.log("Hello");
});

gulp.task("gulp", ["hello"], function(){
    return console.log("gulp");
});

gulp.task("world", ["gulp"], function(){
    return console.log("world");
});
*/

