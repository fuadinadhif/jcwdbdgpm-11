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

/* ----------------------------- Rest Parameter ----------------------------- */
function sumAllParameters(...nums: number[]) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result = result + nums[i];
    return result;
  }

  // LOOP 1
  // i = 0
  // i < 3 = true
  // result = 0 + 5 = 5
  // return => semua loop dihentikan dan eksekusi fungsi juga berhenti
}

console.log(sumAllParameters(5, 10)); // 3
console.log(sumAllParameters(10, 20, 30)); // 60

/* ----------------------------- Function Scope ----------------------------- */
function greetings() {
  const name = "Adipura";
  return `Hello ${name}`;
}

console.log(greetings());

// console.log(name);

/* ----------------------------- Simple Exercise ---------------------------- */
/*
1. Buat fungsi hitung total harga
  - price 1 = 5000
  - price 2 = 3000
  - result = 8000

  function calculateTotal(5000, 3000) {...} // 8000

2. Buat fungsi hitung diskon
  - total price = 100.000
  - total price < 10.000 => diskon 0%
  - total price > 10.000 => diskon 20%
  - total price > 100.000 => diskon 50%

  function calculateDiscount(200_000) {...} // 100.000
*/

// 1.
function calculateTotal(...prices: number[]): number {
  let result = 0;

  for (const price of prices) {
    result += price;
  }

  return result;
}

console.log(calculateTotal(1000, 2000));
console.log(calculateTotal(5000, 8000));

// 2.
function calculateDiscount(price: number) {
  let disc = 0 / 100;

  if (price > 100_000) {
    disc = 50 / 100;
  } else if (price > 10_000) {
    disc = 20 / 100;
  }
  const finalPrice = price - price * disc;
  return finalPrice;
}

console.log(calculateDiscount(200_000));
console.log(calculateDiscount(5000));
