// Returns a value
// function getStatus(code) {
//     if (code >= 200 && code < 300) return "success";
//     if (code >= 400 && code < 500) return "client error";
//     if (code >= 500) return "server error";
// }

// getStatus(200); // "success"
// getStatus(404);// "client error"
// getStatus(500);// "server error"



// function logTest(name) {
//     console.log(`Running: ${name}`);
//     // no return statement
// }
// let result = logTest("Login");
// console.log(result);// undefined, as there is no return statement in the function, it returns undefined by default.

// Hoisting
// ✅ Function Declaration — hoisted


console.log(greet("Alice"));// Works because function declarations are hoisted

function greet(name) {
    return `Hello, ${name}!`;
}

// ❌ Expression — NOT hoisted

// sayHi("Bob");

// const sayHi = function (name) {
//     return `Hi, ${name}!`;
// };