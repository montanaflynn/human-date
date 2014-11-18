var gulp = require('gulp')
var jshint = require('gulp-jshint')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var mocha = require('gulp-mocha')

gulp.task('lint', function() {
    return gulp.src('humandate.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
})

gulp.task('test', function () {
    return gulp.src('test.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
})

gulp.task('build', function() {
    return gulp.src('humandate.js')
        .pipe(uglify())
        .pipe(rename('humandate.min.js'))
        .pipe(gulp.dest('./'))
})

gulp.task('watch', function() {
    gulp.watch('humandate.js', ['lint', 'test', 'build'])
    gulp.watch('test.js', ['test'])
})

gulp.task('default', ['lint', 'test', 'build', 'watch'])
