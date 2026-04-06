// Basic Async/Await

async function getTestResults() {
    return "Pass";
}

// async function ALWAYS returns a Promise
getTestResults().then(function (result) {
    console.log(result);
});


async function runTest() { // function uses always async keyword
    let result = await Promise.resolve("Login test passed"); // promise and resolve uses await keyword
    console.log(result); // not a function it comes await keyword

    let result2 = await Promise.resolve("Dashboard test passed");
    console.log(result2);
}

runTest();

//output:
// Login test passed
// Dashboard test passed
