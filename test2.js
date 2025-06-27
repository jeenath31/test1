let string="aabbbccc";

let result=[];
for(let i=0;i<string.length;i++){
    let count=0;
    for(let j=i+1;j<string.length;j++){
        if (string[i]==string[j]){
            count++
        }
    }
    result.push(count)
}

let str=null
result.forEach( (i)=>  {if(i>str){str=i}})
    console.log(string[result.indexOf(str)])


let a=[1,2,3]
let b=[2,3,4,5,6]
let uni=[]


for(let i=0;i<a.length;i++){
    for(let j=0;j<b.length;j++){
        if(a[i]!=b[j]){
          uni.push(a[i])
          break
    }
}
}
for(let i=0;i<b.length;i++){
    for(let j=0;j<uni.length;j++){
        if(b[i]!=uni[j]){
            if(!uni.includes(b[i])){
               uni.push(b[i])
            }
         
          break
    }
    else{
        continue
    }
}
}
console.log(uni)


let input="JavaScript is powerful".split(" ")

let size=""
for (let i=0 ; i<input.length;i++){
    if (input[i].length>size.length){
        size=input[i]
    }
}
console.log(size)




function chain(a){
    let num=a
    return{
    add : function(b){
        num+=b;
        return{
            subtract:function(c){
                num-=c
                return{
                    result:function(){
                        return num
                    }
                }
            }
        }
    }
}
}

let res=chain(4).add(5).subtract(1).result()
console.log(res)

// host()
// let host=()=>{
//     console.log("hosting is create")
// }

host()

function host(){
    console.log("this is in regular function")
}
