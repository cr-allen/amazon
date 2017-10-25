const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', () => {
    gulp.src('./sass/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});
gulp.task('default', () => {
    gulp.watch('./sass/styles.scss', ['styles']);
});
