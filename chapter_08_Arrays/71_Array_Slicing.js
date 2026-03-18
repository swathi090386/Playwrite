//slicing and combining

let array = [1, 2, 3, 4, 5];
//slice (start , end) - returns new array - Dont mutate actual => (start, end - 1) . index = 0;
console.log (array.slice(1, 3)); // [ 2, 3 ]
console.log (array.slice(2, 4)); // [3,4]
console.log (array.slice(2, 5)); // [3, 4, 5]

//Dont give the end, it will automatically take from start to end 

console.log (array.slice(2)); // [3, 4, 5]


console.log (array.slice(-2)); // [ 4, 5 ]
console.log (array.slice(-3)); // [3, 4, 5]

console.log (array.slice(0)); //[ 1, 2, 3, 4, 5 ]
console.log (array.slice(-5)); //[ 1, 2, 3, 4, 5 ]

let array1 = [ 1, 2, 3, 4, 5 ];

let a = [ 1, 2 ];
let b = [ 3, 4 ];
//let c = a.concat(b, [5, 6]);
//console.log(c); //[ 1, 2, 3, 4, 5, 6 ]

let c = a.concat(b);
console.log(c); //[ 1, 2, 3, 4 ]

//spread (morden way) - concatenation . (...)
let d = [...a, ...b];
console.log(d); //[ 1, 2, 3, 4 ]

// ... , ===
// join
//let s = ["pass", "Fail", "skip"].join(" = ");
//console.log(s);// pass = Fail = skip
let s = ["pass", "Fail", "skip"].join(" || ");
console.log(s);// pass || Fail || skip






