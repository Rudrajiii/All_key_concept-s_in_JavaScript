"use strict"


//important array methods

//forEach
//map
//filter
//reduce

const numbers = [2,4,6,8];

// function multiply2(number, index){
//     console.log("index is",index);
//     console.log(`${number} X 2 = ${number*2}`);
// }
// multiply2(numbers[0],0);

//accessing element by for loop;
// for(let iter=0;iter<numbers.length;iter++){
//   multiply2(numbers[iter],iter);
// }

// numbers.forEach(multiply2);
//!for each method , haam forEach k andaar ek pura function bhi rakh sakte hai;

numbers.forEach(function(number, index){
  console.log("index is",index);
  console.log(`${number} X 2 = ${number*2}`);
})

const users = [
  {firstName:"Rudra",age:22},
  {firstName:"Rudrani",age:23},
  {firstName:"Rudransh",age:24},
  {firstName:"Rudra pratap",age:25},
  
]

// users.forEach((user) =>{
//   console.log(user.firstName);
// })

for(let user of users){
  console.log(user.firstName);

}

const [u1,u2,u3,u4] = users;
// console.log(`${u1['firstName'] }is age of ${u1.age}`);

users.forEach((user) =>{
  // console.log(u1.firstName);
  console.log(`${user['firstName'] } is age of ${user.age}`);
})

//map method

const data = [1,2,3,4];

// const sqr = function (num){
//   return num**2; //*callback function
// }
// const stor_sqr=data.map(sqr);
// console.log(stor_sqr,ind);
const stor_sqr=data.map(function(num,ind){
  return `${num**2} has index ${ind}`;
});
console.log(stor_sqr);

const names =[
  {first__name:"Bidipta", age:19},
  {first__name:"Sonakshi", age:17},
  {first__name:"Gargi", age:18},
]
const stor__all__the__names=names.map((fn)=>{
  return fn.first__name;
})
console.log(stor__all__the__names);

//filter method
const all__the__num=[1,2,3,4,5];

const callback__even__num = function(n){
  return n%2===0;
}
const stor__the__even__num = all__the__num.filter(callback__even__num);
console.log(stor__the__even__num);

//reduce method

const array__with__num=[1,2,3,4,5,10];

//aim : sum of all the numbers in array

const sum = array__with__num.reduce((accumulator,currentValue)=>{
  return accumulator+currentValue;
},100); //ye jo 100 ha vo initial value hai accumulator ka so app ese initialize kr ste ho//
console.log(sum);

//accumulator ,  currentValue , return
//1                   2            3
//3                   3            6
//6                   4            10
//10                  5            15
//15                  10           25

const user__cart=[
  {product__no:1,product__name:"Mobile",price:12000},
  {product__no:2,product__name:"Laptop",price:22000},
  {product__no:3,product__name:"T.V",price:42000},
]

const totalAmount=user__cart.reduce((totalPrice,currentProduct)=>{
  return totalPrice + currentProduct.price;
},0);

console.log(totalAmount);

//totalprice  currentproduct  return
//  0               {}=1200     12000
//12000             22000       34000
//34000             42000       76000

