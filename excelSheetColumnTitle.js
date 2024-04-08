// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

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

// Input: columnNumber = 1
// Output: "A"
// Example 2:

// Input: columnNumber = 28
// Output: "AB"
// Example 3:

// Input: columnNumber = 701
// Output: "ZY"
// var convertToTitle = function (columnNumber) {
//     let columnName = '';
//     while (columnNumber > 0) {
//         let rem = columnNumber % 26;
//         if (rem == 0) {
//             columnName += 'Z';
//             columnNumber = Math.floor(columnNumber / 26) - 1
//         }
//         else // If remainder is non-zero
//         {
//             columnName += (String.fromCharCode((rem - 1) + 'A'.charCodeAt(0)));
//             columnNumber = Math.floor(columnNumber / 26);
//         }
//     }
//     console.log(columnName)
// };
// convertToTitle(28)
// convertToTitle(701)

var convertToTitle = function(columnNumber) {
    let columnName = '';
    while (columnNumber > 0) {
        let rem = columnNumber % 26;
        if (rem === 0) {
            columnName = 'Z' + columnName;
            columnNumber = Math.floor(columnNumber / 26) - 1;
        } else {
            columnName = String.fromCharCode((rem - 1) + 'A'.charCodeAt(0)) + columnName;
            columnNumber = Math.floor(columnNumber / 26);
        }
    }
    return columnName;
};

console.log(convertToTitle(28)); // Output: "AB"
console.log(convertToTitle(701)); // Output: "ZY"
