// console.log("2" > 1)
// console.log("02" > 1)

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)

//console.log(undefined > 0)
//console.log(undefined == 0)
//console.log(undefined <= 0);

//normally avoid these type of comparisons.

//In JavaScript, when comparing null with a number using relational operators (>, <, >=, <=), null is converted to a number. Specifically, null is converted to 0.

//The == operator in JavaScript checks for equality with type coercion. However, null is only loosely equal to undefined and not to any other value.

//null is not coerced to a number when using ==.
//null == 0 is evaluated as false because null is only equal to undefined.
//Therefore, null == 0 is false

//When using the >= operator, JavaScript performs a numeric comparison, converting null to 0.

//null is converted to 0.
//The comparison 0 >= 0 is evaluated.
//Since 0 is indeed greater than or equal to 0, the result is true.

console.log("3" == 3) //== (Equality Operator): Converts operands to the same type before comparing. In the example, "3" == 3 results in true because "3" is converted to 3.
console.log("3" === 3) //=== (Strict Equality Operator): Does not perform type coercion. In the example, "3" === 3 results in false because the types (string and number) are different.

/*Type coercion in JavaScript is the process of converting a value from one type to another, such as from a string to a number or from a number to a boolean. This conversion can happen implicitly (automatically by JavaScript) or explicitly (manually by the developer). Type coercion plays a significant role in how JavaScript handles operations and comparisons between different types.*/

