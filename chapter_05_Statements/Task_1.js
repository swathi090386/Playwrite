

/* Grade Calculator:
Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:
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



