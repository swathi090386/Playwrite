// Transforming Strings

let str = "  Hello, World!  ";
console.log(str.toUpperCase()); // "  HELLO, WORLD!  "
console.log(str.toLowerCase()); // "  hello, world!  "

// Trim whitespace
console.log(str.trim()); // "Hello, World!"

console.log(str.trimStart()); // "Hello, World!  "
console.log(str.trimEnd()); // "  Hello, World!"

// Replace
let msg = "Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS")); // // "Test: PASS. Retry: FAIL."  (first only)
console.log(msg.replaceAll("FAIL", "PASS")); // "Test: PASS. Retry: PASS." (all occurrences)
console.log(msg.replace(/FAIL/g, "PASS")); // replace all with Regex

// Concatenation

console.log("Hello" + " " + "World"); // "Hello World"
console.log("Hello".concat(" ", "World")); // "Hello World"
console.log(`${"Hello"} ${"World"}`);// "Hello World" (template literal)

let url = "https://app.vwo.con?app=pramod";// Replace "app" with "qa"
console.log(url.replace(/app/g, "qa")); // "https://qa.vwo.con?qa=pramod" (regex with global flag)

// Splitting & Joining
console.log("pass,fail,skip".split(","));  // ["pass", "fail", "skip"]
console.log("hello".split(""));  // ["h","e","l","l","o"]

console.log("test_login_pass".split("_").join(" ")); // "test login pass"


// Template literal (joining with format)
let parts = ["2024", "03", "07"]; // Join with dashes
let date = parts.join("-");
console.log(date);// "2024-03-07"