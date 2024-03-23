'use strict';

function isAnyEven(arr) {
const even = (element) => element % 2 === 0;
return arr.some(even)
}

console.log(isAnyEven([1, 3, 5, 3]));