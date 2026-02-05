# 🧩 Exercise 1: My First Object – "Gadget Saya"

## Scenario
Kamu baru beli gadget dan mau simpan datanya dalam satu object.

## Task
Buat object `myGadget` dengan property:
- `brand` (string)
- `type` (string)
- `color` (string)
- `year` (Date)
- `price` (number)

Buat method `getSummary()` yang mengembalikan string:
> Gadget saya adalah <brand> <type> warna <color> keluaran tahun <year>

Print hasil method ke console.

**✨ Bonus:** ubah warna gadget setelah object dibuat.

## Expected Output
```
Gadget saya adalah Samsung Galaxy warna Phantom Black keluaran tahun 2025
```

---

# 🧩 Exercise 2: Upgrade Mobil – Add, Update, Delete

## Scenario
Kamu punya object mobil lama, lalu melakukan upgrade.

## Starter Object
```javascript
const car = {
  brand: "Toyota",
  model: "Avanza",
  year: new Date("2019"),
};
```

## Task
- Tambahkan property `engine` (string)
- Tambahkan property `features` berupa array (contoh: `["ABS", "Airbag"]`)
- Update `year` jadi tahun sekarang
- Hapus property `model`
- Print object terakhir

## Expected Output
```javascript
{
  brand: "Toyota",
  year: 2026,
  engine: "1.5L",
  features: ["ABS", "Airbag"]
}
```

---

# 🧩 Exercise 3: Aman Akses Data – Optional Chaining

## Scenario
Data alamat user kadang lengkap, kadang tidak.

## Object
```javascript
const user = {
  name: "Nadhif",
  address: {
    city: "Jakarta",
  },
};
```

## Task
Print:
- `user.address.city`
- `user.address.postalCode` (pakai optional chaining)

Pastikan tidak error walaupun datanya tidak ada

## Expected Output
```
Jakarta
undefined
```

---

# 🧩 Exercise 4: Object Inspector – Built-in Methods

## Scenario
Kamu bikin fitur debug buat lihat isi object.

## Object
```javascript
const product = {
  id: 101,
  name: "Mechanical Keyboard",
  price: 750000,
  stock: 12,
};
```

## Task
- Print semua **keys**
- Print semua **values**
- Print key dan value **pertama saja**
- Loop `Object.entries()` lalu print:
```
  name: Mechanical Keyboard
  price: 750000
```

## Expected Output
```
Keys: [ 'id', 'name', 'price', 'stock' ]
Values: [ 101, 'Mechanical Keyboard', 750000, 12 ]
First key: id
First value: 101
name: Mechanical Keyboard
price: 750000
stock: 12
```

---

# 🧩 Exercise 5: Pass by Value vs Reference – "Oops, Kok Ikut Berubah?"

## Scenario
Kamu mengelola dua kelas siswa.

## Task A – Pass by Value
```javascript
let username = "Andhika";
let backupUsername = username;
backupUsername = "Budi";
```
- Print kedua variable
- Jelaskan kenapa yang satu tidak berubah

## Task B – Pass by Reference
```javascript
const teamA = ["Rina", "Sari", "Dewi"];
const teamB = teamA;
```
- Ubah `teamA[1]`
- Print `teamA` dan `teamB`
- Jelaskan kenapa dua-duanya berubah

**✨ Bonus:** buat cara supaya `teamB` tidak ikut berubah

## Expected Output
```
Task A:
username: Andhika
backupUsername: Budi

Task B:
teamA: [ 'Rina', 'Budi', 'Dewi' ]
teamB: [ 'Rina', 'Budi', 'Dewi' ]

Bonus (teamB tidak berubah):
teamA: [ 'Rina', 'Budi', 'Dewi' ]
teamB: [ 'Rina', 'Sari', 'Dewi' ]
```

---

# 🧩 Exercise 6: Clone Object – Spread Operator

## Scenario
Kamu mau bikin salinan object tanpa mengubah yang asli.

## Object
```javascript
const laptop = {
  brand: "Asus",
  ram: 8,
  storage: 512,
};
```

## Task
- Clone object `laptop` menggunakan **spread operator** (`...`)
- Ubah property `ram` pada clone jadi `16`
- Print kedua object (original dan clone)
- Pastikan object asli tidak berubah

## Expected Output
```
Original laptop: { brand: 'Asus', ram: 8, storage: 512 }
Cloned laptop: { brand: 'Asus', ram: 16, storage: 512 }
```

---

# 🧩 Exercise 7: Merge Objects – Spread Operator

## Scenario
Kamu punya data user dari 2 sumber berbeda dan mau gabungkan.

## Objects
```javascript
const basicInfo = {
  name: "Dewi",
  age: 23,
};

const contactInfo = {
  email: "dewi@example.com",
  phone: "08123456789",
};
```

## Task
- Gabungkan kedua object menggunakan **spread operator**
- Tambahkan property baru `city: "Bandung"` saat merge
- Print object hasil merge

## Expected Output
```javascript
{
  name: "Dewi",
  age: 23,
  email: "dewi@example.com",
  phone: "08123456789",
  city: "Bandung"
}
```

---

# 🧩 Exercise 8: Destructuring Object – Extract Data

## Scenario
Kamu punya object product dan mau ambil beberapa data saja.

## Object
```javascript
const smartphone = {
  brand: "iPhone",
  model: "15 Pro",
  price: 15000000,
  color: "Titanium Blue",
  storage: 256,
};
```

## Task
- Extract `brand`, `price`, dan `storage` menggunakan **destructuring**
- Sisanya simpan dalam variable `otherSpecs` menggunakan **rest operator** (`...`)
- Print semua variable

## Expected Output
```
brand: iPhone
price: 15000000
storage: 256
otherSpecs: { model: '15 Pro', color: 'Titanium Blue' }
```

---

# 🧩 Exercise 9: Destructuring with Default Values

## Scenario
Kamu terima data dari API, tapi tidak semua field selalu ada.

## Object
```javascript
const apiResponse = {
  username: "john_doe",
  email: "john@example.com",
  // role tidak ada
};
```

## Task
- Destructure `username`, `email`, dan `role`
- Berikan **default value** `"user"` untuk `role`
- Print semua variable

## Expected Output
```
username: john_doe
email: john@example.com
role: user
```

---

# 🧩 Exercise 10: Nested Destructuring

## Scenario
Kamu punya object nested dan mau ambil data dari level dalam.

## Object
```javascript
const order = {
  orderId: "ORD-001",
  customer: {
    name: "Andi",
    address: {
      city: "Jakarta",
      postalCode: "12345",
    },
  },
  total: 500000,
};
```

## Task
- Extract `orderId` dan `total` dari level pertama
- Extract `name` dari `customer`
- Extract `city` dari `address`
- Gunakan **nested destructuring** dalam satu statement

## Expected Output
```
orderId: ORD-001
name: Andi
city: Jakarta
total: 500000
```

---

# 🎯 Mini Challenge (Optional, Fun Mode)

## "Car Comparison"
- Buat 2 object mobil
- Buat method `isMoreExpensive(otherCar)`
- Method mengembalikan: `true` / `false`

## Expected Output
```
car1.isMoreExpensive(car2) → true
car2.isMoreExpensive(car1) → false
```