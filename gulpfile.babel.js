import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

gulp.task('sass', function() {
    return gulp.src('./source/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./source/css'));
});

gulp.task('default', ['sass'], function() {
    gulp.watch('./source/scss/_components/*.scss', ['sass']);
    gulp.watch('./source/scss/_variables/*.scss', ['sass']);
});
