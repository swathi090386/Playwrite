// You are working API Validation
// response Code - 200, 404, 401, 403.....404

let responseCode = 404;// if we set it to 500, it will print "Not status code match" because there is no case for 500.

switch (responseCode) {

    case 200:
        console.log("200 Ok");
        break;
    case 404:
        console.log("404 Not found!");
        break;
    default:
        console.log("Not status code match");

}

// output: 404 Not found!
