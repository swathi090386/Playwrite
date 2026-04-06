// Promise All

let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");

Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All checks:", results);
})

Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK")
])
    .then(function (r) { console.log(r); })
    .catch(function (err) { console.log("Failed:", err); });

// Promise.all() takes an array of promises and returns a single promise that resolves 
// when all of the promises in the array have resolved, or rejects if any of the promises 
// in the array reject.
// If all promises resolve successfully, the returned promise resolves with an array of 
// their results.
// If any promise rejects, the returned promise immediately rejects with the reason
//  of the first promise that rejected.

//** Output:
// All checks: [ 'Auth Ok', 'DB OK', 'Cache OK' ]
// Failed: DB DOWN

// In the first Promise.all(), all promises resolve successfully, 
// so it logs the array of results.
// In the second Promise.all(), one of the promises rejects with "DB DOWN", 
// so it logs the failure message with the error.