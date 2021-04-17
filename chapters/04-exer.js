// Chapter Four Exercises

// credit: https://www.30secondsofcode.org/blog/s/javascript-array-comparison
function arrayEquals(a, b) { 
  return a.length === b.length && a.every((element, index) => element === b[index]);
}

// write range fn - start & end inclussive
// write sum (of array) fn
// phase 2: add step param to range fn
function range(start, end, step = 1) {
  // If step is positive, start must be smaller than end; if step negative, end smaller than start 
  if((step > 0 && start > end) || (step < 0 && start < end)) {
    return [];
  }
  let rangeToReturn = [];
  let counter = start;
  while(counter <= end) {
    rangeToReturn.push(counter);
    counter += step;
  }
  return rangeToReturn;
};

function sum(intArray) {
  let total = 0;
  intArray.forEach(element => {
    total += element;
  });
  return total;
}

const testSumRange = (start, end, expected) => { return sum(range(start, end)) == expected; }
//console.log(testSumRange(1, 10, 55));
//console.log(testSumRange(-3, 0, -6));
//console.log(testSumRange(-3, -5, 0));

const testRange = (start, end, expected) => { return arrayEquals(range(start,end),expected); }
//console.log(testRange(1,5,[1,2,3,4,5]));
//console.log(testRange(-3,0,[-3,-2,-1,0]));
//console.log(testRange(5,5,[5]));
//console.log(testRange(-3,-5,[]));
//console.log(testRange(5,3,[]));

const testRangePhase2 = (start, end, step, expected) => { return arrayEquals(range(start,end,step),expected); }
//console.log(testRangePhase2(1,5,2,[1,3,5]));
//console.log(testRangePhase2(-3,0,3,[-3,0]));
//console.log(testRangePhase2(-5,-1,2,[-5,-3,-1]));
//console.log(testRangePhase2(4,40,4,[4,8,12,16,20,24,28,32,36,40]));
//console.log(testRangePhase2(0,3,3,[0,3]));
//console.log(testRangePhase2(5,5,5,[5]));
//console.log(testRangePhase2(-3,-5,2,[]));
//console.log(testRangePhase2(5,3,-2,[]));

const testSum = (intArray, expected) => { return sum(intArray) == expected };
//console.log(testSum([1,2,3], 6));
//console.log(testSum([-3,-2,-1,0], -6));
//console.log(testSum([5], 5));
//console.log(testSum([], 0));
//console.log(testSum([6,10,-4], 12))


// write reverseArray - returns new array
// write reverseArrayInPlace - modify array passed as param
// questions: which more useful? which faster?
const reverseArray = (arrayToReverse) => {
  let newArray = [];
  arrayToReverse.forEach(element => {
    newArray.unshift(element);
  });
  return newArray;
};

const reverseArrayInPlace = (arrayToReverseInPlace) => {
  let lenArrayLessOne = arrayToReverseInPlace.length -1;
  // prep the array for the reverse - add dummy values we will replace
  for(let i = 0; i < lenArrayLessOne; i++) {
    arrayToReverseInPlace.unshift(0);
  }
  for(let i = 0; i < lenArrayLessOne; i++) {
    let lastElement = arrayToReverseInPlace.pop();
    arrayToReverseInPlace[i] = lastElement;
  }
  return arrayToReverseInPlace;
};

// performance
const timeToExecute = (testArray, fnToExecute) => {
  let startDate = new Date(); 
  fnToExecute(testArray);
  let endDate = new Date();  
  return endDate.getTime() - startDate.getTime();
}

let thisArray = range(1,100000);
//console.log(timeToExecute(thisArray, reverseArray));        // 1002 // 2094
//console.log(timeToExecute(thisArray, reverseArrayInPlace)); // 3231 // 6252

const testReverseArray = (arrayToReverse, expected) => { return arrayEquals(reverseArray(arrayToReverse), expected); }
//console.log(testReverseArray([1,3,5], [5,3,1]));
//console.log(testReverseArray(['zeta',3.1415,'42',-94], [-94,'42',3.1415,'zeta']));

