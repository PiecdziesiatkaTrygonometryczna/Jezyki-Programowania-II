'use strict';

// Poniższe fragmenty kodu zostały zakomentowane w celu utrzymania porządku. 
// Odkomentowuj je na bieżąco i zapisuj odpowiedzi w komentarzu. 
// Ostatecznie przed wrzuceniem pliku na repozytorium zakomentowane powinny być tylko dodane odpowiedzi i fragmenty kodu powodujące ewentualne błędy.

// ========================= Zadanie 1 =========================
// Co wypisze funkcja dla każdego z poniższych przypadków?
// Wyjaśnij, dlaczego w niektórych przypadkach wyniki różnią się.

// ========================== UWAGA =============================
// Zapis 
// (impression) ? console.log('A') : console.log('B');
// Jest skróconą wersją:
// if (impression) {
//     console.log('A');
// } else {
//     console.log('B');
// }
// ==============================================================

function isEquals(val1, val2) {
    (val1 == val2) ? console.log('A') : console.log('B');
    (val1 === val2) ? console.log('C') : console.log('D');
}

// isEquals(2, '2'); // AD
// isEquals(null, undefined); // AD
// isEquals(undefined, NaN); // BD
// isEquals(['a', 'b', 'c'], ['b', 'c', 'd']); // BD
// isEquals(0, ''); // AD
// isEquals('0', ''); // BD
// isEquals(+0, -0); // AC
// isEquals(0, false); // AD
// isEquals(0, 'false'); // BD
// isEquals([1, 2], '1,2'); // AD

// Co zwróci każde z poniższych wyrażen?
!!false; // false
!!true; // true
!!undefined; // false
!!null; // false

// ========================= Zadanie 2 =========================
// Jaki będzie efekt działania poniższego fragmentu kodu?
// Wyjaśnij wynik

const person = {
    firstName: 'Jan',
    lastName: 'Kowalski'
}

// console.log(person);
// person = {};
// console.log(person);
// błąd, ponieważ redefiniujemy stałą

// ========================= Zadanie 3 =========================
// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

// let number = 3;
// console.log(number); {
//     let number = 4;
//     console.log(number);
// }
// console.log(number);

// 3, po czym 4, po czym 3, jeżeli w bloku zadeklarujemy zmienną, to ta zmienna
// znika po opuszczeniu bloku (w tym przypadku staje się z powrotem wartością 3)

// ========================= Zadanie 4 =========================
// Czym się różnią poniższe dwa fragmenty kodu?
// Jak działa operator '...'?

// const arr = [1, 2];
// const newArr1 = [arr, 3, 4];
// console.log(newArr1);
// const newArr2 = [...arr, 3, 4];
// console.log(newArr2);

// w pierwszym przypadku jako pierwszy element tablicy newArr1 dodajemy całą tablicę
// arr, a w drugim wielokropek powoduje, że dodajemy do tablicy newArr2
// poszczególne elementy z tablicy arr po kolei


// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

// const word = 'javascript';
// const arrWord = [...word];
// console.log(arrWord);

// [
//   'j', 'a', 'v', 'a',
//   's', 'c', 'r', 'i',
//   'p', 't'
// ]

// wielokropek dla stringa powoduje, że traktuje wyraz jako tablicę charów
// dlatego do tablicy arrWord dodało nam wszystkie litery pojedynczo


// ========================= Zadanie 5 =========================
// Zapoznaj się z kodem poniżej. Jaki będzie jego wynik i dlaczego?

// var hello = 'Hello world!';
// var result = hello / 2;

// console.log(result);

// NaN. Wynik będzie taki a nie inny, bo result to dzielenie. Dzielenie działa
// tylko dla liczb, dlatego podczas dzielenia napisu otrzymujemy not a number

// console.log(Number.isNaN(result));
// console.log(Number.isNaN(hello));

// ========================= Zadanie 6 =========================
// Zapoznaj się z przykładami poniżej. Jaka jest różnica między var a let/const?

// if (true) {
//     var a = 2;
// }
// console.log(a);

// if (true) {
//     const b = 2;
// }
// console.log(b);

// var możemy używać poza blokiem, a const już nie

// -------

// Dla sprawdzenia działania obu poniższych pętli odkomentuj najpierw jedną, później drugą.
// Jaki będzie rezultat, jeśli obie pętle bedą odkomentowane jednocześnie. Wyjaśnij dlaczego.

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

// jezeli tylko druga petla jest odkomentowana, ostatni console.log wywoluje sie dla i,
// ale i nie jest zdefiniowane, poniewaz wyszlismy poza blok.
// jezeli obydwie petle są odkomentowane, ostatni console.log wywoluje sie,
// a "i" jest zdefiniowane w pętli pierwszej, dlatego program się wykonuje.

// -------

// var test = "var1";
// var test = "var2";

// let test2 = "let1";
// let test2 = "let2";

// var mozna deklarowac ponownie, a let nie.

// ========================= Zadanie 7 =========================
// Do czego używany jest 'use strict' w pierwszej linijce skryptu?

// poniewaz wtedy nalezy podac dla kazdej wartosci jej typ przy deklarowaniu,.
