'use strict';
export function getRandomNumber(max, min) {
  return Math.trunc(Math.random() * (max - min) + min);
}

export function getRandomArray(max, min, length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(getRandomNumber(max, min));
  }
  return arr;
}

export function getAnArrayIntoAnArray(max, min, length1, length2) {
  let arr1 = [];
  for (let i = 0; i < length1; i++) {
    let arr2 = [];
    for (let x = 0; x < length2; x++) {
      arr2.push(getRandomNumber(max, min));
    }
    arr1.push(arr2);
  }
  return arr1;
}
