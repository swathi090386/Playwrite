
const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(user); // { name: 'John', age: 30, email: 'john@example.com' }

// Accessing properties
console.log(user.name); // John
console.log(user["age"]); // 30

//Dot notation → simple & readable
//Bracket notation → useful for dynamic keys

// Dynamic property access
const key = "email";
console.log(user[key]); // john@example.com

//This is powerful because:
// You can use variables to access properties
// Common in loops, APIs, forms, etc.

// Adding/modifying properties
user.city = "NYC"; //add new property
user.age = 31; // modify existing property

//Even though user is declared with const, you can modify its contents
//You just cannot reassign the whole object

//user = {}; // error

console.log(user) //{ name: 'John', age: 31, email: 'john@example.com', city: 'NYC' }

//Objects are mutable (can be changed)
// const protects the reference, not the data inside
// Dot vs bracket notation is very important for interviews
// Dynamic access (user[key]) is widely used in real projects

//What will this print?

const key1 = "name";
const key2 = "age";

console.log(user.key1);
console.log(user[key1]);