/* -------------------------------------------------------------------------- */
/*                               O(1) - Constant                              */
/* -------------------------------------------------------------------------- */
function getFirstIndex(arrayInput: any[]) {
  const firstIndex = arrayInput[0]; // 1
  return firstIndex; // 1
}

// 1 + 1
// O(1) -> Constant

getFirstIndex([1, 2, 3, "A"]);
getFirstIndex([1, 2, 3, 4, 5, 6]);
getFirstIndex([1, 2, 3, 4, 5, 6, 7, 8, 9]);

/* -------------------------------------------------------------------------- */
/*                                O(n) - Linear                               */
/* -------------------------------------------------------------------------- */
/* ---------------------------- 1. linear search ---------------------------- */
function linearSearch(arrayInput: number[], target: number) {
  for (let i = 0; i < arrayInput.length; i++) {
    if (arrayInput[i] === target) {
      return i;
    }
  } // n

  return -1; // 1
}

// n + 1
// n
// O(n) -> Linear

console.log(linearSearch([40, 50, 10, 20, 30], 40));
console.log([10, 50, 30, 20].indexOf(20));

/* ------------------------------- 2. Find max ------------------------------ */
function findMax(arrayInput: number[]) {
  let max = arrayInput[0]; // 1

  for (const num of arrayInput) {
    if (num > max) {
      max = num;
    }
  } // n

  return max; // 1
}

// n + 1 + 1
// n
// O(n) - Linear

console.log(findMax([5, 4, 3, 2, 1, 1000]));
console.log(findMax([5, 4, 3, 2, 1, -1000]));

/* --------------------------- 3. Count occurences -------------------------- */
function countOccurances(arrayInput: number[], target: number) {
  let count = 0; // 1

  for (const num of arrayInput) {
    if (num === target) {
      count++;
    }
  } // n

  return count; // 1
}

// 1 + n + 1
// n
// O(n) - Linear

console.log(countOccurances([5, 6, 1, 3, 4, 5], 5));

/* ---------------------------- 4. Analyze price ---------------------------- */

function analyzePrice(prices: number[]) {
  let total = 0; // 1

  // Loop 1 -> calculate total price
  for (const price of prices) {
    total += price;
  } // n

  let highest = prices[0];

  // Loop 2 -> find highest price
  for (const price of prices) {
    if (price > highest) {
      highest = price;
    }
  } // n

  return { average: total / prices.length, highest }; // 1
}

// 1 + n + n + 1
// n + n
// 2n
// n
// O(n) -> Linear

console.log(analyzePrice([5000, 1000]));

/* ------------------------ 5. Analyze price built in ----------------------- */
function analyzePriceBuiltIn(prices: number[]) {
  const total = prices.reduce(function (acc, curr) {
    return acc + curr;
  }); // log n
  const highest = Math.max(...prices); // 1

  return { average: total / prices.length, highest }; // 1
}

// n + 1 + 1
// n
// O(n) -> Linear

/* -------------------------------------------------------------------------- */
/*                             O(n^2) - Quadratic                             */
/* -------------------------------------------------------------------------- */
function hasDuplicate(numbers: number[]): boolean {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        return true;
      }
    } // n2
  } // n1

  return false; // 1
}

// n * n + 1
// n^2 + 1
// n^2
// O(n^2) -> Quadratic

console.log(hasDuplicate([1, 5, 7, 8, 3, 2, 1]));
console.log(hasDuplicate([1, 5, 7, 8, 3, 2]));

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// 1. Best case
// 2. Average case
// 3. Worst case -> Big O
