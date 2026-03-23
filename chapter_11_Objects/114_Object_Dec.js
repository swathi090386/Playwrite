const user = { name1: "John", age: 30, city: "NYC" };

// Basic destructuring
const { name1, age } = user;
console.log(name1);//john
console.log(age); // 30
//Extracts properties directly into variables
//  Variable names must match the object keys

// Rename variables
const { name1: userName, age: userAge } = user;
console.log(userName); //john
console.log(userAge); //30
//You want better variable names
//Avoid naming conflicts

// Default values
const { country = "USA" } = user;
console.log(country);//USA
//Since country doesn’t exist in user, default is used
// If property exists → default is ignored

const data = { user: { name: "John", address: { city1: "NYC" } } };
const { user: { address: { city1 } } } = data; 
console.log(city1); // NYC

//const { user: { address: { city3 } } } = data;

//👉 You do NOT have access to user variable anymore

//❌ This will fail:

//console.log(user); // ReferenceError
//✅ Safe Version (Recommended)

//const { user } = data;
//const { address: { city2 } } = user;

//👉 Safer and more readable (especially in real projects)

//🧠 Key Takeaways
//Destructuring = cleaner way to extract values
//You can:
//✅ rename variables
//✅ set defaults
//✅ extract nested values
//⚠️ Deep destructuring can reduce readability if overused
//🔥 Interview Twist

//What will this print?

const user1 = { name: "John" };

const { name, age1 = 25 } = user1;

console.log(name, age);

//✔ Output:

//John 25