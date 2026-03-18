// if (ourStatusCode >= 200 && ourStatusCode < 300) 
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
}

console.log(validateStatusCode(200));
console.log(validateStatusCode_Exp(200));
console.log(validateStatusCode_Arrow(200));

//output :Request is fine!
//undefined
//Request is fine!
//undefined
//Request is fine!
//undefined