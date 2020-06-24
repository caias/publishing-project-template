const log         = require('fancy-log'),
      colors      = require('ansi-colors'),
	  isProduction= require('./config/gulp.env'),
      browserSync = require('browser-sync').create(),
 	  reload      = browserSync.reload;
/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    const onError = (err) => {
        log(colors.red("ERROR"), err);
        //throw new Error(colors.green("info") + '::' + err);
    };

    function sass() {
        return gulp
        .src(config.scss.src)
        .pipe($.sassGlob())
        .pipe($.if(!isProduction, $.sourcemaps.init() ))
        .pipe($.plumber({errorHandler: isProduction ? false : false}))
        //.pipe($.scssLint({'config': config.lint.scss}))
        //.pipe($.if(isProduction , $.scssLint.failReporter() ))
        .pipe($.sass(config.scssOptions).on('error', onError))
        .pipe($.autoprefixer(config.browsers) )
        .pipe($.if(!isProduction , $.sourcemaps.write('./') ))
        .pipe(gulp.dest(config.scss.dest))
        .pipe(browserSync.stream());
    }
    sass.description = 'scss파일을 scss-lint설정값에 맞게 검사후 css로 컴파일 및 소스맵 , autoprefixer생성 후 컴파일된 파일을 dist로 복사'

    gulp.task(sass);

};
