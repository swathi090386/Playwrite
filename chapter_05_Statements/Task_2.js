/* FizzBuzz Test:
Write a program that prints numbers from 1 to 100. However, for multiples of 3, print "Fizz" 
instead of the number, and for multiples of 5, print "Buzz." 
For numbers that are multiples of both 3 and 5, print "FizzBuzz."

*/


/*for (let i = 1; i <= 100; i++) {
    let output = "";
    
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    
    console.log(output || i);
}
*/

/* How it works:

Start with empty string ""

Add "Fizz" if divisible by 3

Add "Buzz" if divisible by 5

👉 For 15:

"Fizz" + "Buzz" = "FizzBuzz"

👉 output || i

If output is empty → print i

Otherwise → print output

*/

// ======================================================================

for (let i = 1; i <= 100; i++) { 
    
// let i = 1 → start from 1

//i <= 100 → run until 100

//i++ → increase by 1 each time

// So this loop runs 100 times, checking each number from 1 to 100.
  
if (i % 3 === 0 && i % 5 === 0) {

  //  % means remainder

 // i % 3 === 0 → divisible by 3

 //i % 5 === 0 → divisible by 5

 //&& → both must be true

//If both are true → print "FizzBuzz"

//❗ Why first?
//Because numbers like 15, 30, 45... are divisible by both 3 and 5.

//If we check only i % 3 === 0 first, then:

//15 would print "Fizz" ❌ (wrong)

//It should print "FizzBuzz" ✅

console.log("FizzBuzz");

} else if (i % 3 === 0) {

    // If divisible by 3 only → print "Fizz"

console.log("Fizz");
   
} else if (i % 5 === 0) {
 
    //If divisible by 5 only → print "Buzz"
        
console.log("Buzz");

    } else {
       
        // If none of the above → print the number itself

console.log(i);

}

}