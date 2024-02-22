const num = 8
const star = "#";
const space = " ";
let str = ""
for(let i = 0; i<num;i++){
    str +="\n";
    for(let j=0;j<num/2;j++){
        if(i%2==0){
           str +=  space + star;     
        }else{
            str += star + space;
        }
    }
}
console.log(str);