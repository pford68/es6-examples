/**
 * Common Gulp tasks used at different development phases
 */

const { task, src, series, dest}   = require('gulp'),
      eslint    = require('gulp-eslint'),
      csslint   = require('gulp-csslint'),
      del       = require('del'),
      sass      = require('gulp-sass'),
      gulpif    = require('gulp-if'),
      cssmin    = require('gulp-cssmin'),
      imagemin  = require('gulp-imagemin'),
      config    = require("config"),
      gDestDir  = './build';


/*
 Running SASS

 Compresses the resulting CSS file if not in debug mode
 */
task('sass', () => {
    // Omitting "sass" in src path below created an unwanted "sass" sub-directory.
    let out = './build/css',
        main = './src/sass/main.scss';
    del.sync(dest);
    return src(main)
        .pipe(sass())
        .pipe(gulpif(config.debug === false, cssmin()))
        .pipe(dest(out));
});



/*
 Linting
 */
task('lint', function() {
    return src('./src/**/*.js')
        .pipe(eslint())
        // You can look into pretty reporters as well, but that's another story
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


/*
 CSS Linting
 */
csslint.addFormatter('csslint-stylish');
task('css-lint', series('sass', () => {
    return src('./build/**/*.css')
        .pipe(csslint('.csslintrc'))
        // You can look into pretty reporters as well, but that's another story
        .pipe(csslint.formatter('stylish'));
}));



/*
 Images task:  copying images to the proper location
 */
task('images', () => {
    let out = './build/images',
        main = './src/images/**/*';
    del.sync(out);
    return src(main, { base: './src/images' })
        .pipe(imagemin()).pipe(dest(out));
});

/*
 Copies angular templates to the build directory.
 */
task('views', () => {
    return src([
        './src/**/*.html',
        './src/templates/*.html'
    ], { base: './src' })
        .pipe(dest(gDestDir));
});


