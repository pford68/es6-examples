/**
 * Gulp build tasks
 *
 * To run a clean build:
 * (1) gulp clean
 * (2) gulp build
 *
 * To start the dev server:  gulp dev
 */
const gulp          = require('gulp'),
      del           = require('del'),                // For deleting files and directories
      requireDir    = require("require-dir"),        // Imports an entire directory
      gDestDir      = "./build",                     // The build directory
      tasks         = requireDir("./tasks");         // Gulp tasks for specific and for specific deployments (e.g., development)


//======================================================================== Tasks

/*
 Clean task:  deletes the build directory
 */
gulp.task('clean', done => {
    console.log("Cleaning " + gDestDir + "...");
    del(gDestDir, function(){
        console.log("Deleted " + gDestDir + ".");
        done();
    });
});



/*
 Builds the entire project.
 */
gulp.task("build", ['images', 'lint', 'css-lint', 'browserify', 'views'], () => {
    // PF:  Need to return something
});
