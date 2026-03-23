const user = {
    firstName: "swathi",
    lastName: "phani",
    get fullName() { //get → read like a property

        return this.firstName + this.lastName;
    },
    set fullName(value) { //set → assign like a property
        [this.firstName, this.lastName] = value.split(" ");
    }
};

console.log(user.fullName); //swathiphani
user.fullName = "Amit Sharma";
console.log(user.fullName);//AmitSharma