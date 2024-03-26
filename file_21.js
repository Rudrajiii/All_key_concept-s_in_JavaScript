//fetch
const product_api = "https://jsonplaceholder.typicode.com/posts";

fetch(product_api)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
});

const walkDog = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            let walkDogResponse = true;
                if(walkDogResponse){
                    resolve("WE WALK THE DOG 🐕");
                }else{
                    reject(new Error("WE DIDN'T WALK THE DOG"));
                }
        },1500)
    })
}
const cleanKitchen = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            let cleanKitchenResponse = true;
                if(cleanKitchenResponse){
                    resolve("CLEANING THE KITCHEN");
                }else{
                    reject(new Error("THE KITCHEN AIN'T CLEANED"));
                }
        },1000)
    });
}
const removeTrash = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            let removeTrashResponse = true;
                if(removeTrashResponse){
                    resolve("REMOVE TRASH");
                }else{
                    reject(new Error("YOU DIDN'T  MOVE THE TRASHS"));
                }
        },500)
    });
}

walkDog().then((res)=>{
    console.log(res);
    return cleanKitchen();
}).then((re)=>{
    console.log(re);
    return removeTrash();
}).then((r)=>{
    console.log(r);
    console.log("All Done!");
}).catch((err)=>{
    console.log(err);
});

// Synchronous operation
const synchronousOperation = () => {
    return new Promise((resolve, reject) => {
      // This code block is synchronous
      const result = 10 + 20;
      resolve(result);
    });
  };
  
  console.log('Start');
  synchronousOperation()
    .then(data => {
      console.log('Result:', data); // This will be executed immediately after 'Start'
    })
    .catch(error => {
      console.error('Error:', error);
    });
  console.log('End');
  