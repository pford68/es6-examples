/**
 *
 */
'use strict';

import {sum, square, variable, MyClass} from './import';
import './strings';
import './for-loop-closure';
import './arrow';
import './closures';

// 25
console.log(square(5));

let cred = {
    name: 'Philip Ford',
    enrollmentNo: 11115078
};

let x = new MyClass(cred);

console.log(x.getName());
console.log('sum', sum);
console.log('variable', variable);
console.log(2+17);