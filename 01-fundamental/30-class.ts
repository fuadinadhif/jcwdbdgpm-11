/* ---------------------------------- Basic --------------------------------- */
// Class: blueprint untuk membuat sebuah object
class UserData {
  name: string;
  age: number;
  gender?: string;

  constructor(nama: string, age: number = 100, gender?: string) {
    this.name = nama;
    this.age = age;
    this.gender = gender;
  }
}

const userData1 = new UserData("John Doe", 70, "Male");
console.log(userData1);

const userData2 = new UserData("Jane Doe", 50);
console.log(userData2);

const userData3 = new UserData("Christopher Columbus", 100, "Male");
console.log(userData3);

// const userData1 = { name: "John Doe", age: 70, gender: "Male" };
// const userData2 = { name: "Jane Doe", age: 50, gender: "Female" };
// const userData3 = { name: "Christhopher Columbus", age: 100, gender: "Male" };

/* ----------------------------- Access Modifier ---------------------------- */
// cara kita menentukan property class ini bisa diakses dari mana saja
// 1. public: property bisa diakses dari mana saja
// 2. private: property hanya bisa diakses dari dalam class
// 3. protected

class Product {
  public name: string;
  price: number;
  #sku: string;

  constructor(name: string, price: number, sku: string) {
    this.name = name;
    this.price = price;
    this.#sku = sku;
  }

  printInfo() {
    return `Product ini namanya adalah ${this.name} dan harganya adalah Rp. ${this.price}`;
  }
}

const product1 = new Product("Coffee Beans", 21_000, "CB-01");
console.log(product1.name);
console.log(product1.price);
console.log(product1.sku);
console.log(product1.printInfo());

/* ----------------------------- Getter & Setter ---------------------------- */
// Cara kita mengontrol akses data private
class User {
  public name: string;
  private _age: number | string;

  constructor(name: string, age: number) {
    this.name = name;
    this._age = age;
  }

  // getter
  get age() {
    return `Hello umurku adalah ${this._age}`;
  }

  // setter
  set age(value: number) {
    if (value < 0) {
      throw new Error("Age cannot be negative");
    }

    this._age = value;
  }
}

const user1 = new User("Angelina Jolie", 50);
console.log(user1);
console.log(user1.age);
// user1.age = -10;
console.log(user1.age);

/* ----------------------------- OOP Principles ----------------------------- */
// 1. Encapsulation
// 2. Inheritance
// 3. Polymorphism
// 4. Abstraction

// 1. Encapsulation: menyembunyikan detail internal dan expose hanya yang perlu
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance = this.balance + amount;
  }

  // getBalance() {
  //   return this.balance;
  // }
}

const account1 = new BankAccount();
console.log(account1);
console.log(account1.balance);

// 2. Inherintace: pewarisan
class ProductData {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name() {
    return this._name;
  }

  set price(value: number) {
    if (value < 0) {
      throw new Error("Price cannot be negative");
    }

    this._price = value;
  }
}

class Book extends ProductData {
  author: string;

  constructor(name: string, price: number, author: string) {
    super(name, price);
    this.author = author;
  }
}

class Fruit extends ProductData {
  weight: number;

  constructor(name: string, price: number, weight: number) {
    super(name, price);
    this.weight = weight;
  }
}

const harryPotter = new Book("Harry Potter", 5000, "J.K Rowling");
const banana = new Fruit("Banana", 1000, 2000);

console.log(harryPotter);
console.log(harryPotter.author);
console.log(harryPotter.name);
console.log(harryPotter.price);

/* ---------------------------------- NOTES --------------------------------- */
// new:
// 1. {}
// 2. {} = this
// 3. return {}

// Typescript Implicit: kita minta TS yang nentuin tipe datanya sendiri
let age = 10;

// TypeScript Expilicit: TS ini tipe datamu ya
let phoneNumber: string;
let address: string = "Jl. Setiabudi";
