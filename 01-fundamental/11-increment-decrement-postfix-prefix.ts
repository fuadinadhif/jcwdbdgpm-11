/* --------------------------- Increment Decrement -------------------------- */
let score = 10;

// score = score + 1; // bentuk 1
// score += 1; // bentuk 2
score++; // bentuk 3 => increment
// console.log(score);

// score = score - 1;
// score -= 1;
score--; // => decrement
// console.log(score);

/* ----------------------------- Postfix Prefix ----------------------------- */
// score++ => postfix
// ++score => prefix

let sum1 = 0;
const postSum = sum1++;
console.log(sum1); // 1
console.log(postSum); // 0

let sum2 = 0;
const preSum = ++sum2;
console.log(sum2); // 1
console.log(preSum); // 1
