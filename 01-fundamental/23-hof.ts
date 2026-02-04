// HOF - Higher Order Function
// 1. Fungsi yang menerima fungsi lain sebagai argumennya
// 2. Fungis yang me-return fungsi lain sebagai hasil return-nya
// 3. Both

// 1. First example
function sayHello(name: string) {
  return function () {
    return `Hello, ${name}`;
  };
}

const sayHelloToBudi = sayHello("Budi");

console.log(sayHello("Budi"));
console.log(sayHelloToBudi());

// 2. Second Example
type logType = "INFO" | "WARNING" | "ERROR";

// 2.1 Without HOF
function log(type: logType, message: string) {
  return `[${type}]: ${message}`;
}

console.log(log("INFO", "Server is running!"));
console.log(log("ERROR", "Error in line 30"));

// 2.2 With HOF
function createLogger(type: logType) {
  return function (message: string) {
    return `[${type}]: ${message}`;
  };
}

const infoLog = createLogger("INFO");
const errorLog = createLogger("ERROR");
const warningLog = createLogger("WARNING");

console.log(infoLog("Ini informasi"));
console.log(infoLog("Informasi lainnya"));
console.log(errorLog("Error nih"));
