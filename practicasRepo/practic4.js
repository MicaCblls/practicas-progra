'use strict';
/*4- Realizar un programa que leainformación relativa ala cantidad de especies de felinosde 14 países de África. Informar los 2 países con mayorcantidad de especies y los 2con menor cantidad de especies.Además, se desea saber qué porcentaje de países tienen más de 40 especies. */

import { getRandomNumber, getRandomArray } from './mikUtilities.js';

let countries = [];
const speciesRangeMax = 300;
const speciesRangeMin = 0;

for (let i = 0; i < 14; i++) {
  let felineSpecies = getRandomNumber(speciesRangeMax, speciesRangeMin);
  countries.push(felineSpecies);
}
console.log(countries);
let countriesSortedArray = countries.sort((a, b) => a - b);
let countriesWithMoreThan40SpeciesArray = countries.filter(value => value > 40);

console.log(
  `Paises con maxima cantidad de especies:${countriesSortedArray.slice(12)}`
);

console.log(
  `Paises con minima cantidad de especies:${countriesSortedArray.slice(0, 2)}`
);
//console.log(countriesWithMoreThan40SpeciesArray);
console.log(
  `Porcentaje de países tienen más de 40 especies: ${
    (countriesWithMoreThan40SpeciesArray.length / countries.length) * 100
  }`
);
