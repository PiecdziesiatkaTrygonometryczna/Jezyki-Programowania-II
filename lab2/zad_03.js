"use strict";

const testArray = [1, 2, null, undefined, [4, undefined, 11, 10], 6, [7, null, 0], null, 9]; 


const array = [];




for (let i in testArray) {
    if (typeof testArray[i] == "object" && testArray[i] != null) {
        for (let j in testArray[i]) {
            array[array.length] = testArray[i][j];
        }
    } else {
        array[array.length] = testArray[i];
    }

    }

for (let i in array) {
    testArray[i] = array[i];
}

console.log(testArray);