'use strict';

class Infodata{
    constructor(firstName, LastName, email, address,age){
        console.log("constructor called");
        this.firstName = firstName;
        this.LastName = LastName;
        this.email = email;
        this.address = address;
        this.age = age;

       
    }
    about(){
        console.log(`${this.firstName}${this.LastName}
        ${this.email},
        ${this.address},
        ${this.age}`)
    };
    is18(){
        if(this.age >= 18){
            return "Yes 18+";
        }else{
            return "No below 18";
        }
    };
    sing(){
        console.log("kisi din muskurakar ye tamasha haam bhi dekhengee...!")
    };

}
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
console.log(firstUser.firstName)

let number = [1,2,3];
console.log(number);
console.log(Object.getPrototypeOf(Number));
const sp = new Array(1,2,3);
console.log(Array.prototype);

class Animal{
    constructor(animalName,animalAge,food){
        this.animalName = animalName;
        this.animalAge = animalAge;
        this.food = food;
    }
    eat(){
        console.log(`${this.animalName} eats ${this.food}`);
    }
}
const access = new Animal ('Lion',20,'Mango');
console.log(access);
access.eat();

class cat extends Animal{
    constructor(animalName,animalAge,food,speed){
        super(animalName,animalAge,food);
        this.speed = speed;
};
    run(){
        return `${this.animalName} is running at ${this.speed} m/s`;
    };


}
const notherOne = new cat ('billa',4,'chuha',20);
console.log(notherOne);
console.log(notherOne.run());
notherOne.eat();

