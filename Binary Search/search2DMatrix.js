var searchMatrix = function (matrix, target) {
    for (let element of matrix) {
        for (let i of element) {
            if (i === target) return true;
        }
    }
    return false
};
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]],3))
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],13))