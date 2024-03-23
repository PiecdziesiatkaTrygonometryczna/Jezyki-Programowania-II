'use strict';

function unequal(a, b, c) {
if ((a !== b) && (b !== c) && (c !== a)) {
    return true;
} return false;
}

console.log(unequal(1,2,3));
console.log(unequal(1,1,3));