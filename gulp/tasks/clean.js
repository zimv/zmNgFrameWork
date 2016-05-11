var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('../config').clean;

/*gulp.task("clean", ["cleanCss", "cleanJs", "cleanImg"]);

gulp.task("cleanCss", function(){
	return gulp.src(config.css)
		.pipe(clean());

});
gulp.task("cleanJs", function(){
	return gulp.src(config.js)
		.pipe(clean());

});
gulp.task("cleanImg", function(){
	return gulp.src(config.img)
		.pipe(clean());

});*/
gulp.task("clean", function(){
	return gulp.src(config.dest)
		.pipe(clean({force: true}))
		.pipe(gulp.src(config.temp))
		.pipe(clean({force: true}));

});