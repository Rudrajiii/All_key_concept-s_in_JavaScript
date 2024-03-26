"use strict"
//prmitive vs reference data type
let num1=8;
let num2=num1;
console.log("value of num1 id",num1);
console.log("value of num2 id",num2);
num1++;
console.log("After incrementing the value of num1")
console.log(num1);
console.log(num2);

//reference types
//array
let array1=["i1","i2"];
let array2=array1;
console.log("array1",array1);
console.log("array2",array2);
array1.push("i3");
console.log("After pushing a element ")
console.log(array1);
console.log(array2);

let ar1=["he","she"];
// let ar2=["he","she"];
// let ar2=ar1.slice(0).concat("we","us");
// let ar2=[].concat(ar1,'we','us');
let ver=['we','us'];
let ar2=[...ar1,...ver];//this method is called as spread method
ar1.push("we");
console.log(ar1===ar2);
console.log(ar1);
console.log(ar2);
let fruit=["mango","Apple","lichi","Banana"];
//by while loops
// let i=0
// let fruits_2=[];
// while( i<fruit.length){
//     fruits_2.push((fruit[i].toUpperCase()));
//     i++;
// }
// console.log(fruits_2);


//by for loops
let fruits_2=[];
for(let i=0;i < fruit.length ; i++){
    fruits_2.push((fruit[i].toUpperCase()));
}
console.log(fruits_2);

//const method
const fruit_01=["Apple","Mango"];
fruit_01.push("Orange");
let store=[...fruit_01,...fruits_2];
console.log(store);

//for of loop in Array
const fru=["apple","Mango","orange","watermalon"];
const lis=[...store];
for(let fr of fru){
    lis.push(fr.toUpperCase());
}
console.log(lis);

//for in loop in Array
const fr=["app","man","ora"];
const faka=[...lis];//basically it gives the indexes of a list items
for(let f in fr){
    faka.push(fr[f].toUpperCase());

}
console.log(faka);

const my_arr=["100$","200$","550$","700$","800$"];
// let vari_1=my_arr[0];
// let vari_2=my_arr[1];
// console.log("1st value of my_arr is",vari_1);
// console.log("2nd value of my_arr is",vari_2);

//unique way in java script
let [i,k,l,...append_new_array]=my_arr;
let sl=my_arr.slice(3);
console.log("1st value of my_arr is",i);
console.log("2nd value of my_arr is",k);
console.log("2nd value of my_arr is",l);
console.log("2nd value of my_arr is",append_new_array);
console.log("2nd value of my_arr is",sl);

const vart=["j","l","k"];
console.log(vart[0]);
console.log(vart.slice(1));
