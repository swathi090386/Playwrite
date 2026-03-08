// Accessing & Modifying
let statuses = ["pass", "fail", "skip"];
console.log(statuses[0]);//pass
console.log(statuses[2]);//skip

console.log(statuses.at(-1));//last element// skip
console.log(statuses.at(-2)); // fail
console.log(statuses.at(-3)); // pass
console.log(statuses.at(-4)); // undefined

// Modify
statuses[1] = "blocked";
console.log(statuses);
//output: [ 'pass', 'blocked', 'skip' ]

// Length
console.log(statuses.length);
//output: 3
