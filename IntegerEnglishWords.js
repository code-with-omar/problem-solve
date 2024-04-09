// Convert a non-negative integer num to its English words representation.

 

// Example 1:

// Input: num = 123
// Output: "One Hundred Twenty Three"
// Example 2:

// Input: num = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"
// Example 3:

// Input: num = 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
const lessThanTwenty = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
    "Seventeen", "Eighteen", "Nineteen"
];

const tens = [
    "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
];

const thousands = ["", "Thousand", "Million", "Billion"];

function numberToWords(num) {
    if (num === 0) return "Zero";

    let result = "";

    for (let i = 0; num > 0; ++i) {
        if (num % 1000 !== 0) {
            result = helper(num % 1000) + thousands[i] + " " + result;
        }
        num = Math.floor(num / 1000);
    }

    return result.trim();
}

function helper(num) {
    if (num === 0) return "";
    else if (num < 20) return lessThanTwenty[num] + " ";
    else if (num < 100) return tens[Math.floor(num / 10)] + " " + helper(num % 10);
    else return lessThanTwenty[Math.floor(num / 100)] + " Hundred " + helper(num % 100);
}

// Example usage:
console.log(numberToWords(123)); // Output: "One Hundred Twenty Three"
console.log(numberToWords(12345)); // Output: "Twelve Thousand Three Hundred Forty Five"
console.log(numberToWords(12345678)); // Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
