let n = 10;
let total = 0;
let j = 0;
while (j <= 10) {
    total += j;
    j++;
}
console.log(total);

// for loops in java script

// for(let i=0;i <= 9;i++){
//     console.log(i);
// }
// if you use let u can't access i out of the loop and 
//so use var to access

for (var i = 0; i <= 9; i++) {
    console.log(i);
}
console.log(`Value of i is ${i}`);

//also we can declare i=0 in out side
// let i=0
// for(;i <= 9;i++){
//     console.log(i);
// }
// console.log(`Value of i is ${i}`);
// also

//sum of n natural num by for loop
let total_sum = 0;
for (let i = 0; i <= 10; i++) {
    total_sum += i;
}
console.log(total_sum);

//break key word
total_num = 0;
for (start_num_with = 1; start_num_with <= 10; start_num_with++) {
    if (start_num_with === 4) {
        break;
    } else {
        console.log(start_num_with);
    }

}
//continue keyword
k = 0;
for (k = 1; k <= 10; k++) {
    if (k === 4) {
        console.log("Skiped")
        continue;
    } else {
        console.log(k);
    }
}
//do while loop
initial_value = 100;
do {
    console.log(initial_value);
    initial_value++;
} while (initial_value <= 6) {
    console.log("Loop completed!!");
    console.log("value of initial_value is ", initial_value);

}//always execute the loop first then check the condition

//array indexing
let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
console.log(fruits[0]);
fruits[1] = "banana";
console.log(fruits);
console.log(typeof fruits);
console.log(Array.isArray(fruits));
//Array.isArray() method is used to determine whether it is array or not
var obj = {};
console.log(typeof obj);
console.log(Array.isArray(obj));//here is the example
//Array shift & unshift
//push method

fruits.push("Banana");
console.log(fruits);//push method insert a value at the end of an array
//pop method
let l = fruits.pop();
console.log(fruits);//always remove the end value of an array
let remove_item = l;
console.log(`Removed fruit is ${remove_item}`);
console.log(fruits);

//now unshift
fruits.unshift("watermelon");//this method add item top of the array
console.log(fruits);
//now shift
fruits.shift();
console.log(fruits);//remove first item from the array
