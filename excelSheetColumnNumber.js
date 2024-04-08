// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...


// Example 1:

// Input: columnTitle = "A"
// Output: 1
// Example 2:

// Input: columnTitle = "AB"
// Output: 28
// Example 3:

// Input: columnTitle = "ZY"
// Output: 701

var titleToNumber = function (columnTitle) {
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        result *= 26;
        result += columnTitle[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1
    }
    return result;
};
console.log(titleToNumber("AB"));
console.log(titleToNumber("ZY"));