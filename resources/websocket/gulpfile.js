var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');

var publicPath = {
    src : './public/src/',
    dest: './public/dist/'
}

gulp.task('hello', function(){
    return console.log("hello gulp");
});

gulp.task('gulpworld', ['hello'], function(){
    return console.log("world");
});

gulp.task('js-uglify', function(){
    pump([
        gulp.src(publicPath.src + 'js/uglify.js'),
        uglify(),
        gulp.dest(publicPath.dest + 'js/')
    ]);
});

gulp.task('default', ['gulpworld']);
