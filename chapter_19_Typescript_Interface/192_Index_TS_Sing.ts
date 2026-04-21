// String index

interface StringDictionary {
    [key: string]: string;
}

const dict: StringDictionary = {
    hello: "world",
    foo: "bar"
};
console.log(dict.hello); // Output: world
console.log(dict.foo);   // Output: bar
console.log(dict["hello"]); // Output: world
console.log(dict["foo"]);   // Output: bar

