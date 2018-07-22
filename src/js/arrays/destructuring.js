/**
 *
 */
'use strict';

let myArray = ['a', 'b', 'c'];
const [one, two, three] = myArray;

console.log('Destructuring...');
console.log(myArray);
console.log(one, two, three);



const myObject = {
    firstName:   'a1',
    lastName:   'b1',
    middle: 'c1'
};

// ES6 destructuring example
const {firstName: first, lastName: second, middle: third} = myObject;
console.log(first, second, third);


