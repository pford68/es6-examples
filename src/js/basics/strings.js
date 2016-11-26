'use strict';

let fullName = `John Smith`;
let age = 37;
let sentence = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

console.log(sentence);

let employee = { id: 5, occupation: 'Software Developer'};
let msg = `Employee #${employee.id} is a ${employee.occupation}.`;
console.log(msg);
