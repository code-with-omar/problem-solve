// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21


// Constraints:

// -231 <= x <= 231 - 1
var reverse = function(x) {
    const MAX_INT = Math.pow(2, 31) - 1;
    const MIN_INT = -Math.pow(2, 31);
    
    let reversed = 0;
    while (x !== 0) {
        const digit = x % 10;
        x = Math.trunc(x / 10);
        
        // Check for overflow before adding the next digit
        if (reversed > Math.trunc(MAX_INT / 10) || (reversed === Math.trunc(MAX_INT / 10) && digit > 7)) {
            return 0; // Overflow
        }
        if (reversed < Math.trunc(MIN_INT / 10) || (reversed === Math.trunc(MIN_INT / 10) && digit < -8)) {
            return 0; // Overflow
        }
        
        reversed = reversed * 10 + digit;
    }
    
    return reversed;
};

console.log(reverse(123));   // Output: 321
console.log(reverse(-123));  // Output: -321
console.log(reverse(120));   // Output: 21
