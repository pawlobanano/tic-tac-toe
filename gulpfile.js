var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('copy-css', function() {
    gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('app/styles/'));
});

gulp.task('serve', ['copy-css'], function() {
    browserSync({
        server: {
            baseDir: 'app',
        }
    });

    gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {
        cwd: 'app'
    }, reload);
});