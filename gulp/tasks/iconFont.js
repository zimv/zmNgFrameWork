var gulp = require('gulp');
var config = require('../config').iconFont;
// var config     = require('../config').iconFont;
// var iconfont = require('gulp-iconfont');
// var consolidate = require('gulp-consolidate');
// var gulpsync = require('gulp-sync')(gulp);

// gulp.task('iconFont:build', function(){
//   return  gulp.src(config.svgDir) //svg dir
// 		    .pipe(iconfont({ fontName: config.fontName }))
// 		    .on('codepoints', function(codepoints, configions) {
// 		      gulp.src(config.cssPath) //logic css
// 		        .pipe(consolidate('lodash', {
// 		          glyphs: codepoints, //svg file name and codepoints
// 		          fontName: config.fontName, // relation font name
// 		          fontPath: 'fonts/', //relation font path(relative path)
// 		          className: 'css'
// 		        }))
// 		        .pipe(gulp.dest(config.dest)); // generate css
// 		    })
// 		    .pipe(gulp.dest(config.destFonts)); //generate font
// });

// gulp.task('iconFont', gulpsync.sync(['iconFont:build', 'less']));


gulp.task('iconFont', function(){
	return gulp.src(config.src)
		.pipe(gulp.dest(config.dest));
});