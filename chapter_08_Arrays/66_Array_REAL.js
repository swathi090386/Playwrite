
let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length); //5
console.log(browser); //[ 'chrome', 'firefox', 'safari', 'opera', 'edge' ]

browser.pop();
console.log(browser); // [ 'chrome', 'firefox', 'safari', 'opera' ]

console.log("------------ TTA --------");

let removed = browser.shift();
console.log(browser);//['firefox', 'safari', 'opera' ]
console.log(removed);//chrome

console.log("------------ TTA --------");

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera is removed from the selenium!");
    }
}

//output: firefox
// safari
// opera
// Opera is removed from the selenium!