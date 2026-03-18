/*1. What is the output?

console.log(greet("Alice"));
function greet(name) {
  return `Hello, ${name}!`;
}

a) ReferenceError b) undefined c) "Hello, Alice!" d) TypeError

//output : c) "Hello, Alice!"

2. What is the output?

console.log(getStatus(200));
const getStatus = (code) => code >= 200 ? "ok" : "error";


a) "ok" b) "error" c) undefined d) ReferenceError

//output : d) ReferenceError

3. What does this function return?

function analyze(scores = []) {
  return scores.filter(s => s >= 70).length;
}
analyze();


a) undefined b) 0 c) null d) TypeError

//output :b) 0

//1️⃣ Default parameter
scores = []

If no argument is passed, scores becomes an empty array []

So calling:

analyze();

is same as:

analyze([]);
2️⃣ Filter logic
scores.filter(s => s >= 70)

Goes through each score

Keeps only scores greater than or equal to 70

Example:

[50, 80, 90, 60] → [80, 90]
3️⃣ Count results
.length

Counts how many passed

▶️ What happens when you call analyze()
analyze();
Step-by-step:

scores = []

[].filter(...) → still []

[].length → 0

👉 Final Output:

0

4. What is the output?

function makeCounter() {
  let count = 0;
  return () => ++count;
}
let counter = makeCounter();
counter();
counter();
console.log(counter());


a) 1 b) 2 c) 3 d) 0

// c) 3

5. Which is a pure function?
 a) function log(msg) { console.log(msg); } 
 b) function add(a, b) { return a + b; }
c) function getTime() { return Date.now(); } 
d) function push(arr, val) { arr.push(val); return arr; }

// b) function add(a, b) { return a + b; }


6. What is the output?

function test(...args) {
  return args.length;
}
test("login", "pass", 200, true);


a) 1 b) undefined c) 4 d) TypeError

// c)

7. What is the output?

const obj = {
  env: "staging",
  getEnv: () => {
    return this.env;
  }
};
console.log(obj.getEnv());


a) "staging" b) undefined c) null d) TypeError

// b) undefined

8. What does this return?

function double(n) { return n * 2; }
function addOne(n) { return n + 1; }
[1, 2, 3].map(double).map(addOne);


a) [2, 4, 6] b) [3, 5, 7] c) [2, 3, 4] d) [4, 6, 8]

// b) [3, 5, 7] 

1️⃣ First .map(double)
[1, 2, 3].map(double)

Each element is passed to double(n)

Calculation:

1 → 2

2 → 4

3 → 6

👉 Result:

[2, 4, 6]
2️⃣ Second .map(addOne)
[2, 4, 6].map(addOne)

Each element is passed to addOne(n)

Calculation:

2 → 3

4 → 5

6 → 7

👉 Final Result:

[3, 5, 7]

9. What is the output?

function run(fn) {
  return fn("Login");
}
console.log(run(name => `Running: ${name}`));


a) TypeError b) "Running: Login" c) undefined d) "name => Running: name"

// b) "Running: Login"

10. What is the output?

function outer() {
  let x = 10;
  function inner() {
    let x = 20;
    return x;
  }
  return x + inner();
}
console.log(outer());


a) 20 b) 30 c) 40 d) 10

// b) 30

*/