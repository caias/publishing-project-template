const 	gulp = require('gulp'),
	 	$ = require('gulp-load-plugins')({
		    pattern: [
		        'gulp-*',
		        'gulp.*'
		    ],
		    scope: ['devDependencies' , 'dependencies']
		}),
		isProduction = require('./gulp/config/gulp.env'),
		gulpConfig = require('./gulp/config/gulp.config');

// if (isProduction) {
//   console.log('[env]: prod')
// } else {
//   console.log('[env]: dev')
// }

require('./gulp/cleanTask.js')(gulp, $, gulpConfig);
require('./gulp/htmlTask.js')(gulp, $, gulpConfig);
require('./gulp/jsTask.js')(gulp, $, gulpConfig);
require('./gulp/imgTask.js')(gulp, $, gulpConfig);
require('./gulp/scssTask.js')(gulp, $, gulpConfig);
require('./gulp/spriteTask.js')(gulp, $, gulpConfig);
require('./gulp/serverTask.js')(gulp, $, gulpConfig);
// require('./gulp/docTask.js')(gulp, $, gulpConfig);
// require('./gulp/wsgTask.js')(gulp, $, gulpConfig);
require('./gulp/purifyTask.js')(gulp, $, gulpConfig);
require('./gulp/buildTask.js')(gulp, $, gulpConfig);

gulp.task('default', gulp.series('build' , 'server'));
