console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a quirk in JavaScript, null is considered an object)
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are also considered objects in JavaScript)
console.log(typeof function() {}); // "function" (functions are a special type of object in JavaScript)

// Typeof Operator: typeof

// The typeof operator is used to determine the type of a variable or expression. It returns a string indicating the type of the operand.

// Syntax: typeof operand
// Example:
console.log(typeof "hello"); // "string"
console.log(typeof 123); // int: "number"
console.log(typeof 31.4); // float: "number"
console.log(typeof []); // "object"
console.log(`${6 * 4}`); // "24" (template literals convert the expression to a string)

// typeof true // boolean
// typeof undefined // undefined
// typeof null // object (this is a quirk in JavaScript, null is considered an object)
// typeof {} // object
// typeof [] // object (arrays are also considered objects in JavaScript)
// typeof function() {} // function (functions are a special type of object in JavaScript)
// typeof undefined  -> undefined
// typeof null  -> object
// typeof [] -> object

