
/**
 * Created by mayiwen 15-7-8
 */
var gulp = require('gulp');
var browserify = require('browserify');

var config = require('../config').browserify;
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var handleErrors = require('../util/handleErrors');
var through = require('through2');

var rev = require('gulp-rev');

gulp.task('browserify', function(){
    return dev();
});
gulp.task('browserify-deploy', function(){
    return deploy();
});


function deploy(){
    return gulp.src(config.src)
        .pipe(browserified())
        .pipe(buffer()) 
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest(config.dest))
        .pipe(rev.manifest()) //set hash key json
        .pipe(gulp.dest(config.rev)); //dest hash key json
}
function dev(){
    return gulp.src(config.src)
        .pipe(browserified())
        .pipe(buffer())
        .pipe(rev())
        .pipe(gulp.dest(config.dest))
        .pipe(rev.manifest()) //set hash key json
        .pipe(gulp.dest(config.rev)); //dest hash key json

}
var browserified = function() {
    return through.obj(function(chunk, enc, callback) {
        if(chunk.isBuffer()) {
            var b = browserify(chunk.path);
                // Any custom browserify stuff should go here
                //.transform(to5browserify);

            chunk.contents = b.bundle();

            this.push(chunk);

        }
        callback();
    });
};