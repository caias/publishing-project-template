const vinyl = require('vinyl-buffer'),
      browserify = require('browserify'),
	  isProduction= require('./config/gulp.env'),
      browserSync = require('browser-sync').create(),
      reload = browserSync.reload;
/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    function jsbabel() {
        return gulp
        .src(config.js.src, { base: 'src' })
        .pipe($.tap(function (file) {

            // replace file contents with browserify's bundle stream
            file.contents = browserify(file.path, { debug: true })
                .transform('babelify', { presets: ['@babel/preset-env'] })
                .bundle();
        }))
        .pipe(vinyl())
        // .pipe($.sourcemaps.init({ loadMaps: true }))
        // .pipe($.sourcemaps.write('./'))
        .pipe($.if(isProduction, $.stripComments()))
        .pipe(gulp.dest(config.js.dest))
        .pipe(browserSync.stream());
    }
    jsbabel.description = 'JS파일을 Dist 폴더로 복사합니다.'

    function jscopy() {
        return gulp
        .src(config.jsexception.src)
        .pipe(gulp.dest(config.jsexception.dest))
        .pipe(browserSync.stream());
    }

    gulp.task(jsbabel);
    gulp.task(jscopy);

    gulp.task('js', gulp.parallel('jsbabel', 'jscopy'));

};