const testReverseArrayInPlace = (arrayToReverseInPlace, expected) => { return arrayEquals(reverseArrayInPlace(arrayToReverseInPlace), expected); }
//console.log(testReverseArrayInPlace([1,3,5], [5,3,1]));
//console.log(testReverseArrayInPlace(['zeta',3.1415,'42',-94], [-94,'42',3.1415,'zeta']));


// write arrayToList
// write listToArray
// write prepend(element, list) - add element to front of list
// write nth(list, index) - return element at index, or undefined
// nth recursive if not yet
function arrayToList(arrayToMakeList) {
  if(!arrayToMakeList) {
    return {};
  }
  let aList = null;
  while(arrayToMakeList.length) {
    lastElement = arrayToMakeList.pop();
    aList = prepend(lastElement, aList);
  }
  return aList;
}

function prepend(element, existingList) {
  return {
    value: element,
    rest: existingList
  };
}

let arrayABC = ['a','b','c'];
let listOfThreeResult = {
  value: 'a',
  rest: {
    value: 'b',
    rest: {
      value: 'c',
      rest: null
    }
  }
};

//console.log(arrayToList(arrayABC));
//console.log(listOfThreeResult);

let arraySingle = [1];
let listOfArraySingleResult = {
  value: 1,
  rest: null
};

//console.log(arrayToList(arraySingle));
//console.log(listOfArraySingleResult);

const listToArray = (someList) => {
  let newArray = [];
  while(someList) {
    newArray.push(someList.value);
    someList = someList.rest;
  }
  return newArray;
}

const testListToArray = (someList, expected) => { return arrayEquals(listToArray(someList), expected); }
//console.log(testListToArray(listOfThreeResult,arrayABC));
//console.log(testListToArray(listOfArraySingleResult,arraySingle));

const nth = (someList, index, counter = 0) => {
	if(counter == index) {
    return someList.value;
  } else {
  	counter++;
    return someList.rest
      ? nth(someList.rest, index, counter)
      : undefined;
  }
}

let listOfFour = arrayToList(['a','b','c','d']);
let listOfThree = arrayToList(['a','c','d']);


// deep comparison
// deepEqual(a,b)
// return true if same value, or objects with same properties
// use typeof to see if objects (make sure values not null)
// use Object.keys() to help recurse through properties
function deepEquals(a,b) {
  console.log(`entering: ${a} | ${b}`);
  // handle nulls
  if(a === null || b === null) {
    console.log('nulls');
    return a === b;
  }
  // handle different types
  if(typeof a !== typeof b) {
    return false;
  }
  // handle primitves
  if(typeof a != 'object') {
    console.log(`primitives: ${a} | ${b}`);
    return a === b;
  }
  // objects - if different keys, !equal
  if(!arrayEquals(Object.keys(a),Object.keys(b))) {
    return false;
  } 
  // loop through keys, comparing values
  return Object.keys(a).every(key => {
    console.log(`key: ${a[key]} and ${b[key]}`);
  	return deepEquals(a[key],b[key]); 
  });
}

const testDeepEquals = (a,b,expected) => { return deepEquals(a,b) == expected }

let objOneKey = { value: 1 };
let objSame = { value: 1 };
let objDiffKey = { some: 1 };
let objTwoKeys = { value: 1, rest: null };
let listSameOfFour = arrayToList(['a','b','c','d']);

//console.log(testDeepEquals(1,null,false));
//console.log(testDeepEquals(1,"1",false));
//console.log(testDeepEquals(1,objOneKey,false));
//console.log(testDeepEquals(1,1,true));
//console.log(testDeepEquals(null,null,true));
//console.log(testDeepEquals(null,null,true));
//console.log(testDeepEquals(objOneKey,objDiffKey,false));
//console.log(testDeepEquals(objOneKey,objTwoKeys,false));
//console.log(testDeepEquals(objOneKey,objSame,true));
//console.log(testDeepEquals(listOfFour, listOfThree,false));
//console.log(testDeepEquals(listOfFour, listSameOfFour,true));
