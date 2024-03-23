'use strict';

function numberSplit(n) {
    if (n % 2 === 0) {
        return [n/2, n/2]
    } else {
        let a = (n-1)/2
        let b = (n+1)/2
        return [a, b]
    }
}


console.log(numberSplit(-9));





// numberSplit(4) => [2, 2]
// numberSplit(11) => [5, 6]
// numberSplit(-9) => [-5, -4]