console.log(1);
console.log(2);

for (let i = 0; i < 1_000_000_000; i++) {}

console.log(3);

setTimeout(() => {
  console.log(4);
}, 1000);
setTimeout(() => {
  console.log(5);
}, 0);

console.log(6);

setInterval(() => console.log("Hello"), 1000);

// Mengehentikan interval setelah 10 detik:
const hiInterval = setInterval(() => console.log("Hi"), 1000);
setTimeout(() => clearInterval(hiInterval), 10000);

// Fungsi yang membuat kode menjadi asynchronous:
// 1. setTimeout
// 2. setInterval
// 3. fetch
