// object: kumpulan data yang saling terikat

const carBrand = "Toyota";
const carModel = "Alphard";
const carColor = "Black";
const carYear = new Date("2020");
const price = 1_400_000_000;

/* ---------------------------- Pembuatan Object ---------------------------- */
/*
const objectName = {
  key1: value1, // (primitive/non primitive data type) property
  key2: value2, // property
  key3: value3 // (function) method
}
*/
const car1 = {
  brand: "Toyota",
  model: "Alphard",
  color: "Black",
  year: new Date("2020"),
  price: 1_400_000_000,
  printInfo: function () {
    return `Mobilku adalah ${car1.brand} keluaran tahun ${car1.year.getFullYear()}`;
  },
};

const car2 = {
  brand: "Honda",
  model: "Odyssey",
  color: "White",
  year: new Date("2018"),
  price: 500_000_000,
  printInfo() {
    return `Mobilku adalah ${this.brand} keluaran tahun ${car2.year.getFullYear()}`;
  },
};

/* ------------------ Mengakses data di dalam sebuah Object ----------------- */
// Akses property:
// - dot (.) notation
// - square bracket ([]) notation
console.log(car1.brand);
console.log(car1["brand"]);
console.log(car2.price);
console.log(car2["price"]);

// Akses method:
console.log(car1.printInfo());
console.log(car1["printInfo"]());

/* ---------------------------- Menambah property --------------------------- */
console.log(car1.engineType);
car1.engineType = {
  firstType: ["01", "02", "03"],
  secondType: "vEngine 4 Silinder",
};
console.log(car1.engineType.firstType[1]);

/* ------------------------- Mengubah value property ------------------------ */
console.log(car1.year);
car1.year = new Date("2026");
console.log(car1.year);

/* --------------------------- Menghapus property --------------------------- */
console.log(car1.price);
delete car1.price;
console.log(car1.price);

/* ------------------------- Optional chaining (?.) ------------------------- */
console.log(car1.country);
console.log(car1.country?.province);

/* ------------------------- Object built in method ------------------------- */
// Object.keys(): mengambil key dari suatu object
console.log(Object.keys(car1));
console.log(Object.keys(car1)[0]);

// Object.values(): mengambil value dari suatu object
console.log(Object.values(car1));
console.log(Object.values(car1)[0]);

// Object.entries(): mengambil key dan value dari suatu object
console.log(Object.entries(car1));
console.log(Object.entries(car1)[0]);
