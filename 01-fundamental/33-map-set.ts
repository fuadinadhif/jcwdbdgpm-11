/* ----------------------------------- Map ---------------------------------- */
const scores = new Map();

scores.set("Budi", 90);
scores.set("Andi", 80);
scores.set("Charlie", 85);

console.log(scores);
console.log(scores.has("Budi"));

/* ----------------------------------- Set ---------------------------------- */
// Array yang unik
const mySet = new Set();
console.log(mySet);
mySet.add(10);
mySet.add(10);
mySet.add(10);
mySet.add(10);
mySet.add(5);
console.log(mySet);

const uniqueValues = new Set([10, 10, 5, 4, 5, 6, 6, 7, 9, 0, 0, 10, 10, 10]);
console.log(uniqueValues);
