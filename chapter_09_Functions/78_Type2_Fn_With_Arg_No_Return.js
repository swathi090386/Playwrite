// Type 2 Functions

// So with argument/parameter but no return type. 

function greetByName(name) { // parameter
    console.log("Hi", name);
}

greetByName("Swathi"); // argument
greetByName("Phani");
greetByName("Meeti");
greetByName("Sangeetha");


function begger(money) {
    console.log("Thanks", money);
}

let returnMesomething = begger(100);
console.log(returnMesomething);


let name1 = greetByName("Sumit");
console.log(name1);

/*Hi Swathi
Hi Phani
Hi Meeti
Hi Sangeetha
Thanks 100
undefined
Hi Sumit
undefined
*/