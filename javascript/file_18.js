'use strict';

function myPromise(){
    return new Promise(function(resolve, reject){
        let bool = false;
        setTimeout(()=>{
            if(bool){
                resolve();
            }else{
                reject();
            }
        },2000)
    })
}
myPromise().then(()=>{
    console.log("Accepted");
}).catch(()=>{
    console.log("Rejected");
});

//Promise.resolve
//Promise chaining
const promise = Promise.resolve(1);
promise.then((int)=>{
    if(typeof int === 'number'){
        console.log(int);
    }else{
        throw new Error(`${int} is not a number`);
    }
}).catch((err)=>{
    console.log(err);
})

const new_promise = () => {
    return new Promise((resolve, reject) =>{
        resolve("foo");
    });
}

new_promise().then((val)=>{
    console.log(val);
    val += "bar";
    return val;
}).then((val)=>{
    console.log(val);
    val += "baaz";
    return val;
}).then((val)=>{
    console.log(val);
})




