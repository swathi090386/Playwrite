function pramod_doing_work(worker, callback) {
//2️⃣ Inside pramod_doing_work
//
    console.log("Started the class PW") // Started the class PW
    let work = worker;
    // Just assigns 'PW class' to work
    // (Not used further here, but represents some task)

    // dasdasdasdsadasdsadas
    console.log("Finished the class PW") //Finished the class PW
    callback();
}

function callWife() { //3️⃣ Inside callWife
    console.log("Call wife when done");// Call wife when done
}

pramod_doing_work('PW class', callWife);
// 1️⃣ Function Call
//'PW class' → goes into worker
// callWife → passed as callback

//output:Started the class PW
// Finished the class PW
// Call wife when done

/*🎯 What is happening conceptually?

pramod_doing_work = does some task

callback = what to do after task is finished

👉 You are saying:

“After finishing the class, call my wife”

Key Takeaways

A callback is a function passed as an argument

It is executed after some work is done

Makes your code:

Flexible

Reusable

Customizable

*/