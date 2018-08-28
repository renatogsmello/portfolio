var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    browsersync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    ugligy = require('gulp-uglify'),
    newer = require('gulp-newer');

gulp.task('imagemin', function(){
    gulp.src('src/assets/images/**/**')
    .pipe(newer('dist/assets/images'))
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/images'))
});

gulp.task('sass', function () {
  return gulp.src('src/assets/scss/**/*.scss')
    .pipe(plumber())
    .pipe(newer('dist/assets/stylesheets'))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(plumber.stop())
    .pipe(gulp.dest('dist/assets/stylesheets'));
});

gulp.task('browsersync', function(){
    browsersync.init(['./dist/assets/stylesheets/**','./dist/assets/images/**','./*.html'],{
        server:{
            baseDir: "./",
            index: './index.html'
        }
    })
});

gulp.task('default', ['browsersync','imagemin', 'sass'], function(){
    gulp.watch('src/assets/scss/*.scss',['sass']),
    gulp.watch('src/assets/images/**/**', ['imagemin'])
})