'use strict';
/*5-Realizar  un  programa  que lea números  que  representan  códigos  de  encuestas  hasta  ingresar  el código 999, el cual no debe procesarse. Además,para cada código se debe leerla edad de la persona encuestada. Se requiere informar la edad máxima encontrada entre los encuestados y quéporcentaje de las personas encuestadas poseen más de 40 años */

import { getRandomNumber } from './mikUtilities.js';

class Poll {
  constructor(code, age) {
    this.code = code;
    this.age = age;
  }
}

let polls = [];
const codeRangeMax = 1000;
const codeRangeMin = 100;
const ageRangeMax = 90;
const ageRangeMin = 5;

for (let i = 0; i < 10; i++) {
  let code = getRandomNumber(codeRangeMax, codeRangeMin);
  let age = getRandomNumber(ageRangeMax, ageRangeMin);

  polls.push(new Poll(code, age));
}

polls.push(new Poll(999, 22), new Poll(55, 333));

let newPollsArray = polls.slice(
  0,
  polls.findIndex(elem => elem.code === 999)
);

let peopleWithMoreThan40Array = polls.filter(value => value.age > 40);
console.log(newPollsArray);

console.log(
  `Edad maxima encontrada entre los encuentados: ${Math.max(
    ...newPollsArray.map(elem => elem.age)
  )}`
);

console.log(
  `Porcentaje de las personas encuestadas que poseen más de 40 años: ${
    (peopleWithMoreThan40Array.length / polls.length) * 100
  }`
);
