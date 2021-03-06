// instanciando módulos
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload');


gulp.task('develop', function () {
    livereload.listen();
    nodemon({
        script: 'server',
        ext: 'js',
        stdout: false
    }).on('readable', function () {
        this.stdout.on('data', function (chunk) {
        if(/^Express server listening on port/.test(chunk)){
            livereload.changed(__dirname);
        }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'develop'
]);
