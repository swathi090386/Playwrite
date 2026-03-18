let [first, second, third] = [10, 20,30];

console.log(first); //10
console.log(second); //20
console.log(third); //30

let[first1, second1, ...third1] = [10, 20, 30, 40, 50];

console.log(first1); //10
console.log(second1); //20
console.log(third1); // [30,40,50]