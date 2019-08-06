/**
 * Tasks related to Browserify
 */

const { task, dest }      = require('gulp'),
      browserify    = require("browserify"),
      gulpif        = require('gulp-if'),
      streamify     = require('gulp-streamify'),
      uglify        = require('gulp-uglify'),
      rename        = require('gulp-rename'),
      source        = require('vinyl-source-stream'),
      buffer        = require('vinyl-buffer'),
      sourceMaps    = require('gulp-sourcemaps'),
      watchify      = require('watchify'),
      config        = require("config");

let bundler;


function bundle(){
    return bundler.bundle()
        .pipe(source('./src/js/main.js'))
        .pipe(gulpif(config.debug === false, streamify(uglify())))
        .pipe(rename("main.js"))
        .pipe(buffer())
        .pipe(sourceMaps.init({loadMaps: true})) // loads map from browserify file
        // Add transformation tasks to the pipeline here.
        .pipe(sourceMaps.write('./')) // writes .map file
        .pipe(dest('./build/js'));
}

const opts = {
    entries: './main.js',
    basedir: './src/js',
    debug: true,
    cache: {},
    packageCache: {},
    plugin: [watchify]
};
bundler = browserify(opts)
    .transform('babelify')
    .on('update', bundle)
    .on('error', e => {
        console.log(e.message);
        bundler.emit('end');
    });

/*
 Browserify task.

 Fetches dependencies, and compresses the resulting JS bundle if not in debug mode.
 */
task("browserify", bundle);
