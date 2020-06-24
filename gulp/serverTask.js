const log = require('fancy-log'),
  colors = require('ansi-colors'),
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload;
/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

  function serverInit() {
    return browserSync.init({
      server: {
        baseDir: "./",
        port: '3000',
        index: '/dist/index.html'
      }
    });
  }

  function watch() {
    let watcher = {
      scss: gulp.watch(config.scss.src, gulp.task('sass')),
      html: gulp.watch(config.html.src, gulp.task('html')),
      js: gulp.watch('src/js/**/*.js', gulp.task('jsbabel')),
      images: gulp.watch(config.image.src, gulp.task('images')),
      sprite: gulp.watch(config.sprite.src, gulp.task('spsass')),
      retina: gulp.watch(config.retina.src, gulp.task('spsass')),
    };

    for (let key in watcher) {
      watcher[key].on('change', reload);
      watcher[key].on('add', path => log('File', colors.yellow(path), 'has been', colors.green('added')))
      watcher[key].on('change', path => log('File', colors.yellow(path), 'has been', colors.green('changed')))
      watcher[key].on('unlink', path => log('File', colors.yellow(path), 'has been', colors.green('removed')))
      watcher[key].on('addDir', path => log('File', colors.yellow(path), 'has been', colors.green('added')))
      watcher[key].on('unlinkDir', path => log('Directory', colors.yellow(path), 'has been', colors.green('removed')))
      watcher[key].on('error', error => log('Watcher error:', colors.red({ error })))
    }
  }

  gulp.task(watch);
  gulp.task('server', gulp.parallel(serverInit, watch));

};
