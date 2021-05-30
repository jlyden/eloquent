import { range, arrayEquals } from './04-exer.mjs';
import { SCRIPTS } from './scripts.mjs';

/* Chapter Five Exercises */

// Flattening
// use reduce + concat to 'flatten' array of arrays into a single array
// credit: https://www.freecodecamp.org/news/reduce-f47a7da511a9/
const flattenArray = (array) => 
  array.reduce((flatArray, nextChunk) => {
      return flatArray.concat(nextChunk)
  }, []);

const testFlattenArray = (array, expected) => { return arrayEquals(flattenArray(array),expected) };

let twoDArrayInt = [ [1,2,3], [4], [5,6], [7,8,9] ];
let twoDArrayIntFlat = range(1,9);
//console.log(testFlattenArray(twoDArrayInt, twoDArrayIntFlat));
let twoDArrayString = [ ['a','b','c'], ['d','e'], ['f'], ['g', 'h', 'i'] ];
let twoDArrayStringFlat = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ]
//console.log(testFlattenArray(twoDArrayString, twoDArrayStringFlat));
let threeDArrayInt = [ [1,2,[3]], [4,[5,6]], [7,8,9] ];
// console.log(flattenArray(threeDArrayInt));
// console.log(flattenArray(flattenArray(threeDArrayInt)));


// higher order loop
function loopy(startValue, testFunction, updateFunction, bodyFunction) {
  let value = startValue;
  // run test fn on loop value and stop on false
  while(testFunction(value) == true) {
    // call body fn passing current loop value
    value = bodyFunction(value);

    // call update fn, create new value to pass to next iteration
    value = updateFunction(value);
  }
  return value;
}
const testLoopy = (startValue, testFunction, updateFunction, bodyFunction, expected) => { return loopy(startValue, testFunction, updateFunction, bodyFunction) === expected };

const lessThanFive = (value) => { return value < 5; }
const plusOne = (value) => { return value + 1; }
const timesTwo = (value) => { return value * 2; }
//console.log(testLoopy(1, lessThanFive, plusOne, timesTwo, 7));

const lessThanTen = (value) => { return value < 10; }
//console.log(testLoopy(0, lessThanTen, timesTwo, plusOne, 14));


// everything
// implement every(array, fn) = true (for every fn(array[i]))
//  - one version with loop
//  - one verison with 'some' method
function everythingLoop(someArray, testFunction) {
  let result;
  for(const element of someArray) {
    result = testFunction(element);
    if(result === false) {
      break;
    }
  }  
  return result;
}

const testEverythingLoop = (someArray, testFunction, expected) => { return everythingLoop(someArray, testFunction) == expected; }
const arrayOneToFive = range(1,5);
//console.log(testEverythingLoop(arrayOneToFive, lessThanFive, false));
//console.log(testEverythingLoop(arrayOneToFive, lessThanTen, true));

function everythingSome(someArray, testFunction) {
  if(someArray.length == 1) {
    let result = someArray.some(testFunction);
    console.log('result: ' + result);
    return result;
  }
  let lastValue = someArray.pop();
  if(!someArray.some(testFunction) || !testFunction(lastValue)) {
    return false;
  }
  everythingSome(someArray, testFunction);
}
const testEverythingSome = (someArray, testFunction, expected) => { return everythingSome(someArray, testFunction) == expected; }
const arrayOneToFiveCopy = arrayOneToFive.slice();
//console.log(testEverythingSome(arrayOneToFive, lessThanFive, false));
//console.log(everythingSome(arrayOneToFiveCopy, lessThanTen));
//console.log(testEverythingSome(arrayOneToFiveCopy, lessThanTen, true));

// dominant writing direction
// dom.dir is dir of majority of chars (in script)
// can use characterScript and countBy fns
// ref: https://eloquentjavascript.net/05_higher_order.html#c_nau/OQcf6J
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}
// ref: https://eloquentjavascript.net/05_higher_order.html#p_aEEZgRpp75
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function dominantDirection(text) {
  let directions = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(({direction}) => direction != 'none');
  console.log(JSON.stringify(directions));

  let domDirection = directions.reduce((acc, cur) => {
    return acc.count > cur.count ? acc : cur;
  });

  return domDirection.name;
}

const testDominantDirection = (string, expected) => { return dominantDirection(string) == expected; }
console.log(testDominantDirection('Hello!', 'ltr'));
console.log(testDominantDirection("Hey, مساء الخير", 'rtl'));