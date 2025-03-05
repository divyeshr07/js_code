//primitiv datatype

// 7 types : string,number,booleran,null,undefind,symbol,bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id =Symbol('123')
const anotherId=Symbol('123')

// console.log(id===anotherId);

const bigNumber = 211007070204n


// reference(non primitiv)

//array,objects,functions 

const heros  = ["manoj0","rohan","dilip"];
let myObj = {
    name: "divyesh",
    age: 22,
}

// const myFunctions = function(){ 
//         console.log("hello word");
// }

// console.log(typeof bigNumber);
// console.log(typeof outSideTemp);



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//stack (primitive), heap (non primitive)

let myCode = "javaScrite"

let myProject = myCode
myProject = "html"

console.log(myCode);
console.log(myProject);

let userOne = {
    email: "divyesh2107@gmail.com",
    upi: "mhjvfhc"
}

let userTwo = userOne
userTwo.email = "rudu0707@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
