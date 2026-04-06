// Promise Basics

// A Promise is a JavaScript object that represents the eventual completion (or failure) 
// sof an asynchronous operation and its resulting value.

let order = new Promise(function (resolve, reject) {
    let foodready = true;        //false; // change to true to resolve the promise
    if (foodready) {
        resolve("Pizza is delivered!");
    } else {
        reject("Order Cancelled!")
    }
 
})

console.log(order);
// A Promise is an OBJECT. It wraps a value that will be available later.

//** Output: Promise { 'Pizza is delivered!' }  --- when resolved
//** Output: Promise { <rejected> 'Order Cancelled!' }  --- when rejected