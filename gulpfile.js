var gulp = require('gulp');

gulp.task('Init', function () {
	console.log("I have configured a gulpfile");
});

var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
	return gulp.src('./*.less')
		.pipe(less({
			paths: [path.join(__dirname, 'less', 'includes')]
		}))
		.pipe(gulp.dest('./'));
});

var concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

gulp.task('processJsscripts', function () {
	return gulp.src('src/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dest/'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dest/'))
});

gulp.task('watch', function () {
	gulp.watch('src/*.js', ['processJsscripts'])
});