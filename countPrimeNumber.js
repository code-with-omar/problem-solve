// Given an integer n, return the number of prime numbers that are strictly less than n.
// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0
var countPrimes = function (n) {
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
               return false
            }
        }
        return true;
    }
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
};
console.log(countPrimes(1000));
// var countPrimes = function(n) {
//     const primes = new Array(n).fill(true); // Initialize all numbers as prime
//     primes[0] = primes[1] = false; // 0 and 1 are not prime numbers
    
//     // Iterate over numbers starting from 2 up to the square root of n
//     for (let i = 2; i * i < n; i++) {
//         if (primes[i]) { // If i is prime
//             // Mark all multiples of i as not prime
//             for (let j = i * i; j < n; j += i) {
//                 primes[j] = false;
//             }
//         }
//     }
    
//     // Count the number of prime numbers
//     let count = 0;
//     for (let i = 2; i < n; i++) {
//         if (primes[i]) {
//             count++;
//         }
//     }
    
//     return count;
// };

// console.log(countPrimes(499979)); // Output: 41538
