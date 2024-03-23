'use strict';

const arr = [ -5, 4, -2, 4, -5 ]

const squaredArray = arr.reduce((acc, curr) => {
    acc.push(curr ** 2);
    return acc;
}, []);

console.log(squaredArray);
