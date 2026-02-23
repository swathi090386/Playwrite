let amul = null;
let val = amul ?? "nandani milk";
let val2 = null ?? "default";   // "default" (?? returns right side if left is null/undefined)

// Modern JS - Typescript.

val = "which milk? -> " + val;
console.log(val); // which milk? -> nandani milk

console.log(val2); // default
// very useful in test data handling.

let userInput = null;
let defaultValue = "Default Value";
let result = userInput ?? defaultValue;
console.log(result); // Default Value (because userInput is null, so it falls back to defaultValue)

userInput = "User Provided Value";
result = userInput ?? defaultValue;
console.log(result); // User Provided Value (because userInput is not null, so it uses the user input)