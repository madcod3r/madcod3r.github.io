const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const rename = require('gulp-rename');
const tplData = require('./tplData');

gulp.task('default', () =>
    gulp.src('src/index.html.twig')
        .pipe(nunjucks.compile(tplData))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./'))
);