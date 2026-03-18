//Sorting

let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);
//  alphabetical by default

//output: [ 'apple', 'banana', 'cherry' ]


let nums = [ 10, 1, 21, 2 ];
nums.sort();
console.log(nums); //output:[ 1, 10, 2, 21 ] 
nums.sort(( a, b) => a - b);
console.log(nums); //output:[ 1, 2, 10, 21 ] // Ascending
nums.sort(( a, b) => b - a);
console.log(nums); // output:[ 21, 10, 2, 1 ] // Decending


