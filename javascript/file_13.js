"use strict";
//! new keyword
function createUser (name, password){
    //* this = {};
    this.name = name;
    this.password = password;
}
createUser.prototype.info = function(){
    console.log(`${this.name} - ${this.password}`);
}
const save = new createUser("Rudra","****1aX");
console.log(save)
save.info();


function check (Name,age){
    const emp=Object.create(check.prototype);
    // const emp={};
    emp.Name = Name;
    emp.age = age;    
    return emp;

}
check.prototype.about = function(){
    console.log(`${this.Name} - ${this.age}`);
};

const print = check("abc", 12);
console.log(print);
print.about();
// emp.prototype.about(); //!ERROR:


// **function check (Name,age){
// **    this.Name = Name;
// **    this.age = age;    
// **   return this;

//**}
//** check.prototype.about = function(){
//**    console.log(`${this.Name} - ${this.age}`);
//**};

//** const printt = new check("abc", 12);
//** console.log(printt);
//** print.about();

//***new keyword */
//empty object this = {};
//return this;
//const UserInfo =Object.create(infodata.prototype); ka kaam kra hain

//**Constructor function */
function Infodata(firstName, LastName, email, address,age){
    
    this.firstName = firstName;
    this.LastName = LastName;
    this.email = email;
    this.address = address;
    this.age = age;
    return this;

}
Infodata.prototype.about = function(){
    console.log(`${this.firstName}${this.LastName}
                 ${this.email},
                 ${this.address},
                 ${this.age}`)
}
Infodata.prototype.is18 =  function(){
    if(this.age >= 18){
        return "Yes 18+";
    }else{
        return "No below 18";
    }
}
Infodata.prototype.sing =  function(){
    console.log("kisi din muskurakar ye tamasha haam bhi dekhengee...!")
}
console.log(Infodata.prototype)
const firstUser =  new Infodata('Riya','Roy','RoyFamily20@gmail.com','AbC-colony',20);
const SecondUser = new Infodata('sujit','sinha','sinhaFamily10@gmail.com','C-colony',29);
const ThirdUser =  new Infodata('Vishal','Yadav','YadavFamily20@gmail.com','A-colony',17);
const forthUser =  new Infodata('Aditya','Rastogi','RastogiFamily20@gmail.com','b-colony',22);
const fifthUser =  new Infodata('Rudra','Saha','SahaFamily20@gmail.com','Ab-colony',19);
const sixthUser =  new Infodata('Sakshi','Saxena','SaxenaFamily20@gmail.com','AC-colony',30);
firstUser.about();
SecondUser.about();
ThirdUser.about();
forthUser.about();
fifthUser.about();
sixthUser.about();
firstUser.sing();

for(let key in firstUser){
    // console.log(key);
    if(firstUser.hasOwnProperty(key)){
        console.log(key);
    }
}
