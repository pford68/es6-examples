/**
 *
 */
import '@babel/polyfill';

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



async function fetchTopFive(sub) {
    const URL = `https://www.reddit.com/r/${sub}/top/.json?limit=5`;
    const fetchResult = fetch(URL);
    const response = await fetchResult;
    const jsonData = await response.json();
    console.log(jsonData);
}

fetchTopFive('python');