const { parallel, watch, src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const livereload = require('gulp-livereload');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

function movehtml() {
    return src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('pub'))
    .pipe(livereload());
};
exports.movehtml = movehtml;

function compilesass() {
    return src('style/style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(dest('pub/css'))
    .pipe(livereload());
};
exports.compilesass = compilesass;

function movejs(){
    return src('js/*.js')
    .pipe(concat('main.js'))
    .pipe(babel({
        presets: ['@babel/env'] //Här sker babelkompilering
    }))
    .pipe(uglify())
    .pipe(dest('pub/js'))
    .pipe(livereload());
};
exports.movejs = movejs;


function scan() {
    
    livereload.listen();
    
    watch(['*.html', 'style/*.scss', 'js/*.js'], parallel('movehtml', 'compilesass', 'movejs')); 
};

exports.default = parallel(scan, parallel(movehtml, compilesass, movejs));