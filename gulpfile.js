var gulp = require('gulp')
var scsslint = require('gulp-scss-lint');

var myCustomReporter = function(file) {
  console.log(file);
  if (!file.scsslint.success) {
    console.log(file.scsslint.issues.length + ' issues found in ' + file.path);
  }
};

gulp.task('scss-lint', function() {
  gulp.src('./stylesheets/**/*')
    .pipe(scsslint({
      customReport: myCustomReporter
    }));
});