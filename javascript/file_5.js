"use strict"
//all about object 
const key = "Gmail"
const My_data = {
    Name: "Rudra",
    age: 19,
    "my Hobbies": ["Coding", "Drawing", "Watching Movies"],
    Place: "Kolkata"

}
console.log(My_data);
console.log(My_data["my Hobbies"]);
let stor = My_data["my Hobbies"];
const new_array = [];
for (let values of stor) {

    new_array.push(values.toUpperCase());
}
console.log(new_array);
for (let data of new_array) {
    console.log(data);
}
let i = 0;
while (i < new_array.length) {
    // for (let data of new_array)  
    console.log(`${i + 1} is ${new_array[i]}`);
    i++;

}

My_data.sex = 'male';
console.log(My_data["sex"]);
//ese bhi likh skte hai

My_data["sex"] = 'female';
console.log(My_data)

My_data[key] = "rudrasaha@gmail.com";
console.log(My_data)
// alert("welcome!! from Rudra");


//to itrate the items of a object we use two known method 
//using "for in loop"
//using "Object.keys" method
for (let i in My_data) {
    console.log(`${i} : ${My_data[i]}`);
}
console.log(Object.keys(My_data));//return a array of "key" value pair
console.log(typeof Object.keys(My_data));
const val = Array.isArray(Object.keys(My_data));
console.log(val);

for (let key of Object.keys(My_data)) {
    console.log(`${key} : ${My_data[key]}`);
}


const key1 = "joy";
const key2 = "Roy";


const value1 = "yoj";
const value2 = "yoR";

//computed properties
const obj = {
    [key1]: value1,
    [key2]: value2
}
console.log(obj);

// another way to assign some values in object  

// const obj={};
// obj[key1]=value1;
// obj[key2]=value2;
// console.log(obj)

const newobj = { ...["item1", "item2"] };
console.log(newobj);


for (let value in newobj) {
    console.log(value, " ", newobj[value]);
}
//methods of spread operator
// const ob = [..."abc"];
// console.log(ob);//but the int values are not iterable!!

const ob1 = {
    key01: "v01",
    key02: "v02"
}
const ob2 = {
    key03: "v03",
    key04: "v04"
}
const new_object = { ...ob1, ...ob2, key89: 'v89' };//this is how we add a new key value pair//
console.log(new_object);

const ob = [...'rudra'];
const x_x_x = new Set(ob);
console.log(x_x_x);


