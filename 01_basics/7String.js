//strings can be denoted both with single and double qoutes
const name = "Ayush"
const repoCount = 50
console.log(name + repoCount + " value") //not a good way to concatnate things

//better to use backticks

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('Cap-tain')
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4))
console.log(gameName.indexOf('t'));
const newString = gameName.substring(0,4)
console.log(newString)
const anotherString = gameName.slice(-4, 5) //The slice(-4, 5) operation starts at the character "t" (4th character from the end) and ends before the character at index 5, which gives us the substring "ta".
console.log(anotherString)
const newStringOne = "   Ayush  "
console.log(newStringOne);
console.log(newStringOne.trim()); //The trim method in JavaScript removes whitespace from both ends of a string.
const url = "https://Ayush.com/ayush%20kumar"
console.log(url.replace('%20', '-'))
console.log(gameName.split('-')) //The split function in JavaScript is used to divide a string into an array of substrings based on a specified separator.