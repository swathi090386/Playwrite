function runTest(name, status, duration) {
    return `${name}: ${status} (${duration}ms)`;
}

// Arguments
runTest("Login", "pass", 320);
console.log("runtest");
// "Login: pass (320ms)"