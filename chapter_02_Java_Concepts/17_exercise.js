let a = 10;// Global variable
console.log(a);

if (true) {
    
    console.log(a); // Local variable , TDZ

    let a =20;
    // let b = 20;
    //console.log(b);
     
}