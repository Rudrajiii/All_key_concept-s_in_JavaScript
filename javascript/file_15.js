"use strict";
function doubt(a,b){
    this.a=a;
    this.b=b;
    return this.a+this.b;
};
doubt.prototype.add = function(){
    return this.a+this.b;
}
const get = new doubt(2,3);
console.log(get.add());


class person {
    constructor(fn , ln , age ,food ,speed){
        this.fn = fn;
        this.ln = ln;
        this.age = age;
        this.food = food;
        this.speed = speed;
    }
    get fullName(){
        return `${this.fn} ${this.ln}`
    }
    set fullName(fullName){
        const [fn, ln] = fullName.split(" ");
        this.fn = fn;
        this.ln = ln;
    }
    eat(){
        console.log(`${this.fullName} eats ${this.food}`);
    }
    run(){
        return `${this.fullName} is running at ${this.speed} m/s`;
    };

}

const save = new person("Ahishek","vaisistha",20,'mango',60);
// console.log(save.fullName());
console.log(save.fn);
console.log(save.ln);
console.log(save.age);
console.log(save.fullName);
// save.setName("Rudra","saha");
// console.log(save.fullName);
// save.fn="abc";
// save.ln="xyz.com";
// console.log(save.fullName);
save.fullName = "rudra saha"
console.log(save.fullName);
console.log(save.run());
save.eat();

