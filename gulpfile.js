var gulp = require('gulp')
var scsslint = require('gulp-scss-lint');

gulp.task('scss-lint', function() {
  gulp.src('/stylesheets/**/*.scss')
    .pipe(scsslint());
});