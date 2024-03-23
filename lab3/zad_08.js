'use strict';
function sortPerson(arr) {
    const filteredArr = arr.filter(person => person.age !== null);
    filteredArr.sort((person1, person2) => person1.age - person2.age);
    const sortedNames = [];
    filteredArr.forEach(person => sortedNames[sortedNames.length] = person.name);
    return sortedNames;
  }
  

  const persons = [
    { name: 'Jan', age: 22 },
    { name: 'Grzegorz', age: 19 },
    { name: 'Halina', age: null },
    { name: 'Agata', age: 24 },
    { name: 'Krzysztof', age: 40 },
    { name: 'Adam', age: 29 }
  ]
  
   console.log(sortPerson(persons)); // => ['Grzegorz', 'Jan', 'Agata', 'Adam', 'Krzysztof']