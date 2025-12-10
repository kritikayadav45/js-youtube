// singleton
// object literals


// symbols
const mySym = Symbol("key1")  // symbol datatype

const JsUser = {
    [mySym] : "mykey1",  // for symbol data type we have to use square brackets 
    name: "Kritika",
    "full name" : "Kritika Yadav",
    age : 20,
    location :"London",
    email : "Kritika@gmail.com",
    isLogged : false,
    lastDays:["Mon", "Sat"]

}

console.log(JsUser.name); // through this we cant access full name
console.log(JsUser["name"]);  // we take name as string bcz behind everyone is track acc to string
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

// to freeze so that no one can change

// Object.freeze(JsUser);

// functions to greet1
JsUser.greeting = function(){
    console.log("Hello!!");
}
console.log(JsUser.greeting());

// functions to greet2
JsUser.greeting2 = function(){
    console.log(`hello ,${this.name}`);
}
console.log(JsUser.greeting2());