//switch
//0 - sunday
//1 - monday
//2 - tuesday
//3 - wednesday
//4 - thursday
//5 - friday
//6 - saturday

let day = 2;

switch (day) {
    case 0:
        console.log("Sunday - Rest day");
         let a = 10;
        let b = 30;
        console.log(a + b);
        break;
    case 1:
        console.log("Monday - sprint planning");
       break;  
    case 2:
        console.log("Tuesday - Development");
     break;
    case 3:
        console.log("Wednesday - Code review");
     break;
    case 4:
        console.log("Thursday - Testing");
     break;
    case 5:
        console.log("Friday - Deployment & Retro");
     break;
    case 6:
        console.log("Saturday - Rest day");
     break;
    default:
        console.log("Invalid day value");
}

// output: Tuesday - Development