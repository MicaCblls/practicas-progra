'use strict';
/*3- Se desea procesar la información de alumnos de ocho carreras universitarias. Porcadacarrera se ingresa su código ycantidad de años de duración. Para cada año correspondiente a la duración de la carrera, se ingresa lacantidad de alumnos que cursa. Realizar un programa que lea por teclado e informela carrera que tiene la mayor cantidad promedio de alumnos */

import { getRandomArray, getRandomNumber } from './mikUtilities.js';

class Carreer {
  constructor(code, students) {
    this.code = code;
    this.students = students;
  }
}

let carreers = [];

for (let i = 0; i < 8; i++) {
  let code = getRandomNumber(999, 100);
  let students = getRandomArray(500, 50, getRandomNumber(10, 3));
  carreers.push(new Carreer(code, students));
}

console.log(carreers);

let studentsAveragePerCarreerArray = carreers.map(
  elem =>
    elem.students.reduce((acc, elem) => (acc += elem), 0) / elem.students.length
);

console.log(
  carreers[
    studentsAveragePerCarreerArray.indexOf(
      Math.max(...studentsAveragePerCarreerArray)
    )
  ].code
);
