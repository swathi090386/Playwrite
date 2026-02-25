//Write a program that classifies a triangle based on its side lengths. 
// Given three input values representing the lengths of the sides, determine if the triangle is 
// equilateral (all sides are equal), isosceles (exactly two sides are equal), or scalene (no sides are equal). 
// Use an if-else statement to classify the triangle based on the input side lengths.
//side1, side2, side3 → ? 10,10,10

let side1 = 10;
let side2 = 10;
let side3 = 10;
if (side1 === side2 && side2 === side3) { // Check if all sides are equal 
    // If true, the triangle is Equilateral.
    // side1 === side2 → first two sides are equal
    // side2 === side3 → last two sides are equal
    // If both conditions are true → all sides are equal
    // === checks if values are exactly equal.
    // && means AND.
    // This condition checks whether all three sides are equal.
    // If true → prints "Equilateral triangle".
    console.log("Equilateral triangle"); // Output: Equilateral triangle
    } else if (side1 === side2 || side2 === side3 || side1 === side3) { 
    //Checks if any two sides are equal.
    //If true, the triangle is Isosceles.
    //|| means OR.
    // This checks if any two sides are equal.
    // If true → prints "Isosceles triangle".
        console.log("Isosceles triangle");
    } else {
        console.log("Scalene triangle");// If no sides are equal, the triangle is Scalene.
        //If no sides are equal,
        //The triangle is Scalene (all sides different).
    }


// Example usage:
// side1 = 10, side2 = 10, side3 = 10 → Output: Equilateral triangle
// side1 = 10, side2 = 10, side3 = 5 → Output: Isosceles triangle
// side1 = 10, side2 = 5, side3 = 7 → Output: Scalene triangle