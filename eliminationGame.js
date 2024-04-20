// You have a list arr of all integers in the range [1, n] sorted in a strictly increasing order. Apply the following algorithm on arr:

// Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
// Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
// Keep repeating the steps again, alternating left to right and right to left, until a single number remains.
// Given the integer n, return the last number that remains in arr
// Example 1:

// Input: n = 9
// Output: 6
// Explanation:
// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr = [2, 4, 6, 8]
// arr = [2, 6]
// arr = [6]
// Example 2:

// Input: n = 1
// Output: 1

var lastRemaining = function (n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i);
    }
    while (array.length > 1) {
        let newArray = [];
        for (let i = 1; i < array.length; i += 2) {
            newArray.push(array[i]);
        }
        array = newArray.reverse();
    }
    return array[0];
};

console.log(lastRemaining(9)); // Output should be 6

// var lastRemaining = function(n) {
//     if (n === 1) {
//         return 1;
//     } else {
//         // After removing every other number, the remaining numbers are double the size
//         // and start from 2. When counting from the right, the pattern is the same,
//         // but the starting number depends on whether n is even or odd.
//         return 2 * (Math.floor(n / 2) + 1 - lastRemaining(Math.floor(n / 2)));
//     }
// };

// console.log(lastRemaining(9)); // Output: 6
// console.log(lastRemaining(1)); // Output: 1

