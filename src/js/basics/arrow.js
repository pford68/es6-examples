/**
 * Demonstrates the use of arrow functions
 */
'use strict';

// Expression bodies
var evens = [2,4,6,8,10,12,14,16,18,20];
var fives = [];
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));

// Statement bodies
nums.forEach(v => {
    if (v % 5 === 0) {
        fives.push(v);
    }
});
console.log(odds, nums, pairs, fives);

// Lexical this
var bob = {
    _name: 'Bob',
    _friends: [],
    printFriends() {
        this._friends.forEach(f =>
            console.log(this._name + ' knows ' + f));
    }
};
