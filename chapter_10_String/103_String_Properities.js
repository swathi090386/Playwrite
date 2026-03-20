// String Properties & Basic Access

let str = "Hello, World!";
// Length ( start from 1)
console.log(str.length);

// Access by index
console.log(str[0]); // "H"
console.log(str[7]); // "W"
console.log(str[20]); // undefined

// at() method (supports negative indexing) 
console.log(str.at(-1));// "!"
console.log(str.at(-6));// "W"

// charAt()
str.charAt(0);   // "H"
// charCodeAt() — Unicode value
str.charCodeAt(0);  // 72 
//str[0] → "H"
// Unicode value of "H" → 72
