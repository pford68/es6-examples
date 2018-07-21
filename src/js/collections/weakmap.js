/**
 *
 */
'use strict';

let map = new WeakMap(); // create a weak map
let myGreatObject = {
    id: Symbol(),
    name: 'Philip'
};

function useObj(obj){
    doSomethingWith(obj);
    let called = map.get(obj) || 0;
    called++; // called one more time
    if(called > 10) {
        report(obj, called);  // Report called more than 10 times
    }
    map.set(obj, called);
}

function doSomethingWith(obj){
    console.log(`[doSomething] Doing something: ${obj}`);
}

function report(obj, num){
    console.log('called more than 10 times', obj, num);
}

for (let i = 0; i < 12; i++){
    useObj(myGreatObject);
}