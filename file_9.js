'use strict'

//Order is not guarunteed
//unique items only(No duplicate items)
const items =["python","C#","JavaScript"];
const sets= new Set();
sets.add("Java");
sets.add("C++");
sets.add("GoLang");
sets.add(items);
console.log(sets);
for(let set of sets){
    console.log(set);
    if (sets.has(items)){
        for(let item of items){
            console.log(item);
        }
    }
}
//?Maps 
//?maps is an iterable


//!stored data in ordered fashion
//!stor key value pair like object
//!duplicate keys are not allowed like objects


//*objects only have string or symbol as key

//todo in map you can use anything as key
//todo like a Array,number,string

//object literal
//key --> string
//key --> symbol
const data = {
    firstName:"Akash",
    age:8,
    1:"one",
}
console.log(data.firstName);
console.log(data['firstName']);
console.log(data[1]);
for(let key in data){
    console.log(typeof key , key);
}

//!Map {Key Value Pairs}
const person = new Map();
person.set("name","Riya");
person.set("age",9);
person.set(1,"one");
person.set([100,200,300],"1sho2sho3sho");
person.set({name:"iron"},"dict");
// person.set("name","Priya"); //!duplicate key can not be made
console.log(person);
console.log(person.get('name'));
console.log(person.keys());

for(let keys of person.keys()){
    console.log(keys,typeof keys);
}

const obj={
    key:1,
    value:"one",
}
for(let iter of Object.keys(obj)){
    console.log(iter,obj[iter]);
}

for(let [key,value] of person){
    // console.log(key,Array.isArray(key));
    console.log(key,value);

}
const box = new Map([["name","Eshita"],["age",19]]);
console.log(box);

const table = {
    id:100,
    firstName:"Vishal",
}
const extraInfo = new Map();
extraInfo.set(table,{age:18,gender:"male"});
console.log(extraInfo);
console.log(table.id);
console.log(extraInfo.get(table).gender);


//clone using object.assign
//* method-1 spread operator
//* method-2 Object.assign

const void1={
    id:101,
    buyHistory:"20$",
};
// const void2={...void1};//!spread operator
const void2=Object.assign({},void1)//!Object.assign
void1.userName="Rahul";
console.log(void1);
console.log(void2);


