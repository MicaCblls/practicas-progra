'use strict';
/*2-Realizar  un  programa  que  permita  leerpor  teclado valores  que  representan  las temperaturasregistradas durante cada hora de los días deuna semana.Adicionalmente, se pide:
a)Informar las temperaturas:máxima, mínima y promedio para cada díadela semana.
b)Modificar el inciso a) agregando las instrucciones necesariaspara informarlashorasen que se produjeron las temperaturasmáxima y mínimade cada día.c)Modificarb)  para  que  además  seinforme los díascon  mayor  y  menor temperaturapromediodentro dela semana */

import { getAnArrayIntoAnArray } from './mikUtilities.js';

const temperatureRangeMax = 40;
const temperatureRangeMin = 5;
const days = 7;
const hours = 24;

let temperatures = getAnArrayIntoAnArray(
  temperatureRangeMax,
  temperatureRangeMin,
  days,
  hours
);

let temperatureAveragePerDayArray = temperatures.map(
  elem => elem.reduce((acc, elem) => (acc += elem), 0) / elem.length
);

console.log(temperatures);
console.log(
  `Temperaturas maximas de la semana: ${temperatures.map(elem =>
    Math.max(...elem)
  )}
  , hora de maximas temperaturas de la semana: ${temperatures.map(elem =>
    elem.indexOf(Math.max(...elem))
  )} `
);
console.log(
  `Temperaturas minimas de la semana: ${temperatures.map(elem =>
    Math.min(...elem)
  )}
  , hora de minimas temperaturas de la semana:${temperatures.map(elem =>
    elem.indexOf(Math.min(...elem))
  )} `
);
console.log(temperatureAveragePerDayArray);
console.log(
  `La mayor temperatura promedio fue el dia ${temperatureAveragePerDayArray.indexOf(
    Math.max(...temperatureAveragePerDayArray)
  )}`
);
console.log(
  `La menor temperatura promedio fue el dia: ${temperatureAveragePerDayArray.indexOf(
    Math.min(...temperatureAveragePerDayArray)
  )}`
);
/*
console.log(`Temperaturas promedio de la semana `);


 */
