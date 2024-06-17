const encoder = new TextEncoder();
let msg = "Hey my name is hacker!";
let secret = encoder.encode(msg);
console.log(secret.join("-"));
// console.log(secret);
const decoder = new TextDecoder();
console.log(decoder.decode(secret));
let msg_back = secret.join("-");
let compare = msg_back.split("-").map(i=>parseInt(i));
console.log(compare);


console.log("__filename : "+ __filename);
console.log("__dirname : "+ __dirname);


let url = new URL('https://www.geeksforgeeks.org/node-js-global-objects/?ref=lbp')
console.log(url);

let contents = "Hello There!";
const buffer = Buffer.from(contents , 'utf8');
console.log(buffer.toJSON());

let decodeBuffer = Buffer.from(compare);
console.log(decodeBuffer);
console.log(decodeBuffer.toString('utf-8'));