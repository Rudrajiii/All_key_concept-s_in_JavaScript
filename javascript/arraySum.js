const dataBox = ['elephant', 'cat', 'lion', 'tiger', 'zebra', 'penguin', 'snake'];

var empty = [];
let smallestLengthObject = dataBox[0];

for (let i = 1; i < dataBox.length; i++) {
    const currentObject = dataBox[i];
    if (currentObject.length < smallestLengthObject.length) {
        smallestLengthObject = currentObject;
    } else if (currentObject.length == smallestLengthObject.length) {
        smallestLengthObject = currentObject;
        empty.push(smallestLengthObject)
    }
}
console.log("Smallest length object:", smallestLengthObject);
console.log(empty);


dataBox.sort((a, b) => {
    return a.length - b.length;
});
console.log(dataBox[0]);
//most tricky one
let data = dataBox.reduce((shortestWord, currentWord) => { return shortestWord < currentWord ? shortestWord : currentWord })
console.log(data);

const ex = [
    ["Gojo", ["Saitama", "Yuji", ["Baki", "Naruto", ["Kakashi", "Itachi"]]]],
    ["Madara"],
    ["Uchiha"]
];

const stor = ex.flat(Infinity);
console.log(stor);


const names = [
    { first__name: "Bidipta", age: 19 },
    { first__name: "Sonakshi", age: 17 },
    { first__name: "Gargi", age: 18 },
]
const stor_the_data = [];
const res = names.map((fn, index) => {
    stor_the_data.push(`${fn.first__name} : ${index}`);
})
console.log(stor_the_data);


const res1 = names.map((item) => {
    stor_the_data.push({ GirlsName: item.first__name })
});
console.log(stor_the_data);


const res2 = names.map((item, index) => ({ GirlsName: item.first__name, rank: index + 1 }))
console.log(res2);

const nameOf = [
    { Id: 1, name: 'Aysha' },
    { Id: 2, name: 'Ayush' },
    { Id: 3, name: 'Ritik' },
    { Id: 4, name: 'Sunny' },
    { Id: 5, name: 'Vikas' },
    { Id: 6, name: 'Manoj' },
]

const countries = [
    { Id: 10, cName: 'Russia' },
    { Id: 1, cName: 'India' },
    { Id: 50, cName: 'USA' },
    { Id: 2, cName: 'UK' },
    { Id: 4, cName: 'Australia' },
    { Id: 6, cName: 'Japan' },
    { Id: 5, cName: 'korea' },
]

const ans = nameOf.map((item1) =>
    ({ ...item1, ...countries.find((item2) => item1.Id === item2.Id) }));
console.log(ans);

const accessData = ans.map(item => item.cName);
console.log(accessData);
const [u1, u2, u3, u4, u5, u6] = ans;
ans.forEach((each) => {
    console.log(`${each['name']} is from ${each.cName}`);
})


const save = Array.from("hello world");
console.log(save);
const save2 = new Set([1, 2, 3]);
save2;
const s = Array.from(save2);
console.log(s);

const h = Array.from({ length: 5 }, (item, index) => index * 2);
console.log(h);

const final = [1, 2, 3];
console.log(Array.from(final, (it) => it * 2));

const obj = {
    name: "Vishal",
    favAnime: "JJK",
    favFood: "Pizza"
}
Object.seal(obj); //?abb value update kar sakte ho but usko new value assign ni kr sakte
// Object.freeze(obj);  //!freeze method ekbaar use kr liya too object mein loi bhi chij update
obj.name = "Rudra"; //!ya change ni ho sakti ;
obj.gen = 'male';
console.log(obj.name);
console.log(obj.gen);

console.log(obj.hasOwnProperty('name')); //!hasOwnProperty checks whether it exists in the object
//!or not;
console.log(obj.favMovie); //!if exits return the value 
//!if not returns undefined;

console.log(Object.keys(obj)); //!keys method return the keys of the object
console.log(Object.values(obj)); //!values method return the values of the object
console.log(Object.entries(obj)); //!entries method return the key value pair of the object

console.log(Object.getOwnPropertyNames(obj)); //!getOwnPropertyNames method return the keys of the object

console.log(Object.getOwnPropertySymbols(obj)); //!getOwnPropertySymbols method return the symbols of the object
console.log('name' in obj); //!name method return true or false as a value;

const details = Object.entries(obj);
for (let detail of details) {
    // console.log(detail);
    console.log(`${detail[0]} : ${detail[1]}`);

};

const price = 18743563388;

// console.log(Object.is(price,18743563388)); //!return true if match else false;
console.log(Intl.NumberFormat().format(price));

