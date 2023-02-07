const gulp = require('gulp');
	 	// $ = require('gulp-load-plugins')({
		//     pattern: [
		//         'gulp-*',
		//         'gulp.*'
		//     ],
		//     scope: ['devDependencies' , 'dependencies']
		// }),
		// isProduction = require('./gulp/config/gulp.env'),
const gulpConfig = require('./gulp/config/gulp.config');
// const sass = require('gulp-sass');
// const taskObj = {...$, sass}
// console.log({ $ })
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const cache = require('gulp-cache');
const cached = require('gulp-cached');
const gulpIf = require('gulp-if');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const purifyCss = require('gulp-purify-css');
const replace = require('gulp-replace');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const stripComments = require('gulp-strip-comments');
const tap = require('gulp-tap');
const spritesmith = require('gulp.spritesmith');
const spritesmithMulti = require('gulp.spritesmith-multi');

const taskObj = {
	autoprefixer,
	babel,
	cache,
	cached,
	gulpIf,
	imagemin,
	plumber,
	purifyCss,
	replace,
	sass,
	sassGlob,
	sourcemaps,
	stripComments,
	tap,
	spritesmith,
	spritesmithMulti,
}

// if (isProduction) {
//   console.log('[env]: prod')
// } else {
//   console.log('[env]: dev')
// }

require('./gulp/cleanTask.js')(gulp, taskObj, gulpConfig);
require('./gulp/htmlTask.js')(gulp, taskObj, gulpConfig);
require('./gulp/jsTask.js')(gulp, taskObj, gulpConfig);
require('./gulp/imgTask.js')(gulp, taskObj, gulpConfig);
require('./gulp/scssTask.js')(gulp, taskObj, gulpConfig);
require('./gulp/spriteTask.js')(gulp, taskObj, gulpConfig);
require('./gulp/serverTask.js')(gulp, taskObj, gulpConfig);
// require('./gulp/docTask.js')(gulp, taskObj, gulpConfig);
// require('./gulp/wsgTask.js')(gulp, taskObj, gulpConfig);
require('./gulp/purifyTask.js')(gulp, taskObj, gulpConfig);
require('./gulp/buildTask.js')(gulp, taskObj, gulpConfig);

gulp.task('default', gulp.series('build' , 'server'));
