let isloggedIn = true;
let userRole = "editor";

// app.vwo.com -> viewer, editor or admin -> 
// viwer = limited view
// editor can edit and view
// admin can do all the things

if (isloggedIn) {
    if (userRole === "admin") {
        console.log("Admin can do all the things.");
    }
    else if (userRole === "editor") {
        console.log("welcome Editor -- edit excess granted.");
    }
    else if (userRole === "viewer") {
        console.log("welcome Viewer -- Read only access.");
}else {
    console.log("No idea which role you are !.");
}
} else {
    console.log("you are not logged in.");
}