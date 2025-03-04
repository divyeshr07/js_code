//primitiv datatype

// 7 types : string,number,booleran,null,undefind,symbol,bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id =Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

const bigNumber = 211007070204n


// reference(non primitiv)

//array,objects,functions 

const heros  = ["manoj0","rohan","dilip"];
let myObj = {
    name: "divyesh",
    age: 22,
}

const myFunctions = function(){ 
        console.log("hello word");
}

console.log(typeof bigNumber);
console.log(typeof outSideTemp);

