/**
 *
 */
'use strict';

let a = (function(){

    var i = 3;

    return {
        getState: function(){
            return i;
        },
        setState: function(value){
            i = value;
        }
    };
})();

let b = (function(){

    let i = 10;

    return {
        getState: function(){
            return i;
        },
        setState: function(value){
            i = value;
        }
    };
})();

console.log('a.getState()', a.getState());
console.log('b.getState()', b.getState());
console.log('re-setting b\'s state...');
b.setState(41);
console.log('b.getState()', b.getState());