let ruppees = Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
});

console.log(ruppees.format(price));

let usDoller = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
console.log(usDoller.format(price));


//?PadStrat and PadEnd method;
let text = 'help';
console.log(text.padStart(10, 12345678910));

const creditNumber = '167894595876987657546';
const last4digits = creditNumber.slice(-4);
console.log('Last 4 digits----> ' + last4digits);
console.log(last4digits.padStart(creditNumber.length, '*'));

const jk = [1, 2, 3];
console.log(jk.slice(-2));

let para = 'Riko was one of my favorite characters in JJK universe.and Riko was soft hearted, but riko unfortunatized died,by Tojo';
const regex = /riko/ig;
console.log(para.replace(regex, 'Gojo Saturo'));



const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [100, [100, 200], [200, [1, 2], [2, 3]]]
];

const flattenArray = (array) => {
    return array.flatMap((cell) => {
        if (Array.isArray(cell)) {
            return flattenArray(cell);
        } else {
            return cell;
        }
    })
}
const flattenedArray = flattenArray(nestedArrays);
console.log(flattenedArray);


function criss_cross_algo(arr) {
    const n = arr.length;
    const middleIndex = Math.floor(n / 2);
    arr.sort((a, b) => {
        return b - a;
    });
    const result = new Array(n).fill(0);
    result[middleIndex] = arr[0];
    let leftSideMovement = middleIndex - 1;
    let rightSideMovement = middleIndex + 1;

    for (let i = 1; i < n; i += 2) {
        result[leftSideMovement] = arr[i];
        result[rightSideMovement] = arr[i + 1];
        leftSideMovement -= 1;
        rightSideMovement += 1;
    }
    return result;
}

const print = criss_cross_algo([6, 2, 1, 7, 9]);
console.log(print);



let a = [1, 2, 3, 4, 5 ,30,100,90];
let b = [6, 7, 8, 9, 10 ,31,78,87];
let clone_of_a = [...a];
let clone_of_b = [...b];

let c = a.concat(b);
for(let bob = 0 ; bob < a.length ; bob++){
  c.copyWithin(bob,bob+a.length);
  a.length = 0;
  a = c.slice(0,clone_of_b.length);
}
const e = clone_of_a.concat(b);
for(let bob = b.length ; bob < e.length ; bob++){
    e.copyWithin(bob,b.length - bob);
    b.length = 0;
    b = e.slice(0,a.length);
    let popItem = b.pop(clone_of_a.length-1);
    b.unshift(popItem);
}
console.log(`a : ${a}`);
console.log(`b : ${b}`);


const data_of_passwords = {
                            model:"lico2",
                            password:5050 ,
                            person:"admin"
                        }
const getPassword = () => {
    return data_of_passwords.password;
}
const makeSecurity = (func) => {
    const bypassSecurityChecker = () => {
        if(data_of_passwords.person === "admin"){
            return func();
        }
        return `Only admin can access this password`;
    }
    return bypassSecurityChecker();
}

const giveAccess = makeSecurity(getPassword);
console.log(giveAccess);


while (true) {
    let no = +prompt("Enter n:");
    let ask = prompt('y/n?');

    if (ask === 'n') {
        const areaChecker = (no, b = 1, h = 1) => {
            area = no * ((0.5 * b * h * Math.sin(2 * (Math.PI) / no)));
            console.log(area);
        }

        areaChecker(no);
        break;
    }else{
      console.log('Enter again...');
    }
}
//Bubble Sort Algorithm
Array.prototype.myFunc = function() {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 1; i < this.length; i++) {
            if (this[i - 1] > this[i]) {
                let temp = this[i - 1];
                this[i - 1] = this[i];
                this[i] = temp;
                sorted = false; 
            }
        }
    }
    return this;
}

const arr = [8, 1, 5, 9, 2];
let t1 = performance.now();
console.log(arr.myFunc()); 
let t2 = performance.now();
console.log(t2-t1);

function throwError(){
    throw new Error("params required!")
}
function takeArgs(name=throwError()){
    console.log(name);
};
takeArgs();

const setOfData = [
    {
     name:"Vishal",
     Books:["suble art of not giving a f**k","Atomic Habbits"]
    },
    {
     name:"Ritu",
     Books:["Ikigai","Atomic Habbits","Rich Dad Poor Dad"]
    },
    {
     name:"Mithun",
     Books:["physology of money","Harry Potters"]
    }
];
// setOfData.reduce((item1, item2) =>{
//     return [...item1, ...item2.Books];
// },[]);
let ress = setOfData.map((item)=>{
    return [...item.Books];
}).flat(Infinity);
console.log(ress);


