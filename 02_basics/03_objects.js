

const mys1 = Symbol("key1")

const jsUser = {
    name: "divyesh",
    "full name" : "divyesh nakum",
    [mys1] : "mykey1",
    age:20,
    location: "surat",
    email: "dnakum2107@gmail.com",
    isLoggendIn: false,
    lastLoginDays:["monday","sanday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mys1]);

jsUser.email = "divyesh2107@yhoo.com"
Object.freeze(jsUser)
console.log(jsUser);




