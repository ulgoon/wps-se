var gulp = require('gulp');


gulp.task("hello", function(){
    return console.log("hello gulpworld");
});

gulp.task("default", ["hello"]);
