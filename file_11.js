"use strict";
const data_table1 = {
    studentId:101,
    studentName:'Rudra Saha',
    about(){
        console.log(`${this.studentId} - ${this.studentName}`);
    }
}
//!donot do this mistake
// data_table1.about();

const save = data_table1.about.bind(data_table1);
save();

const user1 = {
    firstName:'Rudra',
    LastName:'Saha',
    email:'rudra@gmail.com',
    age:19,
    address:'Divine Nursing Home, dinhata , coochbehar',
    about:function(){
        console.log(`${this.firstName}${this.LastName}
                     ${this.email},
                     ${this.address},
                     ${this.age}`)
    },
    is18:function(){
        if(this.age >= 18){
            return "Yes 18+";
        }else{
            return "No below 18";
        }
    }

}
const aboutUser = user1.about.bind(user1);
// console.log(aboutUser);
aboutUser();
// user1.about();
const w = user1.is18();
console.log(w);

//lets make it in a better approach
//function
//make an empty object
//add key value pairs
//return the function

function Newfunc(firstName, LastName, email, address,age){
    const modUser ={};
    modUser.firstName = firstName;
    modUser.LastName = LastName;
    modUser.email = email;
    modUser.address = address;
    modUser.age = age;
    modUser.about = function(){
        console.log(`${this.firstName}${this.LastName}
                     ${this.email},
                     ${this.address},
                     ${this.age}`)
    };
    modUser.is18 = function(){
        if(this.age >= 18){
            return "Yes 18+";
        }else{
            return "No below 18";
        }
    };
    return modUser;

}
const user__1 = Newfunc('Ayush','Singh','ayush564@gmail.com','xyz-colony',19);
console.log(user__1); //***it's an object*** 
user__1.about();

console.log(user__1['age']);
const is18 = user__1.is18();
console.log(is18);


const rootelement ={
    
    about : function(){
        console.log(`${this.firstName}${this.LastName}
                     ${this.email},
                     ${this.address},
                     ${this.age}`)
    },
    is18 : function(){
        if(this.age >= 18){
            return "Yes 18+";
        }else{
            return "No below 18";
        }
    },
    sing: function(){
        console.log("kisi din muskurakar ye tamasha haam bhi dekhengee...!")
    }
}
function infodata(firstName, LastName, email, address,age){
    const UserInfo =Object.create(rootelement);
    UserInfo.firstName = firstName;
    UserInfo.LastName = LastName;
    UserInfo.email = email;
    UserInfo.address = address;
    UserInfo.age = age;
    return UserInfo;

}
const firstUser = infodata('Riya','Roy','RoyFamily20@gmail.com','AbC-colony',20);
firstUser.about();
firstUser.sing();


//**concept of __proto__ / [[prototype]]*/

const obj1={
    key1:"value1",
    key2:"value2",
}
const obj2 = Object.create(obj1); //**returns an empty object */
obj2.key3 = "value3";
console.log(obj2.key2);
