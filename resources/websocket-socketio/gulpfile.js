// gulp packages
var gulp = require('gulp');
var pump = require('pump');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');


// gulp informations
var publicPath = {
    src: './public/src/',
    dest: './public/dist/',
}

// gulp tasks
gulp.task("hello", function(){
    return console.log("Gulp works!");
});

gulp.task("gulpworld", ["hello"], function(){
    return console.log("Hello gulpworld!")
});

gulp.task("concat", function(){
    pump([
        gulp.src([publicPath.src + "main.js", publicPath.src + "main2.js"]),
        concat('main.min.js'),
        gulp.dest(publicPath.src)
    ]);
});

gulp.task("uglify", function(){
    pump([
        gulp.src(publicPath.src + 'main.min.js'),
        uglify(),
        gulp.dest(publicPath.dest)
    ]);
});

gulp.task("cleanCss", function(){
    pump([
        gulp.src(publicPath.src + '*.css'),
        cleanCss({compatibility: 'ie8'}),
        gulp.dest(publicPath.dest)
    ]);
});

// gulp default task
gulp.task("default", ["cleanCss"]);
