 //Playwright Result Summary Generator
// You receive an array of Playwright step result objects in the format `{ name, status, durationMs }`, 
// where status can be `"passed"`, `"failed"`, or `"skipped"`. 
// Write a JavaScript function that prints a summary report with 
// total steps, passed count, failed count, skipped count, total duration, and a comma-separated list of failed step names.

// Input: 
// results = [{ name: "open login", status: "passed", durationMs: 400 }, { name: "fill form", status: "failed", durationMs: 700 }, { name: "submit", status: "skipped", durationMs: 0 }]

// Output:
// Total Steps: 3 Passed: 1 Failed: 1 Skipped: 1 Total Duration: 1100ms Failed Steps: fill form