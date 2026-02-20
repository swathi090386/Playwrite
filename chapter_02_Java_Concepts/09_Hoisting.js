//console.log(name);
//var name = "swathi";
//console.log(name);

//output: undefined
//swathi

//console.log(a);
//var a = "swathi";
//console.log(a);

// phase 1: memory creation

//var a = undefined;
//var b =undefined;

//console.log(a);
//var a = "swathi";
//console.log(a);

//output: undefined
//swathi


// phase 1: memory creation

var a = undefined;
var b =undefined;

// phase 2: code execution

console.log(a); // Output: undefined
var a = "swathi";
console.log(a); // changed 


//console.log(a);
//let a = "swathi";
//console.log(a);

//output: ReferenceError: Cannot access 'a' before initialization

// Hoisting is a JavaScript mechanism where variable and function declarations are 
// moved to the top of their containing scope during the compilation phase. 
// This means that you can use variables and functions before they are declared in the code.
//  However, only the declarations are hoisted, not the initializations.