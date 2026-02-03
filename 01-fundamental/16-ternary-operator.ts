// 1. Contoh if else
if (10 === 10) {
  console.log("Sama");
} else {
  console.log("Beda");
}

// 2. Contoh ternary
// condition ? kode yang akan dijalankan kalau kondisi benar : kode yang akan dijalankan kalau kondisi salah
10 === 10 ? console.log("Sama") : console.log("Beda");

// 3. Contoh if else 2
const fruit = "Grape";

if (fruit === "Apple") {
  console.log("Red");
} else if (fruit === "Banana") {
  console.log("Yellow");
} else {
  console.log("Black");
}

// 4. Contoh ternary 2
fruit === "Apple"
  ? console.log("Red")
  : fruit === "Banana"
    ? console.log("Yellow")
    : console.log("Black");
