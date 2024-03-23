// (kolokwium 2022) Stwórz funkcję getCounter, która jako parametr przyjmuje dwie wartości – min i max. Funkcja powinna zwrócić funkcję,
// która przy każdym wywołaniu zwraca liczbę o 1 większą niż poprzednio zwrócona począwszy od podanej wartości minimalnej, a kończąc na maksymalnej.
//  Każde kolejne wywołanie powinno zwrócić undefined. (Uwaga! Rozwiązanie tego zadania nie może używać zmiennych globalnych!)
// Przykład działania
// Wywołujemy funkcje


// Wywołujemy zwracaną przez getCounter funkcje, która daje output kolejno:
// Pierwsze wywołanie => output: 5
// Drugie wywołanie => output: 6
// Trzecie wywołanie => output: 7
// Czwarte wywołanie => output: undefined

'use strict';
function getCounter(min, max) {
    let counter = min;

    return function() {
        if (counter <= max) {
            return counter++;
        } else {
        return undefined;
        }

    } 

}

const counterhehe = getCounter(5, 7);

console.log(counterhehe());
console.log(counterhehe());
console.log(counterhehe());
console.log(counterhehe());
console.log(counterhehe());