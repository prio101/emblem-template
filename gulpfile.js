var gulp = require('gulp');
var sass = require('gulp-sass');
var imageMin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
//gulp sass

gulp.task('sass' , function(){

    return gulp.src('./sass/**/*.scss')
            .pipe(sass().on('error' , sass.logError))
            .pipe(gulp.dest('css/'));
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
        .pipe(gulp.dest('img'))
});




gulp.task('default', ['sass','imagemin' ]);