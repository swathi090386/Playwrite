// Primitive data types - call by value
// Primitive, number, string, boolean, null, undefined
let a = 10;
let b = a;
b = 99;
console.log(a); //10

//a stores value 10
//b gets a copy of that value
//Changing b does NOT affect a
//a → 10
//b → 10 → changed to 99

// Objects — copied by REFERENCE , call by ref. 
// Reference - object, array, function
let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val);

//obj1 and obj2 point to the same object in memory
//Changing via obj2 affects obj1

//📦 Think:

//obj1 ──┐
  //     ├──> { val: 10 → 99 }
//obj2 ──┘

//JavaScript is technically:

//❗ Pass-by-value always, but for objects the value is a reference

//👉 Meaning:

//The reference itself is copied
//But both variables still point to the same object

let obj11 = { val: 10 };
let obj2 = { ...obj11 };

obj2.val = 99;

console.log(obj11.val);//10
//Spread operator { ...obj1 } creates a new object (shallow copy)

//| Type      | Copy Behavior    | Effect of Change  |
//| --------- | ---------------- | ----------------- |
//| Primitive | Value copied     | Independent ✅     |
//| Object    | Reference copied | Shared changes ⚠️ |
