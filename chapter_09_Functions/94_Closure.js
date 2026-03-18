function outer() {
    let message = "Hello";
    console.log("Outer called!");

    function inner() {
        console.log(message);
    }
    return inner;
}

outer(); // Outer called!
let fn_inner = outer(); // Outer called!
fn_inner(); //Hello


//  inner() not allowed!