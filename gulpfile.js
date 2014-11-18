var gulp = require('gulp')
var jshint = require('gulp-jshint')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')

gulp.task('lint', function() {
    return gulp.src('humandate.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
})

gulp.task('build', function() {
    return gulp.src('humandate.js')
        .pipe(uglify())
        .pipe(rename('humandate.min.js'))
        .pipe(gulp.dest('./'))
})

gulp.task('watch', function() {
    gulp.watch('index.js', ['lint', 'build'])
})

gulp.task('default', ['lint', 'build', 'watch'])
