var gulp = require('gulp');
var concat = require("gulp-concat");
var annotate = require("gulp-ng-annotate");
var sass = require("gulp-sass");
var nodemon = require('gulp-nodemon');

var paths = {
	jsSource: ['public/app/**/*.js'],
	sassSource: ['public/**/*.scss'], // Change scss to sass if you want to work with it instead.
	imageSource: ['public/img/**/*.*'],
	copySource: ['public/**/*.html', 'public/**/*.css'],
	server: ['server/index.js']
};

gulp.task('serve', function() {
	nodemon({
		'script': paths.server
	});
});

gulp.task('sass', function() {
	gulp.src(paths.sassSource)
		.pipe(sass())
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {
	gulp.src(paths.jsSource)
		.pipe(annotate())
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('pics', function() {
	gulp.src(paths.imageSource)
		.pipe(gulp.dest('./dist/img'));
});

gulp.task('copy', function() {
	gulp.src(paths.copySource)
		.pipe(gulp.dest('./dist'));
});

gulp.task('build', ['js', 'sass', 'pics', 'copy']);

gulp.task('watch', function() {
	gulp.watch(paths.jsSource, ['js']);
	gulp.watch(paths.sassSource, ['sass']);
	gulp.watch(paths.sassSource, ['pics']);
	gulp.watch(paths.copySource, ['copy']);
});

gulp.task('default', ['build', 'watch']); // add 'serve' to the array if you want gulp to run nodemon as well.
