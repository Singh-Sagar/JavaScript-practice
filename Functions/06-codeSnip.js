
function multiplier(factor){
    return number=> number * factor;
}

let var1 = multiplier(2)(9);
console.log(var1);