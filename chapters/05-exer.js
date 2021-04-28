import './04-exer.js';

// Chapter Five Exercises

// Flattening
// use reduce + concat to 'flatten' array of arrays into a single array
// credit: https://www.freecodecamp.org/news/reduce-f47a7da511a9/
const flattenArray = (array) => 
  array.reduce((flatArray, nextChunk) => {
      return flatArray.concat(nextChunk)
  }, []);

const testFlattenArray = (array, expected) => { return arrayEquals(flattenArray(array),expected) };

let twoDArrayInt = [ [1,2,3], [4,5], [6,7], [8,9] ];
let twoDArrayIntFlat = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
console.log(testFlattenArray(twoDArrayInt, twoDArrayIntFlat));
let twoDArrayString = [ ['a','b','c'], ['d','e','f'], ['g','h','i'], ['j','k','l'] ];
let twoDArrayStringFlat = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l' ]
console.log(testFlattenArray(twoDArrayString, twoDArrayStringFlat));



// higher order loop
// take value, test fn, update fn, body fn
// each iteration:
//  - run test fn on loop value and stop on false
//  - call body fn passing current loop value 
//  - call update fn, create new value to pass to next iteration


// everything
// implement every(array, fn) = true (for every fn(array[i]))
//  - one version with loop
//  - one verison with 'some' method


// dominant writing direction
// dom.dir is dir of majority of chars (in script)
// can use characterScript and countBy fns
