const prompt = require('prompt-sync')();


let theNumber = Number(prompt("Pick a number: "));

if(!Number.isNaN(theNumber)){
    // this code will run if the if condition is true.
    console.log("Your number is the square root of "+theNumber * theNumber);
}else{
    console.log("Hey. why didn't you give me a number?");
}

