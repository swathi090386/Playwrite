/*While Loop
1️⃣ Print "Playwright" 5 times
2️⃣ Print numbers from 1 to 10
3️⃣ Print even numbers from 1 to 20
4️⃣ Calculate sum of first 10 natural numbers
5️⃣ Print the multiplication table of 7
*/

// 1️⃣ Print "Playwright" 5 times
i = 1;
while (i <= 5) {
    console.log("playwrite");
    i++;
}

// output: playwrite - 5 times

//2️⃣ Print numbers from 1 to 10

    a = 1;
    while (a <= 10){
        console.log(a);
        a++;
    }

    //output :1 to 10

    //3️⃣ Print even numbers from 1 to 20

num = 1;
while (num <= 20){
    console.log(num);
    num += 2;
}

//output : 1 , 3, 5,7,9,11,13,15,17,19

//4️⃣ Calculate sum of first 10 natural numbers

let sum = 0;
let a1 = 1;

while (a1 <= 10) {
  sum += a1;
  a1++;
}

console.log("Sum:", sum);

//📌 Output:Sum: 55

//5️⃣ Print the multiplication table of 7

let number = 7; 
i = 1;

while (i <= 10) { //  
    console.log(`${number} x ${i} = ${number * i}`);
  i++;

}

/* output: 
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
*/



/*
While Loop Structure (Interview Tip)
initialization;
while (condition) {
  // code
  increment / decrement;
}
  */