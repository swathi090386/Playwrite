// Promise API

let apiCall = new Promise(function (resolve, reject) {
    resolve({ status: 200, body: "User Data", user: { role: "admin", active: true } });
});

apiCall.then(function (response) {
    console.log(response);
    console.log(response.status);
    console.log(response.body);
    console.log(response.user);
    console.log(response.user.role);
    console.log(response.user.active);
})

// .then() runs ONLY when the promise resolves successfully.
//** Output:
// { status: 200, body: 'User Data', user: { role: 'admin', active: true } }
// 200
// User Data
// { role: 'admin', active: true }
// admin
// true
