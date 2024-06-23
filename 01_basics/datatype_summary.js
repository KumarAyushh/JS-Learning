//Primitive --> 7 types : String, Number, Boolean, Null(means empty not zero), undefined, Symbol, BigInt

//Refererence (Non - Primitive) --> Array, Objects, Functions
//Master Objects and Browser Web events

//Here are the points summarizing why JavaScript is considered a dynamic language:

//Dynamic Typing: Variables can hold values of different types at different times.
//Runtime Object Construction: Objects can be created and modified at runtime, with properties added or removed.
//Function Objects: Functions are first-class objects and can be assigned to variables, passed as arguments, and returned from other functions.
//Prototypal Inheritance: Objects can inherit from other objects, and this inheritance can be modified at runtime.
//Dynamic Functions: Functions can be created dynamically using the Function constructor or eval().
//Event Handling and Callbacks: Event-driven architecture allows functions (callbacks) to be executed in response to events.

const score = 100
const scoreVal = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //holds undefined as of now 

//symbol

const id = Symbol('123')//return type we get is also a datatype which is called as int 
const anotherId = Symbol('123')

console.log(id === anotherId)
console.log(id == anotherId)

const bigNumber  = 343384358538434739479n //just putting n beside the number makes it convert to bigInt

//Intro to Arrays, Objects and Function

const heroes = [24, 53, 33]
let myObj = {
    name: "Ayush",
    age: 22,
}
const myFunction = function()
{
    console.log("Hello World");
}

//in JavaScript, it is true that the datatype of every non-primitive is considered an object. This includes arrays, dates, regular expressions, and more. However, functions in JavaScript are a bit special; they are indeed objects, but they also have a specific type distinction as "function objects."