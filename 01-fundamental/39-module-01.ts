/* ------------------------------ named import ------------------------------ */
import { greetPeople, country, Product, add } from "./40-module-02.ts";

const fullName = "Artidjo Al Kautsar";

console.log(greetPeople(fullName));
console.log(add(100, 5));

/* ----------------------------- default import ----------------------------- */
import dikali10 from "./40-module-02.ts";

console.log(dikali10(5));

/* ---------------------------------- NOTES --------------------------------- */
// 1. Import named
// - Import harus menggunakan {}
// - Nama value yang diimport harus sama dengan export-nya

// 2. Import default
// - Import tidak boleh menggunakan {}
// - Nama value yang diimport boleh diganti, boleh juga sama
