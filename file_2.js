"use strict";
let firstname; //undefined
console.log(typeof firstname);
//though you can do it for string but for constant you cant
// const Name;
// console.log(typeof Name) //Error will occur
firstname = 'Rudra';
console.log(typeof firstname, firstname);

let my_variable = null;  //null
console.log(my_variable);
console.log(typeof my_variable);//it's a bug in java script
my_variable = "Harshit";
console.log(my_variable, typeof my_variable);

//BigInt
let my_number = 123;
console.log(my_number);
console.log(Number.MAX_SAFE_INTEGER);
//9007199254740991 it is the max range of a number in js
//so to store large number than it we use BigInt function
my_number = BigInt(122222222222222222222222222222222222222222);
console.log(my_number);//we can apply it in small numbers also
my_number = BigInt(12);
console.log(my_number);
let your_number = 122n;//it is also a bigint
console.log(my_number + your_number)

//booleans
let num = 7;
let num_next = "7";
console.log(num > num_next);

// == vs ===
console.log(num == num_next);//so == only checks the numerical value not Datatype
console.log(num === num_next);//but === checks the datatype
//!= vs !==
console.log(num != num_next);
console.log(num !== num_next);//now it will chcek type also

// falsy values
// false
// ""
// 0
// null
// undefined
//if else condition 
let my_age = 18;

if (my_age >= 18) {
    console.log("user is adult");
} else {
    console.log("user is not adult");
}

let number = 15;
if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

let first_user_name = "";
// let first_user_name=false;
// let first_user_name=0;
// let first_user_name=null;
// let first_user_name;


if (first_user_name) {
    console.log(first_user_name);
} else {
    console.log("Empty hai bhai");
}

//ternary operator
// let age= 12;
// let drink;

// if (age>=5){
//     drink="Coffee";

// }else{
//     drink="Milk";
// }
// console.log(drink);//but it is lengthy so
//use ternary oprtr
let age = 19;
let drink = age >= 5 ? "coffee" : "milk";
console.log(drink);

//and or operator

let firstName = "Rudra";
let agee = 1;

if (firstName[0] === "R" && agee > 18) {
    console.log("Name starts with R and age is greater than 18")
}//when both condition need to be true then and operator is used

if (firstName[0] === "R" || agee > 18) {
    console.log("Name starts with R and age is greater than 18")
} else {
    console.log("inside else")
}//when atleast one condition is true then we use or operator

//todo Game
// let Winning_Number=19;
// let user_guess= +prompt("Guess a Number");

// if(user_guess === Winning_Number){
//     console.log("You are Right!!!");
// }else{
//     if(user_guess < Winning_Number){
//         console.log("too low!!!");
//     }else{
//         console.log("too high!!!");
//     }
// }

//now else if statement
let temp_In_Degree = 16;

if (temp_In_Degree < 0) {
    console.log("Extremely cold outside!!!");
} else if (temp_In_Degree < 16) {
    console.log("It is cold out side");
} else if (temp_In_Degree < 25) {
    console.log("Wheather is OK!!");
} else if (temp_In_Degree < 35) {
    console.log("Let's go for a shower");
} else if (temp_In_Degree < 45) {
    console.log("Turn on ac");
} else if (temp_In_Degree < 60) {
    console.log("Extremely Hot outside!!!");
} else {
    console.log("Not Bearable!!");
}


//switch case statement
let Day = 2;
switch (Day) {
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thrusday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
        console.log("Invalid Day");
        break;
}

//While loops in js
let i = 0; //1 2 3 4
while (i <= 10) {
    console.log(i);
    i++;
}
console.log(`Current value of i is ${i}`);
console.log("out of loop");

let n = 10;
// let total=0;
// let j=0;
// while(j <= 10){
//     total+=j;
//     j++;
// }
// console.log(total);
let total1 = (n * (n + 1)) / 2;
console.log(total1)
