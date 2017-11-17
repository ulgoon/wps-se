var gulp = require('gulp');
var pump = require('pump');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var cleancss = require('gulp-clean-css');
var clean = require('gulp-clean');

var publicPath = {
    src: "./public/src/",
    dest: "./public/dist/"
}

gulp.task("clean", function(){
    return pump([
        gulp.src(publicPath.dest + "*"),
        clean()
    ]);
});

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

gulp.task("cleancss", function(){
    pump([
        gulp.src(publicPath.src + "css/*"),
        cleancss(),
        gulp.dest(publicPath.dest + "css/")
    ]);
});

gulp.task("watch", function(){
    gulp.watch(publicPath.src + "js/*.js", ["uglify", "concat"]);

    //gulp.watch(publicPath.src + "css/*.css", ["clean", "uglify", "concat"]);
    //gulp.watch(publicPath.src + "img/*.jpg", ["clean", "uglify", "concat"]);
    //gulp.watch(publicPath.src + "scss/*.scss", ["clean", "uglify", "concat"]);

});

gulp.task("default", ["watch"]);

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

