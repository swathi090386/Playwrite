const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const copy = { ...obj1 };
console.log(copy); //{ a: 1, b: 2 }
const merged = { ...obj1, ...obj2 };
console.log(merged); //{ a: 1, b: 2, c: 3, d: 4 }

//  this keyword
const user = {
    name: "swathi",
    saymyName(lastName) {
        this.name += lastName;
        return this.name;
    }
}
console.log(user.saymyName("phani"));

//output: swathiphani

const obj = { a: { x: 1 } };
const copy1 = { ...obj };

copy1.a.x = 99;
console.log(obj.a.x); // 99 