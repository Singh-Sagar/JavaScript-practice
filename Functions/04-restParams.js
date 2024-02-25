
function add(...num){
    return num.reduce((acc, curval)=>acc+curval, 0);
}

x = add(5,2,3,5)
console.log(x);