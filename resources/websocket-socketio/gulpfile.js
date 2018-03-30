// gulp packages
var gulp = require('gulp');
var pump = require('pump');
var uglify = require('gulp-uglify');


// gulp informations
var publickPath = {
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

gulp.task("uglify", function(){
    pump([
        gulp.src(publickPath.src + '*.js'),
        uglify(),
        gulp.dest(publickPath.dest)
    ]);
});

// gulp default task
gulp.task("default", ["uglify"]);
