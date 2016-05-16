var gulp = require('gulp');
var config = require('../config').revCollector;
var revCollector = require("gulp-rev-collector");

gulp.task('rev-collector', function () {
    return gulp.src([config.revJson, config.src])
        .pipe( revCollector({
            replaceReved: true,
            /*
            	rev-json的目录并不全
            	{
				  "app.js": "app-27923ebf3e.js",
				  "modules/layout/app.js": "modules/layout/app-aed30707de.js",
				  "modules/main/app.js": "modules/main/app-57649e17a9.js",
				  "modules/test/app.js": "modules/test/app-2e3a1ce642.js"
				}
				这样的revjson不使用dirReplacements会导致所有app.js被第一个app.js覆盖
				此属性添加后，必须指定的目录才会按照json替换
				总之这个匹配很奇怪
            */
            dirReplacements:{
            	"css": "css",      //将会匹配含有css的资源路径.进行revjson里的清单替换
            	"build/": "build/" //将会匹配含有build 再进行revjson替换
            }
        }) )
        .pipe( gulp.dest(config.dest) );//这个输出html
});