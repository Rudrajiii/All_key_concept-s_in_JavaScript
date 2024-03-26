const product_api = "https://jsonplaceholder.typicode.com/posts";

async function getPromise(){
    let result = await fetch(product_api);
    let data = await result.json();
    return data;
    
}
getPromise().then(r => console.log(r));

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
            let removeTrashResponse = false;
                if(removeTrashResponse){
                    resolve("REMOVE TRASH");
                }else{
                    reject(new Error("YOU DIDN'T  MOVE THE TRASHSES"));
                }
        },500)
    });
}

async function display_results(){
    try{
        let walkDogRes = await walkDog();
        console.log(walkDogRes);
        let cleanKitchenRes = await cleanKitchen();
        console.log(cleanKitchenRes);
        let removeTrashResponse = await removeTrash();
        console.log(removeTrashResponse);
    }
    catch(err){
        console.error(err.message);
    }
}
display_results();

