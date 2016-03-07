var gulp           = require('gulp');
var gulpMinifyCSS  = require('gulp-minify-css');
var gulpRename     = require('gulp-rename');
var gulpSass       = require('gulp-sass');
var gulpSourcemaps = require('gulp-sourcemaps')

gulp.task('styles', function() {
  return gulp.src('src/**/*.scss')
    .pipe(gulpSourcemaps.init())
      .pipe(gulpSass())
    .pipe(gulpSourcemaps.write('/'))
    .pipe(gulp.dest('dist'))
});

gulp.task('styles:min', function() {
  return gulp.src('src/**/*.scss')
    .pipe(gulpSourcemaps.init())
      .pipe(gulpSass())
      .pipe(gulpMinifyCSS())
      .pipe(gulpRename({
        suffix: '.min'
      }))
    .pipe(gulpSourcemaps.write('/'))
    .pipe(gulp.dest('dist'));
})

gulp.task('watch', function() {
  gulp.watch('src/**/*.scss', [
    'styles',
    'styles:min'
  ]);
});

gulp.task('default', [
  'styles',
  'styles:min',
  'watch'
]);

