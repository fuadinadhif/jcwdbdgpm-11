console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");

/* --------------------------------- for let -------------------------------- */
for (let counter = 0; counter < 3; counter++) {
  console.log("Hi");
}

// LOOP 1
// counter = 0
// counter < 3 => 0 < 3 = true
// console.log("Hi")
// counter++ => counter = 1

// LOOP 2
// counter = 1
// counter < 3 => 1 < 3 = true
// console.log("Hi")
// counter++ => counter = 2

// LOOP 3
// counter = 2
// counter < 3 => 2 < 3 = true
// console.log("Hi")
// counter++ => counter = 3

// LOOP 4
// counter = 3
// counter < 3 => 3 < 3 = false
// stop

/* ---------------------------------- while --------------------------------- */
let counter = 3;

while (counter < 3) {
  console.log("Hi");
  counter++;
}

/* -------------------------------- do while -------------------------------- */
let doCounter = 3;

do {
  console.log("Hi");
  doCounter++;
} while (doCounter < 3);

/* -------------------------------- continue -------------------------------- */
// soft stop/skip

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // skip
  }

  console.log(i);
}

/* ---------------------------------- break --------------------------------- */
// hard stop
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    break;
  }

  console.log(i);
}
