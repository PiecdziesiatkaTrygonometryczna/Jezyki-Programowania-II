'use strict';

function sortWords(arr) {
    return arr.sort(function(a, b) {
    if (a.length === b.length) {
    return a.localeCompare(b);
    } else {
    return a.length - b.length;
    }
    });
    }



console.log(sortWords(['pies', 'kot', 'chomik', 'królik', 'wiewiórka']));
// sortWords(['pies', 'kot', 'chomik', 'królik', 'wiewiórka']) => ['kot', 'pies', 'chomik', 'królik', 'wiewiórka']