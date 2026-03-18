// Checking Array

//check if something is an array

let result = Array.isArray([1, 2, 3]);
console.log(result); // true

let result1 = Array.isArray([""]);
console.log(result1); // true

let result2 = Array.isArray("");
console.log(result2); // false

//every
let r = [80 , 95, 85].every(s => s>= 70);
console.log(r); // true

let r1 = [80 , 95, 85].every(s => s < 70);
console.log(r1); // false

//some
let r2= [80 , 95, 85].some(s => s>= 70);
console.log(r2); // true

let r3 = [80 , 95, 85].some(s => s < 70);
console.log(r3); // false

//some - AT LEAST ONE must pass
let b= [80 , 60, 85].some(s => s < 70);
console.log(b); // true

let c= [80 , 90, 85].some(s => s < 70);
console.log(c); // false

