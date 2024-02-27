
function countBs(str,ch){
    let counter = 0;
    for (let index = 0; index < str.length; index++) {
        if(str[index]==ch){
            counter++;
        }
        
    }
    return counter;
}
console.log(countBs("BBBhanb","B"))