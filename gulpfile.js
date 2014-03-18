var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

var paths = {
	scripts: ['./components/jquery/dist/jquery.js', './components/bootstrap/dist/js/bootstrap.js', './build/js/app.js']
};

gulp.task('styles', function() {
	return gulp.src('./build/less/app.less')
		.pipe(less())
		.pipe(gulp.dest('./build/dist/css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('./www/public/css'))
});

gulp.task('scripts', function() {
	return gulp.src(paths.scripts)
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./build/dist/js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('./www/public/js'))
});

gulp.task('copy', function() {
	return gulp.src('./components/font-awesome/fonts/*.*')
		.pipe(gulp.dest('./www/public/fonts'))
});

gulp.task('default', function() {
	// place code for your default task here
})
