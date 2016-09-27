'use strict';

var gulp = require('gulp');
var del = require('del');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');



var onError = function(err) {
  console.log(err.toString());
  this.emit('end');
};

gulp.task('clean', function(cb) {
  del(['dist'], cb);
});

gulp.task('main:images', function() {
  return gulp.src('src/assets/images/**/*')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest('dist/assets/images'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('main:fonts', function() {
  return gulp.src('src/assets/fonts/**/*')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest('dist/assets/fonts'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('main:icons', function() {
  return gulp.src('src/assets/icons/**/*')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest('dist/assets/icons'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('main:controllers', function() {
  return gulp.src('controllers/**/*')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest('dist/controllers'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('main:helpers', function() {
  return gulp.src('helpers/**/*')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest('dist/helpers'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('main:models', function() {
  return gulp.src('models/**/*')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest('dist/models'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('main:modules', function() {
  return gulp.src('modules/**/*')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest('dist/modules'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('main:routes', function() {
  return gulp.src('routes/**/*')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest('dist/routes'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('main:scripts-app', function() {
  return gulp.src('scripts/**/*')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('main:videos', function() {
  return gulp.src('videos/**/*')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest('dist/videos'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('main:static',
  ['main:images', 'main:fonts', 'main:icons', 'main:controllers', 'main:helpers',
  'main:models', 'main:modules', 'main:routes', 'main:scripts-app', 'main:videos']);
