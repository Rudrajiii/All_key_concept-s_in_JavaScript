// cart [] => Array of items to purchase
//showDetailsApi : 1) will fetch each item from the cart 
//and will will check in the database if it exists
// will return it's information in a array of object 
//otherwise it will return "out of stock"
const shopDb = [
    { "shirt": { "price": 1000, "Available": true, "Brand": "a1" } },
    { "lahenga": { "price": 5600, "Available": true, "Brand": "a*" } },
    { "kurta": { "price": 2500, "Available": true, "Brand": "a2" } },
    { "dhoti": { "price": 100, "Available": true, "Brand": "a1" } }
];


const cart = ["sari" , "kurta", "lahenga" ,"shirt"];

function getCart(cart) {
    const fetchRes = [];
    if (cart.length < 1) return "No item is found.";
    for(let i of cart){
        const items = shopDb.filter((item) => item[i]);
        if(items.length > 0){
            if(items[0][i]['Available'] === true){
                fetchRes.push(items[0]);
            }
        }else{
            fetchRes.push("Out of stock");
        }
    }
    return fetchRes;
}
let getDetails = getCart(cart);
console.log(getDetails);