//For loop
// help you to repeat a block of code.

//Increment operator


// a =a + 1; // a++
let a = 10;
let b = ++a;//  (++a = 10+1) // ++a is called the pre-increment operator.
// 👉 It increments the value first, then returns the updated value.
console.log(b); // 11
console.log(a); // 11

let a2 = 10; // Initial value
let b2 = a2++ ; // a2++ is the post-increment operator.
//👉 It uses the current value first,
//👉 then increments the variable after the assignment. 
console.log(b2); // 10 // // Assignment happens first b2 = a2;  // b2 gets 10
console.log(a2); // 11 .// //Increment happens next a2 = a2 + 1;   // a2 becomes 11