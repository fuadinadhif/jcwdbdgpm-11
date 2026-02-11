// Callback: sebuah fungsi yang kita berikan ke fungsi lain untuk dijalankan nanti

function greet(name: string): string {
  return `Hello ${name}!`;
}

function processUser(name: string, callback: (name: string) => string): string {
  return callback(name);
}

const result = processUser("Madha", greet);

// console.log(result);

/*
1. 
function greet(name: string): string {
  return `Hello ${name}!`;
}
  
processUser(name: string, callback: (name: string) => string): string {
  return callback(name);
}

2. 
processUser("Madha", greet);

3.
processUser("Madha", greet) {
  return greet("Madha");
}

4.
processUser("Madha", greet) {
  return function greet("Madha") {
    return `Hello ${"Madha"}!`;
  }
}

5. 
processUser("Madha", greet) {
  return `Hello ${"Madha"}!`
}

6.
const result = `Hello ${"Madha"}!`

7.
console.log("Hello Madha!")
*/

// Kenapa kita butuh callback?
// Karena kita kadang punya beberapa fungsi yang ingin kita atur urutan eksekusi-nya

// 1. Without callback
// function boilWater() {
//   const delay = Math.ceil(Math.random() * 2000);
//   setTimeout(() => console.log("Water boiled"), delay);
// }

// function addCoffe() {
//   const delay = Math.ceil(Math.random() * 2000);
//   setTimeout(() => console.log("Coffee added"), delay);
// }

// function serveCoffee() {
//   const delay = Math.ceil(Math.random() * 2000);
//   setTimeout(() => console.log("Coffee served ☕"), delay);
// }

// boilWater();
// addCoffe();
// serveCoffee();

// 2. With callback
function boilWater(callback: () => void) {
  const delay = Math.ceil(Math.random() * 2000);
  setTimeout(() => {
    console.log("Water boiled");
    callback();
  }, delay);
}

function addCoffe(callback: () => void) {
  const delay = Math.ceil(Math.random() * 2000);
  setTimeout(() => {
    console.log("Coffee added");
    callback();
  }, delay);
}

function serveCoffee() {
  const delay = Math.ceil(Math.random() * 2000);
  setTimeout(() => {
    console.log("Coffee served ☕");
  }, delay);
}

boilWater(() => {
  addCoffe(() => {
    serveCoffee();
  });
});
