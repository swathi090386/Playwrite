// Promise.race

// Promise.race() is a method that takes an array of promises and returns 
// a new promise that resolves or rejects as soon as one of the input
//  promises resolves or rejects.
// The returned promise adopts the value or reason of the first promise that settles.
let fastServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast 100ms")
    }), 100
});

let slowServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast 500ms")
    }), 500
});

Promise.race([fastServer, slowServer]).then(function (winner) {
    console.log("Winner:", winner);
})

// In this example, Promise.race() is used to determine which server responds first.
// The promise that resolves first (fastServer) wins the race and its value 
// is logged as the winner.

//** Output: Winner: Fast 100ms