var gulp = require('gulp');
var config = require('../config').images;
var handleErrors = require('../util/handleErrors');

gulp.task('images', function(){

	return gulp.src(config.src)
		.on('error', handleErrors) 
		.pipe(gulp.dest(config.dest))
});

