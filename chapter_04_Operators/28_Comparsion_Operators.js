/*let x = 10;
x -= 3;// x = x - 3
console.log(x); // 7
*/

// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=

// Compasion Operator (will always result in the boolean, true or false)

// =, ==, ===
// = is assignment operator
// == is equality operator (type coercion) loose comparison
// === is strict equality operator (no type coercion) strict comparison


// > , < , >= , <= , !, !== , 

console.log(5 > 3); // true
console.log(5 < 3); // false

console.log(5 >= 5); // true
console.log(5 <= 4); // false

console.log(5 != 3); // true
console.log(5 != "5"); // false
console.log(5 !== "5"); // true (different types) loose comparison (==) would consider them equal, but strict comparison (!==) does not.
//console.log(5 !=== "5"); This doesn't excit

console.log(5 == "5"); // true (loose comparison) because it converts the string "5" to the number 5
console.log(5 === "5"); // false (different types) strict comparison (===) checks both value and type, so it returns false because one is a number and the other is a string.


// === Strict check we will check for both the datatype and value
// == Lose check we will check either value or data type.

// >== No