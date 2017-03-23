var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('src/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('fonts', function() {
  return gulp.src('src/fonts/*')
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('build', ['sass', 'fonts'])
