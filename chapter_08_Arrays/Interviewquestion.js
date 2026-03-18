//1. Reverse a String

//Question: Reverse the string "automation".

let str = "automation";
let reversed = str.split("").reverse().join("");

console.log(reversed);

//Output :noitamotua

//2. Find the Largest Number in an Array
let numbers = [10, 45, 23, 89, 32];

let max = Math.max(...numbers);

console.log("Largest number:", max);

//Output:Largest number: 89

//3. Remove Duplicates from an Array
let arr = [1,2,3,2,4,5,3,6];

let unique = [...new Set(arr)];

console.log(unique);

//Output:[1,2,3,4,5,6]

//4. Count Vowels in a String
let string = "javascript";

let count = 0;
let vowels = "aeiou";

for (let char of string) {
    if (vowels.includes(char)) {
        count++;
    }
}

console.log("Vowels:", count);

//Output: Vowels: 3

//5. Check if a Number is Even or Odd
let num = 7;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//Output: Odd

//6. Find the First Non-Repeating Character

let str1 = "automation";

for (let char of str1) {
    if (str.indexOf(char) === str1.lastIndexOf(char)) {
        console.log("First non-repeating:", char);
        break;
    }
}

//Output:First non-repeating: u

//7. Sort Numbers Correctly

let arr1 = [50, 5, 100, 25];

arr1.sort((a,b)=>a-b);

console.log(arr1);

//Output: [5,25,50,100]

//8. Find Sum of Array

let arr2 = [10,20,30,40];

let sum = arr2.reduce((total, num) => total + num, 0);

console.log(sum);

//Output:100

//9. Check Palindrome
let str2 = "madam";

let reversed2 = str.split("").reverse().join("");

if (str === reversed2) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

//Output:Palindrome

//10. Flatten an Array

let arr3 = [1, [2,3], [4,5]];

let flat = arr3.flat();

console.log(flat);

//Output:[1,2,3,4,5]