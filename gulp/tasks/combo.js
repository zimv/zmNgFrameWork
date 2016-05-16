var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);

gulp.task('default', gulpsync.sync(['clean', ['less-dev', 'images', 'html', 'browserify', 'iconFont'], 'rev-collector', 'watch']));
gulp.task('deploy', gulpsync.sync(['clean', ['less-deploy', 'images', 'html', 'browserify-deploy', 'iconFont'], 'rev-collector']));

gulp.task('watchJs', gulpsync.sync(['browserify', 'rev-js', 'rev-collector']));
/*
	gulp任务会同步执行，rev-js任务是执行在browserify任务之后的
	browserify任务完成，会生成临时的js文件夹，rev-js将会操作这个文件夹。
	但是browserify并不是用的gulp管道，所以gulp-aync无法得知browserify是否真正完成
	这里给任务配置延迟有用，但是配置延迟之后，gulp-sync不能正确获取到它是否完成
*/