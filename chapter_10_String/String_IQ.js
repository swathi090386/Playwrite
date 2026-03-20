// ✅1. Validate URL contains expected environment

let url = "https://staging.myapp.com/dashboard";

console.log(url.includes("staging")); // true

console.log(url.startsWith("https")); // true

console.log(url.endsWith("/dashboard"));// true

// ✅2. Extract status code from log message
let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";
let status = log.match(/Status: (\d+)/)[1]; 
console.log(status); //Answer: "500"

// ✅3. Format test ID with leading zeros
let env = "staging"; 
let module = "auth";
let count = 7; 
let testId = `${env}_${module}_${String(count).padStart(3, "0")}`;// padStart(3, "0") ensures the count is always 3 digits with leading zeros if necessary
console.log(testId); // staging_auth_007

// ✅4. Normalize user input for comparison
 let actual = " PASS "; 
 let expected = "pass"; 
 actual.trim().toLowerCase() === expected; // true

// ✅5. Parse query parameters from URL
 let testUrl = "https://app.com/search?query=login&page=2&sort=asc"; 
 let params = Object.fromEntries( testUrl.split("?")[1].split("&").map(p => p.split("=")) );
  console.log(params); // { query: "login", page: "2", sort: "asc" }

 // ✅6. Mask sensitive information in logs
let token = "Bearer eyJhbGciOiJIUzI1NiJ9.secret"; 
let masked = token.replace(/(?<=Bearer ).+/, "***REDACTED***");
console.log(masked); // "Bearer ***REDACTED***"

//1)What is the output?
/*
let str = "  PASS  ";
console.log(str.trim().toLowerCase());
 a) " pass " 
 b) "PASS" 
c) "pass"
d) " pass " 

Answer: c)"pass"

2)What does "pass,fail,skip".split(",").length return?

 a) 1
 b) 2
 c) 3
 d) 4

 Answer: c)3
---

3)What is the output?

let str = "hello";
str[0] = "H";
console.log(str);

 a) "Hello" 
 b) "hello"
 c) "H"
 d) Error

 Answer: b)"hello"
---

 4)Which correctly extracts "staging" from this URL?


let url = "https://staging.example.com";

a) url.split(".")[0]
 b) url.slice(8, 15)
c) url.split("://")[1].split(".")[0]
d) Both b and c

Answer: d)Both b and c
---

5)What does this return?

"Error: 404 Not Found".match(/\d+/g);

a) "404" 
b) ["404"]
c) [404] 
d) null 

Answer:b) ["404"]

*/