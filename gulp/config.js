/* gulp命令会由gulpfile.js运行，所以src和build文件夹路径如下（根目录下） */
/*var src = './src';     
var dest = './build';  */
var path = require('path');
var dest = path.resolve(__dirname, "./../build");
var src = path.resolve(__dirname, './../src');

module.exports = {
	less: {
		all: src + "/**/less/**/*.less", //所有less
		src: src + "/common/less/app.less",	                     
		dest: dest + "/common/css",		  //输出目录
		settings: {					  //编译less过程需要的配置，可以为空

		}
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
		/*img: dest + "/img/",
		css: dest + "/css/",
		js: dest + "/js/"*/
		dest: dest
	},
	browserify:{
		watch: src+'/**/*.js',
    	src: src,
    	dest: dest
	},
	iconFont:{//手动设置
		src: src + "/common/less/fonts/fonts/*",
		dest: dest + "/common/css/fonts"
	}
}