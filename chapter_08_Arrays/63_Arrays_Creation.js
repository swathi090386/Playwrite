// Array

let fruits = []; // Empty  []
let fruits_fresh = ["apple", "banana", "cheery"];
console.log(fruits_fresh); //[ 'apple', 'banana', 'cheery' ]
console.log(fruits_fresh[0]);//apple
// 3,  index - 0,1,2

let arr = [10, 20, 30, 40]; // 0-3: 4
console.log(arr.length);//4
// console.log(arr.length()); length is property , () -> functionc
console.log(arr[0]); //10
console.log(arr[3]); //40
console.log(arr[4]); // undefined


let testResults = ["pass", "fail", "pass", "skip"];
let mixed = [1, "hello", true, null]; // JS arrays can hold any type.

// Creating Arrays

// Array literal (preferred)
let browsers = ["Chrome", "Firefox", "Safari"];


// Array constructor

let scores = new Array(3);  // creates [empty x 3]
let scores2 = new Array(1, 2, 3); // creates [1, 2, 3]

let numbers = new Array(100, 200, 300, 400);//0-3: 4
console.log(numbers); //[ 100, 200, 300, 400 ]

//Arrays.of()

let test = Array.of(10, 20, 30, 40, 50);//0-4: 5
console.log(test); // [ 10, 20, 30, 40, 50 ]
console.log(test[0]);//10

// Array.from()
let chars = Array.from("hello"); // ["h", "e", "l", "l", "o"]
console.log(chars);

//output : [ 'h', 'e', 'l', 'l', 'o' ]

let marks = new Array(0, 1, 2, 3);
console.log(marks);

//output :[ 0, 1, 2, 3 ]

//1. Store and Print Array Elements
let nutfruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < nutfruits.length; i++) {
    console.log(nutfruits[i]);
}

//output : Apple
// Banana
// Mango
// Orange

//2. Find the Sum of Array Elements
let num = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < num.length; i++) {
    sum += num[i];
}
console.log("Sum:", sum);

//output:Sum: 100

//3. Find the Largest Number in an Array
let numeric = [15, 8, 25, 42, 3];
let largest = numeric[0];

for (let i = 1; i < numeric.length; i++) {
    if (numeric[i] > largest) {
        largest = numeric[i];
    }
}

console.log("Largest numeric:", largest);

//output:Largest numeric: 42

//4. Reverse an Array
let no = [1, 2, 3, 4, 5];

let reversed = no.reverse();

console.log(reversed);

//Output: [5, 4, 3, 2, 1]

//5. Find Even Numbers in an Array
let numb1 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numb1.length; i++) {
    if (numb1[i] % 2 === 0) {
        console.log(numb1[i]);
    }
}
//Output:2
//4
//6
