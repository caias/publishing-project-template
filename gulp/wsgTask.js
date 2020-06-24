const del           = require('del');

/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    function cleanwsg(){
        return del(config.wsg.clean)
    }
    cleanwsg.description = 'hologram으로 생성한 web style guide문서 삭제'

    function hologram(cb){
        gulp.src('./hologram_config.yml')
        .pipe($.hologram());
        cb();
    }
    hologram.description = 'hologram을 이용해 web style guide 문서를 생성합니다.'

    gulp.task(cleanwsg);
    gulp.task(hologram);

    gulp.task('wsg', gulp.series('cleanwsg' , 'hologram'))

};
