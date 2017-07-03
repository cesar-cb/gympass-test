var gulp                    = require('gulp');
var stylus                  = require('gulp-stylus');
var rupture                 = require('rupture');
var imagemin                = require('gulp-imagemin');
var pngquant                = require('imagemin-pngquant');
var autoprefixer            = require('autoprefixer');
var poststylus              = require('poststylus');
var lost                    = require('lost');
var pug                     = require('gulp-pug');
var browserSync             = require('browser-sync').create();
var uglify                  = require('gulp-uglifyjs');
var minifyCss               = require('gulp-minify-css');
var minifyjs                = require('gulp-minify');
var rename                  = require('gulp-rename');
var plumber                 = require('gulp-plumber');
var webpack                 = require('webpack-stream');


//- Load Libs for Stylus
var stylus_options = {
    use: [poststylus([
        'lost',
        autoprefixer({browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']})]),
    rupture()]
};


//- Main Paths of Boilerplate
var path = {
    app:            'app',
    appStylus:      'app/stylus',
    appLib:         'app/assets/lib',
    appAssets:      'app/assets',
    appCoffee:      'app/assets/coffee',
    appJs:          'app/assets/js',
    appJadePages:   'app/pages',
    appImages:      'app/assets/images',
    build:          'public',
    buildAssets:    'public/assets',
    buildCss:       'public/assets/css',
    buildJs:        'public/assets/js',
    buildLib:       'public/assets/lib',
    buildImages:    'public/assets/images'
};

gulp.task('webpack', function() {
    return gulp.src(path.appJs)
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest(path.buildJs));
});

//- Compile stylus into css
gulp.task('stylus', function() {
    return gulp.src(path.appStylus + '/main.styl')
    .pipe(plumber())
    .pipe(stylus(stylus_options))
    .pipe(gulp.dest(path.buildCss))
    .pipe(browserSync.stream());

});

//- Compile Pug into html
gulp.task('pug', function() {
    gulp.src([path.app + '/*.pug', path.app + '/pages/*.pug'])
    .pipe(plumber())
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest(path.build));
});

gulp.task('moveAssets', function() {
    return gulp.src([path.appAssets + '/**/images/**', path.appAssets + '/**/json/**'])
    .pipe(gulp.dest(path.buildAssets));
});


gulp.task('deploycss', function() {
    gulp.src(path.buildCss + '/main.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest(path.buildCss));
});


gulp.task('deployjs', function() {
    gulp.src(path.buildJs + '/main.js')
    .pipe(uglify())
    .pipe(gulp.dest(path.buildJs));
});


gulp.task('images', function () {
    return gulp.src([path.appImages + '/*.svg',path.appImages + '/*.jpg',path.appImages + '/*.jpeg',path.appImages + '/*.png', path.appImages + '/*.gif'])
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest(path.buildImages));
});




//- Run all styles tasks
gulp.task('styles', ['stylus']);

//- Serve and livereload
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: path.build,
        },
        notify: false

    });
});

// Default task run all and watch files
gulp.task('default',['pug', 'styles', 'serve', 'images','moveAssets', 'deployjs', 'deploycss', 'webpack'] ,function() {

    // Livereload Files
    gulp.watch(path.build + '/**/*.html').on('change', browserSync.reload);

    gulp.watch(path.buildAssets + '/**/.js').on('change', browserSync.reload);

    gulp.watch(path.appJs + '/**/*.js').on('change', browserSync.reload);

    gulp.watch(path.app + '/**/*.pug').on('change', browserSync.reload);;

    // Tasks Watch
    gulp.watch(path.app + '/**/*.pug',['pug']);

    gulp.watch(path.appStylus + '/**/*.styl',['stylus']);

    gulp.watch(path.appJs + '/**/*.js',['webpack']);

    gulp.watch(path.appImages + '/**',['images']);

    gulp.watch(path.appAssets + '/**/*', ['moveAssets']);

    // Compile CSS and JS
    gulp.watch(path.buildCss + '/main.css',['deploycss']);

    gulp.watch(path.buildJs + '/main.js', ['deployjs']);

});
