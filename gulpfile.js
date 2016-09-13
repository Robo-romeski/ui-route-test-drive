var gulp = require('gulp');
var sass = require('gulp-sass');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
var browserSync = require('browser-sync').create();
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');

var config = {

}
var paths = {
	sass: "public/stylesheets/*.sass",
	js: "public/javascripts/*.js"
};
gulp.task('wiredep', function(){
var options = config.getWiredepDefaultOptions();

// return gulp
// 	.src(config.index)
// 	.pipe(wirdep(options))
// 	.pipe($.inject(gulp.src(config.js)))
// 	.pipe(gulp.dest(config.client));
});

gulp.task('inject', ['wiredep', 'styles'], function(){


});

gulp.task('sass', function () {
  gulp.src(paths.sass)
  .pipe(sass({
  	includePaths: ['sass']
  }))
  .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('scripts', function() {
  return gulp.src('src/scripts/**/*.js')
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

gulp.task('watch', function(){
	fatalLevel = 'off';
	var watcher = gulp.watch(paths.sass, ['sass']);
	watcher.on('change', function(){

	});
	watcher.on('error', function(er){
		console.log('error in sass file' + er);
	});
});

gulp
gulp.task('index', function(){
	var target = gulp.src('public/index.html');
	var sources = gulp.src(['/public/stylesheet/*.css', 'public/javascripts/*.js'], {read:false});

	return target.pipe(inject(sources))
	.pipe(gulp.dest('/public'));
})