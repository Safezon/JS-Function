var name='safe';
let lname='zone';
///ไม่สามารถแก้ได้
const age = 10;
console.log(name,lname,age)

if(true){
    var a1=true;
}
if(true){
    let a2='hohoho';
    console.log(a2)
}
console.log(a1)
//console.log(a2)  ///error เพราะlet

var name ='B1';
console.log(name,lname,age)//ซ้ำกัน

console.log('load from index.js')

//function
function functionName(Koto){
    console.log('หิว ข้าว' +' '+ Koto);
}
functionName(name)
//function
const functionA = (Koto) => {
    console.log('ชาบู ม่ะ' +' '+ Koto);
}
functionA(name)




//function
function functionF(Koto){
    //f -> C 
    const f = 37;
    var c = (f-32)/1.8000
    console.log("f -> C =>"+' '+c)//2.77
    //C -> f
    var y = (c*1.8000)+32
     console.log("C -> f => "+' '+ y)//37
}
functionF()