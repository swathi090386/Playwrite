
let p = new Promise(function (resolve, reject) {
     resolve(42);
 });

 p.then(function (value) {
     console.log("Answer:", value);
     return value * 2;
 });

 // In this example, we create a promise that resolves with the value 42.
 // We then use .then() to handle the resolved value and log it to the console.
 // The output will show "Answer: 42".
 //** Output: Answer: 42

//================================================================
/*
 let p = new Promise(function (resolve, reject) {
        reject("Something broke");

    });

 p.catch(function (err) {
     console.log("Caught:", err);
 });

// In this example, we create a promise that immediately rejects with an error message.
// We use .catch() to handle the rejected error and log it to the console.
// The output will show "Caught: Something broke".
//** Output: Caught: Something broke

==============================================================

 let p = Promise.resolve(5);

 p.then(function (val) {
     return val * 10;
 }).then(function (val) {
     console.log("Result:", val);
 });

// In this example, we create a promise that resolves with the value 5.
// We then chain two .then() calls to process the resolved value.
// The first .then() multiplies the value by 10 and returns it,
// while the second .then() logs the final result to the console.
// The output will show "Result: 50".
//** Output: Result: 50

========================================================================
 Promise.resolve(1)
     .then(function (val) {
         console.log(val);
         return val + 1;
     })
     .then(function (val) {
         console.log(val);
         return val + 1;
     })
     .then(function (val) {
         console.log(val);
         });

// In this example, we create a promise that resolves with the value 1.
// We then chain multiple .then() calls to process the resolved value.
// Each .then() logs the current value and returns a new value that is passed to the next 
// .then() in the chain.
// The output will show the sequence of values as they are processed:
//** Output:
// 1
// 2
// 3

========================================================================

Promise.resolve("start")
     .then(function (val) {
         console.log(val);
         throw new Error("Broke at step 2");
     })
     .then(function () {
         console.log("This will NOT run");
     })
     .catch(function (err) {
         console.log("Caught:", err.message);
     });

     // In this example, we create a promise that resolves with the value "start".
     // We then chain multiple .then() calls to process the resolved value.
     // The first .then() logs the value and then throws an error, which causes the promise to reject.
// The second .then() is skipped due to the error, and the .catch() block is executed to handle the error and log the message.
// The output will show "start" followed by the error message from the thrown error.
//** Output:
// start
// Caught: Broke at step 2
================================================================

 Promise.reject("Test failed")
     .then(function (data) {
         console.log("Data:", data);
     })
     .catch(function (err) {
         console.log("Error:", err);
     })
     .finally(function () {
         console.log("Cleanup done");
     });

     // In this example, we create a promise that immediately rejects with an error message.
     // We use .then() to handle the resolved value (which will be skipped), 
     // .catch() to handle the rejected error, and .finally() to perform cleanup actions that run regardless of the outcome.
     // The output will show the error message from the rejected promise and the cleanup message from the finally block.
     //** Output:
     // Error: Test failed
     // Cleanup done
=================================================================
 Promise.resolve("Quick win").then(function (msg) {
     console.log(msg);
 });

 Promise.reject("Quick loss").catch(function (msg) {
     console.log(msg);
 });

 // In this example, we create two promises: one that resolves successfully and another that rejects with an error.
 // We use .then() to handle the resolved value and .catch() to handle the rejected error.
 // The output will show the successful message from the resolved promise and the error message from the rejected promise.
//** Output:
// Quick win
// Quick loss

==================================================================

 let t1 = Promise.resolve("Login: PASS");
 let t2 = Promise.resolve("Search: PASS");
 let t3 = Promise.resolve("Logout: PASS");

 Promise.all([t1, t2, t3]).then(function (results) {
     console.log(results);
 });

 // In this example, Promise.all() is used to run multiple test cases in parallel.
// If all test cases pass (resolve), it logs the results.
// If any test case fails (reject), it immediately logs the failure message and stops further processing.
//** Output: [ 'Login: PASS', 'Search: PASS', 'Logout: PASS' ]

===========================================================
let t1 = Promise.resolve("PASS");
 let t2 = Promise.reject("FAIL");
 let t3 = Promise.resolve("PASS");

 Promise.all([t1, t2, t3])
     .then(function (r) { console.log("All:", r); })
     .catch(function (err) { console.log("Stopped:", err); });

     // In this example, Promise.all() is used to run multiple test cases in parallel.
// If all test cases pass (resolve), it logs the results.
// If any test case fails (reject), it immediately logs the failure message and stops further processing.
//** Output: Stopped: FAIL
=====================================================================

Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function (results) {
    results.forEach(function (r) {
        let val = r.status === "fulfilled" ? r.value : r.reason;
        console.log(r.status + " → " + val);
    });
});

// In this example, Promise.allSettled() is used to handle multiple API calls.
// It logs the status and result of each API call, regardless of whether they succeeded or failed.
//** Output:
// fulfilled → API 200
// rejected → API 500
// fulfilled → API 201

*/