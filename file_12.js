"use strict";
//***prototype in js */
function hello(){
    console.log("hello");
}

// javascript function ===> function+Object
// console.log(hello.name);
// you can add your own properties 
hello.myOwnProperty = "very unique value"; 
console.log(hello.myOwnProperty);

// name property -> tells function name;
// function provides more usefull properties.

console.log(hello.prototype); // {}

// only functions provide prototype property

hello.prototype.abc="abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "ulala ulala ulala";
}
console.log(hello.prototype.sing());

// const rootelement ={
    
//     about : function(){
//         console.log(`${this.firstName}${this.LastName}
//                      ${this.email},
//                      ${this.address},
//                      ${this.age}`)
//     },
//     is18 : function(){
//         if(this.age >= 18){
//             return "Yes 18+";
//         }else{
//             return "No below 18";
//         }
//     },
//     sing: function(){
//         console.log("kisi din muskurakar ye tamasha haam bhi dekhengee...!")
//     }
// }
function infodata(firstName, LastName, email, address,age){
    const UserInfo =Object.create(infodata.prototype);
    UserInfo.firstName = firstName;
    UserInfo.LastName = LastName;
    UserInfo.email = email;
    UserInfo.address = address;
    UserInfo.age = age;
    return UserInfo;

}
infodata.prototype.about = function(){
    console.log(`${this.firstName}${this.LastName}
                 ${this.email},
                 ${this.address},
                 ${this.age}`)
}
infodata.prototype.is18 =  function(){
    if(this.age >= 18){
        return "Yes 18+";
    }else{
        return "No below 18";
    }
}
infodata.prototype.sing =  function(){
    console.log("kisi din muskurakar ye tamasha haam bhi dekhengee...!")
}
console.log(infodata.prototype)
const firstUser = infodata('Riya','Roy','RoyFamily20@gmail.com','AbC-colony',20);
const SecondUser = infodata('sujit','sinha','sinhaFamily10@gmail.com','C-colony',29);
const ThirdsUser = infodata('Vishal','Yadav','YadavFamily20@gmail.com','A-colony',17);
const forthUser = infodata('Aditya','Rastogi','RastogiFamily20@gmail.com','b-colony',22);
const fifthUser = infodata('Rudra','Saha','SahaFamily20@gmail.com','Ab-colony',19);
const sixthUser = infodata('Sakshi','Saxena','SaxenaFamily20@gmail.com','AC-colony',30);
firstUser.about();
SecondUser.about();
ThirdsUser.about();
forthUser.about();
fifthUser.about();
sixthUser.about();
firstUser.sing();



