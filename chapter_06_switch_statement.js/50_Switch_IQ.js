let value = "5";

switch (value) {
    case 5:
        console.log("Number 5 matched");
        break;
    case "5":
        console.log("String '5' matched");
        break;
}

// Output: String '5' matched
// In this example, we have a switch statement that checks the value of "value". 
// Since "value" is a string "5", it matches the second case and prints "String '5' matched". 
// The first case does not match because it is checking for the number 5, which is different from the string "5". 
// This illustrates how switch statements can differentiate between different data types when evaluating cases.