// Callback Functions
//A callback is a function passed as an argument to another function, to be called later.

//callback is just a function passed as input
// It is called later inside another function
// Enables custom behavior after an operation completes

function runTest(testName, callback) {
    let result = "pass";//2️⃣ Inside runTest
    callback(testName, result)//3️⃣ Callback gets executed
     //It becomes:onComplete("loginTest", "pass")
}

function onComplete(name, result) { //4️⃣ onComplete runs 
    console.log(`${name} finished with: ${result}`);
  
}

runTest("loginTest", onComplete) 
//1️⃣ Function Call
//"loginTest" → goes into testName
// onComplete → passed as callback

// output:loginTest finished with: pass

runTest("loginTest", function(name, result) {
    console.log("Saving result to DB...");
});
//Think of it like ordering food 🍔
// runTest = restaurant cooking food
// callback = what you want done after food is ready
// Examples:Eat immediately
// Pack for takeaway
// Deliver to home