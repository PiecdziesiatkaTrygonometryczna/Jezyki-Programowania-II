// Tablicę obiektów zmodyfikuj tak, aby znajdujące się w niej obiekty znajdowały się pod ich id jako indeks.

// // Input: 
// [
//     { id: 'a', name: 'Ala' },
//     { id: 'b', name: 'Tomek' },
//     { id: 'c', name: 'Jan' }
//   ]
  
//   // Output: 
//   [
//     { a: { id: 'a', name: 'Ala' } },
//     { b: { id: 'b', name: 'Tomek' } },
//     { c: { id: 'c', name: 'Jan' } }
//   ]


'use strict';

const obj = [
        { id: 'a', name: 'Ala' },
        { id: 'b', name: 'Tomek' },
        { id: 'c', name: 'Jan' }
      ]

const indexarray = obj.reduce((acc, curr) => {
    return obj.map((value, index) => {return `${value}:  {${index}: '${value}', `})});

console.log(indexarray);
