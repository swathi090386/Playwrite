// Pure Functions
// A pure function always returns the same output for the same input and has no side effects.

// ✅ Pure — no side effects, predictable output
function calculatePassRate(total, passed) {
    return ((passed / total) * 100).toFixed(2); 
    //Inside the function:
    // passed / total → 7 / 10 = 0.7
    // 0.7 * 100 = 70
    // .toFixed(2) → converts to string with 2 decimal places → "70.00"
}

console.log(calculatePassRate(10, 7)); //70.00
console.log(calculatePassRate(10, 7)); //70.00

// ❌ Impure — depends on external state

function isPassing(score) {
    return score >= threshold;  // depends on external variable
}
let threshold = 70;
console.log(isPassing(threshold)); 
//You pass threshold → so score = 70
// Inside function:
// score >= threshold → 70 >= 70 → ✅ true

threshold = 50;
console.log(isPassing(threshold));
//Now threshold = 50
// You pass it again → so score = 50
// Inside function:
// 50 >= 50 → ✅ true

threshold = 80;
console.log(isPassing(70)); //false
//isPassing(70)
// 👉 But different outputs depending on threshold:
// If threshold = 60 → true
// If threshold = 80 → false



function isPassings(score, threshold) {
    return score >= threshold;
}

console.log(isPassings(70, 60)); // true
console.log(isPassings(70, 80)); // false