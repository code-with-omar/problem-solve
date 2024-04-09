// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.



// Example 1:

// Input: n = 16
// Output: true
// Example 2:

// Input: n = 5
// Output: false
// Example 3:

// Input: n = 1
// Output: true

var isPowerOfFour = function (n) {
    // Check if n is greater than 0 and if it's a power of three
    return n > 0 && Math.log10(n) / Math.log10(4) % 1 === 0;
};

console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(1)); 