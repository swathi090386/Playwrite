// Extracting Substrings


let str = "Login_Test_Pass_001";

// slice(start, end) — negative indexes supported
console.log(str.slice(0, 5)); // (0,4) -> "Login"
console.log(str.slice(11)); // "Pass_001" (till end)
console.log(str.slice(-3)); // "001" (last 3 chars)
let testNumber = str.slice(-3); //testNumber = "001"
console.log(testNumber=str.slice(-3));
// substring(start, end) — no negatives (treats as 0)
console.log(str.substring(6, 10));  // "Test"

// at() for single chars
console.log(str.at(0));   // "L"
console.log(str.at(-1));  // "1"