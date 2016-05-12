
var gulp = require('gulp');
var less = require('gulp-less');
var config = require('../config').less;
var handleErrors = require('../util/handleErrors');
var sourcemaps   = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var minify = require('gulp-minify-css');
var rev = require('gulp-rev');

gulp.task('less-dev', function(){
	return gulp.src(config.src)        //less源文件
		.pipe(sourcemaps.init())
		.pipe(less())   //执行编译
		.on('error', handleErrors)     //交给notify处理错误
		.pipe(sourcemaps.write())
		.pipe(rename(function(path){//重设以改变输出结构
			path.dirname = path.dirname.replace("less","css");
		}))
		.pipe(rev())
		.pipe(gulp.dest(config.dest))  //输出目录
		.pipe(rev.manifest()) //set hash key json
        .pipe(gulp.dest(config.rev)); //dest hash key json
});

gulp.task('less-deploy', function(){
	return gulp.src(config.src)        //less源文件
		.pipe(less())   //执行编译
		.on('error', handleErrors)     //交给notify处理错误
		.pipe(minify())
		.pipe(rename(function(path){//重设以改变输出结构
			path.dirname = path.dirname.replace("less","css");
		}))
		.pipe(rev())
		.pipe(gulp.dest(config.dest))  //输出目录
		.pipe(rev.manifest()) //set hash key json
        .pipe(gulp.dest(config.rev)); //dest hash key json
});
