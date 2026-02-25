let x = 10;
switch (x) {
    case 10:
        let b1 = 1;
        console.log(b1); 
        break;
    case 10:
            let b2 = 1;
            console.log(b2);
            break;
    default:
        console.log("Default case");
        break;
}


// In this example, we have a switch statement that checks the value of "x". 
// Since "x" is 10, it matches the first case and prints "1". 
// if x= 10; // output: 1 ; 
// The second case also matches "x" but is unreachable because of the break statement in the first case.
// Note that the variables "b1" and "b2" are declared within their respective cases, 
// but they are not accessible outside of those cases due to block scoping.
// if x = 20; // Output: Default case

// IT will allow you to have the duplicate case with first as the usage. 