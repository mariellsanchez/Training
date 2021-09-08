var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
  return gulp.src('./scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
// }

// exports.default = defaultTask