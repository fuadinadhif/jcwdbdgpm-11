/* -------------------------------------------------------------------------- */
/*                                   METHOD                                   */
/* -------------------------------------------------------------------------- */
// Fitur spesial yang ada di sebuah value/tipe data

/* ---------------------------- 1. String Method ---------------------------- */
console.log("MAu maKAn SeKAranG".toLowerCase());
console.log("MAu maKAn SeKAranG".toUpperCase());

console.log("Hari ini cerah sekali".slice(0, 8));

console.log(
  "Noel sedang jalan-jalan di depan rumah Noel".replaceAll("Noel", "****"),
);

console.log(
  "Mas Arief turun ke kantin untuk membeli bala-bala".split(" ").join(""),
);

/* ---------------------------- 2. Number Method ---------------------------- */
console.log((10.5678).toFixed(2));

/* ----------------------------- 3. Date Method ----------------------------- */
const birthdate = new Date("1998-05-01");

console.log(birthdate.getFullYear());
console.log(birthdate.getMonth());
console.log(birthdate.getDay());
console.log(birthdate.getDate());
console.log(birthdate.getTime());

birthdate.setMonth(11);

console.log(birthdate);

/* ---------------------------------- NOTES --------------------------------- */
// let array = ["A", "B", "C"];
// console.log(array[1]);
