const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj)); // [ 'a', 'b', 'c' ]
console.log(Object.values(obj)); // [ 1, 2, 3 ]
console.log(Object.entries(obj));// [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

const user = { name: "John", age: 30 };

for (const key in user) {
    console.log(`${key}: ${user[key]}`);//name: John  age: 30
}
// Object.keys/values/entries
Object.keys(user).forEach(key => { //name    age
    console.log(key);
});

Object.entries(user).forEach(([key, value]) => { //name: John  age: 30
    console.log(`${key}: ${value}`);
});

//| Method             | Iterates | Includes Inherited? | Use Case           |
// ------------------ | -------- | ------------------- | ------------------ |
//`for...in`         | keys     | ✅ Yes               | Rare / careful use |
//`Object.keys()`    | keys     | ❌ No                | Safe iteration     |
//`Object.values()`  | values   | ❌ No                | Only values        |
//`Object.entries()` | both     | ❌ No                | Best overall ✅     |

const obj1 = Object.create({ inherited: 1 });
obj1.own = 2;

for (let key in obj1) {
  console.log(key);
}

//✔ Output:

//own
//inherited  // ⚠️ comes from prototype

//👉 But:

Object.keys(obj); // ['own']

//Transform object → array for validation:

Object.entries(user).map(([key, value]) => `${key}:${value}`);
//🧠 Summary
//Use Object.entries() → clean + modern ✅
//Avoid for...in unless you understand prototypes ⚠️
//keys, values, entries are frequently used in APIs & test data