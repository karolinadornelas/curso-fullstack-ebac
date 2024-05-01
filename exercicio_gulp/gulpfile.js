const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin([imagemin.mozjpeg({quality: 75, progressive: true})]))
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
        .pipe(obfuscate({exclude: ['length', 'src']}))
        .pipe(gulp.dest('./build/scripts'));
}

function funcaoPadrao(done){
    console.log('executando tarefa padrão');
    gulp.series(
        gulp.parallel(comprimeImagens, compileSass, comprimeJavaScript),
        function completaTarefas(callback){
            console.log('tarefa padrão complet.a');
            callback()
        }
    )(done);
}

exports.default = funcaoPadrao;
exports.sass = compileSass;
exports.comprimeImagens = comprimeImagens;
exports.javascript = comprimeJavaScript;

exports.watch = function(){
    gulp.watch('./source/syles/*.scss', {ignoreInitial: false}, gulp.series(compileSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(compileSass));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));

}
