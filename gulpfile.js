// Include gulp
var gulp = require('gulp')

// Include Our Plugins
var jshint = require('gulp-jshint')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')

// Lint Task
gulp.task('lint', function() {
    return gulp.src('index.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
})

// Uglify JS
gulp.task('build', function() {
    return gulp.src('index.js')
        .pipe(gulp.dest('dist'))
        .pipe(rename('humandate.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
})

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('index.js', ['lint', 'build'])
})

// Default Task
gulp.task('default', ['lint', 'build', 'watch'])