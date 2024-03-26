"use strict";
console.log("Hello world");

let variable_js_01 = 'Rudra ';
console.log(variable_js_01.length); //space will also be included in length
console.log(variable_js_01[variable_js_01.length - 3]);
console.log(variable_js_01[2]);
console.log(variable_js_01);
//to access the last element in a variable we use " length - 1 "
var argument_js = 100;
console.log(argument_js);

argument_js = 200;
console.log(argument_js);
let variable_js = "   Hey   ";
console.log(variable_js.length);
console.log(variable_js);
let new_string = variable_js.trim();//trim() method is used for removing the space around string
console.log(new_string);
console.log(new_string.length);
//to remove the spaces we can also store the new value inside that old variable that we had created
variable_js = variable_js.trim();
console.log(variable_js);
console.log(variable_js.length);
console.log(variable_js.toUpperCase()); //change string lower case to upper case
console.log(variable_js.toLowerCase()); //change uper lower case to lower case

let new_var = "Rohan";//string slicing
new_var = new_var.slice(0, 3);
console.log(new_var);

let test_js = variable_js_01.slice(0, 4);
console.log(test_js);
test_js = variable_js_01.slice(1, 4);
console.log(test_js);

//types of operators
//datatypes(primitive Data types)
//string
//number
//bulians
//undefined
//null
//Bignit
//symbol

let age = 19;
let first_name_1 = "Rudra Saha";

console.log(typeof age);
console.log(typeof first_name_1);
//convert number to string
age = age + "";
console.log(typeof age);

//convert string to number
let my_str = +("20");
// let my_str= "20";
// my_str=+my_str
console.log(typeof my_str);

let my_age = 10;
my_age = String(my_age);
console.log(typeof my_age);

my_age = "10";
my_age = Number(my_age);
console.log(typeof my_age);

//string Concatination
let str1 = "Rudra";
let str2 = "Saha";

var full_Name = str1 + " " + str2;
console.log(full_Name);

let num1 = "10";
let num2 = "10";

// var total_Number=Number(num1)+Number(num2);
var total_Number = +(num1) + +(num2);
console.log(total_Number);

//template string
let my_age_1 = 19;
let my_name = "Rudra";

// let about_me="My name is : "+ my_name +" and my age is : "+my_age_1;//but this type of code takes some time to write so use the template string
let about_me = `My name is : ${my_name} and my age is ${my_age_1}`;
console.log(about_me)
