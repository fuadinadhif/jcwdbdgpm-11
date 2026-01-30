/* ------------------------------ intro console ----------------------------- */
console.log("Hello world!");
console.info("Ini informasi");
console.warn("Ini peringatan");
console.error("Ini error");

/* -------------------------------- comments -------------------------------- */
// single line comment
/* 

multi line comment

*/

/* ----------------------------- intro variable ----------------------------- */
// let, const, var
let city = "Bandung";
console.log(city + " oke");
city = "Jogja";
console.log(city + " " + "dingin");
console.log(city + " macet");
console.log(city + " tenang");

/* -------------------------- var vs (let & const) -------------------------- */
// let & const:
// 1. Variable yang dibuat menggunakan const/let hanya bisa diakses di dalam scope tempat dia dibuat atau scope yang lebih dalam
// 2. Akan error kalau diakses sebelum dibuat

// var
// 1. Variable yang dibuat menggunakan var akan selalu bersifat global
// 2. Tidak akan error walau diakses sebelum dibuat

// global scope
let age = "50";
console.log(age);
// console.log(address);
console.log(gender);

{
  // lv 1 scope
  let address = "Asia Afrika";
  var gender = "Male";
  console.log(age);
  console.log(address);
  console.log(gender);

  {
    // lv 2 scope
    console.log(address);
    console.log(gender);
  }
}

{
}

console.log(gender);

console.log(email);
var email = "example@mail.com";

/* ------------------------------- let & const ------------------------------ */
// 1. Block scope (variable hanya bisa diakses di block scope yang sama atau block scope yang lebih dalam)
let globalName = "Joko";
// console.log(scope1Name);

{
  let scope1Name = "Andi";
  console.log(scope1Name);

  {
    let scope2Name = "Radit";
    console.log(scope1Name);
  }
}

/* ------------------------------ let vs const ------------------------------ */
let country = "Indonesia"; // assignment
console.log(country);
country = "Singapore"; // ganti/re-assign
console.log(country);

const score = 100;
console.log(score);
score = 1000;
console.log(score);
