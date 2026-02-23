let statusCode = 200; // API'S are working fine

if (statusCode === 200) {
    console.log("API is working fine.");
} else if (statusCode === 404) {
    console.log("API is not found.");
} else if (statusCode === 500) {
    console.log("API is having some server error.");
} else {
    console.log("Not matching status code.");
}

// Output: API is working fine. stsatus code is 200.
// If we change the status code to 404, then the output will be: API is not found. 
// if we change the status code to 500, then the output will be: API is having some server error.

