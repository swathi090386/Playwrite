// Iterate - Go from one to another. // 

let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("----"); 
// output:login
// checkout
// search
// ----

// for...of (cleanest for values)
for (let test of tests) {
    console.log(test) // value
}
console.log("----");

//output:login
//checkout
//search
//----

// forEach (no return value)
tests.forEach((test, index) => {

    console.log(`${index}: ${test}`);
});

console.log("----");

//output: 
// 0: login
//1: checkout
//2: search
//----

// entries() — index + value

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}
console.log("----");

//output:login
//checkout
//search
//----

let students = ["methis", "senthil", "ajay", "rahul"];


for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}

//output: 
// 0  ->  methis
//1  ->  senthil
//2  ->  ajay
//3  ->  rahul
