// Chapter Four Exercises

// credit: https://www.30secondsofcode.org/blog/s/javascript-array-comparison
const equals = (a, b) => { return a.length === b.length && a.every((element, index) => element === b[index]) };

// write range fn - start & end inclussive
// write sum (of array) fn
// phase 2: add step param to range fn
const range = (start, end, step = 1) => {
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

const sum = (intArray) => {
  let total = 0;
  intArray.forEach(element => {
    total += element;
  });
  return total;
}

const testSumRange = (start, end, expected) => { return sum(range(start, end)) == expected };
console.log(testSumRange(1, 10, 55));
console.log(testSumRange(-3, 0, -6));
console.log(testSumRange(-3, -5, 0));

const testRange = (start, end, expected) => { return equals(range(start,end),expected) };
console.log(testRange(1,5,[1,2,3,4,5]));
console.log(testRange(-3,0,[-3,-2,-1,0]));
console.log(testRange(5,5,[5]));
console.log(testRange(-3,-5,[]));
console.log(testRange(5,3,[]));

const testRangePhase2 = (start, end, step, expected) => { return equals(range(start,end,step),expected) };
console.log(testRangePhase2(1,5,2,[1,3,5]));
console.log(testRangePhase2(-3,0,3,[-3,0]));
console.log(testRangePhase2(-5,-1,2,[-5,-3,-1]));
console.log(testRangePhase2(4,40,4,[4,8,12,16,20,24,28,32,36,40]));
console.log(testRangePhase2(0,3,3,[0,3]));
console.log(testRangePhase2(5,5,5,[5]));
console.log(testRangePhase2(-3,-5,2,[]));
console.log(testRangePhase2(5,3,-2,[]));

const testSum = (intArray, expected) => { return sum(intArray) == expected };
console.log(testSum([1,2,3], 6));
console.log(testSum([-3,-2,-1,0], -6));
console.log(testSum([5], 5));
console.log(testSum([], 0));
console.log(testSum([6,10,-4], 12))


// write reverseArray - returns new array
// write reverseArrayInPlace - modify array passed as param
// questions: which more useful? which faster?
const reverseArray = (someArray) => {
  let newArray = [];
  someArray.forEach(element => {
    newArray.unshift(element);
  });
  return newArray;
};

const reverseArrayInPlace = (someArray) => {
  let lenArrayLessOne = someArray.length -1;
  // prep the array for the reverse - add dummy values we will replace
  for(let i = 0; i < lenArrayLessOne; i++) {
    someArray.unshift(0);
  }
  for(let i = 0; i < lenArrayLessOne; i++) {
    let lastElement = someArray.pop();
    someArray[i] = lastElement;
  }
  return someArray;
};

// performance
const timeToExecute = (someArray, fnToExecute) => {
  let startDate = new Date(); 
  fnToExecute(someArray);
  let endDate = new Date();  
  return endDate.getTime() - startDate.getTime();
}

let thisArray = range(1,100000);
console.log(timeToExecute(thisArray, reverseArray));        // 1002
console.log(timeToExecute(thisArray, reverseArrayInPlace)); // 3231

const testReverseArray = (someArray, expected) => { return equals(reverseArray(someArray), expected)};
console.log(testReverseArray([1,3,5], [5,3,1]));
console.log(testReverseArray(['zeta',3.1415,'42',-94], [-94,'42',3.1415,'zeta']));

const testReverseArrayInPlace = (someArray, expected) => { return equals(reverseArrayInPlace(someArray), expected)};
console.log(testReverseArrayInPlace([1,3,5], [5,3,1]));
console.log(testReverseArrayInPlace(['zeta',3.1415,'42',-94], [-94,'42',3.1415,'zeta']));


// write arrayToList
// write listToArray
// write prepend(element, list) - add element to front of list
// write nth(list, index) - return element at index, or undefined
// nth recursive if not yet
const arrayToList = (someArray) => {
  let aList = null;
  while(someArray.length) {
    lastElement = someArray.pop();
    aList = prepend(lastElement, aList);
  }
  return aList;
}

const prepend = (element, existingList) => {
  return {
    value: element,
    rest: existingList
  };
}

const listToArray = (someList) => {
  let newArray = [];
  while(someList) {
    newArray.push(someList.value);
    someList = someList.rest;
  }
  return newArray;
}

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

let newList = arrayToList(['a','b','c','d']);
console.log(newList);
console.log(listToArray(newList));
console.log(nth(newList, 1));


// deep comparison ...
// credit: https://www.30secondsofcode.org/blog/s/javascript-array-comparison
const equals = (a, b) => { return a.length === b.length && a.every((element, index) => element === b[index]) };
