/**
 *
 */
'use strict';

console.log('Testing let with the for-loop/var/closure issue....');
console.log('First, demonstrating the problem using var....');

var funcs = [];
for (var i = 0; i < 3; i++) {          // let's create 3 functions
    funcs[i] = function() {            // and store them in funcs
        console.log('My value: ' + i); // each should log its value.
    };
    //funcs[i] = console.log.bind(console, 'My value: ' + i); // This would fix it.
}
for (var j = 0; j < 3; j++) {
    funcs[j]();                        // and now let's run each one to see
}


console.log('now, fixing it by replacing var with let....');
let funcs2 = [];                        // This would still work with var.
// Use let here instead of var. This is the key spot,
// where the last value of i would be captured if you use var.
for (let i = 0; i < 3; i++) {
    funcs2[i] = function() {
        console.log('My value fixed: ' + i);
    };
    // This would work even with var.  :\
    //funcs2[i] = console.log.bind(console, 'My value: ' + i);
}
for (let j = 0; j < 3; j++) {
    funcs2[j]();                        // This still would work with var.
}
