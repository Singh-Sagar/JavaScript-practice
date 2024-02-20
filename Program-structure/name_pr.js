const prompt = require('prompt-sync')();


let yourName ;
do{
    yourName = prompt("who are you?");
}while(!yourName);
console.log(`Your name is ${yourName}`);