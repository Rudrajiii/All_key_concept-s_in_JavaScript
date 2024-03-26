const my_bucket = [
    "coffee",
    "water",
    "milk",
    "vegitable",
    "salt",
    "rice"
];
const my_promise = new Promise((resolve,reject)=>{
if(my_bucket.includes('water') && my_bucket.includes('vegitable') &&
   my_bucket.includes('salt') && my_bucket.includes('rice')){
       resolve("Fried Rice");
   }
else{
    reject("Something is missing");
}
});
my_promise.then(
//first call back
(receiving_green_responce)=>{
    console.log("Your "+receiving_green_responce+" is ready.");
}
).catch((error)=>{
    console.error(error);
 });


