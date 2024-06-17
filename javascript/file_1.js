"use strict";
// hello java script
console.log("hello world.2");
var first_name = "Rudra";
console.log(first_name);
first_name = "Harshit";
console.log(first_name);

var value_0 = 10;
console.log(value_0);
console.log(value_0 * 2);
console.log(value_0 / 2);
console.log(value_0 + 2);
console.log(value_0 - 2);


const prod_demo_items = [
    { product_id: 12, product_name: "iphone", price: 100000 },
    { product_id: 25, product_name: "1Plus", price: 80000 },
    { product_id: 90, product_name: "Nokia", price: 1000 },
    { product_id: 87, product_name: "Realme-Narzo", price: 15000 },
];
let user_budget = +prompt("Enter your budget:");
const pic = prod_demo_items.some((item) => {
    return item.price < user_budget;
});
let value = +prompt("Enter the price:")
const priceValue = value;
if (pic === true) {
    function get(a) {
        if (a.price < priceValue) {
            return a.product_name;
        }
        return null; // Add a default return value in case the condition is not met.
    }
    const filterisation = prod_demo_items.map((item) => {
        return get(item);
    });
    const fetchData = filterisation.filter((item) => {
        return item !== null;
    });
    // console.log(fetchData);
    console.log(`Below ${priceValue}/-Rs products available are:`);
    for (let data of fetchData) {
        console.log(data);
    }
} else {
    console.log("Aukaat se bahar ha bhai🥲")
}


