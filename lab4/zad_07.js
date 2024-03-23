'use strict';
function funcArr(arr) {
    let flag = true;
        for (let i = 0;  i < ((arr.length / 2) - arr.length % 2); i++) {
            if (arr[i] !== arr[arr.length - 1 - i]) {
                flag = false;
            }
        }
        return flag;
    }

console.log(funcArr(["ee", "co tam", " siema", "co tam", "ee"]));