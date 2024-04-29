const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function compileSass(){
    return gulp.src('./source/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

function funcaoPadrao(callback){
    console.log('executando via gulp');
    callback();
}

function dizOi(callback){
    console.log("oi gulp!");
    callback();
}

exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compileSass;
exports.watch = function(){
    gulp.watch('./source/syles/*.scss', gulp.series(compileSass));
    gulp.watch('./source/scripts/*.js', gulp.series(compileSass));
    gulp.watch('./source/images/*', gulp.series(comprimeImagens));

}
exports.comprimeImagens = comprimeImagens;
exports.javascript = comprimeJavaScript;