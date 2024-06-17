"use strict";
const fetch_item = 'https://jsonplaceholder.typicode.com/posts';
function promise_url(method , requested_url){
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,requested_url);
        xhr.onload = () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            }else{
                reject(new Error("SOMETHING WENT WRONG_1"));
            }
        }
        xhr.onerror = () => {
            reject(new Error("SOMETHING WENT WRONG_2"));
        }
        xhr.send();
    })
}
promise_url('GET',fetch_item)
.then((response)=>{
    // console.log(typeof response); //*String //*json === response*//
    response = JSON.parse(response);
    // console.log(typeof response); //*Object
    return response;
}).then((data)=>{
    // console.log(data[3]); 
    let user_id = data[89].id;
    return user_id;
}).then((product_info)=>{
    const new_url = `${fetch_item}/${product_info}`;
    return promise_url('GET',new_url);
}).then((show_product_info)=>{
    let str2json = JSON.parse(show_product_info);
    console.log(str2json);
}).catch((error)=>{
    console.log(error);
});
