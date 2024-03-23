'use strict';
// Stwórz 4 obiekty person1, person2, person3 i person4, gdzie każdy z nich zawiera dwa pola:
// name
// age
// przyjmujące wartości kolejno:
// Agata, 21
// Tomasz, 25
// Alicja, 31
// Jan, 20
// Stwórz tablicę i dodaj do niej wszystkie stworzone osoby. Następnie stwórz pętle, w której obliczysz:
// ile łącznie lat mają wspomniane osoby
// średnią wieku

const person1 = {
    name: "Agata",
    age: 21
};
const person2 = {
    name: "Tomasz",
    age: 25
};
const person3 = {
    name: "Alicja",
    age: 31
};
const person4 = {
    name: "Jan",
    age: 20
};

const persons = [person1, person2, person3, person4];
let sum = 0;
for (let i in persons) {
    sum = sum + persons[i].age;
}
console.log("Suma wieku: " + sum);

console.log("Średnia wieku: " + sum / persons.length);