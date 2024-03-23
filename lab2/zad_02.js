'use strict';


const array = [ 4, 2, 'a', 'b', 3, 'aa', 'ww', 2, 'ab', -2];

const arrayBezLiczb = [];
const liczby = [];
for (let i in array) {

    if (typeof array[i] == "number" ) {
        liczby[liczby.length] = array[i]

    } else {
        arrayBezLiczb[arrayBezLiczb.length] = array[i]
    }
}

const newArray = []

for (let i in liczby) {
    newArray[i] = liczby[i]
}
for (let i in arrayBezLiczb) {
    newArray[newArray.length] = arrayBezLiczb[i]
}


for (let i in newArray) {
    array[i] = newArray[i]
}
console.log(array)