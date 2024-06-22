const accountId = 14453
let accountEmail = "mailkrayush@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" //Declaration with initialization
let accountState; //Declaration without initialization
//variables can even be declared without using const, var and let but we should avoid using such way

// accountId = 5 not allowed as earlier declared as const

/*
prefer not to use var because of issue in block scope and functional scope
*/
accountEmail = "agsd@gs.com"
accountPassword = "353234"
accountCity = "Mumbai" 
console.log(accountId); //the use of semicolon depends on oneself in JS
console.table([accountId , accountEmail, accountPassword, accountCity]) 
console.table([accountId , accountEmail, accountPassword, accountCity, accountState])
//prints all at once in a tabular structure with indices