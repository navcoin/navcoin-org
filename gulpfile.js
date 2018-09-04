var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('themes/nav-community-v1/static/css/nav.scss')
    .pipe(sass())
    .pipe(gulp.dest('themes/nav-community-v1/static/css'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./themes/nav-community-v1/static/css/*.scss', ['sass']);
});