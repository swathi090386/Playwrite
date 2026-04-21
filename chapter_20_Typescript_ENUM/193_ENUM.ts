enum TestStatus {
    Pass = "PASS",
    Fail = "FAIL",
    Skip = "SKIP",
    Pending = "PENDING",
    Blocked = "BLOCKED"
}

console.log(TestStatus.Pass); // Output: PASS
console.log(TestStatus.Fail); // Output: FAIL
console.log(TestStatus.Skip); // Output: SKIP
console.log(TestStatus.Pending); // Output: PENDING
console.log(TestStatus.Blocked); // Output: BLOCKED