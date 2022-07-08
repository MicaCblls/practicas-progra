'use strict';
/*Se  lee  información  relativa  a  la  cantidad  de  páginas  de  1000  libros  de  una  biblioteca. Informar  los códigos de los 2 libros que tienen menorcantidad de páginas. Además,para el libro con mayor cantidad de páginas de la biblioteca, se debe informar lacantidad de páginas que tiene.  */

import { getRandomNumber } from './mikUtilities.js';

class Book {
  constructor(code, pages) {
    this.code = code;
    this.pages = pages;
  }
}

let books = [];
const codeRangeMax = 999;
const codeRangeMin = 100;
const pagesRangeMax = 1500;
const pagesRangeMin = 150;

for (let i = 0; i < 10; i++) {
  let code = getRandomNumber(codeRangeMax, codeRangeMin);
  let pages = getRandomNumber(pagesRangeMax, pagesRangeMin);

  books.push(new Book(code, pages));
}

//console.log(books);
//informar cantidad de paginas del que mas paginas tiene
//informar codigo de los 2 que menos paginas tienen
let booksSortedArray = books.sort((a, b) => a.pages - b.pages);
console.log(booksSortedArray);

console.log(
  `Codigo del primer libro que menos paginas tiene: ${booksSortedArray[0].code}`
);
console.log(
  `Codigo del segundo libro que menos paginas tiene: ${booksSortedArray[1].code}`
);

console.log(
  `Cantidad de paginas del libro que mas paginas tiene: ${booksSortedArray[9].pages}`
);
