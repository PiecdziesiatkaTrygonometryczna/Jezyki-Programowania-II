'use strict';

const persons = [
    { id: 1, firstName: 'Adam', lastName: 'Nowak' },
    { id: 2, firstName: 'Kamil', lastName: 'Kowalski' },
    { id: 3, firstName: 'Anna', lastName: 'Mazur' },
    { id: 4, firstName: 'Katarzyna', lastName: 'Maj' },
    { id: 5, firstName: 'Jakub', lastName: 'Adamski' }
  ]

  const output = persons.map(({ id, firstName, lastName }) => ({ label: firstName + " " + lastName, value: {id: id, firstName: firstName, lastName: lastName}}));

  console.log(output);


//   // Oczekiwany output:
// [
//     {
//       label: 'Adam Nowak',
//       value: { id: 1, firstName: 'Adam', lastName: 'Nowak' }
//     },
//     {
//       label: 'Kamil Kowalski',
//       value: { id: 2, firstName: 'Kamil', lastName: 'Kowalski' }
//     },
//     // ...
//   ]
      