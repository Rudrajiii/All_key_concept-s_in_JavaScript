"use strict";

console.log("Script Start");
const asyncScript = setTimeout(() => {
    console.log("I allways execute later !!!");
}, 5000);
for (let i = 1; i <= 100; i++) {
    console.log(".....");
}
console.log("async script id:" + asyncScript);
console.log("Script End");

// setInterval(()=>{
//     console.log(Math.random()*1000);
// },2000)

function func1(callBackRecived) {
    console.log("Function is doing task 1");
    callBackRecived();
}
function func2() {
    console.log("Function is doing task 2");
}
func1(func2);
var getTwoNumAndAdd = (n1, n2, onSuccess, onError) => {
    console.log(n1, n2);
    if (typeof n1 === "number" && typeof n2 === "number"){
        onSuccess(n1, n2)
    }else{
        onError();
    }
}
getTwoNumAndAdd(4, 5,
    (num1, num2) => {
        console.log(num1 + num2)},
    () => {
       console.log("Wrong Data Type")
    });

