const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');

// Compile Nunjucks templates
gulp.task('templates', function () {
  return gulp.src('src/templates/*.njk')
    .pipe(nunjucksRender({ path: ['src/templates/'] }))
    .pipe(gulp.dest('dist'));
});

// Minify CSS
gulp.task('styles', function () {
  return gulp.src('src/assets/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/assets/css'));
});

// Minify JS
gulp.task('scripts', function () {
  return gulp.src('src/assets/js/*.js')
    .pipe(terser())
    .pipe(gulp.dest('dist/assets/js'));
});

// Optimize images
gulp.task('images', function () {
  return gulp.src('src/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/images'));
});

// Default task
gulp.task('default', gulp.parallel('templates', 'styles', 'scripts', 'images'));
