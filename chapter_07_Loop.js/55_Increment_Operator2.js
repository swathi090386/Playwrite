let a = 10;
let b = ++a;//  (++a = 10+1) // ++a is called the pre-increment operator. // 👉 It increments the value first, then returns the updated value.
console.log(b); // 11
console.log(a); // 11

// //  Exp and Result Table
// // Line No | a | Result b
// // 1       |  10 |  NA
// // 2       |  11 |  11
// // 3       | 11 - print | 11
// // 4       | 11 | 11 - print


// let a = 10;
// console.log(a++ + a);
// // A+B -> A -> a++ (  ExpA - 10, a-> 11 )
// // + 
// // B -> 11, a -> 11 ,  
// // Exp A. + ExpB -> 10 + 11

// // ERT
// // Line No. |  a | Exp
// // 13       | 10 | NA
// // 14.      | 11 | 21

// let a = 10;
// console.log(++a + ++a);
// // A+B -> A -> a++ (  ExpA - 10, a-> 11 )
// // + 
// // B -> 12, a -> 12 ,  
// // Exp A. + ExpB -> 10 + 12
// console.log(a);


// //  Exp and Result Table
// // Line No | a | Result b
// //  26      |  10 |  NA
// // 27      |  11 |  22
// // 32      | 12 - print | 12

let a2 = 10;
let r = a2--;
let r2 = --a2;
console.log(r);
console.log(r2);
