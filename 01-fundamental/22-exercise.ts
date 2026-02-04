/* ----------------------------------- 1. ----------------------------------- */
const array1 = [1, 2, 3, 4, 5];

// Solution 1
function findLowestHighesAverageArray(arrayOfNums: number[]) {
  let lowest = arrayOfNums[0];
  let highest = arrayOfNums[0];
  let sum = 0;

  // for (let i = 0; i < arrayOfNums.length; i++) {
  //   const currentElement = arrayOfNums[i];

  //   if (currentElement < lowest) {
  //     lowest = currentElement;
  //   }

  //   if (currentElement > highest) {
  //     highest = currentElement;
  //   }

  //   sum = sum + currentElement;
  // }

  for (const currentElement of arrayOfNums) {
    if (currentElement < lowest) {
      lowest = currentElement;
    }

    if (currentElement > highest) {
      highest = currentElement;
    }

    sum = sum + currentElement;
  }

  const average = sum / arrayOfNums.length;
  return [lowest, highest, average];
}

console.log(findLowestHighesAverageArray(array1));

/* ----------------------------------- 2. ----------------------------------- */

/* ---------------------------------- NOTES --------------------------------- */
// Math Object
console.log(Math.abs(10));
console.log(Math.abs(-10));
console.log(Math.max(10, 1, 5, 4, 1000));

// Array Method (reduce)
