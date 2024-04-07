// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.



// Example 1:

// Input: n = 3, k = 3
// Output: "213"
// Example 2:

// Input: n = 4, k = 9
// Output: "2314"
// Example 3:

Input: n = 3, k = 1
Output: "123"
var getPermutation = function (n, k) {
    let array = ''
    let factorial = 1
    for (i = 1; i <= n; i++) {
        array += i;
        factorial *= i;
    }

    console.log(array)
    console.log(factorial)

};
getPermutation(3, 3)
// function getPermutation(n, k) {
//     let result = '';
//     let factorial = 1;
//     const nums = [];

//     // Fill nums array with numbers from 1 to n
//     for (let i = 1; i <= n; i++) {
//         nums.push(i);
//         factorial *= i;
//     }

//     k--; // Adjust k to 0-based index
//     for (let i = 0; i < n; i++) {
//         factorial /= n - i;
//         const index = Math.floor(k / factorial);
//         result += nums[index];
//         nums.splice(index, 1);
//         k %= factorial;
//     }

//     return result;
// }

// // Example usage:
// console.log(getPermutation(3, 3)); // Output: "213"
// console.log(getPermutation(4, 9)); // Output: "2314"
// console.log(getPermutation(3, 1)); // Output: "123"
