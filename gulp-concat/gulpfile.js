const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

const mode = require('gulp-mode')({
  modes: ["production", "development"],
  default: "development",
  verbose: false
});

const fileList = [
  './src/mod/second.js',
  './src/mod/mod.js',
];

gulp.task('js', () => {
  return gulp.watch('./src/**/*.js', () => {
    return gulp.src(fileList)
    .pipe(sourcemaps.init())
    .pipe(concat('output.js'))
    .pipe(mode.development(sourcemaps.write()))
    .pipe(gulp.dest('dist'));
  });
});