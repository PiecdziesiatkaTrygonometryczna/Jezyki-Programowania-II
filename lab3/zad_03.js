'use strict';

function toArray(arg1, arg2) {
    let arr = [];
    if (typeof arg1 === "object" && arg1 !== null) {
        arr = [...arr, ...arg1]
    } else {
        arr = [...arr, arg1]
    }

    if (typeof arg2 === "object" && arg2 !== null) {
        arr = [...arr, ...arg2]
    } else {
        arr = [...arr, arg2]
    }
    return arr;
}



console.log(toArray(1, 2));
console.log(toArray(1, "tekst"));
console.log(toArray("aa", [1, 2]));
console.log(toArray([1], null));
// toArray(1, 2) => [1, 2]
// toArray(1, "tekst") => [1, "tekst"]
// toArray("aa", [1, 2]) => ["aa", 1, 2]
// toArray([1], null) => [1, null]