'use strict';
/*6-Realizar un programa que lea números que representan códigos de productos hasta ingresar el código 0,  el  cual  no  debe  procesarse. Por  cada  código  de producto  se lee  además  la  cantidad  vendida y  el precio unitario de dicho producto. Informar el código de producto que se vendió más veces y el código de producto que más recaudó. Los productos se leen solo una vez */

import { getRandomNumber } from './mikUtilities.js';

class Product {
  constructor(code, quantitySold, price) {
    this.code = code;
    this.quantitySold = quantitySold;
    this.price = price;
  }
}

let products = [];
const codeRangeMax = 999;
const codeRangeMin = 50;
const quantityRangeMax = 999;
const quantityRangeMin = 50;
const priceRangeMax = 999;
const priceRangeMin = 50;

for (let i = 0; i < 10; i++) {
  let code = getRandomNumber(codeRangeMax, codeRangeMin);
  let quantitySold = getRandomNumber(quantityRangeMax, quantityRangeMin);
  let price = getRandomNumber(priceRangeMax, priceRangeMin);

  products.push(new Product(code, quantitySold, price));
}

products.push(new Product(0, 555, 9999), new Product(888, 5995, 9997));

let newProductsArray = products.slice(
  0,
  products.findIndex(value => value.code === 0)
);

let maxQuantitySold = Math.max(
  ...newProductsArray.map(elem => elem.quantitySold)
);
let productsCollects = newProductsArray.map(
  elem => elem.quantitySold * elem.price
);
console.log(newProductsArray);

console.log(
  `Producto que mas veces se vendio: ${
    newProductsArray[
      newProductsArray.findIndex(
        value => value.quantitySold === maxQuantitySold
      )
    ].code
  }`
);
console.log(productsCollects);
console.log(
  `Producto que mas recaudo: ${
    newProductsArray[productsCollects.indexOf(Math.max(...productsCollects))]
      .code
  }`
);
