/**
 * Tasks related to Browserify
 */

var gulp = require('gulp'),
    browserify = require("browserify"),
    gulpif = require('gulp-if'),
    streamify = require('gulp-streamify'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    watchify = require('watchify'),
    config = require("config"),
    opts = {
        entries: './main.js',
        basedir: './src/js',
        debug: config.debug,
        cache: {},
        packageCache: {}
    },
    b = browserify(opts);
    b = watchify(b, {poll: true});



function bundle(){
    return b.bundle()
        .pipe(source('./src/js/main.js'))
        .pipe(gulpif(config.debug === false, streamify(uglify())))
        .pipe(rename("main.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
        // Add transformation tasks to the pipeline here.
        .pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest('./build/js'));
}

/*
 Browserify task.

 Fetches dependencies, and compresses the resulting JS bundle if not in debug mode.
 */
gulp.task("browserify", bundle);
b.on('update', bundle);
