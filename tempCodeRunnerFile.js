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

console.log(lastRemaining(9));