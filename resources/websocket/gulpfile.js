var gulp = require('gulp');

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

gulp.task('default', ['gulpworld']);
