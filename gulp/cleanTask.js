const del = require('del');
/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    function clean(){
        return del('dist')
    }
    clean.description = 'Dist 폴더를 삭제합니다.'

    gulp.task(clean);

};
