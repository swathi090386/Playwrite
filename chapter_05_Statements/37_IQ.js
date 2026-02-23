if ("hello") console.log("string is truthy"); // "hello" - truthy

if (42) console.log("number is truthy"); // 42 - truthy

if ({}) console.log("Empty object is truthy"); // {} - truthy

if ([]) console.log("Empty array is truthy"); // [] - truthy



// false result 
if ("") console.log("won't print"); // "" - falsy result

if (null) console.log("won't print"); // null - falsy result

if (undefined) console.log("won't print"); // undefined - falsy result

if (0) console.log("won't print"); // 0 - falsy result

if (NaN) console.log("won't print"); // NaN - falsy result


