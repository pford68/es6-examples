/**
 *
 */
'use strict';

import { addHtml } from '../util';

function getMovie(title) {
    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();

        request.open('GET', 'http://mymovieapi.com/?q=' + title);
        request.onload = function() {
            if (request.status == 200) {
                resolve(request.response); // we get the data here, so resolve the Promise
            } else {
                reject(Error(request.statusText)); // if status is not 200 OK, reject.
            }
        };

        request.onerror = function() {
            reject(Error('Error fetching data.')); // error occurred, so reject the Promise
        };

        request.send(); // send the request
    });
}

function fetchMovies() {
    var titles = [
        'Lawrence of Arabia',
        'The Wild Bunch',
        'The Third Man'
    ];
    var promises = [];

    for (var i in titles) {
        promises.push(getMovie(titles[i])); // push the Promises to our array
    }

    Promise.all(promises).then(function(dataArr) {
        dataArr.forEach(function(data) {
            var img = JSON.parse(data)[0].poster.imdb;

            addHtml('<img src="' + img + '"/>');
        });
    }).catch(function(err) {
        console.error(err);
    });
}

fetchMovies();
