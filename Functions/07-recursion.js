
// Recursion is pretty cool 
// In javascript context, or in general too, recursion is slower to looping
// Dillema of speed vs elegance

function power(base, exp){
    if(exp<=1){
        return 1;
    }
    return base * power(base, exp-1);
}
console.log(power(5, 5));