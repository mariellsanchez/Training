const { series } = require('gulp');

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var uglifycss = require('gulp-uglifycss');

gulp.task('sass', function(cb) {
  return gulp.src('./scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
    cb();
});

gulp.task('css', function(done) {
  gulp.src('./css/*.css')
    .pipe(uglifycss({
      "maxLineLen" : 80,
      "uglyComments" : true
    }))
    .pipe(gulp.dest('./dist/'));
    done();
});

gulp.task('run', gulp.series('sass', 'css'), cb => {
  cb();
});

gulp.task('watch', function(){
   gulp.watch('./scss/*.scss', gulp.series('sass'));
   gulp.watch('./css/*.css', gulp.series('css'));
});

exports.default = series('run', 'watch');