// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// includes()
url.includes("staging");       // true
url.includes("production");    // false

// startsWith / endsWith
url.startsWith("https"); // true
url.startsWith("http://");  //fasle
url.endsWith("true");  // true

// indexOf / lastIndexOf
console.log(url.indexOf("a")); // 10
console.log(url.lastIndexOf("a"));// 24
console.log(url.indexOf("nothere"));// -1

// search() — accepts regex, returns index
// Search basically works in a way that it searches with regex. 
console.log(url.search(/login/)); //28,  regex, returns index of match

url.search(/\d+/);// -1 (no digits)