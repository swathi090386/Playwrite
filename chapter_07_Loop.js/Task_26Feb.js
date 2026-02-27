/*For Loop
1️⃣ Print "Hello" 5 times
2️⃣ Print numbers from 1 to 10
3️⃣ Print even numbers from 1 to 20
4️⃣ Print the sum of first 10 natural numbers
5️⃣ Print the multiplication table of 5
*/

// 1️⃣ Print "Hello" 5 times
for (let i = 1; i <= 5; i++) {
    console.log("Hello");
}
// Output:
// Hello
// Hello
// Hello
// Hello
// Hello

// 2️⃣ Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// 3️⃣ Print even numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// Output:
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20

// 4️⃣ Print the sum of first 10 natural numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum of first 10 natural numbers:", sum);

// Output:
// Sum of first 10 natural numbers: 55

// 5️⃣ Print the multiplication table of 5

let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

/* for (initialization; condition; increment/decrement) {
  // code to execute
}
  */