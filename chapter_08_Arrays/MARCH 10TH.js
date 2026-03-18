//1.API Response Validation
//You receive an array of API response codes. Write code to:
//1.	Check if ALL responses are successful (200–299)
//2.	Find the FIRST non-success code
//Return all unique error codes


let responseCodes = [200, 201, 204, 301, 404, 500, 201, 404];

// 1. Check if ALL responses are successful (200–299)
let allSuccessful = responseCodes.every(code => code >= 200 && code <= 299);


// 2. Find the FIRST non-success code
let firstNonSuccess = responseCodes.find(code => code < 200 || code > 299);

// 3. Return all unique error codes
let uniqueErrorCodes = [...new Set(responseCodes.filter(code => code < 200 || code > 299))];

console.log("All responses successful:", allSuccessful);
console.log("First non-success code:", firstNonSuccess);
console.log("Unique error codes:", uniqueErrorCodes);
//output: All responses successful: false
//First non-success code: 301
//Unique error codes: [ 301, 404, 500 ]

//==================================================================

let responseTimes = [320, 85, 1200, 450, 99];

let sorted = responseTimes.sort((a, b) => a - b);

console.log("Fastest:", sorted[0]); // Fastest: 51

//===================================================================

let suite1 = [{ name: "login", status: "pass" }];
let suite2 = suite1.map(test => ({ ...test }));

suite2[0].status = "fail";

console.log(suite1[0].status); // pass