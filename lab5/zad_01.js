// Wykorzystując reduce zwróć najdłuższy element z tablicy z dowolnym typem prostym


'use strict';
const array = [ 'Ala', 'Janusz', 'kot', 'pies']
// const array = [ 1, 112, 13, 18 ]
const longest = array.reduce((acc, curr) => {
    return acc.length > curr.length ? acc : curr;
});

console.log(longest);

// [ 'Ala', 'Janusz', 'kot', 'pies'] // -> Janusz
// [ 1, 112, 13, 18 ] // -> 112
