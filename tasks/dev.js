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
 * Gulp tasks specific to development:
 * (1) Running a dev server
 * (2) Running tests.
 *
 *
 *   NOTES:
 *   (1) The livereload module works best with Chrome's Livereload extension:
 *       See https://www.npmjs.org/package/gulp-livereload
 */

var gulp = require('gulp'),
    karma = require('karma'),
    path = require('path'),
    livereload = require('gulp-livereload'),    // See Note 1 above
    merge = require('merge-stream'),            // Combines multiple streams into one.
    config = require("config");

require("./common");
require("./browserify");


/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new karma.Server({
        configFile: path.resolve('./karma.conf.js'),  // karma was not finding ../karma.conf.js
        singleRun: true
    }, done).start();
});


/*
 Watching for changes to src files, and reloading the browser after any changes.
 */
gulp.task('watch', ['lint', 'browserify'], function() {
    // Running lint and browserify on JS src changes and deploying the changes.
    gulp.watch(['./src/**/*.js', './src/**/*.json'],[
        'lint',
        'browserify'
    ]);
    // Deploying changes to HTML and CSS files

   // gulp.watch(['./src/**/*.html', './src/**/*.scss', '!src/lib/**'], [
        //'views',
   // ]);
    // Reloading the browser when changes are deployed.
    gulp.watch('./build/**/*.js').on('change', livereload.changed);
});



/*
 Start local dev server
  */
gulp.task('dev', ['watch'], function() {
    var port = (config.server ? config.server.port : null) || 9000;
    // Start webserver
    require("../server").start(port);
    // Start live reload
    livereload.listen(config.livereload || {});
});
