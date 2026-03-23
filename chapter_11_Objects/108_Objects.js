// Objects
// Key and value

let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 87, phone: 987654320 };

//Objects store data in key-value pairs
//Keys → name, age, phone
//Values → "Amit", 65, etc.

// Key will not be in the doubt quotes
// below key in doubt is actually JSON

let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };

//✔ Difference:
//JavaScript Object → keys don’t need quotes
//JSON → keys must be in double quotes

// -------

let a = { status: "pass" };

console.log(a.status);     // dot notation     //pass
console.log(a["status"]);  // bracket notation //pass

//a.status → when key is simple
//a["status"] → when key is dynamic or has spaces

let a1 = { status: 'pass' };
console.log(a1.status); // pass 

let b = a;  // b copies the REFERENCE, not the object
b.status = "fail";
console.log(a.status);// fail

//b does NOT copy the object
//It copies the reference (memory address)
//So both a and b point to the same object

// Two separate objects — different memory
let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d); //false

//Even though values are same
//They are stored in different memory locations

//Objects are reference types
//Assignment (=) copies reference, not value
//=== checks memory, not content
//Use deep comparison if needed (like JSON.stringify() or libraries)

//How to truly copy an object?

let original = { status: "pass" };

// shallow copy
let copy = { ...original };

copy.status = "fail";

console.log(original.status); 

//pass




