/**
 *
 */
'use strict';

let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'one');
});
let p2 = new Promise((resolve, reject) => {
    if (document.location.href.indexOf('reject') > -1) {
        reject('reject');  // Demonstrates that one rejected Promise causes Promises.all() to return a rejection.
    } else {
        setTimeout(resolve, 2000, 'two');
    }
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'three');
});
let p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'four');
});



Promise.all([p1, p2, p3, p4]).then(values => {
    console.log(values);
}, reason => {
    console.log(reason);
});
