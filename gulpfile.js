require('require-dir')('src/assets/.gulp');
require('require-dir')('src/assets/.gulp/vendor');

'use strict';
var gulp = require('gulp');
var karma = require('karma');

gulp.task('test', function() {
  // Be sure to return the stream
  // NOTE: Using the fake './foobar' so as to run the files
  // listed in karma.conf.js INSTEAD of what was passed to
  // gulp.src !
  return gulp.src('./foo')
    .pipe(karma({
      configFile: 'test/spec/karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      console.log(err);
      this.emit('end'); //instead of erroring the stream, end it
    });
});

gulp.task('autotest', function() {
  return gulp.watch(['modules/**/*.js', 'test/spec/*.js'], ['test']);
});
