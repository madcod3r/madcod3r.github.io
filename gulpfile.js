const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const rename = require('gulp-rename');
const tplData = require('./tplData');

gulp.task('render', () =>
    gulp.src('src/index.html.twig')
        .pipe(nunjucks.compile(tplData))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./'))
);

gulp.task('default', function() {
        gulp.watch('src/*', gulp.series('render'));
        gulp.watch('tplData.js', gulp.series('render'));
    }
);