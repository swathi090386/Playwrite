function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`);
}

retry("Login");//Retrying Login up to 3 times, 1000ms apart
// Uses default maxRetries of 3 and delay of 1000ms

retry("Checkout", 5); // Output: Retrying Checkout up to 5 times, 1000ms apart
// Uses default delay of 1000ms

retry("API Test", 2, 500); // Output: Retrying API Test up to 2 times, 500ms apart

// Default parameters allow us to call the function without providing all arguments, 
// and the function will use the default values for any missing arguments.