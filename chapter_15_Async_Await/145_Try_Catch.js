// Error Handling — try/catch


// With Promises you use .catch().
//  With async/await you use try/catch — exactly like regular JavaScript error handling.

async function testAPI() {
    try {
        let result = await Promise.resolve("503 Service Unavailable");
        //let result = await Promise.reject("503 Service Unavailable");
        // reject : Error 503 Service Unavailable
        // Clean up!!
        //resolve : Result 503 Service Unavailable
        // Clean up!!
       console.log('Result', result);
    } catch (error) {
        console.log('Error', error);
    } finally {
        console.log("Clean up!!")
    }
}

testAPI();

// try/catch/finally maps directly to .then()/.catch()/.finally() — same logic, cleaner syntax.