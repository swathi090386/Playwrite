function makeRetryTracker(max) {//1: Outer Function
    //max → maximum retries allowed
     let attempts = 0;// attempts → starts at 0 // This variable is inside the outer function
    function tryAgain(testName) { //2: Inner Function
        attempts++; //Every time you call tryAgain, it increments attempts
        //Even though makeRetryTracker is finished, it still remembers attempts
        // 👉 This is the key idea of a closure
        //  A closure is when a function “remembers” variables from its outer scope even 
        // after the outer function has finished executing.
        if (attempts > max) { //3: Condition Logic
            return `${testName} exceeded max retries (${max})`;
            //If attempts go beyond max, it stops and returns a message
        }

        return `Attempt ${attempts}/${max} for ${testName}`;
    };

    return tryAgain; //4: Return Inner Function //You return the inner function
    // But it still has access to:
    // attempts
    // max

}

let retry = makeRetryTracker(3);//5: Create Tracker //max = 3
// attempts = 0
// retry holds the tryAgain function
console.log(retry("Login"));//attempts = 1  Attempt 1/3 for Login
console.log(retry("Login"));//attempts = 2  Attempt 2/3 for Login
console.log(retry("Login"));//attempts =3 Attempt 3/3 for Login
console.log(retry("Login"));//attempts = 4 (exceeds max)   Login exceeded max retries (3)