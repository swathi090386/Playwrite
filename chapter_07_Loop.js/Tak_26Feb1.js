let a = 5; // Initial value of a is 5
let b = a++ + ++a;// a++ is the post-increment operator, 
//👉 It uses the current value first, then increments the variable after the assignment.
//Evaluate left to right.
//a++ (post-increment)
//Use current value → 5
//Then increment a
//a becomes 6
//++a (pre-increment)
//Increment first → a becomes 7
// Use value → 7
// Result
//b = 5 + 7 = 12
//a = 7
// ERT
// Line No. | a | Result b
// 1       | 5 | NA
// 2       | 6 | NA
// 3       | 7 | NA
// 2       | 7 | 12
let c = a++ + ++a + ++a + ++a + a++;// Current value: a = 7
//Evaluate left to right:
// Expression	ValueUsed	a After
//    a++	       7	      8
//    ++a      	   9	      9
//    ++a	       10	      10
//    ++a	       11	      11
//     a++	       11	      12

// c = 7 + 9 + 10 + 11 + 11 = 48
console.log(b);// Output: 12
console.log(a); // Output: 12 (a was incremented to 12)
console.log(c); // Output: 48


//a++ → use first, then increment

//++a → increment first, then use