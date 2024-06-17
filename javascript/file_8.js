//sort method
//ASCII value
//char : ASCII value


const array= [10,9,900,5,800,4000,7];
array.sort();
console.log(array);
//!it will not give the correct order as in this method js convert the items of integer into a string , then as per the ASCII value it sorts the values!//

// if we want to sort the values in ascending order we have to use compare function
const compare=(a,b)=>{
  return a-b;
}
array.sort(compare); //take a call-back function
console.log(array);

array.sort((a,b) => {
  return a - b; //for assending order
})
console.log(array);

array.sort((a,b) => a - b); //for assending order

console.log(array);

array.sort((a,b) => b - a); //for dessending order

console.log(array);

//? if a-b ---> is positive then b , a 
//? if a-b ---> is Negitive then a , b 

const goods=[
  {userId:1,pName:1,userBuy:10000},
  {userId:2,pName:2,userBuy:100},
  {userId:3,pName:3,userBuy:90000},
  {userId:4,pName:4,userBuy:5000},
  {userId:5,pName:5,userBuy:500},
]

const stor=goods.slice(0).sort((a,b) => a.userBuy - b.userBuy); //LowToHigh ka ek alag copy bana liya
console.log(stor);
console.log(goods);


//find method
const pets=["lion","dog","cat","rabit"]

function lttr3(a){
  return a.length===3;
}
// const ch=lttr3("dog")
// console.log(ch)

console.log(pets.find(lttr3))


const people=[
  {user_name:"shubham",user_id:23},
  {user_name:"shubh",user_id:89},
  {user_name:"shubhi",user_id:69},
  {user_name:"shushant",user_id:55},
  {user_name:"sara",user_id:34},
]

// console.log(people.find((a) =>a.user_id==69))

const vart = people.find((name) =>{
  return name.user_id===69;
})
console.log(vart)

//every method

const all_ele_ment=[2,4,6,8,10]
const ref = all_ele_ment.every((element)=>{
  return element%2==0;
})
console.log(ref)

//call-back function -----> true / fase
//every ----> true / false
//agar sare element array ka even huya tohi true hoyega vrna false//

  const prod_demo_items = [
    { product_id: 12, product_name: "iphone", price: 100000 },
    { product_id: 25, product_name: "1Plus", price: 80000 },
    { product_id: 90, product_name: "Nokia", price: 1000 },
    { product_id: 87, product_name: "Realme-Narzo", price: 15000 },
  ];

  const pic = prod_demo_items.every((item) => {
    return item.price < 200000;
  });

  if (pic === true) {
    function get(a) {
      if (a.price < 150000) {
        return a.product_name;
      }
      return null; // Add a default return value in case the condition is not met.
    }

    // Iterate over the array and call the get function for each item
    const result = prod_demo_items.map((item) => get(item)).filter((item) => item !== null);

    console.log("Below 1,50,000/-Rs products available are:");
    for(let res of result){
      console.log(res);
    }
  }


//some method
const arri = [1, 3, 7, 9, 11];
const ref1 = arri.some((element) => {
  return element % 2 === 0;
});
console.log(ref1);

//yani ek bhi number even huya to true ho jyega output

//fill method
//value , start , end

myPersonalArray=new Array(10).fill("Jay Shree Ram");
console.log(myPersonalArray);

const my__num__Array =[1,2,3,4,5,6,7,8,9,10];
my__num__Array.fill("Jay Jay Shree Ram",2,5);
console.log(my__num__Array);

//splice method
//start , delete , insert

const arr = ["apple", "banana", "cherry", "orange", "mango"];
//delete
// arr.splice(2, 1);
// console.log(arr);
console.log("---------------------")
//insert
// arr.splice(1, 0, "coko", "dragonFood");
// console.log(arr);
console.log("---------------------")
//delete and insert both
arr.splice(2, 1, "watermelon", "grapes");
console.log(arr);


const employ_data = [{name:"Vishal",age:21,salary:25000},
                     {name:"Ramesh",age:26,salary:56000},
                     {name:"Deepika",age:19,salary:15000},
                     {name:"Kajal",age:23,salary:35000}]
employ_data.sort((a,b) => {
  return a.name.localeCompare(b.name);
})
//?sort by their first occurance of the word in their letter
console.log(employ_data);

const date=new Date();
console.log(date);

const bucket=[1,2,3,4,4,5,5,6,7,7,9];
const set_of_bucket= new Set(bucket);
console.log(set_of_bucket);
//Remember set is also iterable like array
for(let item of set_of_bucket){
  console.log(item);
}
//!We can define index and length here but we get length
let length_0f_bucket = 0;
for(let length of set_of_bucket){
  length_0f_bucket++;
}
console.log(`length:${length_0f_bucket}`);


practice1=['A','B','C'];
practice2=[...practice1,'D']
practice1.push('E')
console.log(practice1);
console.log(practice2);

