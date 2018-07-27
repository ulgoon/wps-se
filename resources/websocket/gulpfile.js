var gulp = require('gulp');


gulp.task('hello', function(){
    return console.log("hello gulp");
});

gulp.task('gulpworld', ['hello'], function(){
    return console.log("world");
});

gulp.task('default', ['gulpworld']);
