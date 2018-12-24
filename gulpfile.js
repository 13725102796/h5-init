// include gulp 
var gulp = require('gulp');
// include plug-ins 
var autoprefix = require('gulp-autoprefixer');
// JS hint task 
gulp.task('style', function () {
  gulp.src(['./css/*.css'])
    .pipe(autoprefix('last 2 versions'))
    .pipe(gulp.dest('./build/css'));
});