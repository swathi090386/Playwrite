// String Conversion


// To string
(200).toString(); // "200"
true.toString();  // "true"


Number("42");  //  42

parseInt("42px");  // 42
parseFloat("3.14rem"); //3.14


let str = "hello"; //. Things are immutable in nature in Java. 
str[0] = "H";
console.log(str); //hello

str = "Hello"; // reassigning a new string to the variable
console.log(str); //Hello

let upper = str.toUpperCase();
console.log(str); // str is still "Hello" because strings are immutable, toUpperCase() returns a new string
console.log(upper); // "HELLO"