/********************************************************************
*                                                                   *
* Licensed Materials - Property of IBM                              *
*                                                                   *
* (C) Copyright IBM Corp. 2001, 2016. All Rights Reserved.          *
*                                                                   *
* US Government Users Restricted Rights - Use, duplication or       *
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp. *
*                                                                   *
*********************************************************************/

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
    watchify = require('watchify'),
    sourcemaps = require('gulp-sourcemaps'),
    config = require("config"),
    opts = {
        entries: './main.js',
        basedir: './src/js',
        debug: config.debug,
        cache: {},
        packageCache: {}
    },
    b = browserify(opts);



function bundle(){
    return b.bundle()
        .pipe(source('./src/js/main.js'))
        .pipe(gulpif(config.debug === false, streamify(uglify())))
        .pipe(rename("main.js"))
        //.pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
        // Add transformation tasks to the pipeline here.
        //.pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest('./build/js'));
}

/*
 Browserify task.

 Fetches dependencies, and compresses the resulting JS bundle if not in debug mode.
 */
gulp.task("browserify", bundle);
b.on('update', bundle);
