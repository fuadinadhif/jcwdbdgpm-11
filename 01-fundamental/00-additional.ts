/* ------------- Function Declaration/Expression/Arrow Function ------------- */
// 1. function declaration -> function functionName() {}
function multiplyBy5(num: number) {
  return num * 5;
}

// 2. function expression -> const variableName = function () {}
// Bentuk 1 reguler function expression:
// const divideBy10 = function (num: number) {
//   return num / 10;
// };

// Bentuk 2 arrow function, function expression:
// const divideBy10 = (num: number) => {
//   return num / 10;
// };

// Bentuk 3 arrow function:
const divideBy10 = (num: number) => num / 10;

console.log(divideBy10(10));

/* --------------------------------- Example -------------------------------- */
/* ---------------------------- 1. reduce method ---------------------------- */
console.log([10, 20, 30].reduce((sum, current) => sum + current, 10));

// LOOP 1
// sum = initial value / first index -> 10
// current = 10
// return 10 + 10 = 20

// LOOP 2
// sum = 20
// current = 20
// return 20 + 20 = 40

// LOOP 3
// sum = 40
// current = 30
// return 40 + 30 = 70

/* ------------------------------ 2. map method ----------------------------- */
console.log([10, 20, 30].map((value) => value + 5));

// const newArray = []
// LOOP 1
// value = 10
// return undefined
// newArray = [undefined]

// LOOP 2
// value = 20
// return undefined
// newArray = [undefined, undefined]

// LOOP 2
// value = 30
// return undefined
// newArray = [undefined, undefined, undefined]
