
/**
 * Created by mayiwen 15-7-8
 */
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var fs = require('fs');
var config = require('../config').browserify;
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var handleErrors = require('../util/handleErrors');

gulp.task('browserify', function(){
    dev();
});
gulp.task('browserify-deploy', function(){
    deploy();
});

function deploy(){
    var dirs_1 = fs.readdirSync(config.src);

    for(var i = 0;i < dirs_1.length;i++){

        var tmpPath = config.src + '/' + dirs_1[i],
            stats = fs.statSync(tmpPath);

        if( stats.isDirectory() ){//是否是文件夹
            var dirs_2 = fs.readdirSync(config.src + "/" + dirs_1[i]);

            for(var j = 0;j < dirs_2.length;j++){
                if(fs.existsSync(config.src + '/' + dirs_1[i] + '/'+dirs_2[j]+'/app.js')){
                    browserify()
                      .add(config.src + '/' + dirs_1[i] + '/'+dirs_2[j]+'/app.js')
                      .bundle()
                      .on('error', handleErrors) 
                      .pipe(source(dirs_2[j]+'.js'))
                      .pipe(buffer()) 
                      .pipe(uglify())
                      .pipe(gulp.dest(config.dest + '/' + dirs_1[i] + '/' + dirs_2[j] + '/js/'));
                }
            }
        }
        
    }
    //对根入口打包
    browserify()
      .add(config.src + '/app.js')
      .bundle()
      .on('error', handleErrors)
      .pipe(source('app.js'))
      .pipe(buffer()) 
      .pipe(uglify())
      .pipe(gulp.dest(config.dest));
    return browserify();
}
function dev(){
    var dirs_1 = fs.readdirSync(config.src);

    for(var i = 0;i < dirs_1.length;i++){

        var tmpPath = config.src + '/' + dirs_1[i],
            stats = fs.statSync(tmpPath);

        if( stats.isDirectory() ){//是否是文件夹
            var dirs_2 = fs.readdirSync(config.src + "/" + dirs_1[i]);

            for(var j = 0;j < dirs_2.length;j++){
                if(fs.existsSync(config.src + '/' + dirs_1[i] + '/'+dirs_2[j]+'/app.js')){
                    browserify()
                      .add(config.src + '/' + dirs_1[i] + '/'+dirs_2[j]+'/app.js')
                      .bundle()
                      .on('error', handleErrors) 
                      .pipe(source(dirs_2[j]+'.js'))
                      .pipe(gulp.dest(config.dest + '/' + dirs_1[i] + '/' + dirs_2[j] + '/js/'));
                }
            }
        }
        
    }
    //对根入口打包
    browserify()
      .add(config.src + '/app.js')
      .bundle()
      .on('error', handleErrors)
      .pipe(source('app.js'))
      .pipe(gulp.dest(config.dest));
    return browserify();
}