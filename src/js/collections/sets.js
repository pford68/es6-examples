/**
 *
 */
var mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add("some text");
var o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); // o is referencing a different object so this is okay

console.log(mySet.has(1)); // true
console.log(mySet.has(3)); // false, 3 has not been added to the set
console.log(mySet.has(5));              // true
console.log(mySet.has(Math.sqrt(25)));  // true
console.log(mySet.has("Some Text".toLowerCase())); // true
console.log(mySet.has(o)); // true

mySet.forEach(function(item, index){
    console.log('Iterating mySet: ', item, index);
});
