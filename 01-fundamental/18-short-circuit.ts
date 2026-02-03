/* ---------------------------- short circuit and --------------------------- */
// Akan mengambil nilai falsy pertama atau truthy terakhir jika tidak ada nila falsy
console.log(10 && null);
console.log("" && null);
console.log(0 && null);
console.log(10 && 100);

// isLogin && <LoginButton/>

/* ---------------------------- short circuit or ---------------------------- */
// Akan mengambil nilai truthy pertama atau falsy terakhir jika tidak ada nila truthy
console.log(10 || null);
console.log("" || null);
console.log(0 || null);
console.log(10 || 100);

const gender = prompt("Input yout gender!") || "Non binary";

/* -------------------- logical operator vs short cirucit ------------------- */
// logical: 10 === 5 && 5 < 10
// short circuit: 10 && 5
