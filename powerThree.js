// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.
// Example 1:

// Input: n = 27
// Output: true
// Explanation: 27 = 33
// Example 2:
// Input: n = 0
// Output: false
// Explanation: There is no x where 3x = 0.
// Example 3:
// Input: n = -1
// Output: false
// Explanation: There is no x where 3x = (-1).
var isPowerOfThree = function (n) {
    // Check if n is greater than 0 and if it's a power of three
    return n > 0 && Math.log10(n) / Math.log10(3) % 1 === 0;
};

console.log(isPowerOfThree(1));  // Output: true
console.log(isPowerOfThree(16)); // Output: false
console.log(isPowerOfThree(3));  // Output: true
