let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// {
//   1)value: "Login",    //The actual value stored in the property.
//   2)writable: true,       ← can change the value //Can we change the value?
//✔ Example:
//obj.name = "Signup";
//console.log(obj.name); // Signup ✅
//Object.defineProperty(obj, "name", { writable: false })
// obj.name = "Test";
//console.log(obj.name); // still "Login"
//   3)enumerable: true,     ← shows in for...in / Object.keys()
//for (let key in obj) {
 // console.log(key); // "name"
//}
//❌ If enumerable: false:

//Object.defineProperty(obj, "name", { enumerable: false });

//console.log(Object.keys(obj)); // []
//   4)configurable: true    ← can delete or 
//delete the property
// change its descriptor

//✔ Example:

//delete obj.name; // works ✅

// }

//| Property     | Purpose                    |
//| ------------ | -------------------------- |
//| value        | actual data                |
//| writable     | can modify value           |
//| enumerable   | shows in loops             |
//| configurable | can delete/change settings |

//output: {
  //value: 'Login',
  //writable: true,
  //enumerable: true,
  //configurable: true
//}

//What happens here?

let obj1 = {};

Object.defineProperty(obj1, "role", {
  value: "admin",
  writable: false,
  enumerable: false,
  configurable: false
});

obj1.role = "user";
console.log(obj1.role);
 
//output:admin

