// Promise AllSettled

// Promise.allSettled() is a method that takes an array of promises and returns 
// a new promise that resolves after all of the input promises have settled
//  (either fulfilled or rejected). 
// It provides an array of objects that describe the outcome of each promise,
//  including its status and value or reason for rejection.

Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B failed"),
    Promise.resolve("Test C passed")
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
    });
})
// This is like a test report — 
// you want results for ALL tests, not just stop at the first failure.

//** Output:
// Test 1: fulfilled - Test A Passed!
// Test 2: rejected - Test B failed
// Test 3: fulfilled - Test C passed

// In this example, Promise.allSettled() is used to handle multiple promises
//  representing test results.
// It logs the status and outcome of each test, regardless of whether they passed or failed.