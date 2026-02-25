//switch
//0 - sunday
//1 - monday
//2 - tuesday
//3 - wednesday
//4 - thursday
//5 - friday
//6 - saturday

let day = 2; // if we set day to 2, it will print Tuesday ,wednesday, thursday, friday, saturday and invalid day value 
// because there is no break statement. It will continue to execute all the cases after the matching case until it hits a break or the end of the switch.
// But if we set it to 10, it will print "Invalid day value" because there is no case for 10.

switch (day) {
    case 0:
        console.log("Sunday - Rest day");
    
    case 1:
        console.log("Monday - sprint planning");
        
    case 2:
        console.log("Tuesday - Development");
        
    case 3:
        console.log("Wednesday - Code review");
    
    case 4:
        console.log("Thursday - Testing");
    
    case 5:
        console.log("Friday - Deployment & Retro");
    
    case 6:
        console.log("Saturday - Rest day");
    
    default:
        console.log("Invalid day value");
}

/*output: Tuesday - Development

Tuesday - Development
Wednesday - Code review
Thursday - Testing
Friday - Deployment & Retro
Saturday - Rest day
Invalid day value

*/
