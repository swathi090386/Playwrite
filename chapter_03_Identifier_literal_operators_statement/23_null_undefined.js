console.log(null == undefined); // true
console.log(null === undefined);  // (strict — different types) // fase

console.log(null == 0); // false
console.log(null == "" ); // false
console.log(undefined == 0); // false
console.log(undefined == ""); // false

//**== and ===**

//`==` (Loose Equality) compares values **after type coercion** — JavaScript tries to convert both sides to the same type before comparing.

//5 ==5 -> 

//`===` (Strict Equality) compares values **without any conversion** — both the value AND the type must match.



