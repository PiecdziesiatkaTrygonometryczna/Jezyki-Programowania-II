'use strict';

// Napisz funkcję, w której zadeklarujesz zmienną liczbową o ustalonej, stałej wartości. Następnie zwraca funkcję, która przyjmuje liczbę jako argument.
// Funkcja ta zwraca sumę argumentu i wcześniej zadeklarowanej wartości. (Inaczej - zadeklaruj funkcję w funkcji).

function haha(c) {
    const a = 5;
    return function(b) {
        return a + b
    }(c)
}

console.log(haha(5));