var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);

gulp.task('default', gulpsync.sync(['clean', ['less-dev', 'images', 'html', 'browserify', 'iconFont'],'watch']));
gulp.task('deploy', gulpsync.sync(['clean', ['less-deploy', 'images', 'html', 'browserify-deploy', 'iconFont']]));