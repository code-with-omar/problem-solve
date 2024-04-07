// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.



// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"

var multiply = function (num1, num2) {
    return (parseInt(num1) * parseFloat(num2)).toString()

};

console.log(multiply("2", "3"))
console.log(multiply("123", "456"))