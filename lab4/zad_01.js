'use strict';

const arr = [10, 'a', 21, true, null, undefined, 1, false, 'b', 2];


const isNull = (element) => element === null;
console.log(arr.some(isNull));

const findFIrstString = (element) => typeof element === "string";
console.log(arr.find(findFIrstString));

const findTrueIndex = (element) => element === true;
console.log(arr.findIndex(findTrueIndex));


const findIntigers = (element) => typeof element === "number";
const filteredIntegers = arr.filter(findIntigers);
console.log(filteredIntegers.sort((a, b) => a - b));

