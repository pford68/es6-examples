/**
 *
 */
'use strict';

import "@babel/polyfill";

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('[async test] resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('[async test] starting...');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
}

asyncCall();