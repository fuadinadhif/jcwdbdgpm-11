/* --------------------------------- IF ELSE -------------------------------- */
// if
// if else
// if else if else

// Umur di bawah 10 tahun => Where is your parent?
// Umur di bawah 17 tahun => Go away!
// Umur di atas 18 tahun => Welcome
let userAge = 16;

// Sintaks oke tapi urutan salah
if (userAge >= 18) {
  console.log("Welcome 😃");
} else if (userAge >= 10) {
  console.log("Where is your parent?");
} else {
  console.log("Go away!");
}

// Sintaks dan urutan benar
if (userAge <= 10) {
  console.log("Where is your parent?");
} else if (userAge <= 15) {
  console.log("Wrong place brother");
} else if (userAge <= 17) {
  console.log("Go away!");
} else {
  console.log("Welcome 😃");
}

// Date example
const productionDate = new Date("2025-01-01");
// const expiredDate = new Date(
//   productionDate.getTime() + 1000 * 60 * 60 * 24 * 30 * 12,
// );
const expiredDate = new Date(productionDate.setFullYear(2026));
console.log(expiredDate);

if (productionDate > expiredDate) {
  console.log("Tetot");
} else {
  console.log("Sip");
}

// Nested if
const value = 101;

if (value > 100) {
  console.log("Ok");
  if (value > 1000) {
    console.log("Mantap");
  }
}

/* ------------------------------- SWITCH CASE ------------------------------ */
const fruit = "Apple";

switch (fruit) {
  case "Apple":
    console.log("Red");
    break;
  case "Grape":
    console.log("Purple");
    break;
  default:
    console.log("Black");
}

/* ---------------------------------- NOTES --------------------------------- */
let user = "Budi";

if (user) {
  router("/dashboard");
} else {
  router("/login");
}
