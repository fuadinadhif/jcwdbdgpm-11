// Callback: sebuah fungsi yang kita berikan ke fungsi lain untuk dijalankan nanti

function greet(name: string): string {
  return `Hello ${name}!`;
}

function processUser(name: string, callback: (name: string) => string): string {
  return callback(name);
}

const result = processUser("Madha", greet);

console.log(result);

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
