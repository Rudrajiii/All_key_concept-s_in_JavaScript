//!Optional chaining
const user ={
    name:"Harshit",
    // Address:{HomeTown:"Dinhata"},
}
console.log(user?.name);
console.log(user?.Address?.HomeTown);

//!Method [Very Important Stuff]
//? One Way
// const person = {
//     firstName:"Anurag Sinha",
//     age:21,
//     about:function(){
//         console.log(`His name is ${this.firstName} and age is ${this.age}`)
//     }
// }
// person.about()

//? Another way
function myInfo(){
    console.log(`His name is ${this.firstName} and age is ${this.age}`)
}
const person1 = {
    firstName:"Anurag Sinha",
    age:21,
    about:myInfo,
}
const person2 = {
    firstName:"Aniket Sinha",
    age:19,
    about:myInfo,
}
const person3 = {
    firstName:"Rachit Sinha",
    age:18,
    about:myInfo,
}
person1.about()
person2.about()
person3.about()

function display(hobby,favCelebrety){
    console.log(`Student is ${this.studentName} and his id is ${this.studentId}
hobby: ${hobby} favCelebrety: ${favCelebrety}`)
}
const data_table1 = {
    studentId:101,
    studentName:'Rudra Saha',
}
const data_table2 = {
    studentId:102,
    studentName:'Anmol Sharma',
}
// data_table1.aboutFunc.call(data_table2,'Coding','Selena Gomez');
display.call(data_table1,'Coding','Selena Gomez'); //call method
display.apply(data_table2,['Coding','Selena Gomez']); //apply method
const save=display.bind(data_table2,['Coding','Selena Gomez']); //bind method //it always returns an function
save();

                 

