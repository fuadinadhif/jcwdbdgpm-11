/* -------------------------------------------------------------------------- */
/*                                    O(1)                                    */
/* -------------------------------------------------------------------------- */
function sumTwoNumbers(num1: number, num2: number) {
  const result = num1 + num2; // 1
  return result;
}

// 1
// O(1)

/* -------------------------------------------------------------------------- */
/*                                    O(n)                                    */
/* -------------------------------------------------------------------------- */
function copyArray(array: number[]) {
  const newArray: number[] = []; // n

  for (const element of array) {
    // 1
    newArray.push(element);
  }

  return newArray;
}

// n + 1
// n
// O(n)
