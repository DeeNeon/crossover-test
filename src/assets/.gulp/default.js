'use strict';

var gulp = require('gulp');


var defaultGulp = [
  'main:html',
  'main:static',
  'main:styles',
  'main:scripts',

  'vendor:bootstrap',
  'vendor:jquery',
  'vendor:angular',
  'vendor:font-awesome'

];

gulp.task('default', defaultGulp);
