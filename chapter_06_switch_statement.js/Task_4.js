
//✅ Leap Year Checker:
//Create a program that determines whether a given year is a leap year. 
// A leap year is divisible by 4, but not by 100 unless it is also divisible by 400.
//  Use an if-else statement to make this determination.

//year = 2026 , no

let year = 2026;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) { // Check if year is leap year
    // year % 4 === 0 → divisible by 4
    // year % 100 !== 0 → not divisible by 100
    // OR (||) → either condition can be true
    // year % 400 === 0 → divisible by 400
    // If either condition is true → it's a leap year
    console.log(year , " is a leap year.");
} else {
    console.log(year , " is not a leap year.");
}

//======================
/*
A year is a leap year if:
It is divisible by 4 and not divisible by 100, OR
It is divisible by 400

✅ Examples: 2024 → Leap year
      
2026 → Not a leap year

2000 → Leap year

*/
