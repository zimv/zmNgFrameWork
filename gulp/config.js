/* gulp命令会由gulpfile.js运行，所以src和build文件夹路径如下（根目录下） */
/*var src = './src';     
var dest = './build';  */
var path = require('path');
var dest = path.resolve(__dirname, "./../build");
var src = path.resolve(__dirname, './../src');
var root = path.resolve(__dirname, './..');
var temp = path.resolve(__dirname, './../temp-build');

module.exports = {
	less: {
		all: src + "/**/less/**/*.less", //所有less
		src: src + "/common/less/app.less",	                     
		dest: dest + "/common/css",		  //输出目录
		rev: temp + "/rev/css"
	},
	images: {
		src: src + "/**/img/**/*",	  
		dest: dest
	},
	html: {
		src: src + "/**/templates/**/*",	  
		dest: dest
	},
	js: {
		src: src + "/**/js/**/*",
		dest: dest
	},
	clean:{
		temp: temp,
		dest: dest
	},
	browserify:{
		watch: src + '/**/*.js',
    	src: src + "/**/app.js",
    	dest: dest,
		rev: temp + "/rev/js"
	},
	iconFont:{//手动设置
		src: src + "/common/less/fonts/fonts/*",
		dest: dest + "/common/css/fonts"
	},
	revCollector:{//md5静态资源部署解决方案
		revJson: temp + "/rev/**/*.json",
        src: root + "/index.html",//root index.html
        dest: ""  //这个输出并没有实际输出，但是还是需要执行一次，否则不会生成
	},
}