const { src, dest, watch , parallel } = require('gulp');
//CSS
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss    = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');
//JS
const concat = require('gulp-concat');
const terser = require('gulp-terser-js');
//Imagenes
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const cache = require('gulp-cache');
const clean = require('gulp-clean');
const webp = require('gulp-webp');

const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    img: 'src/img/**/*'
}

function css() {
    return src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        //.pipe( sass({outputStyle: 'expanded'}))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe( dest('build/css') );
}

function javascript() {
    return src(paths.js)
      .pipe(sourcemaps.init())
       //.pipe(concat('bundle.js')) 
      .pipe(terser())
       //.pipe(rename({ suffix: '.min' }))
      .pipe(sourcemaps.write('.'))
      .pipe(dest('build/js'));
}

function ImgPng() {
    return src(paths.img)
        .pipe(cache(imagemin({ optimizationLevel: 3})))
        .pipe(dest('build/img'))
        .pipe(notify({ message: 'Png Agregado'}));
}

function ImgWebp() {
    return src(paths.img)
        .pipe( webp({quality: 50}) )
        .pipe(dest('build/img'))
        .pipe(notify({ message: 'Webp Agregado'}));
}

function watchArchivos() {
    watch( paths.scss, css );
    watch( paths.js, javascript );
    watch( paths.img, ImgPng );
    watch( paths.img, ImgWebp );
}


exports.default = parallel(css, javascript, ImgPng, ImgWebp,  watchArchivos ); 