/**
 *
 */

import { myUserProxy } from './data-binding';

// set a new name
myUserProxy.name = 'Philip';
console.log(myUserProxy.name); // Philip
console.log(document.getElementById('inputname').value); // Philip