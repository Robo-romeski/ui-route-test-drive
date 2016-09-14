var gulp = require('gulp');
var sass = require('gulp-sass');
var inject = require('gulp-inject');
var wiredep = require('wiredep');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
var browserSync = require('browser-sync').create();
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');
var minifycss = require('gulp-minify-css');
var lr = require('tiny-lr')
var server = lr();

console.log(wiredep);

var paths = {
	sass: "public/stylesheets/*.sass",
	js: "public/javascripts/*.js"
};
//wiredep 
gulp.task('wiredep', function(){
wiredep({src:'public/index.html',directory:'bower_components'});
});

gulp.task('index', function(){
var target = gulp.src('./public/index.html');
var sources = gulp.src(['./dist/scripts/*.js', './dist/styles/*.css']);

return target.pipe(inject(sources)).pipe(gulp.dest('./public'));

});

gulp.task('inject', ['wiredep', 'styles'], function(){


});
//css tasks
gulp.task('styles', function() {
  return gulp.src(paths.sass)
    .pipe(sass({ style: 'expanded', }).on('error', sass.logError))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(livereload(server))
    .pipe(gulp.dest('dist/styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('sass', function () {
  gulp.src(paths.sass)
  .pipe(sass({
  	includePaths: ['sass']
  }))
  .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('scripts', function() {
  return gulp.src(paths.js)
    //.pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(livereload(server))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('watch', function() {

  // Listen on port 35729
  server.listen(35729, function (err) {
    if (err) {
      return console.log(err)
    };

    // Watch .sass files
    gulp.watch(paths.sass, function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      gulp.run('styles');
    });

    // Watch .js files
    gulp.watch(paths.js, function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      gulp.run('scripts');
    });

});
});