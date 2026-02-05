/* -------------------------- Mutable vs Immutable -------------------------- */
// Mutable => non primitive data type (object/array)
// Immutable => primitive data type (string, number, boolean, undefined, null)

// Value berbeda karena di-mutate
const scores = [10, 20, 30];
scores[1] = 50;
console.log(scores);

// Value berbeda karena di-re-assign
let points = [10, 20, 30];
points = [10, 50, 30];
console.log(points);

/* ------------------- Re-assignable vs Non re-assignable ------------------- */
// const => non assignable
// let/var => re-assignable
