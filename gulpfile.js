'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var eslint = require('gulp-eslint');
var cleanCSS = require('gulp-clean-css');
var plumber = require('gulp-plumber');
var rimraf = require('gulp-rimraf');
var uglify = require('gulp-uglify');


gulp.task('default', ['build', 'watch']);
gulp.task('build', ['css']);
gulp.task('watch', ['watch:css'])

gulp.task('watch.lint', function() {
    return gulp.watch(['!./node_modules/**'], ['lint'])
});
gulp.task('lint', function() {
    console.log('watch!');
    return gulp.src([
            '!gulpfile.js',
            '!./node_modules/**'
        ])
        .pipe(eslint())
        .pipe(eslint.format());
})

gulp.task('css', ['clean:css'], function() {
    return gulp.src(['client/scss/**/*.scss', 'client/scss/**/*.sass'])
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch:css', function() {
    return gulp.watch(['client/scss/**/*.scss', 'client/scss/**/*.sass'], ['css']);
});

gulp.task('clean:css', function() {
    return gulp.src('public/css', {
            read: false
        })
        .pipe(rimraf());
});

// gulp.task('assets', function() {
//     return gulp.src('client/assets/**')
//         .pipe(gulp.dest('public/assets'));
// });
