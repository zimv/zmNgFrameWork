var gulp = require('gulp');
var config = require('../config').revCollector;
var revCollector = require("gulp-rev-collector");

gulp.task('rev-collector', function () {
	setTimeout(function(){
	    return gulp.src([config.revJson, config.src])
	        .pipe( revCollector({
	            replaceReved: true
	        }) )
	        .pipe( gulp.dest(config.dest) );//这个输出并没有实际输出，但是还是需要执行一次，否则不会生成
    }, 3000)
});