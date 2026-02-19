import "./App.css";

import Hello from "./Hello";
import Nihao from "./Nihao";

export default function App() {
  const name = "Zakaria";

  return (
    <div>
      <h1 style={{ textDecoration: "underline", fontSize: "72px" }}>
        Welcome to React
      </h1>
      <p>Hi, {name}!</p>
      <Hello userName={name} age={70} />
      <Nihao userName={name} />
    </div>
  );
}

/* ---------------------------------- NOTES --------------------------------- */
// Cara Membuat Component
// 1. Buat sebuah fungsi JS
// 2. Nama fungsi harus menggunakan PascalCase
// 3. Pastikan fungsi-nya mengembalikan (return) element HTML
// 4. Export fungsi tersebut (boleh default/named export)

// JSX (JavaScript with X)
// 1. Gabungan JS dan HTML
// 2. JS hanya boleh ditulis SEBELUM keyword `return`
// 3. HTML hanya boleh ditulis SETELAH keyword `return`
// 4. Hanya boleh mengembalikan satu element HTML per satu komponen
// 5. PENGECUALIAN: JS bisa ditulis di dalam HTML, asal menggunakan slot expression `{}`
