// Do obiektu cat dodaj dwa kolejne pola: breed (rasa) i colour (kolor sierści). Nadaj tym polom dowolne wartości i uzupełnij komunikat z pola description o nowe dane.
// Uwaga! Aktualizując zawartość description postaraj się dodać nową treść do istniejącej, a nie zastępując starą treść nową.




'use strict';

const cat = { 
  name: 'Filemon',
  age: 6,
  breed: "dachowiec",
  colour: "czarny"
}
cat.description = "Kot ma na imię " + cat.name + " i ma " + cat.age + " lat.";

cat.description = cat.description + " Jest rasy " + cat.breed + " oraz koloru " + cat.colour + ".";

console.log(cat.description);