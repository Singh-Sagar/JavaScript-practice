// how to call rest parameters with an array

function max(...num){
    let max_no = -Infinity;
    for(let i of num){
        if(i>max_no) max_no = i;
    }
    return max_no;
}
const arrNum = [1, 2, 3, 4, 5, 100, 123];
console.log(max(...arrNum));