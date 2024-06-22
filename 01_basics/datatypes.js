"use strict" //treat all JS code as newer version
/*
Using 'use strict' in JavaScript does not treat all JavaScript code as "new code" per se, but it does enforce stricter parsing and error handling on your code, which can make it behave more like modern JavaScript. Here are some aspects of how 'use strict' makes your code align more closely with modern JavaScript practices:
*/

//alert("hello") //we are using node js not browser

//JS original documentation tc39/ecmaScript and preferebly we can also study through MDN

let name = "Ayush"
let age = 18
let isLoggedin = false

//number
//bigInt
//string ==> we can use " " or ' '
//boolean ==> true/false
//null ==> standalone value
//undefined ==> value is not assigned yet
//symbol==> unique

//object

console.log(typeof "Ayush" ) //The typeof operator in JavaScript is used to determine the type of a given variable or expression.
console.log(typeof age)
console.log(typeof null) //output is object
console.log (typeof undefined) //output is undefined