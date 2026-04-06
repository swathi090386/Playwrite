// Promise Finally

let testRun = new Promise(function (resolve, reject) {
    reject("Assertion Failed");

});

testRun.then(function (data) { // Resolve
    console.log(data);
}).catch(function (error) { // Reject
    console.log(error);
}).finally(function () { // Always Executed!
    console.log("I will be executed anyhow!!");
});

// .then() runs ONLY when the promise resolves successfully.
// .catch() runs ONLY when the promise is rejected.
// .finally() ALWAYS runs — whether the test passed or failed. 
// Just like afterEach() in Cypress or Playwright.
//then() and catch() are completely skipped when finally() is executed.

//** Output: 
// Assertion Failed
// I will be executed anyhow!!