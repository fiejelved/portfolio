var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var livereload  = require('gulp-livereload');

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})
 
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('./sass/**/*.scss', ['sass']); 
  // Other watchers
})