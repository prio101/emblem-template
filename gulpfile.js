var gulp = require('gulp');
var sass = require('gulp-sass');
var imageMin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var browserSync = require('browser-sync').create();

//gulp sass

gulp.task('sass' , function(){
    return gulp.src('./sass/**/*.scss')
            .pipe(sass().on('error' , sass.logError))
            .pipe(gulp.dest('/css'));
});

gulp.task('imagemin', function(){
    return gulp.src('./images/*')
        .pipe(imageMin({
            svgoPlugins: [
                {removeViewBox: false},
                {cleanupIds: false}
            ],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('default', ['sass','imagemin' , 'browserSync']);