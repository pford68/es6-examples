/**
 *
 */
'use strict';

function restParameterTest(...varargs){
    varargs.forEach(function(arg, index){
        console.log('Rest Parameter #' + (index + 1) + ':', arg) ;
    });
}

function defaultParameterTest(name, age=20){
    console.log('name/age', name, age);
}

export {restParameterTest, defaultParameterTest};
