let browser = "safari";// Chrome, Edge, Brave, Opera → "Chromium Project!"
// Firefox → "Mozilla Project!"
// Safari → "Apple browser — uses JavaScriptCore engine"
// Other → "Unknown browser — manual testing needed"

switch (browser) {
     case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!");
        break;
    case "firefox":
        console.log("Mozilla Project!");
        break;
    case "safari":
        console.log("Apple browser — uses JavaScriptCore engine");
        break;
    default:
        console.log("Unknown browser — manual testing needed");
}

// output: Apple browser — uses JavaScriptCore engine
// In this example, we are using a switch statement to determine the type of browser 
// based on the value of the "browser" variable. 
// We have grouped multiple cases (Chrome, Edge, Brave, Opera) together to print the same message
//  "Chromium Project!" for all of them. 
// This is a common use case for switch statements when you want to execute the same code for
//  multiple cases.