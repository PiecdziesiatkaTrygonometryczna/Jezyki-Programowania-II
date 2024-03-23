'use strict';

// Operując na tablicy obiektów z poprzedniego zadania stwórz dwie tablice zawierające tylko imiona osób, których wiek jest poniżej i powyżej wyliczonej średniej wieku.

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

const avg = sum / persons.length;
console.log("Średnia wieku: " + avg);

const ponizej = []
const powyzej = []

for (let i in persons) {
    if (persons[i].age < avg) {
        ponizej[ponizej.length] = persons[i].name;
    } else {
        powyzej[powyzej.length] = persons[i].name;
    }
}

console.log("Osoby z wiekiem poniżej średniej: " + ponizej);
console.log("Osoby z wiekiem powyżej średniej: " + powyzej);