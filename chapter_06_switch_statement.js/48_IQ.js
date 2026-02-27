let testScore = 85;

switch (true) {
    case (testScore >= 95):
        console.log("Outstanding — Top performer");
        break;
    case (testScore >= 85):
        console.log("Excellent — Above expectations");
        break;
    case (testScore >= 70):
        console.log("Good — Meets expectations");
        break;
    case (testScore >= 50):
        console.log("Needs Improvement");
        break;
    default:
        console.log("Unsatisfactory — Requires training");
}
// Output: Excellent — Above expectations
// In this example, we are using a switch statement with the expression "true" to evaluate different conditions based on the value of "testScore". 
// Each case checks if the test score falls within a certain range and prints the corresponding performance evaluation. 
// This approach allows us to handle multiple conditions in a clear and organized manner.