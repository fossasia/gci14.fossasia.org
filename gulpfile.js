var gulp = require('gulp')
var scsslint = require('gulp-scss-lint');
var jshint = require('gulp-jshint')
var jscs = require('gulp-jscs')
var imagemin = require('gulp-imagemin');

gulp.task('images-opt', function () {
    gulp.src('images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('images'));
    gulp.src('images/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('images'));
});

gulp.task('scss-lint', function() {
  gulp.src(['./stylesheets/**/*.scss', '!./stylesheets/external/*', '!./stylesheets/stylesheet.scss'])
    .pipe(scsslint({
      config: 'scss-lint-config.yml'
    }));
});

gulp.task('js-lint', function() {
  gulp.src(['./javascripts/main.js', './tests/*.js'])
    .pipe( jshint() )
    .pipe( jshint.reporter('default') )
    .pipe( jscs() );
});

gulp.task('lint', ['scss-lint', 'js-lint'], function() {
});

gulp.task('default', ['lint', 'images-opt'], function() {
});
