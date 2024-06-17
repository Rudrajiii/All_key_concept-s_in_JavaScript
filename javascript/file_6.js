"use strict"

//!object destructuring//
const year = "saal"
const band = {
  band_name: "lil velu",
  fam_song: "ram siya ram",
  ano_fam_song: "get low"
};
band[year] = 1980;
// const band_name=band.band_name;
// const fam_song=band.fam_song;

// console.log(band_name,fam_song);

const { band_name, fam_song, ...rest_items } = band;

console.log(band_name, fam_song, rest_items["saal"]);
console.log(band);

//!object inside array//

const users = [
  { user_id: 1, F_name: "Roshan", sex: "male" },
  { user_id: 2, F_name: "Rudrani", sex: "female" },
  { user_id: 3, F_name: "harshit", sex: "male" },
];

const [user1, user2, user3] = users;
console.log(user1["user_id"]);//!data scrapings from object
console.log(user1.F_name);
//!nested destructuring
const [{ F_name: nameOfowner, user_id }, , { sex }] = users;
// console.log(users);
console.log(nameOfowner);
console.log(user_id);
console.log(sex);
// console.log(F_name);


//finally functions in "js"

// function repeat() {
// console.log("Happy Birth Day!!!");
//     return "Happy Birth Day!!!"
// };
// console.log(repeat());

//here is a example of arrow function

const repeat = () => {
  // console.log("Happy Birth Day!!!");
  return "Happy Birth Day!!!"
};
console.log(repeat());

function add_2_num(a, b) {
  console.log(a + b);
};
(add_2_num(20, 30));


function is_even(h) {
  if (h % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd")
  }
}
(is_even(23));

function find_target(array, target) {
  for (let j = 0; j < array.length; j++) {
    if (array[j] === target) {
      return j;
    }
  }
  return -1
}
const array = [1, 3, 9, 10];
console.log(find_target(array, 9));


//!hoisting 
const hello = () => {
  console.log("hellow world")
}
hello();

// console.log(helo);
// var helo="hlo world!!!";

//!output mein undefined ayega but var k jagah agar let ya const use kroge too error ayega 

//!function inside function
function app() {
  const myFuture = () => {
    console.log("hello from my future");
  }
  const addTwo_num = (n1, n2) => {
    return n1 + n2;
  }
  const mul = (n1, n2) => n1 * n2;
  console.log("inside app");
  myFuture();
  console.log(addTwo_num(2, 3));
  console.log(mul(2, 3));

}
app();

//!lexical scope
function myApp() {
  const myVar = "value1";
  function myFunc() {
    //! const myVar="value69";
    const myFunc4 = () => {
      console.log(`inside My function and value is ${myVar}`);
    }
    myFunc4();
  }
  console.log(myVar);
  myFunc();
}
myApp();

//* block scope vs function scope

//?let and const are block scope
//?var is function scope

{
  let firstName = "Rudra";
  console.log(firstName);
  //ye alag block hai
}
//!bss ek chij yad rakhna, let or const k case mein block k bahar rehkr value ko access ni kr skte ,but var k case mein kr skte ho ye //
{
  let firstName = "Harshit";
  console.log(firstName);
  //ye bhi alag block hai
}

let firstName = "Riya";
console.log(firstName);
//or ye bhi global block hai or alag hai

const myName = () => {
  if (true) {
    let firstName = "Bishal";
    console.log(firstName);
  }
  // console.log(firstName);
}
myName();

//!default parameter

const addTwo = (a, b = 0) => {
  return a + b; //*here b=0 jo set kiya vohi default parameter kehlata hai
}

const ans = addTwo(6);
console.log(ans);

//! rest parameter

function my_funct(a, b, ...c) {
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`);
}
my_funct(3, 4, 5, 6, 7, 8, 9, 10);

//TODO: c mein jo output aya vo ek Array hai

const addAll = (...nums) => {
  let total = 0;
  for (let num of nums) {
    total = total + num;
  } return total;
}
const answer = addAll(10, 10, 10);
console.log(answer);
// -------------------------------------------------------------------
const person = {
  firstName: "Rudra",
  gender: "male",
}
function get_data(son) {//!parameter 
  console.log(son.firstName);
}
get_data(person)//todo argument

//!this is knows as parameter destructering
get_data = ({ firstName, gender }) => {
  console.log(firstName);
  console.log(gender);
}
get_data(person)

//!call back functions

function myFuncPro(name) {
  console.log("Inside the function");
  console.log(`My name is ${name}`)
}
function myFunc(callBack) {
  console.log("hlo there bhai")
  callBack("Rudra");
}
myFunc(myFuncPro)

//!function returning function
const firstFunc = () => {
  const SecondFunc = () => {
    console.log("Hellow");
  }
  return SecondFunc;
}
const ans_0 = firstFunc();
ans_0();


const let_var = function () {
  return () => {
    return "Hello Bhai haha!!";
  }
}
const ans_2 = let_var();
console.log(ans_2());




