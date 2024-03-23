'use strict';

// Napisz samowywołującą się funkcję anonimową (IIFE), która przyjmuje jako parametr wartość string
// i zwraca najdłuższy wyraz. Spróbuj poszukać funkcji wbudowanych, które mogą Ci się przydać do rozwiązania
// tego zadania, aby rozwiązanie było jak najkrótsze. Czy jesteś w stanie napisać funkcję tak, aby składała się jedynie z return?

console.log(function(string){
    const strings = string.split(" ");
    strings.sort((a, b) => b.length - a.length);
    return strings[0];
}("siema dawaj nadjdluzszy wyraz co"));