var gulp = require('gulp');
var config = require('../config').revCollector;
var revCollector = require("gulp-rev-collector");

gulp.task('rev-collector', function () {
    return gulp.src([config.revJson, config.src])
        .pipe( revCollector({
            replaceReved: true,
            /*
            	它这替换规则很奇怪，目前这样写并不是替换，而是让它找到build，因为rev-json的目录并不全
            	{
				  "app.js": "app-27923ebf3e.js",
				  "modules/layout/app.js": "modules/layout/app-aed30707de.js",
				  "modules/main/app.js": "modules/main/app-57649e17a9.js",
				  "modules/test/app.js": "modules/test/app-2e3a1ce642.js"
				}
				这样的revjson会导致所有app.js被第一个app.js覆盖
				为什么这样写源于看rev-collector源码，调试试出来的。。
            */
            dirReplacements:{
            	"css": "css",
            	"build": "build"
            }
        }) )
        .pipe( gulp.dest(config.dest) );//这个输出html
});