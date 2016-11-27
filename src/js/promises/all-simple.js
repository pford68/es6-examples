/**
 * Created by paford on 11/27/16.
 */
var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
});
var p2 = new Promise((resolve, reject) => {
    if (document.location.href.indexOf('reject') > -1) {
        reject("reject");  // Demonstrates that one rejected Promise causes Promises.all() to return a rejection.
    } else {
        setTimeout(resolve, 2000, "two");
    }
});
var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "three");
});
var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "four");
});


var promises = [p1, p2, p3, p4];


Promise.all(promises).then(values => {
    console.log(values);
}, reason => {
    console.log(reason)
});


Promise.all(promises).then(values => {
    console.log(values);
}).catch(reason => {
    console.log(reason)
});
