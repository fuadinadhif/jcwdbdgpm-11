/* ------------------------------ Membuat Array ----------------------------- */
const arrayOfNumbers1 = [];
const arrayOfNumbers2 = new Array();
console.log(arrayOfNumbers1.length);
console.log(arrayOfNumbers2.length);

const arrayOfStrings1 = ["A", "B", "C"];
const arrayOfStrings2 = new Array("A", "B", "C");
console.log(arrayOfStrings1.length);
console.log(arrayOfStrings2.length);

const arrayOfRandoms1 = [10, "abc", null, undefined, [1, 2, 3]];
const arrayOfRandoms2 = new Array(10, "abc", null, undefined, [1, 2, 3]);

/* --------------------- Mengakses Nilai di dalam Array --------------------- */
const students = ["Reza", "Amar", "Rina", "Andi", "Noah", [10, 20, 30]];
console.log(students);
console.log(students[0]);
console.log(students[3]);
console.log(students[students.length - 1]);
console.log(students[5][1]);

/* ------------------------- Mengupdate Nilai Array ------------------------- */
const scores = [10, 20, 30, 40];
console.log(scores[2]);
scores[2] = 15000;
console.log(scores[2]);

/* ---------------------- Menambah dan Mengurangi Array --------------------- */
// push: menambah element baru di paling akhir
// unshift: menambah element baru di paling awal
// pop: menghapus element terakhir
// shift: menghapus element pertama
const points = [100, 200, 300];
console.log(points);
console.log(points.length);

points.push(500);

console.log(points);
console.log(points.length);

points.unshift(0);

console.log(points);
console.log(points.length);

points.pop();

console.log(points);
console.log(points.length);

points.shift();

console.log(points);
console.log(points.length);

/* ------------------------------ Iterasi/Loop ------------------------------ */
const employees = ["Malik", "Nadina", "Cipuy", "Krishna"];

// for let
// Gunakan ketika kita butuh INDEX dan VALUE dari array yang sedang kita loop
for (let i = 0; i <= employees.length - 1; i++) {
  console.log(i);
  console.log(employees[i]);
}

const fileSizes = [1.2, 10, 0.5, 3, 1];
for (let i = 0; i < fileSizes.length; i++) {
  if (fileSizes[i] > 2) {
    console.log(`File #${i + 1} is too large`);
  }
}

// for of
for (const name of employees) {
  console.log(name);
}

// for in
for (const index in employees) {
  console.log(index);
}

/* ------------------------------ Array Methods ----------------------------- */
/* ------------------------------ Add & Remove ------------------------------ */
// push(), pop(), shift(), unshift()
// 1. splice: memotong suatu array dan (optional) memasukan elemen baru dan memodifikasi original array
const fruits = ["Apple", "Mango", "Jack Fruits", "Grape"];
// fruits.splice(1);
// fruits.splice(1, 2);
// fruits.splice(1, 2, "Banana");
const spliceResult = fruits.splice(2, 0, "Banana");
console.log(fruits);
console.log(spliceResult);

/* --------------------------- Accessing & Slicing -------------------------- */
const cities = ["Jakarta", "Jogja", "Jember", "Bandung", "Denpasar"];

// 1. slice: memotong suatu array tanpa memodifikasi original array
const sliceResult = cities.slice(0, 2);
console.log(cities);
console.log(sliceResult);

// 2. indexOf: mencari nilai index dari sebuah value
const indexOfResult = cities.indexOf("Melbourne");
console.log(indexOfResult);

// 3. includes: memeriksa apakah suatu value ada di dalam array atau tidak
const includesResult = cities.includes("Denpasar");
console.log(includesResult);

/* ---------------------------------- NOTES --------------------------------- */
const address = "Jalan Asia Afrika";
// for () {};
