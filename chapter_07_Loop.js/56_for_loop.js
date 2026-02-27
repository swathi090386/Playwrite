// For Loop
// help you to repeat a block of code.(ICU)
for (let i = 0; i < 5; i++) { // i++ is the increment operator, 
// it increases the value of i by 1 in each iteration.
// The loop will run as long as the condition i < 5 is true.
// In the first iteration, i is 0, which is less than 5, so the loop body executes and prints 0.
// In the second iteration, i is incremented to 1, which is still less than 5, so it prints 1.
// This process continues until i reaches 5. When i becomes 5, 
// the condition i < 5 is no longer true, and the loop terminates.
 console.log(i);
    }
    for (let i = 0; i < 5; ++i) { //i++ and ++i both increment the value of i by 1, 
    // but they do so at different stages of the expression evaluation.
    // i++ (post-increment) returns the current value of i before incrementing it.
    // ++i (pre-increment) increments the value of i first, then returns the updated value.
    console.log(i);
}

// Output:
// 0
// 1
// 2
// 3
// 4
// 0
// 1
// 2
// 3
// 4