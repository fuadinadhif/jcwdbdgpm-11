/* --------------------------------- AND && --------------------------------- */
// true && true => true
// true && false => false
// false && true => false
// false && false => false
console.log(10 == 10);
console.log(10 == 5);
console.log(10 == 10 && 10 == 5);

/* ---------------------------------- OR || --------------------------------- */
// true || true => true
// true || false => true
// false || true => true
// false || false => false
console.log(10 == 10);
console.log(10 == 5);
console.log(10 == 10 || 10 == 5);

/* ---------------------------------- NOT ! --------------------------------- */
console.log(!10 == 10);
console.log(!true);
console.log(!"");
console.log(!"abc");

/* -------------------------- Priority/Precendence -------------------------- */
// && > ||
// left to right
(10 === 5 && "a" != "b") || true;
false || true;
true;

console.log((10 === 5 && "a" != "b") || true);
