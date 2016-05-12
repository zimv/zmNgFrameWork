var gulp = require('gulp');
var config = require('../config').revJs;
var rev = require('gulp-rev');
var fs = require("fs");


gulp.task('rev-js', function(){

	setTimeout(function(){
		return gulp.src(config.src)
		.pipe(rev())
		.pipe(gulp.dest(config.dest))  
		.pipe(rev.manifest()) //set hash key json
        .pipe(gulp.dest(config.rev)); //dest hash key json
	}, 2000)
	/*
		gulp任务会同步执行，rev-js任务是执行在browserify任务之后的
		browserify任务完成，会生成临时的js文件夹，rev-js将会操作这个文件夹。
		但是browserify并不是用的gulp管道，所以gulp-aync无法得知browserify是否真正完成
		这里给任务配置延迟有用，但是配置延迟之后，gulp-sync不能正确获取到它是否完成
	*/
});