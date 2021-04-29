/* Chapter Three Exercises */

// rewrite Math.min
const min = (x,y) => { return x < y ? x : y };
const testMin = (x,y,expected) => { return min(x,y) == expected };
console.log(testMin(3,5,3));
console.log(testMin(5,3,3));
console.log(testMin(-5,3,-5));
console.log(testMin(5,-3,-3));
console.log(testMin(5,0,0));
console.log(testMin(0,-4,-4));
console.log(testMin(5,5,5));


// recursive isEven based on:
// 0 == even; 1 == odd; N == evenness(N-2)
// return bool. test 50, 75
// phase 2 -> make it work for negative whole nums
function isEven(num) {
  switch (num) {
    case 0:
      return true;
    case 1:
      return false;
    default:
      return isEven(num - 2);
  }
};

const testIsEven = (num, expected) => { return isEven(num) == expected };
console.log(testIsEven(0, true));
console.log(testIsEven(1, false));
console.log(testIsEven(5, false));
console.log(testIsEven(8, true));
console.log(testIsEven(50, true));
console.log(testIsEven(75, false));

// phase 2 -> make it work for negative whole nums
function isEvenPhase2(num) {
  switch (num) {
    case 0:
      return true;
    case 1:
    case -1:
      return false;
    default:
      return num > 1 ? isEvenPhase2(num - 2) : isEvenPhase2(num + 2);
  }
};

const testIsEvenPhase2 = (num, expected) => { return isEvenPhase2(num) == expected };
console.log(testIsEvenPhase2(0, true));
console.log(testIsEvenPhase2(1, false));
console.log(testIsEvenPhase2(5, false));
console.log(testIsEvenPhase2(8, true));
console.log(testIsEvenPhase2(50, true));
console.log(testIsEvenPhase2(75, false));
console.log(testIsEvenPhase2(-1, false));
console.log(testIsEvenPhase2(-5, false));
console.log(testIsEvenPhase2(-8, true));
console.log(testIsEvenPhase2(-50, true));
console.log(testIsEvenPhase2(-75, false));


// countBs(string): int (how many 'B' in string)
const countBs = (text) => {
  if(typeof(text) != 'string') {
    return 0;
  }
  let textLen = text.length;
  let bCount = 0;
  for(let i = 0; i < textLen; i++) {
    if(text[i] == 'B') {
      bCount++;
    }
  }
  return bCount;
};

const testCountBs = (text, expected) => { return countBs(text) == expected };
console.log(testCountBs("Bubble", 1));
console.log(testCountBs("BuBBle", 3));
console.log(testCountBs("float", 0));
console.log(testCountBs(654, 0));

// phase 2 -> countChar(string, char)
// then rewrite countBs to use countChar
const countChar = (text, char) => {
  if(typeof(text) != 'string' || typeof(char) != 'string') {
    return 0;
  }
  let textLen = text.length;
  let charCount = 0;
  for(let i = 0; i < textLen; i++) {
    if(text[i] == char) {
      charCount++;
    }
  }
  return charCount;
}

const testCountChar = (text, char, expected) => { return countChar(text, char) == expected };
console.log(testCountChar("Bubble", "B", 1));
console.log(testCountChar("Bubble", "b", 2));
console.log(testCountChar("BuBBle", "B", 3));
console.log(testCountChar("Bubble", "l", 1));
console.log(testCountChar("float", "b", 0));
console.log(testCountChar("float", "t", 1));
console.log(testCountChar("fleet", "e", 2));
console.log(testCountChar("fleet", "E", 0));
console.log(testCountChar("float", 5, 0));
console.log(testCountChar(654, "c", 0));

const countBs2 = (text) => { return countChar(text, 'B') };
const testCountBs2 = (text, expected) => { return countBs2(text) == expected };
console.log(testCountBs2("Bubble", 1));
console.log(testCountBs2("BuBBle", 3));
console.log(testCountBs2("float", 0));
console.log(testCountBs2(654, 0));
