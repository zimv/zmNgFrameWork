var gulp = require('gulp');
var config = require('../config').html;
var handleErrors = require('../util/handleErrors');

gulp.task('html', function(){

	return gulp.src(config.src)
		.on('error', handleErrors) 
		.pipe(gulp.dest(config.dest))
});

