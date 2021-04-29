/* Chapter Two Exercises */

// mountain: 7 levels, 7 max width
for(let row = 0; row < 7; row++) {
  column = '#';
  while(column.length < row){
    column += '#';
  }
  console.log(`${column}\n`);
}

// fizz buzz
// print 0 < num < 101
// /3 -> Fizz
// /5 (!/3) -> Buzz
// phase 2: /3 && /5 -> FizzBuzz
for(let num = 1; num < 51; num ++) {
  let toPrint;
  // phase 2
  if(num % 3 === 0 && num % 5 === 0) {
    toPrint = 'FizzBuzz';
  } else if(num % 3 === 0) {
    toPrint = 'Fizz';
  } else if(num % 5 === 0) {
    toPrint = 'Buzz';
  } else {
    toPrint = num;
  }
  console.log(`${toPrint}\n`);
}

// chessboard: 8x8 grid
// phase 2: accept size as param
let size = Number(prompt('How large a gameboard?'));
let hash = '#';
let space = ' ';
for(let rowNum = 0; rowNum < size; rowNum++) {
  let evenRow = rowNum % 2 === 0;
  let row = '';
  for(let colNum = 0; colNum < size; colNum++) {
    let evenCol = colNum % 2 === 0;
    if(evenRow) {
      row += evenCol ? space : hash;
    } else {
      row += evenCol ? hash : space;      
    }
  }
  console.log(`${row}\n`);
}
