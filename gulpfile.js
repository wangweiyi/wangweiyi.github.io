//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),
    uglify = require("gulp-uglify"),
    rename = require('gulp-rename'),
    cssmin = require('gulp-minify-css'),
    cssver = require('gulp-make-css-url-version'),
    htmlmin = require('gulp-htmlmin'),
    concat = require("gulp-concat"),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'); // 安装： $ npm i -D imagemin-pngquant

// cmopile and minify less
gulp.task('less-to-css', function() {
    gulp.src('src/**/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(cssver()) //给css文件里引用文件加版本号（文件MD5）
        .pipe(cssmin())
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-js', function() {
    gulp.src('src/**/*.js') // 要压缩的js文件
        .pipe(uglify())
        .pipe(gulp.dest('dist')); //压缩后的路径
});

gulp.task('minify-html', function() {
    var options = {
        removeComments: true, //清除HTML注释
        collapseWhitespace: true, //压缩HTML
        //省略布尔属性的值 <input checked="true"/> ==> <input />
        collapseBooleanAttributes: true,
        //删除所有空格作属性值 <input id="" /> ==> <input />
        removeEmptyAttributes: true,
        //删除<script>的type="text/javascript"
        removeScriptTypeAttributes: true,
        //删除<style>和<link>的type="text/css"
        removeStyleLinkTypeAttributes: true,
        minifyJS: true, //压缩页面JS
        minifyCSS: true //压缩页面CSS
    };
    gulp.src('src/**/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-img', function() {
    gulp.src('src/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [
                { removeViewBox: false },
                { cleanupIDs: false }
            ],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist'));
});

//contact file
// gulp.task('concat', function() {
//     gulp.src('src/**/*.js') //要合并的文件
//         .pipe(concat('all.js')) // 合并匹配到的js文件并命名为 "all.js"
//         .pipe(gulp.dest('dist'));
// });

// add '.min' subffix to compressed files' filename
gulp.task('rename', function() {
    gulp.src('js/jquery.js')
        .pipe(uglify()) //压缩
        //会将jquery.js重命名为jquery.min.js
        .pipe(rename('jquery.min.js'))
        .pipe(gulp.dest('js'));
});

// watch file change
gulp.task('watch', function() {
    gulp.watch('src/**/*.less', ['less-to-css']);
    gulp.watch('src/**/*.js', ['minify-js']);
    gulp.watch('src/**/*.html', ['minify-html']);
    gulp.watch('src/**/img/*', ['minify-img']);
});

gulp.task('default', ['less-to-css', 'minify-js', 'minify-html', 'minify-img', 'watch']);