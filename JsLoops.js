// types of loops in JS  =>while , DO while , For , For In ,  For of ,For each.


var a=45;
while(a<=100){
    console.log("While loop");
    a=a+1;
}


do{
    console.log("do while loop");
}
while(a==45){
    a=a+1;
}




var s=26;q=14;
for(i=0;i<=3;i=i+1){
    if(s>q){
    console.log("for loop");
    }
    else{
        console.log("q is greater");
    }

}





//making Object in js
const stationary={
    name:"pen",
    color:"blue",
    price:"30",
}
for(let keys in stationary){
    console.log(stationary[keys]);
}




// =>1st 
var arr=[2,8,0,12,10,1];
console.log("printing elements of array");
for(let key of arr)
{
    //console.log("printing elements of array");
   console.log(key);
}
// =>2nd
var arr=[2,8,0,12,10,1];

for(let index of arr)
{
   console.log("printing index of array");
   console.log(index);
}