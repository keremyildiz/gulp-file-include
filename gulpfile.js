const { src, dest, lastRun, series , parallel , watch } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const fileinclude = require('gulp-file-include');

function html() {
  return src('src/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

function css() {
  return src('src/scss/**/*.scss' , { since: lastRun(css) })
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      cascade: false,
      grid: 'autoplace'
    }))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
}

function js() {
  return src('src/js/*.js', { sourcemaps: true })
    .pipe(uglify())
    .pipe(dest('dist/js', { sourcemaps: true }))
    .pipe(browserSync.stream())
}

function js_global() {
  return src([
    'node_modules/jquery/dist/jquery.min.js', 
    'node_modules/jquery-zoom/jquery.zoom.min.js', 
    'node_modules/jquery-modal/jquery.modal.min.js', 
    'node_modules/jquery-mask-plugin/dist/jquery.mask.min.js',
    'node_modules/lazysizes/lazysizes.min.js' , 
    'node_modules/slick-carousel/slick/slick.min.js' , 
    'src/js/dr-js/main.js'])
  .pipe(uglify())
  .pipe(concat('global.js'))
  .pipe(dest('dist/js'))
  .pipe(browserSync.stream())
}

function images() {
  return src([
    'src/images/**/*',
  ])
  .pipe(dest('dist/images'))
  .pipe(browserSync.stream())
}

function host() {
    browserSync.init({
      server: {
        baseDir: ["dist"]
      }
    });
  }

  function watchFiles() {
    watch('src/**/*.html', series(html));
    watch('src/scss/**/*.scss', series(css));
    watch('src/scss/*.scss', series(css));
    watch('src/js/**', series(js));
    watch('src/js/**', series(js_global));
    watch('src/images/**', series(images));
  }


exports.default = series(parallel(css, html, js , js_global , images , host , watchFiles));