// Chapter Four Exercises

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

// credit: https://www.30secondsofcode.org/blog/s/javascript-array-comparison
const equals = (a, b) => { return a.length === b.length && a.every((element, index) => element === b[index]) };

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
// this works
const reverseArray = (someArray) => {
  let newArray = [];
  someArray.forEach(element => {
    newArray.unshift(element);
  });
  console.log(someArray);
  console.log(newArray);
  return newArray;
};

// TODO: this is broken
const reversed = function(a, b) { 
  let bLength = b.length;
  return a.length === bLength && a.every((element, index) => element === b[bLength-index]);
};

const testReverseArray = (someArray) => { return reversed(reverseArray(someArray), someArray)};
console.log(testReverseArray([1,3,5]));
console.log(testReverseArray(['zeta',3.1415,'42',-94]));




// a list ...




// deep comparison ...
