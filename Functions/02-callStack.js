// Place where the computer stores context of operation is called call stack

// function greet(who){
//     console.log("Hello ", who);
// }

// greet("Harry");
// console.log("Bye")

function chicken(){
    return egg();
}

function egg(){
    return chicken();
}

console.log(chicken()+ " came first")
