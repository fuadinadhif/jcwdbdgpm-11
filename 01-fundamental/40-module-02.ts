/* ------------------------------ named export ------------------------------ */
export function greetPeople(name: string) {
  return `Hello ${name}!`;
}

export const country = "Australia";

export const userData = { name: "Budi", age: 70 };

export class Product {}

export const add = (num1: number, num2: number) => num1 + num2;

/* ----------------------------- default export ----------------------------- */
export default function multiplyBy10(num: number) {
  return num * 10;
}

/* ---------------------------------- NOTES --------------------------------- */
// 1. Export named:
// - Boleh dilakukan berkali-kali di satu file yang sama
// - export [VALUE]

// 2. Export default
// - Hanya boleh dilakukan 1 kali per satu file
// - export default [VALUE]
