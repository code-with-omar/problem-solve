// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
var addBinary = function(a, b) {
    let sum=parseInt(a,2)+parseInt(b,2);
    return sum.toString(2)
};
console.log(addBinary('11','1'));
console.log(addBinary('1010','1011'));
