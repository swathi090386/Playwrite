let config = {};

//👉 You created an empty object.

config.browser = "Chrome";
config.timeout = 3000; 
console.log(config); //{ browser: "Chrome", timeout: 3000 }
config.timeout = 5000; // latest
console.log(config); //{ browser: 'Chrome', timeout: 5000 }
delete config.browser; //Removes the browser key completely
console.log(config); //{ timeout: 5000 }

console.log(config.browser); //undefined

//Difference between:

delete config.browser;
config.browser = undefined;

//👉 Result:

//delete → property removed
//undefined → property exists but has no value

console.log("browser" in config); //true

//After delete → ❌ false
//After undefined → ✅ true