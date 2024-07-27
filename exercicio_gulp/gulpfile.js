// Dependências necessárias
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Compilador Sass
const sourcemaps = require('gulp-sourcemaps'); // Gera mapas de origem
const uglify = require('gulp-uglify'); // Minifica JavaScript
const obfuscate = require('gulp-obfuscate'); // Ofusca JavaScript
const imagemin = require('gulp-imagemin'); // Otimiza imagens

// Tarefa para comprimir imagens
function comprimeImagens() {
    return gulp.src('./src/images/*')
        .pipe(imagemin([imagemin.mozjpeg({quality: 75, progressive: true})]))
        .pipe(gulp.dest('./dist/images'));
}

// Tarefa para compilar arquivos Sass
function compilaSass() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sourcemaps.init()) // Inicializa mapas de origem
        .pipe(sass({
            outputStyle: 'compressed' // Comprime o CSS de saída
        }).on('error', sass.logError)) // Captura erros do Sass
        .pipe(sourcemaps.write('./maps')) // Escreve mapas de origem em arquivos separados
        .pipe(gulp.dest('./dist/styles'));
}

// Tarefa para comprimir arquivos JavaScript
function comprimeJavaScript() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify()) // Minifica JavaScript
        .pipe(obfuscate({exclude: ['length', 'src']})) // Ofusca JavaScript
        .pipe(gulp.dest('./dist/scripts'));
}

// Tarefa padrão
function funcaoPadrao(done) {
    console.log('Rodando Tarefa Padrão...');
    gulp.series(
        gulp.parallel(comprimeImagens, compilaSass, comprimeJavaScript),
        function completaTarefas(cb) {
            console.log('Tarefa Padrão completa.');
            cb();
        }
    )(done);
}

// Tarefas de observação
function watchFiles() {
    gulp.watch('./src/styles/*.scss', gulp.series(compilaSass));
    gulp.watch('./src/scripts/*.js', gulp.series(comprimeJavaScript));
    gulp.watch('./src/images/*', gulp.series(comprimeImagens));
}

// Exportações das tarefas
exports.default = funcaoPadrao;
exports.sass = compilaSass;
exports.comprimeImagens = comprimeImagens;
exports.javascript = comprimeJavaScript;
exports.watch = watchFiles;
