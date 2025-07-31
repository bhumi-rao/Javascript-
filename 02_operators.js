// Arithmetic Operators
let a = 10;
let b = 3;

console.log("a + b =", a + b);   // 13
console.log("a - b =", a - b);   // 7
console.log("a * b =", a * b);   // 30
console.log("a / b =", a / b);   // 3.333...
console.log("a % b =", a % b);   // 1

// Assignment Operators
let x = 5;
x += 2;  // same as x = x + 2
console.log("x after += 2:", x);

// Comparison Operators
console.log("a > b:", a > b);   // true
console.log("a == 10:", a == 10); // true
console.log("a === '10':", a === '10'); // false (strict comparison)
console.log("a != b:", a != b); // true

// Logical Operators
let isAdult = true;
let hasID = false;

console.log("Can enter:", isAdult && hasID); // false
console.log("Is minor or no ID:", !isAdult || !hasID); // true
