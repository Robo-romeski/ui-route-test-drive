var gulp = require('gulp');
var sass = require('gulp-sass');
var inject = require('gulp-inject');

var paths = {
	sass: "/public/stylesheets/*.sass",
	js: "/javascripts/*.js"
};

gulp.task('sass', function () {
  gulp.src('public/stylesheet/style.sass')
  .pipe(sass({
  	includePaths: ['sass']
  }))
  .pipe(gulp.dest('css'));
});
gulp.task('watch', ['sass'], function(){
	gulp.watch(['sass/*.sass']);
});
gulp.task('index', function(){
	var target = gulp.src('public/index.html');
	var sources = gulp.src(['/public/stylesheet/*.js', 'public/javascripts/*.css'], {read:false});

	return target.pipe(inject(sources))
	.pipe(gulp.dest('/public'));
})