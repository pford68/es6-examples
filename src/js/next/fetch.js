/**
 *  The Fetch API is Not really "next", but not ES6 either.
 */
'use strict';

fetch('https://www.reddit.com/r/javascript/top/.json?limit=5')
    .then(res => res.json())
    .then(json => console.log(json));
