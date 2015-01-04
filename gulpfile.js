var gulp = require('gulp')
var scsslint = require('gulp-scss-lint');
var jshint = require('gulp-jshint')
var jscs = require('gulp-jscs')

gulp.task('scss-lint', function() {
  gulp.src(['./stylesheets/**/*.scss', '!./stylesheets/external/*', '!./stylesheets/stylesheet.scss'])
    .pipe(scsslint({
      config: 'scss-lint-config.yml'
    }));
});

gulp.task('js-lint', function() {
  gulp.src('./javascripts/main.js')
    .pipe( jshint() )
    .pipe( jshint.reporter('default') )
    .pipe( jscs({
      // preset: "jquery",
      // validateQuoteMarks: "'",
      // disallowMultipleLineBreaks: null,
      // disallowMultipleVarDecl: null,
      // validateLineBreaks: "CRLF"
    }) );
});

gulp.task('lint', ['scss-lint', 'js-lint'], function() {
  console.log('Linting: ');
});

gulp.task('default', ['lint'], function() {
});