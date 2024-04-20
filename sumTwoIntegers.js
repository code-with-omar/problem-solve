// Given two integers a and b, return the sum of the two integers without using the operators + and -.



// Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = 2, b = 3
// Output: 5
var getSum = function (a, b) {
    if (b > 0) {
        for (let i = 1; i <= b; i++) {
            a++;
        }
    } else if (b < 0) {
        for (let i = 1; i <= -b; i++) {
            a--;
        }
    }
    return a;
};

console.log(getSum(-12, -8));
console.log(getSum(-12, 8));
