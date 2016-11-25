/**
 *
 */
'use strict';

let band = ['Freddy', 'Brian', 'John', 'Roger'];
let bandIterator = band[Symbol.iterator]();

export { band, bandIterator };
