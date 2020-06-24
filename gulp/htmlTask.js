const log         = require('fancy-log'),
      colors      = require('ansi-colors'),
      browserSync = require('browser-sync').create(),
 	  reload      = browserSync.reload;
/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    function htmllintReporter(filepath, issues) {
        if (issues.length > 0) {
            issues.forEach(function (issue) {
                log(colors.cyan('[htmllint-report] ') + colors.white(filepath + ' [' + issue.line + ',' + issue.column + ']: ') + colors.red('(' + issue.code + ') ') + colors.yellow(issue.msg));
            });

            process.exitCode = 1;
        }
    }

    function html() {
        return gulp
        .src(config.html.src)
        .pipe($.plumber({
            errorHandler: (err) => {
                console.log('html Task 수행중 에러가 발생했습니다.');
            }
        }))
        // .pipe($.htmllint({
        //     config : config.lint.html,
        //     failOnError : isProduction ? true : false
        // }, htmllintReporter ))
        .pipe(gulp.dest(config.html.dest))
        .pipe(browserSync.stream());
    }
    html.description = 'HTML Lint 설정값에 맞게 모든 html검사후 이상이 없으면 Dist폴더로 복사합니다.'

    gulp.task(html)

};
