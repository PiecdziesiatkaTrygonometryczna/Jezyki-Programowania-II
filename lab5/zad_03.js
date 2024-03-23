// Napisz funkcję, która będzie na wejściu przyjmowała tablicę liczb, a zwracała tablicę stringów
// składających się z indeksów elementów oraz wartości jakie pod nimi występują.


// Input: 


// Output: 
[ '0: 1', '1: 3', '2: 6', '3: 2', '4: 9' ]

'use strict';

const arr = [ 1, 3, 6, 2, 9 ]

const indexarray = arr.reduce((acc, curr) => {
    return arr.map((value, index) => {return `${index}:  ${value}`})});

console.log(indexarray);
