var scsslint = require('gulp-scss-lint');

gulp.task('scss-lint', function() {
  gulp.src('/scss/*.scss')
    .pipe(scsslint());
});