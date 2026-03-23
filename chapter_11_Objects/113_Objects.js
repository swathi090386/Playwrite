const calculator = {
    value: 0,
    add(n) {
        this.value += n; //this Refers to the current object (calculator)
        //this.value += n;
        // means:
        // calculator.value += n;
        return this; //This is the magic behind chaining
        // It returns the whole object again so you can call the next method.
    },
    substract(n) {
        this.value -= n;
        return this;
    }

}
console.log(calculator.add(5).substract(5)); 
//calculator.add(5)
//value = 0 + 5 → 5
// returns calculator
// .substract(5)
// value = 5 - 5 → 0
// returns calculator

// output: { value: 0, add: [Function: add], substract: [Function: substract] }

console.log(calculator.add(5).substract(5).value);

//output: 0