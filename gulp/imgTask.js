/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    function images() {
        return gulp
        .src(config.image.src)
        .pipe($.plumber({
            errorHandler: (err) => {
                console.log('Image Task 수행중 에러가 발생했습니다.');
            }
        }))
        .pipe($.cache($.imagemin({
                interlaced: true,
                progressive: true,
                optimizationLevel: 7
            })))
        .pipe(gulp.dest(config.image.dest));
    }
    images.description = '이미지 파일들의 청크파일을 제거해 압축한뒤 dist폴더로 복사합니다.'

    gulp.task(images)

};
