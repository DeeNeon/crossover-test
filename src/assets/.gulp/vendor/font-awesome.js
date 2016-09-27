'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var minify = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');

var onError = function(err) {
  console.log(err.toString());
  this.emit('end');
};

gulp.task('vendor:font-awesome:styles', function() {

  return gulp.src('src/assets/vendor/font-awesome/css/font-awesome.min.css')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('vendor:font-awesome:fonts', function() {
  return gulp.src('src/assets/vendor/font-awesome/fonts/*')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest('dist/assets/fonts'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('vendor:font-awesome', ['vendor:font-awesome:styles',
  'vendor:font-awesome:fonts'
]);
