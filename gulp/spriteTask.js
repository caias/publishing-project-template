const merge         = require('merge-stream'),
        del         = require('del'),
      vinyl         = require('vinyl-buffer');

/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    function sprite() {
    	const opts = {
    		spritesmith: (options, sprite, icons) => {
    			//options.imgPath = `/dist/images/sprite/${options.imgName}`;
                options.imgName = `${sprite}.png`;
    			options.cssName = `_${sprite}.scss`;
    			options.cssTemplate = `./sprite_templates/mysprite.scss.handlebars`;
    			options.padding = 10;
    			options.cssVarMap = (sp) => {
    				sp.name = `${sp.name}`;
    			};
    			return options;
    		}
    	};
        const spriteData =
            gulp.src(config.sprite.src)
                .pipe($.spritesmithMulti(opts))
                .on('error', (err) => {
                    console.log(err)
                });

        const imgStream = spriteData.img
            .pipe(vinyl())
            .pipe($.cache($.imagemin({
                interlaced: true,
                progressive: true,
                optimizationLevel: 7
                })))
            .pipe(gulp.dest(config.sprite.dest));

    	const cssStream = spriteData.css
            .pipe(gulp.dest('src/scss/vendors/sprite/'));

    	return merge(imgStream, cssStream);
    }
    sprite.description = '일반적인 자동 image sprite 생성을 위한 Task입니다.'

    function retina() {
        const data = gulp.src('src/images/sprite/retina/*.png').pipe($.spritesmith({
            retinaSrcFilter: 'src/images/sprite/retina/*@2x.png',
            imgName: 'retina.png',
            retinaImgName: 'retina2x.png',
            cssName: '_retina.scss',
            cssTemplate: `./sprite_templates/myretina.scss.handlebars`,
            padding: 10,
        }));
        const imgStream = data.img
            .pipe(vinyl())
            .pipe($.cache($.imagemin({
                interlaced: true,
                progressive: true,
                optimizationLevel: 7
            })))
            .pipe(gulp.dest(config.sprite.dest));

        const cssStream = data.css
            .pipe(gulp.dest('src/scss/vendors/sprite/'));

        return merge(imgStream, cssStream);
    }
    retina.description = 'retina 전용 자동 image sprite를 만드는 Task입니다.'

    function cleansp(){
        return del('src/scss/vendors/sprite')
    }
    cleansp.description = 'image sprite 관련 scss파일을 삭제합니다.'

    gulp.task(sprite);
    gulp.task(retina);
    gulp.task(cleansp);

    gulp.task('spsass', gulp.series('cleansp', 'sprite', 'retina', 'sass'));


};
