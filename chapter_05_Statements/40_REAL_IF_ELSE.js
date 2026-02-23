
 function validateForm(email, password) {
     return true;
 }

let email = "user@example.com";
let password = "password123";

if (validateForm(email, password)) {
    console.log("Form is valid. Submitting...");
} else {
    console.log("Form is invalid. Please check your input.");
}

// Output: Form is valid. Submitting... because the validateForm function always returns true.
// In a real application, the validateForm function would contain logic to 
// check the email and password against certain criteria (e.g., email format, password strength) 
// and return true or false accordingly.

if (email === "admin@example.com" && password === "admin123") {
    console.log("Login successful.");
} else {
    console.log("Login failed. Please check your credentials.");
}

// Output: Login failed. Please check your credentials. 
// because the email and password do not match the hardcoded values for admin login.
