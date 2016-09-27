'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jade = require('gulp-jade');
var browserSync = require('browser-sync');

var onError = function(err) {
  console.log(err.toString());
  this.emit('end');
};

gulp.task('main:html', function() {
  gulp.src('src/*.jade')
    .pipe(jade({
      pretty:true
    }))
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream:true}));
});
