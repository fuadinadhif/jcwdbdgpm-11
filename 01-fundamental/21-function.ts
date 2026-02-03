/* ---------------------------------- BASIC --------------------------------- */
// function: satu set algoritma yang kita buat untuk dijalankan nanti

// pembuatan fungsi
/*
function functionName (parameter) {
  return
}
*/
function add(num1: number, num2: number) {
  return num1 + num2;
}

// pemanggilan fungsi
/*
functionName(argument)
*/
console.log(add(1, 1));
console.log(add(1, 3));
console.log(add(5, 5));
console.log(add(5, 5));
console.log(add);

function subtract(firstNumber: number, secondNumber: number) {
  return firstNumber - secondNumber;
}

console.log(subtract(10, 5));
console.log(subtract(100, 20));

/* --------------- Function Declaration vs Function Expression -------------- */
// declaration: kita membuat fungsi menggunakan keyword 'function' secara langsung
console.log(someFunction());

function someFunction() {
  return "Function declaration";
}

console.log(someFunction());

// expression
// console.log(anotherFunction());

const anotherFunction = function () {
  return "Function expression";
};

console.log(anotherFunction());

/* ---------------------------- Default Parameter --------------------------- */
function multiply(num1: number = 5, num2: number = 2): number {
  const result = num1 * num2;
  return result;
}

console.log(multiply());
console.log(multiply(10));
