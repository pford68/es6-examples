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
    config = require("config");

/*
 Browserify task.

 Fetches dependencies, and compresses the resulting JS bundle if not in debug mode.
 */
gulp.task("browserify", function(){

    var b = browserify({
        entries: './main.js',
        basedir: './src/js',
        debug: config.debug
    });

    return b.bundle()
        .pipe(source('./src/js/main.js'))
        .pipe(gulpif(config.debug === false, streamify(uglify())))
        .pipe(rename("main.js"))
        .pipe(gulp.dest('./build/js'));
});
