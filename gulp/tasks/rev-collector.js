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
    /*
		gulp任务会同步执行，当前任务是执行在rev-js任务之后的
		这里给任务配置延迟在rev-js一秒之后，但时间控制不一定是稳定的，但是配置延迟之后，gulp-sync不能正确获取到它是否完成
	*/
});