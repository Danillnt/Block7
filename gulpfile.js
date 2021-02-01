var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

function css_style(done) {
   pipe(sourcemaps.init())
   gulp.src('./src/scss/style.scss')
      .pipe(sass({
         errLogToConsole: true,
         outputStyle: 'compressed'
      }))
      .on('error', console.error.bing(console))
      .pipe(autoprefixer({
         browsers: ['last 2 versions'],
         cascade: false
      }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./src/css/'));

   done();
}



// let project_folder = "dist";
// let source_folder = "src";

// let path = {
//    build: {
//       html: project_folder + "/",
//       css: project_folder + "/css/",
//       js: project_folder + "/src/",
//       img: project_folder + "/image/",
//       fonts: project_folder + "/fonts/",
//    },
//    src: {
//       html: source_folder + "/*.html",
//       css: source_folder + "/scss/style.scss",
//       js: source_folder + "/src/script.js",
//       img: source_folder + "/image/**/*.{jpg,png,svg,gif,ico,webp}",
//       fonts: source_folder + "/fonts/*.ttf",
//    },
//    watch: {
//       html: source_folder + "/**/*.html",
//       css: source_folder + "/scss/**/*.scss",
//       js: source_folder + "/src/**/*.js",
//       img: source_folder + "/image/**/*.{jpg,png,svg,gif,ico,webp}",
//    },
//    clean: "./" + project_folder + "/"
// }

// let { src, dest } = require('gulp'),
//    gulp = require('gulp'),
//    browsersync = require("browser-sync").create(),
//    fileinclude = require("gulp-file-include");

// function browserSync(params) {
//    browsersync.init({
//       server: {
//          baseDir: "./" + project_folder + "/"
//       },
//       port: 3000,
//       notify: false
//    })
// }

// function html() {
//    return src(path.src.html)
//       .pipe(fileinclude())
//       .pipe(dest(path.build.html))
//       .pipe(browsersync.stream())
// }

// let build = gulp.series(html);
// let watch = gulp.parallel(build, browserSync);

// exports.html = html;
// exports.build = build;
// exports.watch = watch;
// exports.default = watch;