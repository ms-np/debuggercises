'use strict';

let a = 'y';
let b = 'x';
let temp = null;

// write some code, be sure to use temp!

temp = b;
b = a;
a = temp;


/* alternatively using the example template
temp = a;
a = b;
b = temp;  */

// fill in the _ to pass the assertions

const isTrue1 = a === 'x';
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 'y';
console.assert(isTrue2, 'Test 2');

const isTrue3 = temp === 'x'; // alternatively, const isTrue3 = temp === 'y';
console.assert(isTrue3, 'Test 3');

