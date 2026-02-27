

/* Grade Calculator:
Write a program that calculates and displays the letter grade for a given numerical score 
(e.g., A, B, C, D, or F) based on the following grading scale:
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59

*/

function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else if (score >= 0) {
        return "F";
    } else {
        return "Invalid score";
    }
}

// Example
console.log(getGrade(95)); // Output: A
console.log(getGrade(85)); // Output: B
console.log(getGrade(72)); // Output: C
console.log(getGrade(65)); // Output: D
console.log(getGrade(59)); // Output: F
console.log(getGrade(-2)); // Output: Invalid score



//========================================================================

let score1 = 95;
if (score1 >= 90) {
    console.log("Grade: A");
} else if (score1 >= 80) {
    console.log("Grade: B");
} else if (score1 >= 70) {
    console.log("Grade: C");
} else if (score1 >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}


// Output: Grade: A

//=============================================================================

let grade;
let score = "swathi";

if (typeof score !== "number") {
    console.log("Are you fool,why you are gving score as not a number");
    return;
}

if (score < 0 || score > 100) {
    console.log("Are you fool,why you are gving score <0 or. > 100");
    return;
}

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
}
else if (score >= 70) {
    grade = "C";
}
else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log("For the score", score, "Grade is ->", grade);
console.log(`For the score ${score} "Grade is -> ", ${grade}`);

// output : Are you fool,why you are gving score as not a number