/**
 *
 */
'use strict';

import {sum, square, variable, MyClass} from './import';

// 25
console.log(square(5));

var cred = {
    name: 'Philip Ford',
    enrollmentNo: 11115078
};

var x = new MyClass(cred);

console.log(x.getName());
console.log('sum', sum);
console.log('variable', variable);
console.log(2+17);