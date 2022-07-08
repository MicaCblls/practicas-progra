'use strict';
/*1.-Realizar un programa que lea por teclado un conjunto de valores que representan cantidades de visitantes que ingresan por día (para el mes de enero) a un parque de acuático. 
Se pide:a)Informarla máxima cantidad de visitantes que ingresaron en enero.
b)Agregar al inciso a) el código necesario para informar el día del mes que menos visitantes recibió el parque. */

import { getRandomNumber, getRandomArray } from './mikUtilities.js';

const visitorsRangeMax = 500;
const visitorsRangeMin = 5;
const days = 31;

let visitors = getRandomArray(visitorsRangeMax, visitorsRangeMin, days);

console.log(visitors);
console.log(`La mayor cantidad de visitantes fue: ${Math.max(...visitors)}`);
console.log(
  `El dia del mes que menos visitantes recibio el parque fue: ${visitors.indexOf(
    Math.min(...visitors)
  )}`
);
