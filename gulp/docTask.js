const sassdoc       = require('sassdoc'),
      del           = require('del'),
      vinyl         = require('vinyl-buffer');

/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    function cleandoc(){
        return del('docs')
    }
    cleandoc.description = 'scss guide 문서 폴더를 지웁니다.'

    function scssdoc() {
        const options = {
            dest: './docs'
        }
        return gulp
        .src(config.scss.src)
        .pipe(vinyl())
        .pipe(sassdoc(options))
        .resume();
    }
    scssdoc.description = 'scss guide 문서를 생성합니다.'

    gulp.task(cleandoc);
    gulp.task(scssdoc);

    gulp.task('doc', gulp.series('cleandoc' , 'scssdoc'))

};
