/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

	function serverPath() {
		return gulp
		.src(config.path.src)
		.pipe($.replace('/dist', ''))
		.pipe($.replace('dist/', ''))
		.pipe(gulp.dest('./dist'))
	}
	serverPath.description = 'Netlify 배포시 절대경로 변경'

	function htmlJsLocalPath() {
		return gulp
		.src(['./dist/**/*.html' , './dist/**/*.js'])
		.pipe($.replace('/dist/', '/kotra/dev/'))
		.pipe($.replace('dist/', '/kotra/dev/'))
		.pipe(gulp.dest('./dist'))
	}
	htmlJsLocalPath.description = '작업물 공유용 html및 JS경로변경'

	function imgLocalPath() {
		return gulp
		.src('./dist/**/*.css')
		.pipe($.replace('/dist/', '/kotra/dev/'))
		.pipe(gulp.dest('./dist'))
	}
	imgLocalPath.description = '작업물 공유용 html경로변경'

	function webfont() {
		return gulp
		.src('./src/fonts/*.{ttf,otf,svg,eot,woff,woff2}')
		.pipe(gulp.dest('./dist/fonts'))
	}
	webfont.description = '작업물 공유용 html경로변경'

	gulp.task(serverPath);
	gulp.task(webfont);
	gulp.task(htmlJsLocalPath);
	gulp.task(imgLocalPath);

	gulp.task('build', gulp.series('clean', gulp.parallel('js', 'html', 'images', 'webfont'), 'spsass' ));
	gulp.task('local', gulp.parallel('htmlJsLocalPath', 'imgLocalPath' ));

};
