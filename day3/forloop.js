/* for loop */
var A=[10,20,30,40,50];
for(var i=0;i<5;i++);
console.log(A);



/* for in loop*/
var person={
    firstname:"Infant",
    lastname:"Y",
    age:25
};
for(let x in person){
    console.log(x+":"+person[x])
}
/*for each()loop*/
var vehicle=["car","bike","cycle"];
vehicle.forEach(function1);
function function1(currentvalue,index){
    console.log("index in array is:"+index+"::value is:"+currentvalue);
}
