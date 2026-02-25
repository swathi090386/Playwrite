let status = 0;
switch (status) {
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
}

// Output: 0 matched
// In this example, we have a switch statement that checks the value of "status". 
// Since "status" is 0, it matches the second case and prints "0 matched". 
// The first case does not match because it is checking for the boolean value false, 
// which is different from the number 0. 
// This illustrates how switch statements can differentiate between different data types 
// when evaluating cases.

