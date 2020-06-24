const isProduction= require('./gulp.env');
const config = {

	html : {
		src	 : [
			'src/**/*.html',
			'./*.html'
		],
		dest	: 'dist/'
	},

	js : {
		src	 : [
			'src/**/*.js',
			'!src/js/module/*.js',
			'!src/js/vendor/jquery-3.1.0.min.js',
		],
		dest	: 'dist/'
	},

	jsexception: {
		src: [
			'src/js/vendor/jquery-3.1.0.min.js',
		],
		dest: 'dist/js/'
	},

	scss : {
		src	 : 'src/scss/**/*.s+(a|c)ss',
		dest	: 'dist/css'
	},

	scssOptions : {
		outputStyle	: isProduction ? 'compressed' : 'expanded', // nested, expanded, compact, compressed
		indentType	: 'space',
		indentWidth	: 2, // maximum:10
		precision	: 6,
		linefeed	:'lf' // cr , crlf, lf , lfcr
	},

	image: {
		src	 : [
			'src/images/**/*.+(png|jpg|gif|svg)',
			'!src/images/sprite/**/*.png'
  	],
	dest	: 'dist/images'
	},

	sprite:{
		src	 : [
			'src/images/sprite/**/*.png',
			'!src/images/sprite/retina/**/*.png'
		],
		dest	: 'dist/images/sprite'
	},

	retina:{
		src	 : 'src/images/sprite/retina/*.png',
		dest	: 'dist/images/sprite'
	},

	lint:{
		scss : './gulp/config/scsslint.yml',
		html : './gulp/config/.htmllintrc.json'
	},

	wsg:{
		src : './doc_assets/*.html',
		clean: 'dist/wsg'
	},

	path:{
		src: [
			'./dist/**/*.html',
			'./dist/**/*.css',
			'./dist/**/*.js'
		]
	},

	browsers : [
		'last 3 versions',
		'Android 2.3',
		'Android >= 4',
		'Chrome >= 20',
		'Firefox >= 15',
		'Explorer >= 8',
		'iOS >= 6',
		'Opera >= 12',
		'Safari >= 6'
	],

	purifyOpt : {
		info:true,
		minify:isProduction ? true : false,
		rejected:true
	}
};

module.exports = config;
