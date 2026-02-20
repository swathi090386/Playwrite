// ==, ===, = 

let a = 5;

// console.log(5 = 5);


console.log(5 == 5); //true
console.log(5 === 5); //true

    console.log(5 == "5"); //true // == compares based on the values 
    console.log(5 === "5"); //false   // number, string // === compares based on the data type 

 console.log(null == undefined); // special rule, they only equal each other) // true
 console.log(null === undefined); // false (strict — different types) // false

console.log(null == 0); // false
console.log(null == "" ); // false
console.log(undefined == 0); // false
console.log(undefined == ""); // false

console.log(5 == 5.0); // true (5 and 5.0 are considered equal in value)
console.log(5 === 5.0); // true (both are of the same type and value)
console.log(5 === 5.01); // false (5 and 5.01 are not equal in value)