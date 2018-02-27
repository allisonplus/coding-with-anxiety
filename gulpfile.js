const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', () => {
	return gulp.src('./assets/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(concat('style.css'))
		.pipe(gulp.dest(''))
});

gulp.task('watch', () => {
	gulp.watch('./assets/**/*.scss', ['styles']);
	gulp.watch('./assets/**/*.js', ['scripts']);
});

gulp.task('scripts', () => {
    gulp.src('./assets/scripts/*.js')
        .pipe(babel({
            // presets: ['']
        }))
		.pipe(concat('scripts.js'))
        .pipe(gulp.dest(''));
});

gulp.task('default', ['styles', 'scripts', 'watch']);
